---
title: "모의고사 16회"
lang: ko
exam: 16
---

<!--
  practice-exam-16.md 의 한국어판.
  문항은 **순서**로, 보기는 **글머리(a/b/c)** 로 원문과 짝지어진다.
  순서를 바꾸거나 문항을 빼면 원문과 어긋나므로 그대로 두세요.
  정답 블록은 파서가 문항을 인식하기 위해 필요하며, 실제 채점은 원문 기준입니다.

  문체는 **실제 시험 한국어판의 번역투**를 그대로 흉내 냅니다.
  ("~은 무엇인가?", "다음 중 ~", 서비스명은 영문 유지, 자연스러운 의역은 하지 않음)
-->

> [!question] AWS 클라우드로의 마이그레이션에 대한 비용 편익 분석을 수행하는 데 도움이 되는 것은 무엇인가?
> a) Cost Explorer
> b) Migration Evaluator
> c) AWS Cost and Usage Report
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) Migration Evaluator

> [!question] 다음 중 AWS 계정 간에 예약 인스턴스의 비용 이점을 공유할 수 있는 기능을 제공하는 것은 무엇인가?
> a) AWS 계정 간의 AWS Cost Explorer
> b) 연결된 계정 및 통합 결제
> c) Amazon Elastic Compute Cloud(Amazon EC2) 예약 인스턴스 사용률 보고서
> d) AWS 계정 간의 Amazon EC2 인스턴스 사용량 보고서
>> [!success]- Answer
>> b) 연결된 계정 및 통합 결제

> [!question] 한 회사가 여러 AWS 계정을 보유하고 있으며 결제 프로세스를 단순화하고 통합하려고 한다. 이를 달성할 AWS 서비스는 무엇인가?
> a) AWS Cost and Usage Reports
> b) AWS Organizations
> c) AWS Cost Explorer
> d) AWS Budgets
>> [!success]- Answer
>> b) AWS Organizations

> [!question] 한 회사가 전 세계에 분산된 최종 사용자에게 서비스를 제공하는 단일 AWS 리전에서 호스팅되는 애플리케이션을 설계하고 있다. 이 회사는 최종 사용자에게 애플리케이션 데이터에 대한 짧은 지연 시간의 액세스를 제공하려고 한다. 다음 중 이 요구 사항을 충족하는 데 도움이 되는 서비스는 무엇인가?
> a) Amazon CloudFront
> b) AWS Direct Connect
> c) Amazon Route 53 글로벌 DNS
> d) Amazon Simple Storage Service(Amazon S3) 전송 가속화
>> [!success]- Answer
>> a) Amazon CloudFront

> [!question] 다음 중 고객이 자본 IT 지출을 운영 지출로 완전히 전환할 수 있게 해 주는 배포 모델은 무엇인가?
> a) 온프레미스
> b) 하이브리드
> c) 클라우드
> d) 서비스형 플랫폼
>> [!success]- Answer
>> c) 클라우드

> [!question] AWS에서의 자산 관리가 물리적 데이터 센터에서의 자산 관리보다 쉬운 이유는 무엇인가?
> a) AWS는 사용자가 유지 관리할 수 있는 구성 관리 데이터베이스를 제공한다.
> b) AWS가 고객을 대신하여 인프라 검색 스캔을 수행한다.
> c) Amazon EC2가 자동으로 자산 보고서를 생성하여 고객이 지정한 Amazon S3 버킷에 배치한다.
> d) 사용자가 몇 번의 API 호출로 자산 메타데이터를 안정적으로 수집할 수 있다.
>> [!success]- Answer
>> d) 사용자가 몇 번의 API 호출로 자산 메타데이터를 안정적으로 수집할 수 있다.
>> 정정 — 원문 정답은 `b`였습니다. AWS는 고객을 대신하여 인프라 검색 스캔을 수행하지 않습니다.

> [!question] 전역적으로 중복된 데이터베이스를 생성하는 데 도움이 되는 Amazon RDS의 기능은 무엇인가?
> a) 스냅샷
> b) 자동 패치 및 업데이트
> c) 교차 리전 읽기 전용 복제본
> d) 프로비저닝된 IOPS
>> [!success]- Answer
>> c) 교차 리전 읽기 전용 복제본

