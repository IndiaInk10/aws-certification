# 자격증 학습 볼트

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

remark-obsidian.mjs            [[위키링크]] · > [!콜아웃] · <details> · mermaid 변환
```

## 성능에 관한 선택

| 항목 | 선택 | 이유 |
|---|---|---|
| 그래프 레이아웃 | **빌드 타임**에 d3-force로 좌표 확정 | 브라우저에서 물리 연산 0 |
| 그래프 렌더링 | **캔버스** (DOM 1개) | SVG는 노드+엣지 2,000개가 DOM이 되어 느림 |
| 팬/줌 | ref + rAF, React state 미사용 | 드래그 중 리렌더 없음 |
| 퀴즈 | `useReducer` 직접 구현 | 외부 라이브러리·애니메이션 없음 |
| mermaid | 동적 import | 다이어그램 있는 페이지에서만 로드 |
| 이미지 | Fumadocs `remarkImage` → `next/image` | 자동 최적화 |

## 학습 기록 저장

`src/lib/storage.ts` 의 `ProgressStore` 인터페이스 뒤에 있습니다.
현재 구현은 `LocalStorageStore` (브라우저 저장, 계정 불필요).

온라인 저장(회원가입 · 기기 간 동기화)으로 바꾸려면 같은 인터페이스로
`SupabaseStore` 를 만들고 파일 맨 아래 `export const store` 만 교체하면 됩니다.
다른 파일은 이 인터페이스만 쓰므로 수정이 필요 없습니다.

오답노트 화면의 **내보내기 / 가져오기** 로 JSON 백업이 가능합니다.

## 배포 (Vercel)

1. 이 저장소를 GitHub에 올린다
2. Vercel에서 Import → 프레임워크 자동 감지 (Next.js)
3. 빌드 명령은 기본값 그대로 (`npm run build` 가 콘텐츠 생성까지 포함)

> **주의** — AWS Skill Builder 강의 본문·대본은 AWS 저작물입니다. 개인 학습용 정리본이므로
> 공개 배포 시에는 Vercel 배포 보호(비밀번호)를 걸어 비공개로 운영하세요.
> 자세한 출처·라이선스는 사이트의 **참고 자료** 문서에 있습니다.
