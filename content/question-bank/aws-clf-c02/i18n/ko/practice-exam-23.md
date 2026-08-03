---
title: "모의고사 23회"
lang: ko
exam: 23
---

<!--
  practice-exam-23.md 의 한국어판.
  문항은 **순서**로, 보기는 **글머리(a/b/c)** 로 원문과 짝지어진다.
  순서를 바꾸거나 문항을 빼면 원문과 어긋나므로 그대로 두세요.
  정답 블록은 파서가 문항을 인식하기 위해 필요하며, 실제 채점은 원문 기준입니다.

  문체는 **실제 시험 한국어판의 번역투**를 그대로 흉내 냅니다.
  ("~은 무엇인가?", "다음 중 ~", 서비스명은 영문 유지, 자연스러운 의역은 하지 않음)
-->

> [!question] 한 사용자가 애플리케이션 워크로드를 AWS 클라우드로 마이그레이션할 계획이다. 마이그레이션이 완료되면 다음 중 어떤 제어가 AWS의 책임이 되는가?
> a) 게스트 운영 체제 패치 적용
> b) 물리적 및 환경적 제어 유지 관리
> c) 통신 보호 및 영역 보안 유지 관리
> d) 특정 애플리케이션 패치 적용
>> [!success]- Answer
>> b) 물리적 및 환경적 제어 유지 관리

> [!question] AWS에서 애플리케이션을 배포하는 데 사용할 수 있는 서비스는 무엇인가? (2개 선택)
> a) AWS Elastic Beanstalk
> b) AWS Config
> c) AWS OpsWorks
> d) AWS Application Discovery Service
> e) Amazon Kinesis
>> [!success]- Answer
>> a) AWS Elastic Beanstalk
>> c) AWS OpsWorks

> [!question] 온디맨드 방식의 클라우드 기반 고객 센터를 제공하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS Direct Connect
> b) Amazon Connect
> c) AWS Support Center
> d) AWS Managed Services
>> [!success]- Answer
>> b) Amazon Connect

> [!question] AWS 계정이 없는 고객이 거의 모든 AWS 서비스의 비용을 추정할 수 있게 해 주는 도구는 무엇인가?
> a) Cost Explorer
> b) TCO Calculator
> c) AWS Budgets
> d) AWS Pricing Calculator
>> [!success]- Answer
>> d) AWS Pricing Calculator

> [!question] 인바운드 인터넷 액세스를 활성화하려면 VPC에 어떤 구성 요소를 연결해야 하는가?
> a) NAT 게이트웨이
> b) VPC 엔드포인트
> c) VPN 연결
> d) 인터넷 게이트웨이
>> [!success]- Answer
>> d) 인터넷 게이트웨이

> [!question] 1년 동안 온라인 상태를 유지해야 하는 데이터베이스 서버에 대해 Amazon Elastic Compute Cloud(Amazon EC2) 비용을 최대로 절감할 수 있는 요금 모델은 무엇인가?
> a) 스팟 인스턴스
> b) 온디맨드 인스턴스
> c) 부분 선결제 예약 인스턴스
> d) 선결제 없음 예약 인스턴스
>> [!success]- Answer
>> c) 부분 선결제 예약 인스턴스

> [!question] 한 회사가 단일 Amazon EC2 인스턴스에서 MySQL 데이터베이스를 실행하고 있다. 이 회사는 이제 중단 발생 시 더 높은 가용성을 요구한다. 다음 중 이 요구 사항을 충족하는 작업 집합은 무엇인가?
> a) EC2 인스턴스 앞에 Application Load Balancer를 추가한다
> b) 인스턴스를 다른 가용 영역으로 이동하도록 EC2 Auto Recovery를 구성한다
> c) Amazon RDS로 마이그레이션하고 다중 AZ를 활성화한다
> d) 중단을 방지하기 위해 EC2 인스턴스에 종료 방지를 활성화한다
>> [!success]- Answer
>> c) Amazon RDS로 마이그레이션하고 다중 AZ를 활성화한다

> [!question] 한 회사가 AWS Management Console 사용자가 암호 복잡성 요구 사항을 충족하도록 보장하려고 한다. 이 회사는 어떻게 암호 복잡성을 구성할 수 있는가?
> a) AWS IAM 사용자 정책 사용
> b) AWS Organizations 서비스 제어 정책(SCP) 사용
> c) AWS IAM 계정 암호 정책 사용
> d) AWS Security Hub 관리형 인사이트 사용
>> [!success]- Answer
>> c) AWS IAM 계정 암호 정책 사용

