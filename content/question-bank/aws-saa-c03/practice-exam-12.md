---
title: "실전 구성 12회차"
tags: [saa-c03, 문제은행, quiz]
exam: 12
문항수: 50
lang: ko
---

> [!info] 실제 출제 비중에 맞춘 50문항입니다
> 도메인 구성이 실제 시험과 같습니다 — **보안 15 · 복원력 13 · 고성능 12 · 비용 10**.
> 그래서 이 회차의 정답률은 **실전 예상 점수에 가깝습니다.** 시간을 재고 한 번에 푸세요.
>
> 문항은 커뮤니티 문제 정리에서 **판단이 갈리는 지점**만 가져와 상황·보기·해설을 새로 쓴 것입니다.
> 출처와 방식은 [참고 자료](/docs/references)에 있습니다.

> [!question] 한 기업이 AWS로 이전한 뒤, 사용자들이 **과도하게 큰 EC2 인스턴스를 띄우고 변경 절차 없이 보안 그룹 규칙을 수정**하는 것을 발견했습니다. 이러한 인벤토리·구성 변경을 **추적하고 감사**하려면 어떤 조합이 필요합니까? (2개 선택)
> a) AWS CloudTrail을 켜서 감사에 사용한다
> b) AWS Config를 켜고 감사·규정 준수 규칙을 만든다
> c) Trusted Advisor를 켜고 보안 대시보드를 참조한다
> d) EC2 인스턴스에 데이터 수명 주기 정책을 사용한다
>> [!success]- Answer
>> a) AWS CloudTrail을 켜서 감사에 사용한다
>> b) AWS Config를 켜고 감사·규정 준수 규칙을 만든다
>> **왜 이 답인가** — **누가 무엇을 했는지는 CloudTrail**, **리소스가 어떤 상태이고 어떻게 바뀌었는지는 Config**입니다. 두 서비스가 짝을 이뤄 인벤토리와 변경을 함께 다룹니다.
>> **나머지가 아닌 이유** — Trusted Advisor는 모범 사례 점검이지 변경 이력을 남기지 않습니다. 데이터 수명 주기 정책은 스냅샷 관리 기능입니다.

<sub>관련: [[aws-cloudtrail]] [[aws-config]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 데이터 관리 애플리케이션을 **이벤트 기반 아키텍처**로 전환하려 합니다. 더 분산되고 서버리스 개념을 쓰면서 워크플로의 여러 단계를 수행해야 하며 운영 오버헤드는 최소여야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) **AWS Step Functions**로 워크플로를 만들어 상태 머신을 구성하고, 상태 머신이 AWS Lambda 함수를 호출해 각 단계를 처리하게 한다
> b) Step Functions로 워크플로를 만들되 애플리케이션은 EC2에 배포해 EC2에서 단계를 실행하게 한다
> c) AWS Glue로 워크플로를 만들고 Glue가 Lambda를 호출하게 한다
> d) EventBridge로 워크플로를 만들고 일정에 따라 Lambda를 호출해 단계를 처리한다
>> [!success]- Answer
>> a) **AWS Step Functions**로 워크플로를 만들어 상태 머신을 구성하고, 상태 머신이 AWS Lambda 함수를 호출해 각 단계를 처리하게 한다
>> **왜 이 답인가** — 여러 단계의 **순서·분기·재시도를 선언적으로 관리**하는 것이 Step Functions이고, 각 단계는 Lambda가 서버 없이 처리합니다.
>> **나머지가 아닌 이유** — EC2에 배포하면 서버리스가 아닙니다. Glue는 ETL용이고, EventBridge의 일정 기반 호출은 단계 간 상태·순서를 관리하지 못합니다.

<sub>관련: [[aws-step-functions]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 여러 가용 영역의 **프라이빗 서브넷** EC2 인스턴스에서 웹 애플리케이션을 운영합니다. 솔루션스 아키텍트가 **인터넷 경계 ALB**를 만들고 그 인스턴스를 대상 그룹으로 지정했는데 **인터넷 트래픽이 인스턴스에 닿지 않습니다.** 어떻게 다시 구성해야 합니까?
> a) 각 가용 영역에 **퍼블릭 서브넷을 만들어 ALB에 연결**한다
> b) EC2 인스턴스를 퍼블릭 서브넷으로 옮기고 아웃바운드를 모두 허용한다
> c) EC2 서브넷 라우팅 테이블이 `0.0.0.0/0`을 인터넷 게이트웨이로 보내게 한다
> d) ALB를 NLB로 바꾸고 퍼블릭 서브넷에 NAT 게이트웨이를 둔다
>> [!success]- Answer
>> a) 각 가용 영역에 **퍼블릭 서브넷을 만들어 ALB에 연결**한다
>> **왜 이 답인가** — 인터넷 경계 로드 밸런서는 **퍼블릭 서브넷에 있어야** 인터넷에서 접속을 받을 수 있습니다. 대상 인스턴스는 프라이빗에 그대로 두어도 ALB가 내부에서 전달합니다.
>> **나머지가 아닌 이유** — 인스턴스를 퍼블릭으로 옮기거나 인터넷 게이트웨이 경로를 다는 것은 보안을 낮추면서 문제의 원인(ALB 서브넷)을 고치지 못합니다.

<sub>관련: [[elastic-load-balancing]] [[amazon-vpc]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 자동차 IoT 센서 데이터를 Firehose를 통해 S3에 저장하며 **매년 수조 개의 객체**가 생깁니다. 매일 아침 **최근 30일** 데이터로 ML 모델을 재학습하고, **연 4회는 최근 12개월** 데이터로 분석·학습합니다. 데이터는 **1년까지 지연 없이 사용 가능**해야 하고 1년 뒤에는 아카이브해야 합니다. 가장 비용 효율적인 스토리지 솔루션은 무엇입니까?
> a) S3 Standard로 저장하고 수명 주기 정책으로 **30일 후 Standard-IA**, **1년 후 Glacier Deep Archive**로 전환한다
> b) S3 Intelligent-Tiering을 쓰고 수명 주기로 1년 후 Deep Archive로 전환한다
> c) Intelligent-Tiering을 쓰고 1년 후 자동으로 Deep Archive로 옮기게 구성한다
> d) S3 Standard-IA로 저장하고 1년 후 Deep Archive로 전환한다
>> [!success]- Answer
>> a) S3 Standard로 저장하고 수명 주기 정책으로 **30일 후 Standard-IA**, **1년 후 Glacier Deep Archive**로 전환한다
>> **왜 이 답인가** — 액세스 패턴이 **이미 명확합니다**(30일까지 매일, 그 뒤 1년까지 분기 1회). 패턴을 알면 기간 기반 수명 주기가 가장 싸고, 객체 수가 수조 개라 **Intelligent-Tiering의 객체당 모니터링 요금**이 큰 부담이 됩니다.
>> **나머지가 아닌 이유** — Intelligent-Tiering은 패턴을 모를 때 쓰는 선택입니다. 처음부터 Standard-IA에 넣으면 초기 30일의 잦은 접근에 검색 요금이 붙습니다.

<sub>관련: [[amazon-s3]] [[amazon-s3-glacier]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 기업의 수백 대 EC2 Linux 인스턴스를 시스템 관리자들이 **공유 SSH 키**로 관리해 왔습니다. 감사 후 보안 팀이 **모든 공유 키 제거**를 요구했습니다. 안전한 접근을 제공하면서 **관리 부담이 가장 적은** 솔루션은 무엇입니까?
> a) AWS Systems Manager **Session Manager**로 EC2 인스턴스에 접속한다
> b) AWS STS로 필요할 때 일회성 SSH 키를 생성한다
> c) 배스천 인스턴스에만 공유 SSH 접근을 허용하고 나머지는 배스천에서만 SSH를 받게 한다
> d) Cognito 사용자 지정 권한 부여자로 인증하고 Lambda로 임시 SSH 키를 만든다
>> [!success]- Answer
>> a) AWS Systems Manager **Session Manager**로 EC2 인스턴스에 접속한다
>> **왜 이 답인가** — Session Manager는 **SSH 키도 인바운드 포트도 없이** 접속합니다. 접근 통제는 IAM이 맡고 세션 기록이 남아 감사도 됩니다.
>> **나머지가 아닌 이유** — 배스천 방식은 공유 키가 여전히 남습니다. STS는 SSH 키를 발급하는 서비스가 아니고, Lambda로 키를 만드는 방식은 직접 만들어 운영해야 합니다.

<sub>관련: [[aws-systems-manager]] [[amazon-ec2]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업의 애플리케이션이 DynamoDB 테이블을 씁니다. 규정상 **매달 백업**해야 하고 **6개월 동안 사용 가능**해야 하며 **7년 보관**해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 매월 1일에 테이블을 백업하는 AWS Backup 계획을 만들고, **6개월 후 콜드 스토리지로 전환**하는 수명 주기와 **7년 보존 기간**을 지정한다
> b) 매월 1일 온디맨드 백업을 만들어 6개월 후 S3 Glacier로 옮기고 7년이 지난 백업은 수명 주기로 삭제한다
> c) SDK로 온디맨드 백업 스크립트를 만들어 EventBridge로 매달 실행하고, 두 번째 스크립트로 전환·삭제를 처리한다
> d) CLI로 온디맨드 백업을 만들고 EventBridge cron으로 매달 실행하며 명령에 전환·삭제 옵션을 지정한다
>> [!success]- Answer
>> a) 매월 1일에 테이블을 백업하는 AWS Backup 계획을 만들고, **6개월 후 콜드 스토리지로 전환**하는 수명 주기와 **7년 보존 기간**을 지정한다
>> **왜 이 답인가** — 일정·수명 주기 전환·보존 기간 **세 가지가 모두 AWS Backup 계획의 설정 항목**입니다. 코드를 만들 필요가 없습니다.
>> **나머지가 아닌 이유** — DynamoDB 온디맨드 백업은 S3 버킷으로 직접 옮겨 수명 주기를 거는 대상이 아닙니다. 스크립트를 두 개 만들어 관리하는 방식은 운영 부담이 큽니다.

