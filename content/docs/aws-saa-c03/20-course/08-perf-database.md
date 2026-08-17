---
title: "3.3 고성능 데이터베이스 솔루션 결정"
description: "관계형인가 키-값인가 · 읽기가 느린가 쓰기가 느린가 · 캐시를 어디에"
tags: [saa-c03, 도메인3, 과제명세]
kind: domain
module: 8
status: 미학습
---

> 도메인 3 · 고성능 아키텍처 설계 **24%** · 과제 명세 5개 중 **세 번째**

## 1. 왜 필요한가

> 실제 시험에 `SQL/DB 시나리오` 가 나왔다는 보고가 있습니다. 그리고 대부분 **읽기가 느리다**로 시작합니다.

DB 문항은 두 갈래로 갈립니다. 하나는 **어떤 DB 를 고를 것인가**, 다른 하나는
**이미 있는 DB 가 느린데 무엇을 붙일 것인가** 입니다. 후자가 더 자주 나옵니다.

그리고 후자의 답은 몇 개 안 됩니다 — 읽기 전용 복제본, ElastiCache, DAX, RDS Proxy.
어느 것이냐는 **무엇이 느린지**에 달려 있습니다. 읽기인지, 반복되는 같은 쿼리인지, 커넥션인지.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-rds\|Amazon RDS]] | 관리형 관계형 DB | 읽기 전용 복제본 = 읽기 성능 |
| [[amazon-aurora\|Amazon Aurora]] | AWS 판 MySQL·PostgreSQL | 성능과 복원력을 한 번에 |
| [[amazon-dynamodb\|Amazon DynamoDB]] | 관리형 NoSQL | 한 자릿수 밀리초, 무제한 확장 |
| [[amazon-elasticache\|Amazon ElastiCache]] | 인메모리 캐시 (Redis · Memcached) | DB 앞에서 부하를 걷어낸다 |
| [[amazon-redshift\|Amazon Redshift]] | 데이터 웨어하우스 | 분석 쿼리. 트랜잭션용이 아니다 |
| [[amazon-documentdb\|Amazon DocumentDB]] | 관리형 MongoDB 호환 | `MongoDB` 가 지문에 있을 때 |
| [[amazon-neptune\|Amazon Neptune]] | 그래프 DB | 추천·소셜 관계 |
| [[aws-dms\|AWS DMS]] | DB 마이그레이션 | 옮기는 이야기가 나올 때 |

## 3. 이 과제가 묻는 것

**무엇이 느린가 → 무엇을 붙이는가**

| 증상 | 답 |
|---|---|
| 읽기 쿼리가 많아 DB 가 버겁다 | **읽기 전용 복제본** |
| **같은 쿼리**가 반복된다 | **ElastiCache** (앞에서 걷어낸다) |
| DynamoDB 읽기를 마이크로초까지 | **DAX** |
| Lambda 가 커넥션을 다 써 버린다 | **RDS Proxy** |
| 쓰기 자체가 한계 | 샤딩 · Aurora · DynamoDB 로 전환 |
| 분석 쿼리가 운영 DB 를 잡아먹는다 | **Redshift** 로 분리 |

**ElastiCache — Redis 와 Memcached**

| | Redis | Memcached |
|---|---|---|
| 복제 · 장애 조치 | **있다** | 없다 |
| 지속성(스냅샷) | 있다 | 없다 |
| 자료 구조 | 정렬 집합 · 리스트 등 | 단순 키-값 |
| 언제 | **세션 저장** · 리더보드 · 고가용성 캐시 | 단순 캐시를 수평으로 넓힐 때 |

`캐시가 죽어도 세션이 남아야` → **Redis**. 지문에 `다중 AZ` 나 `장애 조치` 가 붙으면 Memcached 는 탈락입니다.

**DynamoDB 를 고르는 신호**

- `한 자릿수 밀리초` · `초당 수백만 요청` · `스키마가 유연` · `키로만 조회`
- **글로벌 테이블** — 여러 리전에서 동시에 쓰기
- **인덱스** — 파티션 키를 바꿔 조회하려면 **GSI**, 정렬 키만 바꾸면 **LSI**(테이블 생성 시에만)
- **스트림** — 변경 사항을 Lambda 로 흘려보낸다

**Aurora 를 고르는 신호**

- `MySQL·PostgreSQL 호환인데 더 빨라야` · `읽기 복제본이 많이 필요` (최대 15개)
- **3개 AZ 에 6벌 복제**. 스토리지가 자동으로 늘어난다
- `읽기 부하가 예측 불가` → **Aurora Auto Scaling** 또는 Serverless

**관계형이 아닌 것들**

| 지문 | 답 |
|---|---|
| `MongoDB 를 그대로` | **DocumentDB** |
| `관계·추천·소셜 그래프` | **Neptune** |
| `시계열 데이터` | Timestream |
| `원장 · 변경 불가 기록` | QLDB |
| `페타바이트 분석 · BI 도구 연결` | **Redshift** |

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `읽기 성능` | **읽기 전용 복제본** (다중 AZ 가 아니다) |
| `같은 조회가 반복` · `DB 부하를 줄인다` | **ElastiCache** |
| `세션을 캐시에 저장` + `장애에도 유지` | **ElastiCache for Redis** |
| `DynamoDB 인데 더 빨라야` | **DAX** |
| `Lambda 가 DB 커넥션을 소진` | **RDS Proxy** |
| `한 자릿수 밀리초` · `무제한 확장` | **DynamoDB** |
| `여러 리전에서 쓰기` | **DynamoDB 글로벌 테이블** |
| `MySQL 호환인데 성능과 복제본이 더` | **Aurora** |
| `기존 DB 를 최소 다운타임으로 이관` | **DMS** (스키마가 다르면 SCT 도) |
| `BI 대시보드용 대규모 집계` | **Redshift** |

> [!tip] 캐시는 어디에 두느냐가 다릅니다
> ElastiCache 는 **애플리케이션과 DB 사이**, DAX 는 **DynamoDB 전용**, CloudFront 는 **사용자와 앱 사이**입니다.
> 지문이 무엇을 줄이라고 했는지 보세요 — DB 부하인지, 응답 지연인지, 네트워크 왕복인지.

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
  *.class: new

  "Amazon ElastiCache"
  "Amazon Redshift"
  "Amazon DocumentDB"
  "Amazon Neptune"
  "AWS DMS"
}
```

## 6. 셀프 체크

- [ ] 읽기가 느릴 때 쓸 수 있는 답을 세 가지 대고 각각의 조건을 말한다
- [ ] Redis 와 Memcached 를 가르는 요구사항을 하나 든다
- [ ] GSI 와 LSI 의 차이를 한 문장으로 말한다
- [ ] Aurora 를 RDS 대신 고르게 만드는 신호를 안다
- [ ] 운영 DB 와 분석 DB 를 왜 나누는지 설명한다

---

> 더 기초부터: [CLF-C02 의 데이터베이스 모듈](/docs/aws-clf-c02/20-course/07-databases)
