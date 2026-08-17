---
title: "3.4 고성능·확장 가능한 네트워크 아키텍처 결정"
description: "가까이 두거나 · 경로를 좋게 하거나 · 아예 전용선을 깔거나"
tags: [saa-c03, 도메인3, 과제명세]
kind: domain
module: 9
status: 미학습
---

> 도메인 3 · 고성능 아키텍처 설계 **24%** · 과제 명세 5개 중 **네 번째**

## 1. 왜 필요한가

> `가장 낮은 지연 시간` 이 나오면 답은 셋 중 하나입니다 — **캐시하거나, 경로를 바꾸거나, 전용선을 깔거나.**

지연 시간을 줄이는 방법은 물리적으로 세 가지뿐입니다.
사용자 **가까이에 복사본을 두거나**(CloudFront), 같은 거리라도 **더 좋은 길로 보내거나**(Global Accelerator),
아예 **인터넷을 안 타거나**(Direct Connect · 엔드포인트).

문항은 이 셋 중 하나를 고르게 합니다. 그리고 CloudFront 와 Global Accelerator 를 헷갈리게 만드는 것이
가장 흔한 함정입니다. 둘은 **캐시하느냐 아니냐**로 갈립니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-cloudfront\|Amazon CloudFront]] | 엣지에 **복사본을 둔다** | 정적·동적 콘텐츠 캐싱 |
| [[aws-global-accelerator\|AWS Global Accelerator]] | 엣지에서 **AWS 백본으로 태운다** | 캐시가 아니라 경로 |
| [[amazon-route-53\|Amazon Route 53]] | DNS + 라우팅 정책 | 어느 엔드포인트로 보낼지 |
| [[aws-direct-connect\|AWS Direct Connect]] | 온프레미스 전용선 | 안정적 대역폭 |
| [[aws-site-to-site-vpn\|Site-to-Site VPN]] | 인터넷 위 암호화 터널 | 싸고 빠르게 깔린다 |
| [[aws-transit-gateway\|AWS Transit Gateway]] | 모든 연결을 한 허브에 | VPC 가 많아질 때 |
| [[aws-privatelink\|AWS PrivateLink]] | 서비스 하나만 노출 | 남의 VPC 의 서비스에 붙기 |
| [[elastic-load-balancing\|Elastic Load Balancing]] | 트래픽 분산 | NLB 는 초저지연 |

## 3. 이 과제가 묻는 것

**CloudFront vs Global Accelerator — 여기서 가장 많이 갈립니다**

| | CloudFront | Global Accelerator |
|---|---|---|
| 하는 일 | 엣지에 **캐시**한다 | 엣지에서 **AWS 백본**으로 태워 보낸다 |
| 프로토콜 | HTTP/HTTPS | **TCP · UDP 전부** |
| IP | 도메인 이름 | **고정 애니캐스트 IP 2개** |
| 언제 | 정적 자산 · 동영상 · 웹 | 게임 · VoIP · IoT · **캐시할 수 없는** 트래픽 |
| 장애 조치 | 오리진 장애 조치 | **초 단위 리전 전환** |

`고정 IP 가 필요` 나 `UDP` 가 보이면 CloudFront 는 탈락입니다.
`이미지와 동영상` 이 보이면 Global Accelerator 가 아닙니다.

**Route 53 라우팅 정책**

| | 언제 |
|---|---|
| **단순** | 하나뿐 |
| **가중치** | `트래픽의 10%만 새 버전으로` — 카나리 배포 |
| **지연 시간** | `가장 빠른 리전으로` |
| **장애 조치** | `주 사이트가 죽으면 대기 사이트로` |
| **지리 위치** | `국가별로 다른 콘텐츠` · 규정 준수 |
| **지리 근접** | 리소스 위치 기준 + 편향치 조정 |
| **다중값 응답** | 여러 IP 를 돌려주고 상태 확인까지 |

`가장 낮은 지연 시간` 은 **지연 시간 기반**, `한국 사용자는 한국 법을 따라야` 는 **지리 위치**입니다. 헷갈리기 쉽습니다.

**온프레미스 연결**

| | 성격 |
|---|---|
| **Site-to-Site VPN** | 인터넷 위. 몇 시간이면 깔린다. 대역폭이 인터넷에 좌우된다 |
| **Direct Connect** | 전용 회선. **일관된 대역폭과 지연**. 준비에 몇 주~몇 달 |
| **Direct Connect + VPN 백업** | DX 가 끊겼을 때를 대비. `복원력` 이 붙으면 이 조합 |

> `안정적이고 일관된 성능` · `대용량을 매일 전송` → **Direct Connect**
> `빠르게 연결해야` · `비용이 우선` → **VPN**

**VPC 안의 성능**