<sub>관련: [[aws-backup]] [[amazon-dynamodb]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 RDS for MySQL을 운영하는데 트랜잭션이 늘어 **읽기가 느려져** 읽기 전용 복제본을 추가하려 합니다. 이 변경 전에 어떤 조합을 확인해야 합니까? (2개 선택)
> a) 원본 DB 인스턴스에서 **자동 백업을 켠다**(백업 보존 기간을 0이 아닌 값으로 설정)
> b) 원본 DB 인스턴스에서 **장시간 실행 중인 트랜잭션이 끝나기를 기다린다**
> c) RDS 기본 노드에서 binlog 복제를 켠다
> d) 글로벌 테이블을 만들고 사용할 리전을 지정한다
>> [!success]- Answer
>> a) 원본 DB 인스턴스에서 **자동 백업을 켠다**(백업 보존 기간을 0이 아닌 값으로 설정)
>> b) 원본 DB 인스턴스에서 **장시간 실행 중인 트랜잭션이 끝나기를 기다린다**
>> **왜 이 답인가** — RDS 읽기 전용 복제본은 **자동 백업이 켜져 있어야** 만들 수 있습니다. 그리고 복제본 생성은 스냅샷을 뜨는 과정이라 **장시간 트랜잭션이 있으면 지연되거나 방해**받습니다.
>> **나머지가 아닌 이유** — binlog 복제는 RDS가 자동 백업을 켜면 내부적으로 처리합니다. 글로벌 테이블은 DynamoDB의 기능입니다.

<sub>관련: [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 한 기업이 us-east-1의 **VPC 세 개**에서 애플리케이션을 운영하며 VPC끼리 통신해야 합니다. 또한 **온프레미스 데이터 센터 한 곳의 지연에 민감한 애플리케이션으로 매일 수백 GB**를 꾸준히 보내야 합니다. 비용 효율이 가장 높은 네트워크 연결 설계는 무엇입니까?
> a) 데이터 센터에서 **Direct Connect 연결 하나**를 만들고 **전송 게이트웨이**를 만들어 세 VPC를 연결한 뒤, Direct Connect와 전송 게이트웨이를 연결한다
> b) 데이터 센터에서 VPC마다 하나씩 Site-to-Site VPN 세 개를 구성한다
> c) VPC마다 서드파티 가상 네트워크 어플라이언스를 띄우고 IPsec 터널을 맺는다
> d) 데이터 센터에서 Direct Connect 연결 세 개를 만들어 VPC마다 하나씩 쓴다
>> [!success]- Answer
>> a) 데이터 센터에서 **Direct Connect 연결 하나**를 만들고 **전송 게이트웨이**를 만들어 세 VPC를 연결한 뒤, Direct Connect와 전송 게이트웨이를 연결한다
>> **왜 이 답인가** — 지연에 민감하고 대용량이므로 회선은 Direct Connect여야 합니다. **전송 게이트웨이가 VPC 간 연결과 온프레미스 연결을 한 곳으로 모아** 회선 하나로 끝내므로 비용이 가장 낮습니다.
>> **나머지가 아닌 이유** — 회선을 세 개 사는 것은 낭비입니다. VPN은 인터넷을 타 지연이 일정하지 않고, 어플라이언스를 직접 운영하는 방식은 관리 부담이 큽니다.

<sub>관련: [[aws-transit-gateway]] [[aws-direct-connect]] | 모듈 [[14-cost-network]]</sub>

> [!question] S3 버킷에 업로드되는 **모든 객체가 암호화되도록** 보장하려면 무엇을 해야 합니까?
> a) `PutObject` 요청에 `x-amz-server-side-encryption` 헤더가 없으면 거부하도록 버킷 정책을 수정한다
> b) `PutObject`에 `s3:x-amz-acl` 헤더가 없으면 거부하도록 버킷 정책을 수정한다
> c) `PutObject`의 `s3:x-amz-acl` 헤더가 `private`이 아니면 거부하도록 수정한다
> d) `PutObject`에 `aws:SecureTransport`가 `true`가 아니면 거부하도록 수정한다
>> [!success]- Answer
>> a) `PutObject` 요청에 `x-amz-server-side-encryption` 헤더가 없으면 거부하도록 버킷 정책을 수정한다
>> **왜 이 답인가** — 이 헤더가 **서버 측 암호화를 요청한다는 표시**입니다. 헤더 없는 업로드를 거부하면 암호화되지 않은 객체가 들어올 수 없습니다.
>> **나머지가 아닌 이유** — `x-amz-acl`은 접근 제어 목록이라 암호화와 무관합니다. `aws:SecureTransport`는 **전송 중 암호화(HTTPS)** 조건이지 저장 시 암호화가 아닙니다.

<sub>관련: [[amazon-s3]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 결제 처리 시스템에서 **같은 결제 ID의 메시지는 보낸 순서대로** 도착해야 합니다. 어떤 조합이 필요합니까? (2개 선택)
> a) 메시지를 **Amazon SQS FIFO 큐**에 쓰고 **메시지 그룹 ID를 결제 ID로** 설정한다
> b) 메시지를 **Amazon Kinesis 데이터 스트림**에 쓰고 **파티션 키를 결제 ID로** 설정한다
> c) 메시지를 SQS 표준 큐에 쓰고 메시지 속성에 결제 ID를 넣는다
> d) 메시지를 결제 ID를 키로 DynamoDB 테이블에 쓴다
>> [!success]- Answer
>> a) 메시지를 **Amazon SQS FIFO 큐**에 쓰고 **메시지 그룹 ID를 결제 ID로** 설정한다
>> b) 메시지를 **Amazon Kinesis 데이터 스트림**에 쓰고 **파티션 키를 결제 ID로** 설정한다
>> **왜 이 답인가** — 순서 보장은 **키 단위**로 이뤄집니다. FIFO 큐는 **메시지 그룹 ID 안에서**, Kinesis는 **같은 파티션 키가 같은 샤드로 가면서** 순서를 지킵니다.
>> **나머지가 아닌 이유** — 표준 큐는 순서를 보장하지 않습니다. DynamoDB나 Memcached는 저장소이지 순서 있는 메시지 전달 수단이 아닙니다.

<sub>관련: [[amazon-sqs]] [[amazon-kinesis]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 AWS에 호스팅된 미디어 애플리케이션을 위해 공유 스토리지를 구현합니다. **SMB 클라이언트로 데이터에 접근**할 수 있어야 하고 완전 관리형이어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Amazon FSx for Windows File Server 파일 시스템을 만들어 애플리케이션 서버가 접근하게 한다
> b) Storage Gateway 볼륨 게이트웨이를 만들어 필요한 프로토콜의 파일 공유를 만든다
> c) Storage Gateway 테이프 게이트웨이를 만들어 테이프가 S3를 쓰게 한다
> d) EC2 Windows 인스턴스를 만들어 Windows 파일 공유 역할을 설치·구성한다
>> [!success]- Answer
>> a) Amazon FSx for Windows File Server 파일 시스템을 만들어 애플리케이션 서버가 접근하게 한다
>> **왜 이 답인가** — `SMB` + `완전 관리형`이면 FSx for Windows File Server입니다.
>> **나머지가 아닌 이유** — 볼륨 게이트웨이는 iSCSI 블록, 테이프 게이트웨이는 가상 테이프 백업용입니다. EC2에 파일 서버를 직접 구성하면 관리형이 아닙니다.

<sub>관련: [[amazon-fsx]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 **업무 시간 외에 EC2 인스턴스와 RDS DB 인스턴스를 자동으로 시작·중지**하는 솔루션을 원합니다. 비용과 인프라 유지 관리를 최소화해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) EC2와 DB 인스턴스를 시작·중지하는 **AWS Lambda 함수**를 만들고 **Amazon EventBridge**로 일정에 따라 호출한다
> b) EC2는 탄력적 크기 조정으로, DB는 업무 시간 외 0으로 축소한다
> c) 마켓플레이스에서 자동 시작·중지 파트너 솔루션을 찾는다
> d) EC2를 하나 더 띄워 crontab으로 셸 스크립트를 돌려 시작·중지한다
>> [!success]- Answer
>> a) EC2와 DB 인스턴스를 시작·중지하는 **AWS Lambda 함수**를 만들고 **Amazon EventBridge**로 일정에 따라 호출한다
>> **왜 이 답인가** — 일정 기반 자동화의 표준 조합입니다. **관리할 서버가 없고** 실행 시간도 매우 짧아 비용이 사실상 0에 가깝습니다.
>> **나머지가 아닌 이유** — 크론용 EC2를 새로 띄우는 것은 아끼려던 비용을 다시 만드는 일입니다. RDS 인스턴스는 0으로 축소할 수 없고, 파트너 솔루션은 추가 비용과 관리가 따릅니다.

