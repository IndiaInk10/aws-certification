---
title: "Amazon GuardDuty"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **위협 탐지**. 로그를 알아서 읽고 이상 행위를 찾는다 — 에이전트가 없다

## 한 줄로 말하면

CloudTrail·VPC 흐름 로그·DNS 로그를 자동으로 분석해 **악성 활동과 이상 행위**를 찾아냅니다.

## 핵심 개념

- **켜기만 하면 됩니다** — 에이전트 설치도, 로그 파이프라인 구성도 없습니다. `운영 부담 최소로 위협 탐지` 지문의 답이 되는 이유입니다
- **분석하는 로그** — CloudTrail 이벤트 · VPC 흐름 로그 · Route 53 DNS 로그. 여기에 S3 보호, EKS 보호, 맬웨어 스캔, RDS 로그인 이상 탐지를 추가로 켤 수 있습니다
- **찾아내는 것** — 암호화폐 채굴, 알려진 악성 IP 와의 통신, 비정상적인 API 호출, 자격 증명 유출로 의심되는 사용 패턴, 포트 스캔
- **결과는 EventBridge 로 흘려** Lambda·SNS 로 자동 대응할 수 있습니다. `탐지되면 자동으로 격리·알림` 의 표준 구성
- **조직 단위로 켤 수 있습니다** — 위임 관리자 계정에서 전 계정 결과를 봅니다
- **탐지만 합니다.** 차단은 하지 않습니다 — 차단이 필요하면 WAF·보안 그룹·NACL 쪽으로 연결됩니다

## 요금 모델

- **분석한 이벤트 양·흐름 로그 양** 에 비례합니다. 30일 무료 평가판이 있습니다
- 직접 로그를 모아 분석 파이프라인을 세우는 것보다 운영 비용이 훨씬 낮습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| Amazon Inspector | **취약점**(패치 안 된 소프트웨어, CVE)을 검사. GuardDuty 는 **행위** |
| [[amazon-macie\|Macie]] | S3 안의 **민감 데이터**를 찾습니다 |
| AWS Security Hub | 여러 보안 서비스 결과를 **모아 보는** 대시보드 |
| AWS Config | **구성이 규칙에 맞는지**. 공격 탐지가 아닙니다 |

## 시험 포인트

- [ ] `악성 IP 와 통신` · `암호화폐 채굴` · `비정상 API 호출` → **GuardDuty**
- [ ] `에이전트 없이 · 운영 부담 최소로 위협 탐지` → GuardDuty
- [ ] `EC2 의 미패치 취약점` → **Inspector**
- [ ] `S3 에 개인정보가 있는지` → **Macie**
- [ ] `구성이 규정에 맞는지` → **Config**
- [ ] 탐지 후 자동 대응 → **EventBridge → Lambda/SNS**

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon GuardDuty](/docs/aws-clf-c02/10-services/05-security-identity/amazon-guardduty)
