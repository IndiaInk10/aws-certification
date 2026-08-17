---
title: "실전 구성 26회차"
tags: [saa-c03, 문제은행, quiz]
exam: 26
문항수: 50
lang: ko
---

> [!info] 실제 출제 비중에 맞춘 50문항입니다
> 도메인 구성이 실제 시험과 같습니다 — **보안 15 · 복원력 13 · 고성능 12 · 비용 10**.
> 그래서 이 회차의 정답률은 **실전 예상 점수에 가깝습니다.** 시간을 재고 한 번에 푸세요.
>
> 문항은 커뮤니티 문제 정리에서 **판단이 갈리는 지점**만 가져와 상황·보기·해설을 새로 쓴 것입니다.
> 출처와 방식은 [참고 자료](/docs/references)에 있습니다.

> [!question] 고객들이 **셀프 서비스로 골라 쓸 수 있도록** 승인된 솔루션·도구 묶음을 중앙에서 관리·배포해야 합니다. 무엇을 써야 합니까?
> a) AWS Service Catalog로 제품 포트폴리오를 만들어 배포한다
> b) CloudFormation 템플릿 파일을 이메일로 배포한다
> c) 고객마다 계정을 만들어 준다
> d) 문서로 설치 절차를 안내한다
>> [!success]- Answer
>> a) AWS Service Catalog로 제품 포트폴리오를 만들어 배포한다
>> **왜 이 답인가** — Service Catalog는 **승인된 구성만 목록으로 제공하고 사용자가 직접 띄우게** 하는 서비스입니다. `중앙 관리`와 `셀프 서비스`가 함께 나오면 이것입니다.
>> **나머지가 아닌 이유** — 템플릿 파일 배포와 문서 안내는 버전 통제와 접근 제어가 없습니다. 계정 발급은 요구와 다른 이야기입니다.

<sub>관련: [[aws-service-catalog]] [[aws-cloudformation]] | 모듈 [[01-secure-access]]</sub>

> [!question] 온프레미스와 AWS를 연결해 쓰는 하이브리드 환경에서 **온프레미스 DNS 서버 한 대가 죽자 VPC 리소스가 온프레미스 이름을 풀지 못해** 장애가 났습니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) **Route 53 Resolver 아웃바운드 엔드포인트를 여러 AZ에 두고** 전달 규칙에 온프레미스 DNS 서버를 **두 대 이상** 지정한다
> b) VPC의 DNS 설정을 온프레미스 DNS 서버 IP로 직접 바꾼다
> c) 인스턴스마다 `hosts` 파일에 이름을 등록한다
> d) 프라이빗 호스팅 영역에 온프레미스 레코드를 수동으로 복사한다
>> [!success]- Answer
>> a) **Route 53 Resolver 아웃바운드 엔드포인트를 여러 AZ에 두고** 전달 규칙에 온프레미스 DNS 서버를 **두 대 이상** 지정한다
>> **왜 이 답인가** — 이름 해석 경로도 **양쪽 끝에서 이중화**해야 합니다. 엔드포인트를 여러 AZ에 두고 대상 DNS 서버를 복수로 지정하면 한쪽이 죽어도 조회가 계속됩니다.
>> **나머지가 아닌 이유** — VPC DNS를 단일 서버로 바꾸면 그 서버가 단일 실패 지점이 됩니다. `hosts` 파일과 수동 복사는 관리 부담이 크고 최신 상태를 보장하지 못합니다.

<sub>관련: [[amazon-route-53]] [[amazon-vpc]] | 모듈 [[05-high-availability]]</sub>

> [!question] EKS 워크로드가 하루 종일 들쭉날쭉합니다. 운영 오버헤드를 최소로 하면서 **파드와 노드 모두** 자동으로 늘고 줄게 하려면 어떤 조합입니까? (2개 선택)
> a) 파드 수를 조절하는 Horizontal Pod Autoscaler를 설정한다
> b) 노드를 자동으로 프로비저닝하는 Karpenter(또는 Cluster Autoscaler)를 설정한다
> c) 노드 수를 최대치로 고정한다
> d) 사람이 매일 노드 수를 조정한다
>> [!success]- Answer
>> a) 파드 수를 조절하는 Horizontal Pod Autoscaler를 설정한다
>> b) 노드를 자동으로 프로비저닝하는 Karpenter(또는 Cluster Autoscaler)를 설정한다
>> **왜 이 답인가** — 쿠버네티스의 확장은 **두 층**입니다. 파드를 늘리는 것과, 그 파드를 얹을 노드를 늘리는 것. 하나만 하면 파드가 배치되지 못하거나 노드가 놀게 됩니다.
>> **나머지가 아닌 이유** — 노드 고정은 한가한 시간의 비용을 그대로 냅니다. 수동 조정은 자동화가 아닙니다.

<sub>관련: [[amazon-eks]] | 모듈 [[07-perf-compute]]</sub>

> [!question] 여러 웹사이트가 하루 수십 GB의 트래픽 로그를 만들며, 개발자들이 **몇 달에 걸쳐 주 1회 온디맨드로 표준 SQL 분석**을 해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) 로그를 **Amazon S3**에 저장하고 **Amazon Athena**로 분석한다
> b) 로그를 Amazon RDS에 저장하고 데이터베이스 클라이언트로 분석한다
> c) 로그를 Amazon OpenSearch Service에 저장해 분석한다
> d) 로그를 EMR 클러스터에 저장하고 오픈 소스 SQL 프레임워크로 분석한다
>> [!success]- Answer
>> a) 로그를 **Amazon S3**에 저장하고 **Amazon Athena**로 분석한다
>> **왜 이 답인가** — 주 1회 조회라면 **상시 인프라를 두지 않는 것**이 압도적으로 쌉니다. S3 저장 + Athena 조회는 쿼리한 만큼만 요금이 발생합니다.
>> **나머지가 아닌 이유** — RDS·OpenSearch·EMR은 모두 **쓰지 않는 시간에도 요금**이 나갑니다.

<sub>관련: [[amazon-athena]] [[amazon-s3]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 공유 계정에 있는 중앙 보고 애플리케이션이 **여러 팀 계정의 DynamoDB 테이블**을 읽어야 합니다. 가장 안전한 인증 방식은 무엇입니까?
> a) 각 팀 계정에 읽기 권한 역할을 만들어 공유 계정을 신뢰하게 하고, 애플리케이션이 그 역할을 수임한다
> b) 각 팀 계정에서 IAM 사용자 액세스 키를 발급받아 애플리케이션에 넣는다
> c) 각 팀의 DynamoDB 테이블을 퍼블릭으로 연다
> d) 팀마다 데이터를 내보내 공유 계정 S3에 올린다
>> [!success]- Answer
>> a) 각 팀 계정에 읽기 권한 역할을 만들어 공유 계정을 신뢰하게 하고, 애플리케이션이 그 역할을 수임한다
>> **왜 이 답인가** — 교차 계정 접근의 표준입니다. **자격 증명이 오가지 않고** 임시 자격 증명이 자동 만료되며, 팀이 빠지면 신뢰 관계만 끊으면 됩니다.
>> **나머지가 아닌 이유** — 액세스 키 수집은 장기 자격 증명을 여러 개 떠안는 일입니다. 테이블 공개는 논외이고, 데이터 복사는 실시간성이 떨어지고 사본 관리가 생깁니다.

<sub>관련: [[aws-iam]] [[amazon-dynamodb]] | 모듈 [[01-secure-access]]</sub>

> [!question] Auto Scaling 그룹이 **잘못된 AMI 때문에 인스턴스 시작에 계속 실패**하고 있었는데, 아무도 몰랐습니다. 시작 실패를 즉시 알아채려면 무엇을 해야 합니까?
> a) **Auto Scaling의 인스턴스 시작 실패 이벤트를 EventBridge 규칙**으로 받아 SNS로 알린다
> b) 인스턴스 상태 확인 간격을 줄인다
> c) 최대 용량을 늘린다
> d) 시작 템플릿의 버전을 고정한다
>> [!success]- Answer
>> a) **Auto Scaling의 인스턴스 시작 실패 이벤트를 EventBridge 규칙**으로 받아 SNS로 알린다
>> **왜 이 답인가** — Auto Scaling은 **시작 성공·실패를 이벤트로 발행**합니다. 실패 이벤트에 알림을 걸면 확장이 막힌 상태를 즉시 알 수 있습니다.
>> **나머지가 아닌 이유** — 상태 확인은 **이미 뜬 인스턴스**를 봅니다. 최대 용량과 템플릿 버전 고정은 실패 사실을 알려 주지 않습니다.

<sub>관련: [[amazon-ec2-auto-scaling]] [[amazon-eventbridge]] [[amazon-sns]] | 모듈 [[05-high-availability]]</sub>

> [!question] Aurora PostgreSQL의 쓰기 인스턴스를 장애 조치했더니 애플리케이션이 **3분간 멈췄습니다.** 다운타임을 줄이는 가장 부담 적은 방법은 무엇입니까?
> a) RDS Proxy를 두고 애플리케이션이 프록시 엔드포인트를 쓰게 한다
> b) 읽기 전용 복제본을 더 만든다
> c) 인스턴스 클래스를 키운다
> d) 애플리케이션에 재시도 로직을 직접 구현한다
>> [!success]- Answer
>> a) RDS Proxy를 두고 애플리케이션이 프록시 엔드포인트를 쓰게 한다
>> **왜 이 답인가** — 장애 조치 때 시간을 잡아먹는 것은 **DNS 갱신과 커넥션 재수립**입니다. RDS Proxy가 커넥션을 유지한 채 새 쓰기 인스턴스로 넘겨 주므로 전환이 훨씬 빨라집니다.
>> **나머지가 아닌 이유** — 읽기 복제본은 **읽기** 확장이라 쓰기 장애 조치 시간과 무관합니다. 인스턴스 확대도 마찬가지입니다. 재시도 직접 구현은 코드 부담이 커 `최소 운영 부담`을 어깁니다.

