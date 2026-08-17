---
title: "AWS Config"
tags: [aws, saa-c03, service, 관리]
category: 06-management-governance
status: 미학습
---

> **구성이 규칙에 맞는가**. 막지는 못하고 **찾아내고 고칩니다**

## 한 줄로 말하면

자원의 구성을 계속 기록하고, 정해 둔 규칙에 맞는지 평가합니다. 어긋난 것을 찾아 **자동으로 되돌릴** 수도 있습니다.

## 핵심 개념

- **탐지적입니다 — 막지 못합니다.** 위반이 일어난 뒤에 찾아냅니다. **아예 못 하게 하려면 [[aws-organizations\|SCP]]** 나 IAM 입니다. 이 예방 vs 탐지 대비가 그대로 문항입니다
- **관리형 규칙**이 많습니다 — `S3 버킷이 공개인지`, `EBS 가 암호화됐는지`, `보안 그룹에 0.0.0.0/0 22번이 열렸는지`. 없으면 **Lambda 로 사용자 지정 규칙**을 씁니다
- **자동 수정(remediation)** — [[aws-systems-manager\|Systems Manager]] 자동화로 위반을 되돌립니다. `공개된 버킷을 발견하면 자동으로 비공개로` 의 답
- **구성 이력** — 자원이 시간에 따라 어떻게 바뀌었는지 타임라인으로 봅니다. `언제부터 이 설정이었나` 의 답
- **집계자(aggregator)** — 여러 계정·리전의 준수 상태를 **한 곳에** 모읍니다
- **적합성 팩(Conformance Pack)** — 규칙 묶음을 한 번에 배포합니다
- **EventBridge·SNS** 로 위반 알림을 보냅니다

## 요금 모델

- **기록한 구성 항목 수 + 규칙 평가 횟수** 로 붙습니다. 자원이 많고 변경이 잦으면 비쌉니다
- 기록 대상 자원 유형을 좁히는 것이 비용 관리 방법입니다
- [[aws-control-tower\|Control Tower]] 를 켜면 Config 가 함께 켜져 이 요금이 따라옵니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-cloudtrail\|CloudTrail]] | **누가 호출했는지**. Config 는 **결과 구성이 어떤지** |
| [[amazon-cloudwatch\|CloudWatch]] | 성능·상태 지표 |
| [[aws-organizations\|SCP]] | **예방** — 애초에 못 하게. Config 는 **탐지** |
| [[amazon-inspector\|Inspector]] | 소프트웨어 **취약점** |
| AWS Security Hub | 여러 결과를 모아 보는 곳 |

## 시험 포인트

- [ ] `규정 준수 여부를 지속 확인` → **Config**
- [ ] `위반을 발견하면 자동으로 되돌려라` → Config 규칙 + **SSM 자동화 수정**
- [ ] `애초에 못 하게 막아라` → Config 가 아니라 **SCP / IAM**
- [ ] `이 보안 그룹이 언제부터 열려 있었나` → **구성 이력**
- [ ] `여러 계정의 준수 상태를 한 화면에` → **집계자**
- [ ] `누가 열었나` 는 **CloudTrail**

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]] · [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Config](/docs/aws-clf-c02/10-services/06-management-governance/aws-config)
