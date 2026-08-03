---
title: "모의고사 01회"
lang: ko
exam: 1
---

<!--
  practice-exam-01.md 의 한국어판.
  문항은 **순서**로, 보기는 **글머리(a/b/c)** 로 원문과 짝지어진다.
  순서를 바꾸거나 문항을 빼면 원문과 어긋나므로 그대로 두세요.
  정답 블록은 파서가 문항을 인식하기 위해 필요하며, 실제 채점은 원문 기준입니다.

  문체는 **실제 시험 한국어판의 번역투**를 그대로 흉내 냅니다.
  ("~은 무엇인가?", "다음 중 ~", 서비스명은 영문 유지, 자연스러운 의역은 하지 않음)
-->

> [!question] AWS에서는 사용자가 웹 기반 사용자 인터페이스를 사용하여 리소스를 관리할 수 있다. 이 인터페이스의 이름은 무엇인가?
> a) AWS CLI.
> b) AWS API.
> c) AWS SDK.
> d) AWS Management Console.
>> [!success]- Answer
>> d) AWS Management Console.

> [!question] 다음 중 AWS 클라우드에서 수평적 확장의 예에 해당하는 것은 무엇인가?
> a) 기존 EC2 인스턴스를 더 크고 강력한 인스턴스로 교체한다.
> b) 애플리케이션의 증가하는 수요에 대응하기 위해 단일 EC2 인스턴스의 컴퓨팅 용량을 늘린다.
> c) EC2 인스턴스에 RAM 용량을 추가한다.
> d) 트래픽 증가를 처리하기 위해 동일한 크기의 EC2 인스턴스를 더 추가한다.
>> [!success]- Answer
>> d) 트래픽 증가를 처리하기 위해 동일한 크기의 EC2 인스턴스를 더 추가한다.

> [!question] 중요한 Amazon EC2 인스턴스 몇 개가 종료된 것을 발견했다. 다음 중 누가 이 작업을 수행했는지 확인하는 데 도움이 되는 AWS 서비스는 무엇인가?
> a) Amazon Inspector.
> b) AWS CloudTrail.
> c) AWS Trusted Advisor.
> d) EC2 인스턴스 사용 보고서.
>> [!success]- Answer
>> b) AWS CloudTrail.

> [!question] 다음 중 AWS의 안정성과 관련된 것은 무엇인가? (2개 선택)
> a) 모든 AWS 리소스에 최소 권한의 원칙을 적용한다.
> b) 수요를 충족하기 위해 새 리소스를 자동으로 프로비저닝한다.
> c) 모든 AWS 서비스는 글로벌 서비스로 간주되며, 이 설계는 고객이 국제 사용자에게 서비스를 제공하는 데 도움이 된다.
> d) 문제가 발생하는 경우 고객에게 보상을 제공한다.
> e) 장애로부터 신속하게 복구할 수 있는 능력.
>> [!success]- Answer
>> b) 수요를 충족하기 위해 새 리소스를 자동으로 프로비저닝한다.
>> e) 장애로부터 신속하게 복구할 수 있는 능력.

> [!question] AWS 공동 책임 모델에 관한 설명 중 옳은 것은 무엇인가?
> a) 책임은 사용하는 서비스에 따라 달라진다.
> b) IaaS 서비스의 보안은 AWS의 책임이다.
> c) 게스트 OS 패치는 항상 AWS의 책임이다.
> d) 관리형 서비스의 보안은 고객의 책임이다.
>> [!success]- Answer
>> a) 책임은 사용하는 서비스에 따라 달라진다.

> [!question] 여러 AWS 계정에 대해 통합 결제를 설정했다. 그중 한 계정이 예약 인스턴스를 3년 기간으로 다수 구매했다. 이 시나리오에 관한 설명 중 옳은 것은 무엇인가?
> a) 예약 인스턴스 할인은 마스터 계정과만 공유할 수 있다.
> b) 모든 계정이 예약 인스턴스의 시간당 비용 혜택을 받을 수 있다.
> c) 구매한 인스턴스는 온디맨드 인스턴스보다 성능이 더 우수하다.
> d) 통합 결제를 사용해도 비용 혜택은 없으며, 정보 제공 목적일 뿐이다.
>> [!success]- Answer
>> b) 모든 계정이 예약 인스턴스의 시간당 비용 혜택을 받을 수 있다.