<sub>관련: [[aws-lambda]] [[amazon-eventbridge]] [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업이 S3 버킷에서 웹 애플리케이션을 호스팅하며, **Amazon Cognito**로 사용자를 인증하고 JWT를 받아 다른 S3 버킷의 보호된 리소스에 접근합니다. 배포 후 사용자들이 **보호된 콘텐츠에 접근하지 못한다**고 신고합니다. 올바른 권한을 제공해 문제를 해결하려면 어떤 솔루션이 적합합니까?
> a) **Cognito 자격 증명 풀(identity pool)**이 보호된 콘텐츠에 접근할 수 있는 적절한 IAM 역할을 수임하도록 갱신한다
> b) 애플리케이션이 보호된 콘텐츠에 접근하도록 S3 ACL을 갱신한다
> c) 최종적 일관성 문제를 피하기 위해 애플리케이션을 S3에 다시 배포한다
> d) Cognito 풀이 사용자 지정 속성 매핑을 쓰도록 갱신한다
>> [!success]- Answer
>> a) **Cognito 자격 증명 풀(identity pool)**이 보호된 콘텐츠에 접근할 수 있는 적절한 IAM 역할을 수임하도록 갱신한다
>> **왜 이 답인가** — 사용자 풀은 **인증(로그인)**을 하고, **자격 증명 풀은 그 사용자에게 AWS 권한(IAM 역할)을 부여**합니다. AWS 리소스 접근이 안 되면 대개 자격 증명 풀의 역할 권한이 부족한 것입니다.
>> **나머지가 아닌 이유** — ACL은 권장되지 않는 구식 방식이고 이 구조를 고치지 못합니다. 재배포나 속성 매핑은 권한 문제와 무관합니다.

<sub>관련: [[amazon-cognito]] [[aws-iam]] [[amazon-s3]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 **고유한 이벤트를 리더보드·매치메이킹·인증 서비스에 동시에** 보내야 하는 게임 시스템을 만듭니다. **이벤트 순서를 보장**하는 이벤트 기반 시스템이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Amazon SNS **FIFO 주제**
> b) Amazon SNS 표준 주제
> c) Amazon SQS FIFO 큐
> d) Amazon EventBridge 이벤트 버스
>> [!success]- Answer
>> a) Amazon SNS **FIFO 주제**
>> **왜 이 답인가** — 요구가 둘입니다 — **여러 서비스에 동시에 전달(팬아웃)**과 **순서 보장**. 두 가지를 함께 제공하는 것이 SNS FIFO 주제입니다.
>> **나머지가 아닌 이유** — SQS FIFO 큐는 순서는 지키지만 **메시지를 하나의 소비자가 가져가므로** 동시 전달이 되지 않습니다. 표준 주제와 EventBridge는 순서를 보장하지 않습니다.

<sub>관련: [[amazon-sns]] [[amazon-sqs]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 솔루션스 아키텍트가 고객 사건 파일을 저장할 시스템을 설계합니다. 파일은 핵심 자산이고 계속 늘어나며, **여러 EC2 애플리케이션 서버에서 동시에 접근**할 수 있어야 하고 **중복성이 내장**되어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Amazon EFS
> b) Amazon EBS
> c) Amazon S3 Glacier Deep Archive
> d) AWS Backup
>> [!success]- Answer
>> a) Amazon EFS
>> **왜 이 답인가** — `여러 서버가 동시에` + `파일` + `자동으로 늘어남`이 EFS입니다. 여러 AZ에 데이터를 복제해 중복성도 내장되어 있습니다.
>> **나머지가 아닌 이유** — EBS는 원칙적으로 인스턴스 한 대에 붙고 AZ를 넘지 못합니다. Deep Archive는 조회에 시간이 걸립니다. AWS Backup은 백업 서비스이지 기본 저장소가 아닙니다.

<sub>관련: [[amazon-efs]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 상용 애플리케이션을 AWS로 옮깁니다. 이 소프트웨어는 **소켓·코어 기반 라이선스 모델**을 쓰고 용량과 가동 시간이 예측 가능하며, **올해 초 구매한 기존 라이선스를 그대로 쓰려고** 합니다. 가장 비용 효율적인 EC2 요금 옵션은 무엇입니까?
> a) 전용 예약 호스트(Dedicated Reserved Hosts)
> b) 전용 온디맨드 호스트(Dedicated On-Demand Hosts)
> c) 전용 예약 인스턴스(Dedicated Reserved Instances)
> d) 전용 온디맨드 인스턴스(Dedicated On-Demand Instances)
>> [!success]- Answer
>> a) 전용 예약 호스트(Dedicated Reserved Hosts)
>> **왜 이 답인가** — **소켓·코어 단위 라이선스(BYOL)**를 쓰려면 물리 서버의 소켓·코어가 보이는 **전용 호스트**여야 합니다. 사용량이 예측 가능하므로 **예약**으로 사면 가장 쌉니다.
>> **나머지가 아닌 이유** — 전용 인스턴스는 하드웨어를 격리하지만 **소켓·코어 가시성을 제공하지 않아** 이런 라이선스에 쓸 수 없습니다. 온디맨드 호스트는 예약보다 비쌉니다.

<sub>관련: [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 프라이빗 서브넷의 EC2 인스턴스에 매우 민감한 데이터가 있습니다. 사내 정책상 이 인스턴스는 **승인된 서드파티 소프트웨어 저장소의 URL로만** 인터넷에 나갈 수 있고 나머지는 차단되어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 프라이빗 서브넷 라우팅 테이블이 아웃바운드를 **AWS Network Firewall**로 보내게 하고 **도메인 목록 규칙 그룹**을 구성한다
> b) AWS WAF 웹 ACL을 만들어 출발지·목적지 IP 범위로 요청을 거르는 규칙을 만든다
> c) 인바운드 보안 그룹을 엄격히 하고 아웃바운드 규칙에 **URL을 지정**해 허용한다
> d) EC2 앞에 ALB를 두고 모든 아웃바운드를 ALB로 보내 URL 기반 리스너 규칙으로 처리한다
>> [!success]- Answer
>> a) 프라이빗 서브넷 라우팅 테이블이 아웃바운드를 **AWS Network Firewall**로 보내게 하고 **도메인 목록 규칙 그룹**을 구성한다
>> **왜 이 답인가** — **도메인(URL) 기준 아웃바운드 필터링**은 Network Firewall의 도메인 목록 규칙이 담당합니다. 승인된 저장소만 통과시키고 나머지는 막을 수 있습니다.
>> **나머지가 아닌 이유** — **보안 그룹은 URL을 지정할 수 없습니다**(IP·포트만 압니다). WAF는 들어오는 웹 요청을 거르는 도구이고, ALB는 인바운드 로드 밸런서라 아웃바운드 제어 장치가 아닙니다.

<sub>관련: [[aws-network-firewall]] [[amazon-vpc]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업의 웹 애플리케이션이 Amazon RDS를 씁니다. 신입 DBA가 테이블 정보를 잘못 수정해 데이터가 손실됐습니다. 이런 사고에 대비해 **최근 30일 이내 어떤 변경이든 그 5분 전 상태로 복원**할 수 있어야 합니다. 설계에 어떤 기능을 포함해야 합니까?
> a) 자동 백업(automated backups)
> b) 읽기 전용 복제본
> c) 수동 스냅샷
> d) 다중 AZ 배포
>> [!success]- Answer
>> a) 자동 백업(automated backups)
>> **왜 이 답인가** — RDS 자동 백업을 켜면 **지정 시간 복구(PITR)**가 가능해 보존 기간(최대 35일) 안의 원하는 시점으로 되돌릴 수 있습니다. 30일 요구를 만족합니다.
>> **나머지가 아닌 이유** — 수동 스냅샷은 뜬 시점으로만 돌아갑니다. 읽기 복제본과 다중 AZ는 잘못된 변경까지 그대로 복제하므로 논리적 손상에 대한 대비가 아닙니다.

<sub>관련: [[amazon-rds]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 계정 안 모든 애플리케이션의 **EC2 Auto Scaling 이벤트를 보고**하는 솔루션을 만듭니다. 서버리스 방식으로 상태 데이터를 S3에 저장하고 대시보드에 거의 실시간으로 반영해야 하며, **EC2 인스턴스 시작 속도에 영향을 주면 안 됩니다.** 어떻게 데이터를 S3로 옮겨야 합니까?
> a) **CloudWatch 지표 스트림**으로 Auto Scaling 상태 데이터를 Kinesis Data Firehose에 보내 S3에 저장한다
> b) EMR 클러스터를 띄워 상태 데이터를 수집하고 Firehose로 보내 S3에 저장한다
> c) EventBridge 규칙으로 Lambda를 예약 실행해 상태 데이터를 직접 S3로 보낸다
> d) 인스턴스 시작 시 부트스트랩 스크립트로 Kinesis Agent를 설치해 데이터를 수집·전송한다
>> [!success]- Answer
>> a) **CloudWatch 지표 스트림**으로 Auto Scaling 상태 데이터를 Kinesis Data Firehose에 보내 S3에 저장한다
>> **왜 이 답인가** — 지표 스트림은 CloudWatch 지표를 **거의 실시간으로 Firehose에 밀어 주는 관리형 기능**입니다. 서버가 없고 인스턴스 시작 과정에는 아무것도 추가하지 않습니다.
>> **나머지가 아닌 이유** — 부트스트랩 스크립트로 에이전트를 설치하면 **시작 시간이 늘어나** 조건을 어깁니다. EMR은 서버리스가 아니고, 예약 Lambda는 거의 실시간이 아닙니다.

