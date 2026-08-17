---
title: "실전 구성 9회차"
tags: [saa-c03, 문제은행, quiz]
exam: 9
문항수: 50
lang: ko
---

> [!info] 실제 출제 비중에 맞춘 50문항입니다
> 도메인 구성이 실제 시험과 같습니다 — **보안 15 · 복원력 13 · 고성능 12 · 비용 10**.
> 그래서 이 회차의 정답률은 **실전 예상 점수에 가깝습니다.** 시간을 재고 한 번에 푸세요.
>
> 문항은 커뮤니티 문제 정리에서 **판단이 갈리는 지점**만 가져와 상황·보기·해설을 새로 쓴 것입니다.
> 출처와 방식은 [참고 자료](/docs/references)에 있습니다.

> [!question] 한 기업이 애플리케이션을 서버리스로 옮기려 합니다. 기존·신규 데이터를 **SQL로 분석**해야 하고 데이터는 S3 버킷에 있으며, 데이터는 **암호화**되고 **다른 리전으로 복제**되어야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 새 S3 버킷에 데이터를 적재하고 교차 리전 복제로 다른 리전 버킷에 복제하며, **KMS 다중 리전 키를 쓰는 SSE-KMS**로 암호화하고 Amazon Athena로 조회한다
> b) 새 버킷에 적재해 교차 리전 복제하고 SSE-KMS 다중 리전 키로 암호화한 뒤 Amazon RDS로 조회한다
> c) 기존 버킷에 적재해 교차 리전 복제하고 SSE-S3로 암호화한 뒤 Athena로 조회한다
> d) 기존 버킷에 적재해 교차 리전 복제하고 SSE-S3로 암호화한 뒤 RDS로 조회한다
>> [!success]- Answer
>> a) 새 S3 버킷에 데이터를 적재하고 교차 리전 복제로 다른 리전 버킷에 복제하며, **KMS 다중 리전 키를 쓰는 SSE-KMS**로 암호화하고 Amazon Athena로 조회한다
>> **왜 이 답인가** — 서버리스 SQL 조회는 **Athena**이고, 리전을 건너 복제된 객체를 양쪽에서 다루려면 **다중 리전 KMS 키**가 편합니다. 세 요구가 한 조합에 모두 들어 있습니다.
>> **나머지가 아닌 이유** — RDS는 서버리스 SQL 분석 도구가 아니고 데이터를 적재해야 합니다. SSE-S3는 키를 통제할 수 없어 다중 리전 키 요구를 만족하지 못합니다.

<sub>관련: [[amazon-athena]] [[amazon-s3]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 기업의 레거시 데이터 처리 애플리케이션이 EC2에서 모놀리식으로 돌며 데이터를 순차 처리하는데 **결과의 순서는 중요하지 않습니다.** 확장하려면 인스턴스를 키우는 방법뿐이라, 개발자들이 Amazon ECS 기반 마이크로서비스로 다시 쓰기로 했습니다. 마이크로서비스 사이의 통신으로 무엇을 권장해야 합니까?
> a) Amazon SQS 큐를 만들어 생산자가 데이터를 보내고 소비자가 큐에서 꺼내 처리하게 한다
> b) Amazon SNS 주제를 만들어 생산자가 알림을 게시하고 소비자가 구독하게 한다
> c) 메시지를 전달하는 Lambda 함수를 만들어 생산자가 호출하고 소비자가 받게 한다
> d) DynamoDB 테이블과 스트림을 만들어 생산자가 넣고 소비자가 스트림 API로 새 항목을 감지하게 한다
>> [!success]- Answer
>> a) Amazon SQS 큐를 만들어 생산자가 데이터를 보내고 소비자가 큐에서 꺼내 처리하게 한다
>> **왜 이 답인가** — **작업 하나를 소비자 하나가 가져가 처리하는** 구조이고 순서도 상관없으므로 표준 큐가 정확히 맞습니다. 소비자를 늘리면 처리량이 그대로 늘어납니다.
>> **나머지가 아닌 이유** — SNS는 같은 메시지를 모든 구독자에게 뿌리므로 작업이 중복 처리됩니다. Lambda를 메시지 전달자로 쓰는 것은 큐를 손으로 만드는 일이고, DynamoDB Streams는 작업 큐 용도가 아닙니다.

<sub>관련: [[amazon-sqs]] [[amazon-ecs]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 온프레미스에서 다계층 웹 애플리케이션을 운영합니다. 웹 애플리케이션은 컨테이너로 여러 Linux 호스트에서 돌고 사용자 레코드가 담긴 PostgreSQL 데이터베이스에 연결됩니다. **인프라 유지와 용량 계획의 부담**이 성장을 가로막고 있습니다. 어떤 조합을 취해야 합니까? (2개 선택)
> a) PostgreSQL 데이터베이스를 Amazon Aurora로 마이그레이션한다
> b) 웹 애플리케이션을 Amazon ECS의 AWS Fargate에서 호스팅하도록 마이그레이션한다
> c) 웹 애플리케이션을 EC2 인스턴스에서 호스팅하도록 마이그레이션한다
> d) 웹 애플리케이션과 데이터베이스 사이에 Amazon ElastiCache를 둔다
>> [!success]- Answer
>> a) PostgreSQL 데이터베이스를 Amazon Aurora로 마이그레이션한다
>> b) 웹 애플리케이션을 Amazon ECS의 AWS Fargate에서 호스팅하도록 마이그레이션한다
>> **왜 이 답인가** — 문제는 **용량 계획과 유지 관리**입니다. 두 계층을 모두 관리형으로 옮기면 그 일이 사라집니다. 이미 컨테이너이므로 Fargate로 가는 것이 자연스럽습니다.
>> **나머지가 아닌 이유** — EC2로 옮기는 것은 관리 대상을 그대로 가져가는 일입니다. ElastiCache는 읽기 성능을 돕지만 용량 계획 부담을 없애지는 못합니다.

<sub>관련: [[aws-fargate]] [[amazon-aurora]] [[amazon-ecs]] | 모듈 [[07-perf-compute]]</sub>

> [!question] 한 기업의 애플리케이션이 대규모 EC2 플릿에서 DynamoDB 테이블에 읽고 씁니다. 테이블 크기가 계속 커지지만 애플리케이션은 **최근 30일 데이터만** 필요합니다. 비용과 개발 노력을 최소화하는 솔루션은 무엇입니까?
> a) 새 항목마다 **현재 시각 + 30일** 값을 가진 속성을 추가하도록 애플리케이션을 확장하고, 그 속성을 DynamoDB **TTL 속성**으로 지정한다
> b) DynamoDB Streams가 새 항목 생성 시 Lambda를 호출하게 하고 30일이 지난 항목을 삭제하게 한다
> c) 마켓플레이스 모니터링 애플리케이션을 EC2에서 돌리며 스크립트로 오래된 항목을 삭제한다
> d) CloudFormation으로 전체 솔루션을 배포하고 30일마다 스택을 다시 배포한 뒤 원래 스택을 삭제한다
>> [!success]- Answer
>> a) 새 항목마다 **현재 시각 + 30일** 값을 가진 속성을 추가하도록 애플리케이션을 확장하고, 그 속성을 DynamoDB **TTL 속성**으로 지정한다
>> **왜 이 답인가** — DynamoDB TTL은 **만료 시각이 지난 항목을 추가 요금 없이 자동 삭제**합니다. 애플리케이션은 속성 하나만 더 쓰면 되고 삭제 로직이 필요 없습니다.
>> **나머지가 아닌 이유** — Lambda로 삭제하면 삭제마다 쓰기 용량을 소비하고 코드를 유지해야 합니다. EC2 모니터링 도구나 스택 재배포는 훨씬 번거롭고 위험합니다.

<sub>관련: [[amazon-dynamodb]] | 모듈 [[13-cost-database]]</sub>

> [!question] 한 기업이 외부 공급자의 서비스에 연결해야 합니다. 그 서비스는 **공급자의 VPC에 호스팅**되어 있고, 보안 팀은 연결이 프라이빗해야 하고 **대상 서비스로만 제한**되어야 하며 **자사 VPC에서만 시작**되어야 한다고 요구합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 공급자에게 대상 서비스용 VPC 엔드포인트 서비스를 만들어 달라고 요청하고 AWS PrivateLink로 연결한다
> b) 공급자 VPC와 VPC 피어링을 맺고 라우팅 테이블을 갱신해 연결한다
> c) 자사 VPC 퍼블릭 서브넷에 NAT 게이트웨이를 만들고 라우팅 테이블을 갱신해 연결한다
> d) 공급자에게 자사 VPC에 가상 프라이빗 게이트웨이를 만들어 달라고 요청하고 PrivateLink로 연결한다
>> [!success]- Answer
>> a) 공급자에게 대상 서비스용 VPC 엔드포인트 서비스를 만들어 달라고 요청하고 AWS PrivateLink로 연결한다
>> **왜 이 답인가** — PrivateLink는 **서비스 하나만 노출**하고 연결은 소비자 쪽에서만 시작됩니다. 요구 세 가지(프라이빗·대상 한정·단방향)를 정확히 만족합니다.
>> **나머지가 아닌 이유** — VPC 피어링은 **네트워크 전체를 서로 열어** 대상 한정 조건을 어깁니다. NAT 게이트웨이는 인터넷으로 나가는 길이라 프라이빗 조건에 어긋납니다.

<sub>관련: [[aws-privatelink]] [[amazon-vpc]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 MySQL 데이터베이스를 AWS로 옮기려 합니다. 최근 데이터베이스 장애로 큰 피해를 겪어, **데이터 손실을 최소화하고 모든 트랜잭션이 최소 두 노드에 저장**되는 안정적인 솔루션을 원합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 다중 AZ 기능을 켠 Amazon RDS MySQL DB 인스턴스를 만들어 데이터를 **동기식으로** 복제한다
> b) 세 가용 영역의 세 노드에 동기 복제하는 RDS DB 인스턴스를 만든다
> c) RDS MySQL 인스턴스를 만들고 다른 리전에 동기식으로 복제하는 읽기 전용 복제본을 만든다
> d) MySQL을 설치한 EC2 인스턴스를 만들어 Lambda가 RDS MySQL로 동기 복제하게 한다
>> [!success]- Answer
>> a) 다중 AZ 기능을 켠 Amazon RDS MySQL DB 인스턴스를 만들어 데이터를 **동기식으로** 복제한다
>> **왜 이 답인가** — RDS 다중 AZ는 **다른 AZ의 대기 인스턴스로 동기 복제**합니다. 커밋이 두 노드에 기록되므로 `모든 트랜잭션이 최소 두 노드에`라는 요구가 그대로 충족되고 장애 조치도 자동입니다.
>> **나머지가 아닌 이유** — RDS 다중 AZ는 대기 인스턴스가 하나이며 "세 노드 동기 복제" 옵션을 고르는 것이 아닙니다. 교차 리전 읽기 복제본은 **비동기**입니다. EC2 + Lambda 조합은 직접 만들어야 하고 신뢰성이 떨어집니다.

