---
title: "AWS Lake Formation"
tags: [aws, saa-c03, service, 분석]
category: 08-analytics
status: 미학습
---

> **행·열 단위 권한**이 필요할 때. 버킷 정책으로는 거기까지 못 간다

## 한 줄로 말하면

데이터 레이크를 세우고, 그 안의 데이터에 **테이블·열·행 수준 접근 권한**을 겁니다.

## 핵심 개념

- **핵심은 세밀한 권한입니다** — S3 버킷 정책은 **객체 단위**까지입니다. `분석가는 이 열만 볼 수 있게` · `지사별로 자기 지역 행만` 은 버킷 정책으로 풀 수 없고 Lake Formation 이 답입니다
- **[[aws-glue\|Glue]] 위에 올라갑니다** — 데이터 카탈로그를 그대로 쓰고, 그 위에 권한 계층을 얹습니다
- **한 곳에서 권한을 정하면** [[amazon-athena\|Athena]]·[[amazon-redshift\|Redshift]] Spectrum·[[amazon-emr\|EMR]]·QuickSight 가 모두 그 권한을 따릅니다. 서비스마다 따로 IAM 을 짜는 보기와 대비됩니다
- **블루프린트**로 RDS·S3·온프레미스 DB 에서 데이터를 끌어오는 수집 파이프라인을 자동 생성합니다
- **계정 간 공유**를 태그 기반으로 관리합니다
- **저장은 여전히 S3** 입니다. Lake Formation 이 데이터를 따로 보관하지 않습니다

## 요금 모델

- **Lake Formation 자체는 무료**입니다. 아래에서 도는 Glue·S3·Athena 요금만 붙습니다
- 그래서 `추가 비용 없이 세밀한 권한` 지문에서 유리합니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-glue\|Glue]] | ETL·카탈로그. 권한 계층이 없습니다 |
| S3 버킷 정책 | **객체 단위**까지. 열·행은 불가 |
| [[amazon-quicksight\|QuickSight]] 행 수준 보안 | **대시보드 안에서만**. Lake Formation 은 조회 엔진 전체에 적용 |

## 시험 포인트

- [ ] `특정 열만` · `특정 행만` 접근 → **Lake Formation**
- [ ] `여러 분석 서비스에 같은 권한을 한 번에` → Lake Formation
- [ ] 객체 단위로 충분하면 → **버킷 정책**(더 단순)
- [ ] 데이터는 여전히 **S3 에** 있습니다

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]] · [[03-data-protection\|1.3 데이터 보안]]
- 비교: [[service-comparisons]]

> CLF-C02 범위 밖의 서비스입니다. 바탕이 되는 [CLF-C02 의 AWS Glue](/docs/aws-clf-c02/10-services/08-analytics/aws-glue) 를 먼저 보세요.
