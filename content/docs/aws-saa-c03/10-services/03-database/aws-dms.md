---
title: "AWS DMS"
tags: [aws, saa-c03, service, 데이터베이스]
category: 03-database
status: 미학습
---

> **데이터베이스 마이그레이션**. `다운타임 최소로 옮겨야` 가 신호이고, 엔진이 바뀌면 SCT 가 함께 온다

## 한 줄로 말하면

Database Migration Service. 데이터베이스를 다른 데이터베이스로 옮깁니다. 원본은 **계속 서비스하면서** 복제할 수 있습니다.

## 핵심 개념

- **연속 복제(CDC)** 가 핵심입니다 — 전체를 한 번 옮긴 뒤 그동안 바뀐 변경분을 계속 따라잡습니다. 마지막에 전환만 하면 되므로 **다운타임이 몇 분**으로 줄어듭니다. `서비스 중단 최소` 지문의 답
- **같은 엔진끼리**(Oracle → Oracle)도, **다른 엔진끼리**(Oracle → Aurora PostgreSQL)도 옮깁니다
- **엔진이 바뀌면 SCT(Schema Conversion Tool)** 로 스키마와 저장 프로시저를 먼저 변환합니다. **DMS 는 데이터를 옮기고, SCT 는 스키마를 바꿉니다** — 이 역할 분담이 그대로 문제가 됩니다
- **대상은 DB 만이 아닙니다** — S3, Kinesis, OpenSearch, Redshift 로도 보낼 수 있습니다
- **온프레미스 → AWS**, AWS → AWS, 리전 간 모두 가능합니다
- **복제 인스턴스**를 띄워 그 위에서 작업이 돕니다

## 요금 모델

- **복제 인스턴스 시간 + 스토리지** 입니다. 마이그레이션이 끝나면 지웁니다
- **동종 마이그레이션은 무료 티어 혜택**이 있는 경우가 있고, 전반적으로 저렴합니다
- 직접 덤프·복원 스크립트를 짜서 옮기는 보기보다 운영 부담이 낮습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| **SCT** | 스키마·코드 변환. 데이터 이동은 DMS |
| [[aws-datasync\|DataSync]] | **파일·객체** 전송. 데이터베이스가 아닙니다 |
| [[aws-glue\|Glue]] | 분석용 ETL |
| [[aws-snow-family\|Snowball]] | 대역폭이 병목인 대량 물리 이전 |

## 시험 포인트

- [ ] `다운타임 최소로 DB 이전` → **DMS 연속 복제(CDC)**
- [ ] `Oracle 을 Aurora PostgreSQL 로` → **SCT + DMS**
- [ ] 파일 서버 이전이면 DMS 가 아니라 **DataSync**
- [ ] 마이그레이션 완료 후 복제 인스턴스를 지우는 것이 비용 관리

## 관련 노트

- 과제 명세: [[08-perf-database\|3.3 고성능 데이터베이스]] · [[10-data-ingestion\|2.4 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS DMS](/docs/aws-clf-c02/10-services/03-database/aws-dms)