> [!question] AWS 공동 책임 모델에서 다음 중 고객의 책임에 해당하는 것은 무엇인가?
> a) 게스트 OS 및 애플리케이션 패치 적용
> b) 인프라의 결함 패치 적용 및 수정
> c) 물리적 및 환경적 제어
> d) AWS 인프라 디바이스의 구성
>> [!success]- Answer
>> a) 게스트 OS 및 애플리케이션 패치 적용

> [!question] 다음 중 AWS에 PCI 규정을 준수하는 워크로드를 배포하는 데 필요한 작업은 무엇인가?
> a) 임의의 AWS 서비스를 사용하고 애플리케이션 계층에서 PCI 제어를 구현한다
> b) PCI 규정 준수 범위에 포함된 AWS 서비스를 사용하고 애플리케이션 계층에서 PCI 규정 준수를 활성화하도록 AWS 지원 티켓을 제기한다
> c) 임의의 AWS 서비스를 사용하고 해당 서비스에서 PCI 규정 준수를 활성화하도록 AWS 지원 티켓을 제기한다
> d) PCI 규정 준수 범위에 포함된 AWS 서비스를 사용하고 애플리케이션 계층에 PCI 제어를 적용한다
>> [!success]- Answer
>> d) PCI 규정 준수 범위에 포함된 AWS 서비스를 사용하고 애플리케이션 계층에 PCI 제어를 적용한다

> [!question] 한 회사가 애플리케이션 구성 요소 간에 메시지를 보내고, 저장하고, 수신하는 기능이 필요한 애플리케이션을 구축하고 있다. 이 회사는 메시지를 선입선출(FIFO) 순서로 처리해야 한다는 또 다른 요구 사항이 있다. 이 회사는 어떤 AWS 서비스를 사용해야 하는가?
> a) AWS Step Functions
> b) Amazon Simple Notification Service(Amazon SNS)
> c) Amazon Kinesis Data Streams
> d) Amazon Simple Queue Service(Amazon SQS)
>> [!success]- Answer
>> d) Amazon Simple Queue Service(Amazon SQS)

> [!question] AnyCompany가 최근 Example Corp.를 인수했다. 두 회사 모두 AWS 리소스를 사용하고 있으며, AnyCompany는 단일 통합 청구서를 원한다. 다음 중 AnyCompany가 단일 청구서를 받을 수 있게 해 주는 옵션은 무엇인가?
> a) Example Corp.는 계정을 연결하고 결제를 통합하기 위해 자사의 AWS 솔루션스 아키텍트 또는 AWS 기술 계정 관리자에게 요청을 제출해야 한다.
> b) AnyCompany는 두 청구서를 통합해 달라고 요청하는 새 지원 사례를 AWS Support Center에 생성해야 한다.
> c) AnyCompany의 AWS Organizations 마스터 계정에서 Example Corp.로 조직 가입 초대를 보낸다.
> d) Example Corp.의 VPC, Amazon EC2 인스턴스 및 기타 리소스를 AnyCompany AWS 계정으로 마이그레이션한다.
>> [!success]- Answer
>> c) AnyCompany의 AWS Organizations 마스터 계정에서 Example Corp.로 조직 가입 초대를 보낸다.

> [!question] AWS 서비스의 실제 비용 또는 예측 비용이 특정 임계값을 초과할 때 경보를 생성하는 데 사용할 수 있는 도구는 무엇인가?
> a) Cost Explorer
> b) AWS Budgets
> c) AWS Cost and Usage Report
> d) AWS CloudTrail
>> [!success]- Answer
>> b) AWS Budgets

> [!question] 한 사용자가 AWS 서비스에 대한 지식이 제한적이지만, 확장 가능한 Node.js 애플리케이션을 AWS 클라우드에 신속하게 배포하려고 한다. 애플리케이션을 배포하는 데 어떤 서비스를 사용해야 하는가?
> a) AWS CloudFormation
> b) AWS Elastic Beanstalk
> c) Amazon EC2
> d) AWS OpsWorks
>> [!success]- Answer
>> b) AWS Elastic Beanstalk

> [!question] 모든 AWS 사용자가 이용할 수 있는 AWS Trusted Advisor 검사는 무엇인가?
> a) 핵심 검사
> b) 모든 검사
> c) 비용 최적화 검사
> d) 내결함성 검사
>> [!success]- Answer
>> a) 핵심 검사