<sub>관련: [[amazon-rds]] [[amazon-aurora]] | 모듈 [[08-perf-database]]</sub>

> [!question] 이미지가 **180일까지는 즉시 사용**, 다음 180일은 **가끔 접근**, **360일 후에는 아카이브하되 요청 시 즉시** 조회, **5년 후에는 감사자만 12시간 이내** 조회하면 됩니다. 데이터는 잃으면 안 됩니다. 가장 비용 효율적인 수명 주기 규칙은 무엇입니까?
> a) 180일 후 **S3 Standard-IA**, 360일 후 **S3 Glacier Instant Retrieval**, 5년 후 **Glacier Deep Archive**로 전환한다
> b) 180일 후 One Zone-IA, 360일 후 Glacier Instant Retrieval, 5년 후 Deep Archive로 전환한다
> c) 180일 후 Standard-IA, 360일 후 Glacier Flexible Retrieval, 5년 후 Deep Archive로 전환한다
> d) 180일 후 One Zone-IA, 360일 후 Glacier Flexible Retrieval, 5년 후 Deep Archive로 전환한다
>> [!success]- Answer
>> a) 180일 후 **S3 Standard-IA**, 360일 후 **S3 Glacier Instant Retrieval**, 5년 후 **Glacier Deep Archive**로 전환한다
>> **왜 이 답인가** — 구간마다 조건이 다릅니다 — 가끔 접근은 **Standard-IA**(One Zone-IA는 손실 위험), **아카이브이면서 즉시 조회**는 **Glacier Instant Retrieval**, 12시간이면 되는 마지막 구간은 **Deep Archive**입니다.
>> **나머지가 아닌 이유** — One Zone-IA는 `데이터를 잃으면 안 된다`와 어긋납니다. Flexible Retrieval은 즉시 조회가 아닙니다.

<sub>관련: [[amazon-s3]] [[amazon-s3-glacier]] | 모듈 [[11-cost-storage]]</sub>

> [!question] CloudTrail을 켜 둔 상태에서 **Access Denied 오류를 분석**하려고 합니다. 가장 적은 노력으로 하려면 무엇을 써야 합니까?
> a) CloudTrail 로그가 쌓인 S3 버킷에 Athena로 SQL 쿼리를 던진다
> b) 로그 파일을 전부 내려받아 엑셀로 연다
> c) EMR 클러스터를 세워 분석한다
> d) 로그를 사람이 하나씩 읽는다
>> [!success]- Answer
>> a) CloudTrail 로그가 쌓인 S3 버킷에 Athena로 SQL 쿼리를 던진다
>> **왜 이 답인가** — 로그가 이미 S3에 있으니 **옮기지 않고 그 자리에서** 조회하면 됩니다. 오류 코드로 필터링하는 쿼리 한 줄이면 끝나고 클러스터도 필요 없습니다.
>> **나머지가 아닌 이유** — 내려받기와 수동 확인은 규모가 커지면 불가능합니다. EMR은 한 번 조회하자고 클러스터를 세우는 과한 선택입니다.

<sub>관련: [[aws-cloudtrail]] [[amazon-athena]] | 모듈 [[01-secure-access]]</sub>

> [!question] 두 번째 리전에 인프라를 그대로 배포해 두었는데, 장애 훈련에서 **애플리케이션이 시작하지 못했습니다.** 원인은 데이터베이스 자격 증명과 애플리케이션 설정이 기본 리전에만 있었기 때문입니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) **Secrets Manager 보안 암호를 DR 리전으로 복제**하고 파라미터·구성도 함께 배포되게 한다
> b) 장애 시 담당자가 자격 증명을 수동으로 입력한다
> c) 자격 증명을 애플리케이션 이미지에 포함한다
> d) DR 리전 애플리케이션이 기본 리전의 Secrets Manager를 호출하게 한다
>> [!success]- Answer
>> a) **Secrets Manager 보안 암호를 DR 리전으로 복제**하고 파라미터·구성도 함께 배포되게 한다
>> **왜 이 답인가** — DR은 **인프라만이 아니라 그것이 의존하는 모든 것**을 복제해야 성립합니다. Secrets Manager는 다중 리전 복제를 기능으로 제공합니다.
>> **나머지가 아닌 이유** — 수동 입력은 RTO를 늘리고 실수 위험이 큽니다. 이미지에 자격 증명을 넣는 것은 보안상 금지입니다. 기본 리전을 호출하는 방식은 **바로 그 리전이 죽은 상황**에서 실패합니다.

<sub>관련: [[aws-secrets-manager]] [[aws-cloudformation]] | 모듈 [[05-high-availability]]</sub>

> [!question] API Gateway REST API에 **고객마다 개별 하위 도메인**을 안전하게 주려고 합니다. Route 53을 씁니다. 어떤 조합입니까? (3개 선택)
> a) 도메인을 등록하고 Route 53 호스팅 영역에 와일드카드 레코드를 만들어 API Gateway 엔드포인트를 가리키게 한다
> b) API와 **같은 리전**의 ACM에서 와일드카드 인증서를 요청한다
> c) API Gateway에 사용자 지정 도메인 이름을 만들고 인증서를 연결한 뒤 API에 매핑한다
> d) 고객마다 API Gateway API를 따로 만든다
>> [!success]- Answer
>> a) 도메인을 등록하고 Route 53 호스팅 영역에 와일드카드 레코드를 만들어 API Gateway 엔드포인트를 가리키게 한다
>> b) API와 **같은 리전**의 ACM에서 와일드카드 인증서를 요청한다
>> c) API Gateway에 사용자 지정 도메인 이름을 만들고 인증서를 연결한 뒤 API에 매핑한다
>> **왜 이 답인가** — 와일드카드 하나로 고객이 늘어도 설정이 안 늘어납니다. **리전별 엔드포인트는 같은 리전 인증서**를 쓴다는 점이 함정입니다(us-east-1은 엣지 최적화·CloudFront일 때).
>> **나머지가 아닌 이유** — 고객마다 API를 따로 만들면 관리 대상이 고객 수만큼 늘어 `운영 효율`을 정면으로 어깁니다.

<sub>관련: [[amazon-api-gateway]] [[amazon-route-53]] [[aws-certificate-manager]] | 모듈 [[09-perf-network]]</sub>

> [!question] **하루 6시간 동안 도는 중요한 데이터 워크로드**를 Amazon EMR으로 처리하며 **처리 중 데이터를 잃으면 안 됩니다.** 가장 비용 효율적인 클러스터 구성은 무엇입니까?
> a) **임시(transient) 클러스터**로 기본 노드와 코어 노드는 **온디맨드**, 태스크 노드는 **스팟**으로 실행한다
> b) 장기 실행 클러스터로 기본·코어 노드는 온디맨드, 태스크 노드는 스팟으로 실행한다
> c) 임시 클러스터로 기본 노드만 온디맨드, 코어·태스크 노드는 스팟으로 실행한다
> d) 장기 실행 클러스터로 기본은 온디맨드, 코어·태스크는 스팟으로 실행한다
>> [!success]- Answer
>> a) **임시(transient) 클러스터**로 기본 노드와 코어 노드는 **온디맨드**, 태스크 노드는 **스팟**으로 실행한다
>> **왜 이 답인가** — **코어 노드는 HDFS 데이터를 보관**하므로 스팟으로 두면 회수될 때 데이터를 잃습니다. 계산만 하는 **태스크 노드는 스팟**으로 아끼고, 하루 6시간만 쓰므로 작업이 끝나면 종료되는 **임시 클러스터**가 가장 쌉니다.
>> **나머지가 아닌 이유** — 코어 노드를 스팟으로 두면 데이터 손실 위험이 생깁니다. 장기 실행 클러스터는 나머지 18시간 요금이 낭비입니다.

<sub>관련: [[amazon-emr]] [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] EKS에 저장되는 쿠버네티스 **비밀(Secret)이 etcd에서 암호화**되어야 합니다. 무엇을 해야 합니까?
> a) KMS 키를 지정해 EKS 봉투 암호화(envelope encryption)를 활성화한다
> b) EBS 볼륨 암호화를 켠다
> c) 비밀을 Base64로 인코딩한다
> d) 비밀을 ConfigMap으로 옮긴다
>> [!success]- Answer
>> a) KMS 키를 지정해 EKS 봉투 암호화(envelope encryption)를 활성화한다
>> **왜 이 답인가** — EKS는 KMS 키로 **etcd에 저장되는 비밀을 한 겹 더 암호화**하는 기능을 제공합니다. 요구가 정확히 그것입니다.
>> **나머지가 아닌 이유** — EBS 암호화는 **노드 디스크** 이야기지 제어 플레인의 etcd가 아닙니다. **Base64는 인코딩이지 암호화가 아니고**, ConfigMap은 애초에 비밀 저장용이 아니라 보안이 더 나빠집니다.

