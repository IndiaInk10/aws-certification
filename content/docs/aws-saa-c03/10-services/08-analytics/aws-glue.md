---
title: "AWS Glue"
tags: [aws, saa-c03, service, 분석]
category: 08-analytics
status: 미학습
---

> 서버리스 **ETL + 데이터 카탈로그**. `스키마를 자동으로 알아내야` 면 크롤러다

## 한 줄로 말하면

데이터를 추출·변환·적재(ETL)하고, 어디에 무엇이 있는지 **카탈로그**로 정리합니다. 서버가 없습니다.

## 핵심 개념

- **데이터 카탈로그** — 테이블 스키마의 중앙 저장소입니다. [[amazon-athena\|Athena]]·[[amazon-redshift\|Redshift]] Spectrum·[[amazon-emr\|EMR]] 이 모두 이 카탈로그를 봅니다
- **크롤러** — S3 등을 훑어 **스키마를 자동으로 발견**해 카탈로그에 넣습니다. `데이터 구조를 모른다` · `스키마가 자주 바뀐다` 가 신호입니다
- **ETL 작업** — Spark 기반으로 변환합니다. **CSV → Parquet 변환**이 시험 단골인데, Athena 비용 절감과 바로 이어집니다
- **DataBrew** — 코드 없이 시각적으로 데이터를 정제합니다. `개발자가 아닌 분석가가` 면 이쪽
- **서버리스** — 클러스터를 세우지 않습니다. EMR 과 갈리는 지점입니다
- **트리거·워크플로**로 일정·이벤트에 맞춰 돌립니다

## 요금 모델

- **DPU 시간(초 단위)** 으로 붙습니다. 작업이 돌 때만 냅니다
- **카탈로그는 저장 객체 수·요청 수** 기준이며 무료 구간이 큽니다
- 상시 EMR 클러스터를 띄우는 것보다 간헐적 ETL 에서 훨씬 쌉니다 — 이것이 `운영 부담과 비용 최소` 지문에서 Glue 가 답이 되는 이유입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-emr\|EMR]] | 클러스터를 직접 통제. Spark 세부 튜닝·기존 Hadoop 자산이 있을 때 |
| [[amazon-athena\|Athena]] | Athena 는 **조회**, Glue 는 **변환·카탈로그** |
| AWS DMS | 데이터베이스 **마이그레이션**. Glue 는 분석용 변환 |
| [[aws-datasync\|DataSync]] | 파일을 **옮기기만** 합니다 |

## 시험 포인트

- [ ] `스키마를 자동으로 발견` → **Glue 크롤러**
- [ ] `서버리스 ETL · 운영 부담 최소` → **Glue**
- [ ] `Athena 비용을 줄여야` → Glue 로 **Parquet 변환 + 파티셔닝**
- [ ] `Spark 클러스터를 세밀하게 제어` → EMR
- [ ] `코드 없이 데이터 정제` → **DataBrew**

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Glue](/docs/aws-clf-c02/10-services/08-analytics/aws-glue)