> [!question] 한 회사가 AWS에서 eCommerce 웹 애플리케이션을 개발했다. 애플리케이션이 최고 수준의 가용성을 갖추도록 하려면 어떻게 해야 하는가?
> a) 여러 가용 영역과 엣지 로케이션에 애플리케이션을 배포한다.
> b) 여러 가용 영역과 서브넷에 애플리케이션을 배포한다.
> c) 여러 리전과 가용 영역에 애플리케이션을 배포한다.
> d) 여러 VPC와 서브넷에 애플리케이션을 배포한다.
>> [!success]- Answer
>> c) 여러 리전과 가용 영역에 애플리케이션을 배포한다.

> [!question] AWS Snowball은 무엇을 제공하는가? (2개 선택)
> a) 고객이 데이터를 로컬에서 처리할 수 있게 해 주는 내장 컴퓨팅 기능.
> b) 고객이 솔루션을 구축하고 비즈니스를 운영하는 데 필요한 서드 파티 소프트웨어 솔루션 카탈로그.
> c) 온프레미스 환경과 AWS 클라우드 간의 하이브리드 클라우드 스토리지.
> d) 매우 많은 양의 데이터를 AWS로 이동할 수 있게 해 주는 엑사바이트 규모의 데이터 전송 서비스.
> e) 대량의 데이터를 AWS 안팎으로 안전하게 전송.
>> [!success]- Answer
>> a) 고객이 데이터를 로컬에서 처리할 수 있게 해 주는 내장 컴퓨팅 기능.
>> e) 대량의 데이터를 AWS 안팎으로 안전하게 전송.

> [!question] 한 회사가 AWS Enterprise Support 플랜을 사용하고 있다. 이 회사는 결제 및 계정 문의에 대해 신속하고 효율적인 안내를 받고자 한다. 다음 중 이 회사가 사용해야 하는 것은 무엇인가?
> a) AWS Health Dashboard.
> b) AWS Support Concierge.
> c) AWS Customer Service.
> d) AWS Operations Support.
>> [!success]- Answer
>> b) AWS Support Concierge.

> [!question] 한 일본 회사가 도쿄 리전의 Amazon EC2 인스턴스에서 애플리케이션을 호스팅하고 있다. 이 회사는 미국에 새 지사를 열었으며, 미국 사용자들은 지연 시간이 길다고 불만을 제기하고 있다. 비용을 최소화하면서 미국 사용자의 지연 시간을 줄이려면 이 회사는 무엇을 할 수 있는가?
> a) Amazon Connect 지연 시간 기반 라우팅 정책을 적용한다.
> b) 미국 사용자에게 서비스를 제공하기 위해 미국 도메인 이름을 새로 등록한다.
> c) 미국에 새 데이터 센터를 구축하고 하이브리드 모델을 구현한다.
> d) 미국에 위치한 리전에 새 Amazon EC2 인스턴스를 배포한다.
>> [!success]- Answer
>> d) 미국에 위치한 리전에 새 Amazon EC2 인스턴스를 배포한다.

> [!question] 한 조직에 AWS 클라우드 인프라를 운영하는 기술 직원이 다수 있다. 이들을 팀으로 구성한 다음 각 팀에 적절한 권한을 할당하기 위해 AWS가 제공하는 것은 무엇인가?
> a) IAM 역할.
> b) IAM 사용자.
> c) IAM 사용자 그룹.
> d) AWS Organizations.
>> [!success]- Answer
>> c) IAM 사용자 그룹.

> [!question] 한 회사가 Oracle 데이터베이스를 AWS로 마이그레이션하기로 결정했다. 소스 데이터베이스의 기능에 부정적인 영향을 주지 않으면서 이를 수행하는 데 도움이 되는 AWS 서비스는 무엇인가?
> a) AWS OpsWorks.
> b) AWS Database Migration Service.
> c) AWS Server Migration Service.
> d) AWS Application Discovery Service.
>> [!success]- Answer
>> b) AWS Database Migration Service.

