---
title: "모의고사 22회"
lang: ko
exam: 22
---

<!--
  practice-exam-22.md 의 한국어판.
  문항은 **순서**로, 보기는 **글머리(a/b/c)** 로 원문과 짝지어진다.
  순서를 바꾸거나 문항을 빼면 원문과 어긋나므로 그대로 두세요.
  정답 블록은 파서가 문항을 인식하기 위해 필요하며, 실제 채점은 원문 기준입니다.

  문체는 **실제 시험 한국어판의 번역투**를 그대로 흉내 냅니다.
  ("~은 무엇인가?", "다음 중 ~", 서비스명은 영문 유지, 자연스러운 의역은 하지 않음)
-->

> [!question] AWS 클라우드에서 운영 중인 회사가 개발, 테스트, 프로덕션과 같은 특정 환경에 대해 별도의 청구서를 요구한다. 이를 어떻게 달성할 수 있는가?
> a) 여러 개의 AWS 계정을 사용한다
> b) 리소스 태깅을 사용한다
> c) 여러 개의 VPC를 사용한다
> d) Cost Explorer를 사용한다
>> [!success]- Answer
>> a) 여러 개의 AWS 계정을 사용한다

> [!question] 다음 중 애플리케이션 배포 프로세스에 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS AppSync
> b) AWS Batch
> c) AWS CodePipeline
> d) AWS DataSync
>> [!success]- Answer
>> c) AWS CodePipeline

> [!question] Amazon EC2 인스턴스 실행 비용을 줄이는 데 사용할 수 있는 것은 무엇인가? (2개 선택)
> a) 상태 비저장 및 유연한 워크로드를 위한 스팟 인스턴스
> b) 고성능 컴퓨팅 워크로드를 위한 메모리 최적화 인스턴스
> c) 고비용의 지속적인 워크로드를 위한 온디맨드 인스턴스
> d) 지속적인 워크로드를 위한 예약 인스턴스
> e) AWS Budgets를 사용하여 설정한 지출 한도
>> [!success]- Answer
>> a) 상태 비저장 및 유연한 워크로드를 위한 스팟 인스턴스
>> d) 지속적인 워크로드를 위한 예약 인스턴스

> [!question] 한 회사가 신용카드 데이터를 저장하고 처리할 전자상거래 사이트를 출시하고 있다. 이 회사는 AWS 규정 준수 보고서 및 AWS 계약에 대한 정보를 요구한다. 다음 중 이러한 항목에 대한 온디맨드 액세스를 제공하는 AWS 서비스는 무엇인가?
> a) AWS Certificate Manager
> b) AWS Config
> c) AWS Artifact
> d) AWS CloudTrail
>> [!success]- Answer
>> c) AWS Artifact

> [!question] 다음 중 사용자가 리전 간 애플리케이션 트래픽을 관리할 수 있게 해 주는 AWS 서비스 또는 기능은 무엇인가?
> a) Amazon AppStream 2.0
> b) Amazon VPC
> c) Elastic Load Balancer
> d) Amazon Route 53
>> [!success]- Answer
>> d) Amazon Route 53

> [!question] 다음 중 무단 API 호출을 추적하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS Config
> b) AWS CloudTrail
> c) AWS Trusted Advisor
> d) Amazon Inspector
>> [!success]- Answer
>> b) AWS CloudTrail

> [!question] 한 사용자가 모든 AWS 리소스의 설정을 정기적으로 감사하고 평가하며, 규정을 준수하지 않는 계정을 식별하고, 리소스가 변경될 때 알림을 받아야 한다. 다음 중 이러한 요구 사항을 충족하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) AWS Trusted Advisor
> b) AWS Config
> c) AWS Resource Access Manager
> d) AWS Systems Manager
>> [!success]- Answer
>> b) AWS Config