> [!question] AWS Identity and Access Management(IAM)을 사용하여 작업을 수행하는 데 필요한 리소스에만 액세스 권한을 부여하는 것은 다음 중 어떤 개념으로 알려져 있는가?
> a) 제한된 액세스.
> b) 필요 시 액세스.
> c) 최소 권한 액세스.
> d) 토큰 액세스.
>> [!success]- Answer
>> c) 최소 권한 액세스.

> [!question] 부서별로 AWS 비용을 식별하는 데 사용할 수 있는 방법은 무엇인가? (2개 선택)
> a) AWS 계정 루트 사용자에 대해 다중 인증을 활성화한다.
> b) 각 부서별로 별도의 계정을 생성한다.
> c) 가능한 경우 언제나 예약 인스턴스를 사용한다.
> d) 태그를 사용하여 각 인스턴스를 특정 부서와 연결한다.
> e) 구매 주문서를 사용하여 청구서를 결제한다.
>> [!success]- Answer
>> b) 각 부서별로 별도의 계정을 생성한다.
>> d) 태그를 사용하여 각 인스턴스를 특정 부서와 연결한다.

> [!question] AWS 공동 책임 모델에서 고객의 책임에 포함되는 것은 다음 중 무엇인가?
> a) 모든 제품과 서비스를 실행하는 하드웨어, 소프트웨어, 시설 및 네트워크 보안 유지.
> b) NDA에 따라 인증서, 보고서 및 기타 문서를 AWS 고객에게 직접 제공.
> c) 운영 체제, 네트워크 및 방화벽 구성.
> d) 업계 인증 및 독립적인 제3자 증명 획득.
>> [!success]- Answer
>> c) 운영 체제, 네트워크 및 방화벽 구성.

> [!question] AWS 보안 모범 사례에 대한 실시간 지침을 제공하는 관리형 AWS 서비스는 무엇인가?
> a) AWS X-Ray
> b) AWS Trusted Advisor
> c) Amazon CloudWatch
> d) AWS Systems Manager
>> [!success]- Answer
>> b) AWS Trusted Advisor

> [!question] 워크로드의 변화하는 수요를 처리하기 위해 Amazon EC2 인스턴스에 탄력성을 추가하는 기능은 무엇인가?
> a) 리소스 그룹
> b) 수명 주기 정책
> c) Application Load Balancer
> d) Amazon EC2 Auto Scaling
>> [!success]- Answer
>> d) Amazon EC2 Auto Scaling

> [!question] AWS 공동 책임 모델에서 고객은 클라우드 내 보안의 어떤 측면에 대해 책임을 지는가? (2개 선택)
> a) 가상화 관리
> b) 하드웨어 관리
> c) 암호화 관리
> d) 시설 관리
> e) 방화벽 관리
>> [!success]- Answer
>> c) 암호화 관리
>> e) 방화벽 관리

> [!question] 온프레미스 애플리케이션이 표준 파일 스토리지 프로토콜을 통해 AWS 클라우드 스토리지를 원활하게 사용할 수 있게 해 주는 AWS 하이브리드 스토리지 서비스는 무엇인가?
> a) AWS Direct Connect
> b) AWS Snowball
> c) AWS Storage Gateway
> d) AWS Snowball Edge
>> [!success]- Answer
>> c) AWS Storage Gateway

> [!question] 공동 책임 모델에서 AWS의 책임에 해당하는 것은 무엇인가?
> a) 취약한 포트로의 트래픽을 차단하도록 네트워크 ACL을 업데이트하는 것.
> b) Amazon EC2 인스턴스에서 실행되는 운영 체제를 패치하는 것.
> c) 기반 EC2 호스트의 펌웨어를 업데이트하는 것.
> d) 취약한 포트로의 트래픽을 차단하도록 보안 그룹 규칙을 업데이트하는 것.
>> [!success]- Answer
>> c) 기반 EC2 호스트의 펌웨어를 업데이트하는 것.