> [!question] 비용을 절감하기 위해 컴퓨팅 용량을 동적으로 조정하는 것은 어떤 AWS 클라우드 모범 사례를 구현한 것인가?
> a) 모든 계층에 보안을 구축한다.
> b) 작업을 병렬화한다.
> c) 탄력성을 구현한다.
> d) 모놀리식 아키텍처를 채택한다.
>> [!success]- Answer
>> c) 탄력성을 구현한다.

> [!question] AWS에서 인프라를 호스팅할 때 얻는 이점은 무엇인가? (2개 선택)
> a) 속도와 민첩성이 향상된다.
> b) 보안에 대해 걱정할 필요가 전혀 없다.
> c) 물리적 인프라에 대한 완전한 제어권을 얻는다.
> d) 고객을 대신하여 애플리케이션을 운영한다.
> e) 모든 물리적 보안과 대부분의 데이터/네트워크 보안이 사용자를 대신하여 처리된다.
>> [!success]- Answer
>> a) 속도와 민첩성이 향상된다.
>> e) 모든 물리적 보안과 대부분의 데이터/네트워크 보안이 사용자를 대신하여 처리된다.

> [!question] AWS가 권장하는 모범 사례인 애플리케이션 "디커플링"의 이점은 무엇인가?
> a) 애플리케이션을 하나의 응집된 단위로 취급할 수 있게 해 준다.
> b) 상호 종속성을 줄여 장애가 애플리케이션의 다른 구성 요소에 영향을 주지 않도록 한다.
> c) 모놀리식 애플리케이션을 빠르고 쉽게 업데이트할 수 있게 해 준다.
> d) 모든 AWS 서비스에 대한 모든 API 호출을 추적할 수 있게 해 준다.
>> [!success]- Answer
>> b) 상호 종속성을 줄여 장애가 애플리케이션의 다른 구성 요소에 영향을 주지 않도록 한다.

> [!question] 다음 중 고객이 지난달의 Amazon EC2 결제 활동을 확인하는 데 도움이 되는 것은 무엇인가?
> a) AWS Budgets.
> b) AWS Pricing Calculator.
> c) AWS Systems Manager.
> d) AWS Cost & Usage Reports.
>> [!success]- Answer
>> d) AWS Cost & Usage Reports.

> [!question] 5개의 서로 다른 AWS 계정을 다른 마스터 계정 아래에 두고 통합 결제를 설정하면 무엇을 얻는가?
> a) AWS 서비스 비용이 원래 요금의 절반으로 줄어든다.
> b) 통합 결제 기능은 조직 관리 목적일 뿐이다.
> c) 각 AWS 계정이 볼륨 할인을 받는다.
> d) 각 AWS 계정이 프리 티어 서비스 용량의 5배를 받는다.
>> [!success]- Answer
>> c) 각 AWS 계정이 볼륨 할인을 받는다.

> [!question] EBS 볼륨의 데이터를 안전하게 유지하려면 어떻게 해야 하는가? (2개 선택)
> a) EBS 디바이스의 펌웨어를 정기적으로 업데이트한다.
> b) EBS 스냅샷을 생성한다.
> c) EBS 데이터가 저장 시 암호화되도록 한다.
> d) 매일 외장 드라이브에 백업을 저장한다.
> e) AWS 데이터 센터에 대한 무단 액세스를 방지한다.
>> [!success]- Answer
>> b) EBS 스냅샷을 생성한다.
>> c) EBS 데이터가 저장 시 암호화되도록 한다.