<sub>관련: [[amazon-rds]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업의 웹사이트가 사용자에게 다운로드 가능한 과거 실적 보고서를 제공합니다. **전 세계 수요에 맞춰 확장**되어야 하고, 비용 효율적이며 인프라 프로비저닝을 최소화하고 **가장 빠른 응답 시간**을 제공해야 합니다. 어떤 조합을 권장해야 합니까?
> a) Amazon CloudFront와 Amazon S3
> b) AWS Lambda와 Amazon DynamoDB
> c) Application Load Balancer와 EC2 Auto Scaling
> d) 내부 Application Load Balancer와 Amazon Route 53
>> [!success]- Answer
>> a) Amazon CloudFront와 Amazon S3
>> **왜 이 답인가** — 내려받는 것은 **이미 만들어진 정적 파일**입니다. S3에 두고 CloudFront로 엣지에 캐시하면 프로비저닝할 인프라가 없고 전 세계 응답이 가장 빠릅니다.
>> **나머지가 아닌 이유** — Lambda·DynamoDB는 동적 API에 맞는 조합입니다. ALB + EC2는 서버를 프로비저닝해야 합니다. 내부 ALB는 인터넷 사용자를 받지 못합니다.

<sub>관련: [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 온프레미스 서버 한 대에서 **정적 문서로 된 마케팅 웹사이트**를 운영하며 관리자가 가끔 SFTP로 문서를 올립니다. 이 웹사이트를 AWS로 옮겨 CloudFront를 쓰기로 했고, **CloudFront 오리진 역할을 할** 가장 비용 효율적이고 복원력 있는 아키텍처를 설계해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 프라이빗 S3 버킷을 만들어 CloudFront 오리진 액세스 아이덴티티(OAI)의 접근만 허용하는 버킷 정책을 걸고, 콘텐츠는 AWS CLI로 업로드한다
> b) Amazon Lightsail로 가상 서버를 만들어 웹 서버를 구성하고 SFTP로 콘텐츠를 올린다
> c) EC2 Auto Scaling 그룹과 ALB를 만들고 SFTP로 콘텐츠를 올린다
> d) 퍼블릭 S3 버킷을 만들어 정적 웹사이트 호스팅을 켜고 AWS Transfer for SFTP를 구성해 올린다
>> [!success]- Answer
>> a) 프라이빗 S3 버킷을 만들어 CloudFront 오리진 액세스 아이덴티티(OAI)의 접근만 허용하는 버킷 정책을 걸고, 콘텐츠는 AWS CLI로 업로드한다
>> **왜 이 답인가** — 정적 문서이므로 서버가 필요 없습니다. **S3 + OAI**가 가장 싸고 복원력이 높으며, 업로드 방식은 CLI로 바꾸면 되므로 SFTP 서버를 유지할 이유가 없습니다.
>> **나머지가 아닌 이유** — Lightsail·EC2는 서버 요금과 관리가 남습니다. 버킷을 퍼블릭으로 열면 CloudFront를 우회한 직접 접근이 가능해지고 Transfer 서비스 요금도 추가됩니다.

<sub>관련: [[amazon-s3]] [[amazon-cloudfront]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업이 AWS Organizations로 사업부마다 전용 계정을 만들어 독립적으로 관리합니다. 어느 계정의 **루트 사용자 이메일로 보낸 알림을 수신자가 놓쳤습니다.** 앞으로 알림을 놓치지 않게 하되, 알림은 **계정 관리자에게만** 가야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 모든 계정의 루트 사용자 이메일을 **소수 관리자에게 가는 메일 그룹(배포 목록)**으로 설정하고, Organizations 콘솔이나 API로 대체 연락처를 구성한다
> b) 루트 사용자 앞으로 온 메일을 조직의 모든 사용자에게 전달하도록 메일 서버를 구성한다
> c) 모든 루트 사용자 메일을 관리자 한 명에게 보내 그가 적절한 그룹으로 전달하게 한다
> d) 기존·신규 계정이 모두 같은 루트 사용자 이메일을 쓰게 하고 대체 연락처를 구성한다
>> [!success]- Answer
>> a) 모든 계정의 루트 사용자 이메일을 **소수 관리자에게 가는 메일 그룹(배포 목록)**으로 설정하고, Organizations 콘솔이나 API로 대체 연락처를 구성한다
>> **왜 이 답인가** — 한 사람에게만 가면 그 사람이 놓칠 때 끝입니다. 배포 목록으로 **여럿이 함께 받게** 하고, 청구·운영·보안 **대체 연락처**를 설정하면 알림이 적절한 담당자에게 갑니다.
>> **나머지가 아닌 이유** — 전 직원에게 뿌리는 것은 `관리자에게만`이라는 조건을 어깁니다. 한 명에게 몰아주는 것은 지금과 같은 실패를 반복합니다. 계정마다 루트 이메일은 **고유해야** 하므로 같은 주소를 쓸 수 없습니다.

<sub>관련: [[aws-organizations]] [[aws-iam]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 새 **동적** 주문 웹사이트를 만듭니다. 서버 유지 관리와 패치를 최소화하고, 사이트는 고가용성이어야 하며 사용자 수요 변화에 맞춰 **읽기와 쓰기 용량이 최대한 빠르게** 확장되어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 정적 콘텐츠는 S3에, 동적 콘텐츠는 API Gateway와 Lambda로 두고 데이터베이스는 **온디맨드 용량 DynamoDB**를 쓰며 CloudFront로 전달한다
> b) 정적은 S3, 동적은 API Gateway와 Lambda로 두고 데이터베이스는 Aurora Auto Scaling을 쓰며 CloudFront로 전달한다
> c) 모든 콘텐츠를 EC2에 두고 Auto Scaling 그룹과 ALB를 쓰며 데이터베이스는 프로비저닝된 쓰기 용량의 DynamoDB를 쓴다
> d) 모든 콘텐츠를 EC2에 두고 Auto Scaling 그룹과 ALB를 쓰며 Aurora Auto Scaling을 쓴다
>> [!success]- Answer
>> a) 정적 콘텐츠는 S3에, 동적 콘텐츠는 API Gateway와 Lambda로 두고 데이터베이스는 **온디맨드 용량 DynamoDB**를 쓰며 CloudFront로 전달한다
>> **왜 이 답인가** — 서버가 없어 패치할 대상이 없고, **쓰기까지 즉시 확장**되는 것은 온디맨드 DynamoDB입니다. Aurora Auto Scaling은 **읽기 복제본**을 늘릴 뿐 쓰기 용량은 그대로입니다.
>> **나머지가 아닌 이유** — EC2 기반 보기들은 서버 유지 관리 요구를 어깁니다. 프로비저닝된 쓰기 용량은 급증을 빠르게 따라가지 못합니다.

<sub>관련: [[amazon-dynamodb]] [[aws-lambda]] [[amazon-cloudfront]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 온프레미스 PostgreSQL 데이터베이스를 Amazon Aurora PostgreSQL로 마이그레이션합니다. **마이그레이션 중에도 온프레미스 데이터베이스는 온라인**이어야 하고, Aurora는 온프레미스와 **동기화 상태를 유지**해야 합니다. 어떤 조합이 필요합니까? (2개 선택)
> a) AWS Database Migration Service(AWS DMS) 복제 서버를 만든다
> b) 지속적 복제(ongoing replication) 작업을 만든다
> c) 온프레미스 데이터베이스의 백업을 만든다
> d) AWS Schema Conversion Tool(AWS SCT)로 스키마를 변환한다
>> [!success]- Answer
>> a) AWS Database Migration Service(AWS DMS) 복제 서버를 만든다
>> b) 지속적 복제(ongoing replication) 작업을 만든다
>> **왜 이 답인가** — `서비스를 멈추지 않고` + `계속 동기화`가 DMS의 **변경 데이터 캡처(CDC)를 포함한 지속적 복제**를 가리킵니다. 복제 서버와 복제 작업이 한 쌍입니다.
>> **나머지가 아닌 이유** — 백업·복원은 시점 사본이라 이후 변경이 반영되지 않습니다. SCT는 **엔진이 다를 때** 스키마를 바꾸는 도구인데 여기서는 PostgreSQL → PostgreSQL이라 필요 없습니다.

<sub>관련: [[aws-dms]] [[amazon-aurora]] | 모듈 [[08-perf-database]]</sub>

> [!question] 한 기업이 매일 한 번 데이터베이스를 S3로 내보내 다른 팀이 쓰게 합니다. 객체 크기는 2GB~5GB이고, **S3 접근 패턴이 자주 그리고 빠르게 바뀝니다.** 데이터는 즉시 사용할 수 있어야 하며 최대 3개월 보관합니다. 조회 시간을 늘리지 않으면서 가장 비용 효율적인 스토리지 클래스는 무엇입니까?
> a) S3 Intelligent-Tiering
> b) S3 Glacier Instant Retrieval
> c) S3 Standard
> d) S3 Standard-Infrequent Access(S3 Standard-IA)
>> [!success]- Answer
>> a) S3 Intelligent-Tiering
>> **왜 이 답인가** — `패턴이 변하고 예측하기 어렵다` + `조회 시간이 늘면 안 된다`가 함께 나오면 Intelligent-Tiering입니다. 계층 이동을 알아서 해 주고 **검색 요금이 없습니다.**
>> **나머지가 아닌 이유** — Standard-IA는 갑자기 자주 접근하면 검색 요금이 붙습니다. Standard는 안 쓰는 기간에도 비쌉니다. Glacier Instant Retrieval은 최소 보관 기간(90일) 제약이 있어 이 패턴에 불리합니다.

