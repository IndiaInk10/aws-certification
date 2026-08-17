---
title: "2.2 고가용성 및/또는 내결함성 아키텍처 설계"
description: "다중 AZ · 장애 조치 · DR 전략 4종과 RPO/RTO"
tags: [saa-c03, 도메인2, 과제명세]
kind: domain
module: 5
status: 미학습
---

> 도메인 2 · 복원력을 갖춘 아키텍처 설계 **26%** · 과제당 **≈13%** — 14개 노트 중 **밀도 1위**

## 1. 왜 필요한가

> 이 노트 하나가 시험의 약 13% 입니다. **DR 전략 4종과 RPO/RTO 가 통째로** 여기 들어 있습니다.

비중을 과제 수로 나눠 보면 순위가 뒤집힙니다. 도메인 2 는 26% 인데 과제가 **둘뿐**이라
개당 밀도가 도메인 3(≈4.8%)의 **거의 세 배**입니다. 학습 순서에서 이 노트를 앞으로 당기는 이유입니다.

내용도 그럴 만합니다. 고가용성은 SAA 의 정체성에 가깝습니다.
실제 시험에서 `고가용성 아키텍처` 시나리오가 나왔다는 보고가 있고,
대부분의 문항이 은근히 "단일 AZ 짜리 보기를 지울 수 있는가"를 함께 묻습니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-route-53\|Amazon Route 53]] | DNS + 상태 확인 | **장애 조치 라우팅**. 리전 단위 전환 |
| [[elastic-load-balancing\|Elastic Load Balancing]] | 트래픽 분산 + 상태 확인 | AZ 단위 장애 흡수 |
| [[amazon-ec2-auto-scaling\|EC2 Auto Scaling]] | 대수 자동 조절 | 죽은 인스턴스를 **자동으로 갈아 끼운다** |
| [[amazon-rds\|Amazon RDS]] | 관리형 관계형 DB | **다중 AZ** = 가용성 (읽기 성능이 아니다) |
| [[amazon-aurora\|Amazon Aurora]] | AWS 판 MySQL·PostgreSQL | 3개 AZ 에 6벌 복제 |
| [[amazon-dynamodb\|Amazon DynamoDB]] | 관리형 NoSQL | **글로벌 테이블** = 다중 리전 쓰기 |
| [[amazon-s3\|Amazon S3]] | 객체 스토리지 | 교차 리전 복제 |
| [[aws-backup\|AWS Backup]] | 백업 정책 한 곳에서 | 백업 & 복원 전략의 도구 |
| [[aws-elastic-disaster-recovery\|Elastic Disaster Recovery]] | 서버를 통째로 실시간 복제 | 파일럿 라이트·예열 대기의 도구 |

## 3. 이 과제가 묻는 것

**고가용성과 내결함성은 다릅니다**

| | 뜻 | 예 |
|---|---|---|
| **고가용성** | 죽어도 **빨리 복구**된다 | ASG 가 죽은 인스턴스를 새로 띄운다 (그동안 잠깐 끊긴다) |
| **내결함성** | 죽어도 **안 끊긴다** | 다중 AZ 로 이미 두 대가 돌고 있다 |

지문이 `무중단` · `사용자가 알아채지 못하게` 라고 하면 내결함성 쪽 답을 골라야 합니다.

**계층마다 죽는 단위가 다릅니다**

| 계층 | 단일 장애점 | 답 |
|---|---|---|
| 인스턴스 | 한 대 | ASG (최소 2대) |
| 가용 영역 | AZ 하나 | **여러 AZ 에 걸친 ASG + ELB** |
| 리전 | 리전 하나 | 다중 리전 + Route 53 장애 조치 |
| 데이터베이스 | DB 한 대 | RDS 다중 AZ |
| 상태·세션 | 인스턴스 안의 세션 | 밖으로 (ElastiCache · DynamoDB) |

> **NAT 게이트웨이도 AZ 단위입니다.** AZ 마다 하나씩 두지 않으면 그게 단일 장애점이 됩니다.

**RDS — 헷갈리면 가장 크게 잃는 한 쌍**

| | 다중 AZ | 읽기 전용 복제본 |
|---|---|---|
| 목적 | **가용성** | **읽기 성능** |
| 복제 | 동기 | 비동기 |
| 평소에 쓰나 | 대기 인스턴스는 **안 쓴다** | 읽기 트래픽을 받는다 |
| 장애 시 | **자동** 전환 (엔드포인트 그대로) | 수동 승격 |

