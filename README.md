# 자격증 학습 창고

AWS 자격증 강의를 순서대로 쌓아 올리고, 문제로 확인하는 학습 사이트.
Next.js + Fumadocs로 만들었고 Vercel에 배포합니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

`dev` / `build` 는 실행 전에 `prepare:content` 를 돌려 **그래프 좌표**와 **퀴즈 JSON**을 생성합니다.

## 구조

```
content/docs/                콘텐츠 (여기만 고치면 사이트가 바뀝니다)
  index.md                     자격증 허브
  참고 자료.md                  모든 자료의 출처·라이선스
  새 자격증 추가하기.md
  aws-clf-c02/                 자격증 하나 = 폴더 하나
    00-MOC/ 20-Course/ 10-Services/ 30-Exam/ 90-Templates/ images/

src/
  app/
    (home)/                    홈
    docs/[[...slug]]/          문서 (Fumadocs)
    quiz/[cert]/[exam]/        문제 풀이
    review/                    오답노트 (FSRS 간격 반복)
    graph/                     노트 그래프
  components/
    quiz-runner.tsx            useReducer 기반. 외부 퀴즈 라이브러리 없음
    graph-view.tsx             캔버스 렌더링
    backlinks.tsx              이 노트를 링크한 노트
  lib/
    storage.ts                 학습 기록 저장 (지금은 localStorage)
  generated/                   빌드 산출물 — 직접 고치지 마세요

scripts/
  build-graph.mjs              위키링크 → 그래프 + 백링크 (레이아웃까지 빌드 타임 계산)
  build-quiz.mjs               문제은행 마크다운 → 회차별 JSON

  build-diagrams.mjs           ```d2 블록 → 빌드 타임 SVG (scripts/d2-render.mjs 가 렌더)

remark-obsidian.mjs            [[위키링크]] · > [!콜아웃] · <details> · ```d2 변환
```

## 성능에 관한 선택

| 항목 | 선택 | 이유 |
|---|---|---|
| 그래프 레이아웃 | **빌드 타임**에 d3-force로 좌표 확정 | 브라우저에서 물리 연산 0 |
| 그래프 렌더링 | **캔버스** (DOM 1개) | SVG는 노드+엣지 2,000개가 DOM이 되어 느림 |
| 팬/줌 | ref + rAF, React state 미사용 | 드래그 중 리렌더 없음 |
| 퀴즈 | `useReducer` 직접 구현 | 외부 라이브러리·애니메이션 없음 |
| 다이어그램 | **빌드 타임**에 D2 → 인라인 SVG | 클라이언트 자바스크립트 0 |
| 이미지 | Fumadocs `remarkImage` → `next/image` | 자동 최적화 |

## 문제 언어 (로케일)

**문서(docs)는 한국어 하나**이고, **문제만** 한국어/영어를 고를 수 있습니다.
바꾸는 곳은 두 군데이고 같은 값을 씁니다 — 선택은 `localStorage(cv.quizLang)` 에 남습니다.
시험 화면에는 두지 않습니다. 풀다가 건드릴 스위치가 아닙니다.

- **언어 버튼** (헤더·사이드바의 테마 버튼 옆) — Fumadocs 기본 언어 스위처를 그대로 씁니다.
  `src/components/app-provider.tsx` 에서 `RootProvider i18n` 에 로케일 목록을 주면 버튼이 생기고,
  `onLocaleChange` 를 우리 것으로 갈아끼워 **URL 은 건드리지 않고** 문제 언어만 바꿉니다.
- **설정**(`/settings`) 화면 — 문제 언어와 학습 기록(백업 · 선택 삭제)을 한곳에서

```
content/question-bank/aws-clf-c02/
  practice-exam-00.md            원문 (프론트매터 lang: ko | en)
  i18n/en/practice-exam-00.md    영어 번역본
  i18n/ko/practice-exam-07.md    한국어 번역본 (앞으로 회차별로 추가)
```

- 번역본은 **원문과 같은 형식**입니다. 문항은 **순서**로, 보기는 **글머리(a/b/c)** 로 짝지어집니다.
  순서를 바꾸거나 문항을 빼면 원문과 어긋납니다.
- **정답 · 관련 서비스 · 모듈은 원문 것만** 씁니다 (언어와 무관한 정보).
  번역본의 `[!success]` 블록은 파서가 문항을 인식하는 데만 쓰입니다.
- `build-quiz.mjs` 가 둘을 합쳐 `q: { ko, en }` 형태로 내보내고,
  **번역본이 없는 문항은 원문 언어로 조용히 폴백**합니다. 그래서 회차별로 하나씩 채워 나갈 수 있습니다.
- 한국어 번역은 **실제 시험 한국어판의 번역투**를 그대로 흉내 냅니다
  ("~하는 것은 무엇인가?", "~해야 하는 요구 사항", 서비스명은 영문 유지). 자연스러운 의역은 오히려 실전과 멀어집니다.

현황: 00회(공식 20문항) 원문 한국어 + 영어 번역본, 01~23회는 영어 원문.

### Fumadocs i18n 으로 옮긴다면

지금은 Fumadocs 의 **UI(언어 버튼·문구 번역)만** 빌려 쓰고 라우팅은 그대로 둡니다.
UI 문구 한국어는 `src/lib/ui-translations.ts` 에 키-값으로 있습니다 (검색 · 목차 · 페이지 액션 등).
나중에 **문서까지** 다국어로 간다면 Fumadocs 내장 i18n 을 쓰는 편이 낫습니다. 필요한 것만 적어 둡니다.