> [!question] 따라야 할 가장 중요한 AWS 모범 사례 중 하나는 탄력성이라는 클라우드 아키텍처 원칙이다. 이 원칙은 아키텍처 설계를 어떻게 개선하는가?
> a) 수요 변화에 따라 온프레미스 리소스를 자동으로 조정함으로써.
> b) Elastic Load Balancer를 사용하여 AWS 리소스를 자동으로 조정함으로써.
> c) 가능한 모든 곳에서 애플리케이션 구성 요소 간의 상호 종속성을 줄임으로써.
> d) 수요 변화에 따라 필요한 AWS 리소스를 자동으로 프로비저닝함으로써.
>> [!success]- Answer
>> d) 수요 변화에 따라 필요한 AWS 리소스를 자동으로 프로비저닝함으로써.

> [!question] 한 스타트업 회사가 제한된 자금으로 운영되고 있으며 비용 초과를 매우 우려하고 있다. 월별 AWS 청구액이 $2000를 초과할 때 회사에 알리기 위해 사용할 수 있는 것은 다음 중 무엇인가? (2개 선택)
> a) 임계값이 초과되면 SNS 알림을 트리거하는 CloudWatch 결제 경보를 설정한다.
> b) 매일 이메일 주소로 결제 알림을 보내도록 Amazon Simple Email Service를 구성한다.
> c) 임계값이 초과되면 회사에 알리도록 AWS Budgets 서비스를 구성한다.
> d) 임계값이 초과되면 모든 AWS 리소스를 자동으로 삭제하도록 AWS CloudTrail을 구성한다.
> e) 임계값이 초과되면 회사에 알리도록 Amazon Connect 서비스를 구성한다.
>> [!success]- Answer
>> a) 임계값이 초과되면 SNS 알림을 트리거하는 CloudWatch 결제 경보를 설정한다.
>> c) 임계값이 초과되면 회사에 알리도록 AWS Budgets 서비스를 구성한다.

> [!question] Amazon CloudFront는 낮은 지연 시간으로 전 세계 사용자에게 콘텐츠를 배포하기 위해 무엇을 사용하는가?
> a) AWS Global Accelerator.
> b) AWS 리전.
> c) AWS 엣지 로케이션.
> d) AWS 가용 영역.
>> [!success]- Answer
>> c) AWS 엣지 로케이션.

> [!question] "최소 권한의 원칙"은 무엇을 의미하는가?
> a) 사용자에게 필요한 시점에 필요한 권한만 부여하고 그 이상은 부여하지 않아야 한다.
> b) 모든 IAM 사용자는 최소한 핵심 AWS 서비스에 액세스하는 데 필요한 권한을 가져야 한다.
> c) 신뢰할 수 있는 모든 IAM 사용자는 해당 AWS 계정의 모든 AWS 서비스에 액세스할 수 있어야 한다.
> d) 계정을 안전하게 유지하기 위해 IAM 사용자에게는 어떤 권한도 부여해서는 안 된다.
>> [!success]- Answer
>> a) 사용자에게 필요한 시점에 필요한 권한만 부여하고 그 이상은 부여하지 않아야 한다.

> [!question] 다음 중 AWS 클라우드 컴퓨팅 모델에 속하지 않는 것은 무엇인가?
> a) 서비스형 플랫폼(PaaS).
> b) 서비스형 인프라(IaaS).
> c) 서비스형 소프트웨어(SaaS).
> d) 서비스형 네트워킹(NaaS).
>> [!success]- Answer
>> d) 서비스형 네트워킹(NaaS).

> [!question] 한 온라인 금융 서비스 회사의 신원 확인 절차에서는 신규 사용자가 보안 팀과 온라인 인터뷰를 완료해야 한다. 녹화된 인터뷰는 법적 문제나 규정 준수 위반이 발생하는 경우에만 필요하다. 녹화된 동영상을 저장하는 데 가장 비용 효율적인 서비스는 무엇인가?
> a) S3 Intelligent-Tiering.
> b) AWS Marketplace.
> c) Amazon S3 Glacier Deep Archive.
> d) Amazon EBS.
>> [!success]- Answer
>> c) Amazon S3 Glacier Deep Archive.

> [!question] AWS 클라우드에서 DNS를 제공하는 서비스는 무엇인가?
> a) Route 53.
> b) AWS Config.
> c) Amazon CloudFront.
> d) Amazon EMR.
>> [!success]- Answer
>> a) Route 53.

