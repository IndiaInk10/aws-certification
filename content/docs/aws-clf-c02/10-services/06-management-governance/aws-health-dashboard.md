---
title: "AWS Health Dashboard"
tags: [aws, clf-c02, service, 관리-거버넌스]
category: 06-관리-거버넌스
module: 11
status: 미학습
---

> 내 계정에 영향을 주는 AWS 장애 알림

| | |
|---|---|
| **카테고리** | 06-관리-거버넌스 |
| **배우는 모듈** | [[11-billing-support]] |
| **문제은행 출현** | 18회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

AWS 쪽 서비스 상태를 보여 주고, 그중에서 **내 계정과 내 리소스에 실제로 영향을 주는** 이벤트를 골라 알려 줍니다.

## 핵심 개념

- **서비스 상태(Service health)** — 리전별 AWS 서비스의 전반적인 가용성입니다. 로그인하지 않아도 누구나 볼 수 있는 공개 정보입니다.
- **계정 상태(Your account health)** — 내가 실제로 쓰고 있는 리소스에 영향을 주는 이벤트만 추려 보여 줍니다. 로그인해야 보이는 **개인화된 화면**입니다.
- **영향받는 리소스를 특정해 줍니다** — "어느 리전의 어떤 인스턴스가 영향을 받는지"까지 알려 주므로 바로 대응하실 수 있습니다.
- **앞으로 일어날 일도 알려 줍니다** — 진행 중인 장애뿐 아니라 **예정된 유지 관리 재부팅, 인증서 만료, 서비스 종료 예정** 같은 미리 대비할 항목도 올라옵니다.
- **EventBridge 연동** — Health 이벤트를 EventBridge로 받아 자동 대응(알림 발송, 스크립트 실행)을 걸 수 있습니다.

## 요금 모델

- **AWS Health Dashboard는 무료입니다.** 대시보드를 열어 보는 데 별도 요금이 붙지 않습니다.
- 다만 조직 전체를 한곳에서 보는 **Organizations 뷰**나 프로그래밍 방식의 **Health API 접근**은 Business 이상 지원 플랜에서 열립니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-cloudwatch]] | CloudWatch는 **내 리소스**의 지표를 봅니다. Health Dashboard는 **AWS 쪽 사정**을 알려 줍니다 |
| [[aws-trusted-advisor]] | Health Dashboard는 **지금 벌어지는 장애와 예정된 이벤트**를 알립니다. Trusted Advisor는 **평소에 개선할 점**을 권장합니다 |
| [[aws-support-plans]] | 장애가 내 계정에 영향을 주는지 확인하는 곳이 Health Dashboard이고, 사람에게 직접 문의하는 창구가 Support입니다 |

## 시험 포인트

- [ ] "AWS 서비스 중단이 내 리소스에 영향을 주는지 확인"이 보이면 Health Dashboard입니다
- [ ] "예정된 EC2 유지 관리 일정을 미리 통보받는다"도 Health Dashboard입니다
- [ ] 대시보드 자체는 **무료**입니다
- [ ] 내 애플리케이션의 성능 문제는 CloudWatch, **AWS 쪽 문제**는 Health Dashboard로 갈립니다
- [ ] 공개된 서비스 상태와 내 계정에 개인화된 이벤트가 구분되어 있습니다

## 관련 노트

- 모듈: [[11-billing-support]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
