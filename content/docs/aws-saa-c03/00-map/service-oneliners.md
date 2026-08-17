---
title: "한줄노트"
description: "서비스당 한 줄 — 10~15분에 전체를 한 번 훑기 위한 노트"
tags: [MOC, saa-c03, 한줄노트]
---

**서비스당 한 줄.** 설명하는 노트가 아니라 **훑는 노트**입니다.

| 언제 쓰나 | |
|---|---|
| 시작할 때 | 문제를 풀기 전에 한 번. 지금은 외우는 게 아니라 **윤곽만** 잡습니다 |
| 공부 중간 | **10~15분에 전체 1회독.** 하루 한 번이면 충분합니다 |
| 시험 직전 | 마지막 머리 정리 |

> [!important] 분량이 늘어나면 이 노트는 죽습니다
> 한 줄에 담기지 않는 내용은 서비스 노트로 보냅니다.
> 15분 안에 끝까지 못 읽으면 아무도 1회독을 안 하게 되고, 그러면 이 노트는 있으나 마나입니다.

`★` 는 **실제 시험에서 나왔다는 증언이 있는** 서비스입니다. 우선순위가 여기 있습니다.

---

## 컴퓨팅

| 서비스 | 한 줄 |
|---|---|
| **Amazon EC2** ★ | 가상 서버. Linux 와 Windows 둘 다 물어본다 |
| **EC2 Auto Scaling** | 지표를 보고 인스턴스 대수를 자동으로 늘리고 줄인다 |
| **AWS Lambda** ★ | 서버 없이 코드만 올려 실행. 최대 실행 시간 15분 |
| **AWS Fargate** | 컨테이너를 EC2 관리 없이 실행. `운영 오버헤드 최소` 의 컨테이너 판 |
| **Amazon ECS / EKS** | 컨테이너 오케스트레이션. EKS 는 Kubernetes 그대로 |
| **AWS Batch** | 대량 배치 작업을 큐에 넣고 알아서 컴퓨팅을 붙였다 뗀다 |
| **AWS Amplify** ★ | 프런트엔드 웹·모바일 앱을 호스팅하고 백엔드까지 붙여 준다 |

## 스토리지

| 서비스 | 한 줄 |
|---|---|
| **Amazon S3** ★ | 객체 스토리지. 사실상 무제한, 11 나인 내구성 |
| **S3 Glacier** | S3 안의 아카이브 클래스 묶음. 꺼내는 데 시간이 걸리는 대신 가장 싸다 |
| **Amazon EBS** | EC2 한 대에 붙는 블록 볼륨. **단일 AZ** 에 묶인다 |
| **Amazon EFS** ★ | 여러 Linux 인스턴스가 동시에 마운트하는 NFS. **리전** 단위 |
| **EFS Infrequent Access** ★ | EFS 안에서 잘 안 쓰는 파일을 자동으로 싼 계층으로 내린다 |
| **FSx for Lustre** ★ | HPC·머신러닝용 초고속 파일 시스템. S3 를 파일처럼 붙여 쓴다 |
| **FSx for NetApp ONTAP** ★ | NFS·SMB·iSCSI 를 한 볼륨에서. 온프레미스 NetApp 을 그대로 옮길 때 |
| **FSx for Windows File Server** | SMB + Active Directory. Windows 애플리케이션용 공유 |
| **AWS Storage Gateway** ★ | 온프레미스를 AWS 스토리지에 잇는다. File · Volume · Tape 3종 |
| **AWS Snow Family** | 물리 장비로 대용량 데이터를 실어 나른다. 네트워크로는 몇 주 걸릴 때 |
| **AWS Backup** | 여러 서비스의 백업 정책을 한 곳에서 관리 |
| **AWS Elastic Disaster Recovery** | 서버를 통째로 AWS 에 실시간 복제해 두었다가 장애 때 띄운다 |

## 데이터베이스

| 서비스 | 한 줄 |
|---|---|
| **Amazon RDS** ★ | 관리형 관계형 DB. 다중 AZ = 가용성, 읽기 전용 복제본 = 읽기 성능 |
| **Amazon Aurora** ★ | AWS 가 다시 만든 MySQL·PostgreSQL 호환 DB. 6벌 복제, 3개 AZ |
| **Aurora Serverless** | 트래픽에 따라 용량이 자동으로 오르내리는 Aurora. 예측 불가한 워크로드 |
| **Amazon DynamoDB** ★ | 관리형 NoSQL. 한 자릿수 밀리초, 무제한 확장 |
| **DynamoDB Accelerator (DAX)** | DynamoDB 전용 캐시. 마이크로초까지 내린다 |
| **Amazon ElastiCache** | Redis·Memcached 관리형 인메모리 캐시. DB 부하를 앞에서 걷어낸다 |
| **Amazon Redshift** | 페타바이트급 데이터 웨어하우스. 분석 쿼리용이지 트랜잭션용이 아니다 |
| **Amazon RDS Proxy** | DB 커넥션을 모아서 관리. Lambda 가 DB 를 물어뜯을 때 |

## 네트워킹

