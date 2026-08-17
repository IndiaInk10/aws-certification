---
title: "AWS Control Tower"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **새 계정을 표준대로 자동으로** 만든다. Organizations 위에 얹는 자동화 계층

## 한 줄로 말하면

멀티 계정 환경(랜딩 존)을 모범 사례대로 세우고, 새 계정이 그 규칙을 따르게 강제합니다.

## 핵심 개념

- `팀마다 계정을 계속 만들어야 하는데 매번 같은 설정을 반복한다` → Control Tower 입니다
- **계정 팩토리(Account Factory)** — 새 계정을 표준 구성(로깅, 보안 기준선, 네트워크)과 함께 자동 생성합니다
- **컨트롤(가드레일)**

| | 무엇 |
|---|---|
| **예방적** | [[aws-organizations\|SCP]] 로 **아예 못 하게** 막습니다 |
| **탐지적** | AWS Config 규칙으로 **위반을 찾아 보고**합니다 |
| 사전 예방적 | 배포 전에 CloudFormation 훅으로 차단 |

- **[[aws-organizations\|Organizations]]·[[aws-iam-identity-center\|IAM Identity Center]]·CloudTrail·Config·S3 로그 보관**을 한 번에 구성합니다
- **대시보드**로 전 계정의 규정 준수 상태를 봅니다
- 이미 Organizations 를 쓰고 있어도 **기존 계정을 등록**할 수 있습니다
- **직접 SCP 와 Config 를 하나씩 구성하는 보기**와 대비됩니다 — 운영 부담이 판단 기준입니다

## 요금 모델

- Control Tower 자체는 무료이고, **그것이 켜는 서비스(Config, CloudTrail, S3 저장)** 요금이 붙습니다
- 계정 설정을 수작업으로 반복하는 인건비를 없애는 쪽의 절감입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-organizations\|Organizations]] | 계정 묶음과 SCP 라는 **재료**. Control Tower 는 그것을 **자동으로 조립** |
| AWS Config | 규칙 준수 감시. 계정 생성 자동화가 아닙니다 |
| [[aws-firewall-manager\|Firewall Manager]] | 방화벽 규칙 배포 전용 |
| CloudFormation StackSets | 템플릿을 여러 계정에 배포. 랜딩 존 전체는 아닙니다 |

## 시험 포인트

- [ ] `새 계정을 표준 구성대로 빠르게` → **Control Tower 계정 팩토리**
- [ ] `모든 계정에 일관된 가드레일` → 예방적·탐지적 컨트롤
- [ ] 규칙 하나만 강제하면 되면 → **SCP** 로 충분
- [ ] `규정 준수 상태를 한눈에` → Control Tower 대시보드

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Control Tower](/docs/aws-clf-c02/10-services/05-security-identity/aws-control-tower)
