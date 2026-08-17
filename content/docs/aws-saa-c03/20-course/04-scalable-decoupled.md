---
title: "2.1 확장 가능하고 느슨하게 결합된 아키텍처 설계"
description: "큐로 끊고 · 자동으로 늘리고 · 서버를 없앤다"
tags: [saa-c03, 도메인2, 과제명세]
kind: domain
module: 4
status: 미학습
---

> 도메인 2 · 복원력을 갖춘 아키텍처 설계 **26%** · 과제 명세 **2개**뿐 → 과제당 **≈13%**

## 1. 왜 필요한가

> 도메인 2 는 과제가 둘뿐이라 **한 노트가 시험의 13%** 를 감당합니다. 밀도가 가장 높은 구간입니다.

"느슨한 결합" 은 말이 추상적이지만 시험에서는 아주 구체적인 한 가지를 뜻합니다.
**A 가 B 를 직접 부르지 않게 만드는 것.** 사이에 큐나 주제를 넣으면
B 가 죽어도 A 는 계속 돌고, B 가 느려도 요청이 쌓일 뿐 사라지지 않습니다.

문항은 대개 이렇게 옵니다. *"주문이 몰릴 때 처리 서버가 감당을 못 하고 요청이 유실됩니다."*
답은 거의 항상 **사이에 SQS 를 넣는 것**입니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-sqs\|Amazon SQS]] | 큐. 꺼내 갈 때까지 남는다 | 이 과제의 중심. 완충과 유실 방지 |
| [[amazon-sns\|Amazon SNS]] | 주제. 구독자 전원에게 민다 | 팬아웃 |
| [[amazon-eventbridge\|Amazon EventBridge]] | 이벤트 버스 | 일정·SaaS·패턴 기반 라우팅 |
| [[aws-step-functions\|AWS Step Functions]] | 여러 단계를 상태 기계로 | 재시도·분기를 코드 밖으로 |
| [[elastic-load-balancing\|Elastic Load Balancing]] | 트래픽 분산 | 여러 대를 한 주소로 |
| [[amazon-ec2-auto-scaling\|EC2 Auto Scaling]] | 대수를 자동으로 조절 | 확장성의 기본 |
| [[aws-lambda\|AWS Lambda]] | 서버 없이 코드 실행 | `운영 오버헤드 최소` 의 단골 답 |
| [[aws-fargate\|AWS Fargate]] | 컨테이너를 서버 관리 없이 | 컨테이너판 서버리스 |
| [[amazon-api-gateway\|Amazon API Gateway]] | API 의 정문 | 인증·스로틀링·캐싱 |

## 3. 이 과제가 묻는 것

**끊는 자리는 정해져 있습니다**

```d2
direction: right

web: "웹 계층\nALB + ASG"
q: "SQS 큐"
worker: "처리 계층\nASG (큐 길이로 확장)"
db: "데이터베이스"

users: 사용자
users -> web
web -> q: "요청을 넣기만"
q -> worker: "꺼내서 처리"
worker -> db
```

웹 계층이 처리 계층을 **직접 부르지 않는** 것이 핵심입니다.
처리 서버가 전부 죽어도 요청은 큐에 남아 있고, 살아나면 이어서 처리합니다.

**Auto Scaling 정책 네 가지**

| | 언제 |
|---|---|
| **대상 추적** | `CPU 를 50% 로 유지`. 가장 단순하고 가장 자주 정답 |
| **단순 · 단계 조정** | 경보 하나에 몇 대를 더할지 직접 정할 때 |
| **예약** | `매주 금요일 오후에 트래픽이 는다` 처럼 **시간을 아는** 경우 |
| **예측** | 과거 패턴으로 미리 늘려 둔다 |

큐를 쓸 때는 **큐에 쌓인 메시지 수**를 지표로 확장하는 것이 정석입니다. CPU 가 아닙니다.

**서버리스로 가는 조건**

`운영 오버헤드가 가장 적은` 이 나오면 관리형 · 서버리스 쪽입니다. 다만 무조건은 아닙니다.

| | 한계 |
|---|---|
| **Lambda** | 최대 실행 15분. 오래 도는 작업은 안 된다 |
| **Fargate** | 컨테이너는 그대로 쓰되 서버만 없앤다. 장시간 작업 가능 |
| **EC2 + ASG** | 커널·에이전트까지 통제해야 할 때만 |

**SQS 를 쓸 때 같이 나오는 것**

- **가시성 제한 시간** — 꺼낸 메시지를 다른 소비자가 못 보게 하는 시간. **처리 시간보다 길게**
- **DLQ** — 몇 번 실패하면 따로 빼 둔다. `실패한 메시지를 조사` 가 나오면 이것
- **FIFO 큐** — 순서 보장과 중복 제거. 대신 처리량 제한이 있다
- **롱 폴링** — 빈 응답을 줄여 비용과 지연을 낮춘다

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `트래픽이 몰리면 요청이 유실` | **SQS** 를 사이에 |
| `여러 시스템이 같은 이벤트를 각자 처리` | **SNS → SQS 여러 개** (팬아웃) |
| `순서대로 정확히 한 번` | **SQS FIFO** |
| `일정에 맞춰 실행` · `서드파티 SaaS 이벤트` | **EventBridge** |
| `여러 단계를 순서대로, 실패하면 재시도` | **Step Functions** |
| `실행 시간이 15분을 넘는다` | Lambda 가 **아니다** → Fargate·EC2 |
| `운영 오버헤드 최소` + 컨테이너 | **Fargate** |
| `금요일 오후마다 트래픽 급증` | **예약 조정** |
| `큐가 밀릴 때 처리 서버를 늘린다` | 큐 **길이** 기반 대상 추적 |
| `세션 때문에 같은 서버로 가야` | 스티키 세션보다 **세션을 밖으로**(ElastiCache·DynamoDB)가 정답인 경우가 많다 |

> [!warning] "확장 가능" 의 반대말은 상태입니다
> 인스턴스 안에 세션·파일·캐시를 들고 있으면 대수를 늘려도 소용이 없습니다.
> `수평 확장이 안 된다` 는 지문이 보이면 **무상태로 만드는 답**을 찾으세요 —
> 세션은 ElastiCache 나 DynamoDB 로, 파일은 EFS 나 S3 로.

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
  *.class: new

  "Amazon SQS"
  "Amazon SNS"
  "Amazon EventBridge"
  "AWS Step Functions"
  "EC2 Auto Scaling"
  "AWS Lambda"
  "AWS Fargate"
  "Amazon API Gateway"
}
```

## 6. 셀프 체크

- [ ] SQS 를 넣으면 무엇이 좋아지는지 두 가지를 댄다
- [ ] SQS 와 SNS 를 각각 언제 쓰는지 한 문장으로 가른다
- [ ] Lambda 를 못 쓰는 상황을 하나 든다
- [ ] 큐 기반 워커를 확장할 때 어떤 지표를 봐야 하는지 안다
- [ ] 무상태로 만든다는 말이 구체적으로 무엇을 옮기는 것인지 말한다

---

> 더 기초부터: [CLF-C02 의 Amazon SQS](/docs/aws-clf-c02/10-services/07-app-integration/amazon-sqs)