<sub>관련: [[amazon-eks]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] 새 웹 애플리케이션이 **정적 단일 페이지**와 지속 데이터베이스 계층으로 구성됩니다. **아침 4시간 동안 수백만 사용자**가 몰리고 나머지 시간에는 수천 명이며, 데이터 아키텍트는 **스키마를 빠르게 바꿀 수 있기를** 원합니다. 확장성이 가장 높은 조합은 무엇입니까? (2개 선택)
> a) 데이터베이스로 **Amazon DynamoDB를 온디맨드 용량**으로 배포한다
> b) 정적 콘텐츠를 **S3 버킷에 두고 CloudFront 배포**의 오리진으로 지정한다
> c) 데이터베이스로 Aurora Serverless를 배포한다
> d) 정적 콘텐츠를 EC2 Auto Scaling 그룹에 두고 EFS에서 주기적으로 새로 고친다
>> [!success]- Answer
>> a) 데이터베이스로 **Amazon DynamoDB를 온디맨드 용량**으로 배포한다
>> b) 정적 콘텐츠를 **S3 버킷에 두고 CloudFront 배포**의 오리진으로 지정한다
>> **왜 이 답인가** — `스키마를 빠르게 바꾼다`는 **스키마가 없는 DynamoDB**를 가리키고, 급격한 트래픽 변동에는 **온디맨드 용량**이 맞습니다. 정적 페이지는 S3 + CloudFront가 무한에 가깝게 확장합니다.
>> **나머지가 아닌 이유** — Aurora는 관계형이라 스키마 변경이 자유롭지 않습니다. EC2로 정적 콘텐츠를 제공하는 것은 확장성과 비용 모두 불리합니다.

<sub>관련: [[amazon-dynamodb]] [[amazon-s3]] [[amazon-cloudfront]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 온프레미스 Oracle 데이터베이스를 옮기면서 **고가용성과 성능**을 얻고 **보고 작업을 기본 DB에서 분리**하려 합니다. 가장 효율적인 방법은 무엇입니까?
> a) Aurora로 이전하고 다중 AZ로 구성한 뒤 보고 쿼리는 리더 엔드포인트로 보낸다
> b) EC2에 Oracle을 그대로 설치하고 복제를 직접 구성한다
> c) 단일 AZ RDS for Oracle에 보고 쿼리도 함께 보낸다
> d) DynamoDB로 이전한다
>> [!success]- Answer
>> a) Aurora로 이전하고 다중 AZ로 구성한 뒤 보고 쿼리는 리더 엔드포인트로 보낸다
>> **왜 이 답인가** — 세 요구가 한 구성으로 모입니다. 다중 AZ가 **가용성**, Aurora 아키텍처가 **성능**, 리더 엔드포인트가 **보고 분리**입니다.
>> **나머지가 아닌 이유** — EC2 직접 구성은 관리 부담이 가장 큽니다. 단일 AZ에 보고를 함께 돌리면 두 요구를 다 놓칩니다. DynamoDB는 관계형이 아니라 SQL 애플리케이션을 다시 써야 합니다.

<sub>관련: [[amazon-aurora]] [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 역사적 사건 이미지를 저장·제공하는 웹사이트에서 사용자는 **각 이미지를 1년에 한두 번** 요청합니다. 고가용성으로 저장·제공하려면, 가장 비용 효율적인 솔루션은 무엇입니까?
> a) 이미지를 **S3 Standard-IA**에 저장하고 정적 웹사이트로 직접 제공한다
> b) 이미지를 S3 Standard에 저장하고 정적 웹사이트로 제공한다
> c) 이미지를 EBS에 저장하고 EC2 웹 서버로 제공한다
> d) 이미지를 EFS에 저장하고 EC2 웹 서버로 제공한다
>> [!success]- Answer
>> a) 이미지를 **S3 Standard-IA**에 저장하고 정적 웹사이트로 직접 제공한다
>> **왜 이 답인가** — 접근이 **연 1~2회**로 매우 드물어 Standard-IA의 낮은 저장 단가가 유리하고, 여러 AZ에 저장되어 고가용성도 유지됩니다. 서버 없이 직접 제공하므로 컴퓨팅 비용도 없습니다.
>> **나머지가 아닌 이유** — Standard는 저장 단가가 더 비쌉니다. EBS·EFS + EC2 구성은 서버 요금이 계속 나갑니다.

<sub>관련: [[amazon-s3]] | 모듈 [[11-cost-storage]]</sub>

> [!question] CloudFront로 콘텐츠를 국가별로 **점진 출시**하려 합니다. 아직 출시하지 않은 국가의 시청자는 볼 수 없어야 합니다. 무엇을 써야 합니까?
> a) CloudFront 지리적 제한(geo restriction)으로 허용 국가 목록을 지정한다
> b) Route 53 지리 위치 라우팅을 건다
> c) S3 버킷 정책에서 국가를 지정한다
> d) 보안 그룹으로 국가를 차단한다
>> [!success]- Answer
>> a) CloudFront 지리적 제한(geo restriction)으로 허용 국가 목록을 지정한다
>> **왜 이 답인가** — CloudFront가 **뷰어의 국가를 판별해 엣지에서 차단**합니다. 허용 목록을 늘리는 방식이라 점진 출시에 그대로 맞습니다.
>> **나머지가 아닌 이유** — Route 53은 **어디로 보낼지**를 정할 뿐 접근을 막지 않아 주소를 알면 볼 수 있습니다. 버킷 정책에는 국가 조건이 없고, 보안 그룹은 CloudFront 뷰어에 적용되지 않습니다.

<sub>관련: [[amazon-cloudfront]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] **약 200개 영역(zone)**을 호스팅하고 하루 100만 요청을 받는 **DNS 서버 두 대**를 AWS로 옮기려 합니다. 가용성을 최대화하고 운영 오버헤드를 최소화하려면 무엇을 권장해야 합니까?
> a) **Amazon Route 53 콘솔에서 호스팅 영역 200개를 만들고 영역 파일을 가져온다**
> b) 큰 EC2 인스턴스 한 대를 띄워 영역 파일을 가져오고 CloudWatch 경보로 감시한다
> c) AWS Server Migration Service로 서버를 옮기고 CloudWatch 경보로 감시한다
> d) 두 AZ에 걸친 Auto Scaling 그룹에 EC2를 띄워 영역 파일을 가져오고 CPU 기준으로 확장한다
>> [!success]- Answer
>> a) **Amazon Route 53 콘솔에서 호스팅 영역 200개를 만들고 영역 파일을 가져온다**
>> **왜 이 답인가** — Route 53은 **100% 가용성 SLA를 가진 관리형 DNS**입니다. 서버를 옮기는 대신 서비스로 대체하면 운영할 대상이 사라집니다.
>> **나머지가 아닌 이유** — DNS 서버를 EC2에 그대로 올리는 보기들은 패치·확장·가용성을 계속 직접 책임져야 합니다.

<sub>관련: [[amazon-route-53]] | 모듈 [[05-high-availability]]</sub>

> [!question] 접근이 불규칙하고 **오래 유휴 상태일 수 있는** 웹 앱을 만들되, 구독료를 낸 사용자만 로그인해 쓸 수 있어야 합니다. 가장 비용 효율적인 조합은 무엇입니까? (3개 선택)
> a) API Gateway로 REST 엔드포인트를 만든다
> b) 비즈니스 로직을 Lambda 함수로 구현하고 데이터는 DynamoDB에 둔다
> c) Amazon Cognito로 사용자 인증을 처리하고 구독자만 통과시킨다
> d) ALB 뒤 ECS 서비스를 상시 띄워 둔다
>> [!success]- Answer
>> a) API Gateway로 REST 엔드포인트를 만든다
>> b) 비즈니스 로직을 Lambda 함수로 구현하고 데이터는 DynamoDB에 둔다
>> c) Amazon Cognito로 사용자 인증을 처리하고 구독자만 통과시킨다
>> **왜 이 답인가** — `오래 유휴`가 결정적입니다. 서버리스 3종은 **요청이 없으면 비용이 거의 0**입니다. 인증은 Cognito가 관리형으로 맡습니다.
>> **나머지가 아닌 이유** — 상시 ECS 서비스는 아무도 안 써도 계속 요금이 나가 `비용 효율`에서 밀립니다.

<sub>관련: [[amazon-api-gateway]] [[aws-lambda]] [[amazon-cognito]] | 모듈 [[07-perf-compute]]</sub>

> [!question] 새 EBS 볼륨을 사지 않았는데 **EBS 스토리지·스냅샷 비용이 매달 늘어납니다.** 현재 사용량 기준으로 비용을 최적화하려면, 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 불필요한 스냅샷을 삭제하고, **Amazon Data Lifecycle Manager**로 스냅샷 정책에 맞춰 생성·관리를 자동화한다
> b) 만료·미사용 스냅샷을 모두 삭제한다
> c) CloudWatch Logs로 사용률을 감시하고 Elastic Volumes로 볼륨 크기를 줄인다
> d) 사용자 지정 스크립트로 사용량을 감시하고 볼륨 크기를 줄인다
>> [!success]- Answer
>> a) 불필요한 스냅샷을 삭제하고, **Amazon Data Lifecycle Manager**로 스냅샷 정책에 맞춰 생성·관리를 자동화한다
>> **왜 이 답인가** — 비용이 계속 느는 원인은 **스냅샷이 쌓이는 것**입니다. 한 번 정리하고 **DLM으로 생성·보존·삭제를 정책화**하면 이후에는 자동으로 유지됩니다.
>> **나머지가 아닌 이유** — 한 번 지우기만 하면 **다시 쌓입니다.** 볼륨 크기를 줄이는 보기들은 원인(스냅샷 누적)을 다루지 않고 스크립트 유지 부담도 생깁니다.

<sub>관련: [[amazon-ebs]] [[aws-backup]] | 모듈 [[11-cost-storage]]</sub>

> [!question] CloudFront로 미디어를 제공하는데 **프리미엄 고객만** 스트림과 파일을 볼 수 있어야 하고, 영화 대여처럼 **특정 목적의 한시적 접근**도 줘야 합니다. 무엇을 써야 합니까?
> a) 프리미엄 고객에게 CloudFront 서명 URL 또는 서명 쿠키를 발급한다
> b) 오리진 액세스 제어(OAC)로 비프리미엄 고객을 막는다
> c) S3 버킷 정책으로 프리미엄 고객 IP만 허용한다
> d) 지리적 제한을 건다
>> [!success]- Answer
>> a) 프리미엄 고객에게 CloudFront 서명 URL 또는 서명 쿠키를 발급한다
>> **왜 이 답인가** — 서명 URL은 **누구에게, 언제까지** 접근을 줄지 건별로 통제합니다. 대여처럼 기간이 정해진 접근에 그대로 맞습니다.
>> **나머지가 아닌 이유** — **OAC는 CloudFront와 S3 사이를 통제하는 것**이지 최종 사용자를 구분하지 않습니다. 이름이 비슷해 고르기 쉬운 함정입니다. IP 기반과 지리 제한은 개별 고객 구분이 아닙니다.