> [!question] Amazon Relational Database Service(Amazon RDS) 인스턴스를 다중 가용 영역 모드로 배포할 때 사용되는 아키텍처 원칙은 무엇인가?
> a) 느슨한 결합을 구현한다.
> b) 장애를 고려하여 설계한다.
> c) 자동화할 수 있는 모든 것을 자동화한다.
> d) 서버가 아닌 서비스를 사용한다.
>> [!success]- Answer
>> b) 장애를 고려하여 설계한다.

> [!question] AWS IAM 사용자에게 최소 권한을 부여한다는 것은 무엇을 의미하는가?
> a) 단일 사용자에게만 권한을 부여하는 것이다.
> b) AWS IAM 정책만 사용하여 권한을 부여하는 것이다.
> c) 신뢰할 수 있는 사용자에게 AdministratorAccess 정책 권한을 부여하는 것이다.
> d) 주어진 작업을 수행하는 데 필요한 권한만 부여하는 것이다.
>> [!success]- Answer
>> d) 주어진 작업을 수행하는 데 필요한 권한만 부여하는 것이다.

> [!question] 클라우드 아키텍처 설계 원칙으로서 느슨한 결합의 이점은 무엇인가?
> a) 짧은 지연 시간의 요청 처리를 용이하게 한다.
> b) 애플리케이션이 종속적인 워크플로를 갖도록 해 준다.
> c) 서로 다른 구성 요소 간의 연쇄적 장애를 방지한다.
> d) 회사가 물리적 데이터 센터 운영에 집중할 수 있게 해 준다.
>> [!success]- Answer
>> c) 서로 다른 구성 요소 간의 연쇄적 장애를 방지한다.

> [!question] 한 이사가 하이브리드 클라우드 아키텍처를 조사하는 업무를 맡았다. 이 회사는 현재 퍼블릭 인터넷을 통해 AWS에 액세스하고 있다. 프라이빗 하이브리드 연결을 용이하게 하는 서비스는 무엇인가?
> a) Amazon Virtual Private Cloud(Amazon VPC) NAT 게이트웨이
> b) AWS Direct Connect
> c) Amazon Simple Storage Service(Amazon S3) 전송 가속화
> d) AWS Web Application Firewall(AWS WAF)
>> [!success]- Answer
>> b) AWS Direct Connect

> [!question] 한 회사의 웹 애플리케이션은 현재 기반 구성 요소에 대한 강한 종속성을 가지고 있어, 한 구성 요소에 장애가 발생하면 전체 웹 애플리케이션에 장애가 발생한다. 다음 중 어떤 AWS 클라우드 설계 원칙을 적용하면 현재의 설계 문제를 해결할 수 있는가?
> a) 탄력성을 구현하여 수요 변화에 따라 애플리케이션을 확장하거나 축소할 수 있게 한다.
> b) 여러 EC2 인스턴스를 병렬로 실행하여 더 나은 성능을 달성한다.
> c) 구성 요소를 격리하고 다른 구성 요소에 장애가 발생해도 개별 구성 요소가 작동할 수 있도록 보장하여 구성 요소의 분리에 집중한다.
> d) EC2 컴퓨팅 리소스를 두 배로 늘려 시스템 내결함성을 높인다.
>> [!success]- Answer
>> c) 구성 요소를 격리하고 다른 구성 요소에 장애가 발생해도 개별 구성 요소가 작동할 수 있도록 보장하여 구성 요소의 분리에 집중한다.

> [!question] 고객이 AWS 계정 로그온에 대한 보안을 강화하려면 어떻게 해야 하는가? (2개 선택)
> a) AWS Certificate Manager를 구성한다
> b) 다중 인증(MFA)을 활성화한다
> c) Amazon Cognito를 사용하여 액세스를 관리한다
> d) 강력한 암호 정책을 구성한다
> e) AWS Organizations를 활성화한다
>> [!success]- Answer
>> b) 다중 인증(MFA)을 활성화한다
>> d) 강력한 암호 정책을 구성한다

> [!question] 여러 계정에 걸쳐 AWS 액세스를 중앙에서 관리하는 데 사용할 AWS 서비스는 무엇인가?
> a) AWS Service Catalog
> b) AWS Config
> c) AWS Trusted Advisor
> d) AWS Organizations
>> [!success]- Answer
>> d) AWS Organizations

