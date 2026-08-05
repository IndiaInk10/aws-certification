/*
  서비스 워커 — 비행기 모드/지하철에서도 앱이 뜨게 한다.

  전략 (요청 종류별로 다르다)
    /_next/static, 폰트, 아이콘 …… 캐시 우선. 파일 이름에 해시가 있어 바뀌면 이름도 바뀐다.
    /_next/image ……………………… 캐시 우선. 폭(w=…)은 키에서 뺀다 (imageKey).
    페이지 이동(navigate) ………… 네트워크 우선 → 실패하면 캐시 → 그것도 없으면 /offline.
    RSC(라우터가 부르는 조각) …… 네트워크 우선 → 캐시. 둘 다 없으면 네트워크 오류를 내서
                                   Next 라우터가 통째 새로고침(=캐시된 HTML)으로 넘어가게 둔다.
    그 밖의 GET(검색 색인 등) …… stale-while-revalidate.

  "네트워크 우선"이라 온라인일 때는 늘 최신을 본다. 캐시는 어디까지나 안전망이다.

  전체 저장(설정 화면의 버튼)은 postMessage({type:'PRECACHE'}) 로 들어온다.
  아래 CACHE_VERSION 을 올리면 다음 방문 때 옛 캐시를 전부 버린다.
*/

const CACHE_VERSION = 'v5';
const STATIC = `cv-static-${CACHE_VERSION}`; // 해시 붙은 정적 파일
const PAGES = `cv-pages-${CACHE_VERSION}`; // 페이지 HTML
// 라우터 조각 (URL 이 HTML 과 겹쳐서 통을 분리). 이 통만 버전을 따로 단다 — 아래 rscKey 설명대로
// 예전 통에는 종류가 다른 조각이 한 키에 섞여 있어 그대로 쓸 수 없다. 그렇다고 CACHE_VERSION 을
// 통째로 올리면 저장해 둔 HTML·정적 파일까지 함께 날아가 다시 받기 전까지 오프라인이 텅 빈다.
const RSC = `cv-rsc-${CACHE_VERSION}-b`;
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
    /\.(?:woff2?|ttf|otf|png|jpe?g|svg|webp|ico)$/.test(url.pathname)
  );
}

const isImage = (url) => url.pathname === '/_next/image';

/**
 * 이미지 캐시 키.
 *
 * next/image 는 같은 그림을 화면 폭마다 다른 주소로 부른다 (`&w=640`, `&w=1080`, `&w=3840`…).
 * 폭까지 키에 넣으면 저장해 둔 것과 어긋나 오프라인에서 그림이 전부 깨진다 (강의 페이지가
 * 텅 빈 것처럼 보이던 이유). 그래서 **원본 주소(url 파라미터)만으로** 키를 만들고,
 * 어떤 폭을 부르든 저장해 둔 한 장을 돌려준다. 화질만 다를 뿐 그림은 나온다.
 */
function imageKey(url) {
  return new Request(`${url.origin}/_next/image?url=${encodeURIComponent(url.searchParams.get('url') ?? '')}`);
}

/** 이미지 — 저장해 둔 것 우선, 없으면 받아서 저장. 폭이 달라도 같은 키를 쓴다. */
async function imageFirst(request, url) {
  const cache = await caches.open(STATIC);
  const key = imageKey(url);
  const hit = await cache.match(key);
  if (hit) return hit;

  try {
    const res = await fetch(request);
    if (res.ok) cache.put(key, res.clone());
    return res;
  } catch (err) {
    // 최적화본이 없어도 원본(/_next/static/media/…)이 캐시에 있으면 그걸로 대신한다.
    const original = url.searchParams.get('url');
    const raw = original && original.startsWith('/') ? await cache.match(original) : null;
    if (raw) return raw;
    throw err;
  }
}

/** Next 라우터가 부르는 조각 요청 */
function isRsc(request, url) {
  return request.headers.get('RSC') === '1' || url.searchParams.has('_rsc');
}

