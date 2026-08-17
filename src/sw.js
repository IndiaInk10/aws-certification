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
  빌드 스탬프 — 빌드마다 자동으로 바뀐다. scripts/build-sw.mjs 가 여기에 박아 넣는다.

  **더 이상 캐시 통 이름에 쓰지 않는다.** 하는 일은 하나다. 이 파일의 바이트가 배포마다
  달라져야 브라우저가 새 워커를 설치하고, 그래야 아래 reconcile 이 돌 기회가 생긴다.

  ── 왜 통 이름에서 버전을 뺐나 ─────────────────────────────

  예전에는 통 이름이 `cv-pages-<스탬프>` 였고 activate 에서 옛 통을 전부 버렸다. 그건 실수가
  아니라 사고 대응이었다. 그전에는 'v5' 같은 숫자를 손으로 올렸는데, 깜빡하면 **지난 배포의
  HTML 과 이번 배포의 파일이 뒤섞였다.** Next 는 빌드마다 파일 이름(해시)과 빌드 ID 가 바뀌므로
  뒤섞이면 브라우저가 이미 사라진 주소를 불러 404 를 맞는다. 화면 껍데기는 떠도 자바스크립트가
  못 붙어서 문제가 한 개도 안 나오던 원인이 이것이다.

  문제는 그 대책의 값이 너무 컸다. 오타 하나 고쳐 배포해도 327개 페이지 · HTML 46MB ·
  조각 21MB · 정적 7MB 를 **전부 다시 받는다.** 통 이름에 버전이 있으면 "유지"라는 선택지가
  아예 없다 — 유지하려면 통에서 통으로 67MB 를 복사해야 하니 절감이 사라진다.

  그래서 버전을 떼고, 대신 **무엇이 안 바뀌었는지 증명할 근거**를 만들었다.

    빌드가 /offline-index.json 에 페이지별 해시를 내보낸다. 그 해시는 이번 빌드가 실제로
    내보내는 HTML·조각을 BUILD_ID 만 지우고(페이지마다 정확히 1회 등장한다) 계산한 값이다.

  캐시에 있는 페이지를 유지해도 되는 조건은 **그 해시가 지난번에 받아 적어 둔 값과 같을 때**
  뿐이다. 같으면 두 HTML 이 문자 단위로 같다는 뜻이고, 그러면 그 HTML 이 부르는 /_next/static
  주소도 같다. 같은 주소는 이번 빌드 서버에 반드시 있다 — 404 가 원리적으로 불가능하다.
  옛 조각이 섞이려면 HTML 이 달라야 하는데, 다르면 해시가 달라 폐기되기 때문이다.

  지우는 일은 언제나 받는 일보다 **먼저** 한다 (reconcile 4단계). 그 사이 창에는 옛 페이지가
  남지만, 페이지는 네트워크 우선이라 온라인이면 캐시가 아예 안 쓰이고, 오프라인이면 옛 HTML 과
  옛 조각(GC 유예로 살아 있다)이 자기들끼리 맞는다.

  인덱스를 못 받으면 옛 방식(/offline-manifest.json 전량)으로 떨어진다. 최악의 실패가
  "오늘과 같음"이 되도록 남겨 둔 길이다.
*/
const CACHE_VERSION = '__BUILD_STAMP__';

/*
  통 이름에 버전이 없다. 무엇을 버리고 무엇을 남길지는 reconcile 이 해시로 판단한다.

    STATIC  /_next/static 과 최적화 이미지. 이름이 곧 내용의 지문이라 옛 항목은 독이 아니라
            쓰레기다 — 지울 이유가 정확성이 아니라 용량이라, 삭제가 아니라 GC 로 다룬다.
    PAGES   페이지 HTML
    RSC     라우터 조각 (URL 이 HTML 과 겹쳐서 통을 분리한다)
    DATA    검색 색인 등. 여기만 내용 주소성이 없어 낡은 것이 독이 될 수 있는데, 용량이 작아
            reconcile 마다 통째로 비운다 — 불태우는 본능을 공짜인 곳에만 남긴다.
    META    배포를 넘어 살아남는 기록장 (아래 meta* 참고)
*/
const STATIC = 'cv-static';
const PAGES = 'cv-pages';
const RSC = 'cv-rsc';
const DATA = 'cv-data';
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