<sub>관련: [[amazon-s3]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 기업이 온프레미스 데이터 센터를 AWS로 옮기려 합니다. 규정상 **ap-northeast-3 리전만** 쓸 수 있고 관리자는 **VPC를 인터넷에 연결할 수 없습니다.** 어떤 조합이 요구 사항을 충족합니까? (2개 선택)
> a) AWS Control Tower의 데이터 레지던시 가드레일로 인터넷 접근과 ap-northeast-3 외 리전 접근을 거부한다
> b) AWS Organizations의 서비스 제어 정책(SCP)으로 VPC의 인터넷 접근을 막고 ap-northeast-3 외 리전 접근을 거부한다
> c) AWS WAF 규칙으로 인터넷 접근을 막고 계정 설정에서 다른 리전 접근을 거부한다
> d) 각 VPC 네트워크 ACL에 아웃바운드 거부 규칙을 만들고 사용자마다 IAM 정책으로 리전을 제한한다
>> [!success]- Answer
>> a) AWS Control Tower의 데이터 레지던시 가드레일로 인터넷 접근과 ap-northeast-3 외 리전 접근을 거부한다
>> b) AWS Organizations의 서비스 제어 정책(SCP)으로 VPC의 인터넷 접근을 막고 ap-northeast-3 외 리전 접근을 거부한다
>> **왜 이 답인가** — 규정을 **조직 차원에서 강제**해야 하므로 SCP 계열이 답입니다. Control Tower의 가드레일도 결국 SCP로 구현되며, 두 방법 모두 계정 관리자가 우회할 수 없습니다.
>> **나머지가 아닌 이유** — WAF는 웹 요청을 거르는 도구라 리전 제한과 무관합니다. 네트워크 ACL과 사용자별 IAM 정책은 **누군가 고칠 수 있어** 강제력이 약합니다.

<sub>관련: [[aws-control-tower]] [[aws-organizations]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 로드 밸런싱된 프런트엔드, **컨테이너 기반 애플리케이션**, 관계형 데이터베이스로 구성된 전자상거래 애플리케이션을 개발합니다. **사람 손이 최대한 덜 가는** 고가용성 솔루션을 만들어야 합니다. 어떤 조합이 요구 사항을 충족합니까? (2개 선택)
> a) 다중 AZ 모드로 Amazon RDS DB 인스턴스를 만든다
> b) **Fargate 시작 유형**의 Amazon ECS 클러스터로 변동하는 애플리케이션 부하를 처리한다
> c) EC2 인스턴스 기반 Docker 클러스터를 만들어 부하를 처리한다
> d) EC2 시작 유형의 ECS 클러스터로 부하를 처리한다
>> [!success]- Answer
>> a) 다중 AZ 모드로 Amazon RDS DB 인스턴스를 만든다
>> b) **Fargate 시작 유형**의 Amazon ECS 클러스터로 변동하는 애플리케이션 부하를 처리한다
>> **왜 이 답인가** — 데이터베이스의 고가용성은 다중 AZ가, 컨테이너의 고가용성과 확장은 **서버를 관리하지 않는 Fargate**가 맡습니다. 두 계층 모두 사람 개입이 거의 없습니다.
>> **나머지가 아닌 이유** — EC2 기반 클러스터는 노드 패치·용량 관리를 직접 해야 합니다. 읽기 복제본은 **가용성**이 아니라 읽기 확장 수단입니다.

<sub>관련: [[aws-fargate]] [[amazon-rds]] [[amazon-ecs]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 전 세계 속보·지역 경보·날씨를 제공하는 웹 포털을 운영합니다. 포털은 **정적과 동적 콘텐츠를 섞어** 사용자마다 개인화된 화면을 HTTPS로 제공하며, 콘텐츠는 Application Load Balancer 뒤 EC2의 API 서버가 서비스합니다. 전 세계 사용자에게 최대한 빠르게 제공하려면, **모든 사용자의 지연 시간이 가장 적은** 설계는 무엇입니까?
> a) 단일 리전에 스택을 배포하고 ALB를 오리진으로 지정해 **정적·동적 콘텐츠를 모두 CloudFront가 제공**하게 한다
> b) 두 리전에 배포하고 Route 53 지연 시간 라우팅으로 가까운 리전의 ALB에서 모든 콘텐츠를 제공한다
> c) 단일 리전에 배포하고 정적 콘텐츠만 CloudFront로 제공하며 동적 콘텐츠는 ALB에서 직접 제공한다
> d) 두 리전에 배포하고 Route 53 지리 위치 라우팅으로 가까운 리전의 ALB에서 제공한다
>> [!success]- Answer
>> a) 단일 리전에 스택을 배포하고 ALB를 오리진으로 지정해 **정적·동적 콘텐츠를 모두 CloudFront가 제공**하게 한다
>> **왜 이 답인가** — CloudFront는 캐시만 하는 물건이 아닙니다. **동적 요청도 엣지에서 받아 AWS 백본으로 오리진까지 실어 나르므로** 인터넷을 끝까지 타는 것보다 빠릅니다. 캐시하지 않는 콘텐츠에도 이득이 있습니다.
>> **나머지가 아닌 이유** — 동적을 ALB에서 직접 받으면 그 요청만 느려집니다. 리전을 늘리는 보기들은 비용과 복잡성이 커지고, 엣지 수백 곳보다 여전히 멉니다.

<sub>관련: [[amazon-cloudfront]] [[elastic-load-balancing]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 데이터 센터의 NAS에 **700TB의 백업 데이터**를 두고 있습니다. 이 데이터는 드문 규제 요청에 대응할 수 있어야 하고 **7년 보관**해야 합니다. AWS로 마이그레이션해야 하며 **1개월 안에** 끝내야 하는데, 인터넷 회선의 가용 대역폭은 **500Mbps**뿐입니다. 가장 저렴하게 옮기고 저장하려면 무엇을 해야 합니까?
> a) AWS Snowball 디바이스를 주문해 데이터를 옮기고 수명 주기 정책으로 S3 Glacier Deep Archive로 전환한다
> b) VPN을 구축하고 AWS CLI로 데이터를 S3 Glacier에 복사한다
> c) 500Mbps Direct Connect를 프로비저닝해 S3로 전송한 뒤 Deep Archive로 전환한다
> d) DataSync 에이전트를 온프레미스에 배포해 NAS에서 S3 Glacier로 복사한다
>> [!success]- Answer
>> a) AWS Snowball 디바이스를 주문해 데이터를 옮기고 수명 주기 정책으로 S3 Glacier Deep Archive로 전환한다
>> **왜 이 답인가** — 500Mbps로 700TB를 보내면 **이론상으로도 넉 달이 넘습니다.** 1개월 기한을 지킬 수 있는 것은 디바이스 배송뿐이고, 드물게 접근하는 7년 보관은 Deep Archive가 가장 쌉니다.
>> **나머지가 아닌 이유** — VPN·DataSync·Direct Connect는 모두 네트워크 전송이라 기한을 못 지킵니다. Direct Connect는 회선 개통에만 수 주가 걸립니다.

<sub>관련: [[aws-snow-family]] [[amazon-s3-glacier]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 기업이 의료 시험 결과를 S3 저장소에 보관해야 합니다. **소수의 과학자만 새 파일을 추가**할 수 있고 나머지는 읽기 전용이어야 하며, **누구도 파일을 수정하거나 삭제할 수 없어야** 합니다. 모든 파일은 생성일로부터 **최소 1년** 보관해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 보존 기간을 365일로 설정한 **규정 준수 모드**의 S3 객체 잠금을 사용한다
> b) 1년 법적 보존을 건 거버넌스 모드의 S3 객체 잠금을 사용한다
> c) IAM 역할로 모든 사용자의 삭제·변경을 막고 버킷 정책으로 그 역할만 허용한다
> d) 객체가 추가될 때마다 Lambda가 해시를 추적해 수정된 객체를 표시하게 한다
>> [!success]- Answer
>> a) 보존 기간을 365일로 설정한 **규정 준수 모드**의 S3 객체 잠금을 사용한다
>> **왜 이 답인가** — `누구도 수정·삭제할 수 없다` + `최소 1년`은 **규정 준수 모드 + 보존 기간 365일**로 그대로 표현됩니다. 거버넌스 모드는 특별 권한자가 해제할 수 있어 조건을 만족하지 못합니다.
>> **나머지가 아닌 이유** — IAM·버킷 정책은 권한 있는 사람이 언제든 고칠 수 있습니다. 해시를 추적하는 방식은 **탐지**일 뿐 변경을 막지 못합니다.

<sub>관련: [[amazon-s3]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 기업이 중요한 애플리케이션의 데이터베이스를 **Amazon EC2에서** 운영해야 합니다. 데이터베이스는 고가용성이어야 하고 장애가 생기면 **자동으로 장애 조치**되어야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 같은 리전의 서로 다른 가용 영역에 EC2 인스턴스 두 대를 띄워 데이터베이스를 설치하고 클러스터로 구성해 복제를 설정한다
> b) 한 가용 영역에 EC2를 띄워 데이터베이스를 설치하고 AMI로 백업하며 장애 시 CloudFormation으로 다시 프로비저닝한다
> c) 서로 다른 리전에 EC2 두 대를 띄워 복제를 설정하고 두 번째 리전으로 장애 조치한다
> d) 한 가용 영역에 EC2를 띄우고 AMI로 백업하며 EC2 자동 복구로 인스턴스를 복구한다
>> [!success]- Answer
>> a) 같은 리전의 서로 다른 가용 영역에 EC2 인스턴스 두 대를 띄워 데이터베이스를 설치하고 클러스터로 구성해 복제를 설정한다
>> **왜 이 답인가** — EC2에 직접 데이터베이스를 두어야 한다는 제약이 있으므로, **여러 AZ에 노드를 두고 클러스터로 묶어 자동 장애 조치**를 구성하는 것이 유일한 방법입니다.
>> **나머지가 아닌 이유** — 인스턴스 한 대 구성은 자동 장애 조치가 아닙니다(복구에는 시간이 걸립니다). 리전을 나누면 복제 지연과 복잡성이 커지고 요구 이상입니다.

