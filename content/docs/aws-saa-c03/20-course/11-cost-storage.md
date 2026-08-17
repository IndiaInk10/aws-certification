---
title: "4.1 비용 최적화 스토리지 솔루션 설계"
description: "안 쓰는 데이터를 자동으로 내리고 · 안 쓰는 볼륨을 지운다"
tags: [saa-c03, 도메인4, 과제명세]
kind: domain
module: 11
status: 미학습
---

> 도메인 4 · 비용에 최적화된 아키텍처 설계 **20%** · 과제 명세 4개 중 **첫 번째**

## 1. 왜 필요한가

> [[06-perf-storage\|3.1]] 과 **같은 서비스를 반대편에서** 봅니다. 짝으로 보면 한 번에 끝납니다.

3.1 은 "얼마나 빨라야 하는가"를 물었고, 4.1 은 "얼마나 싸게 할 수 있는가"를 묻습니다.
그런데 등장 서비스가 거의 같습니다. 따로 공부하면 두 번 외우게 됩니다.

스토리지 비용 문항은 답이 몇 개 안 됩니다.
**수명 주기 정책 · Intelligent-Tiering · 적절한 볼륨 유형 · 안 쓰는 것 지우기.**

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-s3\|Amazon S3]] | 객체 스토리지 | 스토리지 클래스가 곧 비용 설계 |
| [[amazon-s3-glacier\|S3 Glacier]] | 아카이브 클래스 묶음 | 장기 보관 |
| [[amazon-ebs\|Amazon EBS]] | 블록 볼륨 | 유형 전환과 스냅샷 관리 |
| [[amazon-efs\|Amazon EFS]] | 공유 파일 시스템 | IA 계층으로 자동 이동 |
| [[aws-backup\|AWS Backup]] | 백업 정책 | 보존 기간이 곧 비용 |
| [[aws-storage-gateway\|AWS Storage Gateway]] | 온프레미스 연결 | 온프레미스 스토리지 증설을 대신한다 |

## 3. 이 과제가 묻는 것

**S3 스토리지 클래스 — 접근 빈도 축 하나입니다**

| 클래스 | 언제 | 꺼내는 비용 |
|---|---|---|
| **Standard** | 자주 | 없다 |
| **Intelligent-Tiering** | **모를 때** | 없다 (모니터링 수수료) |
| **Standard-IA** | 가끔, 즉시 필요 | 있다 |
| **One Zone-IA** | 가끔, **다시 만들 수 있는** 데이터 | 있다 (AZ 하나뿐) |
| **Glacier Instant Retrieval** | 분기 1회, 즉시 | 있다 |
| **Glacier Flexible Retrieval** | 연 1~2회, 분~시간 | 있다 |
| **Glacier Deep Archive** | 연 1회 미만, **12시간** | 가장 싸다 |

**핵심 판정 두 가지**

- `접근 패턴을 모른다` · `예측할 수 없다` → **Intelligent-Tiering**. 이 신호는 거의 예외가 없습니다
- `30일 뒤 IA, 90일 뒤 Glacier` 처럼 **패턴을 안다** → **수명 주기 정책**

둘을 헷갈리면 안 됩니다. **아는 패턴이면 수명 주기, 모르는 패턴이면 Intelligent-Tiering** 입니다.

**수명 주기 정책이 하는 일**

- 클래스 간 **전환**
- 오래된 버전 **만료**
- **불완전한 멀티파트 업로드 삭제** ← 조용히 쌓이는 비용. 문항으로 나옵니다

**EBS 비용**

| | |
|---|---|
| gp2 → **gp3** | 대체로 더 싸고 IOPS 를 따로 올릴 수 있다. `비용 절감` 의 단골 답 |
| 안 붙은 볼륨 | 인스턴스를 지워도 볼륨은 남아 계속 과금된다 |
| 스냅샷 | 증분이지만 쌓인다. **Data Lifecycle Manager** 로 자동 정리 |
| 프로비저닝 IOPS | 실제로 필요 없으면 gp3 로 내린다 |

**EFS 와 FSx**

- EFS **수명 주기 관리** — 30일 안 쓰면 IA 로 자동 이동
- `한 AZ 안에서만 쓰면 된다` → **EFS One Zone**

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `접근 패턴을 모른다` | **S3 Intelligent-Tiering** |
| `30일 후 · 90일 후` 처럼 기간이 명시 | **수명 주기 정책** |
| `1년에 한 번 볼까 말까` · `12시간 걸려도 된다` | **Glacier Deep Archive** |
| `다시 만들 수 있는 데이터` · `비용 최우선` | **One Zone-IA** |
| `규정상 7년 보관, 즉시 조회는 불필요` | Glacier + **객체 잠금** |
| `안 쓰는 EBS 볼륨이 계속 청구` | 미사용 볼륨 정리 · 스냅샷 후 삭제 |
| `gp2 를 쓰고 있는데 비용을 줄여라` | **gp3 로 전환** |
| `EFS 인데 오래된 파일이 많다` | **EFS 수명 주기 관리 (IA)** |
| `온프레미스 스토리지를 증설하는 대신` | **Storage Gateway** |
| `스냅샷이 계속 쌓인다` | **Data Lifecycle Manager** |

> [!warning] 꺼내는 비용을 잊지 마세요
> IA 와 Glacier 는 **저장은 싸지만 꺼낼 때 돈이 붙습니다.**
> `자주 접근하는데 IA 로 옮긴다` 는 보기는 오히려 비용이 늘어 오답입니다.
> 최소 보관 기간(IA 30일 · Glacier 90일 등)도 마찬가지로 함정이 됩니다.

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
  *.class: new

  "S3 Glacier"
}
```

## 6. 셀프 체크

- [ ] Intelligent-Tiering 과 수명 주기 정책을 가르는 조건 한 줄을 말한다
- [ ] One Zone-IA 를 써도 되는 데이터의 성격을 설명한다
- [ ] IA 로 옮기면 오히려 손해인 경우를 든다
- [ ] gp2 대신 gp3 를 고르는 이유를 두 가지 댄다
- [ ] 조용히 쌓이는 스토리지 비용 세 가지를 안다

---

> 더 기초부터: [CLF-C02 의 Amazon S3](/docs/aws-clf-c02/10-services/02-storage/amazon-s3)