> [!question] 전 세계적으로 매월 수십만 건의 DDoS 공격이 기록된다. AWS 고객을 이러한 공격으로부터 보호하기 위해 AWS가 제공하는 서비스는 무엇인가? (2개 선택)
> a) AWS Shield.
> b) AWS Config.
> c) Amazon Cognito.
> d) AWS WAF.
> e) AWS KMS.
>> [!success]- Answer
>> a) AWS Shield.
>> d) AWS WAF.

> [!question] 한 회사가 AWS에 새로운 2계층 웹 애플리케이션을 배포하고 있다. 애플리케이션의 응답 시간을 최적화하려면 가장 자주 액세스하는 데이터를 어디에 저장해야 하는가?
> a) AWS OpsWorks.
> b) AWS Storage Gateway.
> c) Amazon EBS 볼륨.
> d) Amazon ElastiCache.
>> [!success]- Answer
>> d) Amazon ElastiCache.

> [!question] 설문 조사 애플리케이션을 중단 없이 단 하루만 실행하려고 한다. 어떤 Amazon EC2 구매 옵션을 사용해야 하는가?
> a) 예약 인스턴스.
> b) 스팟 인스턴스.
> c) 전용 인스턴스.
> d) 온디맨드 인스턴스.
>> [!success]- Answer
>> d) 온디맨드 인스턴스.

> [!question] 수백만 개 이미지의 썸네일을 생성하는 프로젝트를 진행하고 있다. 지속적인 가동 시간은 문제가 되지 않으며, 연속적인 처리도 필요하지 않다. 가장 비용 효율적인 EC2 구매 옵션은 무엇인가?
> a) 예약 인스턴스.
> b) 온디맨드 인스턴스.
> c) 전용 인스턴스.
> d) 스팟 인스턴스.
>> [!success]- Answer
>> d) 스팟 인스턴스.

> [!question] 다음 중 글로벌 콘텐츠 전송 네트워크(CDN) 서비스로 설명할 수 있는 것은 무엇인가?
> a) AWS VPN.
> b) AWS Direct Connect.
> c) AWS 리전.
> d) Amazon CloudFront.
>> [!success]- Answer
>> d) Amazon CloudFront.

> [!question] 다음 중 고객이 AWS와의 계약을 관리할 수 있게 해 주는 서비스는 무엇인가?
> a) AWS Artifact.
> b) AWS Certificate Manager.
> c) AWS Systems Manager.
> d) AWS Organizations.
>> [!success]- Answer
>> a) AWS Artifact.

> [!question] 다음 중 AWS가 서비스 운영 및 유지 관리 부담을 책임지는 AWS 관리형 서비스의 예는 무엇인가? (2개 선택)
> a) Amazon VPC.
> b) Amazon DynamoDB.
> c) Amazon Elastic MapReduce.
> d) AWS IAM.
> e) Amazon Elastic Compute Cloud.
>> [!success]- Answer
>> b) Amazon DynamoDB.
>> c) Amazon Elastic MapReduce.

> [!question] 회사의 데이터 스토어 애플리케이션에 NoSQL 데이터베이스에 대한 액세스가 필요하다. 이 요구 사항을 충족하는 AWS 데이터베이스 서비스는 무엇인가?
> a) Amazon Aurora.
> b) Amazon DynamoDB.
> c) Amazon Elastic Block Store.
> d) Amazon Redshift.
>> [!success]- Answer
>> b) Amazon DynamoDB.

> [!question] Enterprise Support 플랜에서 지속적인 지원 요구 사항에 대한 기본 연락 창구는 누구인가?
> a) AWS Identity and Access Management(IAM) 사용자.
> b) Infrastructure Event Management(IEM) 엔지니어.
> c) AWS 컨설팅 파트너.
> d) 기술 계정 관리자(TAM).
>> [!success]- Answer
>> d) 기술 계정 관리자(TAM).