> [!question] 한 웹 개발자가 DDoS 공격이 애플리케이션을 표적으로 삼을 수 있다고 우려하고 있다. 다음 중 그러한 공격으로부터 보호하는 데 도움이 되는 AWS 서비스 또는 기능은 무엇인가? (2개 선택)
> a) AWS Shield
> b) AWS CloudTrail
> c) Amazon CloudFront
> d) AWS Support Center
> e) AWS Service Health Dashboard
>> [!success]- Answer
>> a) AWS Shield
>> c) Amazon CloudFront

> [!question] 사용자에게 AWS 규정 준수 제어 보고서에 대한 온디맨드 셀프 서비스 액세스를 제공하는 AWS 서비스는 무엇인가?
> a) AWS Config
> b) Amazon GuardDuty
> c) AWS Trusted Advisor
> d) AWS Artifact
>> [!success]- Answer
>> d) AWS Artifact

> [!question] 한 회사가 직원 중 한 명에게 Amazon RDS에 대한 액세스를 제공하려고 한다. 또한 이 회사는 상호 작용을 AWS CLI와 AWS 소프트웨어 개발 키트(SDK)로만 제한하려고 한다. 최소 권한의 원칙을 따르면서 이러한 요구 사항을 충족하기 위해 이 회사가 취해야 할 작업의 조합은 무엇인가? (2개 선택)
> a) IAM 사용자를 생성하고 AWS Management Console 액세스만 제공한다.
> b) IAM 사용자를 생성하고 프로그래밍 방식 액세스만 제공한다.
> c) IAM 역할을 생성하고 AWS Management Console 액세스만 제공한다.
> d) 관리자 액세스 권한이 있는 IAM 정책을 생성하여 IAM 사용자에게 연결한다.
> e) Amazon RDS 액세스 권한이 있는 IAM 정책을 생성하여 IAM 사용자에게 연결한다.
>> [!success]- Answer
>> b) IAM 사용자를 생성하고 프로그래밍 방식 액세스만 제공한다.
>> e) Amazon RDS 액세스 권한이 있는 IAM 정책을 생성하여 IAM 사용자에게 연결한다.

> [!question] 한 회사에 구성 변경 사항을 기록 및 평가하고 AWS 리소스에 대해 수정 작업을 수행해야 하는 규정 준수 요구 사항이 있다. 이 회사는 어떤 AWS 서비스를 사용해야 하는가?
> a) AWS Config
> b) AWS Secrets Manager
> c) AWS CloudTrail
> d) AWS Trusted Advisor
>> [!success]- Answer
>> a) AWS Config

> [!question] 여러 가용 영역에 Amazon EC2 인스턴스로 애플리케이션을 배포하는 것의 이점은 무엇인가? (2개 선택)
> a) 단일 장애 지점 방지
> b) 애플리케이션의 운영 비용 절감
> c) 애플리케이션이 리전 간 사용자에게 짧은 지연 시간으로 서비스를 제공할 수 있게 함
> d) 애플리케이션의 가용성 증가
> e) 애플리케이션의 부하 증가
>> [!success]- Answer
>> a) 단일 장애 지점 방지
>> d) 애플리케이션의 가용성 증가

> [!question] AWS의 한 워크로드가 일정한 수의 Amazon EC2 인스턴스를 사용하여 당분간 계속 실행될 예정이다. 컴퓨팅 리소스를 계속 사용할 수 있게 보장하면서 비용을 최소화하는 요금 모델은 무엇인가?
> a) 전용 호스트
> b) 온디맨드 인스턴스
> c) 스팟 인스턴스
> d) 예약 인스턴스
>> [!success]- Answer
>> d) 예약 인스턴스

> [!question] AWS 인프라에 예정된 변경 사항을 식별하는 데 사용할 수 있는 도구는 무엇인가?
> a) AWS Personal Health Dashboard
> b) AWS Trusted Advisor
> c) Billing Dashboard
> d) AWS Config
>> [!success]- Answer
>> a) AWS Personal Health Dashboard

> [!question] 다음 중 Amazon RDS를 사용할 때 고객의 책임에 해당하는 것은 무엇인가?
> a) 기본 하드웨어의 운영 체제 패치 적용
> b) 보안 그룹을 통해 데이터베이스로 들어오고 나가는 트래픽 제어
> c) DB 인스턴스의 특정 시점 복구를 가능하게 하는 백업 실행
> d) 장애가 발생한 DB 인스턴스 교체
>> [!success]- Answer
>> b) 보안 그룹을 통해 데이터베이스로 들어오고 나가는 트래픽 제어