> [!question] 한 사용자가 가용성을 높이기 위해 Amazon EC2 인스턴스 2개를 추가로 시작할 계획이다. 이 사용자는 어떤 조치를 취해야 하는가?
> a) 단일 AWS 리전 내의 여러 가용 영역에 걸쳐 인스턴스를 시작한다.
> b) 동일한 AWS 리전 및 동일한 가용 영역에서 인스턴스를 EC2 예약 인스턴스로 시작한다.
> c) 여러 AWS 리전에서, 그러나 동일한 가용 영역에서 인스턴스를 시작한다.
> d) 동일한 AWS 리전에서, 그러나 서로 다른 가용 영역에서 인스턴스를 EC2 스팟 인스턴스로 시작한다.
>> [!success]- Answer
>> a) 단일 AWS 리전 내의 여러 가용 영역에 걸쳐 인스턴스를 시작한다.

> [!question] 한 회사가 중요한 비즈니스 데이터를 Amazon S3에 저장하고 다른 AWS 리전에 백업해야 한다. 이를 어떻게 달성할 수 있는가?
> a) Amazon CloudFront 콘텐츠 전송 네트워크(CDN)를 사용하여 데이터를 전 세계적으로 캐싱한다
> b) Amazon S3 리전 간 복제를 다른 AWS 리전으로 설정한다
> c) AWS Backup 서비스가 다른 AWS 리전으로 데이터를 백업하도록 구성한다
> d) Amazon S3 버킷 스냅샷을 생성하고 해당 데이터를 다른 AWS 리전으로 복사한다
>> [!success]- Answer
>> b) Amazon S3 리전 간 복제를 다른 AWS 리전으로 설정한다

> [!question] 다음 중 사용자 지정 지출 임계값을 초과하는 경우 고객에게 알림을 보낼 수 있는 AWS 클라우드 서비스는 무엇인가?
> a) AWS Budgets
> b) AWS Cost Explorer
> c) AWS Cost Allocation Tags
> d) AWS Organizations
>> [!success]- Answer
>> a) AWS Budgets

> [!question] AWS 리소스에 대한 침투 테스트를 요청하는 권장 방법은 무엇인가?
> a) 지원 케이스를 연다
> b) 침투 테스트 요청 양식을 작성한다
> c) 기술 계정 관리자에게 침투 테스트를 요청한다
> d) AWS 영업 담당자에게 문의한다
>> [!success]- Answer
>> b) 침투 테스트 요청 양식을 작성한다

> [!question] 한 사용자가 Amazon S3에 저장된 민감한 데이터를 자동으로 검색, 분류 및 보호해야 한다. 다음 중 이러한 요구 사항을 충족할 수 있는 AWS 서비스는 무엇인가?
> a) Amazon Inspector
> b) Amazon Macie
> c) Amazon GuardDuty
> d) AWS Secrets Manager
>> [!success]- Answer
>> b) Amazon Macie

> [!question] AWS에서 성공적인 사이트 간 VPN 연결을 구축하는 데 필요한 구성 요소는 무엇인가? (2개 선택)
> a) 인터넷 게이트웨이
> b) NAT 게이트웨이
> c) 고객 게이트웨이
> d) 전송 게이트웨이
> e) 가상 프라이빗 게이트웨이
>> [!success]- Answer
>> c) 고객 게이트웨이
>> e) 가상 프라이빗 게이트웨이

> [!question] 다음 중 중단될 수 없는 단기적이거나 급증하거나 예측 불가능한 워크로드를 가진 애플리케이션에 가장 적합한 Amazon EC2 요금 옵션은 무엇인가?
> a) 스팟 인스턴스
> b) 전용 호스트
> c) 온디맨드 인스턴스
> d) 예약 인스턴스
>> [!success]- Answer
>> c) 온디맨드 인스턴스

> [!question] 다음 중 시스템이 상호 종속성을 줄여야 한다고 명시하는 AWS 클라우드 아키텍처 원칙은 무엇인가?
> a) 확장성
> b) 서버가 아닌 서비스
> c) 단일 장애 지점 제거
> d) 느슨한 결합
>> [!success]- Answer
>> d) 느슨한 결합

> [!question] AWS 보안 공지를 최신 상태로 유지하는 데 가장 효과적인 리소스는 무엇인가?
> a) AWS Personal Health Dashboard
> b) AWS Secrets Manager
> c) AWS Security Bulletins
> d) Amazon Inspector
>> [!success]- Answer
>> c) AWS Security Bulletins