> [!question] AWS 계정 중 하나에서 AWS 지출 분포를 어떻게 확인할 수 있는가?
> a) Amazon VPC 콘솔을 사용하여.
> b) AWS Support 팀에 문의하여.
> c) AWS Cost Explorer를 사용하여.
> d) AWS 재무 팀에 문의하여.
>> [!success]- Answer
>> c) AWS Cost Explorer를 사용하여.

> [!question] IAM 사용자가 AWS Command Line Interface(AWS CLI)를 사용하여 AWS 서비스와 상호 작용하려면 다음 중 무엇을 제공해야 하는가?
> a) 액세스 키.
> b) 보안 토큰.
> c) 사용자 ID.
> d) 사용자 이름과 암호.
>> [!success]- Answer
>> a) 액세스 키.

> [!question] AWS Basic 지원을 사용하고 있으며, 일부 AWS 리소스가 악의적으로 사용되고 있고 해당 리소스가 데이터를 손상시킬 가능성이 있음을 발견했다. 어떻게 해야 하는가?
> a) AWS Customer Service 팀에 문의한다.
> b) AWS Abuse 팀에 문의한다.
> c) AWS Concierge 팀에 문의한다.
> d) AWS Security 팀에 문의한다.
>> [!success]- Answer
>> b) AWS Abuse 팀에 문의한다.

> [!question] AWS 공유 통제의 예를 2개 선택하시오.
> a) 패치 관리.
> b) IAM 관리.
> c) VPC 관리.
> d) 구성 관리.
> e) 데이터 센터 운영.
>> [!success]- Answer
>> a) 패치 관리.
>> d) 구성 관리.

> [!question] "단일 장애 지점"을 다룰 때 모범 사례를 구현하려면 장애를 감지하고 이에 대응하는 과정 모두에 가능한 한 많은 자동화를 구축해야 한다. 다음 중 도움이 되는 AWS 서비스는 무엇인가? (2개 선택)
> a) ELB.
> b) Auto Scaling.
> c) Amazon Athen.
> d) ECR.
> e) Amazon EC2.
>> [!success]- Answer
>> a) ELB.
>> b) Auto Scaling.

> [!question] 한 회사가 AWS에서 교육 웹 사이트를 호스팅할 계획이다. 이 회사의 동영상 강의는 전 세계로 스트리밍된다. 다음 중 높은 전송 속도를 달성하는 데 도움이 되는 AWS 서비스는 무엇인가?
> a) Amazon SNS.
> b) Amazon Kinesis Video Streams.
> c) AWS CloudFormation.
> d) Amazon CloudFront.
>> [!success]- Answer
>> d) Amazon CloudFront.

> [!question] 한 개발자가 MySQL 데이터베이스 계층을 갖춘 2계층 웹 애플리케이션을 구축할 계획이다. 다음 중 이 애플리케이션에 자동 백업을 제공하는 AWS 데이터베이스 서비스는 무엇인가?
> a) EC2 인스턴스에 설치된 MySQL 데이터베이스.
> b) Amazon Aurora.
> c) Amazon DynamoDB.
> d) Amazon Neptune.
>> [!success]- Answer
>> b) Amazon Aurora.

> [!question] AWS 아키텍트가 인프라를 코드로 관리할 수 있게 해 주는 AWS 서비스는 무엇인가?
> a) AWS CloudFormation.
> b) AWS Config.
> c) Amazon SES.
> d) Amazon EMR.
>> [!success]- Answer
>> a) AWS CloudFormation.

> [!question] 공동 책임 모델에서 다음 중 AWS의 책임에 해당하는 것은 무엇인가?
> a) 클라이언트 측 암호화.
> b) 인프라 디바이스 구성.
> c) 서버 측 암호화.
> d) 보안 그룹을 사용한 트래픽 필터링.
>> [!success]- Answer
>> b) 인프라 디바이스 구성.

