---
title: "AWS Firewall Manager"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> 규칙을 만드는 게 아니라 **여러 계정에 강제로 배포**한다

## 한 줄로 말하면

WAF·Shield Advanced·보안 그룹·Network Firewall 규칙을 **조직 전체 계정에 일괄 적용**합니다.

## 핵심 개념

- **[[aws-organizations\|Organizations]] 가 전제**입니다. 계정 하나짜리 지문이면 답이 아닙니다
- **새로 만들어지는 자원에도 자동 적용**됩니다. 이것이 결정적입니다 — 계정이 늘거나 ALB 가 새로 생겨도 규칙이 따라붙습니다. `누락 없이` · `앞으로 만들어질 것까지` 가 신호입니다
- **정책 유형** — WAF 규칙 그룹, Shield Advanced 보호, 보안 그룹 감사·공통 규칙, Network Firewall, Route 53 Resolver DNS Firewall
- **위반을 보고**합니다 — 규칙에서 벗어난 자원을 찾아 알려 줍니다
- **규칙 자체는 WAF 쪽에서 정의**합니다. Firewall Manager 는 배포·감사 계층입니다

## 요금 모델

- **보호 정책마다 월 요금** + 그 아래 서비스(WAF, Shield Advanced) 요금이 따로 붙습니다
- 계정 수가 적으면 각 계정에서 직접 WAF 를 붙이는 편이 쌉니다. 계정이 많을수록 이득이 커집니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-waf\|WAF]] | 규칙을 **정의하고 한 자원에** 붙입니다 |
| AWS Config | **구성 준수**를 감시. 방화벽 규칙 배포는 아닙니다 |
| [[aws-organizations\|SCP]] | API 권한 한도. 네트워크 규칙이 아닙니다 |

## 시험 포인트

- [ ] `여러 계정에 동일한 WAF 규칙` → **Firewall Manager**
- [ ] `앞으로 생길 자원에도 자동으로` → Firewall Manager
- [ ] 계정이 하나뿐이면 → WAF 를 직접
- [ ] `보안 그룹이 제멋대로 열려 있는지 감사` → Firewall Manager 공통 보안 그룹 정책

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Firewall Manager](/docs/aws-clf-c02/10-services/05-security-identity/aws-firewall-manager)