<sub>관련: [[amazon-ec2]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 게임 기업이 고가용성 아키텍처를 설계합니다. 애플리케이션은 수정된 Linux 커널에서 돌고 **UDP 기반 트래픽만** 지원합니다. 프런트엔드 계층은 지연 시간이 낮고 **가장 가까운 엣지 로케이션으로 라우팅**되며 애플리케이션 엔드포인트 진입용 **고정 IP 주소**를 제공해야 합니다. 무엇을 해야 합니까?
> a) AWS Global Accelerator가 Network Load Balancer로 요청을 전달하게 하고, 애플리케이션은 EC2 Auto Scaling 그룹의 EC2 인스턴스로 실행한다
> b) Route 53이 Application Load Balancer로 요청을 전달하게 하고 애플리케이션은 Lambda로 실행한다
> c) CloudFront가 Network Load Balancer로 요청을 전달하게 하고 애플리케이션은 Lambda로 실행한다
> d) API Gateway가 Application Load Balancer로 요청을 전달하게 하고 애플리케이션은 EC2 Auto Scaling 그룹으로 실행한다
>> [!success]- Answer
>> a) AWS Global Accelerator가 Network Load Balancer로 요청을 전달하게 하고, 애플리케이션은 EC2 Auto Scaling 그룹의 EC2 인스턴스로 실행한다
>> **왜 이 답인가** — 조건 세 개가 정확히 한 서비스를 가리킵니다 — **UDP 지원(NLB)**, **가장 가까운 엣지로 진입**, **고정 IP(Anycast)**. 이 셋을 함께 주는 것은 Global Accelerator입니다. 수정된 커널이 필요하므로 컴퓨팅은 EC2여야 합니다.
>> **나머지가 아닌 이유** — CloudFront와 ALB, API Gateway는 HTTP 계열이라 UDP를 처리하지 못합니다. Lambda로는 수정된 커널을 쓸 수 없습니다.

<sub>관련: [[aws-global-accelerator]] [[elastic-load-balancing]] [[amazon-ec2]] | 모듈 [[09-perf-network]]</sub>

> [!question] 솔루션스 아키텍트가 Amazon API Gateway로 새 API를 설계합니다. 요청량 변동이 매우 커서 **몇 시간 동안 요청이 하나도 없을 수도** 있습니다. 데이터 처리는 비동기로 이뤄지되 요청 후 몇 초 안에 끝나야 합니다. **가장 낮은 비용**으로 요구를 만족하려면 API가 어떤 컴퓨팅 서비스를 호출해야 합니까?
> a) AWS Lambda 함수
> b) AWS Glue 작업
> c) Amazon EKS에 호스팅된 컨테이너 서비스
> d) Amazon ECS(EC2)에 호스팅된 컨테이너 서비스
>> [!success]- Answer
>> a) AWS Lambda 함수
>> **왜 이 답인가** — 요청이 없을 때 **비용이 0**인 것은 Lambda뿐입니다. 짧은 비동기 처리에도 잘 맞습니다.
>> **나머지가 아닌 이유** — EKS·ECS(EC2)는 요청이 없어도 노드 요금이 계속 나갑니다. Glue는 배치 ETL 서비스라 몇 초짜리 요청 처리에 맞지 않습니다.

<sub>관련: [[aws-lambda]] [[amazon-api-gateway]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업이 Amazon API Gateway와 AWS Lambda로 된 **공개 서버리스 애플리케이션**을 운영하는데, 최근 봇넷의 사기 요청으로 트래픽이 급증했습니다. **권한 없는 사용자의 요청을 차단**하려면 어떤 조합이 필요합니까? (2개 선택)
> a) 실제 사용자에게만 공유하는 API 키가 포함된 사용량 계획(usage plan)을 만든다
> b) 악성 요청을 겨냥해 걸러 내는 AWS WAF 규칙을 구현한다
> c) Lambda 함수 안에 로직을 넣어 사기 IP의 요청을 무시하게 한다
> d) 기존 퍼블릭 API를 프라이빗 API로 바꾸고 DNS 레코드를 새 엔드포인트로 돌린다
>> [!success]- Answer
>> a) 실제 사용자에게만 공유하는 API 키가 포함된 사용량 계획(usage plan)을 만든다
>> b) 악성 요청을 겨냥해 걸러 내는 AWS WAF 규칙을 구현한다
>> **왜 이 답인가** — 두 겹으로 막습니다. **WAF가 API Gateway 앞에서 악성 요청을 걸러 내고**, 사용량 계획과 API 키가 **인가된 호출자만** 통과시키며 속도 제한도 겁니다.
>> **나머지가 아닌 이유** — Lambda 안에서 거르면 이미 호출이 일어나 요금이 발생합니다. 프라이빗 API로 바꾸면 정상 사용자도 못 들어옵니다.

<sub>관련: [[aws-waf]] [[amazon-api-gateway]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 Aurora PostgreSQL DB 클러스터에 데이터를 저장합니다. **모든 데이터를 5년 보관한 뒤 삭제**해야 하고, 데이터베이스 안에서 수행된 작업의 **감사 로그는 기한 없이 보관**해야 합니다. 현재는 Aurora 자동 백업만 구성되어 있습니다. 어떤 조합이 필요합니까? (2개 선택)
> a) AWS Backup으로 백업을 만들고 5년 동안 보관한다
> b) DB 클러스터의 로그를 Amazon CloudWatch Logs로 내보내도록 구성한다
> c) 자동 백업 보존 기간을 5년으로 설정한다
> d) DB 클러스터의 수동 스냅샷을 뜬다
>> [!success]- Answer
>> a) AWS Backup으로 백업을 만들고 5년 동안 보관한다
>> b) DB 클러스터의 로그를 Amazon CloudWatch Logs로 내보내도록 구성한다
>> **왜 이 답인가** — 자동 백업 보존은 **최대 35일**이라 5년을 담지 못하므로 AWS Backup의 보존 정책이 필요합니다. 감사 로그는 데이터베이스 밖으로 내보내야 기한 없이 남길 수 있고, 그 자리가 CloudWatch Logs입니다.
>> **나머지가 아닌 이유** — 자동 백업 보존 기간은 5년으로 설정할 수 없습니다. 수동 스냅샷 하나로는 5년 보존 정책이 되지 않습니다.

<sub>관련: [[aws-backup]] [[amazon-aurora]] [[amazon-cloudwatch]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 온프레미스 모놀리식 애플리케이션을 AWS로 옮기려 합니다. **프런트엔드와 백엔드 코드를 최대한 그대로 유지**하되 애플리케이션을 더 작은 단위로 쪼개 팀마다 하나씩 관리하려고 합니다. 확장성이 높고 운영 오버헤드가 적은 솔루션은 무엇입니까?
> a) 애플리케이션을 Amazon ECS에 호스팅하고 ECS를 대상으로 하는 Application Load Balancer를 설정한다
> b) 애플리케이션을 AWS Lambda에 호스팅하고 Amazon API Gateway와 통합한다
> c) 애플리케이션을 EC2 인스턴스에 호스팅하고 Auto Scaling 그룹의 EC2를 대상으로 하는 ALB를 설정한다
> d) AWS Amplify로 호스팅하고 Lambda와 통합된 API Gateway에 연결한다
>> [!success]- Answer
>> a) 애플리케이션을 Amazon ECS에 호스팅하고 ECS를 대상으로 하는 Application Load Balancer를 설정한다
>> **왜 이 답인가** — `코드를 최대한 유지`와 `작은 단위로 쪼갠다`가 함께 나오면 **컨테이너**입니다. 서비스마다 컨테이너로 나누면 팀별 소유가 가능하고 코드는 거의 그대로 옮겨집니다.
>> **나머지가 아닌 이유** — Lambda로 옮기려면 코드를 함수 단위로 다시 써야 합니다. EC2는 확장과 운영 부담이 큽니다. Amplify는 프런트엔드 호스팅에 특화되어 백엔드 모놀리스를 담지 못합니다.

<sub>관련: [[amazon-ecs]] [[elastic-load-balancing]] | 모듈 [[07-perf-compute]]</sub>

> [!question] 한 기업이 Amazon Linux EC2 인스턴스 그룹에서 애플리케이션을 운영합니다. 규정상 모든 애플리케이션 로그 파일을 **7년 보관**해야 하며, 보고 도구가 **모든 파일에 동시에 접근**할 수 있어야 합니다. 가장 비용 효율적인 스토리지 솔루션은 무엇입니까?
> a) Amazon S3
> b) Amazon EFS
> c) Amazon EBS
> d) Amazon EC2 인스턴스 스토어
>> [!success]- Answer
>> a) Amazon S3
>> **왜 이 답인가** — 로그는 한 번 쓰고 가끔 읽는 객체이고, **여러 클라이언트가 동시에 접근**할 수 있으며 장기 보관 단가가 가장 쌉니다. 수명 주기로 더 싼 계층으로 내릴 수도 있습니다.
>> **나머지가 아닌 이유** — EFS는 같은 용량에서 훨씬 비쌉니다. EBS는 인스턴스에 붙는 볼륨이라 동시 접근이 제한됩니다. 인스턴스 스토어는 인스턴스가 멈추면 사라집니다.

<sub>관련: [[amazon-s3]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 솔루션스 아키텍트가 S3 오리진과 Amazon CloudFront로 정적 웹사이트를 제공하는 솔루션을 설계합니다. 보안 정책상 **모든 웹사이트 트래픽이 AWS WAF의 검사를 거쳐야** 합니다. 어떻게 해야 합니까?
> a) CloudFront와 S3가 오리진 액세스 아이덴티티(OAI)를 쓰도록 구성해 버킷 접근을 제한하고, 배포에 AWS WAF를 활성화한다
> b) AWS WAF의 ARN에서 오는 요청만 받도록 S3 버킷 정책을 구성한다
> c) CloudFront가 들어오는 모든 요청을 S3에 요청하기 전에 AWS WAF로 전달하도록 구성한다
> d) CloudFront IP만 S3에 접근하도록 보안 그룹을 만들고 CloudFront에 WAF를 연결한다
>> [!success]- Answer
>> a) CloudFront와 S3가 오리진 액세스 아이덴티티(OAI)를 쓰도록 구성해 버킷 접근을 제한하고, 배포에 AWS WAF를 활성화한다
>> **왜 이 답인가** — WAF는 **CloudFront 배포에 붙습니다.** 그리고 사용자가 S3 URL로 우회하면 검사를 건너뛰므로, OAI로 **CloudFront 경유만 허용**해야 "모든 트래픽 검사"가 실제로 성립합니다.
>> **나머지가 아닌 이유** — WAF는 ARN을 요청 주체로 갖지 않습니다. CloudFront가 WAF로 요청을 "전달"하는 구성도 없습니다. S3는 보안 그룹을 쓰지 않습니다.