<sub>관련: [[amazon-cloudwatch]] [[amazon-kinesis]] [[amazon-s3]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 한 기업이 여러 AZ의 EC2 Linux 인스턴스에서 애플리케이션을 운영합니다. 스토리지 계층은 **고가용성이고 POSIX 호환**이어야 하며, **최대 내구성**과 **여러 인스턴스 공유**가 필요합니다. 데이터는 **처음 30일 동안 자주**, 그 뒤에는 드물게 접근됩니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) **Amazon EFS Standard**를 쓰고 수명 주기 관리 정책으로 드물게 접근되는 데이터를 **EFS Standard-IA**로 옮긴다
> b) EFS One Zone을 쓰고 수명 주기로 EFS One Zone-IA로 옮긴다
> c) S3 Standard를 쓰고 수명 주기로 S3 Standard-IA로 옮긴다
> d) S3 Standard를 쓰고 수명 주기로 S3 Glacier로 옮긴다
>> [!success]- Answer
>> a) **Amazon EFS Standard**를 쓰고 수명 주기 관리 정책으로 드물게 접근되는 데이터를 **EFS Standard-IA**로 옮긴다
>> **왜 이 답인가** — `POSIX 호환` + `여러 인스턴스 공유`가 S3를 지웁니다(객체 스토리지는 POSIX가 아닙니다). EFS Standard는 여러 AZ에 저장해 내구성이 높고, 수명 주기로 IA 계층에 내리면 비용이 줄어듭니다.
>> **나머지가 아닌 이유** — EFS One Zone은 AZ 하나에만 두어 최대 내구성 요구에 어긋납니다.

<sub>관련: [[amazon-efs]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 보안 감사 결과 EC2 인스턴스가 **정기적으로 패치되지 않는다**는 것이 드러났습니다. 대규모 EC2 플릿에 **정기 보안 스캔**을 돌리고 **정해진 일정에 패치**하며 **인스턴스별 패치 상태 보고서**를 제공해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 계정에서 **Amazon Inspector**를 켜 취약점을 스캔하고, **Systems Manager Patch Manager**로 일정에 따라 패치한다
> b) Amazon Macie로 취약점을 스캔하고 인스턴스마다 크론 작업으로 패치한다
> c) GuardDuty로 취약점을 스캔하고 Session Manager로 일정에 따라 패치한다
> d) Amazon Detective로 취약점을 스캔하고 EventBridge 예약 규칙으로 패치한다
>> [!success]- Answer
>> a) 계정에서 **Amazon Inspector**를 켜 취약점을 스캔하고, **Systems Manager Patch Manager**로 일정에 따라 패치한다
>> **왜 이 답인가** — 역할이 정확히 나뉩니다 — **취약점 스캔은 Inspector**, **패치 일정과 규정 준수 보고는 Patch Manager**입니다.
>> **나머지가 아닌 이유** — Macie는 S3 민감 데이터, GuardDuty는 위협 탐지, Detective는 조사 분석 도구입니다. 크론이나 Session Manager는 패치 상태 보고를 제공하지 않습니다.

<sub>관련: [[amazon-inspector]] [[aws-systems-manager]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 전자상거래 기업이 여러 서버리스 함수와 AWS 서비스로 주문 처리 작업을 수행하는 분산 애플리케이션을 만듭니다. 워크플로에는 **사람의 수동 승인 단계**가 있고, 여러 Lambda 함수를 묶으면서 **EC2·컨테이너·온프레미스 서버의 데이터와 서비스도 오케스트레이션**해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) AWS Step Functions로 애플리케이션을 구성한다
> b) 모든 구성 요소를 AWS Glue 작업으로 통합한다
> c) Amazon SQS로 애플리케이션을 구성한다
> d) Lambda 함수와 EventBridge 이벤트로 구성한다
>> [!success]- Answer
>> a) AWS Step Functions로 애플리케이션을 구성한다
>> **왜 이 답인가** — Step Functions는 **여러 서비스를 순서·분기·재시도와 함께 오케스트레이션**하고, **작업 토큰(callback)** 방식으로 사람의 승인을 기다리는 단계도 표현할 수 있습니다.
>> **나머지가 아닌 이유** — SQS나 EventBridge만으로는 워크플로 상태와 승인 대기를 직접 구현해야 합니다. Glue는 ETL 도구입니다.

<sub>관련: [[aws-step-functions]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업의 애플리케이션이 매시간 **1GB짜리 .csv 파일 수백 개**를 S3 버킷에 넣습니다. 파일이 올라올 때마다 **Apache Parquet 형식으로 변환**해 S3에 넣어야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) .csv를 Parquet으로 바꾸는 AWS Glue ETL 작업을 만들고, S3 PUT 이벤트마다 Lambda 함수가 그 ETL 작업을 호출하게 한다
> b) .csv를 내려받아 변환해 올리는 Lambda 함수를 만들어 S3 PUT 이벤트마다 호출한다
> c) Spark 작업을 만들어 변환하고 S3 PUT 이벤트마다 Lambda로 Spark 작업을 호출한다
> d) Glue 테이블과 크롤러를 만들고 Lambda를 예약해 Athena 쿼리 결과를 Parquet으로 바꿔 저장한다
>> [!success]- Answer
>> a) .csv를 Parquet으로 바꾸는 AWS Glue ETL 작업을 만들고, S3 PUT 이벤트마다 Lambda 함수가 그 ETL 작업을 호출하게 한다
>> **왜 이 답인가** — 변환 자체는 **Glue가 기본으로 제공**하므로 코드를 쓰지 않고, Lambda는 작업을 시작시키는 방아쇠 역할만 합니다.
>> **나머지가 아닌 이유** — 1GB 파일을 Lambda 안에서 변환하는 것은 메모리·제한 시간 면에서 위험합니다. Spark 클러스터를 직접 운영하는 것은 오버헤드가 큽니다. Athena 결과를 다시 쓰는 방식은 우회적이고 실시간성이 떨어집니다.

<sub>관련: [[aws-glue]] [[aws-lambda]] [[amazon-s3]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 솔루션스 아키텍트가 데모 환경을 설계합니다. ALB 뒤 Auto Scaling 그룹의 EC2에서 실행되며 **근무 시간에 트래픽이 크게 늘고 주말에는 운영할 필요가 없습니다.** 수요에 맞춰 확장되게 하려면 어떤 조합이 필요합니까? (2개 선택)
> a) **대상 추적 조정 정책**으로 인스턴스 CPU 사용률 기준으로 Auto Scaling 그룹을 조정한다
> b) **예약 조정**으로 주말에는 최소·최대·희망 용량을 0으로 바꾸고 주 시작에 되돌린다
> c) AWS Auto Scaling으로 요청 속도에 따라 ALB 용량을 조정한다
> d) 여러 리전에 EC2를 띄워 부하를 분산한다
>> [!success]- Answer
>> a) **대상 추적 조정 정책**으로 인스턴스 CPU 사용률 기준으로 Auto Scaling 그룹을 조정한다
>> b) **예약 조정**으로 주말에는 최소·최대·희망 용량을 0으로 바꾸고 주 시작에 되돌린다
>> **왜 이 답인가** — 근무 시간 중의 변동은 **지표 기반 대상 추적**이, 주말 정지는 **시간 기반 예약 조정**이 담당합니다. 두 가지를 함께 쓰면 성능과 비용을 모두 잡습니다.
>> **나머지가 아닌 이유** — ALB와 인터넷 게이트웨이는 **AWS가 알아서 확장**하므로 조정할 대상이 아닙니다. 데모 환경에 여러 리전은 과합니다.

<sub>관련: [[amazon-ec2-auto-scaling]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업이 RDS DB 인스턴스에 데이터를 저장하려 하며 **저장 시 암호화**해야 합니다. 무엇을 해야 합니까?
> a) AWS KMS에서 키를 만들고 DB 인스턴스에 암호화를 활성화한다
> b) 암호화 키를 만들어 Secrets Manager에 저장하고 그 키로 DB 인스턴스를 암호화한다
> c) ACM에서 인증서를 만들어 DB 인스턴스에 SSL/TLS를 켠다
> d) IAM에서 인증서를 만들어 SSL/TLS를 켠다
>> [!success]- Answer
>> a) AWS KMS에서 키를 만들고 DB 인스턴스에 암호화를 활성화한다
>> **왜 이 답인가** — RDS의 **저장 시 암호화는 KMS 키로 인스턴스 생성 시 켭니다.** 스토리지·스냅샷·읽기 복제본까지 함께 암호화됩니다.
>> **나머지가 아닌 이유** — SSL/TLS 인증서는 **전송 중 암호화**입니다. Secrets Manager는 비밀 보관소이지 스토리지 암호화 키 관리 서비스가 아닙니다.

<sub>관련: [[amazon-rds]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 기업의 애플리케이션이 여러 EC2 인스턴스에서 돌고 각 인스턴스에는 여러 EBS 데이터 볼륨이 붙어 있습니다. **인스턴스 구성과 데이터를 매일 밤 백업**해야 하고 **다른 리전에서 복구**할 수 있어야 합니다. 운영 효율이 가장 높은 솔루션은 무엇입니까?
> a) AWS Backup으로 야간 백업 계획을 만들고 다른 리전으로 백업을 복사하며, **EC2 인스턴스를 리소스로** 추가한다
> b) AWS Backup 계획을 만들고 다른 리전으로 복사하되 **EBS 볼륨을 리소스로** 추가한다
> c) EBS 볼륨의 야간 스냅샷을 예약해 다른 리전으로 복사하는 Lambda 함수를 작성한다
> d) EBS 볼륨의 야간 스냅샷을 예약해 다른 가용 영역으로 복사하는 Lambda 함수를 작성한다
>> [!success]- Answer
>> a) AWS Backup으로 야간 백업 계획을 만들고 다른 리전으로 백업을 복사하며, **EC2 인스턴스를 리소스로** 추가한다
>> **왜 이 답인가** — EC2 인스턴스를 백업 대상으로 지정하면 **인스턴스 구성과 연결된 EBS 볼륨이 함께** 백업됩니다(AMI 형태). 볼륨만 지정하면 인스턴스 구성이 빠집니다.
>> **나머지가 아닌 이유** — Lambda로 직접 만드는 방식은 코드를 유지해야 합니다. 다른 AZ로만 복사하면 리전 재해에 대응하지 못합니다.

