---
title: "4.3 비용 최적화 데이터베이스 솔루션 설계"
description: "용량을 약정하거나 · 쓴 만큼만 내거나 · 오래된 것을 버린다"
tags: [saa-c03, 도메인4, 과제명세]
kind: domain
module: 13
status: 미학습
---

> 도메인 4 · 비용에 최적화된 아키텍처 설계 **20%** · 과제 명세 4개 중 **세 번째**

## 1. 왜 필요한가

> [[08-perf-database\|3.3]] 의 짝입니다. 성능을 올리려고 붙인 것들이 그대로 비용이 됩니다.

읽기 전용 복제본을 늘리면 읽기가 빨라지지만 인스턴스가 늘어난 만큼 돈이 나갑니다.
DynamoDB 를 프로비저닝 모드로 넉넉하게 잡으면 안 쓰는 용량도 그대로 청구됩니다.

그래서 이 과제의 판단은 하나로 모입니다 — **트래픽이 예측 가능한가.**
예측 가능하면 약정해서 깎고, 예측 불가하면 쓴 만큼 내는 쪽으로 갑니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-rds\|Amazon RDS]] | 관리형 관계형 DB | 예약 인스턴스와 크기 조정 |
| [[amazon-aurora\|Amazon Aurora]] | AWS 판 MySQL·PostgreSQL | **Serverless** 로 유휴 비용을 없앤다 |
| [[amazon-dynamodb\|Amazon DynamoDB]] | 관리형 NoSQL | 온디맨드 vs 프로비저닝 |
| [[amazon-elasticache\|Amazon ElastiCache]] | 인메모리 캐시 | DB 인스턴스를 키우는 대신 |
| [[amazon-redshift\|Amazon Redshift]] | 데이터 웨어하우스 | 일시 중지 · 동시성 확장 |
| [[amazon-athena\|Amazon Athena]] | S3 에 SQL | 가끔 쓰는 분석이면 클러스터보다 싸다 |
| [[aws-backup\|AWS Backup]] | 백업 정책 | 보존 기간이 곧 비용 |

## 3. 이 과제가 묻는 것

**예측 가능한가 — 이 한 축입니다**

| | 예측 가능 | 예측 불가 |
|---|---|---|
| **RDS · Aurora** | 예약 인스턴스 | Aurora **Serverless** |
| **DynamoDB** | **프로비저닝** 모드 (+ Auto Scaling) | **온디맨드** 모드 |
| **Redshift** | 예약 노드 | 필요할 때만 · Athena 로 대체 |

**DynamoDB 두 모드**

| | 프로비저닝 | 온디맨드 |
|---|---|---|
| 요금 | 확보한 용량 단위 | **실제 요청 수** |
| 언제 | 트래픽이 일정하고 예측된다 | 급증이 심하거나 신규 서비스라 모른다 |
| 단가 | 낮다 | 높다 (대신 유휴 비용 0) |

`트래픽이 예측 가능하고 꾸준하다` → 프로비저닝 + Auto Scaling.
`언제 얼마나 올지 모른다` · `가끔만 쓴다` → 온디맨드.

**오래된 데이터를 버리는 것도 비용 설계입니다**

- **DynamoDB TTL** — 만료 시각을 넣어 두면 알아서 지워집니다. `세션·로그를 30일만 보관` 의 답
- **RDS 스냅샷 보존 기간** — 길수록 돈이 됩니다
- **오래된 데이터를 S3 로 내리고** Athena 로 조회하는 것이 정답인 문항이 있습니다

**인스턴스를 키우기 전에**

`DB 가 느려서 더 큰 인스턴스로 올린다` 는 보기는 비용 문항에서 대개 오답입니다. 먼저 볼 것은

1. **캐시** — 같은 쿼리가 반복되면 ElastiCache 가 훨씬 싸다
2. **읽기 전용 복제본** — 읽기만 몰린다면
3. **쿼리·인덱스** — 문항에는 잘 안 나오지만 순서상 먼저

**Redshift**

- `클러스터가 밤에는 논다` → **일시 중지 / 재개**
- `가끔 몰리는 동시 쿼리` → **동시성 확장** (평소 용량을 그것 때문에 키우지 않는다)
- `한 달에 몇 번 조회` → 애초에 Redshift 가 아니라 **Athena**

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `3년간 꾸준한 DB 부하` | **RDS 예약 인스턴스** |
| `사용량이 불규칙하고 유휴 시간이 길다` | **Aurora Serverless** |
| `트래픽 예측 불가` + DynamoDB | **온디맨드 모드** |
| `트래픽이 일정하고 비용을 낮춰야` + DynamoDB | **프로비저닝 + Auto Scaling** |
| `세션 데이터를 30일 뒤 삭제` | **DynamoDB TTL** |
| `같은 조회가 반복돼 DB 가 비싸다` | **ElastiCache** |
| `분석 클러스터가 밤에는 논다` | **Redshift 일시 중지** |
| `가끔 하는 분석 때문에 웨어하우스를 유지한다` | **Athena** 로 전환 |
| `오래된 기록은 거의 안 본다` | S3 로 내리고 Athena 로 조회 |
| `개발용 DB 가 다중 AZ 로 떠 있다` | 개발 환경은 **단일 AZ** 로 |

> [!tip] 비용 문항에서 다중 AZ 는 조건을 봅니다
> 운영 환경이면 다중 AZ 가 정답이지만, **개발·테스트 환경**에서 다중 AZ 를 쓰고 있다면
> 그것이 줄일 비용입니다. 지문이 어떤 환경을 말하는지 먼저 확인하세요.

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

  "Amazon Kinesis"
  "Amazon EMR"
  "AWS Glue"
  "Amazon Athena"
  "Amazon OpenSearch"
  "Amazon QuickSight"
}
"4.1 비용 최적화 스토리지 솔루션 설계": {
  grid-rows: 1
  *.width: 190
  *.style.font-size: 12

  "S3 Glacier"
}
"4.2 비용 최적화 컴퓨팅 솔루션 설계": {
  grid-rows: 1
  *.width: 190
  *.style.font-size: 12

  "AWS Compute Optimizer"
  "AWS Cost Explorer"
}
"4.3 비용 최적화 데이터베이스 솔루션 설계": {
  grid-rows: 1
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "이번 과제 — 새 서비스 없음\n앞의 것을 반대편에서 다시 본다"
}
```

## 6. 셀프 체크

- [ ] DynamoDB 온디맨드와 프로비저닝을 가르는 조건을 말한다
- [ ] Aurora Serverless 가 유리한 트래픽 모양을 설명한다
- [ ] DB 인스턴스를 키우기 전에 검토할 것을 두 가지 댄다
- [ ] TTL 이 비용에 어떻게 작용하는지 안다
- [ ] Redshift 를 유지할지 Athena 로 갈지 판단하는 기준을 말한다

---

> 더 기초부터: [CLF-C02 의 Amazon RDS](/docs/aws-clf-c02/10-services/03-database/amazon-rds)
