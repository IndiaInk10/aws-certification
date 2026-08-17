---
title: "실전 구성 6회차"
tags: [saa-c03, 문제은행, quiz]
exam: 6
문항수: 50
lang: ko
---

> [!info] 실제 출제 비중에 맞춘 50문항입니다
> 도메인 구성이 실제 시험과 같습니다 — **보안 15 · 복원력 13 · 고성능 12 · 비용 10**.
> 그래서 이 회차의 정답률은 **실전 예상 점수에 가깝습니다.** 시간을 재고 한 번에 푸세요.
>
> 문항은 커뮤니티 문제 정리에서 **판단이 갈리는 지점**만 가져와 상황·보기·해설을 새로 쓴 것입니다.
> 출처와 방식은 [참고 자료](/docs/references)에 있습니다.

> [!question] 한 기업이 AWS Organizations로 부서별 여러 AWS 계정을 관리합니다. 관리 계정에는 프로젝트 보고서가 담긴 S3 버킷이 있습니다. 이 버킷에 대한 액세스를 조직에 속한 계정의 사용자로만 제한하려고 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) S3 버킷 정책에 조직 ID를 참조하는 `aws:PrincipalOrgID` 전역 조건 키를 추가한다
> b) 부서마다 조직 단위(OU)를 만들고 버킷 정책에 `aws:PrincipalOrgPaths` 전역 조건 키를 추가한다
> c) AWS CloudTrail로 계정 생성·초대·탈퇴·제거 이벤트를 모니터링하고 그때마다 버킷 정책을 갱신한다
> d) 액세스가 필요한 사용자마다 태그를 붙이고 버킷 정책에 `aws:PrincipalTag` 조건 키를 추가한다
>> [!success]- Answer
>> a) S3 버킷 정책에 조직 ID를 참조하는 `aws:PrincipalOrgID` 전역 조건 키를 추가한다
>> **왜 이 답인가** — 이 조건 키 한 줄이 "요청자가 이 조직 소속인가"를 대신 물어봅니다. 계정이 늘거나 빠져도 조직 ID는 그대로라 정책을 다시 만질 일이 없습니다.
>> **나머지가 아닌 이유** — `PrincipalOrgPaths`는 OU 경로를 일일이 관리해야 합니다. CloudTrail로 감시하며 정책을 고치는 방식은 사람이 계속 따라다녀야 합니다. 사용자 태그 방식은 사용자마다 태깅을 유지해야 해서 오버헤드가 큽니다.

<sub>관련: [[amazon-s3]] [[aws-organizations]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업의 애플리케이션이 들어오는 메시지를 수집하고, 수십 개의 다른 애플리케이션과 마이크로서비스가 이 메시지를 빠르게 소비합니다. 메시지 양은 크게 변동하며 때때로 초당 100,000건까지 갑자기 늘어납니다. 이 기업은 솔루션을 분리하고 확장성을 높이려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 메시지를 Amazon SNS 주제에 게시하고 여러 Amazon SQS 큐를 구독시켜, 소비 애플리케이션이 각자의 큐에서 메시지를 처리하게 한다
> b) 메시지를 Amazon Kinesis Data Analytics에 저장하고 소비 애플리케이션이 읽어 처리하게 한다
> c) 샤드 하나짜리 Kinesis Data Streams에 쓰고 Lambda로 전처리해 DynamoDB에 저장한 뒤 소비 애플리케이션이 DynamoDB에서 읽게 한다
> d) 수집 애플리케이션을 Auto Scaling 그룹의 EC2 인스턴스에 배포하고 CPU 지표로 인스턴스 수를 조정한다
>> [!success]- Answer
>> a) 메시지를 Amazon SNS 주제에 게시하고 여러 Amazon SQS 큐를 구독시켜, 소비 애플리케이션이 각자의 큐에서 메시지를 처리하게 한다
>> **왜 이 답인가** — **한 메시지를 여러 소비자가 각자 받아야 하는** 구조입니다. SNS가 부채꼴로 뿌리고(팬아웃) 큐가 소비자별로 완충해 주므로, 소비자가 느려도 메시지가 사라지지 않습니다.
>> **나머지가 아닌 이유** — 샤드 하나짜리 Kinesis는 초당 10만 건을 감당하지 못합니다. Kinesis Data Analytics는 저장소가 아니라 스트림 분석 도구입니다. EC2 확장은 결합을 끊어 주지 못합니다.

<sub>관련: [[amazon-sns]] [[amazon-sqs]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 여러 대륙의 도시에서 온도·습도·기압 데이터를 수집합니다. 각 사이트에서 하루에 수집하는 데이터 양은 평균 500GB이고 각 사이트에는 고속 인터넷 연결이 있습니다. 이 기업은 모든 글로벌 사이트의 데이터를 단일 Amazon S3 버킷으로 가능한 한 빠르게 모으려고 합니다. 솔루션은 운영 복잡성을 최소화해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?
> a) 대상 S3 버킷에서 S3 Transfer Acceleration을 켜고, 멀티파트 업로드로 각 사이트의 데이터를 대상 버킷에 직접 업로드한다
> b) 각 사이트의 데이터를 가장 가까운 리전의 S3 버킷에 업로드하고, S3 교차 리전 복제로 대상 버킷에 복사한 뒤 원본 버킷에서 데이터를 삭제한다
> c) 매일 AWS Snowball Edge Storage Optimized 디바이스 작업을 예약해 각 사이트에서 가장 가까운 리전으로 데이터를 전송하고, 교차 리전 복제로 대상 버킷에 복사한다
> d) 각 사이트의 데이터를 가장 가까운 리전의 EC2 인스턴스에 올려 EBS 볼륨에 저장하고, 주기적으로 스냅샷을 떠 대상 버킷이 있는 리전으로 복사한 뒤 볼륨을 복원한다
>> [!success]- Answer
>> a) 대상 S3 버킷에서 S3 Transfer Acceleration을 켜고, 멀티파트 업로드로 각 사이트의 데이터를 대상 버킷에 직접 업로드한다
>> **왜 이 답인가** — 사이트마다 **고속 인터넷이 이미 있고** 원거리 전송만 느립니다. Transfer Acceleration은 가까운 엣지로 받아 AWS 백본으로 실어 나르므로 켜기만 하면 되고, 큰 파일은 멀티파트가 병렬로 올립니다. 만들 인프라가 없어 운영 복잡성이 가장 낮습니다.
>> **나머지가 아닌 이유** — 리전별 버킷 + 복제는 버킷·복제 규칙·삭제 작업이 늘어 복잡합니다. Snowball은 디바이스를 실어 보내는 방식이라 **매일 들어오는 데이터**에는 느리고 번거롭습니다. EBS 스냅샷 경로는 목적지가 S3인데 블록 스토리지를 경유하는 우회로입니다.

<sub>관련: [[amazon-s3]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 데이터 센터에서 SMB 파일 서버를 운영합니다. 파일은 만들어진 뒤 며칠 동안 자주 액세스되지만 7일이 지나면 거의 액세스되지 않습니다. 전체 데이터 크기가 늘어 총 스토리지 용량에 근접했습니다. 최근 파일에 대한 짧은 지연 시간 액세스를 잃지 않으면서 가용 공간을 늘리고, 향후 문제를 막을 파일 수명 주기 관리도 제공해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Amazon S3 File Gateway를 만들어 스토리지 공간을 확장하고, S3 수명 주기 정책으로 7일 후 S3 Glacier Deep Archive로 전환한다
> b) AWS DataSync로 7일이 지난 데이터를 SMB 파일 서버에서 AWS로 복사한다
> c) Amazon FSx for Windows File Server 파일 시스템을 만들어 스토리지 공간을 확장한다
> d) 사용자 컴퓨터마다 S3 접근 유틸리티를 설치하고, 수명 주기 정책으로 7일 후 S3 Glacier Flexible Retrieval로 전환한다
>> [!success]- Answer
>> a) Amazon S3 File Gateway를 만들어 스토리지 공간을 확장하고, S3 수명 주기 정책으로 7일 후 S3 Glacier Deep Archive로 전환한다
>> **왜 이 답인가** — File Gateway는 SMB로 마운트되므로 사용 방식이 그대로이고, 최근 파일은 **로컬 캐시**에서 빠르게 나옵니다. `7일이 지나면`이라는 기간 조건은 수명 주기 정책을 가리킵니다.
>> **나머지가 아닌 이유** — DataSync는 복사 도구일 뿐 수명 주기 관리가 없습니다. FSx는 공간은 늘려 주지만 아카이브 전환이 자동이 아닙니다. 사용자 PC마다 유틸리티를 까는 방식은 기존 파일 접근 방식을 바꿔 버립니다.

<sub>관련: [[aws-storage-gateway]] [[amazon-s3-glacier]] | 모듈 [[11-cost-storage]]</sub>

> [!question] VPC의 EC2 인스턴스에서 실행되는 애플리케이션이 Amazon S3 버킷에 저장된 로그를 처리합니다. 이 인스턴스는 인터넷에 연결되지 않은 상태로 S3 버킷에 액세스해야 합니다. Amazon S3에 대한 프라이빗 네트워크 연결을 제공하는 솔루션은 무엇입니까?
> a) S3용 게이트웨이 VPC 엔드포인트를 만든다
> b) 로그를 Amazon CloudWatch Logs로 스트리밍한 뒤 S3 버킷으로 내보낸다
> c) S3 액세스를 허용하는 인스턴스 프로파일을 EC2에 만든다
> d) S3 엔드포인트에 접근하는 프라이빗 링크가 붙은 Amazon API Gateway API를 만든다
>> [!success]- Answer
>> a) S3용 게이트웨이 VPC 엔드포인트를 만든다
>> **왜 이 답인가** — S3와 DynamoDB 두 서비스만 **게이트웨이 엔드포인트**를 씁니다. 라우팅 테이블에 경로가 추가되어 트래픽이 인터넷을 타지 않고 S3로 갑니다.
>> **나머지가 아닌 이유** — 인스턴스 프로파일은 **권한**이지 경로가 아닙니다. 권한이 있어도 길이 없으면 닿지 못합니다. CloudWatch Logs 경유는 요구와 다른 이야기이고, API Gateway는 S3 프라이빗 접근용 도구가 아닙니다.