/**
 * RSC 캐시 키.
 *
 * 라우터는 `/docs/x?_rsc=1a2b3c` 처럼 **매번 다른 해시**를 붙여 부른다. 그 URL 을 그대로
 * 키로 쓰면 저장해 둔 것과 절대 안 맞는다. 그래서 쿼리를 떼고 경로만으로 키를 만든다.
 * HTML 과 섞이지 않도록 별도의 캐시 통(RSC)에 담는다.
 *
 * 다만 **경로만으로는 모자란다**. Next 16 라우터는 같은 주소에 대해 서로 다른 세 가지를
 * 부르는데, 구분은 오직 헤더에 있다.
 *
 *   (헤더 없음) ………………………… 이동할 때 쓰는 통짜 응답
 *   Next-Router-Prefetch ………… 미리 받아 두는 응답
 *   Next-Router-Segment-Prefetch  화면 조각 하나짜리 응답 (`/_tree` 는 뼈대만, 본문은 204 빈 응답)
 *
 * 셋을 한 키에 담으면 **마지막에 받은 것이 앞의 것을 덮어쓴다**. 링크에 마우스만 스쳐도
 * 프리페치가 돌기 때문에 실제로는 조각짜리가 통짜를 밀어낸다. 그 상태로 비행기 모드에서
 * 링크를 누르면 라우터는 주소와 제목만 바꾸고 본문은 그리지 못한다 — 화면이 그대로 멈춘
 * 것처럼 보였던 이유다. 그래서 종류를 키에 함께 적는다.
 */
function rscKey(url, request) {
  const seg = request?.headers.get('Next-Router-Segment-Prefetch');
  const variant = seg ? `s:${seg}` : request?.headers.get('Next-Router-Prefetch') ? 'p' : 'f';
  return new Request(`${url.origin}${url.pathname}?__rsc=${encodeURIComponent(variant)}`);
}

/** 페이지 조각 — 네트워크 우선, 없으면 저장해 둔 조각. 둘 다 없으면 네트워크 오류를 그대로 낸다. */
async function rscFirst(request, url) {
  const cache = await caches.open(RSC);
  const key = rscKey(url, request);
  try {
    const res = await fetch(request);
    // 조각 응답에는 본문이 없는 204 도 섞여 있다. 저장에 실패해도 화면과는 상관없으니 삼킨다.
    if (res.ok && res.type === 'basic') cache.put(key, res.clone()).catch(() => {});
    return res;
  } catch {
    const hit = await cache.match(key);
    if (hit) return hit;
    // 여기서 503 같은 "정상 응답"을 돌려주면 라우터가 그 본문을 화면에 그린다 (그래서 503 화면이 떴다).
    // 네트워크 오류로 알려야 라우터가 통째 새로고침으로 넘어가고, 그쪽엔 캐시된 HTML 이 있다.
    return Response.error();
  }
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
    const hit =
      (await cache.match(request, { ignoreSearch: false })) ??
      // 같은 페이지를 `?from=…` 같은 꼬리표를 달고 다시 열 때가 있다. 꼬리표는 빼고 한 번 더 본다.
      (await cache.match(request, { ignoreSearch: true }));
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

  if (isImage(url)) {
    event.respondWith(imageFirst(request, url));
    return;
  }

  if (isImmutable(url)) {
    event.respondWith(cacheFirst(request, STATIC));
    return;
  }

  if (isRsc(request, url)) {
    event.respondWith(rscFirst(request, url));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, PAGES, OFFLINE_URL));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, DATA));
});

/* ── 전체 저장 ──────────────────────────────────────────────
   설정 화면에서 URL 목록을 보내면 주소마다 세 가지를 받아 둔다.

     1) HTML          — 주소창으로 바로 열 때 쓰는 것
     2) RSC 조각      — 링크를 눌러 이동할 때 라우터가 부르는 것
     3) 그 HTML 이 참조하는 /_next/static/… — 없으면 화면은 떠도 조작이 안 된다

   HTML 만 받아 두면 오프라인에서 링크 이동이 깨진다. 셋을 같이 받아야 실제로 쓸 수 있다.
   한 번에 몰아 받으면 모바일 네트워크가 막히므로 동시 6개로 제한한다. */

