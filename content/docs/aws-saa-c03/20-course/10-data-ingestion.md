---
title: "3.5 고성능 데이터 수집 및 변환 솔루션 결정"
description: "실시간인가 배치인가 · 코드를 쓸 것인가 흘려보낼 것인가"
tags: [saa-c03, 도메인3, 과제명세]
kind: domain
module: 10
status: 미학습
---

> 도메인 3 · 고성능 아키텍처 설계 **24%** · 과제 명세 5개 중 **다섯 번째**

## 1. 왜 필요한가

> 실제 시험에 **EMR 과 EMR 클러스터**가 나왔다는 보고가 있습니다. 분석 서비스는 이름만 알아서는 안 됩니다.

이 과제는 데이터가 **들어와서 · 쌓이고 · 바뀌고 · 조회되는** 한 줄기를 묻습니다.
서비스 이름은 많지만 판단은 두 축으로 정리됩니다.

- **실시간인가 배치인가**
- **코드를 쓸 것인가, 그냥 흘려보낼 것인가**

이 두 축만 잡으면 Kinesis Data Streams / Data Firehose / Glue / EMR / Athena 가 제자리를 찾습니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-kinesis\|Amazon Kinesis]] | 실시간 스트림 수집 | Data Streams · Data Firehose 로 갈린다 |
| [[amazon-emr\|Amazon EMR]] | 관리형 Hadoop · Spark | **클러스터 구성까지 물어본다** |
| [[aws-glue\|AWS Glue]] | 서버리스 ETL + 데이터 카탈로그 | 코드 없이 변환 |
| [[amazon-athena\|Amazon Athena]] | S3 에 SQL 을 그대로 | 서버 없는 조회 |
| [[amazon-redshift\|Amazon Redshift]] | 데이터 웨어하우스 | 대규모 집계·BI |
| [[amazon-opensearch-service\|Amazon OpenSearch]] | 검색·로그 분석 | 로그를 찾아 봐야 할 때 |
| [[amazon-quicksight\|Amazon QuickSight]] | 대시보드 | 마지막 시각화 |
| [[aws-datasync\|AWS DataSync]] | 대량 파일 전송 자동화 | 온프레미스 데이터 유입 |
| [[aws-lambda\|AWS Lambda]] | 서버 없이 코드 실행 | 가벼운 변환 |

## 3. 이 과제가 묻는 것

**한 줄기로 보면 이렇습니다**

```d2
direction: right

src: "데이터 원천\n(앱 · IoT · 로그 · 온프레미스)"
ingest: "수집\nKinesis · DataSync"
lake: "S3 데이터 레이크"
etl: "변환\nGlue · EMR · Lambda"
query: "조회\nAthena · Redshift · OpenSearch"
viz: "QuickSight"

src -> ingest -> lake -> etl -> lake
lake -> query -> viz
```

**Kinesis 두 갈래 — 가장 자주 갈리는 곳**

| | Data Streams | Data Firehose |
|---|---|---|
| 성격 | 스트림을 **보관**하고 여러 소비자가 각자 읽는다 | 받은 것을 목적지로 **흘려보낸다** |
| 코드 | 소비자 코드를 내가 쓴다 | 없다 (완전관리형) |
| 지연 | 실시간(200ms 내외) | 거의 실시간(버퍼링, 최소 60초 단위) |
| 보관 | 최대 365일 재생 가능 | 보관하지 않는다 |
| 확장 | 샤드를 내가 관리 | 자동 |
| 신호 | `여러 애플리케이션이 같은 스트림을` · `재처리` | `S3·Redshift 로 그냥 넣어라` · `운영 오버헤드 최소` |

**EMR vs Glue vs Athena**

| | 언제 |
|---|---|
| **EMR** | `Hadoop` · `Spark` · `HBase` 를 **그대로** 써야 할 때. 클러스터를 내가 통제한다 |
| **Glue** | 서버리스 ETL. `운영 오버헤드 최소` + 변환 |
| **Athena** | 변환 없이 **S3 를 바로 조회**. 가끔 쓰는 임시 쿼리에 가장 싸다 |

`기존 Spark 작업을 옮긴다` → EMR. `ETL 인프라를 관리하고 싶지 않다` → Glue.
`데이터를 옮기지 않고 그냥 SQL 로 보고 싶다` → Athena.

**Athena vs Redshift**

| | Athena | Redshift |
|---|---|---|
| 데이터 위치 | S3 그대로 | 클러스터에 적재 |
| 요금 | **스캔한 데이터량** | 클러스터 시간 |
| 언제 | 가끔 · 임시 조회 | 항상 도는 BI · 복잡한 집계 |

`한 달에 몇 번 조회` → Athena. `매일 대시보드가 돈다` → Redshift.

