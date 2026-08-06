---
title: "AWS Support Plans"
tags: [aws, clf-c02, service, 비용-지원]
category: 10-비용-지원
module: 11
status: 미학습
---

> Basic / Developer / Business / Enterprise 4단계 (+ Enterprise On-Ramp)

| | |
|---|---|
| **카테고리** | 10-비용-지원 |
| **배우는 모듈** | [[11-billing-support]] |
| **문제은행 출현** | 46회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

AWS가 제공하는 기술 지원을 **Basic · Developer · Business · Enterprise 네 단계**로 나눠 놓은 요금제이고, 단계가 올라갈수록 **응답 속도와 지원 채널, 사람이 붙는 정도**가 달라집니다.

## 핵심 개념

- **Basic — 모든 계정이 기본으로 갖습니다.** 무료이며 **기술 지원은 없습니다.** 청구·계정 문의를 위한 **고객 서비스**, 문서와 백서, re:Post 커뮤니티 포럼, AWS Health Dashboard, 그리고 **Trusted Advisor의 핵심 점검**만 제공합니다.
- **Developer — 여기서 기술 지원이 처음 생깁니다.** **업무 시간 중 이메일**로 문의할 수 있고, **Cloud Support Associate**가 응답합니다. 케이스를 열 수 있는 사람은 한 명(기본 연락처)이고, 아키텍처 지원은 일반적인 지침 수준입니다. 개발·테스트 환경용 단계입니다.
- **Business — 프로덕션 워크로드의 기준선입니다.** **24시간 연중무휴 전화·채팅·이메일 지원**이 여기서 처음 생기고, **Trusted Advisor 전체 점검**이 열리며, **서드 파티 소프트웨어 지원**(운영 체제, Marketplace에서 산 소프트웨어 등)과 **AWS Support API 접근**도 여기부터입니다. 케이스를 열 수 있는 사용자 수에 제한이 없습니다.
- **Enterprise — 사람이 전담으로 붙는 단계입니다.** **전담 기술 계정 관리자(TAM)** 가 배정되어 워크로드를 함께 설계·검토하고, **Concierge 지원 팀**이 청구·계정 문제를 처리하며, **AWS Well-Architected 검토**와 운영 검토를 받습니다. **응답 시간도 가장 빠릅니다.**
- **"처음 생기는 것"으로 외우시기 바랍니다.** 시험은 각 플랜의 전체 목록보다 **어느 단계에서 무엇이 처음 등장하는지**를 묻습니다. 기술 지원은 Developer부터, 24/7 전화와 Trusted Advisor 전체 점검은 Business부터, TAM은 Enterprise부터입니다.
- **모든 플랜은 상위 플랜에 그대로 포함됩니다.** Business는 Developer가 주는 것을 전부 포함하고, Enterprise는 Business가 주는 것을 전부 포함합니다.
- **Enterprise On-Ramp — Business와 Enterprise 사이의 다섯 번째 단계입니다.** TAM이 **전담이 아니라 풀(pool) 형태**로 배정되고, 비즈니스 크리티컬 시스템 다운 시 **30분 이내** 응답을 받습니다. 시험은 4단계 위주로 출제되지만, 보기에 등장하면 **"Enterprise의 축소판"** 으로 판단하시면 됩니다.

### 플랜별 기능 비교

| 항목 | Basic | Developer | Business | On-Ramp | Enterprise |
|---|---|---|---|---|---|
| 요금 | **무료** | 유료 | 유료 | 유료 | 유료 |
| 기술 지원 | **없음** | 이메일 (업무 시간) | **24/7 전화·채팅·이메일** | 24/7 | 24/7 |
| 응대 인력 | — | Cloud Support Associate | Cloud Support Engineer | **TAM 풀** | **전담 TAM** |
| 케이스를 열 수 있는 사람 | 청구 문의만 | **1명** | 무제한 | 무제한 | 무제한 |
| Trusted Advisor | **핵심 점검만** | 핵심 점검만 | **전체 점검** | 전체 점검 | 전체 점검 |
| 서드 파티 소프트웨어 지원 | — | — | **제공** | 제공 | 제공 |
| AWS Support API | — | — | **제공** | 제공 | 제공 |
| 아키텍처 지원 | — | 일반 지침 | 사용 사례별 지침 | 컨설팅 검토 | **컨설팅 검토 · Well-Architected 검토** |
| Concierge 지원 팀 | — | — | — | 제공 | **제공** |

> [!tip] 한 줄로 압축하면
> **기술 지원 = Developer부터 · 24/7 전화 + Trusted Advisor 전체 = Business부터 · TAM = Enterprise부터.**
> 이 세 줄만 정확히 알아도 지원 플랜 문제의 대부분을 맞히실 수 있습니다.