<sub>관련: [[amazon-vpc]] [[amazon-s3]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 분산 애플리케이션을 AWS로 마이그레이션합니다. 이 애플리케이션의 워크로드는 변동이 큽니다. 기존 플랫폼은 여러 컴퓨팅 노드에 작업을 배분하는 기본 서버 한 대로 구성되어 있습니다. 복원력과 확장성을 최대화하도록 현대화하려면 아키텍처를 어떻게 설계해야 합니까?
> a) 작업 대상으로 Amazon SQS 큐를 두고 컴퓨팅 노드는 Auto Scaling 그룹의 EC2 인스턴스로 구현한 뒤, **큐 길이를 기준으로** EC2 Auto Scaling을 구성한다
> b) 작업 대상으로 SQS 큐를 두고 컴퓨팅 노드는 Auto Scaling 그룹의 EC2로 구현한 뒤, 예약 조정(scheduled scaling)을 사용한다
> c) 기본 서버와 컴퓨팅 노드를 모두 Auto Scaling 그룹의 EC2로 구현하고 AWS CloudTrail을 작업 대상으로 구성한다
> d) 기본 서버와 컴퓨팅 노드를 모두 Auto Scaling 그룹의 EC2로 구현하고 Amazon EventBridge를 작업 대상으로 구성한다
>> [!success]- Answer
>> a) 작업 대상으로 Amazon SQS 큐를 두고 컴퓨팅 노드는 Auto Scaling 그룹의 EC2 인스턴스로 구현한 뒤, **큐 길이를 기준으로** EC2 Auto Scaling을 구성한다
>> **왜 이 답인가** — 큐가 작업을 보관해 주므로 조정 역할을 하던 기본 서버(단일 장애 지점)가 사라집니다. 그리고 **대기 중인 작업 수**야말로 지금 얼마나 더 필요한지를 직접 알려 주는 지표입니다.
>> **나머지가 아닌 이유** — 예약 조정은 변동이 큰 워크로드에 맞지 않습니다. CloudTrail은 감사 로그 서비스라 작업 대상이 될 수 없습니다. EventBridge를 쓰는 보기는 기본 서버를 그대로 남겨 두어 병목과 단일 장애 지점이 유지됩니다.

<sub>관련: [[amazon-sqs]] [[amazon-ec2-auto-scaling]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 자체 개발한 애플리케이션의 로그 파일을 분석해야 합니다. 로그는 JSON 형식으로 Amazon S3 버킷에 저장되어 있습니다. 쿼리는 단순하며 필요할 때만 실행됩니다. 솔루션스 아키텍트는 기존 아키텍처를 최소한으로 변경해 분석을 수행해야 합니다. 운영 오버헤드가 가장 적은 방법은 무엇입니까?
> a) Amazon Athena를 Amazon S3에 직접 연결해 필요할 때 쿼리를 실행한다
> b) Amazon Redshift로 모든 내용을 한곳에 적재하고 필요할 때 SQL 쿼리를 실행한다
> c) Amazon CloudWatch Logs에 로그를 저장하고 CloudWatch 콘솔에서 필요할 때 SQL 쿼리를 실행한다
> d) AWS Glue로 로그를 카탈로그화하고 Amazon EMR의 임시 Apache Spark 클러스터로 SQL 쿼리를 실행한다
>> [!success]- Answer
>> a) Amazon Athena를 Amazon S3에 직접 연결해 필요할 때 쿼리를 실행한다
>> **왜 이 답인가** — `S3에 이미 있는 파일`과 `가끔 돌리는 단순 쿼리`가 만나면 Athena입니다. 데이터를 옮기지 않고 서버도 없으며 스캔한 만큼만 냅니다.
>> **나머지가 아닌 이유** — Redshift와 EMR은 클러스터를 띄우고 적재해야 해서 `최소한의 변경`을 어깁니다. CloudWatch Logs 콘솔은 SQL 쿼리 엔진이 아닙니다.

<sub>관련: [[amazon-athena]] [[amazon-s3]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 솔루션스 아키텍트가 새 디지털 미디어 애플리케이션의 스토리지 아키텍처를 Amazon S3로 설계합니다. 미디어 파일은 가용 영역 하나가 사라져도 견뎌야 합니다. 어떤 파일은 자주 액세스되고 어떤 파일은 거의 액세스되지 않는데 **그 패턴을 예측할 수 없습니다.** 저장·검색 비용을 최소화해야 합니다. 어떤 스토리지 옵션이 요구 사항을 충족합니까?
> a) S3 Intelligent-Tiering
> b) S3 Standard
> c) S3 Standard-Infrequent Access(S3 Standard-IA)
> d) S3 One Zone-Infrequent Access(S3 One Zone-IA)
>> [!success]- Answer
>> a) S3 Intelligent-Tiering
>> **왜 이 답인가** — `액세스 패턴을 예측할 수 없다`가 Intelligent-Tiering의 신호입니다. 객체마다 실제 액세스를 보고 계층을 알아서 옮기며 검색 요금이 없습니다.
>> **나머지가 아닌 이유** — Standard는 거의 안 쓰는 파일에도 비쌉니다. Standard-IA는 자주 쓰는 파일에 검색 요금이 붙습니다. One Zone-IA는 AZ 하나에만 두므로 **가용 영역 손실에 견뎌야 한다**는 조건에서 곧바로 탈락합니다.

<sub>관련: [[amazon-s3]] | 모듈 [[11-cost-storage]]</sub>

> [!question] EC2 인스턴스에서 실행되는 애플리케이션이 Amazon Aurora 데이터베이스를 사용합니다. 인스턴스는 로컬 파일에 저장된 사용자 이름과 암호로 데이터베이스에 연결합니다. 이 기업은 자격 증명 관리의 운영 오버헤드를 최소화하려고 합니다. 무엇을 해야 합니까?
> a) AWS Secrets Manager를 사용하고 자동 교체를 켠다
> b) AWS Systems Manager Parameter Store를 사용하고 자동 교체를 켠다
> c) KMS 키로 암호화된 S3 버킷을 만들어 자격 증명 파일을 옮기고 애플리케이션이 그 버킷을 보게 한다
> d) 인스턴스마다 암호화된 EBS 볼륨을 붙여 자격 증명 파일을 옮기고 애플리케이션이 그 볼륨을 보게 한다
>> [!success]- Answer
>> a) AWS Secrets Manager를 사용하고 자동 교체를 켠다
>> **왜 이 답인가** — Secrets Manager는 **데이터베이스 자격 증명을 자동으로 교체**하는 기능을 내장하고 있습니다. RDS·Aurora와 통합되어 있어 켜기만 하면 됩니다.
>> **나머지가 아닌 이유** — Parameter Store는 값을 안전하게 보관하지만 **자동 교체 기능이 없습니다.** 이것이 두 서비스를 가르는 지점입니다. S3나 EBS로 파일을 옮기는 것은 자격 증명 파일을 다른 곳에 둔 것일 뿐 교체 문제는 그대로입니다.

<sub>관련: [[aws-secrets-manager]] [[aws-systems-manager]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 AWS에서 전자상거래 웹 애플리케이션을 구축합니다. 애플리케이션은 신규 주문 정보를 Amazon API Gateway REST API로 보내 처리합니다. 주문이 **접수된 순서대로** 처리되도록 보장하려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) API Gateway 통합으로 주문을 Amazon SQS FIFO 큐에 보내고, 그 큐가 AWS Lambda 함수를 호출해 처리하게 한다
> b) API Gateway 통합으로 Amazon SNS 주제에 메시지를 게시하고 Lambda 함수를 구독시켜 처리한다
> c) API Gateway 권한 부여자로 주문 처리 중에는 모든 요청을 차단한다
> d) API Gateway 통합으로 SQS 표준 큐에 메시지를 보내고 그 큐가 Lambda 함수를 호출해 처리하게 한다
>> [!success]- Answer
>> a) API Gateway 통합으로 주문을 Amazon SQS FIFO 큐에 보내고, 그 큐가 AWS Lambda 함수를 호출해 처리하게 한다
>> **왜 이 답인가** — `받은 순서대로`가 나오면 FIFO 큐입니다. 순서 보장과 중복 제거는 표준 큐에는 없고 FIFO에만 있습니다.
>> **나머지가 아닌 이유** — 표준 큐는 **최선 노력 순서**라 뒤바뀔 수 있습니다. SNS도 순서를 보장하지 않습니다. 처리 중 요청을 막는 방식은 주문을 잃는 설계입니다.

<sub>관련: [[amazon-sqs]] [[amazon-api-gateway]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 EC2 인스턴스 한 대로 웹 애플리케이션을 호스팅하며 사용자가 올린 문서를 EBS 볼륨에 저장합니다. 확장성과 가용성을 높이려고 다른 가용 영역에 EC2 인스턴스와 EBS 볼륨을 하나씩 더 만들고 둘을 Application Load Balancer 뒤에 두었습니다. 이후 사용자들이 새로 고칠 때마다 자기 문서의 일부만 보이고 전체가 한 번에 보이지 않는다고 신고했습니다. 무엇을 제안해야 합니까?
> a) 두 EBS 볼륨의 데이터를 Amazon EFS로 복사하고, 새 문서는 EFS에 저장하도록 애플리케이션을 수정한다
> b) 두 EBS 볼륨이 모두 전체 문서를 담도록 데이터를 복사한다
> c) 사용자를 자기 문서가 있는 서버로 보내도록 ALB를 구성한다
> d) ALB가 두 서버 모두에 요청을 보내고 올바른 서버에서 문서를 반환하게 구성한다
>> [!success]- Answer
>> a) 두 EBS 볼륨의 데이터를 Amazon EFS로 복사하고, 새 문서는 EFS에 저장하도록 애플리케이션을 수정한다
>> **왜 이 답인가** — 파일이 인스턴스마다 따로 있는 것이 원인입니다. 여러 인스턴스가 **같은 파일을 동시에** 봐야 하면 공유 파일 시스템, 즉 EFS입니다.
>> **나머지가 아닌 이유** — 한 번 복사해 두는 것은 새로 올라오는 문서에 대해 곧바로 다시 어긋납니다. 사용자를 한쪽 서버에 고정하면 증상만 가려지고 그 인스턴스가 죽으면 문서가 사라집니다. ALB는 요청을 두 서버에 동시에 보내 결과를 합치는 물건이 아닙니다.

<sub>관련: [[amazon-efs]] [[amazon-ebs]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 백업 파일을 S3 Standard에 저장합니다. 파일은 1개월 동안 자주 액세스되지만 그 이후에는 전혀 액세스되지 않습니다. 그러나 파일은 **기한 없이 보관**해야 합니다. 가장 비용 효율적인 스토리지 솔루션은 무엇입니까?
> a) S3 수명 주기 구성을 만들어 1개월 후 S3 Standard에서 S3 Glacier Deep Archive로 전환한다
> b) S3 Intelligent-Tiering을 구성해 객체를 자동으로 옮긴다
> c) S3 수명 주기 구성을 만들어 1개월 후 S3 Standard-IA로 전환한다
> d) S3 수명 주기 구성을 만들어 1개월 후 S3 One Zone-IA로 전환한다
>> [!success]- Answer
>> a) S3 수명 주기 구성을 만들어 1개월 후 S3 Standard에서 S3 Glacier Deep Archive로 전환한다
>> **왜 이 답인가** — `1개월 뒤에는 전혀 안 본다` + `영구 보관`이면 가장 싼 아카이브 계층인 Deep Archive입니다. 액세스 패턴이 이미 알려져 있으므로 기간 기반 수명 주기로 충분합니다.
>> **나머지가 아닌 이유** — Intelligent-Tiering은 패턴을 모를 때 쓰며 모니터링 요금이 붙습니다. Standard-IA와 One Zone-IA는 Deep Archive보다 훨씬 비쌉니다.

