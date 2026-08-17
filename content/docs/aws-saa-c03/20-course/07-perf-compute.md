---
title: "3.2 고성능의 탄력적인 컴퓨팅 솔루션 설계"
description: "인스턴스인가 컨테이너인가 함수인가 — 그리고 얼마나 빨리 늘어나야 하는가"
tags: [saa-c03, 도메인3, 과제명세]
kind: domain
module: 7
status: 미학습
---

> 도메인 3 · 고성능 아키텍처 설계 **24%** · 과제 명세 5개 중 **두 번째**

## 1. 왜 필요한가

> 컴퓨팅 문항의 절반은 "**무엇 위에서 돌릴 것인가**" 하나로 끝납니다.

EC2 · ECS · EKS · Fargate · Lambda · Batch. 여섯 개가 다 "코드를 돌리는 곳"입니다.
문항은 지문 안에 딱 하나의 조건을 심어 두고 그중 하나를 고르게 합니다 —
실행 시간, 운영 부담, 기존 컨테이너 유무, 상태 유무 같은 것들입니다.

실제 시험에서 **EC2 가 Linux 와 Windows 양쪽으로** 나왔다는 보고가 있습니다.
운영체제 라이선스가 조건에 끼어드는 문항이 있다는 뜻입니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-ec2\|Amazon EC2]] | 가상 서버 | 인스턴스 패밀리 선택이 곧 성능 선택 |
| [[amazon-ec2-auto-scaling\|EC2 Auto Scaling]] | 대수 자동 조절 | 탄력성의 기본 |
| [[aws-lambda\|AWS Lambda]] | 서버 없이 함수 실행 | 최대 15분 |
| [[aws-fargate\|AWS Fargate]] | 컨테이너를 서버 관리 없이 | 컨테이너 + 운영 오버헤드 최소 |
| [[amazon-ecs\|Amazon ECS]] | AWS 방식 컨테이너 오케스트레이션 | 단순한 컨테이너 운영 |
| [[amazon-eks\|Amazon EKS]] | 관리형 Kubernetes | `Kubernetes` 가 지문에 있을 때 |
| [[aws-batch\|AWS Batch]] | 배치 작업 큐 | 대량 일괄 처리 |
| [[elastic-load-balancing\|Elastic Load Balancing]] | 트래픽 분산 | ALB · NLB 선택 |

## 3. 이 과제가 묻는 것

**어디서 돌릴 것인가 — 판단 순서**

```d2
direction: right

q1: "기존 컨테이너가\n있는가?"
q2: "짧고 이벤트\n기반인가?"
q3: "Kubernetes 를\n써야 하는가?"

lambda: "Lambda"
eks: "EKS"
ecs: "ECS + Fargate"
ec2: "EC2 + Auto Scaling"

q1 -> q2: "아니오"
q2 -> lambda: "예 (15분 이내)"
q2 -> ec2: "아니오"
q1 -> q3: "예"
q3 -> eks: "예"
q3 -> ecs: "아니오"
```

**인스턴스 패밀리** — 이름의 첫 글자가 곧 용도입니다.

| | 무엇에 강한가 | 지문의 신호 |
|---|---|---|
| **T** | 버스트 가능 범용 | 평소 한가하고 가끔 튄다 |
| **M** | 균형 잡힌 범용 | 특별한 요구가 없다 |
| **C** | 컴퓨팅 최적화 | `CPU 집약적` · 배치 · 게임 서버 |
| **R · X** | 메모리 최적화 | `인메모리 DB` · 대용량 캐시 |
| **I · D** | 스토리지 최적화 | `높은 로컬 IOPS` |
| **P · G · Inf** | 가속 컴퓨팅 | `GPU` · 머신러닝 · 추론 |

**Graviton** — ARM 기반. 같은 성능에 **가격이 낮습니다.**
`비용 대비 성능` 이 나오면 Graviton 으로 옮기는 보기가 정답인 경우가 많습니다.

**빠르게 늘어나야 할 때**

- ASG 의 확장은 **인스턴스 부팅 시간만큼 늦습니다.** 미리 만든 AMI 로 부팅을 줄입니다
- 갑작스러운 급증이 문제면 **예열 풀(warm pool)** 이나 예약 조정
- 정말 즉시 필요하면 컴퓨팅 자체를 **Lambda·Fargate** 로 바꾸는 것이 답입니다

**ALB vs NLB**

| | 언제 |
|---|---|
| **ALB** | HTTP/HTTPS. 경로·호스트 기반 라우팅, WAF 를 붙일 수 있다 |
| **NLB** | TCP/UDP, **초저지연**, 고정 IP 가 필요할 때, 초당 수백만 요청 |
| **GWLB** | 서드파티 방화벽·IDS 어플라이언스를 경로에 끼워 넣을 때 |

**배치 그룹**

| | 무엇을 위해 |
|---|---|
| **클러스터** | 같은 랙에 몰아 넣어 **지연을 최소화**. HPC |
| **분산** | 서로 다른 하드웨어에 흩어 **동시 장애를 막는다** |
| **파티션** | 파티션 단위로 나눠 대규모 분산 시스템(HDFS·Kafka) |

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `운영 오버헤드 최소` + 짧은 처리 | **Lambda** |
| `실행이 15분을 넘는다` | Lambda **아님** → Fargate · EC2 |
| `이미 컨테이너로 되어 있다` + `서버 관리 싫다` | **ECS + Fargate** |
| `Kubernetes` · `기존 k8s 매니페스트` | **EKS** |
| `수천 개 배치 작업을 큐에 넣고` | **AWS Batch** |
| `CPU 집약적` | **C 계열** |
| `대용량 인메모리` | **R · X 계열** |
| `머신러닝 학습` · `GPU` | **P · G 계열** |
| `비용은 줄이고 성능은 유지` | **Graviton** |
| `노드 간 지연이 중요한 HPC` | **클러스터 배치 그룹** (+ Elastic Fabric Adapter) |
| `고정 IP 가 필요` · `TCP` | **NLB** |
| `URL 경로에 따라 다른 서비스로` | **ALB** |

> [!warning] 수직 확장은 대개 오답입니다
> `인스턴스 크기를 키운다` 는 보기는 그럴듯하지만 SAA 는 거의 항상 **수평 확장**을 원합니다.
> 크기를 키우면 재시작이 필요하고, 단일 장애점이 그대로 남습니다.
> 예외는 `단일 스레드 애플리케이션` 처럼 나눌 수 없다고 지문이 못 박은 경우뿐입니다.

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
  *.class: new

  "Amazon EC2"
  "Amazon ECS"
  "Amazon EKS"
  "AWS Batch"
}
```

## 6. 셀프 체크

- [ ] Lambda 를 쓸 수 없는 조건을 두 가지 댄다
- [ ] ECS 와 EKS 를 가르는 지문의 낱말을 안다
- [ ] 인스턴스 패밀리 첫 글자로 용도를 세 개 이상 맞춘다
- [ ] ALB 와 NLB 중 어느 쪽에 WAF 를 붙이는지 안다
- [ ] 클러스터 배치 그룹과 분산 배치 그룹의 목적이 반대라는 것을 설명한다

---

> 더 기초부터: [CLF-C02 의 컴퓨팅 모듈](/docs/aws-clf-c02/20-course/03-compute-services)