> [!info] AWS가 최근 플랜 이름을 개편했지만, 시험은 위 5단계로 나옵니다
> **위 표를 그대로 외우시면 됩니다.** 지금 판매되는 플랜 구성이 다르다는 것만 알아 두세요.

### 응답 시간 등급

| 심각도 | Developer | Business | On-Ramp | Enterprise |
|---|---|---|---|---|
| 일반 안내 | 24 **업무** 시간 이내 | 24시간 이내 | 24시간 이내 | 24시간 이내 |
| 시스템 장애 | 12 **업무** 시간 이내 | 12시간 이내 | 12시간 이내 | 12시간 이내 |
| **프로덕션 시스템 장애** | 지원 안 함 | 4시간 이내 | 4시간 이내 | 4시간 이내 |
| **프로덕션 시스템 다운** | 지원 안 함 | **1시간 이내** | 1시간 이내 | 1시간 이내 |
| **비즈니스 크리티컬 시스템 다운** | 지원 안 함 | 지원 안 함 | **30분 이내** | **15분 이내** |

> [!warning] Developer의 시간은 "업무 시간"입니다
> Developer 플랜의 응답 시간은 **영업일 업무 시간 기준**입니다. 금요일 저녁에 케이스를 열면 다음 영업일에야 응답이 시작됩니다.
> Business부터는 **연중무휴 실제 시간 기준**이라는 점이 결정적인 차이입니다.

## 요금 모델

- **Basic 플랜은 무료이며, 모든 AWS 계정에 기본으로 포함됩니다.**
- Developer·Business·Enterprise는 **월 정액 요금**이고, **해당 월 AWS 사용액에 비례하는 비율**과 **최소 요금** 중 큰 쪽으로 청구되는 구조입니다. 즉 **AWS를 많이 쓸수록 지원 요금도 올라갑니다.**
- 플랜은 **계정 단위**로 적용되며, [[aws-organizations]]의 통합 결제를 쓰는 경우 조직 정책에 따라 계정별로 관리합니다.
- 구체적인 금액은 자주 바뀌므로 외우실 필요가 없습니다. **"무료는 Basic 하나뿐"** 이라는 사실만 정확히 기억하시면 됩니다.

> [!info] 4단계인가 5단계인가
> AWS가 실제로 판매하는 플랜은 **Enterprise On-Ramp를 포함해 5개**입니다.
> 다만 CLF-C02 문제는 대부분 4단계 구도로 출제되므로, **Basic·Developer·Business·Enterprise를 축으로 외우시고**
> On-Ramp는 "Enterprise보다 한 단계 아래, 응답 30분, TAM은 풀 배정"으로만 알아 두시면 충분합니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-trusted-advisor]] | Trusted Advisor는 **점검 도구 자체**이고, Support Plans는 **그 점검을 몇 개까지 볼 수 있는지**를 결정합니다. Basic·Developer는 핵심 점검만, Business·Enterprise는 전체 점검을 봅니다 |
| [[aws-well-architected-tool]] | Well-Architected Tool은 **내가 직접 하는 셀프 서비스 검토**이고, Enterprise 플랜의 Well-Architected 검토는 **AWS 전문가가 함께 진행**해 줍니다 |
| [[aws-health-dashboard]] | Health Dashboard는 **내 리소스에 영향을 주는 이벤트를 알려 주는 것**이고, Support Plans는 **사람에게 문의할 수 있는 권한과 속도**를 정합니다 |

## 시험 포인트

- [ ] 문제에 **"24시간 연중무휴 전화 지원이 필요하다"** 가 나오면 최소 **Business**입니다. Developer는 업무 시간 이메일뿐입니다
- [ ] **"전담 기술 계정 관리자(TAM)"**, **"Concierge"**, **"Well-Architected 검토를 AWS와 함께"** 가 나오면 **Enterprise**입니다
- [ ] **"Trusted Advisor의 모든 점검을 사용하고 싶다"** 는 **Business 이상**입니다. Basic·Developer는 핵심 점검만 보입니다
- [ ] **"운영 체제나 서드 파티 소프트웨어에 대한 지원"**, **"Support API로 케이스를 자동 생성"** 도 **Business부터**입니다
- [ ] **"비용을 들이지 않고 받을 수 있는 지원"** 을 물으면 Basic입니다. 문서·백서·커뮤니티 포럼·청구 문의는 무료로 받습니다
- [ ] Developer 플랜은 **케이스를 열 수 있는 사람이 한 명**이라는 제약이 함정으로 나옵니다
- [ ] 응답 시간에서 **1시간(프로덕션 다운, Business 이상)** 과 **15분(비즈니스 크리티컬 다운, Enterprise)** 두 숫자는 그대로 외워 두시기 바랍니다

## 관련 노트

- 모듈: [[11-billing-support]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