> [!question] 다음 중 파일 시스템에 대한 영구 스토리지를 제공하는 AWS 서비스는 무엇인가?
> a) Amazon S3
> b) Amazon EC2 인스턴스 스토어
> c) Amazon Elastic Block Store(Amazon EBS)
> d) Amazon ElastiCache
>> [!success]- Answer
>> c) Amazon Elastic Block Store(Amazon EBS)

> [!question] 다음 중 AWS 사용자가 청구를 위한 비용 할당을 관리할 수 있게 해 주는 것은 무엇인가?
> a) 리소스에 태그 지정
> b) 리소스를 생성할 수 있는 사용자 제한
> c) 보조 결제 수단 추가
> d) 모든 작업을 단일 AWS 계정에서 실행
>> [!success]- Answer
>> a) 리소스에 태그 지정

> [!question] 다음 중 사용자가 AWS 인프라에 대한 보안 및 규정 준수 보고서를 온디맨드로 다운로드할 수 있게 해 주는 AWS 서비스는 무엇인가?
> a) Amazon GuardDuty
> b) AWS Security Hub
> c) AWS Artifact
> d) AWS Shield
>> [!success]- Answer
>> c) AWS Artifact

> [!question] 다음 AWS 서비스 중 서버리스인 것은 무엇인가? (2개 선택)
> a) AWS Lambda
> b) Amazon Elasticsearch Service
> c) AWS Elastic Beanstalk
> d) Amazon DynamoDB
> e) Amazon Redshift
>> [!success]- Answer
>> a) AWS Lambda
>> d) Amazon DynamoDB

> [!question] 다음 중 온프레미스 데이터 센터를 AWS 네트워크로 확장하는 데 사용할 수 있는 AWS 관리형 서비스는 무엇인가? (2개 선택)
> a) AWS VPN
> b) NAT 게이트웨이
> c) AWS Direct Connect
> d) Amazon Connect
> e) Amazon Route 53
>> [!success]- Answer
>> a) AWS VPN
>> c) AWS Direct Connect

> [!question] 멤버 계정을 AWS Organizations 계정에서 연결 해제하려면 어떤 요구 사항이 충족되어야 하는가?
> a) 연결된 계정은 AWS System and Organization Controls(SOC)를 적극적으로 준수하고 있어야 한다.
> b) 결제 계정과 연결된 계정 모두가 멤버 계정을 조직에서 연결 해제하도록 요청하는 AWS Support 케이스를 생성해야 한다.
> c) 멤버 계정은 독립 실행형 계정의 요구 사항을 충족해야 한다.
> d) 조직에서 연결된 계정을 제거하려면 결제 계정을 사용해야 한다.
>> [!success]- Answer
>> c) 멤버 계정은 독립 실행형 계정의 요구 사항을 충족해야 한다.

> [!question] 다음 중 변동하는 수요를 충족하기 위해 확장 및 축소되는 애플리케이션을 배포할 수 있는 고객의 능력을 가리키는 AWS 이점은 무엇인가?
> a) 탄력성
> b) 민첩성
> c) 보안
> d) 확장성
>> [!success]- Answer
>> d) 확장성

> [!question] 규정 준수 검토 중에 감사자 중 한 명이 AWS SOC 2 보고서 사본을 요구한다. 이 요청을 제출하는 데 사용해야 하는 서비스는 무엇인가?
> a) AWS Personal Health Dashboard
> b) AWS Trusted Advisor
> c) AWS Artifact
> d) Amazon S3
>> [!success]- Answer
>> c) AWS Artifact

> [!question] 한 회사가 리전 서비스 중단이 발생하는 경우 복구할 수 있게 해 주는 재해 복구 계획과 함께 AWS에서 고가용성 워크로드를 설정하려고 한다. 다음 중 이러한 요구 사항을 충족하는 구성은 무엇인가?
> a) 하나의 AWS 리전 내 두 개의 가용 영역에서 실행하고, 해당 AWS 리전의 추가 가용 영역을 재해 복구 사이트로 사용한다.
> b) 하나의 AWS 리전 내 두 개의 가용 영역에서 실행하고, 다른 AWS 리전을 재해 복구 사이트로 사용한다.
> c) 하나의 AWS 리전 내 두 개의 가용 영역에서 실행하고, 로컬 AWS 리전을 재해 복구 사이트로 사용한다.
> d) 두 개의 AWS 리전에 걸쳐 실행하고, 세 번째 AWS 리전을 재해 복구 사이트로 사용한다.
>> [!success]- Answer
>> b) 하나의 AWS 리전 내 두 개의 가용 영역에서 실행하고, 다른 AWS 리전을 재해 복구 사이트로 사용한다.
>> d) 두 개의 AWS 리전에 걸쳐 실행하고, 세 번째 AWS 리전을 재해 복구 사이트로 사용한다.