> [!question] 계정이 특정 금액에 근접할 때 알림을 설정하기 위해 고객이 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS Cost and Usage Reports
> b) AWS Budgets
> c) AWS Cost Explorer
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Budgets

> [!question] 사용자가 AWS Artifact에서 액세스할 수 있는 것은 무엇인가?
> a) AWS 보안 및 규정 준수 문서
> b) 모든 AWS 리소스에 대한 구성 관리 세부 정보 다운로드
> c) AWS 서비스에 대한 교육 자료
> d) AWS 클라우드에 배포된 애플리케이션의 보안 평가
>> [!success]- Answer
>> a) AWS 보안 및 규정 준수 문서

> [!question] 기술 계정 관리자를 제공하는 최소 AWS Support 플랜은 무엇인가?
> a) Enterprise
> b) Business
> c) Developer
> d) Basic
>> [!success]- Answer
>> a) Enterprise

> [!question] 다음 중 신뢰성과 관련된 AWS Well-Architected Framework 설계 원칙은 무엇인가?
> a) 단일 가용 영역에 배포
> b) 장애로부터 복구할 수 있는 능력
> c) 비용 최적화를 고려한 설계
> d) 코드로서 운영 수행
>> [!success]- Answer
>> b) 장애로부터 복구할 수 있는 능력

> [!question] 인스턴스가 중지되거나 종료될 때 삭제되는 임시 AWS 스토리지 유형은 무엇인가?
> a) Amazon EBS
> b) Amazon EC2 인스턴스 스토어
> c) Amazon EFS
> d) Amazon S3
>> [!success]- Answer
>> b) Amazon EC2 인스턴스 스토어

> [!question] 기존 온프레미스 솔루션 대비 AWS 클라우드를 사용하는 것의 이점은 무엇인가?
> a) 사용자가 향후 용량 요구 사항을 추측할 필요가 없다.
> b) 사용자가 기존 하드웨어 계약을 구매에 활용할 수 있다.
> c) 트래픽에 관계없이 사용자가 비용을 고정할 수 있다.
> d) 사용자가 AWS의 보고서를 사용하여 감사를 피할 수 있다.
>> [!success]- Answer
>> a) 사용자가 향후 용량 요구 사항을 추측할 필요가 없다.

> [!question] 다음 중 AWS 관리형 컴퓨팅 서비스는 무엇인가?
> a) Amazon SWF
> b) Amazon EC2
> c) AWS Lambda
> d) Amazon Aurora
>> [!success]- Answer
>> c) AWS Lambda

> [!question] 다음 중 클라우드 애플리케이션을 설계할 때 중요한 아키텍처 원칙은 무엇인가?
> a) 데이터와 백업을 동일한 리전에 저장한다.
> b) 긴밀하게 결합된 시스템 구성 요소를 설계한다.
> c) 멀티스레딩을 피한다.
> d) 장애를 고려하여 설계한다
>> [!success]- Answer
>> d) 장애를 고려하여 설계한다

> [!question] 개발자가 애플리케이션 코드에서 AWS 서비스에 액세스할 수 있게 해 주는 메커니즘은 무엇인가?
> a) AWS Software Development Kit
> b) AWS Management Console
> c) AWS CodePipeline
> d) AWS Config
>> [!success]- Answer
>> a) AWS Software Development Kit

> [!question] 1년에 한 번 24시간 동안 실행되는 중단 불가능한 워크로드에 가장 비용 효율적인 Amazon EC2 요금 모델은 무엇인가?
> a) 온디맨드 인스턴스
> b) 예약 인스턴스
> c) 스팟 인스턴스
> d) 전용 인스턴스
>> [!success]- Answer
>> a) 온디맨드 인스턴스

> [!question] 다음 중 필요에 따라 스토리지를 자동으로 확장하는 MySQL 호환 데이터베이스는 무엇인가?
> a) Amazon Elastic Compute Cloud(Amazon EC2)
> b) Amazon Relational Database Service(Amazon RDS) for MySQL
> c) Amazon Lightsail
> d) Amazon Aurora
>> [!success]- Answer
>> d) Amazon Aurora