<sub>관련: [[amazon-cloudfront]] [[amazon-s3]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 기본 리전에서 **FSx for NetApp ONTAP**로 CIFS·NFS 공유를 제공하며, **보조 리전에 재해 복구**가 필요하고 복제된 데이터도 **같은 프로토콜로 접근**해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?
> a) 보조 리전에 FSx for ONTAP를 만들고 **NetApp SnapMirror**로 기본 리전에서 복제한다
> b) AWS Backup으로 볼륨을 백업해 보조 리전으로 복사한 뒤 새 FSx 인스턴스를 만든다
> c) Lambda로 데이터를 S3에 복사하고 버킷을 보조 리전으로 복제한다
> d) EFS 볼륨을 만들어 데이터를 옮기고 보조 리전으로 복제한다
>> [!success]- Answer
>> a) 보조 리전에 FSx for ONTAP를 만들고 **NetApp SnapMirror**로 기본 리전에서 복제한다
>> **왜 이 답인가** — SnapMirror는 **ONTAP의 기본 복제 기능**이라 구성만 하면 지속적으로 복제되고, 보조 리전에서도 **CIFS·NFS를 그대로** 씁니다.
>> **나머지가 아닌 이유** — 백업·복원은 복구 시간이 길고 지속 복제가 아닙니다. S3는 프로토콜이 다르고, EFS는 CIFS를 제공하지 않습니다.

<sub>관련: [[amazon-fsx]] | 모듈 [[05-high-availability]]</sub>

> [!question] S3와 RDS for PostgreSQL로 된 데이터 레이크를 **시각화**해야 합니다. 경영진만 전체 대시보드를 보고 나머지는 제한된 범위만 봐야 합니다. 무엇을 해야 합니까?
> a) QuickSight에서 두 데이터 소스를 연결해 대시보드를 만들고 **QuickSight 사용자·그룹**에 각각 공유한다
> b) QuickSight에서 대시보드를 만들고 적절한 **IAM 역할**에 공유한다
> c) Glue로 보고서를 만들어 S3에 올리고 버킷 정책으로 접근을 제한한다
> d) Athena 페더레이션 쿼리로 보고서를 만들어 S3에 올리고 버킷 정책으로 제한한다
>> [!success]- Answer
>> a) QuickSight에서 두 데이터 소스를 연결해 대시보드를 만들고 **QuickSight 사용자·그룹**에 각각 공유한다
>> **왜 이 답인가** — 요구가 **시각화**이므로 BI 도구인 QuickSight입니다. 그리고 **QuickSight 대시보드 공유는 QuickSight의 사용자·그룹 단위**로 합니다.
>> **나머지가 아닌 이유** — 두 번째 보기는 서비스는 맞지만 **공유 대상을 IAM 역할이라고 해서 틀립니다.** 한 낱말로 갈리는 자리입니다. Glue와 Athena는 데이터를 만들고 조회하는 도구지 **시각화 도구가 아닙니다** — S3에 올린 보고서 파일로는 대시보드가 되지 않습니다.

<sub>관련: [[amazon-quicksight]] [[amazon-athena]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] DynamoDB 테이블을 **일주일에 한 번 4시간 동안만** 테스트에 쓰며, 그동안의 **초당 읽기·쓰기 작업 수를 알고 있습니다.** 비용을 최적화하려면 어떤 솔루션이 적합합니까?
> a) **프로비저닝된 모드**를 선택하고 읽기·쓰기 용량 단위를 적절히 설정한다
> b) 온디맨드 모드를 선택하고 용량 단위를 적절히 갱신한다
> c) 1년 기간의 DynamoDB 예약 용량을 구매한다
> d) 3년 기간의 예약 용량을 구매한다
>> [!success]- Answer
>> a) **프로비저닝된 모드**를 선택하고 읽기·쓰기 용량 단위를 적절히 설정한다
>> **왜 이 답인가** — **필요한 처리량을 이미 알고 있으므로** 프로비저닝 모드가 온디맨드보다 쌉니다. 테스트가 끝나면 용량을 낮춰 비용을 더 줄일 수 있습니다.
>> **나머지가 아닌 이유** — **온디맨드 모드에서는 용량 단위를 설정하지 않습니다.** 예약 용량은 상시 사용량이 있어야 이득인데 주 4시간만 씁니다.

<sub>관련: [[amazon-dynamodb]] | 모듈 [[13-cost-database]]</sub>

> [!question] 트랜잭션과 민감 데이터를 담은 데이터베이스를 AWS로 옮기면서 **보안을 높이고 운영 부담을 줄이려** 합니다. 무엇을 해야 합니까?
> a) Amazon RDS로 이전하고 KMS 저장 암호화와 전송 중 TLS를 적용한다
> b) 데이터를 S3로 옮기고 Macie로 보호한다
> c) EC2에 데이터베이스를 설치하고 디스크를 직접 암호화한다
> d) 데이터베이스를 그대로 두고 방화벽만 강화한다
>> [!success]- Answer
>> a) Amazon RDS로 이전하고 KMS 저장 암호화와 전송 중 TLS를 적용한다
>> **왜 이 답인가** — 관리형으로 옮기면 **패치·백업·고가용성이 넘어가** 운영 부담이 줄고, 암호화는 설정으로 켜집니다. 두 요구가 함께 해결됩니다.
>> **나머지가 아닌 이유** — S3 + Macie는 **데이터베이스 이야기가 아닙니다.** 객체 스토리지로 옮기면 애플리케이션이 깨집니다. EC2 자체 설치는 운영 부담이 그대로이고, 이전하지 않는 보기는 요구를 무시합니다.

<sub>관련: [[amazon-rds]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>

> [!question] S3에 파일이 추가되면 이벤트가 생기고 현재는 **SNS가 이벤트 대상**입니다. 이 이벤트를 **확장 가능하게 Lambda로 처리**하려면 무엇을 해야 합니까?
> a) SNS 구독으로 이벤트를 **Amazon SQS**에 보내고 그 큐가 Lambda를 호출하게 구성한다
> b) SNS 구독으로 이벤트를 ECS에서 먼저 처리한 뒤 Lambda가 실행되게 한다
> c) SNS 구독으로 EKS에서 먼저 처리한 뒤 Lambda가 실행되게 한다
> d) SNS 구독으로 이벤트를 Server Migration Service에 보내 Lambda가 폴링하게 한다
>> [!success]- Answer
>> a) SNS 구독으로 이벤트를 **Amazon SQS**에 보내고 그 큐가 Lambda를 호출하게 구성한다
>> **왜 이 답인가** — 큐를 사이에 두면 **급증분이 쌓였다가 처리**되고 실패한 메시지도 다시 시도됩니다. SNS → SQS → Lambda는 확장성 있는 표준 팬아웃 구성입니다.
>> **나머지가 아닌 이유** — ECS·EKS를 중간에 두는 것은 불필요한 컴퓨팅입니다. Server Migration Service는 서버 마이그레이션 도구로 이 흐름과 무관합니다.

<sub>관련: [[amazon-sns]] [[amazon-sqs]] [[aws-lambda]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 운영 EBS 볼륨의 대용량 데이터를 같은 리전의 테스트 환경으로 **되도록 빨리** 복제해야 합니다. 테스트에서 고친 내용이 운영에 영향을 주면 안 되고, 복제 직후부터 **일관되게 높은 I/O 성능**이 나와야 합니다. 무엇을 해야 합니까?
> a) 스냅샷을 뜨고 **빠른 스냅샷 복원**을 켠 뒤 새 볼륨으로 복원해 테스트 인스턴스에 붙인다
> b) 스냅샷을 뜨고 그냥 새 볼륨으로 복원해 붙인다
> c) 운영 볼륨에 EBS 다중 연결을 켜고 테스트 인스턴스에도 붙인다
> d) 스냅샷을 인스턴스 스토어 볼륨으로 복원한다
>> [!success]- Answer
>> a) 스냅샷을 뜨고 **빠른 스냅샷 복원**을 켠 뒤 새 볼륨으로 복원해 테스트 인스턴스에 붙인다
>> **왜 이 답인가** — 스냅샷에서 만든 볼륨은 기본적으로 **블록을 처음 읽을 때 지연 로딩**돼서 초반 I/O가 느립니다. 빠른 스냅샷 복원을 켜면 그 초기화 없이 **처음부터 제 성능**이 나옵니다. `복제 직후부터 일관되게 높은 I/O`가 이 기능을 정확히 가리킵니다.
>> **나머지가 아닌 이유** — 그냥 복원하면 바로 그 지연 로딩 때문에 조건을 못 지킵니다. 다중 연결은 **운영 볼륨을 그대로 공유**하는 것이라 `운영에 영향 없어야 한다`를 정면으로 어깁니다. 인스턴스 스토어는 휘발성이라 복제본 저장소로 쓸 수 없습니다.

<sub>관련: [[amazon-ebs]] | 모듈 [[06-perf-storage]]</sub>

