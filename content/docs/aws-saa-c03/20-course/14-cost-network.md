---
title: "4.4 비용 최적화 네트워크 아키텍처 설계"
description: "데이터 전송 요금은 나가는 쪽에 붙는다 — 어디를 거치게 할 것인가"
tags: [saa-c03, 도메인4, 과제명세]
kind: domain
module: 14
status: 미학습
---

> 도메인 4 · 비용에 최적화된 아키텍처 설계 **20%** · 과제 명세 4개 중 **네 번째** (마지막)

## 1. 왜 필요한가

> 네트워크 비용은 **어디로 나가느냐**에 붙습니다. 이 규칙 하나가 이 과제의 절반입니다.

스토리지와 컴퓨팅 비용은 눈에 보입니다. 네트워크 비용은 안 보입니다.
그래서 시험은 **"이 트래픽이 어느 경계를 넘는가"** 를 읽을 수 있는지 묻습니다.

기억할 것은 짧습니다.

- **AWS 로 들어오는 것(인바운드)은 대체로 무료**
- **AWS 밖으로 나가는 것(아웃바운드)에 돈이 붙는다**
- **AZ 를 넘어도, 리전을 넘어도 돈이 붙는다**
- **같은 AZ 안, 프라이빗 IP 통신은 무료**

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-cloudfront\|Amazon CloudFront]] | 엣지 캐시 | 오리진으로 나가는 전송을 줄인다 |
| [[amazon-vpc\|Amazon VPC]] | 가상 네트워크 | NAT 게이트웨이 · 엔드포인트가 여기 |
| [[aws-direct-connect\|AWS Direct Connect]] | 전용선 | 대량이면 인터넷보다 단가가 낮다 |
| [[aws-transit-gateway\|AWS Transit Gateway]] | 연결 허브 | 편하지만 데이터 처리 요금이 붙는다 |
| [[aws-privatelink\|AWS PrivateLink]] | 서비스 하나만 노출 | 경로를 짧게 |
| [[aws-global-accelerator\|AWS Global Accelerator]] | 백본 경로 | 성능 쪽이지 비용 절감은 아니다 |
| [[aws-cost-explorer\|AWS Cost Explorer]] | 비용 분석 | 어느 전송이 비싼지 먼저 본다 |

## 3. 이 과제가 묻는 것

**데이터 전송 요금이 붙는 자리**

```d2
direction: right

vpc: "VPC" {
  az_a: "AZ-a" {
    ec2_a: "EC2"
    nat: "NAT 게이트웨이"
  }
  az_b: "AZ-b" {
    ec2_b: "EC2"
  }
  ep: "S3 Gateway 엔드포인트"
}

s3: "Amazon S3"
net: "인터넷"

vpc.az_a.ec2_a -> vpc.az_b.ec2_b: "AZ 간 — 유료"
vpc.az_a.ec2_a -> vpc.az_a.nat: "NAT 처리 — 유료"
vpc.az_a.nat -> net: "아웃바운드 — 유료"
vpc.az_a.ec2_a -> vpc.ep: "무료"
vpc.ep -> s3: "무료"
net -> vpc: "인바운드 — 무료"
```

**가장 자주 나오는 절감 세 가지**

| 문제 | 답 |
|---|---|
| S3·DynamoDB 트래픽이 **NAT 게이트웨이**를 거친다 | **Gateway 엔드포인트** — NAT 처리 요금과 아웃바운드가 둘 다 사라진다 |
| 같은 콘텐츠를 계속 오리진에서 내보낸다 | **CloudFront** — 엣지에서 나가는 단가가 더 낮고 오리진 전송이 준다 |
| 온프레미스로 매일 대량 전송 | **Direct Connect** — 전송 단가가 인터넷보다 낮다 |

**NAT 게이트웨이는 이중으로 돈이 듭니다**

시간당 요금 + **처리한 데이터량**입니다.
프라이빗 서브넷의 인스턴스가 S3 를 많이 읽는데 NAT 를 거치고 있다면
Gateway 엔드포인트 하나로 그 두 가지가 함께 사라집니다. **비용 문항의 단골 정답**입니다.

**AZ 를 넘는 트래픽**

- ALB 는 여러 AZ 에 걸쳐 있으므로 **교차 AZ 트래픽이 생깁니다**
- 대량 통신을 하는 두 인스턴스라면 **같은 AZ 에 두는 것**이 답이 되는 경우가 있습니다
- 다만 그러면 가용성이 떨어집니다 — 지문이 비용을 우선하라고 했는지 확인하세요

**연결 방식의 비용 성격**

| | 성격 |
|---|---|
| **VPC 피어링** | 연결 자체는 무료. 데이터 전송료만. **VPC 두어 개면 가장 싸다** |
| **Transit Gateway** | 연결당 시간 요금 + 데이터 처리 요금. VPC 가 많아질수록 관리 이득이 커진다 |
| **PrivateLink** | 엔드포인트 시간 요금 + 데이터 처리 |

`VPC 두 개를 잇는 가장 저렴한 방법` → **피어링**.
`VPC 수십 개` 라면 피어링 연결이 폭발하므로 Transit Gateway 가 실질적으로 낫습니다.

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `NAT 게이트웨이 비용이 높다` + S3 접근 | **Gateway 엔드포인트** |
| `같은 파일을 전 세계에 반복 전송` | **CloudFront** |
| `온프레미스로 매일 테라바이트 전송` | **Direct Connect** |
| `VPC 두 개만 잇는다, 가장 저렴하게` | **VPC 피어링** |
| `VPC 가 수십 개로 늘어난다` | **Transit Gateway** |
| `AZ 간 트래픽 요금이 크다` | 같은 AZ 로 모으기 (가용성과 맞바꾼다) |
| `인바운드 전송 비용을 줄여라` | 함정 — **인바운드는 대체로 무료** |
| `어느 전송이 비싼지 모르겠다` | **Cost Explorer** 로 먼저 확인 |

> [!warning] Global Accelerator 는 비용 절감이 아닙니다
> 성능(지연 시간·장애 조치) 을 위한 서비스이고 요금이 **추가**됩니다.
> 비용 최적화 문항에서 답으로 나오면 대개 오답입니다. CloudFront 와 헷갈리기 쉬운 자리입니다.

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

  "새 서비스 없음"
}
"4.4 비용 최적화 네트워크 아키텍처 설계": {
  grid-rows: 1
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "이번 과제 — 새 서비스 없음\n앞의 것을 반대편에서 다시 본다"
}
```

## 6. 셀프 체크

- [ ] 인바운드와 아웃바운드 중 어느 쪽에 요금이 붙는지 안다
- [ ] NAT 게이트웨이 요금이 두 갈래라는 것과, 그것을 없애는 답을 말한다
- [ ] CloudFront 가 비용을 줄이는 원리를 한 문장으로 설명한다
- [ ] 피어링과 Transit Gateway 중 어느 쪽이 언제 싼지 판단한다
- [ ] AZ 를 모으는 것이 무엇과 맞바꾸는 선택인지 안다

---

이것으로 과제 명세 14개가 끝납니다. [[00-exam-strategy]] 로 돌아가 문제를 푸는 쪽으로 넘어가세요.

> 더 기초부터: [CLF-C02 의 네트워킹 모듈](/docs/aws-clf-c02/20-course/05-networking)
