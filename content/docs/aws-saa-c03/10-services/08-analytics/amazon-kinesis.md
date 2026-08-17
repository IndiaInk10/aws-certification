---
title: "Amazon Kinesis"
tags: [aws, saa-c03, service, 분석]
category: 08-analytics
status: 미학습
---

> **실시간 스트리밍**. Data Streams 냐 Firehose 냐를 가르는 것은 "직접 처리하느냐"

## 한 줄로 말하면

끊임없이 밀려오는 데이터를 실시간으로 받아 처리하거나 저장소로 흘려보냅니다.

## 핵심 개념

**Kinesis Data Streams**

- **내가 소비자를 만들어** 실시간으로 처리합니다. Lambda·KCL 애플리케이션이 읽습니다
- **데이터가 샤드에 보존**(기본 24시간, 최대 365일)되어 **여러 소비자가 같은 데이터를 각자** 읽을 수 있습니다. 재처리도 됩니다
- **순서가 파티션 키 단위로 보장**됩니다. `기기별 순서가 지켜져야` 가 신호입니다
- 처리량은 **샤드 수**로 정합니다(또는 온디맨드 모드)

**Kinesis Data Firehose**

- **완전 관리형 전달**입니다. S3·Redshift·OpenSearch·Splunk 로 **자동으로 실어 나릅니다**
- **거의 실시간**(버퍼 단위, 보통 60초 안팎)이라 `1초 미만` 요구에는 맞지 않습니다
- **Lambda 로 변환**을 끼워 넣고 **Parquet 로 변환**할 수 있습니다
- **보존이 없습니다** — 재처리가 필요하면 Data Streams 입니다
- `운영 부담 최소로 S3 에 적재` 는 거의 항상 Firehose 입니다

**Managed Service for Apache Flink** — 스트림 위에서 **SQL/Flink 로 실시간 집계**를 합니다. `실시간 이상 탐지`·`5분 이동 평균` 이 신호입니다.

**Kinesis Video Streams** — 영상 스트림 전용입니다.

## 요금 모델

- **Data Streams** — 샤드 시간 + PUT 페이로드 단위, 또는 온디맨드(처리량 기준). 보존을 늘리면 추가 요금
- **Firehose** — 수집한 데이터 양만큼. 서버·샤드 개념이 없어 **관리와 비용 예측이 쉽습니다**
- 그래서 `S3 로 보내기만 하면 된다` 인데 Data Streams 를 골라 샤드를 관리하는 보기는 과한 구성입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-sqs\|SQS]] | 메시지를 **소비하면 사라집니다.** 여러 소비자가 같은 데이터를 읽지 못하고, 순서 보장은 FIFO 큐에서만 |
| [[amazon-sns\|SNS]] | 발행-구독 알림. 저장·재생이 없습니다 |
| [[amazon-eventbridge\|EventBridge]] | 이벤트 라우팅. 대량 스트림 처리가 아닙니다 |

## 시험 포인트

- [ ] `실시간` + `여러 소비자가 각자 처리` + `재처리` → **Data Streams**
- [ ] `S3/Redshift 로 최소 운영 부담으로 적재` → **Firehose**
- [ ] `1초 미만 지연` → Firehose 탈락, Data Streams
- [ ] `이동 평균·실시간 집계` → **Managed Service for Apache Flink**
- [ ] `순서 보장이 필요한 IoT 기기 데이터` → 파티션 키 = 기기 ID
- [ ] 처리량 부족 → **샤드 추가** 또는 온디맨드

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]] · [[04-scalable-decoupled\|2.1 확장·느슨한 결합]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Kinesis](/docs/aws-clf-c02/10-services/08-analytics/amazon-kinesis)