/** HTML 안의 /_next/static/… 주소를 긁어낸다 (script src, link href, 청크 목록 문자열까지) */
function staticAssetsIn(html) {
  const found = new Set();
  for (const m of html.matchAll(/["'(](\/_next\/static\/[^"'()\s\\]+)/g)) found.add(m[1]);
  return [...found];
}

/**
 * HTML 안의 그림 원본 주소를 긁어낸다.
 * 마크업에는 `/_next/image?url=%2F_next%2F…&amp;w=640&amp;q=75` 꼴로 폭마다 하나씩 들어 있다.
 * 폭은 버리고 원본 주소만 모은다 — 저장은 한 장이면 된다 (imageKey 참고).
 */
function imagesIn(html) {
  const found = new Set();
  for (const m of html.matchAll(/\/_next\/image\?url=([^"'\s&\\]+)/g)) found.add(decodeURIComponent(m[1]));
  return [...found];
}

async function precache(urls, source) {
  const pages = await caches.open(PAGES);
  const rsc = await caches.open(RSC);
  const statics = await caches.open(STATIC);
  // 정적 파일과 그림은 **다른 통**으로 센다. 하나로 묶으면 원본 png 를 정적 파일로 이미
  // 받았다는 이유로 최적화본을 건너뛰어, 페이지에서 부르는 주소는 비어 있게 된다.
  const seenAssets = new Set();
  const seenImages = new Set();
  let done = 0;
  let failed = 0;

  const post = () => source?.postMessage({ type: 'PRECACHE_PROGRESS', done, failed, total: urls.length });

  /** 이 페이지가 쓰는 정적 파일·그림 중 아직 안 받은 것만 */
  const saveAssets = async (html) => {
    const fresh = staticAssetsIn(html).filter((a) => !seenAssets.has(a));
    fresh.forEach((a) => seenAssets.add(a));

    // 그림은 중간 크기(w=1080) 한 장만 받아 둔다. 어떤 폭을 부르든 이걸 돌려준다.
    const freshImages = imagesIn(html).filter((src) => !seenImages.has(src));
    freshImages.forEach((src) => seenImages.add(src));

    await Promise.all([
      ...fresh.map(async (a) => {
        if (await statics.match(a)) return;
        try {
          await statics.add(a);
        } catch {
          /* 하나 실패해도 페이지 저장은 성공으로 친다 */
        }
      }),
      ...freshImages.map(async (src) => {
        const req = `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=75`;
        const key = imageKey(new URL(req, self.location.origin));
        if (await statics.match(key)) return;
        try {
          const res = await fetch(req);
          if (res.ok) await statics.put(key, res);
        } catch {
          /* 무시 */
        }
      }),
    ]);
  };

  const queue = urls.slice();
  const worker = async () => {
    for (let next = queue.shift(); next !== undefined; next = queue.shift()) {
      try {
        const res = await fetch(next, { credentials: 'same-origin' });
        if (!res.ok) throw new Error(String(res.status));

        // 본문을 한 번 읽어 캐시용·분석용으로 나눠 쓴다 (Response 본문은 한 번만 읽힌다).
        const html = await res.clone().text();
        await pages.put(next, res);
        await saveAssets(html);

        // 링크로 이동할 때 쓰는 조각. 프리페치 헤더를 붙이지 않으므로 통짜('f') 로 들어간다 —
        // 라우터가 실제로 이동할 때 부르는 것이 바로 이것이다. 실패해도 HTML 이 있으니
        // 치명적이지 않다.
        try {
          const flight = await fetch(next, {
            credentials: 'same-origin',
            headers: { RSC: '1' },
          });
          if (flight.ok) await rsc.put(rscKey(new URL(next, self.location.origin)), flight);
        } catch {
          /* 무시 */
        }

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
