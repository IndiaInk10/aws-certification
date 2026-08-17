---
title: "4.2 비용 최적화 컴퓨팅 솔루션 설계"
description: "약정하거나 · 남는 것을 쓰거나 · 안 쓸 때 끄거나"
tags: [saa-c03, 도메인4, 과제명세]
kind: domain
module: 12
status: 미학습
---

> 도메인 4 · 비용에 최적화된 아키텍처 설계 **20%** · 과제 명세 4개 중 **두 번째**

## 1. 왜 필요한가

> [[07-perf-compute\|3.2]] 의 짝입니다. 같은 서비스를 요금 쪽에서 봅니다.

컴퓨팅 비용을 줄이는 방법은 네 가지뿐입니다.

1. **오래 쓸 것을 약정한다** (Savings Plans · 예약 인스턴스)
2. **끊겨도 되는 일에 남는 용량을 쓴다** (스팟)
3. **안 쓸 때 끈다** (Auto Scaling · 예약 조정)
4. **더 싼 하드웨어로 옮긴다** (Graviton)

문항은 워크로드의 성격을 설명하고 이 넷 중 하나를 고르게 합니다.
성격만 정확히 읽으면 답이 하나로 떨어집니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-ec2\|Amazon EC2]] | 가상 서버 | 요금 모델 선택이 곧 비용 설계 |
| [[amazon-ec2-auto-scaling\|EC2 Auto Scaling]] | 대수 자동 조절 | 안 쓸 때 줄인다 |
| [[aws-lambda\|AWS Lambda]] | 서버 없이 실행 | 안 쓰면 **0원** |
| [[aws-fargate\|AWS Fargate]] | 컨테이너 서버리스 | 유휴 서버 비용을 없앤다 |
| [[aws-batch\|AWS Batch]] | 배치 작업 | 스팟과 궁합이 좋다 |
| [[aws-compute-optimizer\|AWS Compute Optimizer]] | 크기가 맞는지 알려 준다 | `과다 프로비저닝` 신호의 답 |
| [[aws-cost-explorer\|AWS Cost Explorer]] | 비용 분석과 권장 사항 | 어디에 쓰는지 먼저 본다 |

## 3. 이 과제가 묻는 것

**EC2 요금 모델**

| | 언제 | 할인 |
|---|---|---|
| **온디맨드** | 예측 불가 · 단기 · 테스트 | — |
| **Savings Plans** | 1~3년 **금액**을 약정. 인스턴스 종류를 바꿔도 적용 | 최대 72% |
| **예약 인스턴스(RI)** | 1~3년 **특정 인스턴스**를 약정 | 최대 72% |
| **스팟** | **중단돼도 되는** 작업 | 최대 90% |
| **전용 호스트** | 물리 서버 독점. **서버 바인딩 라이선스** | — |

> **Savings Plans 와 RI 중 하나를 고르라면 대개 Savings Plans 입니다.**
> 인스턴스 종류·리전·심지어 Lambda·Fargate 까지 유연하게 적용되기 때문입니다.
> RI 가 정답인 경우는 `용량을 예약해 두어야 한다`(용량 예약)처럼 조건이 붙을 때입니다.

**스팟을 고르는 신호**

- `중단되어도 된다` · `언제 끝나도 상관없다` · `체크포인트가 있다`
- 배치 처리 · 렌더링 · 빅데이터 · CI 빌드 · 무상태 웹 계층
- **반대 신호:** `장기 실행되는 상태 저장 DB` · `중단되면 안 되는` → 스팟은 오답

**혼합이 정답인 경우가 많습니다**

```d2
direction: right

base: "기본 부하\nSavings Plans / RI"
peak: "예측 가능한 피크\n온디맨드"
burst: "여유·배치\n스팟"

asg: "Auto Scaling 그룹"

base -> asg
peak -> asg
burst -> asg
```

`비용을 최소화하면서 안정적으로` 같은 조건에는 **기본은 약정, 여유분은 스팟**이 정답입니다.

**끄는 것도 답입니다**

| 지문 | 답 |
|---|---|
| `개발·테스트 환경이 밤에도 켜져 있다` | **예약 조정** 또는 인스턴스 스케줄러 |
| `트래픽이 없는 시간에도 최소 대수가 돈다` | ASG 최소 용량 재검토 · **Lambda·Fargate 로 전환** |
| `인스턴스가 CPU 10% 로 논다` | **Compute Optimizer** 권장에 따라 축소 |

**Graviton** — 같은 성능에 더 싸고 전력도 적습니다.
`애플리케이션 코드 변경 없이 비용 절감` 이 나오면 후보로 올려야 합니다
(다만 아키텍처가 바뀌므로 컴파일이 필요한 경우가 있습니다).

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `3년간 꾸준히 돌아간다` | **Savings Plans** |
| `특정 인스턴스 용량을 확보해야` | **예약 인스턴스** (용량 예약) |
| `중단돼도 되는 배치 작업` | **스팟** |
| `밤과 주말에는 안 쓴다` | **예약 조정** |
| `요청이 있을 때만 돈다` | **Lambda** |
| `유휴 서버 비용이 아깝다` + 컨테이너 | **Fargate** |
| `인스턴스가 너무 크다` | **Compute Optimizer** → 축소 |
| `Windows 서버 라이선스를 그대로 가져온다` | **전용 호스트** |
| `가격 대비 성능을 올려라` | **Graviton** |
| `어디에 돈이 나가는지 모르겠다` | **Cost Explorer** 먼저 |

> [!warning] 예약은 유연성을 잃는 것입니다
> `워크로드가 자주 바뀐다` · `아직 규모를 모른다` 인데 RI 를 고르면 오답입니다.
> 그 경우는 온디맨드로 시작하거나 Savings Plans 처럼 유연한 쪽입니다.

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
  *.class: new

  "AWS Compute Optimizer"
  "AWS Cost Explorer"
}
```

## 6. 셀프 체크

- [ ] Savings Plans 와 예약 인스턴스를 가르는 조건을 말한다
- [ ] 스팟을 써도 되는 워크로드와 안 되는 워크로드를 각각 든다
- [ ] `비용 최소화 + 안정성` 조건에서 왜 혼합이 답인지 설명한다
- [ ] 개발 환경 비용을 줄이는 방법을 두 가지 댄다
- [ ] 전용 호스트가 필요한 이유를 한 문장으로 말한다

---

> 더 기초부터: [CLF-C02 의 청구·요금 모듈](/docs/aws-clf-c02/20-course/11-billing-support)