<sub>관련: [[amazon-s3]] [[amazon-s3-glacier]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 기업이 매달 AWS 인프라 유지 관리를 수행합니다. 이 작업 중 여러 AWS 리전에 걸친 Amazon RDS for MySQL 데이터베이스의 자격 증명을 교체해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 자격 증명을 AWS Secrets Manager에 보안 암호로 저장하고 필요한 리전으로 다중 리전 복제를 설정한 뒤, 일정에 따라 교체하도록 구성한다
> b) 자격 증명을 Systems Manager의 보안 문자열 파라미터로 저장하고 다중 리전 복제를 설정한 뒤 일정에 따라 교체하도록 구성한다
> c) 서버 측 암호화를 켠 S3 버킷에 자격 증명을 저장하고 EventBridge로 Lambda 함수를 호출해 교체한다
> d) KMS 다중 리전 고객 관리형 키로 자격 증명을 암호화해 DynamoDB 글로벌 테이블에 저장하고, Lambda가 꺼내 RDS API로 교체한다
>> [!success]- Answer
>> a) 자격 증명을 AWS Secrets Manager에 보안 암호로 저장하고 필요한 리전으로 다중 리전 복제를 설정한 뒤, 일정에 따라 교체하도록 구성한다
>> **왜 이 답인가** — Secrets Manager에는 **다중 리전 복제**와 **일정 기반 자동 교체**가 모두 기능으로 들어 있습니다. 만들 것이 없습니다.
>> **나머지가 아닌 이유** — Parameter Store에는 자동 교체가 없고 다중 리전 복제 기능도 없습니다. S3·Lambda나 DynamoDB·KMS 조합은 이미 있는 기능을 손으로 다시 만드는 일입니다.

<sub>관련: [[aws-secrets-manager]] [[amazon-rds]] | 모듈 [[01-secure-access]]</sub>

> [!question] 개발 팀이 큰 이미지를 작고 압축된 이미지로 변환하는 마이크로서비스를 설계합니다. 사용자가 웹 인터페이스로 이미지를 올리면 S3 버킷에 저장되고, AWS Lambda 함수가 이미지를 처리·압축해 다른 S3 버킷에 저장해야 합니다. 내구성 있고 상태를 갖지 않는 구성 요소로 이미지를 자동 처리하려면 어떤 조합이 필요합니까? (2개 선택)
> a) Amazon SQS 큐를 만들고, 이미지가 업로드되면 S3 버킷이 그 큐로 알림을 보내도록 구성한다
> b) Lambda 함수가 그 SQS 큐를 호출 소스로 사용하게 하고, 메시지 처리가 끝나면 큐에서 메시지를 삭제한다
> c) Lambda 함수가 S3 버킷을 감시하다가 새 업로드를 발견하면 메모리의 텍스트 파일에 파일 이름을 적어 처리 여부를 추적하게 한다
> d) EC2 인스턴스를 띄워 SQS 큐를 감시하다가 항목이 들어오면 인스턴스의 텍스트 파일에 기록하고 Lambda를 호출한다
>> [!success]- Answer
>> a) Amazon SQS 큐를 만들고, 이미지가 업로드되면 S3 버킷이 그 큐로 알림을 보내도록 구성한다
>> b) Lambda 함수가 그 SQS 큐를 호출 소스로 사용하게 하고, 메시지 처리가 끝나면 큐에서 메시지를 삭제한다
>> **왜 이 답인가** — S3 이벤트 알림 → SQS → Lambda 는 **상태를 어디에도 두지 않는** 표준 경로입니다. 처리 상태는 큐 자체가 들고 있고, 실패하면 메시지가 다시 보이므로 유실이 없습니다.
>> **나머지가 아닌 이유** — 메모리나 인스턴스의 텍스트 파일에 진행 상황을 적는 방식은 **상태를 갖는** 설계라 요구를 정면으로 어깁니다. 그 인스턴스나 실행 환경이 사라지면 기록도 사라집니다.

<sub>관련: [[amazon-sqs]] [[aws-lambda]] [[amazon-s3]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 온프레미스 NAS에 NFS로 대용량 비디오 파일을 저장합니다. 파일 하나의 크기는 1MB에서 500GB까지이며 총 용량은 70TB이고 더 늘지 않습니다. 이 파일들을 Amazon S3로 마이그레이션하되, **네트워크 대역폭을 가능한 한 적게 쓰면서 최대한 빨리** 옮겨야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) AWS Snowball Edge 작업을 생성해 디바이스를 받고, Snowball Edge 클라이언트로 데이터를 옮긴 뒤 디바이스를 반송해 AWS가 S3로 가져오게 한다
> b) S3 버킷과 쓰기 권한이 있는 IAM 역할을 만들고 AWS CLI로 모든 파일을 복사한다
> c) 온프레미스에 S3 File Gateway를 배포하고 퍼블릭 서비스 엔드포인트로 연결해 기존 NFS 공유의 데이터를 게이트웨이로 전송한다
> d) AWS Direct Connect를 구축하고 S3 File Gateway를 배포한 뒤 퍼블릭 가상 인터페이스로 연결해 데이터를 전송한다
>> [!success]- Answer
>> a) AWS Snowball Edge 작업을 생성해 디바이스를 받고, Snowball Edge 클라이언트로 데이터를 옮긴 뒤 디바이스를 반송해 AWS가 S3로 가져오게 한다
>> **왜 이 답인가** — `대역폭을 적게`와 `70TB`가 같이 나오면 Snow 계열입니다. 물리 디바이스로 실어 보내므로 네트워크를 **전혀 쓰지 않습니다.**
>> **나머지가 아닌 이유** — CLI 복사와 File Gateway 전송은 70TB를 전부 회선으로 밀어 넣습니다. Direct Connect는 회선을 새로 까는 데만 수 주가 걸려 `최대한 빨리`와 어긋나고, 일회성 이전을 위해 상시 회선을 사는 셈입니다.

<sub>관련: [[aws-snow-family]] [[amazon-s3]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 최근 청구서에서 Amazon EC2 비용 증가를 확인했습니다. 청구 팀은 일부 EC2 인스턴스에서 원치 않는 인스턴스 유형 수직 확장이 있었음을 알아냈습니다. 솔루션스 아키텍트는 최근 2개월의 EC2 비용을 비교하는 그래프를 만들고 근본 원인을 심층 분석해야 합니다. 운영 오버헤드가 가장 적은 방법은 무엇입니까?
> a) Cost Explorer의 세분화된 필터링 기능으로 인스턴스 유형별 EC2 비용을 심층 분석한다
> b) AWS Budgets로 예산 보고서를 만들어 인스턴스 유형별 EC2 비용을 비교한다
> c) AWS 청구 및 비용 관리 대시보드의 그래프로 최근 2개월 비용을 비교한다
> d) 비용 및 사용 보고서를 S3 버킷으로 보내고 QuickSight로 인스턴스 유형별 대화형 그래프를 만든다
>> [!success]- Answer
>> a) Cost Explorer의 세분화된 필터링 기능으로 인스턴스 유형별 EC2 비용을 심층 분석한다
>> **왜 이 답인가** — Cost Explorer는 **과거 비용을 그래프로 보고 태그·인스턴스 유형 등으로 잘라 보는** 도구입니다. 켜면 바로 쓸 수 있어 만들 것이 없습니다.
>> **나머지가 아닌 이유** — Budgets는 한도를 넘었는지 알리는 도구지 분석 도구가 아닙니다. 청구 대시보드는 요약만 보여 줍니다. CUR + QuickSight는 가능하지만 파이프라인을 직접 구성해야 해서 오버헤드가 가장 큽니다.

<sub>관련: [[aws-cost-explorer]] [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 최근 AWS로 마이그레이션한 기업이 프로덕션 VPC를 드나드는 트래픽을 보호하려고 합니다. 온프레미스 데이터 센터에는 트래픽 흐름 검사와 필터링 같은 특정 작업을 수행하는 검사 서버가 있었고, 같은 기능을 AWS 클라우드에서도 갖추려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) AWS Network Firewall로 프로덕션 VPC의 트래픽 검사·필터링 규칙을 만든다
> b) Amazon GuardDuty로 프로덕션 VPC의 트래픽을 검사하고 필터링한다
> c) 트래픽 미러링으로 프로덕션 VPC의 트래픽을 복제해 검사·필터링한다
> d) AWS Firewall Manager로 프로덕션 VPC의 트래픽 검사·필터링 규칙을 만든다
>> [!success]- Answer
>> a) AWS Network Firewall로 프로덕션 VPC의 트래픽 검사·필터링 규칙을 만든다
>> **왜 이 답인가** — VPC 경계에서 트래픽을 **검사하고 차단하는** 관리형 방화벽은 Network Firewall입니다. 온프레미스 검사 어플라이언스를 대체하는 자리입니다.
>> **나머지가 아닌 이유** — Firewall Manager는 방화벽 규칙을 **여러 계정에 걸쳐 중앙 관리**하는 도구이지 트래픽을 검사하는 물건이 아닙니다. 이름 때문에 가장 많이 걸리는 함정입니다. GuardDuty는 탐지만 하고 차단하지 않으며, 트래픽 미러링은 복사본을 보낼 뿐 필터링을 하지 않습니다.

<sub>관련: [[aws-network-firewall]] [[aws-firewall-manager]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 전자상거래 기업이 하루에 한 가지 상품만 24시간 동안 파는 웹사이트를 AWS에 출시하려고 합니다. 피크 시간에는 시간당 수백만 건의 요청을 밀리초 지연 시간으로 처리해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 정적 콘텐츠는 S3 버킷에 두고 CloudFront 배포의 오리진으로 지정하며, 백엔드 API는 API Gateway와 Lambda로, 데이터는 DynamoDB에 저장한다
> b) 웹사이트 전체를 여러 S3 버킷에 나눠 호스팅하고 CloudFront 배포를 붙이며, 주문 데이터도 S3에 저장한다
> c) 여러 AZ의 Auto Scaling 그룹 EC2에 사이트 전체를 배포하고 ALB를 웹과 백엔드에 각각 두며 데이터는 RDS for MySQL에 저장한다
> d) 애플리케이션 전체를 컨테이너로 옮겨 Amazon EKS에 올리고 Kubernetes Cluster Autoscaler로 파드 수를 조정하며 데이터는 RDS for MySQL에 저장한다
>> [!success]- Answer
>> a) 정적 콘텐츠는 S3 버킷에 두고 CloudFront 배포의 오리진으로 지정하며, 백엔드 API는 API Gateway와 Lambda로, 데이터는 DynamoDB에 저장한다
>> **왜 이 답인가** — 서버가 하나도 없는 조합입니다. 정적은 엣지에서, API는 관리형 서버리스로, 데이터는 **밀리초 지연을 보장하는** DynamoDB로 받습니다. 급증을 사람이 손대지 않고 흡수합니다.
>> **나머지가 아닌 이유** — 주문 데이터를 S3에 넣는 것은 데이터베이스가 필요한 자리에 객체 스토리지를 쓰는 것입니다. EC2·EKS 구성은 클러스터와 인스턴스를 운영해야 해서 오버헤드가 큽니다.