> [!question] 최근 **비정상적인 지출**이 발견되어, 비용을 감시하고 **이상 지출 시 담당자에게 알리는** 솔루션이 필요합니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) 결제 및 비용 관리 콘솔에서 **AWS Cost Anomaly Detection 모니터**를 만든다
> b) AWS Budgets 템플릿으로 지출 0 예산을 만든다
> c) AWS Pricing Calculator로 현재 워크로드 요금을 추정한다
> d) Amazon CloudWatch로 비용을 감시해 이상 지출을 식별한다
>> [!success]- Answer
>> a) 결제 및 비용 관리 콘솔에서 **AWS Cost Anomaly Detection 모니터**를 만든다
>> **왜 이 답인가** — 이 서비스는 **머신 러닝으로 평소 지출 패턴을 학습해 이상치를 탐지**하고 알림을 보냅니다. 임계값을 사람이 정하지 않아도 됩니다.
>> **나머지가 아닌 이유** — Budgets는 정해진 한도를 넘을 때만 알립니다. Pricing Calculator는 사전 견적 도구이고, CloudWatch는 이상 지출 탐지 기능을 제공하지 않습니다.

<sub>관련: [[aws-cost-explorer]] | 모듈 [[12-cost-compute]]</sub>

> [!question] EC2 인스턴스가 Aurora에 접속하는데 **사용자 이름과 암호가 인스턴스의 파일에 저장**돼 있습니다. 자격 증명 관리의 운영 부담을 최소화하려면 무엇을 해야 합니까?
> a) AWS Secrets Manager에 저장하고 자동 교체를 켠다
> b) Systems Manager Parameter Store에 저장하고 자동 교체를 켠다
> c) KMS로 암호화한 S3 버킷에 자격 증명 파일을 옮기고 애플리케이션이 그것을 읽게 한다
> d) 인스턴스마다 암호화된 EBS 볼륨을 붙여 자격 증명 파일을 옮긴다
>> [!success]- Answer
>> a) AWS Secrets Manager에 저장하고 자동 교체를 켠다
>> **왜 이 답인가** — 부담의 정체는 **암호를 사람이 바꿔 돌려야 한다는 것**입니다. Secrets Manager는 자동 교체를 지원하고 RDS·Aurora와 연동되어 새 암호를 DB에도 반영해 줍니다.
>> **나머지가 아닌 이유** — **Parameter Store에는 자동 교체 기능이 없습니다.** 두 서비스를 가르는 결정적 차이가 정확히 이것입니다. S3와 EBS로 옮기는 보기는 **파일의 위치만 바꿀 뿐** 교체는 여전히 사람 몫이라 요구를 하나도 해결하지 못합니다.

<sub>관련: [[aws-secrets-manager]] [[aws-systems-manager]] | 모듈 [[01-secure-access]]</sub>

> [!question] API Gateway 뒤의 새 서비스는 요청이 **0에서 초당 500건 이상으로 갑자기** 변할 수 있습니다. 백엔드 데이터는 현재 **1GB 미만**이고 증가를 예측할 수 없으며 **단순 키-값 조회**로 충분합니다. 어떤 조합이 요구 사항을 충족합니까? (2개 선택)
> a) **AWS Lambda**
> b) **Amazon DynamoDB**
> c) AWS Fargate
> d) MySQL 호환 Amazon Aurora
>> [!success]- Answer
>> a) **AWS Lambda**
>> b) **Amazon DynamoDB**
>> **왜 이 답인가** — 요청이 0에서 급증하는 패턴은 **Lambda**가, 키-값 조회에 용량을 예측할 수 없는 데이터는 **DynamoDB(온디맨드)**가 가장 잘 맞습니다. 둘 다 사람이 용량을 조절하지 않습니다.
>> **나머지가 아닌 이유** — Fargate와 Aurora는 이 패턴에서 상시 비용과 조정 부담이 생깁니다. 관계형 기능도 필요 없습니다.

<sub>관련: [[aws-lambda]] [[amazon-dynamodb]] [[amazon-api-gateway]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 회사가 최근 소매 웹사이트를 전 세계 사용자를 대상으로 배포한다고 발표했습니다. 웹사이트는 Elastic Load Balancer 뒤의 여러 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 여러 가용 영역에 걸친 Auto Scaling 그룹에서 실행됩니다. 회사는 **고객이 웹사이트에 접속하는 데 사용하는 디바이스에 따라 서로 다른 버전의 콘텐츠**를 제공하려고 합니다. 솔루션스 아키텍트는 이러한 요구 사항을 충족하기 위해 어떤 작업 조합을 수행해야 합니까? (2개 선택)
> a) 여러 버전의 콘텐츠를 캐시하도록 Amazon CloudFront를 구성한다
> b) User-Agent 헤더를 기준으로 특정 객체를 사용자에게 전송하는 Lambda@Edge 함수를 구성한다
> c) Network Load Balancer에 호스트 헤더를 구성하여 트래픽을 서로 다른 인스턴스로 전달한다
> d) AWS Global Accelerator를 구성한다. 요청을 Network Load Balancer(NLB)로 전달한다. 서로 다른 EC2 인스턴스로 경로 기반 라우팅을 설정하도록 NLB를 구성한다
>> [!success]- Answer
>> a) 여러 버전의 콘텐츠를 캐시하도록 Amazon CloudFront를 구성한다
>> b) User-Agent 헤더를 기준으로 특정 객체를 사용자에게 전송하는 Lambda@Edge 함수를 구성한다
>> **왜 이 답인가** — 디바이스 구분은 요청의 **User-Agent 헤더**에 들어 있습니다. 엣지에서 그 헤더를 보고 분기하려면 **Lambda@Edge**가 필요하고, 버전별 응답을 각각 따로 보관하려면 CloudFront가 **여러 버전을 캐시**하도록 구성해야 합니다.
>> **나머지가 아닌 이유** — **Network Load Balancer는 4계층이라 호스트 헤더를 볼 수 없습니다.** Global Accelerator는 캐시하지 않고 헤더로 콘텐츠를 고르지도 못합니다.

<sub>관련: [[amazon-cloudfront]] [[aws-lambda]] | 모듈 [[09-perf-network]]</sub>

> [!question] 온프레미스 SMB 파일 서버의 대용량 파일이 **생성 후 7일까지는 자주** 쓰이고, **7일 뒤에는 최대 24시간 안에 꺼낼 수 있으면** 됩니다. 어떤 솔루션이 요구 사항을 충족합니까?
> a) **Amazon S3 File Gateway**로 스토리지 공간을 늘리고 **수명 주기 정책으로 7일 후 S3 Glacier Deep Archive**로 전환한다
> b) DataSync로 7일이 지난 데이터를 AWS로 복사한다
> c) Amazon FSx File Gateway로 공간을 늘리고 수명 주기 정책으로 전환한다
> d) 사용자마다 S3 접근을 구성하고 7일 후 Glacier Flexible Retrieval로 전환한다
>> [!success]- Answer
>> a) **Amazon S3 File Gateway**로 스토리지 공간을 늘리고 **수명 주기 정책으로 7일 후 S3 Glacier Deep Archive**로 전환한다
>> **왜 이 답인가** — SMB 접근 방식을 유지하면서 데이터를 S3에 두고, **24시간 안에만 꺼내면 되므로 가장 싼 Deep Archive**로 내립니다.
>> **나머지가 아닌 이유** — DataSync는 수명 주기 관리를 하지 않습니다. FSx File Gateway는 S3 수명 주기를 쓰지 않고, 사용자마다 S3 접근을 구성하면 사용 방식이 바뀝니다.

<sub>관련: [[aws-storage-gateway]] [[amazon-s3-glacier]] | 모듈 [[11-cost-storage]]</sub>

> [!question] 매달 유지 보수 때 **여러 리전**의 RDS for MySQL 자격 증명을 교체해야 합니다. 운영 부담이 가장 적은 방법은 무엇입니까?
> a) Secrets Manager에 비밀로 저장하고 필요한 리전으로 다중 리전 복제한 뒤 일정에 따라 교체하게 한다
> b) Parameter Store에 SecureString으로 저장하고 다중 리전 복제와 일정 교체를 구성한다
> c) 서버 측 암호화를 켠 S3에 저장하고 EventBridge로 Lambda를 불러 교체한다
> d) KMS 다중 리전 키로 암호화해 DynamoDB 글로벌 테이블에 넣고 Lambda가 RDS API로 교체하게 한다
>> [!success]- Answer
>> a) Secrets Manager에 비밀로 저장하고 필요한 리전으로 다중 리전 복제한 뒤 일정에 따라 교체하게 한다
>> **왜 이 답인가** — Secrets Manager에는 **다중 리전 복제**와 **일정 기반 자동 교체**가 둘 다 기본 기능으로 있습니다. 요구 두 개가 설정으로 끝납니다.
>> **나머지가 아닌 이유** — **Parameter Store에는 자동 교체도 다중 리전 비밀 복제도 없습니다.** 나머지 두 보기는 교체 로직을 직접 만들어 유지하는 것이라 `운영 부담 최소`와 정반대입니다. 만들 수 있느냐가 아니라 **이미 있는 기능인가**를 묻는 문항입니다.

<sub>관련: [[aws-secrets-manager]] [[amazon-rds]] | 모듈 [[01-secure-access]]</sub>

> [!question] 여러 AZ의 EC2 인스턴스가 ALB 뒤에서 실행되는데 **트래픽이 한 인스턴스에 쏠려** 일부 요청의 지연이 커집니다. 무엇을 해야 합니까?
> a) ALB에서 **고정 세션(세션 어피니티)을 끈다**
> b) ALB를 Network Load Balancer로 교체한다
> c) AZ마다 EC2 인스턴스 수를 늘린다
> d) 대상 그룹의 상태 확인 주기를 조정한다
>> [!success]- Answer
>> a) ALB에서 **고정 세션(세션 어피니티)을 끈다**
>> **왜 이 답인가** — 고정 세션이 켜져 있으면 **같은 클라이언트가 계속 같은 인스턴스로** 갑니다. 이것이 트래픽 쏠림의 전형적인 원인이므로 끄면 고르게 분산됩니다.
>> **나머지가 아닌 이유** — 인스턴스를 늘려도 쏠림 자체는 그대로입니다. 로드 밸런서 종류나 상태 확인 주기는 분산 편중과 무관합니다.