> [!question] 사용자가 두 개의 VPC를 서로 연결할 수 있게 해 주는 Amazon Virtual Private Cloud(Amazon VPC) 기능은 무엇인가?
> a) Amazon VPC 엔드포인트
> b) Amazon Elastic Compute Cloud(Amazon EC2) ClassicLink
> c) Amazon VPC 피어링
> d) AWS Direct Connect
>> [!success]- Answer
>> c) Amazon VPC 피어링

> [!question] 주요 목적이 소프트웨어 버전 제어인 서비스는 무엇인가?
> a) Amazon CodeStar
> b) AWS Command Line Interface(AWS CLI)
> c) Amazon Cognito
> d) AWS CodeCommit
>> [!success]- Answer
>> d) AWS CodeCommit

> [!question] 한 회사가 애플리케이션을 AWS로 마이그레이션하는 것을 고려하고 있다. 이 회사는 온프레미스에서 워크로드를 실행하는 비용과 AWS 플랫폼에서 동등한 워크로드를 실행하는 비용을 비교하려고 한다. 이 비교를 수행하는 데 사용할 수 있는 도구는 무엇인가?
> a) AWS Cost and Usage Report
> b) Migration Evaluator
> c) AWS Billing and Cost Management 콘솔
> d) Cost Explorer
>> [!success]- Answer
>> b) Migration Evaluator

> [!question] 한 회사가 필요한 인프라 용량을 더 이상 추측할 필요가 없어졌고, 수요가 변할 때 규모를 확장하거나 축소할 수 있게 되었다. 이는 클라우드 컴퓨팅의 어떤 이점을 설명하는가?
> a) 용량 추정 불필요
> b) 몇 분 만에 전 세계 배포
> c) 자본 지출을 가변 비용으로 대체
> d) 거대한 규모의 경제로 얻는 이점
>> [!success]- Answer
>> a) 용량 추정 불필요

> [!question] 다음 중 AWS 요금 모델을 가장 잘 설명하는 것은 무엇인가? (2개 선택)
> a) 고정 기간
> b) 종량제
> c) 코로케이션
> d) 계획된 비용
> e) 변동 비용
>> [!success]- Answer
>> b) 종량제
>> e) 변동 비용

> [!question] Elastic Load Balancing(ELB)에서 사용할 수 있는 로드 밸런서 유형은 무엇인가? (2개 선택)
> a) AWS Application Auto Scaling 기능을 갖춘 퍼블릭 로드 밸런서
> b) F5 Big-IP 및 Citrix NetScaler 로드 밸런서
> c) Classic Load Balancer
> d) 퍼블릭 및 프라이빗 IP를 갖춘 교차 영역 로드 밸런서
> e) Application Load Balancer
>> [!success]- Answer
>> c) Classic Load Balancer
>> e) Application Load Balancer

> [!question] 회사가 기존 데이터 센터 대신 AWS를 선택해야 하는 이유는 무엇인가?
> a) AWS는 사용자에게 기반 리소스에 대한 완전한 제어 권한을 제공한다.
> b) AWS는 장기 계약을 요구하지 않으며 종량제 모델을 제공한다.
> c) AWS는 모든 국가에 엣지 로케이션을 제공하여 글로벌 도달 범위를 지원한다.
> d) AWS는 생성할 수 있는 리소스 수에 제한이 없다.
>> [!success]- Answer
>> b) AWS는 장기 계약을 요구하지 않으며 종량제 모델을 제공한다.

> [!question] 여러 AWS 리전의 사용자에게 자주 액세스되는 데이터에 대해 가장 빠른 애플리케이션 응답 시간을 제공하는 솔루션은 무엇인가?
> a) 여러 가용 영역에 걸친 AWS CloudTrail
> b) 엣지 로케이션으로의 Amazon CloudFront
> c) 여러 리전의 AWS CloudFormation
> d) AWS Direct Connect를 통한 가상 프라이빗 게이트웨이
>> [!success]- Answer
>> b) 엣지 로케이션으로의 Amazon CloudFront

