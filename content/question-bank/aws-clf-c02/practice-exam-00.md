---
title: "공식 연습 문제"
tags: [clf-c02, 문제은행, quiz, 공식]
exam: 0
문항수: 20
---

> [!info] AWS가 직접 낸 20문항입니다
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/aws-clf-c02/quiz/0)** 에서 푸세요.
> 출처: [AWS Skill Builder — Official Practice Question Set (CLF-C02, 한국어)](https://skillbuilder.aws/learn/E4W52ZKK6P/official-practice-question-set-aws-certified-cloud-practitioner-clfc02--/VRA5A1WETH)

> [!tip] 여기부터 푸세요
> AWS 공식 학습 플랜은 **강의를 다 듣기 전에 이 문제부터** 풀라고 권합니다.
> 실제 시험의 난이도와 문장 스타일을 먼저 겪어 보고, 부족한 영역을 찾아 거기부터 학습하는 순서입니다.
> 사설 모의고사보다 **실제 시험에 가장 가깝습니다.**

> [!question] 전 세계 여러 국가에서 고객을 보유한 기업이 AWS 클라우드를 사용하면 어떤 이점이 있는가?
> a) Elastic Load Balancing은 애플리케이션 웹 트래픽을 전 세계 여러 AWS 리전에 분산하여 지연 시간을 줄일 수 있다.
> b) Amazon CloudFront는 지연 시간을 줄이기 위해 전 세계에 여러 엣지 로케이션을 보유하고 있다.
> c) Amazon Translate는 서드 파티 웹 사이트 인터페이스를 여러 언어로 자동 번역한다.
> d) Amazon Comprehend를 사용하면 여러 언어로 사용자 요청에 응답할 수 있는 애플리케이션을 구축할 수 있다.
> e) 기업은 여러 AWS 리전에 애플리케이션을 배포하여 지연 시간을 줄일 수 있다.
>> [!success]- Answer
>> b) Amazon CloudFront는 지연 시간을 줄이기 위해 전 세계에 여러 엣지 로케이션을 보유하고 있다.
>> e) 기업은 여러 AWS 리전에 애플리케이션을 배포하여 지연 시간을 줄일 수 있다.

<sub>관련: [[amazon-cloudfront]] [[04-global-infrastructure]] | 모듈 [[04-global-infrastructure]]</sub>

> [!question] 전화 통화를 통해 기술 지원을 제공하는 최소의 AWS Support 플랜은 무엇인가?
> a) Developer
> b) Basic
> c) Business
> d) Enterprise
>> [!success]- Answer
>> c) Business

<sub>관련: [[aws-support-plans]] | 모듈 [[11-billing-support]]</sub>

> [!question] 고객이 사용되지 않은 Amazon EC2 용량을 종종 할인된 가격으로 구매할 수 있게 해 주는 AWS 서비스는 무엇인가?
> a) 스팟 인스턴스
> b) 예약형 인스턴스
> c) 온디맨드 인스턴스
> d) 전용 인스턴스
>> [!success]- Answer
>> a) 스팟 인스턴스

<sub>관련: [[amazon-ec2]] | 모듈 [[02-cloud-computing]]</sub>

> [!question] AWS 공동 책임 모델에 따라 고객이 책임을 져야 할 태스크는 무엇인가?
> a) 고객의 VPC가 포함된 데이터 센터에 대한 물리적 액세스를 제어한다.
> b) 최소 권한의 원칙에 따라 IAM 사용자를 구성한다.
> c) Amazon RDS DB 인스턴스에 패치를 설치한다.
> d) Amazon EC2 인스턴스의 보안 그룹을 구성한다.
> e) AWS Lambda 함수가 사용하는 운영 체제를 패치한다.
>> [!success]- Answer
>> b) 최소 권한의 원칙에 따라 IAM 사용자를 구성한다.
>> d) Amazon EC2 인스턴스의 보안 그룹을 구성한다.

<sub>관련: [[aws-iam]] [[amazon-ec2]] | 모듈 [[09-security]]</sub>

> [!question] 여러 가용 영역에 Amazon EC2 인스턴스를 사용하여 애플리케이션을 배포하면 어떤 이점이 있는가?
> a) 애플리케이션이 짧은 지연 시간으로 교차 리전 사용자에게 서비스를 제공할 수 있음
> b) 애플리케이션의 로드 증대
> c) 단일 장애 지점 방지
> d) 애플리케이션 운영 비용 절감
> e) 애플리케이션의 가용성 향상
>> [!success]- Answer
>> c) 단일 장애 지점 방지
>> e) 애플리케이션의 가용성 향상

