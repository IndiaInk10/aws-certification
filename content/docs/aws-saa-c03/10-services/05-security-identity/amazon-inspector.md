---
title: "Amazon Inspector"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **취약점**을 찾는다. 행위는 GuardDuty, 데이터는 Macie

## 한 줄로 말하면

EC2·컨테이너 이미지·Lambda 를 자동으로 스캔해 **알려진 취약점(CVE)과 잘못된 노출**을 찾아냅니다.

## 핵심 개념

- **대상** — EC2 인스턴스 · **ECR 의 컨테이너 이미지** · Lambda 함수
- **지속적·자동 스캔**입니다. 새 이미지를 푸시하거나 새 CVE 가 공개되면 **다시 스캔**합니다. `배포 전에 취약점을 잡아야` · `상시 점검` 의 답
- **EC2 는 SSM 에이전트**를 통해 스캔합니다 — [[aws-systems-manager\|Systems Manager]] 가 전제입니다
- **네트워크 도달 가능성**도 봅니다 — 의도치 않게 인터넷에 열린 포트를 찾아 줍니다
- **위험 점수**로 우선순위를 매겨 줍니다
- **Security Hub·EventBridge** 로 결과를 보내 자동 대응을 붙입니다
- **찾을 뿐 고치지 않습니다** — 패치는 [[aws-systems-manager\|Patch Manager]] 가 합니다. 이 둘을 잇는 것이 전형적인 정답 구성입니다

## 요금 모델

- **스캔한 인스턴스 시간 · 이미지 수 · Lambda 함수 수** 기준입니다
- 취약점 스캐너를 직접 운영하는 것보다 운영 부담이 낮습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-guardduty\|GuardDuty]] | **악성 행위** 탐지(로그 기반). Inspector 는 **취약점** |
| [[amazon-macie\|Macie]] | S3 의 **민감 데이터** |
| AWS Config | **구성 규칙** 준수 |
| AWS Security Hub | 결과를 **모아 보는** 곳 |

## 시험 포인트

- [ ] `EC2·컨테이너 이미지의 CVE` → **Inspector**
- [ ] `ECR 에 푸시할 때마다 스캔` → Inspector
- [ ] `침해 행위 탐지` → GuardDuty / `S3 개인정보` → Macie
- [ ] Inspector 로 EC2 를 스캔하려면 **SSM 에이전트** 필요
- [ ] 발견 후 패치 → **Patch Manager**

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Inspector](/docs/aws-clf-c02/10-services/05-security-identity/amazon-inspector)