```ts
// src/lib/i18n.ts
import { defineI18n } from 'fumadocs-core/i18n';
export const i18n = defineI18n({ defaultLanguage: 'ko', languages: ['ko', 'en'] });
```

```ts
// src/middleware.ts — /docs/... → /ko/docs/... 로 붙여 준다
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';
export default createI18nMiddleware(i18n);
export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] };
```

- 라우트를 `src/app/[lang]/...` 아래로 옮기고, `source.ts` 의 `loader({ i18n })` 에 위 설정을 넘긴다
- 콘텐츠는 파일명으로 언어를 구분한다 — `index.md`(ko) / `index.en.md`, `meta.json` / `meta.en.json`
- `<RootProvider i18n={{ locale, translations }}>` 로 Fumadocs UI 문구(검색·목차 등)까지 번역된다
- 검색 인덱스도 언어별로 나뉜다 (`createFromSource(source, { localeMap })`)

무게 차이가 분명합니다. Fumadocs 방식은 URL·미들웨어·라우트 구조가 전부 바뀌고
**문서 전체의 번역본이 있어야 값을 합니다.** 지금처럼 문제만 두 언어인 상황에서는
빌드 산출물에 `{ ko, en }` 을 담는 현재 방식이 더 가볍고, 나중에 문서까지 번역하기로 하면
그때 위 설정을 얹고 문제 로케일을 `params.lang` 에서 읽도록 바꾸면 됩니다.

## 학습 기록 저장

`src/lib/storage.ts` 의 `ProgressStore` 인터페이스 뒤에 있습니다.
현재 구현은 `LocalStorageStore` (브라우저 저장, 계정 불필요).

온라인 저장(회원가입 · 기기 간 동기화)으로 바꾸려면 같은 인터페이스로
`SupabaseStore` 를 만들고 파일 맨 아래 `export const store` 만 교체하면 됩니다.
다른 파일은 이 인터페이스만 쓰므로 수정이 필요 없습니다.

오답노트 화면의 **내보내기 / 가져오기** 로 JSON 백업이 가능합니다.

## 오프라인 (PWA)

폰·아이패드 홈 화면에 설치해 인터넷 없이 볼 수 있습니다.

- **설치** — iOS/iPadOS: 사파리에서 공유 → *홈 화면에 추가*. 안드로이드·데스크톱 크롬: 주소창의 설치 버튼.
- **캐시 전략** — `public/sw.js`. 정적 파일은 캐시 우선, 페이지·RSC 는 네트워크 우선(온라인이면 늘 최신),
  둘 다 없으면 `/offline`.
- **미리 받아 두기** — 설정 → *오프라인 사용* → **전체 저장**. 목록은 `/offline-manifest.json`
  (`src/app/offline-manifest.json/route.ts`)이 만듭니다. **라우트를 추가하면 이 파일에도 넣으세요.**
  주소마다 네 가지를 받습니다 — HTML, **RSC 조각**(링크로 이동할 때 라우터가 부르는 것),
  그 HTML 이 참조하는 `/_next/static/…`, **그림**(`/_next/image`). HTML 만 받으면
  오프라인에서 링크 이동이 깨지고 강의 페이지의 그림이 전부 빕니다.
- **이미지 캐시 키** — `next/image` 는 같은 그림을 폭마다 다른 주소(`&w=640`, `&w=3840`…)로
  부릅니다. 폭까지 키에 넣으면 저장분과 어긋나므로 **원본 주소만으로** 키를 만들어
  (`imageKey`) 어떤 폭을 부르든 저장해 둔 한 장(w=1080)을 돌려줍니다.
- **RSC 캐시 키** — 라우터는 `?_rsc=<해시>` 를 붙여 부르고 해시가 매번 달라집니다.
  그래서 쿼리를 떼고 **경로만으로** 키를 만듭니다 (`rscKey`). 조각도 네트워크도 없으면
  `Response.error()` 를 돌려 라우터가 통째 새로고침(=캐시된 HTML)으로 넘어가게 합니다.
  여기서 503 같은 정상 응답을 돌려주면 그 본문이 화면에 그대로 그려집니다.
- **한계** — 검색(`/api/search`)은 서버를 거치므로 오프라인에서 동작하지 않습니다.
- **캐시 무효화** — `sw.js` 의 `CACHE_VERSION` 을 올리면 다음 방문 때 옛 캐시를 버립니다.
- 서비스 워커는 `next dev` 에서 등록하지 않습니다 (`src/components/service-worker.tsx`).
  캐시가 코드 수정보다 오래 살아 혼란을 주기 때문입니다. 확인하려면 `npm run build && npm start`.

아이콘 원본은 여전히 `public/icon.svg` 하나입니다. PNG 가 필요한 곳(iOS 홈 화면, 마스커블)은
`src/lib/app-icon.tsx` 가 같은 도형을 빌드 때 PNG 로 굽습니다 — SVG 를 고치면 여기도 같이 고치세요.

## 배포 (Vercel)

1. 이 저장소를 GitHub에 올린다
2. Vercel에서 Import → 프레임워크 자동 감지 (Next.js)
3. 빌드 명령은 기본값 그대로 (`npm run build` 가 콘텐츠 생성까지 포함)

> **주의** — AWS Skill Builder 강의 본문·대본은 AWS 저작물입니다. 개인 학습용 정리본이므로
> 공개 배포 시에는 Vercel 배포 보호(비밀번호)를 걸어 비공개로 운영하세요.
> 자세한 출처·라이선스는 사이트의 **참고 자료** 문서에 있습니다.
