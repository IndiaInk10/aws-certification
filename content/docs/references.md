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