<sub>관련: [[amazon-dynamodb]] [[aws-lambda]] [[amazon-cloudfront]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 글로벌 기업이 Application Load Balancer 뒤의 EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 이 애플리케이션에는 정적 데이터와 동적 데이터가 있으며 정적 데이터는 S3 버킷에 저장합니다. 정적·동적 데이터 모두에 대해 성능을 높이고 지연 시간을 줄이려고 하며, 도메인 이름은 Amazon Route 53에 등록되어 있습니다. 무엇을 해야 합니까?
> a) S3 버킷과 ALB를 모두 오리진으로 갖는 CloudFront 배포를 만들고, Route 53이 CloudFront 배포로 트래픽을 보내게 한다
> b) ALB를 오리진으로 하는 CloudFront 배포를 만들고, S3 버킷을 엔드포인트로 갖는 Global Accelerator를 만든 뒤 Route 53이 CloudFront로 보내게 한다
> c) S3 버킷을 오리진으로 하는 CloudFront 배포를 만들고, ALB와 그 배포를 엔드포인트로 갖는 Global Accelerator를 만들어 사용자 지정 도메인을 연결한다
> d) ALB를 오리진으로 하는 CloudFront 배포와 S3를 엔드포인트로 하는 Global Accelerator를 만들고, 도메인 이름을 두 개 만들어 정적·동적을 나눠 가리킨다
>> [!success]- Answer
>> a) S3 버킷과 ALB를 모두 오리진으로 갖는 CloudFront 배포를 만들고, Route 53이 CloudFront 배포로 트래픽을 보내게 한다
>> **왜 이 답인가** — CloudFront는 오리진을 여러 개 두고 **경로별로 갈라 보낼 수 있습니다.** 정적은 S3에서, 동적은 ALB에서 가져오되 사용자는 엣지 한 곳만 봅니다. 동적 콘텐츠도 엣지까지의 연결 재사용과 AWS 백본 경로로 빨라집니다.
>> **나머지가 아닌 이유** — Global Accelerator는 S3를 엔드포인트로 두는 서비스가 아니며, 캐싱을 하지 않습니다. 도메인을 둘로 나누는 보기는 애플리케이션과 운영을 쓸데없이 쪼갭니다.

<sub>관련: [[amazon-cloudfront]] [[amazon-route-53]] | 모듈 [[09-perf-network]]</sub>

> [!question] 개발 팀이 Performance Insights를 켠 범용 Amazon RDS for MySQL DB 인스턴스에서 매달 리소스를 많이 쓰는 테스트를 수행합니다. 테스트는 한 달에 한 번 48시간 동안 진행되며 이 데이터베이스를 쓰는 유일한 작업입니다. **DB 인스턴스의 컴퓨팅·메모리 속성을 낮추지 않으면서** 비용을 줄이려고 합니다. 가장 비용 효율적인 방법은 무엇입니까?
> a) 테스트가 끝나면 DB 인스턴스를 중지하고 필요할 때 다시 시작한다
> b) DB 인스턴스에 Auto Scaling 정책을 적용해 테스트가 끝나면 자동으로 조정한다
> c) 테스트가 끝나면 스냅샷을 만들고 인스턴스를 종료했다가 필요할 때 복원한다
> d) 테스트가 끝나면 저용량 인스턴스로 변경하고 필요할 때 다시 변경한다
>> [!success]- Answer
>> a) 테스트가 끝나면 DB 인스턴스를 중지하고 필요할 때 다시 시작한다
>> **왜 이 답인가** — RDS는 **중지하면 인스턴스 시간 요금이 멈춥니다**(스토리지 요금만 남습니다). 인스턴스 크기를 그대로 두라는 조건도 지킬 수 있고 조작이 가장 단순합니다.
>> **나머지가 아닌 이유** — 인스턴스 유형을 바꾸는 보기는 `컴퓨팅·메모리를 낮추지 않는다`는 조건을 정면으로 어깁니다. 종료 후 복원은 매번 복원 시간이 들고 실수 여지가 큽니다. RDS 인스턴스 자체에는 Auto Scaling이 없습니다(스토리지 자동 조정은 별개).

<sub>관련: [[amazon-rds]] | 모듈 [[13-cost-database]]</sub>

> [!question] 한 기업이 새 업무 애플리케이션을 도입합니다. 애플리케이션은 EC2 인스턴스 두 대에서 실행되며 문서 저장에 S3 버킷을 사용합니다. 솔루션스 아키텍트는 EC2 인스턴스가 S3 버킷에 액세스할 수 있게 해야 합니다. 무엇을 해야 합니까?
> a) S3 버킷 액세스를 부여하는 IAM 역할을 만들어 EC2 인스턴스에 연결한다
> b) S3 버킷 액세스를 부여하는 IAM 정책을 만들어 EC2 인스턴스에 직접 연결한다
> c) S3 버킷 액세스를 부여하는 IAM 그룹을 만들어 EC2 인스턴스에 연결한다
> d) S3 버킷 액세스를 부여하는 IAM 사용자를 만들어 EC2 인스턴스에 계정을 연결한다
>> [!success]- Answer
>> a) S3 버킷 액세스를 부여하는 IAM 역할을 만들어 EC2 인스턴스에 연결한다
>> **왜 이 답인가** — AWS 리소스에 권한을 주는 방법은 **역할**입니다. 인스턴스는 역할에서 임시 자격 증명을 받아 쓰고 자동으로 갱신되므로 키를 심을 필요가 없습니다.
>> **나머지가 아닌 이유** — 정책은 역할·사용자·그룹에 붙는 것이지 인스턴스에 직접 붙지 않습니다. 그룹은 사용자를 묶는 상자이고, 사용자 계정을 인스턴스에 붙이는 것은 액세스 키를 심는 방식이라 권장되지 않습니다.

<sub>관련: [[aws-iam]] [[amazon-ec2]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 애플리케이션을 설계합니다. AWS Lambda 함수가 Amazon API Gateway로 정보를 받아 Amazon Aurora PostgreSQL 데이터베이스에 저장합니다. 개념 증명 단계에서 대량 데이터를 적재하느라 Lambda 할당량을 크게 늘려야 했습니다. 확장성을 개선하고 구성 작업을 최소화하는 새 설계는 무엇입니까?
> a) Lambda 함수를 둘로 나눠 하나는 정보를 받고 다른 하나는 데이터베이스에 적재하게 하며, 두 함수를 Amazon SQS 큐로 연결한다
> b) Lambda 함수를 둘로 나누고 두 함수를 Amazon SNS로 연결한다
> c) Lambda 코드를 EC2에서 도는 Apache Tomcat 코드로 리팩터링하고 JDBC 드라이버로 데이터베이스에 연결한다
> d) 플랫폼을 Aurora에서 DynamoDB로 바꾸고 DAX 클러스터를 프로비저닝해 기존 API 호출을 DAX로 향하게 한다
>> [!success]- Answer
>> a) Lambda 함수를 둘로 나눠 하나는 정보를 받고 다른 하나는 데이터베이스에 적재하게 하며, 두 함수를 Amazon SQS 큐로 연결한다
>> **왜 이 답인가** — 문제는 **받는 속도와 넣는 속도가 다르다**는 것입니다. 사이에 큐를 두면 급증분이 큐에 쌓이고 적재 함수는 자기 속도로 꺼내 갑니다. 할당량을 억지로 올릴 필요가 없어집니다.
>> **나머지가 아닌 이유** — SNS는 저장하지 않고 즉시 밀어내므로 완충 효과가 없습니다. EC2로 되돌리는 것은 확장성을 포기하는 것이고, 데이터베이스 종류를 바꾸는 것은 요구에 없는 큰 변경입니다.

<sub>관련: [[amazon-sqs]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 Application Load Balancer 뒤 여러 가용 영역의 Auto Scaling 그룹에서 전자상거래 애플리케이션을 실행합니다. 트랜잭션 데이터는 대형 EC2 인스턴스에 올린 MySQL 8.0 데이터베이스에 저장합니다. 부하가 늘면 데이터베이스 성능이 빠르게 나빠지며, 애플리케이션은 쓰기보다 읽기 요청이 훨씬 많습니다. 예측할 수 없는 읽기 워크로드에 맞춰 **자동으로 확장되면서 고가용성도 유지되는** 솔루션이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 다중 AZ로 Amazon Aurora를 배포하고 Aurora 복제본에 대해 Aurora Auto Scaling을 구성한다
> b) 단일 AZ로 Amazon RDS를 배포하고 다른 가용 영역에 읽기 인스턴스를 추가하도록 구성한다
> c) 리더와 컴퓨팅을 겸하는 단일 노드로 Amazon Redshift를 사용한다
> d) EC2 스팟 인스턴스와 함께 Amazon ElastiCache for Memcached를 사용한다
>> [!success]- Answer
>> a) 다중 AZ로 Amazon Aurora를 배포하고 Aurora 복제본에 대해 Aurora Auto Scaling을 구성한다
>> **왜 이 답인가** — 요구가 셋입니다 — **읽기 확장**(복제본), **자동**(Aurora Auto Scaling), **고가용성**(다중 AZ). 세 가지를 한 번에 만족하는 것은 Aurora뿐입니다.
>> **나머지가 아닌 이유** — 단일 AZ 배포는 고가용성 조건에서 탈락합니다. Redshift는 분석용 데이터 웨어하우스이고, 단일 노드는 고가용성이 없습니다. Memcached는 캐시일 뿐 데이터베이스를 대체하지 않습니다.

<sub>관련: [[amazon-aurora]] [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 개발 팀이 다른 팀들이 접속할 웹사이트를 호스팅해야 합니다. 웹사이트 콘텐츠는 HTML, CSS, 클라이언트 측 JavaScript, 이미지로만 이루어져 있습니다. 가장 비용 효율적인 호스팅 방법은 무엇입니까?
> a) Amazon S3 버킷을 만들어 정적 웹사이트로 호스팅한다
> b) 웹사이트를 컨테이너로 만들어 AWS Fargate에서 호스팅한다
> c) EC2 인스턴스에 웹 서버를 배포해 호스팅한다
> d) Express.js를 쓰는 AWS Lambda 대상을 Application Load Balancer에 구성한다
>> [!success]- Answer
>> a) Amazon S3 버킷을 만들어 정적 웹사이트로 호스팅한다
>> **왜 이 답인가** — 서버 측 코드가 전혀 없는 **완전한 정적 사이트**입니다. S3 정적 웹사이트 호스팅은 서버가 없어 저장 용량과 요청 수만큼만 냅니다.
>> **나머지가 아닌 이유** — Fargate·EC2·ALB는 모두 **상시 실행되는 컴퓨팅과 시간당 요금**을 만듭니다. 정적 파일을 내려 주는 데 필요 없는 비용입니다.