> [!question] 한 회사가 처리를 위해 AWS로 전송해야 하는 500TB 이미지 리포지토리를 보유하고 있다. 다음 중 이 데이터를 가장 비용 효율적으로 가져올 수 있는 AWS 서비스는 무엇인가?
> a) AWS Snowball
> b) AWS Direct Connect
> c) AWS VPN
> d) Amazon S3
>> [!success]- Answer
>> a) AWS Snowball

> [!question] 다음 중 온라인 트랜잭션 처리(OLTP)를 제공하는 관리형 PostgreSQL 데이터베이스를 실행할 수 있는 AWS 서비스는 무엇인가?
> a) Amazon DynamoDB
> b) Amazon Athena
> c) Amazon RDS
> d) Amazon EMR
>> [!success]- Answer
>> c) Amazon RDS

> [!question] 다음 중 부서별 비용을 식별하는 데 도움이 되는 것은 무엇인가? (2개 선택)
> a) 리소스에 태그 사용
> b) 여러 개의 AWS 계정 사용
> c) 계정 관리자 사용
> d) AWS Trusted Advisor 사용
> e) 통합 결제 사용
>> [!success]- Answer
>> a) 리소스에 태그 사용
>> b) 여러 개의 AWS 계정 사용

> [!question] 한 회사가 특정 사용자에게 Amazon S3 버킷에 대한 전체 액세스를 허용하려고 한다. S3 버킷 정책에서 S3 버킷에 액세스해야 하는 사용자를 설명하는 사용자 세부 정보를 담고 있는 요소는 무엇인가?
> a) Principal
> b) Action
> c) Resource
> d) Statement
>> [!success]- Answer
>> a) Principal

> [!question] 다음 중 여러 AWS 계정의 효과적인 비용 관리를 할 수 있게 해 주는 AWS 서비스는 무엇인가?
> a) AWS Organizations
> b) AWS Trusted Advisor
> c) AWS Direct Connect
> d) Amazon Connect
>> [!success]- Answer
>> a) AWS Organizations

> [!question] 한 회사가 고객 대상 신규 애플리케이션을 Amazon Elastic Compute Cloud(Amazon EC2)에서 한 달 동안 시범 운영하고 있다. 적합한 요금 모델은 무엇인가?
> a) 예약 인스턴스
> b) 스팟 인스턴스
> c) 온디맨드 인스턴스
> d) 전용 호스트
>> [!success]- Answer
>> c) 온디맨드 인스턴스

> [!question] 다음 중 향후 AWS 비용을 자동으로 예측하는 AWS 도구는 무엇인가?
> a) AWS Support Center
> b) AWS 총 소유 비용(TCO) 계산기
> c) AWS Simple Monthly Calculator
> d) Cost Explorer
>> [!success]- Answer
>> d) Cost Explorer

> [!question] AWS 공동 책임 모델에 따라 다음 중 AWS의 책임에 해당하는 것은 무엇인가?
> a) S3에 저장된 객체에 대해 서버 측 암호화를 활성화하는 것
> b) AWS IAM 보안 정책을 적용하는 것
> c) Amazon EC2 인스턴스의 운영 체제를 패치하는 것
> d) 하이퍼바이저에 업데이트를 적용하는 것
>> [!success]- Answer
>> d) 하이퍼바이저에 업데이트를 적용하는 것

> [!question] 사용자는 다음을 통해 통합 결제 보고서를 보기 위한 마스터 결제 계정을 설정할 수 있다:
> a) AWS Budgets.
> b) Amazon Macie.
> c) Amazon QuickSight.
> d) AWS Organizations.
>> [!success]- Answer
>> d) AWS Organizations.