> [!question] AWS Lambda를 사용할 때 고객의 책임은 무엇인가?
> a) 운영 체제 구성
> b) 애플리케이션 관리
> c) 플랫폼 관리
> d) 코드 암호화
>> [!success]- Answer
>> b) 애플리케이션 관리

> [!question] 한 회사가 AWS 클라우드 비용 또는 사용량이 정의된 임계값을 초과할 때 알림을 받으려고 한다. 이러한 요구 사항을 지원하는 AWS 서비스는 무엇인가?
> a) AWS Budgets
> b) Cost Explorer
> c) AWS CloudTrail
> d) Amazon Macie
>> [!success]- Answer
>> a) AWS Budgets

> [!question] AWS 클라우드에서 NoSQL 데이터베이스를 호스팅하는 기능을 제공하는 AWS 서비스는 무엇인가?
> a) Amazon Aurora
> b) Amazon DynamoDB
> c) Amazon RDS
> d) Amazon Redshift
>> [!success]- Answer
>> b) Amazon DynamoDB

> [!question] 고객이 사용되지 않는 Amazon EC2 용량을 종종 할인된 요금으로 구매할 수 있게 해 주는 AWS 서비스는 무엇인가?
> a) 예약 인스턴스
> b) 온디맨드 인스턴스
> c) 전용 인스턴스
> d) 스팟 인스턴스
>> [!success]- Answer
>> d) 스팟 인스턴스

> [!question] 구현하는 데 인터넷 서비스 공급자(ISP)와 코로케이션 시설이 필요한 AWS 서비스 또는 기능은 무엇인가?
> a) AWS VPN
> b) Amazon Connect
> c) AWS Direct Connect
> d) 인터넷 게이트웨이
>> [!success]- Answer
>> c) AWS Direct Connect

> [!question] 컴퓨팅 기능을 제공하는 AWS 서비스는 무엇인가? (2개 선택)
> a) Amazon EC2
> b) Amazon S3
> c) Amazon Elastic Block Store(Amazon EBS)
> d) Amazon Cognito
> e) AWS Lambda
>> [!success]- Answer
>> a) Amazon EC2
>> e) AWS Lambda

> [!question] 소스 코드의 버전을 비공개로 저장하고 관리하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS CodeBuild
> b) AWS CodeCommit
> c) AWS CodePipeline
> d) AWS CodeStar
>> [!success]- Answer
>> b) AWS CodeCommit

> [!question] 클라우드 실무자가 AWS 계정의 보안 취약점을 식별하기 위해 사용해야 하는 AWS 서비스는 무엇인가?
> a) AWS Secrets Manager
> b) Amazon Cognito
> c) Amazon Macie
> d) AWS Trusted Advisor
>> [!success]- Answer
>> d) AWS Trusted Advisor

> [!question] 한 회사가 환경적 중단이 발생할 경우에 대비하여 내결함성과 비즈니스 연속성을 갖추도록 인프라를 설계하려고 한다. 이 회사는 어떤 AWS 인프라 구성 요소에 걸쳐 복제해야 하는가?
> a) 엣지 로케이션
> b) 가용 영역
> c) 리전
> d) Amazon Route 53
>> [!success]- Answer
>> b) 가용 영역

> [!question] 분산 애플리케이션에서 문자 메시지와 이메일 메시지를 모두 전송하는 데 사용되는 AWS 서비스 또는 기능은 무엇인가?
> a) Amazon Simple Notification Service(Amazon SNS)
> b) Amazon Simple Email Service(Amazon SES)
> c) Amazon CloudWatch 경보
> d) Amazon Simple Queue Service(Amazon SQS)
>> [!success]- Answer
>> a) Amazon Simple Notification Service(Amazon SNS)

> [!question] 안정성을 높이는 데 도움이 되는 AWS 클라우드 설계 원칙은 무엇인가? (2개 선택)
> a) 모놀리식 아키텍처 사용
> b) 전반적인 효율성 측정
> c) 복구 절차 테스트
> d) 소비 모델 채택
> e) 장애로부터 자동으로 복구
>> [!success]- Answer
>> c) 복구 절차 테스트
>> e) 장애로부터 자동으로 복구

