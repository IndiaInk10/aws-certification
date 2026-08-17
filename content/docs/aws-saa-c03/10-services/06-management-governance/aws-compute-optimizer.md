---
title: "AWS Compute Optimizer"
tags: [aws, saa-c03, service, 관리]
category: 06-management-governance
status: 미학습
---

> `크기를 얼마로 줄여야 하는지 알려 달라` — 이 요구의 답

## 한 줄로 말하면

실제 사용률 지표를 머신러닝으로 분석해 **인스턴스 크기와 유형을 권장**합니다.

## 핵심 개념

- **분석 대상** — EC2 인스턴스 · 오토 스케일링 그룹 · EBS 볼륨 · **Lambda 메모리 설정** · ECS on Fargate
- `과다 프로비저닝된 자원을 찾아 적정 크기로` 의 표준 답입니다. `어느 인스턴스가 낭비인지 모르겠다` 도 여기입니다
- **CloudWatch 지표를 씁니다.** 기본 지표만으로는 메모리를 못 보므로, **메모리 기반 권장이 필요하면 CloudWatch 에이전트**를 설치해야 합니다 — 이 전제가 문제로 나옵니다
- **권장만 하고 바꾸지 않습니다.** 적용은 사람이 합니다
- **Organizations 로 전 계정**을 한 번에 볼 수 있습니다
- **Lambda 메모리 권장**이 특히 유용합니다 — 메모리를 올리면 CPU 도 함께 올라 오히려 총 비용이 내려가는 경우가 있습니다

## 요금 모델

- **무료**입니다(향상된 인프라 지표 옵션만 유료). 그래서 `추가 비용 없이 최적화 근거를 얻어야` 지문에서 유리합니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-cost-explorer\|Cost Explorer]] | **비용**을 분석. Compute Optimizer 는 **자원 크기** |
| AWS Trusted Advisor | 폭넓은 점검 항목 중 하나로 유휴 자원을 봅니다. 크기 권장은 Compute Optimizer 가 정밀 |
| [[amazon-ec2-auto-scaling\|Auto Scaling]] | 수를 늘리고 줍니다. 크기 권장이 아닙니다 |

## 시험 포인트

- [ ] `적정 크기 권장` · `과다 프로비저닝 식별` → **Compute Optimizer**
- [ ] `Lambda 메모리를 얼마로` → Compute Optimizer
- [ ] 메모리 기반 권장 → **CloudWatch 에이전트** 필요
- [ ] `비용이 어디서 나가는지` → Cost Explorer
- [ ] 권장은 자동 적용되지 않습니다

## 관련 노트

- 과제 명세: [[12-cost-compute\|4.2 비용 최적화 컴퓨팅]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Compute Optimizer](/docs/aws-clf-c02/10-services/06-management-governance/aws-compute-optimizer)