/*
  activate 는 **네트워크를 타지 않는다.** 옛 스킴의 통(cv-pages-<스탬프> 처럼 버전이 붙어 있던
  것들)을 치우고 바로 끝낸다.

  예전에는 여기서 전량 다운로드까지 await 했다. 그러면 워커가 수백 개를 다 받을 때까지
  'activating' 에 묶여서 navigator.serviceWorker.ready 가 안 풀리고, 설정 화면의 "저장된
  페이지 N건"이 그때까지 멈춰 있었다. 받아 오는 일은 reconcile 로 옮기고, 그 방아쇠는
  화면 쪽(src/components/service-worker.tsx)이 당긴다 — 모든 페이지에서 도는 코드라
  방아쇠가 반드시 오고, 오프라인이면 그냥 다음 페이지에서 다시 시도된다.
*/
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => !MINE.includes(k)).map((k) => caches.delete(k)));
      await self.clients.claim();
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

/* ── 기록장 (cv-meta) ────────────────────────────────────────
   배포를 넘어 살아남는 유일한 통이다. 키는 넷뿐이다.

     /__cv/precache-all   "이 사람이 전체 저장을 눌렀었다"
     /__cv/pages          { url: 해시 } — 지금 캐시에 든 페이지가 어느 판인지
     /__cv/stale-assets   GC 유예 목록 (한 배포 동안 안 쓰였다고 표시해 둔 자산)
     /__cv/reconciled     마지막으로 끝까지 맞춰 둔 빌드 ID

   URL 마다 키를 만들지 않고 /__cv/pages 하나에 JSON 으로 담는다. 327개면 30KB 남짓이고,
   읽기는 한 번이면 된다. */

const WANT_ALL = '/__cv/precache-all';
const PAGE_RECORD = '/__cv/pages';
const STALE_ASSETS = '/__cv/stale-assets';
const RECONCILED = '/__cv/reconciled';

async function metaGet(key, fallback) {
  try {
    const hit = await (await caches.open(META)).match(key);
    if (!hit) return fallback;
    return await hit.json();
  } catch {
    return fallback;
  }
}

async function metaSet(key, value) {
  const meta = await caches.open(META);
  await meta.put(key, new Response(JSON.stringify(value)));
}

async function metaHas(key) {
  return Boolean(await (await caches.open(META)).match(key));
}

/** 캐시에 든 자산을 GC 목록과 맞춰 보기 위한 키. imageKey 가 만든 ?url=… 도 담아야 한다. */
const assetKeyOf = (url) => url.pathname + url.search;

/** 그림 원본 주소 → 캐시에 실제로 들어가 있는 키 */
const imageKeyOf = (src) => `/_next/image?url=${encodeURIComponent(src)}`;

/**
 * URL 목록을 받아 캐시를 채운다.
 *
 * `todo` 는 **이미 걸러진** 목록이다 (안 바뀐 페이지는 부르는 쪽에서 뺀다).
 * 성공한 URL 은 onSaved 로 알려 기록장에 남기게 한다.
 */
async function fetchInto(todo, { source, skipped = 0, onSaved }) {
  const pages = await caches.open(PAGES);
  const rsc = await caches.open(RSC);
  const statics = await caches.open(STATIC);
  // 정적 파일과 그림은 **다른 통**으로 센다. 하나로 묶으면 원본 png 를 정적 파일로 이미
  // 받았다는 이유로 최적화본을 건너뛰어, 페이지에서 부르는 주소는 비어 있게 된다.
  const seenAssets = new Set();
  const seenImages = new Set();
  let done = 0;
  let failed = 0;

  const post = () =>
    void broadcast(
      { type: 'PRECACHE_PROGRESS', done, failed, skipped, total: todo.length },
      source,
    );

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

  const queue = todo.slice();
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
        if (onSaved) await onSaved(next, done);
      } catch {
        failed++;
      }
      post();
    }
  };

  post();
  await Promise.all(Array.from({ length: 6 }, worker));
  return { done, failed };
}