<sub>관련: [[aws-waf]] [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업의 주문 시스템이 클라이언트 요청을 EC2 인스턴스로 보내고, 인스턴스가 주문을 처리해 RDS 데이터베이스에 저장합니다. 시스템 장애가 나면 **주문을 다시 처리해야 한다**는 신고가 들어옵니다. 장애가 발생해도 **자동으로 주문을 처리할 수 있는** 복원력 있는 솔루션이 필요합니다. 무엇을 해야 합니까?
> a) EC2를 Auto Scaling 그룹에 넣고, 주문 시스템이 Amazon SQS 큐로 메시지를 보내게 한 뒤 인스턴스가 큐에서 꺼내 처리하게 한다
> b) EC2를 Auto Scaling 그룹에 넣고 ALB 뒤에 둔 뒤 주문 시스템이 ALB 엔드포인트로 보내게 한다
> c) EC2를 Auto Scaling 그룹에 넣고 EventBridge 규칙으로 ECS 작업을 대상으로 지정한다
> d) SNS 주제와 Lambda를 만들어 구독시키고 Systems Manager Run Command로 인스턴스가 메시지를 처리하게 한다
>> [!success]- Answer
>> a) EC2를 Auto Scaling 그룹에 넣고, 주문 시스템이 Amazon SQS 큐로 메시지를 보내게 한 뒤 인스턴스가 큐에서 꺼내 처리하게 한다
>> **왜 이 답인가** — 주문을 다시 넣어야 하는 이유는 **처리 중이던 요청이 사라지기 때문**입니다. 큐에 담아 두면 처리 완료 전까지 메시지가 남아 있어 인스턴스가 죽어도 다른 인스턴스가 이어받습니다.
>> **나머지가 아닌 이유** — ALB만 붙이면 요청을 받던 인스턴스가 죽을 때 그 요청은 여전히 사라집니다. SNS는 보관하지 않고, Run Command는 이런 처리 파이프라인 도구가 아닙니다.

<sub>관련: [[amazon-sqs]] [[amazon-ec2-auto-scaling]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 대형 미디어 기업이 AWS에서 웹 애플리케이션을 운영하며, 전 세계 사용자가 안정적으로 접근할 수 있도록 **기밀 미디어 파일을 캐싱**하려고 합니다. 콘텐츠는 S3 버킷에 있고 요청이 어디서 오든 빠르게 전달해야 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) Amazon CloudFront를 배포해 S3 버킷을 CloudFront 엣지 서버와 연결한다
> b) AWS DataSync로 S3 버킷을 웹 애플리케이션에 연결한다
> c) AWS Global Accelerator를 배포해 S3 버킷을 웹 애플리케이션에 연결한다
> d) Amazon SQS로 S3 버킷을 웹 애플리케이션에 연결한다
>> [!success]- Answer
>> a) Amazon CloudFront를 배포해 S3 버킷을 CloudFront 엣지 서버와 연결한다
>> **왜 이 답인가** — `캐싱`과 `전 세계 빠른 전달`은 CDN, 즉 CloudFront입니다. 기밀 파일이라면 서명된 URL·쿠키와 OAI로 접근을 제한할 수 있습니다.
>> **나머지가 아닌 이유** — Global Accelerator는 캐싱을 하지 않고 S3를 엔드포인트로 두지 않습니다. DataSync는 데이터 전송 도구, SQS는 메시지 큐입니다.

<sub>관련: [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 CloudTrail 로그를 **3년** 보관해야 합니다. 대상 S3 버킷은 **버전 관리가 켜져** 있고, 3년 후 현재 객체를 삭제하는 수명 주기 정책이 걸려 있습니다. 그런데 4년째가 되자 새 로그 유입량은 그대로인데 **객체 수가 계속 늘어납니다.** 3년이 지난 객체를 가장 비용 효율적으로 삭제하려면 어떻게 해야 합니까?
> a) 수명 주기 정책이 현재 버전뿐 아니라 **이전 버전(noncurrent versions)도 삭제**하도록 구성한다
> b) 조직의 중앙 CloudTrail 추적이 3년 후 객체를 만료시키도록 구성한다
> c) 3년이 지난 객체를 찾아 삭제하는 Lambda 함수를 만든다
> d) 버킷에 전달되는 모든 객체의 소유자를 상위 계정으로 지정한다
>> [!success]- Answer
>> a) 수명 주기 정책이 현재 버전뿐 아니라 **이전 버전(noncurrent versions)도 삭제**하도록 구성한다
>> **왜 이 답인가** — 버전 관리가 켜진 버킷에서 "삭제"는 **삭제 표시만 남기고 이전 버전은 그대로 둡니다.** 그래서 객체 수가 계속 늘어난 것이고, 이전 버전 만료 규칙을 추가해야 실제로 줄어듭니다.
>> **나머지가 아닌 이유** — CloudTrail에는 S3 객체를 만료시키는 설정이 없습니다. Lambda로 지우는 것은 이미 있는 기능을 코드로 다시 만드는 일입니다. 객체 소유자는 이 현상과 무관합니다.

<sub>관련: [[amazon-s3]] [[aws-cloudtrail]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 한 보안 팀이 **모든 AWS 계정에서 특정 서비스나 작업의 사용을 제한**하려고 합니다. 모든 계정은 AWS Organizations의 대규모 조직에 속합니다. 솔루션은 확장 가능해야 하고 **권한을 유지 관리하는 지점이 한 곳**이어야 합니다. 무엇을 해야 합니까?
> a) 루트 조직 단위에 서비스 제어 정책(SCP)을 만들어 해당 서비스·작업을 거부한다
> b) 서비스·작업 접근을 제공하는 ACL을 만든다
> c) 계정을 허용하는 보안 그룹을 만들어 사용자 그룹에 붙인다
> d) 계정마다 교차 계정 역할을 만들어 해당 서비스·작업을 거부한다
>> [!success]- Answer
>> a) 루트 조직 단위에 서비스 제어 정책(SCP)을 만들어 해당 서비스·작업을 거부한다
>> **왜 이 답인가** — SCP는 **조직 전체에 걸리는 권한 상한선**입니다. 루트에 한 번 걸면 아래 모든 계정에 적용되고, 계정 관리자도 이를 넘어설 수 없습니다.
>> **나머지가 아닌 이유** — 보안 그룹은 네트워크 트래픽 제어입니다. ACL은 이 맥락의 도구가 아닙니다. 계정마다 역할을 만드는 방식은 관리 지점이 계정 수만큼 늘어납니다.

<sub>관련: [[aws-organizations]] [[aws-iam]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 금융 기업의 고객이 문자 메시지로 상담 예약을 요청하면, EC2의 웹 애플리케이션이 이를 받아 **SQS 큐에 게시**하고, 다른 EC2의 애플리케이션이 초대장과 확인 메일을 보낸 뒤 정보를 DynamoDB에 저장합니다. 기업이 커지면서 고객들이 **초대장이 늦게 온다**고 신고합니다. 무엇을 권장해야 합니까?
> a) 초대장을 보내는 애플리케이션에 Auto Scaling 그룹을 두고 **SQS 큐 깊이를 기준으로** 확장하도록 구성한다
> b) DynamoDB 앞에 DAX 클러스터를 추가한다
> c) 예약 요청을 받는 웹 애플리케이션 앞에 API Gateway를 둔다
> d) 웹 애플리케이션을 오리진으로 하는 CloudFront 배포를 추가한다
>> [!success]- Answer
>> a) 초대장을 보내는 애플리케이션에 Auto Scaling 그룹을 두고 **SQS 큐 깊이를 기준으로** 확장하도록 구성한다
>> **왜 이 답인가** — 접수는 잘 되는데 **초대장이 늦다**는 것은 소비 쪽이 밀리고 있다는 뜻입니다. 큐에 쌓인 양을 지표로 소비자를 늘리면 지연이 사라집니다.
>> **나머지가 아닌 이유** — DAX는 읽기 캐시라 발송 지연과 무관합니다. API Gateway와 CloudFront는 **접수 쪽**을 손보는 것이라 병목 위치가 다릅니다.

<sub>관련: [[amazon-sqs]] [[amazon-ec2-auto-scaling]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 여러 데이터베이스에서 오는 **배치 데이터**와 네트워크 센서·API에서 오는 **실시간 스트림**을 함께 다룹니다. 모든 데이터를 한곳에 모아 비즈니스 분석에 쓰려 하며, 들어오는 데이터를 처리해 여러 S3 버킷에 단계별로 적재해야 합니다. 이후 팀들은 **일회성 쿼리**를 돌리고 BI 도구로 KPI를 봅니다. 운영 오버헤드가 가장 적은 조합은 무엇입니까? (2개 선택)
> a) 일회성 쿼리에는 Amazon Athena를, KPI 대시보드에는 Amazon QuickSight를 사용한다
> b) AWS Lake Formation 블루프린트로 데이터 레이크에 수집할 데이터를 식별하고, AWS Glue로 원본을 크롤링·추출해 Apache Parquet 형식으로 S3에 적재한다
> c) 일회성 쿼리에는 Kinesis Data Analytics를, KPI에는 QuickSight를 사용한다
> d) Lambda 함수를 직접 만들어 데이터베이스의 레코드를 Redshift 클러스터로 옮긴다
>> [!success]- Answer
>> a) 일회성 쿼리에는 Amazon Athena를, KPI 대시보드에는 Amazon QuickSight를 사용한다
>> b) AWS Lake Formation 블루프린트로 데이터 레이크에 수집할 데이터를 식별하고, AWS Glue로 원본을 크롤링·추출해 Apache Parquet 형식으로 S3에 적재한다
>> **왜 이 답인가** — 데이터 레이크 구축은 **Lake Formation + Glue**, S3 위의 일회성 SQL은 **Athena**, KPI 대시보드는 **QuickSight**입니다. 넷 다 관리형이라 운영 오버헤드가 가장 적습니다.
>> **나머지가 아닌 이유** — Kinesis Data Analytics는 스트림에 대한 실시간 분석이라 일회성 쿼리 도구가 아닙니다. Lambda로 적재를 직접 만드는 것은 코드와 운영이 늘어납니다.

