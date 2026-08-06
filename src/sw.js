/*
  서비스 워커 **원본** — 비행기 모드/지하철에서도 앱이 뜨게 한다.

  이 파일을 직접 고쳐라. 실제로 브라우저가 받아 가는 public/sw.js 는
  scripts/build-sw.mjs 가 이 파일을 복사해 만든다 (아래 CACHE_VERSION 설명 참고).

  전략 (요청 종류별로 다르다)
    /_next/static, 폰트, 아이콘 …… 캐시 우선. 파일 이름에 해시가 있어 바뀌면 이름도 바뀐다.
    /_next/image ……………………… 캐시 우선. 폭(w=…)은 키에서 뺀다 (imageKey).
    페이지 이동(navigate) ………… 네트워크 우선 → 실패하면 캐시 → 그것도 없으면 /offline.
    RSC(라우터가 부르는 조각) …… 네트워크 우선 → 캐시. 둘 다 없으면 네트워크 오류를 내서
                                   Next 라우터가 통째 새로고침(=캐시된 HTML)으로 넘어가게 둔다.
    그 밖의 GET(검색 색인 등) …… stale-while-revalidate.

  "네트워크 우선"이라 온라인일 때는 늘 최신을 본다. 캐시는 어디까지나 안전망이다.

  전체 저장(설정 화면의 버튼)은 postMessage({type:'PRECACHE'}) 로 들어온다.
*/

/*
  캐시 버전 — **빌드할 때마다 자동으로 바뀐다.**

  예전에는 여기에 'v5' 같은 숫자를 손으로 적었다. 그런데 배포할 때 이 숫자를 같이 올리는 걸
  잊으면 옛 캐시가 그대로 살아남아, **지난 배포의 HTML·조각과 이번 배포의 파일이 뒤섞인다.**
  Next 는 빌드마다 파일 이름(해시)과 빌드 ID가 바뀌므로, 뒤섞이면 브라우저가 이미 사라진 주소를
  부르게 되고 그 요청이 404 로 떨어진다. 화면 껍데기는 떠도 자바스크립트가 못 붙어서
  문제가 한 개도 안 나오던 원인이 이것이다.

  그래서 사람 손을 뗐다. scripts/build-sw.mjs 가 빌드마다 다른 값을 여기에 박아 넣는다.
  파일 내용이 달라지면 브라우저가 새 워커로 알아서 갈아 끼우고, activate 에서 옛 통을 전부 버린다.
*/
const CACHE_VERSION = '__BUILD_STAMP__';
const STATIC = `cv-static-${CACHE_VERSION}`; // 해시 붙은 정적 파일
const PAGES = `cv-pages-${CACHE_VERSION}`; // 페이지 HTML
const RSC = `cv-rsc-${CACHE_VERSION}`; // 라우터 조각 (URL 이 HTML 과 겹쳐서 통을 분리)
const DATA = `cv-data-${CACHE_VERSION}`; // 검색 색인 등

/*
  버전을 타지 않는 통. 여기 담긴 건 새 배포에서도 살아남는다.
  지금은 "이 사람이 전체 저장을 눌렀었다"는 표시 하나만 들어 있다 (아래 wantsAll 참고).
*/
const META = 'cv-meta';
const MINE = [STATIC, PAGES, RSC, DATA, META];

const OFFLINE_URL = '/offline';

/*
  앱 껍데기에 늘 붙어 있는 그림들.

  헤더 로고는 <img src="/icon.svg">, 홈 화면 아이콘은 /apple-icon · /icon-512.png 다.
  전부 /_next/static 바깥에 있어서 **예전에는 미리 받는 목록에 아예 없었다.** 그래서 비행기
  모드로 들어가면 로고 자리가 깨진 그림으로 남았다. 설치할 때 같이 받아 둔다.
*/
const SHELL = [
  '/icon.svg',
  '/apple-icon',
  '/icon-512.png',
  '/icon-maskable.png',
  '/manifest.webmanifest',
];
const isShell = (url) => SHELL.includes(url.pathname);