<sub>관련: [[aws-backup]] [[amazon-ec2]] [[amazon-ebs]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 소매 웹사이트를 전 세계에 배포했습니다. 웹사이트는 Elastic Load Balancer 뒤 여러 AZ의 Auto Scaling 그룹 EC2에서 실행됩니다. 이 기업은 고객이 **접속에 사용하는 기기에 따라 다른 버전의 콘텐츠**를 제공하려고 합니다. 어떤 조합이 필요합니까? (2개 선택)
> a) Amazon CloudFront가 콘텐츠의 여러 버전을 캐시하도록 구성한다
> b) `User-Agent` 헤더에 따라 특정 객체를 보내는 Lambda@Edge 함수를 구성한다
> c) Network Load Balancer의 호스트 헤더로 다른 인스턴스에 트래픽을 전달하도록 구성한다
> d) Global Accelerator로 NLB에 요청을 보내고 NLB에 경로 기반 라우팅을 구성한다
>> [!success]- Answer
>> a) Amazon CloudFront가 콘텐츠의 여러 버전을 캐시하도록 구성한다
>> b) `User-Agent` 헤더에 따라 특정 객체를 보내는 Lambda@Edge 함수를 구성한다
>> **왜 이 답인가** — 기기 구분은 **`User-Agent` 헤더**로 하고, 그 판단을 **엣지에서** 내리는 것이 Lambda@Edge입니다. CloudFront는 그 헤더를 캐시 키에 넣어 버전별로 따로 캐시합니다.
>> **나머지가 아닌 이유** — NLB는 계층 4라 **호스트 헤더나 경로를 보지 못합니다.** Global Accelerator도 콘텐츠를 구분해 주지 않습니다.

<sub>관련: [[amazon-cloudfront]] [[aws-lambda]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업의 웹 애플리케이션은 **월초에 사용량이 많고 주 초에는 중간이며 주중에는 예측 불가**합니다. 웹 서버와 MySQL 데이터베이스로 되어 있고, **데이터베이스를 수정하지 않으면서** 비용 효율적인 플랫폼으로 옮기려 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) MySQL 호환 **Amazon Aurora Serverless**
> b) Amazon RDS for MySQL
> c) Amazon DynamoDB
> d) EC2 Auto Scaling 그룹에 배포한 MySQL
>> [!success]- Answer
>> a) MySQL 호환 **Amazon Aurora Serverless**
>> **왜 이 답인가** — 사용량이 **들쭉날쭉하고 예측 불가**하므로 용량이 자동으로 오르내리는 Aurora Serverless가 가장 비용 효율적입니다. MySQL 호환이라 데이터베이스를 고칠 필요도 없습니다.
>> **나머지가 아닌 이유** — RDS는 인스턴스 크기를 미리 정해야 합니다. DynamoDB는 관계형이 아니라 애플리케이션을 고쳐야 합니다. EC2 MySQL은 관리 부담이 큽니다.

<sub>관련: [[amazon-aurora]] | 모듈 [[13-cost-database]]</sub>

> [!question] 한 기업이 직원들에게 **기밀·민감 파일에 대한 안전한 접근**을 제공해야 합니다. 인가된 사용자만 접근할 수 있어야 하고 파일은 안전하게 기기로 다운로드되어야 합니다. 파일은 온프레미스 Windows 파일 서버에 있는데 원격 근무가 늘어 **용량이 부족**합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 파일을 Amazon FSx for Windows File Server로 옮겨 온프레미스 Active Directory와 통합하고 **AWS Client VPN**을 구성한다
> b) 파일 서버를 퍼블릭 서브넷의 EC2로 옮기고 보안 그룹으로 직원 IP만 허용한다
> c) 파일을 S3로 옮기고 프라이빗 VPC 엔드포인트를 만들어 서명된 URL로 내려받게 한다
> d) 파일을 S3로 옮기고 퍼블릭 VPC 엔드포인트를 만들어 IAM Identity Center로 로그인하게 한다
>> [!success]- Answer
>> a) 파일을 Amazon FSx for Windows File Server로 옮겨 온프레미스 Active Directory와 통합하고 **AWS Client VPN**을 구성한다
>> **왜 이 답인가** — 용량 문제는 관리형 FSx가 해결하고, **기존 AD 권한을 그대로 적용**하며, 원격 직원은 Client VPN으로 프라이빗하게 접속합니다. 파일 접근 방식도 바뀌지 않습니다.
>> **나머지가 아닌 이유** — EC2 파일 서버를 퍼블릭에 두는 것은 노출이 큽니다. S3로 옮기면 접근 방식이 완전히 달라지고, `퍼블릭 VPC 엔드포인트`라는 구성은 존재하지 않습니다.

<sub>관련: [[amazon-fsx]] [[aws-directory-service]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 전자상거래 기업이 ALB 뒤 Auto Scaling 그룹 EC2와 다중 AZ RDS for MariaDB로 애플리케이션을 운영합니다. 거래 중 **고객 세션 관리를 최적화**하고 세션 데이터를 **내구성 있게 저장**하려고 합니다. 어떤 조합이 요구를 충족합니까? (2개 선택)
> a) 고객 세션 정보를 **Amazon DynamoDB 테이블**에 저장한다
> b) 고객 세션 정보를 **Amazon ElastiCache for Redis 클러스터**에 저장한다
> c) ALB에서 고정 세션(세션 어피니티)을 켠다
> d) Amazon Cognito 사용자 풀을 배포해 세션 정보를 관리한다
>> [!success]- Answer
>> a) 고객 세션 정보를 **Amazon DynamoDB 테이블**에 저장한다
>> b) 고객 세션 정보를 **Amazon ElastiCache for Redis 클러스터**에 저장한다
>> **왜 이 답인가** — 세션을 **인스턴스 밖 공용 저장소**에 두면 어떤 인스턴스로 요청이 가도 세션이 유지되고 인스턴스가 사라져도 잃지 않습니다. DynamoDB와 Redis 모두 이 용도로 널리 쓰입니다.
>> **나머지가 아닌 이유** — 고정 세션은 인스턴스가 죽으면 세션도 사라집니다. Cognito는 인증·자격 증명 서비스이지 애플리케이션 세션 저장소가 아닙니다.

<sub>관련: [[amazon-dynamodb]] [[amazon-elasticache]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 여러 마이크로서비스로 된 애플리케이션을 컨테이너로 AWS에 배포하기로 했습니다. **유지 관리와 확장에 드는 지속적인 노력을 최소화**해야 하고 **추가 인프라를 관리할 수 없습니다.** 어떤 조합이 필요합니까? (2개 선택)
> a) Amazon ECS 클러스터를 배포한다
> b) **Fargate 시작 유형**의 ECS 서비스를 배포하고 원하는 작업 수를 2개 이상으로 지정한다
> c) EC2 시작 유형의 ECS 서비스를 배포하고 원하는 작업 수를 2개 이상으로 지정한다
> d) 여러 AZ의 EC2 인스턴스에 Kubernetes 워커 노드를 배포하고 마이크로서비스마다 복제본을 2개 이상 둔다
>> [!success]- Answer
>> a) Amazon ECS 클러스터를 배포한다
>> b) **Fargate 시작 유형**의 ECS 서비스를 배포하고 원하는 작업 수를 2개 이상으로 지정한다
>> **왜 이 답인가** — 컨테이너 오케스트레이션은 관리형 ECS가 맡고, **Fargate가 실행 인프라를 감춥니다.** 작업 수를 2 이상으로 두면 가용성도 확보됩니다.
>> **나머지가 아닌 이유** — EC2 시작 유형이나 직접 띄운 Kubernetes 노드는 **관리할 인프라가 남아** 조건을 어깁니다.

<sub>관련: [[amazon-ecs]] [[aws-fargate]] | 모듈 [[07-perf-compute]]</sub>

> [!question] 한 기업이 여러 S3 버킷에 페타바이트급 데이터를 S3 Standard로 저장하며 **접근 빈도가 제각각이고 패턴을 모릅니다.** 버킷마다 S3 비용을 최적화하려면, **운영 효율이 가장 높은** 솔루션은 무엇입니까?
> a) 객체를 **S3 Intelligent-Tiering**으로 전환하는 수명 주기 규칙을 만든다
> b) S3 스토리지 클래스 분석 도구로 객체마다 적절한 계층을 판단해 옮긴다
> c) 객체를 S3 Glacier Instant Retrieval로 전환하는 규칙을 만든다
> d) 객체를 S3 One Zone-IA로 전환하는 규칙을 만든다
>> [!success]- Answer
>> a) 객체를 **S3 Intelligent-Tiering**으로 전환하는 수명 주기 규칙을 만든다
>> **왜 이 답인가** — `패턴을 모른다`가 Intelligent-Tiering의 조건입니다. 규칙 하나로 모든 버킷에 적용하면 이후 계층 이동은 자동이라 사람이 판단할 일이 없습니다.
>> **나머지가 아닌 이유** — 분석 도구로 객체마다 판단해 옮기는 것은 페타바이트 규모에서 불가능합니다. 패턴을 모르는 채 IA·아카이브로 내리면 검색 요금과 지연이 생깁니다.