<sub>관련: [[amazon-ec2]] | 모듈 [[04-global-infrastructure]]</sub>

> [!question] Amazon S3의 특징적인 기능은 다음 중 무엇인가?
> a) 네트워크 파일 시스템
> b) 글로벌 파일 시스템
> c) 객체 스토어
> d) 로컬 파일 스토어
> e) 내구성이 뛰어난 스토리지 시스템
>> [!success]- Answer
>> c) 객체 스토어
>> e) 내구성이 뛰어난 스토리지 시스템

<sub>관련: [[amazon-s3]] | 모듈 [[06-storage]]</sub>

> [!question] 한 회사가 단일 Amazon S3 버킷에서 정적 웹 사이트를 호스팅하고 있다. 지연 시간을 줄이고 전송 속도를 높일 수 있는 AWS 서비스는 무엇인가?
> a) AWS Elastic Beanstalk
> b) Amazon DynamoDB Accelerator(DAX)
> c) Amazon Route 53
> d) Amazon CloudFront
>> [!success]- Answer
>> d) Amazon CloudFront

<sub>관련: [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[05-networking]]</sub>

> [!question] AWS 계정에 프로그래밍 방식으로 액세스하려면 어떤 자격 증명 구성 요소가 필요한가?
> a) 비밀 액세스 키
> b) 사용자 ID
> c) 액세스 키 ID
> d) 기본 키
> e) 보조 키
>> [!success]- Answer
>> a) 비밀 액세스 키
>> c) 액세스 키 ID

<sub>관련: [[aws-iam]] | 모듈 [[09-security]]</sub>

> [!question] Amazon S3에 저장된 민감한 데이터를 자동으로 검색, 분류 및 보호해야 하는 한 사용자가 있다. 이러한 요구 사항을 충족할 수 있는 AWS 서비스는 무엇인가?
> a) Amazon Inspector
> b) Amazon Macie
> c) Amazon GuardDuty
> d) AWS Secrets Manager
>> [!success]- Answer
>> b) Amazon Macie

<sub>관련: [[amazon-macie]] | 모듈 [[09-security]]</sub>

> [!question] 한 사용자가 여러 가용 영역에 Amazon RDS DB 인스턴스를 배포하고 있다. 이 전략에는 AWS Well-Architected Framework의 어떤 원칙이 관련되는가?
> a) 신뢰성
> b) 보안
> c) 성능 효율성
> d) 비용 최적화
>> [!success]- Answer
>> a) 신뢰성

<sub>관련: [[amazon-rds]] | 모듈 [[13-well-architected]]</sub>

> [!question] 한 회사는 회사의 온프레미스 서버와 AWS 간에 암호화된 연결을 필요로 한다. 연결은 회사의 기존 인터넷 연결을 사용해야 한다. 다음 중 이러한 요구 사항을 충족하는 솔루션은 무엇인가?
> a) Amazon Connect
> b) AWS Site-to-Site VPN
> c) Amazon CloudFront
> d) AWS Direct Connect
>> [!success]- Answer
>> b) AWS Site-to-Site VPN

<sub>관련: [[aws-site-to-site-vpn]] [[aws-direct-connect]] | 모듈 [[05-networking]]</sub>

> [!question] 애플리케이션 개발 팀에게는 애플리케이션의 품질 보증 테스트에 실패할 경우 전체 개발 팀에 경고를 보내는 솔루션이 필요하다. 애플리케이션 개발 팀이 요구 사항을 충족하려면 어떤 AWS 서비스를 사용해야 하는가?
> a) Amazon EventBridge
> b) Amazon Simple Notification Service(Amazon SNS)
> c) Amazon Simple Queue Service(Amazon SQS)
> d) Amazon Connect
>> [!success]- Answer
>> b) Amazon Simple Notification Service(Amazon SNS)

<sub>관련: [[amazon-sns]] | 모듈 [[02-cloud-computing]]</sub>

> [!question] 한 회사는 웹 사이트에서 발생한 신규 고객 주문을 기록하는 AWS상의 관계형 데이터베이스를 필요로 한다. 이 요구 사항을 충족하는 AWS 서비스 또는 기능은 무엇인가?
> a) Amazon DynamoDB
> b) Amazon Aurora
> c) Amazon Elastic Block Store(Amazon EBS)
> d) AWS Global Accelerator
>> [!success]- Answer
>> b) Amazon Aurora

<sub>관련: [[amazon-aurora]] | 모듈 [[07-databases]]</sub>