/* ── 빠진 자산 메우기 ────────────────────────────────────────
   페이지를 받을 때 그 HTML 이 참조하는 /_next/static 도 같이 받는데, 그 과정은 실패를
   조용히 삼킨다 (한 조각 못 받았다고 페이지 저장까지 실패로 칠 이유는 없다). 게다가
   한 번 시도한 주소는 그 실행 안에서 다시 건드리지 않는다.

   예전에는 그래도 됐다. 배포마다 전량을 다시 받았으니 다음 배포에서 저절로 나았다.
   이제는 안 바뀐 페이지를 건너뛰므로, 한 번 놓친 조각은 **영영 빠진 채로 남는다.**
   그러면 화면은 뜨는데 자바스크립트가 못 붙어 문제가 한 개도 안 나온다 — 예전 사고의 증상이다.

   그래서 인덱스가 알려 준 "이번 빌드가 참조하는 것 전부"와 실제 캐시를 대조해 빠진 것만
   메운다. 다 있으면 네트워크를 한 번도 타지 않는다 (캐시 조회뿐이라 값싸다).
   자산 목록이라는 근거가 생긴 덕에 할 수 있게 된 일이다. */
async function ensureAssets(index) {
  const statics = await caches.open(STATIC);

  const missing = [];
  for (const a of index.assets) if (!(await statics.match(a))) missing.push({ key: a, url: a });
  for (const src of index.images) {
    const key = imageKeyOf(src);
    if (!(await statics.match(key))) {
      // 그림은 저장은 한 장(폭 없는 키)이지만 받을 때는 폭을 붙여야 한다 (imageKey 참고).
      missing.push({ key, url: `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=75` });
    }
  }
  if (!missing.length) return { missing: 0, healed: 0 };

  let healed = 0;
  const queue = missing.slice();
  const worker = async () => {
    for (let item = queue.shift(); item !== undefined; item = queue.shift()) {
      try {
        const res = await fetch(item.url, { credentials: 'same-origin' });
        if (res.ok) {
          await statics.put(item.key, res);
          healed++;
        }
      } catch {
        /* 다음 reconcile 에서 다시 대조된다 */
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  return { missing: missing.length, healed };
}

/* ── 안 쓰이는 자산 치우기 ───────────────────────────────────
   STATIC 의 옛 항목은 **독이 아니라 쓰레기**다. 이름에 해시가 박혀 있어 이름이 같으면 내용도
   같기 때문에, 남아 있어도 틀린 화면이 나오지 않는다. 지울 이유는 용량뿐이다.

   그래서 곧바로 지우지 않고 **한 배포 유예**를 둔다. 두 배포 연속으로 아무도 안 부른 것만
   지운다. 이 사이트는 새 워커가 뜨면 곧장 activate 되므로(SKIP_WAITING), 아직 열려 있는 옛
   탭이 옛 청크를 부를 수 있다. 유예가 그 탭을 다음 배포까지 살려 준다.
   (예전에는 activate 가 옛 통을 통째로 즉시 지웠으니, 그 탭 입장에서는 지금이 더 낫다.)

   `live` 는 이번 빌드가 참조하는 것 전부의 합집합이다. 유지되는 페이지가 부르는 자산은
   반드시 그 안에 있다 — 해시가 같다는 건 HTML 이 같다는 뜻이고, 같은 HTML 은 같은 자산을
   부르기 때문이다. 그래서 페이지별 자산 목록을 따로 쌓아 둘 필요가 없다. */
async function gcStatics(live) {
  const statics = await caches.open(STATIC);
  const prev = new Set(await metaGet(STALE_ASSETS, []));
  const stale = [];
  let removed = 0;

  for (const req of await statics.keys()) {
    const key = assetKeyOf(new URL(req.url));
    if (live.has(key)) continue;
    if (prev.has(key)) {
      await statics.delete(req);
      removed++;
    } else {
      stale.push(key);
    }
  }

  await metaSet(STALE_ASSETS, stale);
  return { removed, pending: stale.length };
}

/* ── 맞추기 (reconcile) ──────────────────────────────────────
   새 배포가 떴을 때 캐시를 이번 빌드에 맞추는 일. 화면 쪽에서 RECONCILE 메시지로 부른다.

   순서가 중요하다. **지우는 일이 언제나 받는 일보다 먼저**다. 삭제는 네트워크가 필요 없는
   로컬 연산이라 금방 끝나고, 그 뒤로 PAGES 에는 이번 빌드에 유효한 것만 남는다. */

let running = null;

function reconcile(opts) {
  // 탭이 여러 개면 메시지도 여러 번 온다. 이미 돌고 있으면 그걸 같이 기다린다.
  if (running) return running;
  running = doReconcile(opts).finally(() => {
    running = null;
  });
  return running;
}

async function doReconcile({ source = null, force = false } = {}) {
  let index = null;
  try {
    // 캐시를 태우면 지난 배포의 인덱스를 받을 수 있다. 이건 늘 원본에서 받아야 한다.
    const res = await fetch('/offline-index.json', {
      credentials: 'same-origin',
      cache: 'no-store',
    });
    if (res.ok) index = await res.json();
  } catch {
    // 오프라인이다. 표시는 남아 있으니 다음 페이지 로드에서 다시 시도된다.
    return;
  }

  // 인덱스가 없거나 모르는 판이면 옛 방식으로 간다 — 최악의 실패가 "오늘과 같음"이 되게.
  if (!index || index.v !== 2 || !Array.isArray(index.pages)) {
    await legacyPrecache(source);
    return;
  }

  /*
    이미 이번 빌드에 맞춰 뒀다. 그래도 자산 대조는 한 번 하고 간다 — 다 있으면 네트워크를
    타지 않고, 지난번에 조각 하나를 놓쳤다면 여기서 메워진다. 이게 없으면 놓친 조각이
    영영 안 채워진다 (ensureAssets 설명 참고).
  */
  if (!force && (await metaGet(RECONCILED, null)) === index.build) {
    if (await metaHas(WANT_ALL)) await ensureAssets(index);
    return;
  }

  const wanted = new Map(index.pages);
  const record = await metaGet(PAGE_RECORD, {});

  const pages = await caches.open(PAGES);
  const rsc = await caches.open(RSC);

  // 기록만 있고 실물이 없는 경우가 있다 (브라우저가 용량 때문에 통을 비웠을 때).
  // 기록을 믿지 말고 실제로 들어 있는 것과 맞춰 본다.
  const have = new Set([...(await pages.keys())].map((r) => new URL(r.url).pathname));

  // ── 1. 지우기 ────────────────────────────────────────────
  const dropped = new Set();
  for (const url of have) {
    if (wanted.has(url) && record[url] === wanted.get(url)) continue;
    await pages.delete(url);
    delete record[url];
    dropped.add(url);
  }
  // 조각은 한 주소에 여러 변형(f / p / s:…)이 들어 있어 경로로 묶어 지운다.
  if (dropped.size) {
    for (const req of await rsc.keys()) {
      if (dropped.has(new URL(req.url).pathname)) await rsc.delete(req);
    }
  }
  // 검색 색인 같은 것은 내용 주소성이 없다. 작으니 통째로 버린다.
  await caches.delete(DATA);
  await metaSet(PAGE_RECORD, record);

  // ── 2. 껍데기 그림 갱신 ──────────────────────────────────
  // 경로가 고정인데 내용은 바뀔 수 있는 유일한 자산이라(아이콘은 코드가 만든다) 매번 다시 받는다.
  const statics = await caches.open(STATIC);
  await Promise.all(
    SHELL.map(async (u) => {
      try {
        const res = await fetch(u, { cache: 'no-store' });
        if (res.ok) await statics.put(u, res);
      } catch {
        /* 무시 */
      }
    }),
  );

  // 이번 빌드가 참조하는 것 전부 — GC 의 근거다.
  const live = new Set([
    ...index.assets,
    ...index.images.map(imageKeyOf),
    ...SHELL,
  ]);

  // ── 3. 받기 ──────────────────────────────────────────────
  // 전체 저장을 누른 적 없는 사람에게 수백 개를 몰래 받게 하면 안 된다. 둘러보며 자연히 찬다.
  if (await metaHas(WANT_ALL)) {
    const todo = [...wanted]
      .filter(([url, hash]) => record[url] !== hash || !have.has(url))
      .map(([url]) => url);

    let sinceFlush = 0;
    const { done, failed } = await fetchInto(todo, {
      source,
      skipped: wanted.size - todo.length,
      onSaved: async (url) => {
        record[url] = wanted.get(url);
        // 중간에 워커가 죽어도 받아 둔 만큼은 남게 이따금 적어 둔다.
        if (++sinceFlush >= 25) {
          sinceFlush = 0;
          await metaSet(PAGE_RECORD, record);
        }
      },
    });
    await metaSet(PAGE_RECORD, record);

    // 페이지를 받으며 놓친 조각이 있으면 여기서 메운다.
    await ensureAssets(index);

    // 못 받은 것이 있으면 GC 를 건너뛴다. 안 받은 자산을 "안 쓰인다"로 오해해 지우면 안 된다.
    if (!failed) await gcStatics(live);

    await broadcast(
      {
        type: 'PRECACHE_DONE',
        done,
        failed,
        skipped: wanted.size - todo.length,
        total: todo.length,
      },
      source,
    );
  } else {
    await gcStatics(live);
  }

  await metaSet(RECONCILED, index.build);
}

/**
 * 인덱스를 못 받았을 때의 길 — 지금까지 하던 그대로 전량을 받는다.
 *
 * 배포 산출물에 /offline-index.json 이 안 실렸거나, CDN 이 아직 옛것을 주고 있거나,
 * 이 워커보다 옛 서버를 보고 있을 때다. 아무것도 안 하는 것보다 낫고, 무엇보다
 * **이 기능이 통째로 실패해도 사용자 입장에서는 예전과 똑같다.**
 */
async function legacyPrecache(source) {
  if (!(await metaHas(WANT_ALL))) return;
  try {
    const { urls } = await fetch('/offline-manifest.json', {
      credentials: 'same-origin',
      cache: 'no-store',
    }).then((r) => r.json());
    if (!Array.isArray(urls) || !urls.length) return;
    const { done, failed } = await fetchInto(urls, { source });
    await broadcast({ type: 'PRECACHE_DONE', done, failed, skipped: 0, total: urls.length }, source);
  } catch {
    /* 오프라인이다. 다음에 다시 시도한다. */
  }
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;

  // 화면이 뜰 때마다 온다. 이미 이번 빌드에 맞춰 뒀으면 곧바로 돌아간다.
  if (data.type === 'RECONCILE') {
    event.waitUntil(reconcile({ source: null }));
  }

  // 설정 화면의 "전체 저장". 사용자가 일부러 누른 것이라 이미 맞춰 뒀더라도 다시 훑는다.
  if (data.type === 'PRECACHE') {
    event.waitUntil(
      metaSet(WANT_ALL, 1).then(() => reconcile({ source: event.source, force: true })),
    );
  }

  if (data.type === 'CLEAR') {
    event.waitUntil(
      // 남의 통은 건드리지 않는다. 기록장도 같이 비운다 — 페이지를 다 지웠으니 기록만
      // 남으면 "받아 뒀다"고 착각하게 된다.
      Promise.all(MINE.map((k) => caches.delete(k))).then(() =>
        event.source?.postMessage({ type: 'CLEARED' }),
      ),
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