- **향상된 네트워킹(ENA)** · **Elastic Fabric Adapter(EFA)** — HPC 노드 간 통신
- **클러스터 배치 그룹** — 같은 랙에 몰아 지연 최소화
- **VPC 엔드포인트** — 인터넷을 안 타면 지연도 줄고 비용도 준다

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `전 세계 사용자에게 이미지·동영상` | **CloudFront** |
| `고정 IP` · `UDP` · `게임 서버` | **Global Accelerator** |
| `가장 빠른 리전으로 보낸다` | Route 53 **지연 시간 기반** |
| `국가별로 다르게` | Route 53 **지리 위치** |
| `새 버전에 10%만` | Route 53 **가중치** |
| `주 사이트 장애 시 자동 전환` | Route 53 **장애 조치** + 상태 확인 |
| `일관된 대역폭` · `매일 대용량 전송` | **Direct Connect** |
| `며칠 안에 연결해야` | **Site-to-Site VPN** |
| `VPC 가 계속 늘어난다` | **Transit Gateway** |
| `HPC 노드 간 통신` | **EFA + 클러스터 배치 그룹** |
| `S3 접근이 NAT 게이트웨이를 거쳐 느리고 비싸다` | **Gateway 엔드포인트** |

> [!tip] "지연 시간" 과 "처리량" 은 다른 요구입니다
> 지연 시간 → 가까이 두거나 경로를 좋게. 처리량 → 대역폭을 늘리거나 병렬로.
> 지문이 `응답이 느리다` 인지 `전송이 오래 걸린다` 인지 구분하면 답이 갈립니다.

## 5. 여기까지의 지도

주황색이 이번 과제에서 **처음** 나온 서비스입니다.

```d2
classes: {
  new: {
    style: {
      fill: "#ff9900"
      stroke: "#232f3e"
      stroke-width: 2
      font-color: "#111111"
    }
  }
}

grid-columns: 1
grid-gap: 16

"1.1 AWS 리소스에 대한 보안 액세스 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "AWS IAM"
  "IAM Identity Center"
  "AWS Organizations"
  "AWS Directory Service"
  "Amazon Cognito"
  "AWS RAM"
  "AWS Secrets Manager"
  "AWS Control Tower"
}
"1.2 안전한 워크로드 및 애플리케이션 설계": {
  grid-rows: 3
  *.width: 190
  *.style.font-size: 12

  "Amazon VPC"
  "AWS PrivateLink"
  "AWS WAF"
  "AWS Shield"
  "AWS Firewall Manager"
  "Amazon GuardDuty"
  "Amazon Inspector"
  "AWS Systems Manager"
  "Elastic Load Balancing"
}
"1.3 적합한 데이터 보안 제어 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "AWS KMS"
  "AWS CloudHSM"
  "Amazon Macie"
  "AWS Certificate Manager"
  "Amazon S3"
  "AWS Backup"
}
"2.1 확장 가능하고 느슨하게 결합된 아키텍처 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon SQS"
  "Amazon SNS"
  "Amazon EventBridge"
  "AWS Step Functions"
  "EC2 Auto Scaling"
  "AWS Lambda"
  "AWS Fargate"
  "Amazon API Gateway"
}
"2.2 고가용성 및/또는 내결함성 아키텍처 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon Route 53"
  "Amazon RDS"
  "Amazon Aurora"
  "Amazon DynamoDB"
  "Elastic Disaster Recovery"
}
"3.1 고성능·확장 가능한 스토리지 솔루션 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon EBS"
  "Amazon EFS"
  "Amazon FSx"
  "AWS Storage Gateway"
  "AWS DataSync"
  "AWS Snow Family"
}
"3.2 고성능의 탄력적인 컴퓨팅 솔루션 설계": {
  grid-rows: 1
  *.width: 190
  *.style.font-size: 12

  "Amazon EC2"
  "Amazon ECS"
  "Amazon EKS"
  "AWS Batch"
}
"3.3 고성능 데이터베이스 솔루션 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon ElastiCache"
  "Amazon Redshift"
  "Amazon DocumentDB"
  "Amazon Neptune"
  "AWS DMS"
}
"3.4 고성능·확장 가능한 네트워크 아키텍처 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "Amazon CloudFront"
  "AWS Global Accelerator"
  "AWS Direct Connect"
  "Site-to-Site VPN"
  "AWS Transit Gateway"
}
```

## 6. 셀프 체크

- [ ] CloudFront 와 Global Accelerator 를 가르는 신호를 두 개 댄다
- [ ] Route 53 라우팅 정책 일곱 개 중 다섯 개의 용도를 말한다
- [ ] Direct Connect 를 못 쓰는 상황(시간이 없을 때)의 대안을 안다
- [ ] `복원력 있는 온프레미스 연결` 의 정답 조합을 말한다
- [ ] 지연 시간을 줄이는 세 가지 접근을 구분한다

---

> 더 기초부터: [CLF-C02 의 Amazon CloudFront](/docs/aws-clf-c02/10-services/04-networking/amazon-cloudfront)