`읽기가 느리다` → 복제본. `장애 시에도 계속` → 다중 AZ. **둘은 같이 쓸 수 있습니다.**

**DR 전략 4종 — RTO 와 RPO 로 갈립니다**

| | 뜻 |
|---|---|
| **RPO** (복구 지점 목표) | **데이터를 얼마나 잃어도 되는가** — 마지막 백업 시점까지 되돌아간다 |
| **RTO** (복구 시간 목표) | **얼마나 빨리 복구되어야 하는가** |

```d2
direction: right

br: "백업 & 복원\nRTO 시간~일\n비용 최저" {
  a: "백업만 보관\n복구 시 전부 새로 만든다"
}
pl: "파일럿 라이트\nRTO 수십 분" {
  a: "DB 는 복제 중\n서버는 꺼져 있다"
}
ws: "예열 대기\nRTO 수 분" {
  a: "전체가 작게 돌고 있다\n장애 시 키운다"
}
ms: "다중 사이트 활성\nRTO 거의 0\n비용 최고" {
  a: "양쪽이 실제 트래픽을\n동시에 받는다"
}

br -> pl -> ws -> ms: "비용과 복구 속도가 함께 오른다"
```

핵심은 **네 전략이 같은 축 위에 있다**는 것입니다.
왼쪽으로 갈수록 싸고 느리고, 오른쪽으로 갈수록 비싸고 빠릅니다.
문항은 항상 `RTO 는 N분` 같은 조건을 주고 그 축의 한 지점을 고르게 합니다.

| 지문의 조건 | 전략 |
|---|---|
| `비용이 가장 중요` · `며칠 걸려도 된다` | **백업 & 복원** |
| `데이터는 최신이어야 하지만 서버는 꺼 둬도 된다` | **파일럿 라이트** |
| `몇 분 안에` · `축소된 규모로 이미 돌고 있다` | **예열 대기** |
| `무중단` · `양쪽에서 동시에 서비스` | **다중 사이트 활성** |

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `한 AZ 가 죽어도` | **여러 AZ 에 걸친 ASG + ELB**. 단일 AZ 보기는 전부 지운다 |
| `읽기 쿼리가 느리다` | **읽기 전용 복제본** (다중 AZ 가 아니다) |
| `DB 장애 시에도 계속` | **RDS 다중 AZ** |
| `리전 전체 장애` | 다중 리전 + **Route 53 장애 조치 라우팅** |
| `여러 리전에서 동시에 쓰기` | **DynamoDB 글로벌 테이블** |
| `RPO 가 거의 0` | 동기 복제 또는 지속 복제 (백업만으로는 안 된다) |
| `RTO 수 분` + `비용도 중요` | **예열 대기** |
| `서버를 통째로 다른 리전에 복제해 두었다가` | **Elastic Disaster Recovery** |
| `상태 확인 후 자동 교체` | ASG 의 **ELB 상태 확인**을 켜는 것 |

> [!warning] 가장 흔한 함정
> **다중 AZ 를 읽기 성능 해결책으로 고르는 것.** 대기 인스턴스는 트래픽을 받지 않습니다.
> 반대로 **읽기 전용 복제본을 가용성 해결책으로 고르는 것**도 오답입니다. 자동 전환이 안 됩니다.

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
  *.class: new

  "Amazon Route 53"
  "Amazon RDS"
  "Amazon Aurora"
  "Amazon DynamoDB"
  "Elastic Disaster Recovery"
}
```

## 6. 셀프 체크

- [ ] 고가용성과 내결함성을 예를 들어 구분한다
- [ ] RDS 다중 AZ 와 읽기 전용 복제본을 각각 무엇을 위해 쓰는지 말한다
- [ ] RPO 와 RTO 를 각각 한 문장으로 정의한다
- [ ] DR 4종을 비용·복구 속도 순으로 늘어놓는다
- [ ] `RTO 는 10분, 비용은 최소` 라는 조건에서 어느 전략인지 고른다
- [ ] 아키텍처 그림에서 단일 장애점을 세 군데 찾아낸다

---

> 더 기초부터: [CLF-C02 의 글로벌 인프라 모듈](/docs/aws-clf-c02/20-course/04-global-infrastructure)