/** 하나가 실패해도 나머지는 받는다 (addAll 은 하나만 실패해도 통째로 취소된다). */
async function addEach(cache, urls) {
  await Promise.all(
    urls.map(async (u) => {
      try {
        await cache.add(u);
      } catch {
        /* 무시 */
      }
    }),
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const pages = await caches.open(PAGES);
      await addEach(pages, [OFFLINE_URL, '/']);
      const statics = await caches.open(STATIC);
      await addEach(statics, SHELL);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => !MINE.includes(k)).map((k) => caches.delete(k)));
      await self.clients.claim();
      // 새 배포라 옛 통을 버렸다. 전에 전체 저장을 눌렀던 사람이면 조용히 다시 받아 둔다.
      await restoreIfWanted();
    })(),
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

  // 껍데기 그림은 확장자가 없는 것(/apple-icon)도 있어서 isImmutable 로는 안 걸린다.
  if (isShell(url) || isImmutable(url)) {
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

/** 설정 화면이 열려 있으면 그쪽에, 아니면 열려 있는 탭 전부에 진행 상황을 알린다. */
async function broadcast(message, source) {
  if (source) {
    source.postMessage(message);
    return;
  }
  const clients = await self.clients.matchAll({ type: 'window' });
  for (const c of clients) c.postMessage(message);
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

  // 껍데기 그림(로고·홈 화면 아이콘)도 같이 받아 둔다. 설치할 때 한 번 받지만
  // 그새 캐시가 비워졌을 수 있으니 여기서 한 번 더 확인한다.
  const missingShell = [];
  for (const u of SHELL) if (!(await statics.match(u))) missingShell.push(u);
  await addEach(statics, missingShell);

  const post = () =>
    void broadcast({ type: 'PRECACHE_PROGRESS', done, failed, total: urls.length }, source);

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
  await broadcast({ type: 'PRECACHE_DONE', done, failed, total: urls.length }, source);
}

/* ── 새 배포 뒤 자동 복구 ────────────────────────────────────
   배포가 새로 뜨면 위 activate 가 옛 캐시를 통째로 버린다. 안 버리면 지난 배포의 조각이
   섞여 404 가 나기 때문에 어쩔 수 없다. 문제는 **전체 저장을 눌러 뒀던 사람**이다. 그대로 두면
   본인은 여전히 저장돼 있는 줄 알고 지하철에 들어갔다가 텅 빈 화면을 본다.

   그래서 "전체 저장을 눌렀다"는 사실만 버전 없는 통(META)에 남겨 두고, 새 배포에서 캐시를
   비운 직후 온라인이면 조용히 다시 받아 둔다. */

const WANT_ALL = '/__cv/precache-all';

async function rememberWantsAll() {
  const meta = await caches.open(META);
  await meta.put(WANT_ALL, new Response('1'));
}

async function forgetWantsAll() {
  const meta = await caches.open(META);
  await meta.delete(WANT_ALL);
}

async function restoreIfWanted() {
  const meta = await caches.open(META);
  if (!(await meta.match(WANT_ALL))) return;
  try {
    const { urls } = await fetch('/offline-manifest.json', { credentials: 'same-origin' }).then((r) =>
      r.json(),
    );
    if (Array.isArray(urls) && urls.length) await precache(urls, null);
  } catch {
    // 오프라인이라 못 받았다. 표시는 남아 있으니 다음 배포·다음 실행 때 다시 시도한다.
  }
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;

  if (data.type === 'PRECACHE' && Array.isArray(data.urls)) {
    event.waitUntil(rememberWantsAll().then(() => precache(data.urls, event.source)));
  }

  if (data.type === 'CLEAR') {
    event.waitUntil(
      caches
        .keys()
        .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        // 비우기는 사용자가 일부러 누른 것이다. 자동 복구 표시도 같이 지운다.
        .then(forgetWantsAll)
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