<sub>관련: [[amazon-s3]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업의 3계층 웹 애플리케이션이 AWS에 배포되어 있습니다. 웹 서버는 VPC의 퍼블릭 서브넷에, 애플리케이션 서버와 데이터베이스 서버는 같은 VPC의 프라이빗 서브넷에 있습니다. 이 기업은 AWS Marketplace의 서드파티 가상 방화벽 어플라이언스를 검사용 VPC에 배포했으며, 이 어플라이언스는 IP 패킷을 받을 수 있는 IP 인터페이스로 구성되어 있습니다. 트래픽이 웹 서버에 닿기 전에 모두 검사되게 하려면, 운영 오버헤드가 가장 적은 방법은 무엇입니까?
> a) 검사용 VPC에 Gateway Load Balancer를 배포하고, 들어오는 패킷을 받아 어플라이언스로 전달하는 Gateway Load Balancer 엔드포인트를 만든다
> b) 애플리케이션 VPC의 퍼블릭 서브넷에 Network Load Balancer를 만들어 어플라이언스로 트래픽을 보낸다
> c) 애플리케이션 VPC의 퍼블릭 서브넷에 Application Load Balancer를 만들어 어플라이언스로 트래픽을 보낸다
> d) 검사용 VPC에 전송 게이트웨이를 배포하고 라우팅 테이블을 구성해 패킷이 전송 게이트웨이를 거치게 한다
>> [!success]- Answer
>> a) 검사용 VPC에 Gateway Load Balancer를 배포하고, 들어오는 패킷을 받아 어플라이언스로 전달하는 Gateway Load Balancer 엔드포인트를 만든다
>> **왜 이 답인가** — GWLB는 **서드파티 검사 어플라이언스를 트래픽 경로에 투명하게 끼워 넣기 위해** 만들어진 로드 밸런서입니다. GWLB 엔드포인트가 VPC 사이의 진입점 역할을 합니다.
>> **나머지가 아닌 이유** — ALB·NLB는 트래픽을 **분산**하는 물건이라 검사 장비를 경로에 삽입하는 구조가 아닙니다. 전송 게이트웨이는 네트워크를 연결할 뿐 패킷을 어플라이언스로 밀어 넣지 않아 라우팅을 손으로 짜야 합니다.

<sub>관련: [[elastic-load-balancing]] [[amazon-vpc]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업의 데이터 수집 워크플로는 새 데이터 도착을 알리는 **Amazon SNS 주제**와 데이터를 처리해 메타데이터를 기록하는 **AWS Lambda 함수**로 구성됩니다. 네트워크 연결 문제로 수집이 가끔 실패하는데, 그러면 수동으로 작업을 다시 돌리지 않는 한 해당 데이터가 수집되지 않습니다. 앞으로 모든 데이터가 수집되게 하려면 어떤 조합이 필요합니까? (2개 선택)
> a) Amazon SQS 큐를 만들어 SNS 주제를 구독시킨다
> b) Lambda 함수가 그 SQS 큐에서 읽도록 수정한다
> c) Lambda 함수를 여러 가용 영역에 배포한다
> d) Lambda 함수에 할당된 CPU와 메모리를 늘린다
>> [!success]- Answer
>> a) Amazon SQS 큐를 만들어 SNS 주제를 구독시킨다
>> b) Lambda 함수가 그 SQS 큐에서 읽도록 수정한다
>> **왜 이 답인가** — SNS는 알림을 밀어 보내고 **끝**입니다. 받는 쪽이 실패하면 그 알림은 사라집니다. 사이에 큐를 끼우면 처리에 성공할 때까지 메시지가 큐에 남아 다시 시도됩니다.
>> **나머지가 아닌 이유** — Lambda는 이미 여러 AZ에서 실행되므로 배포 위치를 바꿀 것이 없습니다. CPU·메모리는 **함수 하나의 속도**를 바꿀 뿐 유실 문제와 무관합니다.

<sub>관련: [[amazon-sqs]] [[amazon-sns]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 AWS에 데이터 레이크를 두고 있으며 데이터는 Amazon S3와 Amazon RDS for PostgreSQL에 나뉘어 있습니다. 데이터 레이크의 모든 원본을 포함하는 시각화 보고 솔루션이 필요합니다. 경영진만 모든 시각화에 대한 전체 액세스 권한을 가져야 하고 나머지 직원은 제한된 액세스만 가져야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Amazon QuickSight에서 분석을 만들어 모든 데이터 원본을 연결하고 대시보드를 게시한 뒤, 적절한 **사용자와 그룹**에 공유한다
> b) QuickSight에서 대시보드를 만들어 적절한 **IAM 역할**에 공유한다
> c) S3 데이터에 Glue 테이블과 크롤러를 만들고 ETL 작업으로 보고서를 생성해 S3에 게시한 뒤 버킷 정책으로 액세스를 제한한다
> d) Glue 테이블과 크롤러를 만들고 Athena 연합 쿼리로 RDS 데이터에 접근해 보고서를 만들어 S3에 게시한 뒤 버킷 정책으로 제한한다
>> [!success]- Answer
>> a) Amazon QuickSight에서 분석을 만들어 모든 데이터 원본을 연결하고 대시보드를 게시한 뒤, 적절한 **사용자와 그룹**에 공유한다
>> **왜 이 답인가** — QuickSight는 여러 원본을 붙여 대시보드를 만드는 BI 서비스이고, 공유는 **QuickSight 사용자·그룹 단위**로 합니다. 이 문항은 "공유 대상이 무엇인가"를 묻습니다.
>> **나머지가 아닌 이유** — QuickSight 대시보드는 IAM 역할에 공유하는 것이 아닙니다. Glue·Athena로 보고서 파일을 만들어 버킷에 두는 방식은 **시각화**가 아니라 파일 배포입니다.

<sub>관련: [[amazon-quicksight]] [[amazon-athena]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 한 기업이 단일 VPC의 EC2 인스턴스에서 고가용성 이미지 처리 애플리케이션을 운영합니다. 인스턴스는 여러 가용 영역의 여러 서브넷에 있으며 서로 통신하지 않지만, **NAT 게이트웨이 하나를 통해** S3에서 이미지를 내려받고 올립니다. 이 기업은 데이터 전송 요금을 걱정합니다. 리전 내 데이터 전송 요금을 피하는 가장 비용 효율적인 방법은 무엇입니까?
> a) Amazon S3용 게이트웨이 VPC 엔드포인트를 배포한다
> b) 가용 영역마다 NAT 게이트웨이를 배포한다
> c) NAT 게이트웨이를 NAT 인스턴스로 교체한다
> d) EC2 전용 호스트를 프로비저닝해 인스턴스를 실행한다
>> [!success]- Answer
>> a) Amazon S3용 게이트웨이 VPC 엔드포인트를 배포한다
>> **왜 이 답인가** — 게이트웨이 엔드포인트는 **추가 요금이 없습니다.** S3 트래픽이 NAT 게이트웨이를 거치지 않게 되어 NAT 처리 요금과 데이터 전송 요금이 함께 사라집니다.
>> **나머지가 아닌 이유** — NAT 게이트웨이를 AZ마다 두면 AZ 간 요금은 줄지만 게이트웨이 요금이 늘어납니다. NAT 인스턴스는 관리 부담이 생기고 여전히 트래픽이 그 길로 갑니다. 전용 호스트는 데이터 전송과 무관합니다.

<sub>관련: [[amazon-vpc]] [[amazon-s3]] | 모듈 [[14-cost-network]]</sub>

> [!question] 한 기업이 AWS 클라우드 배포를 검토해 S3 버킷에 **승인되지 않은 구성 변경**이 없는지 확인해야 합니다. 무엇을 해야 합니까?
> a) 적절한 규칙과 함께 AWS Config를 켠다
> b) 적절한 검사와 함께 AWS Trusted Advisor를 켠다
> c) 적절한 평가 템플릿과 함께 Amazon Inspector를 켠다
> d) S3 서버 액세스 로깅을 켜고 Amazon EventBridge를 구성한다
>> [!success]- Answer
>> a) 적절한 규칙과 함께 AWS Config를 켠다
>> **왜 이 답인가** — Config는 **리소스 구성이 시간에 따라 어떻게 바뀌었는지 기록하고, 규칙에 어긋나는 구성을 잡아내는** 서비스입니다. `구성 변경`이 나오면 Config입니다.
>> **나머지가 아닌 이유** — Trusted Advisor는 일반적인 모범 사례 점검이라 세밀한 규칙을 정의할 수 없습니다. Inspector는 EC2·컨테이너의 취약점을 봅니다. 액세스 로깅은 **누가 객체를 읽었는지**를 남길 뿐 구성 변경과 다릅니다.

<sub>관련: [[aws-config]] [[amazon-s3]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업의 웹사이트가 항목 카탈로그를 **EC2 인스턴스 스토어**에 저장합니다. 카탈로그가 고가용성을 갖고 내구성 있는 위치에 저장되게 하려면 무엇을 해야 합니까?
> a) 카탈로그를 Amazon EFS 파일 시스템으로 옮긴다
> b) 카탈로그를 Amazon ElastiCache for Redis로 옮긴다
> c) 인스턴스 스토어가 더 큰 대형 EC2 인스턴스를 배포한다
> d) 카탈로그를 인스턴스 스토어에서 S3 Glacier Deep Archive로 옮긴다
>> [!success]- Answer
>> a) 카탈로그를 Amazon EFS 파일 시스템으로 옮긴다
>> **왜 이 답인가** — 인스턴스 스토어는 인스턴스가 멈추면 **사라지는** 임시 저장소입니다. 파일 형태를 유지하면서 여러 AZ에 걸쳐 내구성과 가용성을 얻으려면 EFS가 맞습니다.
>> **나머지가 아닌 이유** — 인스턴스 스토어를 키우는 것은 휘발성 문제를 그대로 둡니다. ElastiCache는 캐시라 원본 저장소가 아닙니다. Deep Archive는 조회에 시간이 걸려 웹사이트 카탈로그에 쓸 수 없습니다.

<sub>관련: [[amazon-efs]] [[amazon-ec2]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 프로덕션 데이터를 같은 리전의 테스트 환경으로 복제하는 능력을 개선하려고 합니다. 데이터는 EC2 인스턴스의 EBS 볼륨에 있습니다. 복제본을 수정해도 프로덕션에 영향이 없어야 하고, 이 데이터를 쓰는 소프트웨어는 **일관되게 높은 I/O 성능**을 요구합니다. 복제에 걸리는 시간을 최소화하려면 어떤 솔루션이 적합합니까?
> a) 프로덕션 EBS 볼륨의 스냅샷을 뜨고 **빠른 스냅샷 복원**을 켠 뒤, 스냅샷에서 새 볼륨을 만들어 테스트 인스턴스에 연결한다
> b) 스냅샷을 뜬 뒤 테스트 환경의 인스턴스 스토어 볼륨으로 복원한다
> c) 프로덕션 볼륨에 EBS 다중 연결을 켜고 스냅샷을 뜬 뒤, 프로덕션 볼륨을 테스트 인스턴스에도 연결한다
> d) 스냅샷을 뜨고 새 EBS 볼륨을 만들어 초기화한 뒤, 테스트 인스턴스에 연결하고 나서 스냅샷에서 복원한다
>> [!success]- Answer
>> a) 프로덕션 EBS 볼륨의 스냅샷을 뜨고 **빠른 스냅샷 복원**을 켠 뒤, 스냅샷에서 새 볼륨을 만들어 테스트 인스턴스에 연결한다
>> **왜 이 답인가** — 스냅샷에서 만든 볼륨은 원래 블록을 처음 읽을 때 S3에서 가져오느라 느립니다(초기화 지연). **빠른 스냅샷 복원(FSR)**은 이 지연을 없애 생성 직후부터 제 성능을 냅니다.
>> **나머지가 아닌 이유** — 인스턴스 스토어는 인스턴스가 멈추면 사라지는 임시 저장소입니다. 프로덕션 볼륨을 테스트에 연결하는 것은 프로덕션에 영향이 없어야 한다는 조건을 어깁니다. 손으로 초기화하는 방식은 바로 그 느린 과정을 사람이 대신 하는 것입니다.