> [!question] 코드로 운영을 수행하는 것은 AWS Well-Architected Framework의 어떤 원칙을 뒷받침하는 설계 원칙인가?
> a) 성능 효율성
> b) 운영 우수성
> c) 신뢰성
> d) 보안
>> [!success]- Answer
>> b) 운영 우수성

> [!question] 다음 중 AWS Well-Architected Framework의 신뢰성 원칙을 따름으로써 달성되는 설계 원칙은 무엇인가?
> a) 수직적 확장
> b) 수동 장애 복구
> c) 복구 절차 테스트
> d) 인프라를 수동으로 변경
>> [!success]- Answer
>> c) 복구 절차 테스트

> [!question] 전환형 예약 인스턴스(RI)의 특징은 무엇인가?
> a) 사용자는 전환형 RI를 교환하려는 전환형 예약 인스턴스와 동일하거나 더 높은 가치를 가진 다른 인스턴스 패밀리의 다른 전환형 RI로 교환할 수 있다.
> b) 사용자는 전환형 RI를 다른 AWS 리전의 다른 전환형 RI로 교환할 수 있다.
> c) 사용자는 AWS Marketplace에서 전환형 RI를 판매하고 구매할 수 있다.
> d) 사용자는 전환형 RI를 다른 전환형 RI와 병합하여 기간을 단축할 수 있다.
>> [!success]- Answer
>> a) 사용자는 전환형 RI를 교환하려는 전환형 예약 인스턴스와 동일하거나 더 높은 가치를 가진 다른 인스턴스 패밀리의 다른 전환형 RI로 교환할 수 있다.

> [!question] AWS에서 워크로드를 실행할 때 사용자가 전적으로 책임지는 작업은 무엇인가?
> a) 인프라 구성 요소를 패치하는 것
> b) 애플리케이션 트래픽을 라우팅하기 위한 제어를 구현하는 것
> c) 물리적 및 환경적 제어를 유지 관리하는 것
> d) 기본 인프라 구성 요소를 유지 관리하는 것
>> [!success]- Answer
>> b) 애플리케이션 트래픽을 라우팅하기 위한 제어를 구현하는 것

> [!question] 한 아키텍처 설계에 Amazon EC2, Elastic Load Balancer 및 Amazon RDS가 포함되어 있다. 이 아키텍처에 대한 월별 비용 견적을 얻는 가장 좋은 방법은 무엇인가?
> a) AWS Support 케이스를 열고 아키텍처 제안을 제공한 다음 월별 비용 견적을 요청한다.
> b) AWS 서비스의 공개된 가격을 수집하고 월별 견적을 계산한다.
> c) AWS Simple Monthly Calculator를 사용하여 월별 비용을 추정한다.
> d) AWS 총 소유 비용(TCO) 계산기를 사용하여 월별 비용을 추정한다.
>> [!success]- Answer
>> c) AWS Simple Monthly Calculator를 사용하여 월별 비용을 추정한다.

> [!question] 다음 중 AWS에서 관계형 데이터베이스를 실행할 때 Amazon EC2 대신 Amazon RDS를 사용하는 것의 이점은 무엇인가? (2개 선택)
> a) 자동 백업
> b) 스키마 관리
> c) 테이블 인덱싱
> d) 소프트웨어 패치
> e) 추출, 변환, 로드(ETL) 관리
>> [!success]- Answer
>> a) 자동 백업
>> d) 소프트웨어 패치

> [!question] Amazon S3 Intelligent-Tiering 스토리지 클래스는 무엇을 제공하는가?
> a) 스토리지 용량을 예약함으로써 얻는 결제 유연성
> b) 데이터를 암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨에 복사함으로써 얻는 데이터의 장기 보존
> c) 액세스 패턴 변화에 따라 객체를 계층 간에 이동함으로써 얻는 자동 비용 절감
> d) 데이터 아카이빙을 위한 안전하고 내구성 있으며 가장 저렴한 스토리지
>> [!success]- Answer
>> c) 액세스 패턴 변화에 따라 객체를 계층 간에 이동함으로써 얻는 자동 비용 절감

