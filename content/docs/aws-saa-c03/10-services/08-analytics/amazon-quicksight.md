---
title: "Amazon QuickSight"
tags: [aws, saa-c03, service, 분석]
category: 08-analytics
status: 미학습
---

> **BI 대시보드**. 데이터를 만드는 쪽이 아니라 **보여 주는** 쪽이다

## 한 줄로 말하면

서버리스 BI 서비스입니다. Athena·Redshift·RDS·S3 의 데이터를 대시보드로 만들어 사용자에게 보여 줍니다.

## 핵심 개념

- `경영진이 대시보드로 봐야` · `사용자마다 자기 데이터만 보이게` → QuickSight 입니다
- **연결 대상** — [[amazon-athena\|Athena]] · [[amazon-redshift\|Redshift]] · RDS · S3 · OpenSearch · 온프레미스 DB
- **SPICE** — 인메모리 엔진에 데이터를 올려 두면 원본을 매번 조회하지 않아 **빠르고 원본 부하도 줄어듭니다**
- **행 수준 보안(RLS)** — 사용자·그룹에 따라 **같은 대시보드에서 다른 행만** 보이게 합니다. `부서별로 자기 데이터만` 의 답
- **임베딩** — 우리 애플리케이션 안에 대시보드를 끼워 넣습니다
- **VPC 연결**로 프라이빗 데이터 원본에 닿습니다
- **분석 자체를 하지는 않습니다** — 쿼리는 Athena·Redshift 가 하고 QuickSight 는 시각화 계층입니다

## 요금 모델

- **사용자 단위 구독(작성자·구독자)** 이고, **세션 단위 과금**을 고르면 가끔 보는 사용자가 많을 때 훨씬 쌉니다
- SPICE 용량에 별도 요금이 붙습니다
- 서버가 없어 BI 서버를 EC2 로 운영하는 것보다 운영 부담이 낮습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-athena\|Athena]] | 쿼리 엔진. 시각화는 QuickSight |
| [[amazon-opensearch-service\|OpenSearch Dashboards]] | 로그 검색 중심 대시보드 |
| CloudWatch 대시보드 | 운영 지표용 |

## 시험 포인트

- [ ] `BI 대시보드로 시각화` → **QuickSight**
- [ ] `사용자마다 다른 행만` → **행 수준 보안**
- [ ] `원본 DB 부하를 줄이며 빠르게` → **SPICE**
- [ ] `가끔 보는 사용자가 많다` → **세션 단위 과금**
- [ ] `S3 를 SQL 로 조회` 자체는 Athena — QuickSight 는 그 위

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon QuickSight](/docs/aws-clf-c02/10-services/08-analytics/amazon-quicksight)