<sub>관련: [[amazon-ebs]] [[amazon-ec2]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 1주일 동안 열리는 행사를 위해 **특정 리전의 특정 가용 영역 세 곳**에서 EC2 용량을 보장받아야 합니다. 용량을 보장하려면 무엇을 해야 합니까?
> a) 필요한 리전과 세 가용 영역을 지정하는 온디맨드 용량 예약을 생성한다
> b) 필요한 리전을 지정하는 온디맨드 용량 예약을 생성한다
> c) 필요한 리전을 지정하는 예약 인스턴스를 구매한다
> d) 필요한 리전과 세 가용 영역을 지정하는 예약 인스턴스를 구매한다
>> [!success]- Answer
>> a) 필요한 리전과 세 가용 영역을 지정하는 온디맨드 용량 예약을 생성한다
>> **왜 이 답인가** — **용량 보장**은 온디맨드 용량 예약의 몫이고, 보장은 **가용 영역 단위로** 이뤄집니다. 1주일짜리 행사이므로 언제든 취소할 수 있는 이 방식이 맞습니다.
>> **나머지가 아닌 이유** — 리전만 지정한 예약은 특정 AZ의 용량을 보장하지 않습니다. 예약 인스턴스는 1년·3년 약정으로 **요금 할인**을 받는 수단이며, 1주일 행사에 맞지 않습니다.

<sub>관련: [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업이 새 애플리케이션을 출시하며 지표를 Amazon CloudWatch 대시보드에 표시합니다. 제품 관리자가 이 대시보드를 주기적으로 봐야 하는데 **AWS 계정이 없습니다.** 최소 권한 원칙에 따라 액세스를 제공하려면 어떻게 해야 합니까?
> a) CloudWatch 콘솔에서 대시보드를 공유하고 제품 관리자의 이메일 주소를 입력해 공유 절차를 마친 뒤, 공유 링크를 전달한다
> b) 제품 관리자 전용 IAM 사용자를 만들어 `CloudWatchReadOnlyAccess` 정책을 붙이고 로그인 자격 증명과 대시보드 URL을 전달한다
> c) 직원용 IAM 사용자를 만들어 `ViewOnlyAccess` 정책을 붙이고 자격 증명을 공유해 콘솔에서 대시보드를 찾게 한다
> d) 퍼블릭 서브넷에 배스천 서버를 두고 필요할 때 RDP 자격 증명을 공유해 그 서버의 브라우저로 대시보드를 열게 한다
>> [!success]- Answer
>> a) CloudWatch 콘솔에서 대시보드를 공유하고 제품 관리자의 이메일 주소를 입력해 공유 절차를 마친 뒤, 공유 링크를 전달한다
>> **왜 이 답인가** — CloudWatch에는 **계정이 없는 사람에게 대시보드 하나만 공유하는 기능**이 이미 있습니다. 보여 줄 대상이 그 대시보드 하나뿐이므로 최소 권한에도 가장 잘 맞습니다.
>> **나머지가 아닌 이유** — IAM 사용자를 만들어 주는 방식은 계정을 새로 발급하는 것이고 읽기 권한이 대시보드 밖으로까지 넓어집니다. 배스천 서버는 과한 데다 자격 증명을 공유하게 만듭니다.

<sub>관련: [[amazon-cloudwatch]] [[aws-iam]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 REST API로 조회하는 주문 배송 통계 애플리케이션을 개발합니다. 배송 통계를 추출해 읽기 쉬운 HTML 형식으로 정리한 뒤 **매일 아침 같은 시각에 여러 이메일 주소로** 보고서를 보내려고 합니다. 어떤 조합이 필요합니까? (2개 선택)
> a) 애플리케이션 API에서 데이터를 조회하는 AWS Lambda 함수를 Amazon EventBridge 예약 이벤트로 호출한다
> b) Amazon Simple Email Service(Amazon SES)로 데이터를 형식화해 이메일로 보고서를 보낸다
> c) 애플리케이션이 데이터를 Kinesis Data Firehose로 보내게 한다
> d) 애플리케이션 데이터를 S3에 저장하고 S3 이벤트 대상으로 SNS 주제를 만들어 이메일로 보고서를 보낸다
>> [!success]- Answer
>> a) 애플리케이션 API에서 데이터를 조회하는 AWS Lambda 함수를 Amazon EventBridge 예약 이벤트로 호출한다
>> b) Amazon Simple Email Service(Amazon SES)로 데이터를 형식화해 이메일로 보고서를 보낸다
>> **왜 이 답인가** — `매일 같은 시각`은 EventBridge 예약 규칙, `API에서 데이터 조회`는 Lambda, `HTML 서식의 이메일 발송`은 SES입니다. 세 조각이 각자 자리를 정확히 채웁니다.
>> **나머지가 아닌 이유** — SNS 이메일은 **서식 없는 텍스트 알림**이라 HTML 보고서에 맞지 않습니다. Firehose는 스트리밍 적재용이라 이 요구와 무관합니다.

<sub>관련: [[amazon-eventbridge]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 UDP 연결을 사용하는 VoIP 서비스를 제공합니다. 서비스는 Auto Scaling 그룹의 EC2 인스턴스로 구성되며 여러 AWS 리전에 배포되어 있습니다. 사용자를 **지연 시간이 가장 낮은 리전으로 라우팅**하고 리전 간 자동 장애 조치도 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Network Load Balancer와 대상 그룹을 배포해 Auto Scaling 그룹과 연결하고, 각 리전의 NLB를 AWS Global Accelerator 엔드포인트로 사용한다
> b) Application Load Balancer와 대상 그룹을 배포하고 각 리전의 ALB를 Global Accelerator 엔드포인트로 사용한다
> c) NLB를 배포하고 Route 53 지연 시간 레코드가 각 NLB 별칭을 가리키게 한 뒤, 그 레코드를 오리진으로 하는 CloudFront 배포를 만든다
> d) ALB를 배포하고 Route 53 가중치 기반 레코드가 각 ALB를 가리키게 한 뒤 CloudFront 배포를 만든다
>> [!success]- Answer
>> a) Network Load Balancer와 대상 그룹을 배포해 Auto Scaling 그룹과 연결하고, 각 리전의 NLB를 AWS Global Accelerator 엔드포인트로 사용한다
>> **왜 이 답인가** — `UDP`가 나오면 ALB와 CloudFront는 곧바로 탈락합니다(둘 다 HTTP 계열). UDP를 받는 것은 NLB이고, **가장 가까운 리전으로 보내고 장애 시 자동으로 넘기는** 것은 Global Accelerator입니다.
>> **나머지가 아닌 이유** — ALB는 UDP를 처리하지 못합니다. Route 53 기반 보기는 DNS 캐시 때문에 장애 조치가 느리고, CloudFront는 UDP 트래픽용이 아닙니다.

<sub>관련: [[aws-global-accelerator]] [[elastic-load-balancing]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 통화 녹취 파일을 매월 저장합니다. 사용자는 통화 후 1년 이내 파일을 무작위로 액세스하지만 1년이 지나면 거의 액세스하지 않습니다. **1년 미만 파일은 가능한 한 빠르게 조회·검색**할 수 있어야 하고 오래된 파일의 조회 지연은 허용됩니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) 파일을 S3 Intelligent-Tiering에 저장하고 수명 주기 정책으로 1년 후 S3 Glacier Flexible Retrieval로 옮기며, S3에 있는 파일은 Athena로 조회한다
> b) 파일에 태그를 붙여 S3 Glacier Instant Retrieval에 저장하고 태그로 조회한다
> c) 파일을 S3 Standard에 두고 검색 메타데이터도 S3 Standard에 저장한 뒤, 1년 후 S3 Glacier Instant Retrieval로 옮긴다
> d) 파일을 S3 Standard에 두고 1년 후 Glacier Deep Archive로 옮기며, 검색 메타데이터는 Amazon RDS에 저장한다
>> [!success]- Answer
>> a) 파일을 S3 Intelligent-Tiering에 저장하고 수명 주기 정책으로 1년 후 S3 Glacier Flexible Retrieval로 옮기며, S3에 있는 파일은 Athena로 조회한다
>> **왜 이 답인가** — 1년 안쪽은 **액세스 패턴이 무작위**라 Intelligent-Tiering이 알아서 계층을 맞춰 줍니다. 1년 뒤에는 지연이 허용되므로 더 싼 Flexible Retrieval로 내립니다. 조회는 Athena가 맡습니다.
>> **나머지가 아닌 이유** — 처음부터 Glacier에 넣으면 1년 안쪽의 빠른 조회 요구를 만족하기 어렵습니다. 메타데이터 저장을 위해 RDS를 따로 두는 것은 비용과 운영이 늘어납니다.

<sub>관련: [[amazon-s3]] [[amazon-s3-glacier]] [[amazon-athena]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 기업이 여러 계정에 애플리케이션을 배포하며 AWS Organizations로 계정을 중앙 관리합니다. 보안 팀은 모든 계정에 걸친 단일 로그인(SSO) 솔루션이 필요합니다. 사용자와 그룹은 **온프레미스의 자체 관리형 Microsoft Active Directory에서 계속 관리**해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) AWS IAM Identity Center(AWS SSO)를 켜고, AWS Directory Service for Microsoft AD를 이용해 자체 관리형 AD와 **단방향 포리스트 신뢰(또는 단방향 도메인 신뢰)**를 만든다
> b) AWS IAM Identity Center를 켜고 자체 관리형 AD와 양방향 포리스트 신뢰를 만든다
> c) AWS Directory Service만 사용해 자체 관리형 AD와 양방향 신뢰 관계를 만든다
> d) 온프레미스에 자체 IdP를 배포하고 AWS IAM Identity Center를 켠다
>> [!success]- Answer
>> a) AWS IAM Identity Center(AWS SSO)를 켜고, AWS Directory Service for Microsoft AD를 이용해 자체 관리형 AD와 **단방향 포리스트 신뢰(또는 단방향 도메인 신뢰)**를 만든다
>> **왜 이 답인가** — 사용자는 온프레미스 AD에 그대로 두고 AWS 쪽이 그 사용자를 **인증할 수 있으면 됩니다.** 그래서 AWS가 온프레미스를 신뢰하는 단방향 신뢰로 충분합니다. Organizations 전체 계정에 대한 SSO는 IAM Identity Center의 역할입니다.
>> **나머지가 아닌 이유** — 양방향 신뢰는 필요 이상의 권한을 서로 여는 것이라 최소 권한에 어긋납니다. Directory Service만으로는 여러 계정에 걸친 SSO 할당이 되지 않습니다. IdP를 새로 배포하는 것은 AD가 이미 있는데 다시 만드는 일입니다.