> Athena 비용은 **스캔량**에 붙습니다. 파티셔닝하고 **Parquet 같은 열 기반 포맷**으로 바꾸면
> 스캔량이 줄어 성능과 비용이 함께 좋아집니다. 이 답이 정답인 문항이 자주 나옵니다.

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `여러 애플리케이션이 같은 스트림을 각자 처리` | **Kinesis Data Streams** |
| `S3 로 그냥 적재` · `코드 없이` | **Data Firehose** |
| `기존 Spark·Hadoop 작업` | **EMR** |
| `ETL 서버를 관리하고 싶지 않다` | **Glue** |
| `S3 데이터를 SQL 로 즉시` | **Athena** |
| `Athena 비용을 줄여라` | 파티셔닝 + **Parquet** |
| `대시보드가 항상 돈다` · `복잡한 조인` | **Redshift** |
| `로그를 검색하고 시각화` | **OpenSearch** |
| `온프레미스 NAS 를 매일 동기화` | **DataSync** |
| `IoT 기기 수백만 대의 실시간 데이터` | **Kinesis Data Streams** |

> [!tip] `운영 오버헤드가 가장 적은` 이 붙으면 한 칸씩 옮겨 가세요
> Data Streams → **Firehose**, EMR → **Glue**, Redshift → **Athena** 쪽으로.
> 이 수식 어구는 거의 항상 "관리할 것이 없는 쪽"을 가리킵니다.

## 5. 여기까지의 지도

주황색이 이번 과제에서 **처음** 나온 서비스입니다.

```d2
classes: {
  new: {
    style: {
      fill: "#ff9900"
      stroke: "#232f3e"
      stroke-width: 2
      font-color: "#111111"
    }
  }
}

grid-columns: 1
grid-gap: 16

"1.1 AWS 리소스에 대한 보안 액세스 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "AWS IAM"
  "IAM Identity Center"
  "AWS Organizations"
  "AWS Directory Service"
  "Amazon Cognito"
  "AWS RAM"
  "AWS Secrets Manager"
  "AWS Control Tower"
}
"1.2 안전한 워크로드 및 애플리케이션 설계": {
  grid-rows: 3
  *.width: 190
  *.style.font-size: 12

  "Amazon VPC"
  "AWS PrivateLink"
  "AWS WAF"
  "AWS Shield"
  "AWS Firewall Manager"
  "Amazon GuardDuty"
  "Amazon Inspector"
  "AWS Systems Manager"
  "Elastic Load Balancing"
}
"1.3 적합한 데이터 보안 제어 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "AWS KMS"
  "AWS CloudHSM"
  "Amazon Macie"
  "AWS Certificate Manager"
  "Amazon S3"
  "AWS Backup"
}
"2.1 확장 가능하고 느슨하게 결합된 아키텍처 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon SQS"
  "Amazon SNS"
  "Amazon EventBridge"
  "AWS Step Functions"
  "EC2 Auto Scaling"
  "AWS Lambda"
  "AWS Fargate"
  "Amazon API Gateway"
}
"2.2 고가용성 및/또는 내결함성 아키텍처 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon Route 53"
  "Amazon RDS"
  "Amazon Aurora"
  "Amazon DynamoDB"
  "Elastic Disaster Recovery"
}
"3.1 고성능·확장 가능한 스토리지 솔루션 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon EBS"
  "Amazon EFS"
  "Amazon FSx"
  "AWS Storage Gateway"
  "AWS DataSync"
  "AWS Snow Family"
}
"3.2 고성능의 탄력적인 컴퓨팅 솔루션 설계": {
  grid-rows: 1
  *.width: 190
  *.style.font-size: 12

  "Amazon EC2"
  "Amazon ECS"
  "Amazon EKS"
  "AWS Batch"
}
"3.3 고성능 데이터베이스 솔루션 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon ElastiCache"
  "Amazon Redshift"
  "Amazon DocumentDB"
  "Amazon Neptune"
  "AWS DMS"
}
"3.4 고성능·확장 가능한 네트워크 아키텍처 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon CloudFront"
  "AWS Global Accelerator"
  "AWS Direct Connect"
  "Site-to-Site VPN"
  "AWS Transit Gateway"
}
"3.5 고성능 데이터 수집 및 변환 솔루션 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "Amazon Kinesis"
  "Amazon EMR"
  "AWS Glue"
  "Amazon Athena"
  "Amazon OpenSearch"
  "Amazon QuickSight"
}
```

## 6. 셀프 체크

- [ ] Kinesis Data Streams 와 Data Firehose 를 가르는 신호를 두 개 댄다
- [ ] EMR 을 골라야만 하는 상황을 하나 든다
- [ ] Athena 와 Redshift 를 조회 빈도로 가른다
- [ ] Athena 비용을 줄이는 두 가지 방법을 안다
- [ ] 수집 → 저장 → 변환 → 조회 각 단계에 서비스를 하나씩 배치한다

---

> 더 기초부터: [CLF-C02 의 AI·ML·분석 모듈](/docs/aws-clf-c02/20-course/08-ai-ml-analytics)