<sub>관련: [[amazon-s3]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 기업의 다계층 웹 애플리케이션이 Aurora MySQL DB 클러스터를 쓰고 애플리케이션 계층은 EC2에 있습니다. 보안 지침상 **데이터베이스 자격 증명을 암호화하고 14일마다 교체**해야 합니다. 운영 노력이 가장 적은 방법은 무엇입니까?
> a) KMS 키를 만들고 **Secrets Manager**로 그 키를 쓰는 보안 암호를 만들어 Aurora 클러스터와 연결한 뒤 **교체 주기를 14일**로 설정한다
> b) Parameter Store에 사용자 이름과 SecureString 암호를 두고 Lambda로 14일마다 교체한다
> c) KMS로 암호화한 EFS에 자격 증명 파일을 두고 Lambda로 14일마다 교체해 파일을 갱신한다
> d) KMS로 암호화한 S3 버킷에 자격 증명 파일을 두고 Lambda로 교체해 업로드한다
>> [!success]- Answer
>> a) KMS 키를 만들고 **Secrets Manager**로 그 키를 쓰는 보안 암호를 만들어 Aurora 클러스터와 연결한 뒤 **교체 주기를 14일**로 설정한다
>> **왜 이 답인가** — Secrets Manager는 **RDS·Aurora와 통합된 자동 교체**를 제공하고 교체 주기를 사용자가 지정할 수 있습니다. 암호화는 KMS가 맡습니다.
>> **나머지가 아닌 이유** — 나머지 셋은 모두 **교체 로직을 직접 Lambda로 만들어 유지**해야 합니다. 이미 있는 기능을 손으로 다시 만드는 일입니다.

<sub>관련: [[aws-secrets-manager]] [[amazon-aurora]] [[aws-kms]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 DynamoDB에 날씨 데이터를 저장하며, **새 기상 이벤트가 기록될 때마다 내부 4개 팀 관리자에게 알림**을 보내는 서비스를 만들려 합니다. 이 서비스가 **기존 애플리케이션 성능에 영향을 주면 안 됩니다.** 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 테이블에 **DynamoDB Streams**를 켜고 트리거로 **SNS 주제 하나**에 쓰게 한 뒤 각 팀이 구독하게 한다
> b) 현재 애플리케이션이 SNS 주제 네 개에 게시하고 팀마다 하나씩 구독하게 한다
> c) DynamoDB 트랜잭션으로 새 데이터를 쓰면서 내부 팀에 알리도록 구성한다
> d) 레코드에 플래그 속성을 추가하고 크론 작업이 매분 테이블을 스캔해 SQS로 알린다
>> [!success]- Answer
>> a) 테이블에 **DynamoDB Streams**를 켜고 트리거로 **SNS 주제 하나**에 쓰게 한 뒤 각 팀이 구독하게 한다
>> **왜 이 답인가** — Streams는 **테이블 변경을 애플리케이션과 무관하게** 흘려보내므로 기존 성능에 영향이 없습니다. 주제 하나에 네 팀이 구독하면 팀이 늘어도 코드를 고칠 일이 없습니다.
>> **나머지가 아닌 이유** — 애플리케이션이 직접 네 곳에 게시하면 애플리케이션을 고쳐야 하고 지연도 늘어납니다. 매분 스캔은 비용과 부하가 크고, 트랜잭션에는 알림 기능이 없습니다.

<sub>관련: [[amazon-dynamodb]] [[amazon-sns]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 게임 기업의 플랫폼이 **모든 AWS 리전**에 배포되어 있고, ALB 뒤 Auto Scaling 그룹의 EC2에서 실행됩니다. 지연 시간이 사용자 경험과 공정성에 직결되므로, **애플리케이션 상태를 감시해 정상 엔드포인트로 트래픽을 돌리는** 장치가 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) AWS Global Accelerator에 액셀러레이터를 구성하고 애플리케이션 포트 리스너를 추가한 뒤, 리전마다 엔드포인트 그룹을 만들어 ALB를 엔드포인트로 등록한다
> b) ALB를 오리진으로 CloudFront 배포를 만들고 오리진 캐시 헤더를 쓰며 Lambda로 트래픽을 최적화한다
> c) S3를 오리진으로 CloudFront 배포를 만들고 캐시 동작을 구성한다
> d) DynamoDB를 데이터 저장소로 쓰고 DAX 클러스터를 인메모리 캐시로 둔다
>> [!success]- Answer
>> a) AWS Global Accelerator에 액셀러레이터를 구성하고 애플리케이션 포트 리스너를 추가한 뒤, 리전마다 엔드포인트 그룹을 만들어 ALB를 엔드포인트로 등록한다
>> **왜 이 답인가** — Global Accelerator는 **엔드포인트 상태를 계속 확인하며 가장 가깝고 정상인 리전으로** 트래픽을 보냅니다. 게임처럼 지연에 민감하고 캐시할 수 없는 트래픽에 맞습니다.
>> **나머지가 아닌 이유** — CloudFront는 캐시 가능한 콘텐츠 전달에 강하고, 게임 트래픽의 리전 상태 기반 전환 장치가 아닙니다. DAX는 데이터베이스 캐시라 요구와 다릅니다.

<sub>관련: [[aws-global-accelerator]] [[elastic-load-balancing]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 EC2 인스턴스와 Lambda 함수로 애플리케이션을 운영합니다. **EC2는 프라이빗 서브넷**에 있고 **Lambda가 EC2에 직접 네트워크로 접근**해야 합니다. 애플리케이션은 최소 1년 운영되며 **Lambda 함수 수가 늘어날 것**으로 예상됩니다. 모든 리소스의 절감을 최대화하고 지연은 낮게 유지하려면 어떤 솔루션이 적합합니까?
> a) **Compute Savings Plans**를 구매하고 Lambda의 실행 시간·메모리·호출 수·전송량을 최적화하며, **Lambda를 EC2가 있는 프라이빗 서브넷에 연결**한다
> b) EC2 Instance Savings Plans를 사고 Lambda를 프라이빗 서브넷에 연결한다
> c) EC2 Instance Savings Plans를 사고 Lambda를 같은 VPC의 퍼블릭 서브넷에 연결한다
> d) Compute Savings Plans를 사고 Lambda는 Lambda 서비스 VPC에 그대로 둔다
>> [!success]- Answer
>> a) **Compute Savings Plans**를 구매하고 Lambda의 실행 시간·메모리·호출 수·전송량을 최적화하며, **Lambda를 EC2가 있는 프라이빗 서브넷에 연결**한다
>> **왜 이 답인가** — **Lambda까지 할인이 적용되는 약정은 Compute Savings Plans뿐**입니다. 그리고 Lambda가 프라이빗 서브넷의 EC2에 직접 닿으려면 같은 서브넷(VPC)에 연결해야 하고, 그래야 지연도 가장 낮습니다.
>> **나머지가 아닌 이유** — EC2 Instance Savings Plans는 Lambda를 덮지 못합니다. Lambda를 VPC 밖에 두면 프라이빗 인스턴스에 직접 접근할 수 없습니다.

<sub>관련: [[aws-lambda]] [[amazon-ec2]] [[amazon-vpc]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업의 사용자 지정 애플리케이션이 **코드에 자격 증명이 박힌 채** RDS MySQL에서 정보를 가져옵니다. **프로그래밍 노력을 최소로** 하면서 보안을 강화하려면 무엇을 해야 합니까?
> a) RDS에 애플리케이션 사용자 자격 증명을 만들어 **Secrets Manager**에 저장하고 애플리케이션이 거기서 불러오게 하며, **Secrets Manager의 자격 증명 교체 일정**을 설정한다
> b) 자격 증명을 Secrets Manager에 저장하고 애플리케이션이 불러오게 하되 **Lambda 함수를 직접 만들어** 교체한다
> c) 자격 증명을 Parameter Store에 저장하고 Parameter Store에서 교체 일정을 설정한다
> d) KMS로 키를 만들어 애플리케이션이 KMS에서 자격 증명을 불러오게 하고 자동 키 교체를 켠다
>> [!success]- Answer
>> a) RDS에 애플리케이션 사용자 자격 증명을 만들어 **Secrets Manager**에 저장하고 애플리케이션이 거기서 불러오게 하며, **Secrets Manager의 자격 증명 교체 일정**을 설정한다
>> **왜 이 답인가** — Secrets Manager는 **RDS 자격 증명 교체를 내장 기능으로** 제공하므로 교체 코드를 짤 필요가 없습니다. 애플리케이션은 값을 불러오는 부분만 바꾸면 됩니다.
>> **나머지가 아닌 이유** — Lambda를 직접 만드는 보기는 이미 있는 기능을 다시 만드는 일입니다. Parameter Store에는 자격 증명 교체 기능이 없고, KMS는 자격 증명 저장소가 아닙니다.