| 서비스 | 한 줄 |
|---|---|
| **Amazon VPC** ★ | 내 전용 가상 네트워크. 서브넷·라우팅 테이블·게이트웨이가 여기 산다 |
| **VPC 엔드포인트** ★ | 인터넷을 거치지 않고 AWS 서비스에 붙는다. Gateway(S3·DynamoDB, 무료) / Interface(그 외) |
| **AWS Transit Gateway** ★ | VPC 와 온프레미스를 한 허브에 다 꽂는다. 전이적 라우팅이 된다 |
| **VPC 피어링** | VPC 두 개를 직접 잇는다. 전이적 라우팅은 **안 된다** |
| **AWS PrivateLink** | VPC 전체가 아니라 **서비스 하나만** 남에게 노출한다 |
| **NAT 게이트웨이** | 프라이빗 서브넷이 밖으로 나가되 밖에서는 못 들어오게 |
| **Elastic Load Balancing** | 트래픽 분산. ALB(HTTP) / NLB(TCP·초저지연) / GWLB(방화벽 어플라이언스) |
| **Amazon Route 53** | DNS + 상태 확인 + 라우팅 정책(지연 시간·지리·가중치·장애 조치) |
| **Amazon CloudFront** ★ | 전 세계 엣지 캐시. 정적·동적 콘텐츠 모두 |
| **AWS Global Accelerator** | 엣지에서 AWS 백본으로 태워 보낸다. 캐시가 아니라 **경로**를 빠르게 |
| **AWS Direct Connect** | 온프레미스와 AWS 사이 전용선. 인터넷을 안 탄다 |
| **Site-to-Site VPN** | 인터넷 위로 암호화 터널. Direct Connect 보다 싸고 빠르게 깔린다 |

## 보안 · 자격 증명

| 서비스 | 한 줄 |
|---|---|
| **AWS IAM** | 누가 무엇을 할 수 있는지. 사용자·그룹·**역할**·정책 |
| **IAM 역할** | 자격 증명을 파일에 박지 않고 빌려 쓰는 방법. **키가 나오면 거의 오답** |
| **AWS Directory Service** ★ | 온프레미스 Microsoft AD 를 AWS 와 잇거나 AWS 안에 세운다 |
| **Amazon Cognito** | 앱 사용자의 가입·로그인. IAM 은 AWS 직원용, Cognito 는 앱 손님용 |
| **AWS KMS** | 암호화 키 관리. 대부분의 서비스가 여기 키로 저장 시 암호화한다 |
| **AWS Secrets Manager** | 비밀번호·API 키 보관. **자동 교체(rotation)** 가 결정적 차이 |
| **Systems Manager Parameter Store** | 설정값과 비밀 보관. 교체 기능은 없고 대신 싸다 |
| **AWS WAF** ★ | 요청 내용을 읽고 막는다. SQL 인젝션·XSS·국가 차단·속도 제한 |
| **AWS Shield** ★ | DDoS 방어. Standard 는 자동·무료, Advanced 는 전담 대응 팀 |
| **AWS Certificate Manager** | TLS 인증서 발급·자동 갱신. ELB·CloudFront 에 붙인다 |
| **AWS Organizations** | 계정 여러 개를 묶어 통합 결제와 서비스 제어 정책(SCP)을 건다 |
| **Amazon GuardDuty** | 로그를 읽어 위협을 탐지한다. 설정이 아니라 켜기만 하면 된다 |

## 애플리케이션 통합

| 서비스 | 한 줄 |
|---|---|
| **Amazon SQS** ★ | 큐. 소비자가 꺼내 갈 때까지 메시지가 남는다. 처리 속도 완충 |
| **Amazon SNS** ★ | 주제. 구독자 전원에게 동시에 밀어 준다. 남지 않는다 |
| **Amazon EventBridge** | 이벤트 버스. 일정·서드파티 SaaS·패턴 기반 라우팅 |
| **AWS Step Functions** | 여러 단계를 상태 기계로 엮는다. 재시도와 분기를 코드 밖으로 |
| **Amazon API Gateway** ★ | REST·HTTP·WebSocket API 의 정문. 인증·스로틀링·캐싱 |

## 분석 · 데이터 이동

| 서비스 | 한 줄 |
|---|---|
| **Amazon EMR** ★ | Hadoop·Spark 클러스터 관리형. 클러스터 구성까지 물어본다 |
| **Amazon Kinesis Data Streams** | 실시간 스트림을 받아 여러 소비자가 각자 읽는다 |
| **Amazon Data Firehose** | 스트림을 S3·Redshift 로 **그냥 흘려보낸다.** 코드가 없다 |
| **Amazon Athena** | S3 에 있는 파일에 SQL 을 그대로 던진다. 서버가 없다 |
| **AWS Glue** | 서버리스 ETL 과 데이터 카탈로그 |
| **Amazon QuickSight** | 대시보드·시각화 |
| **AWS DataSync** | 온프레미스와 AWS 사이 대량 파일 전송을 자동화 |
| **AWS DMS** | 데이터베이스만 옮긴다. 서버 통째로면 Application Migration Service |

## 관리 · 거버넌스

| 서비스 | 한 줄 |
|---|---|
| **Amazon CloudWatch** | 지표·로그·경보. 무엇이 일어나고 있는지 |
| **AWS CloudTrail** | 누가 어떤 API 를 불렀는지. 감사 기록 |
| **AWS Config** | 리소스 설정이 규칙에서 벗어났는지 |
| **AWS Systems Manager** | 인스턴스에 SSH 없이 붙고 패치·명령을 돌린다 |
| **AWS CloudFormation** | 인프라를 코드로. 같은 스택을 다른 리전에 그대로 |

---

## 아직 안 들어온 것

범위 내 서비스는 **129개**입니다. 위 목록은 그중 **시험 출현이 확인되었거나 다른 노트가 실제로 가리키는 것**만 담았습니다.

채우는 순서는 정해져 있습니다.

1. 실제 시험에서 봤다는 증언이 있는 서비스 ← **지금 여기**
2. 공식 범위 내 서비스 목록
3. 문제를 풀다 걸리는 것 ← 여기부터는 자라는 대로

## 같이 볼 것

- [[service-comparisons]] — 한 줄로는 안 갈리는 쌍
- [[00-learning-path]] — 과제 명세 순서로 돌아가기
