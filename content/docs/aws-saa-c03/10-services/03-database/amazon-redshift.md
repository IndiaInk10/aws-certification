---
title: "Amazon Redshift"
tags: [aws, saa-c03, service, 데이터베이스]
category: 03-database
status: 미학습
---

> **데이터 웨어하우스**. `분석`·`BI`·`복잡한 조인이 있는 대용량 쿼리` 가 신호다

## 한 줄로 말하면

페타바이트 규모 데이터 웨어하우스입니다. 열 지향 저장 + 병렬 처리로 대규모 집계 쿼리를 빠르게 돌립니다.

## 핵심 개념

- **분석용이지 트랜잭션용이 아닙니다.** 주문 처리처럼 초당 작은 쓰기가 많은 워크로드는 RDS·DynamoDB 쪽입니다
- **Redshift Spectrum** — **S3 의 데이터를 로드하지 않고 그 자리에서** 조회합니다. `데이터를 옮기지 않고 웨어하우스와 함께 조회` 의 답
- **복잡한 조인·반복 대시보드 쿼리**가 지문에 있으면 Athena 보다 Redshift 쪽입니다. Athena 는 가끔 하는 임시 조회에 유리합니다
- **동시성 확장** — 쿼리가 몰릴 때 클러스터를 임시로 늘립니다
- **AQUA·머티리얼라이즈드 뷰**로 반복 쿼리를 빠르게 합니다
- **Redshift Serverless** — 클러스터를 관리하지 않고 쓴 만큼 냅니다. `간헐적 분석` 이면 이쪽
- **DR** — 스냅샷을 다른 리전으로 복사합니다. 단일 AZ 배포가 기본이라 가용성 요구가 크면 이 점을 봅니다
- **데이터 공유**로 클러스터 간·계정 간에 복사 없이 데이터를 봅니다

## 요금 모델

- **노드 시간 + 백업 스토리지** 입니다. 예약 노드로 크게 할인됩니다
- **RA3 노드**는 컴퓨트와 스토리지를 분리해 스토리지를 쓴 만큼만 냅니다
- **일시 중지·재개**가 되어 야간·주말에 멈추면 요금이 멈춥니다. `분석을 업무 시간에만` 이면 이것이 절감 답입니다
- **Serverless** 는 유휴가 많은 경우 더 쌉니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-athena\|Athena]] | 서버리스·S3 직접 쿼리·**스캔한 만큼 과금**. 가끔 하는 조회면 Athena |
| [[amazon-rds\|RDS]]·[[amazon-aurora\|Aurora]] | 트랜잭션 처리 |
| [[amazon-emr\|EMR]] | Spark·Hadoop 프레임워크가 필요할 때 |
| [[amazon-opensearch-service\|OpenSearch]] | 로그 검색·전문 검색 |

## 시험 포인트

- [ ] `BI 대시보드` · `대용량 집계·복잡한 조인` → **Redshift**
- [ ] `S3 데이터를 옮기지 않고 함께 조회` → **Spectrum**
- [ ] `가끔 한 번 S3 를 SQL 로` → **Athena** (Redshift 는 과함)
- [ ] `업무 시간에만 쓴다` → **일시 중지** 또는 **Serverless**
- [ ] 초당 소량 쓰기가 많은 OLTP 에 Redshift → 오답

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]] · [[08-perf-database\|3.3 고성능 데이터베이스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Redshift](/docs/aws-clf-c02/10-services/03-database/amazon-redshift)