<sub>관련: [[aws-iam-identity-center]] [[aws-directory-service]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 AWS에서 여러 Windows 워크로드를 운영합니다. 직원들은 EC2 인스턴스 두 대에 호스팅된 **Windows 파일 공유**를 사용하며, 두 인스턴스는 서로 데이터를 동기화해 사본을 유지합니다. 사용자가 현재 파일에 접근하는 방식을 유지하면서 고가용성과 내구성을 갖춘 스토리지 솔루션이 필요합니다. 무엇을 해야 합니까?
> a) 파일 공유 환경을 다중 AZ 구성의 Amazon FSx for Windows File Server로 확장하고 모든 데이터를 옮긴다
> b) 모든 데이터를 Amazon S3로 옮기고 사용자 액세스를 위해 IAM 인증을 설정한다
> c) Amazon S3 File Gateway를 설정하고 기존 EC2 인스턴스에 마운트한다
> d) 파일 공유 환경을 다중 AZ 구성의 Amazon EFS로 확장하고 모든 데이터를 옮긴다
>> [!success]- Answer
>> a) 파일 공유 환경을 다중 AZ 구성의 Amazon FSx for Windows File Server로 확장하고 모든 데이터를 옮긴다
>> **왜 이 답인가** — Windows 파일 공유는 SMB와 Active Directory 통합이 필요하고, 이를 관리형으로 제공하는 것이 FSx for Windows File Server입니다. 다중 AZ 구성이 고가용성을 맡고 **사용자는 지금처럼 드라이브를 연결해 씁니다.**
>> **나머지가 아닌 이유** — EFS는 Linux용 NFS라 Windows 파일 공유를 대체하지 않습니다. S3로 옮기면 접근 방식이 완전히 바뀝니다. File Gateway는 온프레미스 확장용이고 동기화 이중화 문제를 그대로 둡니다.

<sub>관련: [[amazon-fsx]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 AWS에서 온라인 마켓플레이스 웹 애플리케이션을 운영합니다. 수백만 건의 금융 거래 상세 내역을 여러 내부 애플리케이션과 **거의 실시간으로** 공유할 확장 가능한 솔루션이 필요합니다. 또한 거래는 민감 데이터를 제거한 뒤 짧은 지연 시간으로 조회할 수 있게 문서 데이터베이스에 저장해야 합니다. 무엇을 권장해야 합니까?
> a) 거래 데이터를 Amazon Kinesis Data Streams로 보내고, Lambda 통합으로 민감 데이터를 제거해 DynamoDB에 저장하며, 다른 애플리케이션은 같은 스트림에서 데이터를 소비한다
> b) 거래 데이터를 DynamoDB에 저장하고 쓰기 시 민감 데이터를 제거하는 규칙을 설정한 뒤 DynamoDB Streams로 공유한다
> c) 거래 데이터를 Kinesis Data Firehose로 보내 DynamoDB와 S3에 저장하고, Lambda 통합으로 민감 데이터를 제거해 다른 애플리케이션이 S3에서 소비하게 한다
> d) 일괄 데이터를 S3에 파일로 저장하고 Lambda가 파일마다 민감 데이터를 제거해 갱신한 뒤 DynamoDB에 저장한다
>> [!success]- Answer
>> a) 거래 데이터를 Amazon Kinesis Data Streams로 보내고, Lambda 통합으로 민감 데이터를 제거해 DynamoDB에 저장하며, 다른 애플리케이션은 같은 스트림에서 데이터를 소비한다
>> **왜 이 답인가** — **한 스트림을 여러 소비자가 각자 읽어야** 하고 거의 실시간이어야 합니다. 이 두 조건을 함께 만족하는 것이 Kinesis Data Streams입니다. 문서 데이터베이스 자리는 DynamoDB가 받습니다.
>> **나머지가 아닌 이유** — Firehose는 목적지로 흘려보내는 전달 서비스라 여러 소비자가 되감아 읽을 수 없고 DynamoDB를 직접 목적지로 두지 않습니다. DynamoDB에는 쓰기 시 필드를 지우는 규칙 기능이 없습니다. S3 파일 배치는 거의 실시간이 아닙니다.

<sub>관련: [[amazon-kinesis]] [[amazon-dynamodb]] [[aws-lambda]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 한 기업이 문서 관리 애플리케이션에 등록된 70만 사용자를 대상으로 **대용량 .pdf 파일을 .jpg 이미지로 변환**하는 제품을 만들려고 합니다. .pdf 파일은 평균 5MB이며 원본과 변환본을 모두 저장해야 합니다. 수요가 빠르게 늘어날 것에 대비해 확장 가능한 솔루션을 설계해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) .pdf 파일을 S3에 저장하고 S3 PUT 이벤트가 Lambda 함수를 호출해 .jpg로 변환한 뒤 다시 S3에 저장하게 한다
> b) .pdf 파일을 DynamoDB에 저장하고 DynamoDB Streams가 Lambda를 호출해 변환한 뒤 다시 DynamoDB에 저장한다
> c) EC2·EBS·Auto Scaling으로 구성된 Elastic Beanstalk 애플리케이션에 업로드해 EC2의 프로그램으로 변환하고 EBS에 저장한다
> d) EC2·EFS·Auto Scaling으로 구성된 Elastic Beanstalk 애플리케이션에 업로드해 변환한 뒤 저장한다
>> [!success]- Answer
>> a) .pdf 파일을 S3에 저장하고 S3 PUT 이벤트가 Lambda 함수를 호출해 .jpg로 변환한 뒤 다시 S3에 저장하게 한다
>> **왜 이 답인가** — 변환은 **파일이 올라올 때만** 필요한 짧은 작업입니다. S3 이벤트 + Lambda는 놀고 있는 서버가 없어 요청이 없을 때 비용이 0이고, 요청이 몰리면 알아서 병렬로 늘어납니다.
>> **나머지가 아닌 이유** — DynamoDB는 5MB 파일을 담는 저장소가 아닙니다(항목 크기 한도 400KB). Beanstalk·EC2 구성은 상시 인스턴스 요금이 붙습니다.

<sub>관련: [[aws-lambda]] [[amazon-s3]] | 모듈 [[12-cost-compute]]</sub>

> [!question] AWS에서 웹 애플리케이션을 호스팅하는 기업이 모든 EC2 인스턴스, RDS DB 인스턴스, Redshift 클러스터에 **태그가 붙어 있는지** 확인하려고 합니다. 이 점검을 구성하고 운영하는 수고를 최소화하려면 무엇을 해야 합니까?
> a) AWS Config 규칙으로 태그가 제대로 붙지 않은 리소스를 정의하고 탐지한다
> b) Cost Explorer로 태그가 없는 리소스를 표시하고 수동으로 태그를 붙인다
> c) 모든 리소스의 태그를 확인하는 API 호출 코드를 작성해 EC2 인스턴스에서 주기적으로 실행한다
> d) 태그를 확인하는 코드를 작성하고 CloudWatch 일정으로 Lambda 함수를 주기적으로 실행한다
>> [!success]- Answer
>> a) AWS Config 규칙으로 태그가 제대로 붙지 않은 리소스를 정의하고 탐지한다
>> **왜 이 답인가** — `required-tags`는 Config의 관리형 규칙으로 이미 존재합니다. 켜서 대상 리소스와 태그 키만 지정하면 되고, 위반 리소스가 계속 목록으로 유지됩니다.
>> **나머지가 아닌 이유** — 코드를 직접 짜는 두 보기는 이미 있는 기능을 다시 만드는 일이고 그 코드를 운영해야 합니다. Cost Explorer는 비용 분석 도구입니다.

<sub>관련: [[aws-config]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 여러 EC2 인스턴스에서 애플리케이션을 운영합니다. 애플리케이션은 SQS 큐에서 메시지를 처리해 RDS 테이블에 쓰고 큐에서 메시지를 삭제합니다. RDS 테이블에서 **가끔 중복 레코드**가 발견되는데 SQS 큐에는 중복 메시지가 없습니다. 메시지가 한 번만 처리되게 하려면 무엇을 해야 합니까?
> a) `ChangeMessageVisibility` API로 가시성 제한 시간을 늘린다
> b) `CreateQueue` API로 새 큐를 만든다
> c) `AddPermission` API로 적절한 권한을 추가한다
> d) `ReceiveMessage` API로 적절한 대기 시간을 설정한다
>> [!success]- Answer
>> a) `ChangeMessageVisibility` API로 가시성 제한 시간을 늘린다
>> **왜 이 답인가** — 처리 시간이 가시성 제한 시간보다 길면 **아직 처리 중인 메시지가 다시 보이게 되어** 다른 인스턴스가 같은 메시지를 또 처리합니다. 큐에 중복이 없는데 결과에만 중복이 생기는 전형적인 증상입니다.
>> **나머지가 아닌 이유** — 새 큐를 만들거나 권한을 바꾸는 것은 원인과 무관합니다. 대기 시간(롱 폴링)은 빈 응답을 줄이는 설정이지 중복과 관계없습니다.

<sub>관련: [[amazon-sqs]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 Amazon S3에 정적 웹사이트를 호스팅하고 DNS로 Route 53을 씁니다. 전 세계에서 수요가 늘고 있으며 사용자 지연 시간을 줄여야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) S3 버킷 앞에 Amazon CloudFront 배포를 두고 Route 53 레코드가 그 배포를 가리키게 한다
> b) 웹사이트가 담긴 S3 버킷을 모든 리전에 복제하고 Route 53 지리 위치 라우팅 항목을 추가한다
> c) AWS Global Accelerator를 프로비저닝해 제공된 IP를 S3 버킷과 연결하고 Route 53이 그 IP를 가리키게 한다
> d) 버킷에서 S3 Transfer Acceleration을 켜고 Route 53 항목이 새 엔드포인트를 가리키게 한다
>> [!success]- Answer
>> a) S3 버킷 앞에 Amazon CloudFront 배포를 두고 Route 53 레코드가 그 배포를 가리키게 한다
>> **왜 이 답인가** — 전 세계 사용자에게 **정적 콘텐츠를 빠르게 내려 주는** 표준 조합입니다. 엣지에 캐시되므로 오리진 요청과 데이터 전송 비용도 함께 줄어듭니다.
>> **나머지가 아닌 이유** — 모든 리전에 버킷을 복제하면 저장 비용이 리전 수만큼 늘어납니다. Global Accelerator는 S3를 엔드포인트로 두는 서비스가 아닙니다. Transfer Acceleration은 **업로드**를 빠르게 하는 기능입니다.

<sub>관련: [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 AWS에서 다계층 애플리케이션을 호스팅합니다. 규정 준수·거버넌스·감사·보안을 위해 AWS 리소스의 **구성 변경을 추적**하고 이 리소스에 대한 **API 호출 기록**을 남겨야 합니다. 무엇을 해야 합니까?
> a) 구성 변경 추적에는 AWS Config를, API 호출 기록에는 AWS CloudTrail을 사용한다
> b) 구성 변경 추적에는 CloudTrail을, API 호출 기록에는 AWS Config를 사용한다
> c) 구성 변경 추적에는 AWS Config를, API 호출 기록에는 Amazon CloudWatch를 사용한다
> d) 구성 변경 추적에는 CloudTrail을, API 호출 기록에는 CloudWatch를 사용한다
>> [!success]- Answer
>> a) 구성 변경 추적에는 AWS Config를, API 호출 기록에는 AWS CloudTrail을 사용한다
>> **왜 이 답인가** — 역할이 정확히 나뉩니다. Config는 **리소스가 어떤 상태였는지**, CloudTrail은 **누가 무엇을 호출했는지**를 남깁니다.
>> **나머지가 아닌 이유** — 둘을 바꿔 놓은 보기는 이름만 뒤집은 함정입니다. CloudWatch는 지표와 로그를 다루는 모니터링 서비스라 API 호출 감사 기록의 원천이 아닙니다.