<sub>관련: [[elastic-load-balancing]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 회사가 AWS에서 인기 있는 게임 플랫폼을 운영하고 있습니다. **지연 시간은 사용자 경험에 영향을 주고 일부 플레이어에게 부당한 이점을 줄 수 있으므로** 애플리케이션은 지연 시간에 민감합니다. 애플리케이션은 모든 AWS 리전에 배포되어 있습니다. 애플리케이션은 Application Load Balancer(ALB) 뒤의 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에서 실행됩니다. 솔루션스 아키텍트는 **애플리케이션의 상태를 모니터링하고 트래픽을 정상 엔드포인트로 리디렉션**하는 메커니즘을 구현해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?
> a) AWS Global Accelerator에서 액셀러레이터를 구성한다. 애플리케이션이 수신 대기하는 포트에 대한 리스너를 추가하고 각 리전의 리전별 엔드포인트에 연결한다. ALB를 엔드포인트로 추가한다
> b) Amazon CloudFront 배포를 생성하고 ALB를 오리진 서버로 지정한다. 오리진 캐시 헤더를 사용하도록 캐시 동작을 구성한다. AWS Lambda 함수를 사용하여 트래픽을 최적화한다
> c) Amazon CloudFront 배포를 생성하고 Amazon S3를 오리진 서버로 지정한다. 오리진 캐시 헤더를 사용하도록 캐시 동작을 구성한다. AWS Lambda 함수를 사용하여 트래픽을 최적화한다
> d) 애플리케이션의 데이터 스토어로 사용할 Amazon DynamoDB 데이터베이스를 구성한다. 애플리케이션 데이터를 호스팅하는 DynamoDB의 인메모리 캐시 역할을 할 DynamoDB Accelerator(DAX) 클러스터를 생성한다
>> [!success]- Answer
>> a) AWS Global Accelerator에서 액셀러레이터를 구성한다. 애플리케이션이 수신 대기하는 포트에 대한 리스너를 추가하고 각 리전의 리전별 엔드포인트에 연결한다. ALB를 엔드포인트로 추가한다
>> **왜 이 답인가** — Global Accelerator는 **엔드포인트 상태를 지속적으로 확인하고 정상 리전으로 트래픽을 보냅니다.** 사용자는 가장 가까운 엣지에서 AWS 백본을 타므로 지연 시간도 줄어듭니다.
>> **나머지가 아닌 이유** — CloudFront는 **캐시 가능한 콘텐츠 전송용**이며 게임 트래픽처럼 동적인 요청의 리전 장애 조치 장치가 아닙니다. DAX는 데이터베이스 캐시라 지연 시간의 원인이 다른 곳에 있습니다.

<sub>관련: [[aws-global-accelerator]] [[elastic-load-balancing]] | 모듈 [[09-perf-network]]</sub>

> [!question] **가끔만 쓰는 개발용 EKS 클러스터**가 필요하며 애플리케이션의 복원력 테스트에 씁니다. **EKS가 모든 노드를 관리**해야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?
> a) **스팟 인스턴스만 포함한 관리형 노드 그룹**을 만든다
> b) 온디맨드 노드 그룹과 스팟 노드 그룹을 각각 만든다
> c) 스팟을 쓰는 시작 구성의 Auto Scaling 그룹을 만들어 사용자 데이터로 노드를 클러스터에 추가한다
> d) 온디맨드 인스턴스만 포함한 관리형 노드 그룹을 만든다
>> [!success]- Answer
>> a) **스팟 인스턴스만 포함한 관리형 노드 그룹**을 만든다
>> **왜 이 답인가** — 개발용이고 **복원력 테스트가 목적**이라 중단이 오히려 도움이 됩니다. 스팟이 가장 싸고, **관리형 노드 그룹**이라 EKS가 노드를 관리한다는 조건도 만족합니다.
>> **나머지가 아닌 이유** — 온디맨드는 더 비쌉니다. 직접 만든 Auto Scaling 그룹은 **EKS가 관리하지 않는 자체 관리형 노드**가 됩니다.

<sub>관련: [[amazon-eks]] [[amazon-ec2]] | 모듈 [[12-cost-compute]]</sub>

> [!question] S3 버킷 설정이 **승인 없이 바뀌지 않았는지** 점검해야 합니다. 무엇을 켜야 합니까?
> a) AWS Config에 적절한 규칙을 설정한다
> b) AWS Trusted Advisor의 해당 검사를 켠다
> c) Amazon Inspector에 평가 템플릿을 만든다
> d) S3 서버 액세스 로깅을 켜고 EventBridge를 붙인다
>> [!success]- Answer
>> a) AWS Config에 적절한 규칙을 설정한다
>> **왜 이 답인가** — Config는 **리소스 설정의 변경 이력을 기록하고 규칙에 어긋나는지 계속 평가**합니다. `설정이 바뀌었는가`를 묻는 문항의 표준 답입니다.
>> **나머지가 아닌 이유** — Trusted Advisor는 정해진 몇 가지 **권장 사항**만 보고 사용자 규칙을 못 만듭니다. Inspector는 **취약점 스캔**입니다. 서버 액세스 로깅은 **객체 접근 기록**이지 버킷 설정 변경이 아닙니다. 네 서비스의 역할이 각각 다른 것을 아는지 묻습니다.

<sub>관련: [[aws-config]] [[amazon-s3]] | 모듈 [[01-secure-access]]</sub>

> [!question] EC2 한 대에서 **Apache 정적 콘텐츠 + PHP 애플리케이션 + 로컬 Redis 세션**을 함께 돌리고 있습니다. **고가용성**을 갖추고 **AWS 관리형 솔루션**을 쓰도록 재설계하려면 어떤 솔루션이 적합합니까?
> a) 정적 콘텐츠는 **S3 + CloudFront**로, PHP는 **ALB 뒤 Fargate ECS 서비스**로, 세션은 **여러 AZ의 ElastiCache for Redis**로 옮긴다
> b) Elastic Beanstalk에 정적 콘텐츠와 PHP를 함께 올리고 퍼블릭 서브넷에 배포한다
> c) 백엔드는 EC2에 두고 다중 AZ ElastiCache를 붙이며 프런트엔드만 S3로 옮긴다
> d) Lambda로 정적 콘텐츠와 PHP를 호스팅하고 API Gateway로 프록시한다
>> [!success]- Answer
>> a) 정적 콘텐츠는 **S3 + CloudFront**로, PHP는 **ALB 뒤 Fargate ECS 서비스**로, 세션은 **여러 AZ의 ElastiCache for Redis**로 옮긴다
>> **왜 이 답인가** — **세 가지 역할을 각각 알맞은 관리형 서비스로 분리**하고 모두 여러 AZ에 걸치게 만듭니다. 단일 인스턴스라는 장애 지점이 사라집니다.
>> **나머지가 아닌 이유** — EC2를 남기는 보기는 단일 장애 지점이 유지됩니다. Lambda로 정적 콘텐츠를 제공하는 것은 부적절한 조합입니다.

<sub>관련: [[aws-fargate]] [[amazon-cloudfront]] [[amazon-elasticache]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 회사에 모바일 앱을 사용하는 사용자가 100만 명 있습니다. 회사는 **거의 실시간으로 데이터 사용량을 분석**해야 합니다. 또한 회사는 거의 실시간으로 데이터를 암호화해야 하며, 추가 처리를 위해 데이터를 **Apache Parquet 형식으로 중앙 위치에 저장**해야 합니다. 어떤 솔루션이 이러한 요구 사항을 **가장 적은 운영 오버헤드**로 충족합니까?
> a) 데이터를 Amazon S3에 저장하는 Amazon Kinesis Data Firehose 전송 스트림을 생성한다. 데이터를 분석하는 Amazon Kinesis Data Analytics 애플리케이션을 생성한다
> b) 데이터를 Amazon S3에 저장하는 Amazon Kinesis Data Firehose 전송 스트림을 생성한다. 데이터를 분석하는 Amazon EMR 클러스터를 생성한다
> c) 데이터를 Amazon S3에 저장하는 Amazon Kinesis 데이터 스트림을 생성한다. 데이터를 분석하는 Amazon Kinesis Data Analytics 애플리케이션을 생성한다. 데이터를 Kinesis Data Analytics 애플리케이션으로 보내는 AWS Lambda 함수를 호출한다
> d) 데이터를 Amazon S3에 저장하는 Amazon Kinesis 데이터 스트림을 생성한다. 데이터를 분석하는 Amazon EMR 클러스터를 생성한다. 데이터를 EMR 클러스터로 보내는 AWS Lambda 함수를 호출한다
>> [!success]- Answer
>> a) 데이터를 Amazon S3에 저장하는 Amazon Kinesis Data Firehose 전송 스트림을 생성한다. 데이터를 분석하는 Amazon Kinesis Data Analytics 애플리케이션을 생성한다
>> **왜 이 답인가** — Firehose는 **S3 전달·암호화·Parquet 형식 변환을 관리형으로** 해 줍니다. 분석도 관리형인 Kinesis Data Analytics로 붙이면 운영할 것이 남지 않습니다.
>> **나머지가 아닌 이유** — **EMR 클러스터는 회사가 운영**해야 해 오버헤드가 큽니다. Kinesis 데이터 스트림은 S3로 직접 전달하지 못해 소비자와 Lambda를 직접 만들어야 합니다.

<sub>관련: [[amazon-kinesis]] [[amazon-s3]] | 모듈 [[10-data-ingestion]]</sub>

