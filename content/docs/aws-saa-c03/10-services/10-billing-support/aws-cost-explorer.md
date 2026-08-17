---
title: "AWS Cost Explorer"
tags: [aws, saa-c03, service, 관리]
category: 06-management-governance
status: 미학습
---

> `어디에 얼마 썼는지 분석` 은 Cost Explorer, `넘으면 알림` 은 Budgets

## 한 줄로 말하면

비용과 사용량을 시각화하고 분석합니다. 무엇이 비싼지 찾아내는 도구입니다.

## 핵심 개념

- **서비스·계정·리전·태그별로 쪼개 봅니다.** `어느 팀이 얼마를 쓰는지` 를 보려면 **비용 할당 태그**가 켜져 있어야 합니다 — 이 전제가 문제로 나옵니다
- **예측** — 과거 추세로 향후 비용을 추정합니다
- **권장 사항** — 예약 인스턴스·Savings Plans 구매 추천, 사용률이 낮은 EC2 를 찾아 축소 제안
- **[[aws-organizations\|Organizations]]** 와 함께 쓰면 관리 계정에서 전 계정 비용을 봅니다
- **Cost Anomaly Detection** — 평소와 다른 지출 급증을 자동으로 감지해 알립니다
- **분석 도구이지 강제 도구가 아닙니다.** 한도를 넘지 못하게 막는 것은 IAM/SCP 쪽입니다

**함께 나오는 것들**

| | 하는 일 |
|---|---|
| **AWS Budgets** | 예산을 정하고 **초과·예상 초과 시 알림**. 사후 분석이 아니라 사전 경고 |
| **Cost and Usage Report(CUR)** | 가장 상세한 원본 데이터를 S3 로. Athena·QuickSight 로 분석 |
| **[[aws-compute-optimizer\|Compute Optimizer]]** | 인스턴스 크기 권장 |
| **AWS Trusted Advisor** | 유휴 자원 등 비용 점검 항목 |

## 요금 모델

- **콘솔 사용은 무료**입니다. API 호출은 요청당 소액이 붙습니다
- CUR 은 S3 저장 요금이 붙습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| **AWS Budgets** | `임계값을 넘으면 알림` → Budgets. 분석은 Cost Explorer |
| **CUR** | 원본 상세 데이터. 시각화가 필요하면 Cost Explorer |
| Compute Optimizer | 자원 크기 권장 |

## 시험 포인트

- [ ] `어느 팀·서비스가 얼마를 썼는지 분석` → **Cost Explorer**
- [ ] `예산을 넘으면 알림` → **Budgets**
- [ ] 태그별 비용이 안 보인다 → **비용 할당 태그**를 활성화해야
- [ ] `평소와 다른 급증을 자동 감지` → **Cost Anomaly Detection**
- [ ] `가장 상세한 원본을 직접 분석` → **CUR + Athena**

## 관련 노트

- 과제 명세: [[11-cost-storage\|4.1 비용 최적화 스토리지]] · [[12-cost-compute\|4.2 비용 최적화 컴퓨팅]] · [[14-cost-network\|4.4 비용 최적화 네트워크]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Cost Explorer](/docs/aws-clf-c02/10-services/10-billing-support/aws-cost-explorer)