> [!question] AWS Health Dashboard는 무엇을 제공하는가? (2개 선택)
> a) 리소스에 영향을 주는 AWS 이벤트를 해결하기 위한 상세한 문제 해결 지침.
> b) Auto Scaling 인스턴스에 대한 상태 확인.
> c) 비용 최적화에 대한 권장 사항.
> d) 애플리케이션의 취약점을 상세히 보여 주는 대시보드.
> e) AWS 서비스 상태에 대한 개인화된 보기.
>> [!success]- Answer
>> a) 리소스에 영향을 주는 AWS 이벤트를 해결하기 위한 상세한 문제 해결 지침.
>> e) AWS 서비스 상태에 대한 개인화된 보기.

> [!question] 여러 Amazon EC2 인스턴스에 애플리케이션을 배포했다. 고객들은 때때로 애플리케이션에 연결할 수 없다고 불만을 제기한다. 이러한 문제를 해결하는 데 도움이 되도록 EC2 인스턴스의 성능을 모니터링할 수 있게 해 주는 AWS 서비스는 무엇인가?
> a) AWS Lambda.
> b) AWS Config.
> c) Amazon CloudWatch.
> d) AWS CloudTrail.
>> [!success]- Answer
>> c) Amazon CloudWatch.

> [!question] 회사가 AWS에서 중요한 웹 애플리케이션을 개발하고 있으며, 애플리케이션의 보안이 최우선 과제이다. 다음 중 인프라 보안 최적화 권장 사항을 제공하는 AWS 서비스는 무엇인가?
> a) AWS Shield.
> b) AWS Management Console.
> c) AWS Secrets Manager.
> d) AWS Trusted Advisor.
>> [!success]- Answer
>> d) AWS Trusted Advisor.

> [!question] 다음 중 Amazon S3의 이점이 아닌 것은 무엇인가? (2개 선택)
> a) Amazon S3는 모든 유형의 데이터에 대해 무제한 스토리지를 제공한다.
> b) Amazon S3는 모든 유형의 애플리케이션 또는 백엔드 시스템을 실행할 수 있다.
> c) Amazon S3는 객체를 개수 제한 없이 저장하지만 객체 크기에는 제한이 있다.
> d) Amazon S3는 어디에서나 원하는 양의 데이터를 저장하고 검색할 수 있도록 수동으로 확장할 수 있다.
> e) Amazon S3는 99.999999999%(9가 11개)의 데이터 내구성을 제공한다.
>> [!success]- Answer
>> b) Amazon S3는 모든 유형의 애플리케이션 또는 백엔드 시스템을 실행할 수 있다.
>> d) Amazon S3는 어디에서나 원하는 양의 데이터를 저장하고 검색할 수 있도록 수동으로 확장할 수 있다.

> [!question] AWS 공동 책임 모델에서 다음 중 고객의 책임에 해당하는 것은 무엇인가? (2개 선택)
> a) 디스크 폐기.
> b) 컴퓨팅 리소스에 대한 물리적 액세스 제어.
> c) 네트워크 인프라 패치.
> d) 암호 복잡성 규칙 설정.
> e) 네트워크 액세스 규칙 구성.
>> [!success]- Answer
>> d) 암호 복잡성 규칙 설정.
>> e) 네트워크 액세스 규칙 구성.

> [!question] IBM MQ와 같은 널리 사용되는 기술을 최소한의 노력과 시간으로 AWS에 배포하기 위해 AWS가 제공하는 것은 무엇인가?
> a) Amazon Aurora.
> b) Amazon CloudWatch.
> c) AWS Quick Start 참조 배포.
> d) AWS OpsWorks.
>> [!success]- Answer
>> c) AWS Quick Start 참조 배포.

> [!question] 한 조직이 비용을 절감하기 위해 Amazon EC2 예약 인스턴스(RI)를 3년 기간으로 구매하기로 결정했다. 예약 기간 중에 애플리케이션 워크로드가 변경될 가능성이 있다. 필요한 경우 구매한 예약 인스턴스를 더 높은 컴퓨팅 성능을 가진 다른 예약 인스턴스로 교환할 수 있게 해 주는 EC2 예약 인스턴스(RI) 유형은 무엇인가?
> a) Elastic RI.
> b) Premium RI.
> c) Standard RI.
> d) Convertible RI.
>> [!success]- Answer
>> d) Convertible RI.