> [!question] 한 회사가 다계층 웹 애플리케이션에 Amazon ElastiCache를 사용하려고 합니다. 솔루션스 아키텍트가 ElastiCache 클러스터용 Cache VPC와 애플리케이션의 Amazon EC2 인스턴스용 App VPC를 생성했습니다. **두 VPC는 모두 us-east-1 리전에 있습니다.** 솔루션스 아키텍트는 애플리케이션의 EC2 인스턴스가 ElastiCache 클러스터에 액세스할 수 있도록 솔루션을 구현해야 합니다. 어떤 솔루션이 이러한 요구 사항을 **가장 비용 효율적으로** 충족합니까?
> a) VPC 간에 피어링 연결을 생성한다. 두 VPC의 라우팅 테이블에 피어링 연결 항목을 추가한다. ElastiCache 클러스터의 보안 그룹에 애플리케이션의 보안 그룹으로부터의 인바운드 연결을 허용하는 규칙을 구성한다
> b) VPC 간에 피어링 연결을 생성한다. 두 VPC의 라우팅 테이블에 피어링 연결 항목을 추가한다. 피어링 연결의 보안 그룹에 애플리케이션의 보안 그룹으로부터의 인바운드 연결을 허용하는 규칙을 구성한다
> c) Transit VPC를 생성한다. Cache VPC와 App VPC의 라우팅 테이블을 업데이트하여 트래픽이 Transit VPC를 경유하도록 한다. ElastiCache 클러스터의 보안 그룹에 애플리케이션의 보안 그룹으로부터의 인바운드 연결을 허용하는 규칙을 구성한다
> d) Transit VPC를 생성한다. Cache VPC와 App VPC의 라우팅 테이블을 업데이트하여 트래픽이 Transit VPC를 경유하도록 한다. Transit VPC의 보안 그룹에 애플리케이션의 보안 그룹으로부터의 인바운드 연결을 허용하는 규칙을 구성한다
>> [!success]- Answer
>> a) VPC 간에 피어링 연결을 생성한다. 두 VPC의 라우팅 테이블에 피어링 연결 항목을 추가한다. ElastiCache 클러스터의 보안 그룹에 애플리케이션의 보안 그룹으로부터의 인바운드 연결을 허용하는 규칙을 구성한다
>> **왜 이 답인가** — 같은 리전의 VPC 두 개를 잇는 가장 싼 방법은 **피어링**입니다. 시간당 연결 요금이 없습니다. 그리고 허용 규칙은 **접속을 받는 쪽(ElastiCache)의 보안 그룹**에 붙어야 합니다.
>> **나머지가 아닌 이유** — **피어링 연결에는 보안 그룹이 없습니다.** Transit VPC(또는 전송 게이트웨이)를 두면 연결·처리 요금이 추가되어 VPC가 둘뿐인 상황에서는 더 비쌉니다.

<sub>관련: [[amazon-vpc]] [[amazon-elasticache]] | 모듈 [[14-cost-network]]</sub>

> [!question] Organizations로 관리하는 여러 계정에 SSO를 붙이되, 사용자와 그룹은 계속 **온프레미스 자체 관리 Microsoft AD**에서 관리해야 합니다. 무엇을 해야 합니까?
> a) IAM Identity Center를 켜고, AWS Managed Microsoft AD와 온프레미스 AD 사이에 **양방향 포리스트 신뢰**를 맺는다
> b) IAM Identity Center를 켜고 단방향 신뢰를 맺는다
> c) Directory Service만 두고 양방향 신뢰를 맺는다
> d) 온프레미스에 자체 ID 공급자를 세우고 IAM Identity Center를 켠다
>> [!success]- Answer
>> a) IAM Identity Center를 켜고, AWS Managed Microsoft AD와 온프레미스 AD 사이에 **양방향 포리스트 신뢰**를 맺는다
>> **왜 이 답인가** — AWS 쪽이 온프레미스 사용자를 인증하려면 **양쪽이 서로를 신뢰해야** 합니다. 단방향으로는 조회·인증 흐름이 한쪽에서 끊깁니다. 이 신뢰 방향이 문항 전체를 가릅니다.
>> **나머지가 아닌 이유** — 단방향 신뢰는 그래서 탈락합니다. Directory Service만 두는 것은 **여러 계정에 걸친 SSO**를 주지 못합니다. 자체 IdP 배포는 `기존 AD를 계속 쓴다`는 요구를 두고 새 시스템을 하나 더 들이는 것입니다.

<sub>관련: [[aws-iam-identity-center]] [[aws-directory-service]] | 모듈 [[01-secure-access]]</sub>

> [!question] Auto Scaling 그룹의 애플리케이션이 **매일 같은 시각 피크가 시작될 때 느려지고 2~3시간 뒤 정상**이 됩니다. 피크 시작 시점부터 제대로 동작하게 하려면 어떤 솔루션이 적합합니까?
> a) **피크 전에 인스턴스를 시작하는 예약 조정 정책**을 구성한다
> b) CPU 사용률 기반 동적 조정 정책을 구성한다
> c) 메모리 사용률 기반 동적 조정 정책을 구성한다
> d) 트래픽을 제대로 분산하도록 Application Load Balancer를 구성한다
>> [!success]- Answer
>> a) **피크 전에 인스턴스를 시작하는 예약 조정 정책**을 구성한다
>> **왜 이 답인가** — 피크 **시각이 매일 같으므로** 미리 늘려 두면 초반 지연이 사라집니다. 2~3시간 뒤 정상이 되는 것은 지표 기반 조정이 그제야 따라잡는다는 뜻입니다.
>> **나머지가 아닌 이유** — 동적 조정은 **부하가 오른 뒤에야** 반응해 초반 구간을 못 막습니다. 로드 밸런서는 용량 부족을 해결하지 않습니다.

<sub>관련: [[amazon-ec2-auto-scaling]] | 모듈 [[04-scalable-decoupled]]</sub>

> [!question] 한 게임 회사에 점수를 표시하는 웹 애플리케이션이 있습니다. 애플리케이션은 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 데이터를 Amazon RDS for MySQL 데이터베이스에 저장합니다. **데이터베이스 읽기 성능** 때문에 사용자가 긴 지연과 중단을 겪기 시작했습니다. 회사는 **애플리케이션 아키텍처의 변경을 최소화하면서** 사용자 경험을 개선하려고 합니다. 솔루션스 아키텍트는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?
> a) 데이터베이스 앞에 Amazon ElastiCache를 사용한다
> b) 애플리케이션과 데이터베이스 사이에 RDS Proxy를 사용한다
> c) 애플리케이션을 EC2 인스턴스에서 AWS Lambda로 마이그레이션한다
> d) 데이터베이스를 Amazon RDS for MySQL에서 Amazon DynamoDB로 마이그레이션한다
>> [!success]- Answer
>> a) 데이터베이스 앞에 Amazon ElastiCache를 사용한다
>> **왜 이 답인가** — 점수 조회처럼 **같은 읽기가 반복되는 워크로드**는 캐시가 가장 잘 흡수합니다. 데이터베이스와 애플리케이션 구조를 그대로 두고 앞에 한 겹 두는 것이라 변경이 가장 작습니다.
>> **나머지가 아닌 이유** — RDS Proxy는 **연결 관리**를 돕지 읽기 성능을 늘리지 않습니다. Lambda 이전과 DynamoDB 이전은 "변경 최소화"라는 조건을 정면으로 어깁니다.

<sub>관련: [[amazon-elasticache]] [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 규정 준수와 감사를 위해 **리소스 설정이 어떻게 바뀌었는지**와 **어떤 API 호출이 있었는지**를 둘 다 기록해야 합니다. 무엇을 써야 합니까?
> a) 설정 변경은 AWS Config, API 호출은 AWS CloudTrail
> b) 설정 변경은 AWS CloudTrail, API 호출은 AWS Config
> c) 설정 변경은 AWS Config, API 호출은 Amazon CloudWatch
> d) 설정 변경은 AWS CloudTrail, API 호출은 Amazon CloudWatch
>> [!success]- Answer
>> a) 설정 변경은 AWS Config, API 호출은 AWS CloudTrail
>> **왜 이 답인가** — 한 문장으로 갈립니다. **Config 는 "지금 이 리소스가 어떤 상태인가"를 시간순으로 기록**하고, **CloudTrail 은 "누가 무엇을 호출했는가"를 기록**합니다.
>> **나머지가 아닌 이유** — 두 번째 보기는 둘을 정확히 뒤바꾼 것이고 이 문항의 함정은 그것뿐입니다. CloudWatch 는 **지표와 로그**를 다루지 API 호출 감사 기록이 아닙니다. 세 서비스를 한 줄씩 구분해 두면 즉답이 됩니다.

<sub>관련: [[aws-config]] [[aws-cloudtrail]] [[amazon-cloudwatch]] | 모듈 [[01-secure-access]]</sub>

> [!question] **상태 없는 Python 애플리케이션과 MySQL**이 EC2 한 대에서 돌고 있으며, **애플리케이션 코드는 수정할 수 없습니다.** 고가용성을 확보하려면 어떤 조합이 필요합니까? (2개 선택)
> a) 데이터베이스를 **다중 AZ RDS for MySQL**로 마이그레이션한다
> b) **두 가용 영역에 걸친 Auto Scaling 그룹**에 EC2를 두고 **Application Load Balancer**로 분산한다
> c) 데이터베이스를 DynamoDB로 옮기고 오토 스케일링을 켠다
> d) DataSync로 여러 EC2 사이의 데이터베이스 데이터를 동기화한다
>> [!success]- Answer
>> a) 데이터베이스를 **다중 AZ RDS for MySQL**로 마이그레이션한다
>> b) **두 가용 영역에 걸친 Auto Scaling 그룹**에 EC2를 두고 **Application Load Balancer**로 분산한다
>> **왜 이 답인가** — 두 계층 모두 이중화해야 합니다. 애플리케이션은 상태가 없으므로 여러 AZ ASG로 나누면 되고, 데이터베이스는 **같은 MySQL 엔진의 다중 AZ RDS**로 옮겨야 코드를 안 바꿉니다.
>> **나머지가 아닌 이유** — DynamoDB로 옮기면 코드를 고쳐야 합니다. DataSync는 데이터베이스 복제 도구가 아닙니다.