<sub>관련: [[aws-lake-formation]] [[aws-glue]] [[amazon-athena]] [[amazon-quicksight]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 한 기업이 엔지니어 팀에 개별 AWS 계정을 주려 합니다. 계정별로 **한 달 EC2 사용량이 특정 임계값을 넘으면 즉시 알림**을 받고 싶습니다. 가장 비용 효율적인 방법은 무엇입니까?
> a) 계정마다 AWS Budgets로 비용 예산을 만들고 기간은 월간, 범위는 EC2로 설정한 뒤 임계값 알림을 SNS 주제로 받게 한다
> b) Cost Explorer로 일일 서비스별 보고서를 만들어 EC2로 필터링하고 임계값 초과 시 SES로 알리게 한다
> c) Cost Explorer로 월간 보고서를 만들어 EC2로 필터링하고 임계값 초과 시 SES로 알리게 한다
> d) 시간 단위 비용·사용 보고서를 만들어 Athena와 통합하고 EventBridge로 쿼리를 예약해 SNS로 알린다
>> [!success]- Answer
>> a) 계정마다 AWS Budgets로 비용 예산을 만들고 기간은 월간, 범위는 EC2로 설정한 뒤 임계값 알림을 SNS 주제로 받게 한다
>> **왜 이 답인가** — `임계값을 넘으면 알림`이 **Budgets의 기능 그대로**입니다. 범위를 EC2로 좁히고 알림 대상을 SNS로 지정하면 끝이며 추가 인프라가 없습니다.
>> **나머지가 아닌 이유** — Cost Explorer는 분석 도구라 임계값 알림 기능이 없습니다. CUR + Athena 조합은 직접 파이프라인을 만들어야 해서 비용과 수고가 가장 큽니다.

<sub>관련: [[aws-cost-explorer]] [[amazon-sns]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 한 기업이 최근 웹 공격 때문에 퍼블릭 웹 애플리케이션의 보안을 걱정합니다. 애플리케이션은 Application Load Balancer를 씁니다. **DDoS 공격 위험을 줄이려면** 무엇을 해야 합니까?
> a) AWS Shield Advanced를 활성화해 공격을 방어한다
> b) ALB에 Amazon Inspector 에이전트를 추가한다
> c) Amazon Macie를 구성해 공격을 막는다
> d) Amazon GuardDuty로 ALB를 모니터링한다
>> [!success]- Answer
>> a) AWS Shield Advanced를 활성화해 공격을 방어한다
>> **왜 이 답인가** — DDoS 완화를 담당하는 서비스가 Shield이고, ELB·CloudFront 등을 보호 대상으로 지정하고 대응 지원까지 받는 것이 Advanced입니다.
>> **나머지가 아닌 이유** — Inspector는 취약점 평가, Macie는 S3의 민감 데이터 탐지, GuardDuty는 위협 탐지입니다. 셋 다 공격 트래픽을 막지 않습니다.

<sub>관련: [[aws-shield]] [[elastic-load-balancing]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업의 비동기 API가 사용자 요청을 받아 유형에 따라 마이크로서비스로 넘깁니다. 프런트는 API Gateway, 처리는 Lambda이며 Lambda가 **DynamoDB에 요청을 저장한 뒤** 전달합니다. DynamoDB 처리량을 예산 한도까지 올렸는데도 가용성 문제가 있고 **요청이 유실**됩니다. 기존 사용자에게 영향을 주지 않으면서 해결하려면 무엇을 해야 합니까?
> a) Amazon SQS 큐와 Lambda로 DynamoDB 쓰기를 **완충**한다
> b) API Gateway에 서버 측 제한(throttling)을 건다
> c) 사용자 요청 테이블에 보조 인덱스를 만든다
> d) DAX와 Lambda로 DynamoDB 쓰기를 완충한다
>> [!success]- Answer
>> a) Amazon SQS 큐와 Lambda로 DynamoDB 쓰기를 **완충**한다
>> **왜 이 답인가** — 쓰기 용량이 한계인데 요청은 계속 옵니다. 큐를 앞에 두면 **초과분이 큐에 쌓였다가 처리**되므로 유실이 없어지고 사용자 경험도 그대로입니다.
>> **나머지가 아닌 이유** — 제한을 걸면 요청이 **거부되어** 기존 사용자에게 영향이 갑니다. DAX는 **읽기** 캐시입니다. 보조 인덱스는 오히려 쓰기 용량을 더 씁니다.

<sub>관련: [[amazon-sqs]] [[amazon-dynamodb]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 솔루션스 아키텍트가 음악 행사 웹사이트를 최적화합니다. 공연 영상은 **실시간으로 스트리밍**된 뒤 **온디맨드로도** 제공되며 전 세계 시청자가 예상됩니다. 실시간과 온디맨드 스트리밍 **양쪽의 성능을 모두** 개선하는 서비스는 무엇입니까?
> a) Amazon CloudFront
> b) AWS Global Accelerator
> c) Amazon Route 53
> d) Amazon S3 Transfer Acceleration
>> [!success]- Answer
>> a) Amazon CloudFront
>> **왜 이 답인가** — CloudFront는 **라이브 스트리밍과 온디맨드 영상 전달을 모두 지원**하며 엣지에서 시청자에게 콘텐츠를 내보냅니다.
>> **나머지가 아닌 이유** — Global Accelerator는 캐싱 없이 경로만 최적화합니다. Route 53은 DNS입니다. Transfer Acceleration은 S3 **업로드**를 빠르게 하는 기능입니다.

<sub>관련: [[amazon-cloudfront]] | 모듈 [[09-perf-network]]</sub>

> [!question] 한 기업이 데이터 웨어하우스를 AWS로 옮겼고 Direct Connect 연결도 있습니다. 본사 사용자들이 시각화 도구로 데이터 웨어하우스를 조회하는데, **쿼리 결과는 평균 50MB**이고 시각화 도구가 보내는 **웹 페이지는 약 500KB**이며 결과는 캐시되지 않습니다. **데이터 송신(egress) 비용이 가장 낮은** 솔루션은 무엇입니까?
> a) 시각화 도구를 데이터 웨어하우스와 **같은 리전에 두고** 같은 리전의 Direct Connect 위치를 통해 접근한다
> b) 시각화 도구를 온프레미스에 두고 인터넷으로 데이터 웨어하우스를 직접 조회한다
> c) 시각화 도구를 같은 리전에 두고 인터넷으로 접근한다
> d) 시각화 도구를 온프레미스에 두고 Direct Connect로 데이터 웨어하우스를 직접 조회한다
>> [!success]- Answer
>> a) 시각화 도구를 데이터 웨어하우스와 **같은 리전에 두고** 같은 리전의 Direct Connect 위치를 통해 접근한다
>> **왜 이 답인가** — 도구를 리전 안에 두면 **50MB짜리 쿼리 결과는 리전 내부에서만** 오가고, 밖으로 나가는 것은 **500KB짜리 웹 페이지**뿐입니다. 그 500KB도 인터넷보다 요금이 싼 Direct Connect로 나갑니다.
>> **나머지가 아닌 이유** — 도구를 온프레미스에 두면 50MB 결과가 매번 리전 밖으로 나갑니다. 같은 리전에 두더라도 인터넷으로 접근하면 송신 단가가 더 비쌉니다.

<sub>관련: [[aws-direct-connect]] [[amazon-redshift]] | 모듈 [[14-cost-network]]</sub>

> [!question] 한 기업의 웹 애플리케이션이 Application Load Balancer 뒤 EC2 인스턴스에서 실행됩니다. 정책이 바뀌어 이제 **특정 국가 한 곳에서만** 애플리케이션에 접근할 수 있어야 합니다. 어떤 구성이 요구 사항을 충족합니까?
> a) VPC의 Application Load Balancer에 AWS WAF를 구성한다
> b) EC2 인스턴스의 보안 그룹을 구성한다
> c) Application Load Balancer의 보안 그룹을 구성한다
> d) EC2 인스턴스가 있는 서브넷의 네트워크 ACL을 구성한다
>> [!success]- Answer
>> a) VPC의 Application Load Balancer에 AWS WAF를 구성한다
>> **왜 이 답인가** — **국가 기준 차단은 WAF의 지리적 일치(geo match) 규칙**입니다. 보안 그룹이나 네트워크 ACL은 IP·포트만 알 뿐 요청이 어느 나라에서 왔는지 모릅니다.
>> **나머지가 아닌 이유** — 국가별 IP 대역을 손으로 관리하는 것은 현실적으로 불가능하고 계속 바뀝니다.

<sub>관련: [[aws-waf]] [[elastic-load-balancing]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 솔루션스 아키텍트가 새 애플리케이션을 설계합니다. EC2 온디맨드 인스턴스가 여러 가용 영역에서 **하루에도 여러 번 늘고 줄며** ALB가 부하를 분산합니다. 아키텍처는 **분산 세션 데이터 관리**를 지원해야 하고 필요하면 코드를 바꿀 수 있습니다. 무엇을 해야 합니까?
> a) Amazon ElastiCache로 세션 데이터를 관리·저장한다
> b) ALB의 고정 세션(스티키 세션)으로 세션 데이터를 관리한다
> c) Systems Manager의 Session Manager로 세션을 관리한다
> d) AWS STS의 `GetSessionToken` API로 세션을 관리한다
>> [!success]- Answer
>> a) Amazon ElastiCache로 세션 데이터를 관리·저장한다
>> **왜 이 답인가** — 인스턴스가 수시로 사라지므로 **세션을 인스턴스 밖 공용 저장소**에 두어야 합니다. ElastiCache는 지연이 짧아 세션 저장소로 널리 쓰입니다.
>> **나머지가 아닌 이유** — 스티키 세션은 인스턴스가 종료되면 그 세션이 사라져 근본 해결이 아닙니다. Session Manager는 인스턴스 접속 도구, STS는 임시 자격 증명 발급 서비스로 이름만 비슷합니다.