> [!question] 한 회사가 전 세계 사용자 기반을 대상으로 단일 AWS 리전에서 전자상거래 사이트를 시작할 계획이다. 이 회사가 사용자에게 도달하고 짧은 지연 시간과 빠른 전송 속도를 제공할 수 있게 해 주는 AWS 서비스는 무엇인가? (2개 선택)
> a) Application Load Balancer
> b) AWS Global Accelerator
> c) AWS Direct Connect
> d) Amazon CloudFront
> e) AWS Lambda
>> [!success]- Answer
>> b) AWS Global Accelerator
>> d) Amazon CloudFront

> [!question] 한 회사가 원격 사무실에서 사설의 짧은 지연 시간 연결을 통해 AWS에 연결하려고 한다. 이러한 요구 사항을 충족하기 위해 권장되는 방법은 무엇인가?
> a) VPN 터널을 생성한다
> b) 퍼블릭 인터넷을 통해 연결한다
> c) VPC 피어링을 사용하여 연결을 생성한다.
> d) AWS Direct Connect를 사용한다.
>> [!success]- Answer
>> d) AWS Direct Connect를 사용한다.

> [!question] 규정 준수 보고서를 온디맨드로 검색하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS Secrets Manager
> b) AWS Artifact
> c) AWS Security Hub
> d) AWS Certificate Manager
>> [!success]- Answer
>> b) AWS Artifact

> [!question] 한 회사가 Application Load Balancer 뒤에 위치한 AWS 호스팅 웹 사이트를 보유하고 있다. 이 회사는 SQL 인젝션 또는 크로스 사이트 스크립팅으로부터 웹 사이트를 보호하려고 한다. 이 회사는 어떤 AWS 서비스를 사용해야 하는가?
> a) Amazon GuardDuty
> b) AWS WAF
> c) AWS Trusted Advisor
> d) Amazon Inspector
>> [!success]- Answer
>> b) AWS WAF

> [!question] AWS 클라우드에서 고가용성을 보장하려면 웹 애플리케이션을 어떻게 배포해야 하는가?
> a) 애플리케이션의 여러 인스턴스를 여러 가용 영역에 배포한다.
> b) 애플리케이션의 여러 인스턴스를 단일 가용 영역에 배포한다.
> c) 애플리케이션을 단일 가용 영역의 컴퓨팅 최적화 Amazon EC2 인스턴스에 배포한다.
> d) 애플리케이션을 Auto Scaling 그룹의 Amazon EC2 인스턴스 한 개에 배포한다.
>> [!success]- Answer
>> a) 애플리케이션의 여러 인스턴스를 여러 가용 영역에 배포한다.

> [!question] 한 회사가 정상 상태 데이터베이스를 위해 Amazon EC2에서 직접 자체 관리형 Oracle 데이터베이스를 실행하고 있다. 이 회사는 컴퓨팅 비용을 절감하려고 한다. 3년 기간에 걸쳐 절감액을 최대화하기 위해 이 회사가 사용해야 하는 옵션은 무엇인가?
> a) EC2 전용 인스턴스
> b) EC2 스팟 인스턴스
> c) EC2 예약 인스턴스
> d) EC2 온디맨드 인스턴스
>> [!success]- Answer
>> c) EC2 예약 인스턴스

> [!question] 한 외부 감사자가 사용자의 자격 증명 및 액세스 키 상태를 포함하여 회사의 모든 IAM 사용자 목록을 제공해 달라고 요청했다. 이 정보를 제공하는 가장 간단한 방법은 무엇인가?
> a) 감사자를 위한 IAM 사용자 계정을 생성하고 감사자에게 관리자 권한을 부여한다.
> b) AWS Management Console에서 각 사용자 페이지의 스크린샷을 찍은 다음 감사자에게 스크린샷을 제공한다.
> c) IAM 자격 증명 보고서를 다운로드한 다음 감사자에게 보고서를 제공한다.
> d) AWS Trusted Advisor 보고서를 다운로드한 다음 감사자에게 보고서를 제공한다.
>> [!success]- Answer
>> c) IAM 자격 증명 보고서를 다운로드한 다음 감사자에게 보고서를 제공한다.

> [!question] AWS 클라우드 서비스에 대한 통합 결제의 이점은 무엇인가? (2개 선택)
> a) 볼륨 할인
> b) 사용에 대한 최소한의 추가 요금
> c) 여러 계정에 대한 하나의 청구서
> d) 할부 결제 옵션
> e) 사용자 지정 비용 및 사용량 예산 생성
>> [!success]- Answer
>> a) 볼륨 할인
>> c) 여러 계정에 대한 하나의 청구서