<sub>관련: [[aws-secrets-manager]] [[amazon-rds]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 온프레미스 애플리케이션을 AWS로 옮겨 **고가용성과 복원력**을 갖추려 합니다. 최근 정전으로 데이터베이스 서버가 멈춰 데이터가 손실됐습니다. **단일 장애 지점이 없어야** 하고 수요에 맞춰 확장할 수 있어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 애플리케이션 서버는 **여러 AZ에 걸친 Auto Scaling 그룹**의 EC2로, 데이터베이스는 **다중 AZ 구성의 Amazon RDS**로 배포한다
> b) 애플리케이션 서버는 단일 AZ Auto Scaling 그룹으로, 데이터베이스는 EC2에 두고 자동 복구를 켠다
> c) 애플리케이션 서버는 여러 AZ Auto Scaling 그룹으로, 데이터베이스는 단일 AZ 읽기 복제본을 두고 장애 시 승격한다
> d) 애플리케이션 서버는 여러 AZ Auto Scaling 그룹으로, 데이터베이스는 여러 AZ의 EC2에 두고 EBS 다중 연결로 스토리지를 공유한다
>> [!success]- Answer
>> a) 애플리케이션 서버는 **여러 AZ에 걸친 Auto Scaling 그룹**의 EC2로, 데이터베이스는 **다중 AZ 구성의 Amazon RDS**로 배포한다
>> **왜 이 답인가** — 두 계층 모두에서 단일 장애 지점을 없애야 합니다. 컴퓨팅은 ASG가 여러 AZ에 분산하고, 데이터베이스는 다중 AZ RDS가 동기 복제와 자동 장애 조치를 제공합니다.
>> **나머지가 아닌 이유** — 단일 AZ 구성이나 단일 AZ 읽기 복제본은 그 AZ가 죽으면 함께 무너집니다. **EBS 다중 연결은 AZ를 넘지 못하며** 데이터베이스 고가용성 구성 방식이 아닙니다.

<sub>관련: [[amazon-rds]] [[amazon-ec2-auto-scaling]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업의 모바일 앱 사용자가 100만 명입니다. 데이터 사용을 **거의 실시간으로 분석**하고, 거의 실시간으로 **암호화**하며, **Apache Parquet 형식으로 중앙에 저장**해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) Kinesis Data Firehose 전송 스트림으로 데이터를 S3에 저장하고 Kinesis Data Analytics 애플리케이션으로 분석한다
> b) Firehose로 S3에 저장하고 EMR 클러스터로 분석한다
> c) Kinesis 데이터 스트림으로 S3에 저장하고 Kinesis Data Analytics로 분석하며 Lambda로 데이터를 보낸다
> d) Kinesis 데이터 스트림으로 S3에 저장하고 EMR 클러스터로 분석한다
>> [!success]- Answer
>> a) Kinesis Data Firehose 전송 스트림으로 데이터를 S3에 저장하고 Kinesis Data Analytics 애플리케이션으로 분석한다
>> **왜 이 답인가** — Firehose는 **S3 전달, 저장 시 암호화, Parquet 형식 변환을 모두 기능으로 제공**합니다. 실시간 분석은 Kinesis Data Analytics가 맡아 관리할 서버가 없습니다.
>> **나머지가 아닌 이유** — EMR은 클러스터를 운영해야 합니다. 데이터 스트림만으로는 S3 저장과 형식 변환을 직접 구현해야 해서 손이 더 갑니다.

<sub>관련: [[amazon-kinesis]] [[amazon-s3]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 한 기업의 애플리케이션에 **24시간 돌아야 하는 프런트엔드 노드**와 워크로드에 따라 **짧게만 도는 백엔드 노드**가 있습니다. 워크로드에 맞춰 확장·축소해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) 프런트엔드는 **예약 인스턴스**, 백엔드는 **스팟 인스턴스**를 사용한다
> b) 프런트엔드는 예약 인스턴스, 백엔드는 AWS Fargate를 사용한다
> c) 프런트엔드는 스팟, 백엔드는 예약 인스턴스를 사용한다
> d) 프런트엔드는 스팟, 백엔드는 Fargate를 사용한다
>> [!success]- Answer
>> a) 프런트엔드는 **예약 인스턴스**, 백엔드는 **스팟 인스턴스**를 사용한다
>> **왜 이 답인가** — **항상 켜져 있는 것**은 약정 할인이 가장 싸고, **짧게 돌다 사라져도 되는 것**은 스팟이 가장 쌉니다.
>> **나머지가 아닌 이유** — 프런트엔드를 스팟으로 두면 회수 시 서비스가 끊깁니다. 예약 인스턴스는 짧게만 도는 백엔드에 맞지 않습니다.

<sub>관련: [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 미디어 기업의 웹사이트가 ALB 뒤 EC2 플릿과 Aurora로 구성되어 있습니다. 보안 팀이 이 애플리케이션이 **SQL 인젝션에 취약**하다고 보고했습니다. 어떻게 해결해야 합니까?
> a) ALB 앞에 AWS WAF를 두고 적절한 웹 ACL을 연결한다
> b) SQL 인젝션에 고정 응답을 돌려주는 ALB 리스너 규칙을 만든다
> c) AWS Shield Advanced를 구독해 SQL 인젝션을 자동 차단한다
> d) Amazon Inspector로 SQL 인젝션을 자동 차단한다
>> [!success]- Answer
>> a) ALB 앞에 AWS WAF를 두고 적절한 웹 ACL을 연결한다
>> **왜 이 답인가** — SQL 인젝션은 **계층 7 웹 공격**이고, WAF에는 이를 막는 **관리형 규칙 그룹**이 준비되어 있습니다.
>> **나머지가 아닌 이유** — Shield는 DDoS 완화입니다. Inspector는 취약점 평가라 요청을 막지 않습니다. ALB 리스너 규칙은 요청 내용을 검사해 공격을 식별하지 못합니다.

<sub>관련: [[aws-waf]] [[elastic-load-balancing]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업의 서버리스 애플리케이션이 S3에 문서가 올라오면 Lambda를 호출해 처리합니다. 마케팅 캠페인 후 **많은 문서가 처리되지 않은 것**이 확인되었습니다. 아키텍처를 개선하려면 무엇을 해야 합니까?
> a) **Amazon SQS 큐**를 만들어 요청을 큐로 보내고 그 큐를 Lambda의 이벤트 소스로 구성한다
> b) Lambda 실행 제한 시간을 15분으로 설정한다
> c) S3 버킷 복제 정책을 구성해 문서를 나중에 처리하도록 대기시킨다
> d) Lambda 함수를 하나 더 배포해 처리를 분산한다
>> [!success]- Answer
>> a) **Amazon SQS 큐**를 만들어 요청을 큐로 보내고 그 큐를 Lambda의 이벤트 소스로 구성한다
>> **왜 이 답인가** — 급증으로 **동시 실행 한도에 걸려 호출이 버려진** 것입니다. 큐를 끼우면 초과분이 쌓였다가 처리되므로 문서가 사라지지 않습니다.
>> **나머지가 아닌 이유** — 제한 시간을 늘리는 것은 함수 하나의 실행 길이일 뿐이고, 함수를 하나 더 두어도 같은 계정 동시성 한도를 나눠 쓸 뿐입니다.

<sub>관련: [[amazon-sqs]] [[aws-lambda]] [[amazon-s3]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 게임 기업의 점수 표시 웹 애플리케이션이 ALB 뒤 EC2에서 실행되고 데이터는 RDS for MySQL에 있습니다. **데이터베이스 읽기 성능** 때문에 지연과 끊김이 발생합니다. **아키텍처 변경을 최소화**하면서 사용자 경험을 개선하려면 무엇을 해야 합니까?
> a) 데이터베이스 앞에 Amazon ElastiCache를 둔다
> b) 애플리케이션과 데이터베이스 사이에 RDS Proxy를 둔다
> c) 애플리케이션을 EC2에서 Lambda로 옮긴다
> d) 데이터베이스를 RDS for MySQL에서 DynamoDB로 옮긴다
>> [!success]- Answer
>> a) 데이터베이스 앞에 Amazon ElastiCache를 둔다
>> **왜 이 답인가** — 점수처럼 **같은 값을 반복해서 읽는** 워크로드는 캐시가 가장 효과적입니다. 데이터베이스 부하가 줄고 응답이 마이크로초 수준으로 빨라집니다.
>> **나머지가 아닌 이유** — RDS Proxy는 **연결 수** 문제를 다루지 읽기 성능 자체를 올리지 않습니다. Lambda 전환이나 DynamoDB 이전은 아키텍처를 크게 바꾸는 일입니다.

<sub>관련: [[amazon-elasticache]] [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 한 기업이 웹 애플리케이션 콘텐츠에 대한 접근을 제한하려 합니다. **서버리스 아키텍처**와 **100명 미만의 인증** 솔루션이 필요하고, 웹 콘텐츠는 전 세계에 제공되어야 하며 **로그인 지연은 최소**여야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) 인증에는 Amazon Cognito를, 인가에는 **Lambda@Edge**를 쓰고 Amazon CloudFront로 전 세계에 제공한다
> b) 인증에 Directory Service for Microsoft AD를, 인가에 Lambda를 쓰고 ALB로 제공한다
> c) 인증에 Cognito를, 인가에 Lambda를 쓰고 S3 Transfer Acceleration으로 제공한다
> d) 인증에 Directory Service를, 인가에 Lambda@Edge를 쓰고 Elastic Beanstalk으로 제공한다
>> [!success]- Answer
>> a) 인증에는 Amazon Cognito를, 인가에는 **Lambda@Edge**를 쓰고 Amazon CloudFront로 전 세계에 제공한다
>> **왜 이 답인가** — 세 요구가 각각 대응합니다 — **서버리스 인증은 Cognito**, **엣지에서의 인가 판단은 Lambda@Edge**, **전 세계 배포는 CloudFront**. 인가를 엣지에서 처리하므로 로그인 지연도 가장 낮습니다.
>> **나머지가 아닌 이유** — Directory Service는 디렉터리 인프라 요금이 상시 발생해 100명 미만에 과합니다. Transfer Acceleration은 업로드 가속이라 콘텐츠 배포 수단이 아닙니다.