<sub>관련: [[aws-config]] [[aws-cloudtrail]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 솔루션스 아키텍트가 온프레미스 인프라를 AWS로 확장하는 하이브리드 아키텍처를 설계합니다. AWS 리전으로 **일관되게 낮은 지연 시간의 고가용성 연결**이 필요하고, 비용을 최소화해야 하며 기본 연결이 끊기면 느린 트래픽은 감수할 수 있습니다. 무엇을 해야 합니까?
> a) 리전으로 AWS Direct Connect 연결을 프로비저닝하고, 기본 연결 장애에 대비한 백업으로 VPN 연결을 프로비저닝한다
> b) 리전으로 VPN 터널을 만들고 두 번째 VPN 터널을 백업으로 만든다
> c) Direct Connect 연결을 프로비저닝하고 같은 리전으로 두 번째 Direct Connect를 백업으로 만든다
> d) Direct Connect를 프로비저닝하고 CLI의 장애 조치 속성으로 백업 연결이 자동 생성되게 한다
>> [!success]- Answer
>> a) 리전으로 AWS Direct Connect 연결을 프로비저닝하고, 기본 연결 장애에 대비한 백업으로 VPN 연결을 프로비저닝한다
>> **왜 이 답인가** — 평상시 일관된 저지연은 Direct Connect가 맡고, 백업은 **훨씬 싼 VPN**이 맡습니다. `느려도 된다`는 문장이 백업으로 VPN을 고르라는 신호입니다.
>> **나머지가 아닌 이유** — Direct Connect를 두 개 두면 가장 안전하지만 비용 최소화 조건과 어긋납니다. VPN만 두 개 두면 평상시 일관된 저지연을 보장하지 못합니다. Direct Connect에 자동으로 백업을 만들어 주는 장애 조치 속성은 없습니다.

<sub>관련: [[aws-direct-connect]] [[aws-site-to-site-vpn]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 웹사이트에서 검색 가능한 항목 저장소를 운영합니다. 데이터는 1,000만 행이 넘는 Amazon RDS for MySQL 테이블에 있고 스토리지는 범용 SSD 2TB입니다. 매일 수백만 건의 갱신이 일어납니다. 일부 삽입 작업이 10초 이상 걸리는 것이 확인되었고, 원인은 **데이터베이스 스토리지 성능**으로 판명되었습니다. 이 문제를 해결하는 솔루션은 무엇입니까?
> a) 스토리지 유형을 프로비저닝된 IOPS SSD로 변경한다
> b) DB 인스턴스를 메모리 최적화 인스턴스 클래스로 변경한다
> c) DB 인스턴스를 버스트 가능 성능 인스턴스 클래스로 변경한다
> d) MySQL 기본 비동기 복제로 다중 AZ 읽기 전용 복제본을 켠다
>> [!success]- Answer
>> a) 스토리지 유형을 프로비저닝된 IOPS SSD로 변경한다
>> **왜 이 답인가** — 지문이 원인을 **스토리지 성능**이라고 못 박았습니다. 일관되게 높은 IOPS가 필요하면 프로비저닝된 IOPS(io1/io2)로 바꾸는 것이 정답입니다.
>> **나머지가 아닌 이유** — 인스턴스 클래스를 바꾸는 것은 CPU·메모리를 바꾸는 것이라 원인과 다릅니다. 버스트 가능 클래스는 오히려 성능이 더 들쭉날쭉해집니다. 읽기 전용 복제본은 **읽기**를 분산할 뿐 삽입(쓰기)을 돕지 않습니다.

<sub>관련: [[amazon-rds]] [[amazon-ebs]] | 모듈 [[08-perf-database]]</sub>

> [!question] 한 기업이 퍼블릭 웹 애플리케이션을 AWS 클라우드에 출시하려 합니다. 아키텍처는 VPC 안의 EC2 인스턴스와 그 앞의 Elastic Load Balancer로 구성되며 DNS는 서드파티 서비스를 씁니다. **대규모 DDoS 공격을 탐지하고 방어**할 솔루션을 권장해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) AWS Shield Advanced를 켜고 해당 ELB를 보호 대상으로 지정한다
> b) 계정에서 Amazon GuardDuty를 켠다
> c) EC2 인스턴스에 Amazon Inspector를 켠다
> d) AWS Shield를 켜고 Amazon Route 53을 지정한다
>> [!success]- Answer
>> a) AWS Shield Advanced를 켜고 해당 ELB를 보호 대상으로 지정한다
>> **왜 이 답인가** — `대규모 DDoS`가 나오면 Shield Advanced입니다. 보호 대상을 지정할 수 있고 대응 팀 지원과 요금 급증 보호까지 따라옵니다. DNS가 서드파티라도 **ELB를 직접 보호 대상으로** 지정하면 됩니다.
>> **나머지가 아닌 이유** — GuardDuty는 위협 탐지이지 완화가 아닙니다. Inspector는 취약점 평가입니다. Route 53을 지정하는 보기는 DNS를 이 기업이 쓰지 않으므로 성립하지 않습니다.

<sub>관련: [[aws-shield]] [[elastic-load-balancing]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 Application Load Balancer 뒤 Auto Scaling 그룹의 EC2 인스턴스에서 업무상 중요한 웹 애플리케이션을 운영합니다. 데이터베이스는 **단일 가용 영역에 배포된 Aurora PostgreSQL**입니다. 다운타임과 데이터 손실을 최소로 하면서 고가용성을 갖추려고 합니다. 운영 노력이 가장 적은 솔루션은 무엇입니까?
> a) Auto Scaling 그룹이 여러 가용 영역을 쓰게 하고 데이터베이스를 다중 AZ로 구성하며 RDS 프록시를 둔다
> b) EC2 인스턴스를 여러 AWS 리전에 두고 Route 53 상태 확인으로 트래픽을 전환하며 Aurora 교차 리전 복제를 쓴다
> c) Auto Scaling 그룹이 한 가용 영역을 쓰게 하고 매시간 데이터베이스 스냅샷을 떠 장애 시 복원한다
> d) Auto Scaling 그룹이 여러 리전을 쓰게 하고 데이터를 S3에 쓴 뒤 S3 이벤트로 Lambda가 데이터베이스에 기록하게 한다
>> [!success]- Answer
>> a) Auto Scaling 그룹이 여러 가용 영역을 쓰게 하고 데이터베이스를 다중 AZ로 구성하며 RDS 프록시를 둔다
>> **왜 이 답인가** — 고가용성의 기본은 **여러 AZ에 걸치는 것**입니다. 컴퓨팅은 ASG가, 데이터베이스는 다중 AZ가 맡고, 프록시가 장애 조치 시 연결을 붙잡아 주어 다운타임이 더 짧아집니다.
>> **나머지가 아닌 이유** — 여러 리전 구성은 요구 이상으로 복잡하고 운영 노력이 큽니다. 단일 AZ + 시간별 스냅샷은 최대 한 시간의 데이터 손실을 감수하는 설계입니다.

<sub>관련: [[amazon-aurora]] [[amazon-ec2-auto-scaling]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 두 AWS 리전의 S3 버킷에 데이터를 저장하는 애플리케이션을 만듭니다. 저장되는 모든 데이터는 **AWS KMS 고객 관리형 키**로 암호화해야 하며, 두 버킷의 데이터는 **같은 KMS 키로** 암호화·복호화되어야 합니다. 데이터와 키는 두 리전 각각에 있어야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 리전마다 고객 관리형 KMS 다중 리전 키와 S3 버킷을 만들고, 버킷이 SSE-KMS를 쓰게 한 뒤 버킷 간 복제를 구성한다
> b) 리전마다 KMS 키와 버킷을 만들고 버킷이 SSE-S3를 쓰게 한 뒤 복제를 구성한다
> c) 리전마다 버킷을 만들어 SSE-S3를 쓰게 하고 복제를 구성한다
> d) 다중 리전 KMS 키를 만들고 애플리케이션이 그 키로 **클라이언트 측 암호화**를 하게 한다
>> [!success]- Answer
>> a) 리전마다 고객 관리형 KMS 다중 리전 키와 S3 버킷을 만들고, 버킷이 SSE-KMS를 쓰게 한 뒤 버킷 간 복제를 구성한다
>> **왜 이 답인가** — 요구가 셋입니다 — **고객 관리형 키**, **두 리전에서 같은 키**, **키가 각 리전에 존재**. 이것을 한 번에 만족하는 것이 KMS **다중 리전 키**이고, 버킷은 그 키로 SSE-KMS를 쓰면 됩니다.
>> **나머지가 아닌 이유** — SSE-S3는 AWS가 관리하는 키라 `고객 관리형 키` 조건에서 탈락합니다. 클라이언트 측 암호화는 애플리케이션이 암복호를 직접 책임져야 해서 운영 오버헤드가 큽니다.

<sub>관련: [[aws-kms]] [[amazon-s3]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 기업이 최근 AWS 계정에서 여러 워크로드를 EC2 인스턴스로 시작했습니다. 이 인스턴스에 **원격으로 안전하게 접속해 관리**할 전략이 필요하며, AWS 기본 서비스로 반복 가능한 절차를 구현하고 Well-Architected 프레임워크를 따라야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 기존·신규 인스턴스에 적절한 IAM 역할을 붙이고 AWS Systems Manager Session Manager로 원격 세션을 연다
> b) EC2 시리얼 콘솔로 각 인스턴스의 터미널에 직접 접속해 관리한다
> c) 관리용 SSH 키 페어를 만들어 각 인스턴스에 공개 키를 넣고 퍼블릭 서브넷에 배스천 호스트를 두어 터널로 접속한다
> d) Site-to-Site VPN을 구축하고 관리자가 로컬 PC에서 VPN 터널을 통해 SSH 키로 직접 접속하게 한다
>> [!success]- Answer
>> a) 기존·신규 인스턴스에 적절한 IAM 역할을 붙이고 AWS Systems Manager Session Manager로 원격 세션을 연다
>> **왜 이 답인가** — Session Manager는 **인바운드 포트도, 배스천도, SSH 키도 없이** 접속합니다. 접근은 IAM으로 통제되고 세션 기록이 남아 감사도 됩니다.
>> **나머지가 아닌 이유** — 배스천 호스트는 운영할 서버와 열어 둘 포트가 늘어납니다. SSH 키는 배포·회수를 사람이 관리해야 합니다. 시리얼 콘솔은 네트워크가 끊겼을 때 쓰는 비상 수단입니다.

<sub>관련: [[aws-systems-manager]] [[amazon-ec2]] | 모듈 [[01-secure-access]]</sub>
