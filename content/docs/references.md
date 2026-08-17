---
title: "참고 자료"
description: "이 사이트에 담긴 모든 자료의 출처와 라이선스"
---

여기 담긴 내용이 **어디서 왔는지** 전부 기록합니다. 새 자료를 추가할 때마다 한 줄씩 남기세요.

---

## AWS Certified Cloud Practitioner (CLF-C02)

### 1. 강의 본문 · 영상 대본 · 이미지

| | |
|---|---|
| **출처** | [AWS Skill Builder — AWS Cloud Practitioner Essentials (한국어)](https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-/KEGU7KUPF6) |
| **제공자** | Amazon Web Services |
| **접근** | 본인 Skill Builder 계정으로 수강 (무료 디지털 과정) |
| **수집일** | 2026-08-02 |
| **분량** | 13개 모듈 · 12시간 45분 · 본문 약 838KB |
| **담긴 것** | 영상 대본 81 · 지식 점검 119문항 · 모듈 평가 133문항 · 이미지 133개 |
| **라이선스** | © Amazon Web Services. **개인 학습 목적의 정리본**입니다. 재배포·상업적 이용 불가 |

> [!warning] 공개 배포 주의
> 이 부분은 AWS 저작물입니다. 사이트를 공개할 경우 이 콘텐츠는 **비공개로 유지**하거나
> Vercel 배포 보호(비밀번호)를 거는 것을 권장합니다.

### 2. 모의고사 1,142문항

| | |
|---|---|
| **출처** | [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) |
| **라이선스** | **MIT** — 재배포·수정 가능 (저작자 표시 필수) |
| **규모** | 4.2k · 연습시험 23회분 |
| **수집일** | 2026-08-02 (저장소 최종 갱신 2026-03) |
| **가공** | 원본 `<details>` 형식을 콜아웃 형식으로 변환 후 빌드 시 JSON으로 파싱. 문항마다 관련 서비스·모듈 링크 자동 부착 |
| **검증** | 1,142문항 파싱 실패 0 · 다중정답 267문항 |

> 이 저장소는 커뮤니티가 작성한 **연습 문제**입니다. 실제 시험 문제 유출본(덤프)이 아닙니다.

### 3. 공식 시험 정보

| | |
|---|---|
| **시험 가이드** | [AWS Certified Cloud Practitioner Exam Guide (CLF-C02) PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf) |
| **용도** | 도메인별 출제 비중, 시험 형식 확인 |

---

## AWS Certified Solutions Architect – Associate (SAA-C03)

### 1. 공식 시험 안내서 — 뼈대의 근거