> [!question] 한 회사가 조직 전반에 걸쳐 여러 데이터 소스를 보유하고 있으며 데이터를 하나의 데이터 웨어하우스로 통합하려고 한다. 다음 중 이러한 요구 사항을 충족하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) Amazon DynamoDB
> b) Amazon Redshift
> c) Amazon Athena
> d) Amazon QuickSight
>> [!success]- Answer
>> b) Amazon Redshift

> [!question] 다음 중 리소스 변경 사항을 추적하고 규정 준수를 확립하는 데 사용할 수 있는 AWS 서비스는 무엇인가?
> a) Amazon CloudWatch
> b) AWS Config
> c) AWS CloudTrail
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Config

> [!question] 한 사용자가 활용도가 낮은 온프레미스 리소스를 보유하고 있다. 다음 중 이 문제를 가장 잘 해결할 수 있는 AWS 클라우드 개념은 무엇인가?
> a) 고가용성
> b) 탄력성
> c) 보안
> d) 느슨한 결합
>> [!success]- Answer
>> b) 탄력성

> [!question] 한 사용자가 향후 3년 동안 Amazon EC2에서 실행될 상태 저장 워크로드를 보유하고 있다. 이 워크로드에 가장 비용 효율적인 요금 모델은 무엇인가?
> a) 온디맨드 인스턴스
> b) 예약 인스턴스
> c) 전용 인스턴스
> d) 스팟 인스턴스
>> [!success]- Answer
>> b) 예약 인스턴스

> [!question] 한 클라우드 실무자가 중단 없이 7시간 동안 시작되어 실행되는 Amazon EC2 인스턴스가 필요하다. 이 작업에 가장 적합하고 비용 효율적인 옵션은 무엇인가?
> a) 온디맨드 인스턴스
> b) 예약 인스턴스
> c) 전용 호스트
> d) 스팟 인스턴스
>> [!success]- Answer
>> a) 온디맨드 인스턴스

> [!question] 다음 중 AWS Trusted Advisor 사용의 이점은 무엇인가? (2개 선택)
> a) 고성능 컨테이너 오케스트레이션 제공
> b) 암호화 키 생성 및 교체
> c) 비용 절감을 위해 활용도가 낮은 리소스 탐지
> d) AWS 환경을 사전에 모니터링함으로써 보안 개선
> e) AWS 리소스 전반에 태그 지정 적용
>> [!success]- Answer
>> c) 비용 절감을 위해 활용도가 낮은 리소스 탐지
>> d) AWS 환경을 사전에 모니터링함으로써 보안 개선

> [!question] 한 개발자가 대기업에 고용되어 AWS 자격 증명이 필요하다. 다음 중 따라야 하는 보안 모범 사례는 무엇인가? (2개 선택)
> a) 개발자에게 업무를 수행하는 데 필요한 AWS 리소스에만 액세스 권한을 부여한다.
> b) AWS 계정 루트 사용자 자격 증명을 개발자와 공유한다.
> c) 개발자를 AWS IAM의 관리자 그룹에 추가한다.
> d) 개발자의 암호를 변경할 수 없도록 하는 암호 정책을 구성한다.
> e) 계정 암호 정책이 최소 길이를 요구하도록 한다.
>> [!success]- Answer
>> a) 개발자에게 업무를 수행하는 데 필요한 AWS 리소스에만 액세스 권한을 부여한다.
>> e) 계정 암호 정책이 최소 길이를 요구하도록 한다.

> [!question] 다음 중 페타바이트 규모의 데이터를 클라우드 안팎으로 전송하도록 설계된 AWS 스토리지 서비스는 무엇인가?
> a) AWS Storage Gateway
> b) Amazon S3 Glacier Deep Archive
> c) Amazon Lightsail
> d) AWS Snowball
>> [!success]- Answer
>> d) AWS Snowball

> [!question] 다음 중 사용자가 AWS 클라우드에서 데이터를 웨어하우징할 수 있는 능력을 제공하는 서비스는 무엇인가?
> a) Amazon EFS
> b) Amazon Redshift
> c) Amazon RDS
> d) Amazon VPC
>> [!success]- Answer
>> b) Amazon Redshift