<sub>관련: [[amazon-rds]] [[amazon-ec2-auto-scaling]] [[elastic-load-balancing]] | 모듈 [[05-high-availability]]</sub>

> [!question] 한 전자상거래 회사가 Amazon RDS 기반 웹 애플리케이션의 성능 저하를 발견했습니다. 성능 저하는 **비즈니스 분석가가 실행하는 읽기 전용 SQL 쿼리의 증가**에 기인합니다. 솔루션스 아키텍트는 **기존 웹 애플리케이션의 변경을 최소화**하면서 문제를 해결해야 합니다. 솔루션스 아키텍트는 무엇을 권장해야 합니까?
> a) 기본 데이터베이스의 읽기 전용 복제본을 생성하고 비즈니스 분석가가 해당 복제본에서 쿼리를 실행하게 한다
> b) 데이터를 Amazon DynamoDB로 내보내고 비즈니스 분석가가 거기서 쿼리를 실행하게 한다
> c) 데이터를 Amazon ElastiCache에 로드하고 비즈니스 분석가가 거기서 쿼리를 실행하게 한다
> d) 데이터를 Amazon Redshift 클러스터로 복사하고 비즈니스 분석가가 거기서 쿼리를 실행하게 한다
>> [!success]- Answer
>> a) 기본 데이터베이스의 읽기 전용 복제본을 생성하고 비즈니스 분석가가 해당 복제본에서 쿼리를 실행하게 한다
>> **왜 이 답인가** — 부하의 원인이 **읽기 전용 쿼리**로 특정되어 있습니다. 읽기 전용 복제본으로 그 쿼리만 떼어 내면 웹 애플리케이션은 손대지 않아도 됩니다.
>> **나머지가 아닌 이유** — DynamoDB와 Redshift로 옮기면 **분석가의 쿼리를 다시 써야** 하고 데이터 이전 파이프라인도 필요합니다. ElastiCache는 임의 SQL 분석 쿼리를 처리하는 도구가 아닙니다.

<sub>관련: [[amazon-rds]] | 모듈 [[08-perf-database]]</sub>

> [!question] 두 리전의 S3 버킷에 데이터를 저장하는데, **양쪽을 같은 고객 관리형 KMS 키로** 암호화·복호화해야 하고 **키도 두 리전에 모두** 있어야 합니다. 운영 오버헤드를 최소로 하려면 무엇입니까?
> a) 고객 관리형 **다중 리전 KMS 키**를 만들고 리전마다 버킷을 두어 복제를 구성한다
> b) 리전마다 별도의 고객 관리형 KMS 키를 만들고 각 버킷에 SSE-KMS 를 적용한다
> c) 리전마다 버킷을 만들고 SSE-S3 로 암호화한 뒤 복제를 구성한다
> d) 리전마다 버킷을 만들고 암호화 없이 복제한 뒤 애플리케이션에서 처리한다
>> [!success]- Answer
>> a) 고객 관리형 **다중 리전 KMS 키**를 만들고 리전마다 버킷을 두어 복제를 구성한다
>> **왜 이 답인가** — `같은 키`가 결정적입니다. 다중 리전 키는 **여러 리전에 같은 키 자료를 복제한 복제본**이라, 한쪽에서 암호화한 것을 다른 쪽에서 그대로 복호화할 수 있습니다.
>> **나머지가 아닌 이유** — 리전마다 키를 따로 만들면 **서로 다른 키**라 `같은 키` 조건을 어깁니다. 동작은 하지만 요구를 못 지키는, 가장 고르기 쉬운 오답입니다. SSE-S3 는 AWS 가 키를 관리해 `고객 관리형` 조건이 깨집니다.

<sub>관련: [[aws-kms]] [[amazon-s3]] | 모듈 [[03-data-protection]]</sub>

> [!question] **단일 노드 MySQL**과 **다중 노드 웹 계층**으로 된 온프레미스 애플리케이션을 AWS로 옮기면서 **변경은 최소로** 하고 **복원력은 개선**하려고 합니다. 어떤 조합이 필요합니까? (2개 선택)
> a) 웹 계층을 **ALB 뒤 Auto Scaling 그룹의 EC2 인스턴스**로 마이그레이션한다
> b) 데이터베이스를 **Amazon RDS 다중 AZ 배포**로 마이그레이션한다
> c) 데이터베이스를 NLB 뒤 Auto Scaling 그룹의 EC2로 마이그레이션한다
> d) 웹 계층을 AWS Lambda 함수로 마이그레이션한다
>> [!success]- Answer
>> a) 웹 계층을 **ALB 뒤 Auto Scaling 그룹의 EC2 인스턴스**로 마이그레이션한다
>> b) 데이터베이스를 **Amazon RDS 다중 AZ 배포**로 마이그레이션한다
>> **왜 이 답인가** — 두 계층 모두 **구조를 유지한 채 이중화**됩니다. 웹은 그대로 EC2에 올려 ASG·ALB로 감싸고, MySQL은 같은 엔진의 다중 AZ RDS로 옮겨 자동 장애 조치를 얻습니다.
>> **나머지가 아닌 이유** — Lambda로 옮기려면 코드를 다시 써야 합니다. 데이터베이스를 Auto Scaling 그룹에 넣는 것은 상태가 있는 계층에 맞지 않는 구성입니다.

<sub>관련: [[amazon-rds]] [[amazon-ec2-auto-scaling]] [[elastic-load-balancing]] | 모듈 [[05-high-availability]]</sub>

> [!question] 솔루션스 아키텍트가 웹, 애플리케이션, 데이터베이스 계층으로 구성된 고가용성 애플리케이션을 설계해야 합니다. **HTTPS 콘텐츠는 전송 시간이 가장 짧도록 최대한 엣지에 가깝게** 제공되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족하면서 **가장 안전**합니까?
> a) 프라이빗 서브넷에 여러 개의 중복 Amazon EC2 인스턴스를 두고 퍼블릭 Application Load Balancer(ALB)를 구성한다. 퍼블릭 ALB를 오리진으로 하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성한다
> b) 퍼블릭 서브넷에 여러 개의 중복 Amazon EC2 인스턴스를 두고 퍼블릭 Application Load Balancer(ALB)를 구성한다. 퍼블릭 ALB를 오리진으로 하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성한다
> c) 프라이빗 서브넷에 여러 개의 중복 Amazon EC2 인스턴스를 두고 퍼블릭 Application Load Balancer를 구성한다. EC2 인스턴스를 오리진으로 하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성한다
> d) 퍼블릭 서브넷에 여러 개의 중복 Amazon EC2 인스턴스를 두고 퍼블릭 Application Load Balancer를 구성한다. EC2 인스턴스를 오리진으로 하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성한다
>> [!success]- Answer
>> a) 프라이빗 서브넷에 여러 개의 중복 Amazon EC2 인스턴스를 두고 퍼블릭 Application Load Balancer(ALB)를 구성한다. 퍼블릭 ALB를 오리진으로 하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성한다
>> **왜 이 답인가** — 엣지 제공은 **CloudFront**가 맡고, 가장 안전한 구성은 **인스턴스를 프라이빗 서브넷에 두고 퍼블릭 ALB만 노출**하는 것입니다. 오리진은 인터넷에서 접근 가능해야 하므로 ALB가 오리진이 됩니다.
>> **나머지가 아닌 이유** — 인스턴스를 퍼블릭 서브넷에 두면 노출면이 넓어집니다. **프라이빗 서브넷의 EC2 인스턴스는 CloudFront 오리진이 될 수 없습니다** — 오리진은 인터넷에서 도달 가능해야 합니다.

<sub>관련: [[amazon-cloudfront]] [[elastic-load-balancing]] [[amazon-vpc]] | 모듈 [[02-secure-workloads]]</sub>

> [!question] 한 회사가 중앙 집중식 AWS 계정을 사용하여 여러 Amazon S3 버킷에 로그 데이터를 저장하고 있습니다. 솔루션스 아키텍트는 **데이터가 S3 버킷에 업로드되기 전에 저장 시 암호화**되도록 해야 합니다. 데이터는 **전송 중에도 암호화**되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?
> a) 클라이언트 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화한다
> b) 서버 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화한다
> c) S3 업로드에 S3 관리형 암호화 키를 사용한 서버 측 암호화(SSE-S3)를 요구하는 버킷 정책을 생성한다
> d) 기본 AWS Key Management Service(AWS KMS) 키를 사용하여 S3 버킷을 암호화하는 보안 옵션을 활성화한다
>> [!success]- Answer
>> a) 클라이언트 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화한다
>> **왜 이 답인가** — "**업로드되기 전에**"가 결정 조건입니다. 데이터가 S3에 도착하기 전에 이미 암호화되어 있으려면 **클라이언트 측 암호화**뿐입니다. 전송 구간은 HTTPS로 보호됩니다.
>> **나머지가 아닌 이유** — 서버 측 암호화는 **S3에 도착한 뒤에** 암호화합니다. 버킷 정책으로 SSE-S3를 요구하거나 기본 KMS 키를 켜는 것도 모두 서버 측이라 같은 이유로 조건을 못 맞춥니다.

<sub>관련: [[amazon-s3]] [[aws-kms]] | 모듈 [[03-data-protection]]</sub>