> [!question] 한 회사가 자사 애플리케이션에 대한 단기적인 인터넷 트래픽 급증을 예상하고 있다. 트래픽이 증가하는 동안 애플리케이션이 중단되어서는 안 된다. 또한 이 회사는 비용을 최소화하고 유연성을 최대화해야 한다. 이러한 요구 사항을 충족하기 위해 이 회사가 사용해야 하는 Amazon EC2 인스턴스 유형은 무엇인가?
> a) 온디맨드 인스턴스
> b) 스팟 인스턴스
> c) 예약 인스턴스
> d) 전용 호스트
>> [!success]- Answer
>> a) 온디맨드 인스턴스

> [!question] 한 회사가 규정 준수를 이유로 AWS 리소스 구성 변경 사항을 추적하려고 한다. 이 요구 사항을 충족하는 데 사용할 수 있는 AWS 기능은 무엇인가?
> a) AWS Cost and Usage Report
> b) AWS Organizations 서비스 제어 정책(SCP)
> c) AWS Config 규칙
> d) VPC 흐름 로그
>> [!success]- Answer
>> c) AWS Config 규칙

> [!question] 한 회사가 최소한의 지연 시간으로 전 세계에 이미지와 비디오를 전송해야 하는 애플리케이션을 구축하고 있다. 이 회사가 비용 효율적인 방식으로 이를 달성하는 데 사용할 수 있는 접근 방식은 무엇인가?
> a) Amazon CloudFront를 통해 콘텐츠를 전송한다.
> b) 콘텐츠를 Amazon S3에 저장하고 S3 교차 리전 복제를 활성화한다.
> c) 여러 AWS 리전에 걸쳐 VPN을 구현한다.
> d) AWS PrivateLink를 통해 콘텐츠를 전송한다.
>> [!success]- Answer
>> a) Amazon CloudFront를 통해 콘텐츠를 전송한다.

> [!question] 최소 권한을 부여하기 위한 AWS IAM 모범 사례는 다음과 같다:
> a) IAM 그룹에 IAM 정책을 적용하고 그룹의 크기를 제한한다.
> b) 모든 IAM 사용자에게 다중 인증(MFA)을 요구한다.
> c) 서로 다른 권한을 가진 각 IAM 사용자에게 여러 개의 암호를 요구한다.
> d) 필요한 IAM 사용자에게만 IAM 정책을 적용한다.
>> [!success]- Answer
>> d) 필요한 IAM 사용자에게만 IAM 정책을 적용한다.

> [!question] AWS가 대량 구매의 결과로 더 낮은 변동 비용을 제공할 수 있는 능력으로 보여 주는 클라우드 컴퓨팅의 이점은 무엇인가?
> a) 종량제 요금
> b) 고가용성
> c) 글로벌 도달 범위
> d) 규모의 경제
>> [!success]- Answer
>> d) 규모의 경제

> [!question] 한 제약 회사가 단일 AWS 리전에서 인프라를 운영하고 있다. 이 회사는 여러 AWS 계정에 수천 개의 VPC를 보유하고 있으며 이들을 상호 연결하려고 한다. 관리를 단순화하고 운영 비용을 절감하는 데 도움이 되도록 이 회사가 사용해야 하는 AWS 서비스 또는 기능은 무엇인가?
> a) VPC 엔드포인트
> b) AWS Direct Connect
> c) AWS Transit Gateway
> d) VPC 피어링
>> [!success]- Answer
>> c) AWS Transit Gateway

> [!question] 애플리케이션의 사용량이 예측할 수 없게 변할 때 AWS는 어떻게 회사가 비용을 통제할 수 있게 해 주는가?
> a) 고객이 더 큰 서버로 이동하면 AWS가 비용 차액을 환불해 준다.
> b) 리소스가 필요할 때 자동으로 확장 또는 축소되도록 애플리케이션을 구축할 수 있다
> c) 가격이 온디맨드 인스턴스보다 낮으면 스팟 인스턴스가 자동으로 사용된다.
> d) Amazon CloudWatch가 필요한 리소스를 자동으로 예측한다.
>> [!success]- Answer
>> b) 리소스가 필요할 때 자동으로 확장 또는 축소되도록 애플리케이션을 구축할 수 있다

> [!question] SQL 인젝션 공격을 방지하는 데 사용할 수 있는 AWS 서비스 또는 기능은 무엇인가?
> a) 보안 그룹
> b) 네트워크 ACL
> c) AWS WAF
> d) IAM 정책
>> [!success]- Answer
>> c) AWS WAF