<sub>관련: [[amazon-elasticache]] [[elastic-load-balancing]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 금융 위험 모델링을 위해 AWS에서 **고성능 컴퓨팅(HPC)** 인프라를 쓰려고 합니다. 워크로드는 Linux에서 돌고 수백 대의 EC2 스팟 인스턴스에서 **짧게 실행되며** 수천 개의 출력 파일을 만들어 장기 저장소에 보관합니다. 온프레미스 데이터를 장기 저장소로 복사해 모든 인스턴스가 처리할 수 있게 하고, **영구 저장소와 통합된 고성능 파일 시스템**도 필요합니다. 어떤 조합이 요구 사항을 충족합니까?
> a) Amazon S3와 통합된 Amazon FSx for Lustre
> b) Amazon S3와 통합된 Amazon FSx for Windows File Server
> c) Amazon EBS와 통합된 S3 Glacier
> d) VPC 엔드포인트를 둔 S3 버킷과 gp2 EBS 볼륨의 조합
>> [!success]- Answer
>> a) Amazon S3와 통합된 Amazon FSx for Lustre
>> **왜 이 답인가** — HPC용 고성능 파일 시스템은 **Lustre**이고, FSx for Lustre는 **S3 버킷과 연결해 객체를 파일처럼 읽고 결과를 다시 S3로 내보낼 수 있습니다.** 장기 저장(S3)과 고성능 처리(Lustre)가 한 쌍으로 맞물립니다.
>> **나머지가 아닌 이유** — FSx for Windows는 SMB 기반이라 Linux HPC와 맞지 않습니다. Glacier는 아카이브라 처리 중 읽기에 쓸 수 없고, EBS는 수백 인스턴스가 함께 쓰는 공유 파일 시스템이 아닙니다.

<sub>관련: [[amazon-fsx]] [[amazon-s3]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 한 기업이 ALB가 단일 대상 그룹의 EC2 인스턴스로 트래픽을 보내는 애플리케이션을 출시합니다. 환경마다 Auto Scaling 그룹이 있으며 **개발 환경과 프로덕션 환경**이 필요하고 프로덕션에는 트래픽이 몰리는 구간이 있습니다. **개발 환경을 가장 비용 효율적으로** 구성하려면 어떤 솔루션이 적합합니까?
> a) 개발 환경 Auto Scaling 그룹의 **최대 인스턴스 수**를 줄인다
> b) 개발 환경 대상 그룹에 EC2 인스턴스를 한 대만 두도록 다시 구성한다
> c) ALB 분산 알고리즘을 최소 미처리 요청으로 바꾼다
> d) 두 환경 모두 EC2 인스턴스 크기를 줄인다
>> [!success]- Answer
>> a) 개발 환경 Auto Scaling 그룹의 **최대 인스턴스 수**를 줄인다
>> **왜 이 답인가** — 개발 환경이 필요 이상으로 커지지 않도록 **상한을 낮추는 것**이 가장 직접적이고 안전한 비용 절감입니다. 최소 두 대라는 요구는 그대로 지킵니다.
>> **나머지가 아닌 이유** — 인스턴스를 한 대로 줄이는 것은 "최소 두 대"라는 조건을 어깁니다. 프로덕션 인스턴스까지 줄이면 성능이 나빠지고, 분산 알고리즘은 비용과 무관합니다.

<sub>관련: [[amazon-ec2-auto-scaling]] [[elastic-load-balancing]] | 모듈 [[12-cost-compute]]</sub>

> [!question] 솔루션스 아키텍트가 CloudFront 배포를 새로 만듭니다. 사용자가 제출하는 정보 일부가 **민감 정보**입니다. HTTPS를 쓰고 있지만 한 겹 더 필요하며, 민감 정보는 **애플리케이션 스택 전 구간에서 보호**되고 **특정 애플리케이션만** 접근할 수 있어야 합니다. 무엇을 해야 합니까?
> a) CloudFront **필드 수준 암호화 프로파일**을 구성한다
> b) CloudFront 서명된 URL을 구성한다
> c) CloudFront 서명된 쿠키를 구성한다
> d) 뷰어 프로토콜 정책을 HTTPS Only로 설정한다
>> [!success]- Answer
>> a) CloudFront **필드 수준 암호화 프로파일**을 구성한다
>> **왜 이 답인가** — 필드 수준 암호화는 **특정 필드를 엣지에서 공개 키로 암호화**해 스택 안쪽까지 암호화된 채로 흐르게 하고, 개인 키를 가진 애플리케이션만 그 값을 풀 수 있습니다. `전 구간 보호` + `특정 애플리케이션만 접근`이라는 두 조건을 함께 만족합니다.
>> **나머지가 아닌 이유** — 서명된 URL·쿠키는 **콘텐츠 접근 제어**입니다. HTTPS Only는 전송 구간 암호화라 이미 갖춰진 것이고 오리진 뒤쪽은 보호하지 못합니다.

<sub>관련: [[amazon-cloudfront]] | 모듈 [[03-data-protection]]</sub>

> [!question] 한 음식 배달 기업의 주문 처리 시스템이 피크 시간에 확장 문제를 겪습니다. 현재는 **주문을 수집하는 Auto Scaling 그룹**과 **주문을 이행하는 Auto Scaling 그룹**이 있습니다. 수집은 빠르지만 **이행은 오래 걸리고**, 확장 이벤트로 데이터가 유실되면 안 됩니다. 두 과정이 모두 제대로 확장되면서 리소스 사용률도 최적화하려면 어떤 솔루션이 적합합니까?
> a) 수집용과 이행용 SQS 큐를 각각 두고 인스턴스가 자기 큐를 폴링하게 한 뒤, **인스턴스당 백로그(backlog per instance)** 지표를 만들어 그 값으로 Auto Scaling 그룹을 확장한다
> b) 수집용·이행용 SQS 큐를 두고 큐가 보내는 알림을 기준으로 Auto Scaling 그룹을 확장한다
> c) CloudWatch로 각 인스턴스 CPU를 감시하고 피크 워크로드 값에 맞춰 최소 용량을 설정한다
> d) CloudWatch 경보가 SNS 주제를 호출해 필요할 때 Auto Scaling 그룹을 추가로 만들게 한다
>> [!success]- Answer
>> a) 수집용과 이행용 SQS 큐를 각각 두고 인스턴스가 자기 큐를 폴링하게 한 뒤, **인스턴스당 백로그(backlog per instance)** 지표를 만들어 그 값으로 Auto Scaling 그룹을 확장한다
>> **왜 이 답인가** — 큐가 유실을 막고, **인스턴스 한 대가 감당해야 할 남은 작업 수**야말로 확장 판단의 정확한 근거입니다. AWS가 권장하는 큐 기반 확장 지표입니다.
>> **나머지가 아닌 이유** — 큐는 확장을 알리는 알림을 보내지 않습니다. 최소 용량을 피크에 맞추면 평소에 낭비입니다. Auto Scaling 그룹을 새로 만드는 방식은 관리가 감당되지 않습니다.

<sub>관련: [[amazon-sqs]] [[amazon-ec2-auto-scaling]] [[amazon-cloudwatch]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 기업이 온프레미스에서 만들던 컨테이너 애플리케이션을 AWS로 옮깁니다. 배포 직후 수천 명의 사용자가 예상되는데 **대규모 컨테이너 배포를 어떻게 관리할지 모릅니다.** 고가용성 아키텍처로 배포하되 운영 오버헤드를 최소화하려고 합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 컨테이너 이미지를 Amazon ECR에 저장하고 **AWS Fargate 시작 유형의 ECS 클러스터**로 실행하며 대상 추적으로 자동 확장한다
> b) 이미지를 ECR에 저장하고 EC2 시작 유형 ECS 클러스터로 실행하며 대상 추적으로 확장한다
> c) EC2 인스턴스에 이미지 저장소를 두고 여러 AZ의 EC2에서 컨테이너를 돌리며 CPU 평균을 보고 인스턴스를 추가한다
> d) 컨테이너 이미지가 든 AMI를 만들어 여러 AZ의 Auto Scaling 그룹으로 띄우고 CPU 경보로 확장한다
>> [!success]- Answer
>> a) 컨테이너 이미지를 Amazon ECR에 저장하고 **AWS Fargate 시작 유형의 ECS 클러스터**로 실행하며 대상 추적으로 자동 확장한다
>> **왜 이 답인가** — `배포 관리 방법을 모른다` + `운영 오버헤드 최소`가 함께 나오면 **서버를 아예 안 보는 Fargate**입니다. 이미지 저장은 관리형 레지스트리인 ECR이 맡습니다.
>> **나머지가 아닌 이유** — EC2 시작 유형은 노드를 직접 관리해야 합니다. 레지스트리를 직접 운영하거나 AMI에 이미지를 굽는 방식은 배포 때마다 손이 갑니다.

<sub>관련: [[aws-fargate]] [[amazon-ecs]] | 모듈 [[07-perf-compute]]</sub>

> [!question] 프라이빗 서브넷의 EC2 인스턴스에서 실행되는 애플리케이션이 DynamoDB 테이블에 접근해야 합니다. **트래픽이 AWS 네트워크를 벗어나지 않게** 하면서 가장 안전하게 접근하는 방법은 무엇입니까?
> a) DynamoDB용 VPC 엔드포인트를 사용한다
> b) 퍼블릭 서브넷의 NAT 게이트웨이를 사용한다
> c) 프라이빗 서브넷의 NAT 인스턴스를 사용한다
> d) VPC에 연결된 인터넷 게이트웨이를 사용한다
>> [!success]- Answer
>> a) DynamoDB용 VPC 엔드포인트를 사용한다
>> **왜 이 답인가** — DynamoDB는 S3와 함께 **게이트웨이 엔드포인트를 지원하는 두 서비스** 중 하나입니다. 엔드포인트를 만들면 트래픽이 AWS 네트워크 안에서만 흐릅니다.
>> **나머지가 아닌 이유** — NAT와 인터넷 게이트웨이는 모두 **인터넷을 통해** 나가는 경로라 조건을 어깁니다.