> [!question] AWS 규정 준수 보고서에 대한 온디맨드 액세스를 위한 셀프 서비스 포털을 제공하는 AWS 서비스는 무엇인가?
> a) AWS Config
> b) AWS Certificate Manager
> c) Amazon Inspector
> d) AWS Artifact
>> [!success]- Answer
>> d) AWS Artifact

> [!question] 다음 중 자체 관리형 데이터베이스를 실행하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) Amazon Route 53
> b) AWS X-Ray
> c) AWS Snowmobile
> d) Amazon Elastic Compute Cloud(Amazon EC2)
>> [!success]- Answer
>> d) Amazon Elastic Compute Cloud(Amazon EC2)

> [!question] Enterprise Support를 사용하는 사용자에게 제공되는 독점적인 이점은 무엇인가?
> a) 기술 프로젝트 관리자에 대한 액세스
> b) 기술 계정 관리자에 대한 액세스
> c) 클라우드 지원 엔지니어에 대한 액세스
> d) 솔루션스 아키텍트에 대한 액세스
>> [!success]- Answer
>> b) 기술 계정 관리자에 대한 액세스

> [!question] 자연재해가 전체 지리적 영역에 영향을 미치는 경우 사용자가 AWS 서비스 중단으로부터 보호하려면 어떻게 해야 하는가?
> a) AWS 리전 내의 여러 가용 영역에 애플리케이션을 배포한다.
> b) 해당 지리적 영역 내에서 하이브리드 클라우드 컴퓨팅 배포 모델을 사용한다.
> c) 여러 AWS 리전에 애플리케이션을 배포한다.
> d) AWS Artifact를 사용하여 애플리케이션 아티팩트를 저장하고 여러 AWS 리전에 복제한다.
>> [!success]- Answer
>> c) 여러 AWS 리전에 애플리케이션을 배포한다.

> [!question] AWS는 성장하는 스타트업 회사의 컴퓨팅 비용을 어떻게 가장 효과적으로 절감하는가?
> a) 최대 사용량에 대비한 온디맨드 리소스를 제공한다.
> b) 개별 개발자 환경의 프로비저닝을 자동화한다.
> c) 고객 관계 관리를 자동화한다.
> d) 고정된 월간 컴퓨팅 예산을 구현한다.
>> [!success]- Answer
>> a) 최대 사용량에 대비한 온디맨드 리소스를 제공한다.

> [!question] 한 스타트업이 신속하게 시장에 출시해야 하는 새 애플리케이션을 개발하고 있다. 애플리케이션 요구 사항은 가까운 시일 내에 조정되어야 할 수도 있다. 다음 중 이 특정 요구를 충족하는 AWS 클라우드의 특성은 무엇인가?
> a) 탄력성
> b) 신뢰성
> c) 성능
> d) 민첩성
>> [!success]- Answer
>> d) 민첩성

> [!question] AWS Trusted Advisor 검사 전체 세트를 제공하는 AWS Support 플랜은 무엇인가?
> a) Business 및 Developer Support
> b) Business 및 Basic Support
> c) Enterprise 및 Developer Support
> d) Enterprise 및 Business Support
>> [!success]- Answer
>> d) Enterprise 및 Business Support

> [!question] 다음 중 분산 서비스 거부(DDoS) 완화 기능을 갖춘 서비스는 무엇인가? (2개 선택)
> a) AWS WAF
> b) Amazon DynamoDB
> c) Amazon EC2
> d) Amazon CloudFront
> e) Amazon Inspector
>> [!success]- Answer
>> a) AWS WAF
>> d) Amazon CloudFront

> [!question] 클라우드 총 소유 비용(TCO) 모델을 구축할 때 AWS에서 실행되는 워크로드에 대해 고려해야 하는 비용 요소는 무엇인가? (3개 선택)
> a) 컴퓨팅 비용
> b) 시설 비용
> c) 스토리지 비용
> d) 데이터 전송 비용
> e) 네트워크 인프라 비용
> f) 하드웨어 수명 주기 비용
>> [!success]- Answer
>> a) 컴퓨팅 비용
>> c) 스토리지 비용
>> d) 데이터 전송 비용