<sub>관련: [[amazon-cognito]] [[amazon-cloudfront]] [[aws-lambda]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 전자상거래 기업의 2계층 애플리케이션에서 트래픽이 늘자 **마케팅·주문 확인 이메일 발송이 크게 지연**됩니다. **복잡한 이메일 전달 문제에 쓰는 시간과 운영 오버헤드를 줄이려면** 무엇을 해야 합니까?
> a) 웹 인스턴스가 **Amazon Simple Email Service(Amazon SES)**를 통해 메일을 보내도록 구성한다
> b) 이메일 처리 전용 EC2 애플리케이션 계층을 따로 만든다
> c) 웹 인스턴스가 Amazon SNS를 통해 메일을 보내도록 구성한다
> d) 이메일 전용 EC2 계층을 만들어 Auto Scaling 그룹에 넣는다
>> [!success]- Answer
>> a) 웹 인스턴스가 **Amazon Simple Email Service(Amazon SES)**를 통해 메일을 보내도록 구성한다
>> **왜 이 답인가** — 대량 발송·평판 관리·반송 처리 같은 **메일 전달의 어려운 부분을 SES가 대신** 맡습니다. 메일 서버를 직접 운영할 이유가 없습니다.
>> **나머지가 아닌 이유** — 전용 EC2 계층을 만드는 것은 운영 부담을 늘립니다. SNS는 알림용이라 마케팅 메일 발송 서비스가 아닙니다.

<sub>관련: [[amazon-sns]] [[amazon-ec2]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 전자상거래 기업의 RDS 기반 웹 애플리케이션 성능이 나빠졌습니다. 원인은 **비즈니스 분석가들이 돌리는 읽기 전용 SQL 쿼리**가 늘어난 것입니다. 기존 애플리케이션을 최소로 바꾸면서 해결하려면 무엇을 권장해야 합니까?
> a) 기본 데이터베이스의 읽기 전용 복제본을 만들어 분석가들이 거기서 쿼리하게 한다
> b) 데이터를 DynamoDB로 내보내 분석가들이 쿼리하게 한다
> c) 데이터를 ElastiCache에 적재해 분석가들이 쿼리하게 한다
> d) 데이터를 Redshift 클러스터로 복사해 분석가들이 쿼리하게 한다
>> [!success]- Answer
>> a) 기본 데이터베이스의 읽기 전용 복제본을 만들어 분석가들이 거기서 쿼리하게 한다
>> **왜 이 답인가** — 같은 SQL을 그대로 쓰면서 읽기 부하만 떼어 낼 수 있습니다. 애플리케이션은 손대지 않고 분석가의 연결 대상만 바꾸면 됩니다.
>> **나머지가 아닌 이유** — DynamoDB나 Redshift로 옮기면 쿼리를 다시 써야 하고 적재 파이프라인이 필요합니다. ElastiCache는 임의 분석 쿼리에 맞지 않습니다.

<sub>관련: [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 한 기업이 **고객 관리형 KMS 키로 암호화된** Aurora PostgreSQL 데이터베이스를 운영합니다. 최근 인수되어 **데이터베이스 백업을 인수 기업의 AWS 계정과 안전하게 공유**해야 합니다(같은 리전). 무엇을 해야 합니까?
> a) DB 스냅샷을 만들고 **KMS 키 정책에 인수 기업 계정을 추가**한 뒤 스냅샷을 그 계정과 공유한다
> b) 스냅샷을 만들어 암호화되지 않은 새 스냅샷으로 복사한 뒤 공유한다
> c) 다른 AWS 관리형 KMS 키로 스냅샷을 만들고 키 별칭에 인수 기업 계정을 추가한 뒤 공유한다
> d) 스냅샷을 내려받아 S3에 올리고 버킷 정책으로 접근을 허용한다
>> [!success]- Answer
>> a) DB 스냅샷을 만들고 **KMS 키 정책에 인수 기업 계정을 추가**한 뒤 스냅샷을 그 계정과 공유한다
>> **왜 이 답인가** — 암호화된 스냅샷을 공유하려면 **스냅샷 공유 권한**과 **복호화에 쓸 KMS 키 사용 권한**이 함께 있어야 합니다. 키 정책에 상대 계정을 추가하는 것이 그 절차입니다.
>> **나머지가 아닌 이유** — 암호를 풀어 공유하는 것은 기밀 데이터에 대한 보안 요구를 어깁니다. **AWS 관리형 키는 공유할 수 없고** 키 별칭에 계정을 추가한다는 개념도 없습니다.

<sub>관련: [[amazon-aurora]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 기업이 ML 모델을 **독립 마이크로서비스**로 개발합니다. 각 모델은 시작할 때 **S3에서 약 1GB 데이터를 읽어 메모리에 올립니다.** 사용자는 **비동기 API**로 요청이나 배치를 보냅니다. 어떤 모델은 며칠씩 안 쓰이고 어떤 모델은 한 번에 수천 건을 받습니다. 어떤 설계를 권장해야 합니까?
> a) API 요청을 **Amazon SQS 큐**로 보내고, 모델을 **Amazon ECS 서비스**로 배포해 큐에서 읽게 하며, 큐 크기에 따라 클러스터와 서비스 복제본을 자동 조정한다
> b) 요청을 SQS로 보내고 모델을 Lambda로 배포해 SQS 이벤트로 호출하며 Auto Scaling으로 vCPU를 늘린다
> c) 요청을 NLB로 보내고 모델을 Lambda로 배포해 NLB가 호출하게 한다
> d) 요청을 ALB로 보내고 모델을 ECS 서비스로 배포해 App Mesh로 클러스터를 조정한다
>> [!success]- Answer
>> a) API 요청을 **Amazon SQS 큐**로 보내고, 모델을 **Amazon ECS 서비스**로 배포해 큐에서 읽게 하며, 큐 크기에 따라 클러스터와 서비스 복제본을 자동 조정한다
>> **왜 이 답인가** — 시작할 때 **1GB를 메모리에 올리는** 워크로드는 오래 살아 있는 컨테이너에 맞습니다. 비동기 요청은 큐가 완충하고, 큐 길이로 조정하면 안 쓰는 모델은 0에 가깝게 줄어듭니다.
>> **나머지가 아닌 이유** — Lambda는 호출마다 1GB 로딩이 반복되어 비효율적이고 메모리·시간 제약이 있습니다. Lambda에 vCPU를 Auto Scaling으로 늘리는 개념도 없습니다.

<sub>관련: [[amazon-ecs]] [[amazon-sqs]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 병원이 환자 기록을 S3에 저장합니다. 규정 준수 팀은 모든 **PHI가 전송 중과 저장 시 암호화**되어야 하고, **저장 시 암호화 키를 규정 준수 팀이 직접 관리**해야 한다고 요구합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 버킷 정책의 `aws:SecureTransport` 조건으로 HTTPS 연결만 허용하고, 버킷 기본 암호화를 **SSE-KMS**로 설정한 뒤 규정 준수 팀이 KMS 키를 관리하게 한다
> b) `aws:SecureTransport` 조건을 걸고 기본 암호화를 SSE-S3로 설정한 뒤 규정 준수 팀이 SSE-S3 키를 관리하게 한다
> c) ACM에서 공인 인증서를 만들어 S3에 연결하고 기본 암호화를 SSE-KMS로 설정한다
> d) `aws:SecureTransport` 조건을 걸고 Amazon Macie로 민감 데이터를 보호하며 규정 준수 팀이 Macie를 관리한다
>> [!success]- Answer
>> a) 버킷 정책의 `aws:SecureTransport` 조건으로 HTTPS 연결만 허용하고, 버킷 기본 암호화를 **SSE-KMS**로 설정한 뒤 규정 준수 팀이 KMS 키를 관리하게 한다
>> **왜 이 답인가** — **전송 중 암호화는 `aws:SecureTransport` 조건**, **키를 직접 관리하는 저장 시 암호화는 SSE-KMS 고객 관리형 키**입니다. 두 요구가 정확히 매칭됩니다.
>> **나머지가 아닌 이유** — SSE-S3의 키는 **AWS가 관리**하므로 규정 준수 팀이 관리할 수 없습니다. S3에 ACM 인증서를 붙이는 구성은 없고, Macie는 탐지 서비스라 암호화가 아닙니다.

<sub>관련: [[amazon-s3]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 기업이 같은 VPC에서 **프라이빗 API Gateway**로 REST API 두 개를 운영합니다. `BuyStock` 서비스가 `CheckFunds` 서비스를 호출하는데, VPC 플로 로그를 보니 **VPC 안이 아니라 인터넷을 통해** 호출하고 있었습니다. 두 API가 VPC를 통해 통신하게 하려면, **코드 변경이 가장 적은** 솔루션은 무엇입니까?
> a) 인터페이스 엔드포인트를 사용한다
> b) 게이트웨이 엔드포인트를 사용한다
> c) 인가를 위해 HTTP 헤더에 `X-API-Key`를 추가한다
> d) 두 REST API 사이에 Amazon SQS 큐를 둔다
>> [!success]- Answer
>> a) 인터페이스 엔드포인트를 사용한다
>> **왜 이 답인가** — API Gateway 프라이빗 API에 VPC 안에서 닿으려면 **`execute-api` 인터페이스 VPC 엔드포인트**가 필요합니다. 엔드포인트를 만들면 호출이 프라이빗 경로로 흐르고 코드는 그대로입니다.
>> **나머지가 아닌 이유** — 게이트웨이 엔드포인트는 **S3와 DynamoDB 전용**입니다. API 키는 인가 수단이고, 큐를 끼우는 것은 동기 호출 구조를 바꾸는 큰 변경입니다.

<sub>관련: [[aws-privatelink]] [[amazon-api-gateway]] [[amazon-vpc]] | 모듈 [[02-secure-workloads]]</sub>