| | |
|---|---|
| **출처** | [AWS 공식 SAA-C03 시험 안내서 (한국어)](https://docs.aws.amazon.com/ko_kr/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html) |
| **제공자** | Amazon Web Services |
| **수집일** | 2026-08-17 |
| **가져온 것** | 도메인 4개와 비중 · **과제 명세 14개** · **범위 내 서비스 129개**(16 카테고리) |
| **가공** | 목차 구조만 그대로 따르고 본문은 쓰지 않음. `20-course/` 의 노트 14개가 과제 명세 14개에 1:1 대응 |
| **왜 필요했나** | CLF-C02 때 실제 목차를 안 보고 모듈 구성을 추정했다가 전부 다시 만들었음. 이번에는 공식 목차를 먼저 확보 |

### 2. 합격 후기 6건 — 학습 설계의 근거

노트에 담긴 것은 **후기에서 뽑은 판단**이지 본문이 아닙니다. 원문을 옮기지 않았습니다.

| | 출처 | 여기서 가져온 것 |
|---|---|---|
| ① | [progress0407 — 6~7일 벼락치기 합격기](https://progress0407.tistory.com/234) | 문제은행에만 의존하면 중간에 흥미가 죽는다는 **반대 사례** |
| ② | [Reddit r/AWSCertifications 합격 후기](https://www.reddit.com/r/AWSCertifications/comments/1v6kky2/) | **시험 기술 3가지** · 키워드 목록 · **실제 출제 서비스 목록** · 세트 난이도 편차 |
| ③ | [velog @gagaeun — AWS SAA TIL 28편](https://velog.io/@gagaeun/series/AWS-SAA-TIL) | **28편 전문을 읽고 서비스 노트에 반영**. 서비스 순서 목차(사실상 Maarek 강의 순)는 [학습 경로](/docs/aws-saa-c03/00-map/00-learning-path) 의 **대체 목차**로, 각 글의 개념·한도·판단 포인트는 [서비스 노트](/docs/aws-saa-c03/10-services) 에 |
| ④ | [daily1313 — 2주 합격기](https://daily1313.tistory.com/) | 개념 정리 단위가 모듈이 아니라 **키워드**라는 관찰 |
| ⑤ | [velog @yeonbot — FE 개발자의 독학 합격 가이드](https://velog.io/@yeonbot) | **선지 분석** — 오답 3개가 왜 아닌지 전부 검토 |
| ⑥ | [pottatt0 — 한줄노트·비교노트 PDF 공유](https://pottatt0.tistory.com/) | **비교노트 3칸 스키마**(선택 신호 / 탈락 신호 / 결정적 차이). 블로그 본문에 공개된 부분 |

> [!warning] ⑥ PDF 본문은 쓰지 않았습니다
> 공유된 PDF 두 파일에 **복사·추출 금지** 권한 플래그가 걸려 있습니다(`/P = -1340`, AES V4 R4).
> 저작자가 명시적으로 막아 둔 동작이므로 **본문 203개 항목을 추출하지 않았습니다.**
> [비교노트](/docs/aws-saa-c03/00-map/service-comparisons) 가 쓰는 것은 **블로그 본문에 공개된 3칸 스키마**뿐이고,
> 항목은 전부 우리가 채웠습니다. 배포 조건이 확인되면 "빠진 항목이 없나" 대조용으로만 쓸 예정입니다.

> ②·⑤가 서로 모르는 채로 **선지 분석**을 나란히 1순위로 꼽았습니다.
> [시험 기술](/docs/aws-saa-c03/30-exam/00-exam-strategy) 가 그 기법을 자료 형태로 만든 것입니다.

### 3. 문제은행 — 6회차 226문항

| | |
|---|---|
| **참고한 자료** | [velog @gagaeun — AWS SAA-C03 Examtopics 헷갈리는 문제 정리](https://velog.io/@gagaeun/AWS-SAA-C03-Examtopics-%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-%EB%AC%B8%EC%A0%9C-%EC%A0%95%EB%A6%AC) |
| **성격** | ExamTopics 는 응시자 제보로 쌓인 **커뮤니티 문항**이고, 이 글은 그중 헷갈렸던 것을 정리한 학습 기록입니다 |
| **수집일** | 2026-08-17 |
| **가져온 것** | **판단이 갈리는 지점**(어떤 조건에서 어떤 서비스가 답이 되는가). 원문에 정리된 문항은 **257개**(글 제목의 "1-544"는 ExamTopics 번호 범위이지 개수가 아님) |
| **가져오지 않은 것** | **문항 원문 · 보기 문장.** 한 줄도 옮기지 않았습니다 |
| **가공** | 같은 판단 포인트를 두고 **상황·보기·해설을 새로 썼습니다.** 도메인 4개에 고르게 배치 |
| **검증** | 226문항 파싱 실패 0 · 해설 누락 0 · 모듈 태그 누락 0 · 복수 정답 30문항. 원본 정리 257건의 판단 포인트를 전부 소화 |
| **편성** | 문항마다 붙인 모듈 태그로 도메인을 판정해 **실제 출제 비중(30/26/24/20)에 맞춘 50문항 세트**로 묶음. 재고가 모자란 회차는 `구성 중`으로 표시 |

> [!important] 왜 베끼지 않고 다시 썼는가
> 실용적인 이유가 큽니다. ②·⑤가 1순위로 꼽은 **선지 분석**(오답 세 개가 *왜* 아닌지)은
> 원문을 복사해서는 나오지 않습니다. 직접 문항을 쓸 때만 생기는 물건입니다.
> 그래서 이 회차의 모든 문항에는 `왜 이 답인가` 와 `나머지가 아닌 이유` 가 붙어 있습니다.
>
> 부수적으로 저작권 문제도 생기지 않습니다 — 아이디어와 판단 기준은 저작물이 아니고,
> 옮겨 온 표현이 없기 때문입니다.

> [!note] "AWS 가 인정한 자료" 는 아닙니다
> ExamTopics 가 커뮤니티 문항이라는 점은 맞지만, AWS 가 이런 사이트를 공인하지는 않습니다.
> AWS 인증 정책은 실제 시험 문제의 유출·재배포를 금지합니다.
> 우리가 하는 일은 **남의 문항을 재배포하는 것이 아니라 같은 주제로 새로 쓰는 것**이라
> 그 선과 무관합니다. 앞으로 회차를 늘릴 때도 이 방식을 유지하면 됩니다.

---

## 사용한 오픈소스

| 도구 | 용도 | 라이선스 |
|---|---|---|
| [Fumadocs](https://github.com/fuma-nama/fumadocs) | 문서 프레임워크 (사이드바 · 검색 · MDX) | MIT |
| [open-spaced-repetition/ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) | 오답노트 복습 스케줄 계산 | MIT |
| [d3-force](https://github.com/d3/d3-force) | 노트 그래프 레이아웃 (빌드 타임 계산) | ISC |
| [D2](https://github.com/terrastruct/d2) | 다이어그램 렌더링 (빌드 타임, `@d2lang/d2`) | MPL-2.0 |
| [lucide](https://github.com/lucide-icons/lucide) | 아이콘 | ISC |

문제 풀이 UI와 그래프 뷰는 외부 라이브러리 없이 직접 구현했습니다.

---

## 기록 규칙

새 자료를 넣을 때 이 표의 항목을 채우세요.

| 항목 | 왜 필요한가 |
|---|---|
| 출처 URL | 나중에 원본을 다시 찾기 위해 |
| 제공자 | 저작권 주체 |
| 라이선스 | 재배포 가능 여부 판단 |
| 수집일 | 내용이 낡았는지 판단 |
| 가공 내용 | 원본과 무엇이 다른지 |
| 검증 | 빠진 것이 없는지 확인한 근거 |
