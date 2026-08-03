/*
  서비스 워커 — 비행기 모드/지하철에서도 앱이 뜨게 한다.

  전략 (요청 종류별로 다르다)
    /_next/static, 폰트, 아이콘 …… 캐시 우선. 파일 이름에 해시가 있어 바뀌면 이름도 바뀐다.
    페이지 이동(navigate) ………… 네트워크 우선 → 실패하면 캐시 → 그것도 없으면 /offline.
    RSC(라우터가 부르는 조각) …… 네트워크 우선 → 캐시. 둘 다 없으면 503 을 돌려
                                   Next 라우터가 통째 새로고침(=캐시된 HTML)으로 넘어가게 둔다.
    그 밖의 GET(검색 색인 등) …… stale-while-revalidate.

  "네트워크 우선"이라 온라인일 때는 늘 최신을 본다. 캐시는 어디까지나 안전망이다.

  전체 저장(설정 화면의 버튼)은 postMessage({type:'PRECACHE'}) 로 들어온다.
  아래 CACHE_VERSION 을 올리면 다음 방문 때 옛 캐시를 전부 버린다.
*/

const CACHE_VERSION = 'v1';
const STATIC = `cv-static-${CACHE_VERSION}`; // 해시 붙은 정적 파일
const PAGES = `cv-pages-${CACHE_VERSION}`; // 페이지 HTML
const RSC = `cv-rsc-${CACHE_VERSION}`; // 라우터 조각 (URL 이 HTML 과 겹쳐서 통을 분리)
const DATA = `cv-data-${CACHE_VERSION}`; // 검색 색인 등
const MINE = [STATIC, PAGES, RSC, DATA];

const OFFLINE_URL = '/offline';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((c) => c.addAll([OFFLINE_URL, '/']))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => !MINE.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** 해시가 박혀 있어 내용이 바뀌면 이름도 바뀌는 파일들 */
function isImmutable(url) {
  return (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/_next/image') ||
    /\.(?:woff2?|ttf|otf|png|jpe?g|svg|webp|ico)$/.test(url.pathname)
  );
}

/** Next 라우터가 부르는 조각 요청 */
function isRsc(request, url) {
  return request.headers.get('RSC') === '1' || url.searchParams.has('_rsc');
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  if (hit) return hit;

  const res = await fetch(request);
  if (res.ok) cache.put(request, res.clone());
  return res;
}

async function networkFirst(request, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(request);
    // 리다이렉트/오류 응답까지 캐시하면 오프라인에서 그 오류가 굳는다.
    if (res.ok && res.type === 'basic') cache.put(request, res.clone());
    return res;
  } catch (err) {
    const hit = await cache.match(request, { ignoreSearch: false });
    if (hit) return hit;
    if (fallbackUrl) {
      const off = await cache.match(fallbackUrl);
      if (off) return off;
    }
    throw err;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request);
  const fresh = fetch(request)
    .then((res) => {
      if (res.ok) cache.put(request, res.clone());
      return res;
    })
    .catch(() => hit ?? new Response('', { status: 503, statusText: 'offline' }));
  return hit ?? fresh;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // 남의 도메인은 건드리지 않는다

  if (isImmutable(url)) {
    event.respondWith(cacheFirst(request, STATIC));
    return;
  }

  if (isRsc(request, url)) {
    event.respondWith(
      networkFirst(request, RSC).catch(
        // 라우터가 실패를 보면 통째 새로고침으로 넘어간다. 그쪽엔 캐시된 HTML 이 있다.
        () => new Response('', { status: 503, statusText: 'offline' }),
      ),
    );
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, PAGES, OFFLINE_URL));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, DATA));
});

/* ── 전체 저장 ──────────────────────────────────────────────
   설정 화면에서 URL 목록을 보내면 페이지 HTML 을 하나씩 받아 캐시에 넣고
   진행 상황을 되돌려 준다. 한 번에 몰아 받으면 모바일 네트워크가 막히므로
   동시 6개로 제한한다. */

async function precache(urls, source) {
  const cache = await caches.open(PAGES);
  let done = 0;
  let failed = 0;

  const post = () => source?.postMessage({ type: 'PRECACHE_PROGRESS', done, failed, total: urls.length });

  const queue = urls.slice();
  const worker = async () => {
    for (let next = queue.shift(); next !== undefined; next = queue.shift()) {
      try {
        const res = await fetch(next, { credentials: 'same-origin' });
        if (!res.ok) throw new Error(String(res.status));
        await cache.put(next, res);
        done++;
      } catch {
        failed++;
      }
      post();
    }
  };

  post();
  await Promise.all(Array.from({ length: 6 }, worker));
  source?.postMessage({ type: 'PRECACHE_DONE', done, failed, total: urls.length });
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;

  if (data.type === 'PRECACHE' && Array.isArray(data.urls)) {
    event.waitUntil(precache(data.urls, event.source));
  }

  if (data.type === 'CLEAR') {
    event.waitUntil(
      caches
        .keys()
        .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        .then(() => event.source?.postMessage({ type: 'CLEARED' })),
    );
  }

  if (data.type === 'STATUS') {
    event.waitUntil(
      caches
        .open(PAGES)
        .then((c) => c.keys())
        .then((keys) => event.source?.postMessage({ type: 'STATUS', pages: keys.length })),
    );
  }

  if (data.type === 'SKIP_WAITING') self.skipWaiting();
});
