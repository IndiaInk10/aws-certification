---
title: "Amazon OpenSearch Service"
tags: [aws, saa-c03, service, 분석]
category: 08-analytics
status: 미학습
---

> **로그 검색·전문 검색**. `키워드로 빠르게 찾아야` 가 신호다

## 한 줄로 말하면

로그와 문서를 색인해 **거의 실시간으로 검색·분석**합니다. 대시보드가 함께 딸려 옵니다.

## 핵심 개념

- `수백만 건의 로그를 키워드로 즉시 검색` · `전문 검색` · `실시간 대시보드` → OpenSearch 입니다
- **적재 경로** — [[amazon-kinesis\|Kinesis Data Firehose]] 나 CloudWatch Logs 구독 필터로 흘려 넣는 구성이 표준입니다
- **OpenSearch Dashboards** 로 시각화합니다
- **UltraWarm · 콜드 스토리지** — 오래된 색인을 S3 기반 저층으로 내려 **비용을 크게 줄입니다.** `로그를 오래 보관하되 저렴하게` 의 답
- **다중 AZ + 전용 마스터 노드**로 가용성을 확보합니다
- **VPC 안에 배치**해 프라이빗하게 접근할 수 있습니다
- **서버리스** 옵션이 있습니다
- 관계형 쿼리·트랜잭션용이 아닙니다

## 요금 모델

- **인스턴스 시간 + EBS 스토리지** 입니다. 상시 클러스터라 유휴에도 요금이 붙습니다
- **UltraWarm/콜드로 오래된 데이터를 옮기는 것**이 비용 최적화의 핵심입니다
- 로그를 그냥 보관만 하면 되는 경우에는 S3 + Athena 가 훨씬 쌉니다 — **검색이 필요한지**가 갈림길입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| CloudWatch Logs Insights | 간단한 로그 조회는 이것으로 충분. 복잡한 검색·대시보드면 OpenSearch |
| [[amazon-athena\|Athena]] | S3 를 SQL 로. 검색 엔진이 아닙니다 |
| [[amazon-redshift\|Redshift]] | 구조화된 대규모 집계 |
| Amazon Kendra | 자연어 질문 기반 지능형 검색 |

## 시험 포인트

- [ ] `로그를 키워드로 실시간 검색` · `전문 검색` → **OpenSearch**
- [ ] 적재 → **Kinesis Data Firehose** 또는 CloudWatch Logs 구독
- [ ] `오래된 로그를 저렴하게 보관하되 검색은 가능` → **UltraWarm/콜드**
- [ ] 검색이 필요 없고 보관만이면 → **S3 + Athena**

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]] · [[08-perf-database\|3.3 고성능 데이터베이스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon OpenSearch Service](/docs/aws-clf-c02/10-services/08-analytics/amazon-opensearch-service)