> [!question] 다음 중 사용자의 AWS 리소스에 대한 무제한 액세스를 허용하는 보안 그룹을 식별하는 AWS 서비스는 무엇인가?
> a) AWS Identity and Access Management (IAM)
> b) AWS CloudTrail
> c) AWS Trusted Advisor
> d) Amazon CloudWatch
>> [!success]- Answer
>> c) AWS Trusted Advisor

<sub>관련: [[aws-trusted-advisor]] | 모듈 [[10-monitoring-governance]]</sub>

> [!question] 한 회사는 회사의 온프레미스 데이터 센터에서 AWS 클라우드로 일관된 비공개 연결을 구축하고자 한다. 다음 중 이러한 요구 사항을 충족하는 AWS 서비스는 무엇인가?
> a) Amazon Connect
> b) AWS Direct Connect
> c) AWS Site-to-Site VPN
> d) AWS Client VPN
>> [!success]- Answer
>> b) AWS Direct Connect

<sub>관련: [[aws-direct-connect]] | 모듈 [[05-networking]]</sub>

> [!question] 프리 티어를 초과한 경우 AWS는 AWS Lambda 사용량에 대한 요금을 어떻게 청구하는가?
> a) 특정 Lambda 함수의 버전 수 기준
> b) Lambda 함수에 사용되는 프로그래밍 언어 기준
> c) AWS 계정의 총 Lambda 함수 수 기준
> d) 지정된 Lambda 함수에 대한 요청 수 기준
> e) Lambda 함수를 실행하는 데 걸리는 시간 기준
>> [!success]- Answer
>> d) 지정된 Lambda 함수에 대한 요청 수 기준
>> e) Lambda 함수를 실행하는 데 걸리는 시간 기준

<sub>관련: [[aws-lambda]] | 모듈 [[03-compute-services]]</sub>

> [!question] 한 회사에 Oracle 데이터베이스가 실행되는 온프레미스 Linux 기반 서버가 있다. 회사는 AWS의 Amazon EC2 인스턴스에서 실행되도록 데이터베이스 서버를 마이그레이션하고자 한다. 회사에서 마이그레이션을 완료하려면 어떤 서비스를 사용해야 하는가?
> a) AWS Outposts
> b) AWS Schema Conversion Tool(AWS SCT)
> c) AWS Database Migration Service(AWS DMS)
> d) AWS Application Migration Service(AWS MGN)
>> [!success]- Answer
>> d) AWS Application Migration Service(AWS MGN)

<sub>관련: [[aws-application-migration-service]] [[aws-dms]] | 모듈 [[12-migration]]</sub>

> [!question] 한 회사 내의 각 부서에 독립적인 자체 AWS 계정과 자체 결제 방법이 있다. 회사에서는 부서별 거버넌스를 중앙 집중화하고 결제를 통합하려고 한다. 회사는 AWS 서비스 또는 기능을 사용하여 이러한 목표를 어떻게 달성할 수 있는가?
> a) AWS Systems Manager OpsCenter를 사용한다.
> b) AWS 결제 및 비용 관리 콘솔의 AWS Cost and Usage Report 페이지를 사용한다.
> c) 하나의 계정 내에서 모든 기능이 활성화된 AWS Organizations에 조직을 생성한다. 조직에 가입하도록 모든 계정을 초대한다.
> d) 각 계정에서 AWS IAM Identity Center를 구성한다.
>> [!success]- Answer
>> c) 하나의 계정 내에서 모든 기능이 활성화된 AWS Organizations에 조직을 생성한다. 조직에 가입하도록 모든 계정을 초대한다.

<sub>관련: [[aws-organizations]] | 모듈 [[10-monitoring-governance]]</sub>

> [!question] 한 회사에서 학생들을 위한 학습 애플리케이션을 만들고자 한다. 학습 애플리케이션은 학생들이 텍스트가 소리내어 읽혀지는 버튼을 선택할 수 있는 옵션을 제공해야 한다. 이 요구 사항을 충족하는 AWS 기계 학습 서비스는 무엇인가?
> a) Amazon Transcribe
> b) Amazon Polly
> c) Amazon Translate
> d) Amazon Textract
>> [!success]- Answer
>> b) Amazon Polly

<sub>관련: [[amazon-polly]] [[amazon-transcribe]] | 모듈 [[08-ai-ml-analytics]]</sub>

> [!question] 전송 중 암호화를 구현하려면 어떤 AWS 서비스를 사용해야 하는가?
> a) AWS Certificate Manager(ACM)
> b) AWS Security Hub
> c) AWS Shield
> d) AWS Resource Access Manager(AWS RAM)
>> [!success]- Answer
>> a) AWS Certificate Manager(ACM)

<sub>관련: [[aws-certificate-manager]] [[aws-kms]] | 모듈 [[09-security]]</sub>