<sub>관련: [[amazon-vpc]] [[amazon-dynamodb]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 ALB 뒤 EC2에서 글로벌 웹 애플리케이션을 운영하고 데이터는 Aurora에 저장합니다. 재해 복구 솔루션이 필요하며 **최대 30분의 다운타임과 일부 데이터 손실은 감수**할 수 있습니다. 기본 인프라가 정상일 때 이 솔루션이 부하를 나눠 받을 필요는 없습니다. 무엇을 해야 합니까?
> a) 필요한 인프라 요소를 갖춘 상태로 배포하고 Route 53으로 **활성-수동(active-passive) 장애 조치**를 구성하며, 두 번째 리전에 Aurora 복제본을 만든다
> b) 두 번째 리전에 축소 배포하고 Route 53으로 활성-활성 장애 조치를 구성하며 복제본을 만든다
> c) 두 번째 리전에 인프라를 그대로 복제하고 활성-활성으로 구성하며 최신 스냅샷에서 데이터베이스를 복원한다
> d) AWS Backup으로 백업해 두 번째 리전에 인프라를 만들고 활성-수동으로 구성하며 두 번째 기본 인스턴스를 만든다
>> [!success]- Answer
>> a) 필요한 인프라 요소를 갖춘 상태로 배포하고 Route 53으로 **활성-수동(active-passive) 장애 조치**를 구성하며, 두 번째 리전에 Aurora 복제본을 만든다
>> **왜 이 답인가** — `평상시 부하를 받을 필요 없음`이 **활성-수동**을 가리키고, `30분 다운타임 허용`은 대기 환경을 두는 파일럿 라이트/웜 스탠바이 수준이면 충분하다는 뜻입니다. 데이터는 교차 리전 Aurora 복제본이 따라갑니다.
>> **나머지가 아닌 이유** — 활성-활성은 요구 이상으로 비싸고 복잡합니다. 스냅샷 복원만으로는 복구 시간이 30분을 넘기기 쉽습니다.

<sub>관련: [[amazon-aurora]] [[amazon-route-53]] | 모듈 [[05-high-availability]]</sub>

> [!question] 글로벌 행사 주최 측이 일일 보고서를 **정적 HTML 페이지**로 올리려 합니다. 전 세계 사용자로부터 수백만 조회가 예상되며 파일은 S3 버킷에 있습니다. 효율적이고 효과적인 솔루션은 무엇입니까?
> a) S3 버킷을 오리진으로 하는 Amazon CloudFront를 사용한다
> b) 파일마다 미리 서명된 URL을 생성한다
> c) 모든 리전으로 교차 리전 복제를 사용한다
> d) Route 53의 지리 근접 기능을 사용한다
>> [!success]- Answer
>> a) S3 버킷을 오리진으로 하는 Amazon CloudFront를 사용한다
>> **왜 이 답인가** — 같은 정적 파일을 전 세계가 본다면 **엣지 캐시**가 정답입니다. 오리진 요청과 전송 비용이 줄고 응답도 빨라집니다.
>> **나머지가 아닌 이유** — 미리 서명된 URL은 접근 제어 수단이라 성능과 무관합니다. 모든 리전에 복제하는 것은 저장 비용과 관리가 폭증합니다. 지리 근접 라우팅은 여러 곳에 실제 원본이 있어야 의미가 있습니다.

<sub>관련: [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[09-perf-network]]</sub>

> [!question] 솔루션스 아키텍트가 애플리케이션이 RDS DB 인스턴스에 접속할 때 쓰는 **사용자 이름과 암호를 Systems Manager Parameter Store의 보안 파라미터**로 저장하려고 합니다. 애플리케이션은 EC2 인스턴스에서 실행됩니다. 무엇을 해야 합니까?
> a) 파라미터 읽기 권한과 그 파라미터를 암호화한 **KMS 키에 대한 복호화 권한**을 가진 IAM 역할을 만들어 EC2 인스턴스에 할당한다
> b) 파라미터 읽기와 KMS 복호화를 허용하는 IAM 정책을 만들어 EC2 인스턴스에 직접 할당한다
> c) 파라미터와 EC2 인스턴스 사이에 IAM 신뢰 관계를 만들고 신뢰 정책에 RDS를 보안 주체로 지정한다
> d) DB 인스턴스와 EC2 인스턴스 사이에 신뢰 관계를 만들고 Systems Manager를 보안 주체로 지정한다
>> [!success]- Answer
>> a) 파라미터 읽기 권한과 그 파라미터를 암호화한 **KMS 키에 대한 복호화 권한**을 가진 IAM 역할을 만들어 EC2 인스턴스에 할당한다
>> **왜 이 답인가** — 두 권한이 **모두** 필요합니다 — 파라미터를 읽을 권한과 **암호를 풀 KMS 권한**입니다. 그리고 EC2에 권한을 주는 방법은 **역할**입니다.
>> **나머지가 아닌 이유** — 정책은 인스턴스에 직접 붙지 않고 역할을 거쳐야 합니다. 파라미터나 DB 인스턴스와 신뢰 관계를 맺는다는 개념은 존재하지 않습니다.

<sub>관련: [[aws-systems-manager]] [[aws-iam]] [[aws-kms]] | 모듈 [[01-secure-access]]</sub>

> [!question] 한 기업이 웹 애플리케이션을 단일 리전의 EC2 인스턴스로 리호스트했습니다. 이제 **고가용성과 내결함성**을 갖추도록 다시 설계하려 하며, **트래픽이 실행 중인 모든 EC2 인스턴스에 무작위로 도달**해야 합니다. 어떤 조합이 필요합니까? (2개 선택)
> a) Amazon Route 53 다중값 응답(multivalue answer) 라우팅 정책을 만든다
> b) EC2 인스턴스 네 대를 띄우되 두 가용 영역에 두 대씩 배치한다
> c) Route 53 장애 조치 라우팅 정책을 만든다
> d) EC2 인스턴스 세 대를 띄우되 한 AZ에 두 대, 다른 AZ에 한 대를 배치한다
>> [!success]- Answer
>> a) Amazon Route 53 다중값 응답(multivalue answer) 라우팅 정책을 만든다
>> b) EC2 인스턴스 네 대를 띄우되 두 가용 영역에 두 대씩 배치한다
>> **왜 이 답인가** — 다중값 응답은 **정상 상태인 여러 레코드를 무작위로 돌려주어** 요청을 흩뿌립니다. 내결함성을 위해서는 AZ마다 **같은 수**의 인스턴스를 두어 한 AZ가 죽어도 용량이 절반은 남게 합니다.
>> **나머지가 아닌 이유** — 장애 조치 정책은 평상시 한쪽만 씁니다. AZ에 2대·1대로 나누면 한 AZ 손실 시 용량이 크게 기울어집니다.

<sub>관련: [[amazon-route-53]] [[amazon-ec2]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 기업이 API 기반 클라우드 통신 플랫폼을 설계합니다. 애플리케이션은 Network Load Balancer 뒤 EC2에서 돌고, 외부 사용자는 Amazon API Gateway를 통해 접근합니다. **SQL 인젝션 같은 웹 공격**을 막고 **대규모·정교한 DDoS 공격도 탐지·완화**하려고 합니다. 가장 강력한 보호를 제공하는 조합은 무엇입니까? (2개 선택)
> a) Amazon API Gateway를 AWS WAF로 보호한다
> b) NLB에 AWS Shield Advanced를 적용한다
> c) NLB를 AWS WAF로 보호한다
> d) Amazon GuardDuty와 AWS Shield Standard를 함께 쓴다
>> [!success]- Answer
>> a) Amazon API Gateway를 AWS WAF로 보호한다
>> b) NLB에 AWS Shield Advanced를 적용한다
>> **왜 이 답인가** — 공격 종류에 따라 도구가 갈립니다. **웹 취약점(SQL 인젝션)은 WAF**가, **대규모 DDoS는 Shield Advanced**가 맡습니다. WAF는 API Gateway·ALB·CloudFront에 붙고, Shield Advanced는 NLB의 탄력적 IP 등을 보호합니다.
>> **나머지가 아닌 이유** — WAF는 **NLB에 붙일 수 없습니다**(계층 4). Shield Standard는 기본 제공되는 기초 보호라 `정교한 대규모 공격` 요구에 못 미칩니다.

<sub>관련: [[aws-waf]] [[aws-shield]] [[amazon-api-gateway]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 기업이 Amazon ECS로 애플리케이션을 운영합니다. 이 애플리케이션은 원본 이미지의 크기를 조정한 뒤 **S3 API를 호출해** 저장합니다. 애플리케이션이 S3에 접근할 권한을 갖게 하려면 어떻게 해야 합니까?
> a) S3 권한이 있는 IAM 역할을 만들어 작업 정의의 `taskRoleArn`으로 지정한다
> b) IAM의 S3 역할을 수정해 ECS의 읽기/쓰기를 허용하고 컨테이너를 다시 시작한다
> c) ECS에서 S3로의 접근을 허용하는 보안 그룹을 만들고 클러스터의 시작 구성을 갱신한다
> d) S3 권한이 있는 IAM 사용자를 만들고 그 계정으로 로그인한 채 ECS 클러스터의 EC2 인스턴스를 다시 시작한다
>> [!success]- Answer
>> a) S3 권한이 있는 IAM 역할을 만들어 작업 정의의 `taskRoleArn`으로 지정한다
>> **왜 이 답인가** — ECS에서 **컨테이너(작업)에 권한을 주는 자리가 작업 역할(task role)**입니다. 인스턴스 역할과 구분되며, 컨테이너별로 최소 권한을 줄 수 있습니다.
>> **나머지가 아닌 이유** — 보안 그룹은 네트워크 제어이지 권한이 아닙니다. IAM 사용자로 로그인해 인스턴스를 띄우는 것은 권한이 전달되는 방식이 아닙니다.

<sub>관련: [[amazon-ecs]] [[aws-iam]] [[amazon-s3]] | 모듈 [[01-secure-access]]</sub>
