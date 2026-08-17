---
title: "Amazon Athena"
tags: [aws, saa-c03, service, 분석]
category: 08-analytics
status: 미학습
---

> **S3 를 SQL 로 그 자리에서** 조회한다. 서버도 없고 옮기지도 않는다

## 한 줄로 말하면

S3 에 있는 데이터를 표준 SQL 로 바로 조회합니다. 인프라가 없고, **스캔한 데이터 양만큼만** 냅니다.

## 핵심 개념

- `데이터를 옮기지 않고` · `가끔 한 번 조회` · `최소한의 운영 부담` → Athena 입니다. 웨어하우스를 세우는 보기와 대비됩니다
- **[[aws-glue\|Glue 데이터 카탈로그]]** 가 스키마를 제공합니다. Glue 크롤러로 스키마를 자동 발견합니다
- **조회하는 대상** — CloudTrail 로그, VPC 흐름 로그, ALB 액세스 로그, S3 로 내보낸 DynamoDB 데이터. 시험에서 `로그를 분석하려면` 이 자주 이 조합입니다
- **QuickSight** 를 붙여 시각화합니다

**비용을 줄이는 세 가지 — 그대로 문제가 됩니다**

1. **열 지향 형식(Parquet·ORC)으로 변환** — 필요한 열만 읽어 스캔량이 크게 줍니다
2. **압축**
3. **파티셔닝**(날짜·리전 등) — S3 경로를 `year=/month=/day=` 로 나누면 해당 파티션만 스캔합니다
4. **작은 파일을 합치기** — 파일이 잘게 쪼개져 있으면 오버헤드가 큽니다. **128MB 이상**으로 뭉칩니다

**연합 쿼리(Federated Query)** — Lambda 커넥터를 통해 **S3 밖의 원본**(RDS·DynamoDB·Redshift·온프레미스 DB)까지 같은 SQL 로 조회합니다. `여러 곳에 흩어진 데이터를 한 번에` 의 답이고, 전부 S3 로 모으는 보기와 대비됩니다.

## 요금 모델

- **스캔한 데이터 양(TB 당)** 입니다. 쿼리를 안 하면 0 원입니다
- 그래서 `사용량이 적고 간헐적` 이면 Redshift 클러스터보다 압도적으로 쌉니다
- 반대로 **같은 큰 테이블을 하루 종일 반복 조회**하면 스캔 요금이 쌓여 Redshift 가 유리해집니다. 이 뒤집힘이 판단 포인트입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-redshift\|Redshift]] | 상시 대시보드·복잡한 조인. Athena 는 임시 조회 |
| **S3 Select** | 객체 **하나** 안에서 일부만 꺼냅니다. 여러 파일 조인 불가 |
| [[amazon-emr\|EMR]] | Spark·Hadoop 코드가 필요할 때 |
| [[aws-glue\|Glue]] | Glue 는 **ETL·카탈로그**, Athena 는 **조회** |

## 시험 포인트

- [ ] `S3 를 옮기지 않고 SQL 로` → **Athena**
- [ ] `가끔 임시 조회 · 서버 없이 · 최소 비용` → Athena
- [ ] Athena 비용 절감 → **Parquet 변환 · 압축 · 파티셔닝**
- [ ] `상시 BI 대시보드` → Redshift
- [ ] `객체 하나에서 일부 행만` → S3 Select
- [ ] `여러 원본(RDS·DynamoDB·온프레미스)을 한 SQL 로` → **연합 쿼리**
- [ ] 작은 파일이 많아 느리다 → **128MB 이상으로 병합**

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]] · [[11-cost-storage\|4.1 비용 최적화 스토리지]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Athena](/docs/aws-clf-c02/10-services/08-analytics/amazon-athena)
