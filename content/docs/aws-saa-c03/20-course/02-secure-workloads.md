---
title: "1.2 안전한 워크로드 및 애플리케이션 설계"
description: "VPC 구조 · 보안 그룹과 NACL · 인터넷에 내놓지 않고 연결하기"
tags: [saa-c03, 도메인1, 과제명세]
kind: domain
module: 2
status: 미학습
---

> 도메인 1 · 보안 아키텍처 설계 **30%** · 과제 명세 3개 중 **두 번째**

## 1. 왜 필요한가

> 앞 과제가 "누가 들어오는가"였다면 여기는 **"어디로 들어오는가"** 입니다.

권한을 아무리 잘 짜도 인스턴스가 인터넷에 그대로 노출돼 있으면 소용이 없습니다.
이 과제는 **네트워크 경계**를 묻습니다. 그리고 SAA 에서 그림이 필요한 자리는 대부분 여기입니다 —
VPC 안에 가용 영역이 있고, 그 안에 퍼블릭·프라이빗 서브넷이 있고, 그 안에 인스턴스가 있는 **3중 중첩** 구조.

시험 문항은 거의 항상 같은 모양입니다.
*"인터넷에서 접근할 수 없어야 하는데 이 리소스가 저 리소스에 닿아야 한다."*
답은 **프라이빗 서브넷 + 필요한 통로 하나**입니다. 그 통로가 무엇이냐가 문제입니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-vpc\|Amazon VPC]] | 내 전용 가상 네트워크 | 서브넷·라우팅 테이블·게이트웨이가 모두 여기 |
| [[aws-privatelink\|AWS PrivateLink]] | 서비스 하나만 남에게 노출 | VPC 전체를 열지 않고 잇는 방법 |
| [[aws-waf\|AWS WAF]] | 요청 내용을 읽고 막는다 | SQL 인젝션 · XSS · 국가 차단 |
| [[aws-shield\|AWS Shield]] | DDoS 방어 | 볼륨 공격. Standard 는 자동 |
| [[aws-firewall-manager\|AWS Firewall Manager]] | 여러 계정의 방화벽 규칙을 한 곳에서 | 조직 단위로 규칙을 강제할 때 |
| [[amazon-guardduty\|Amazon GuardDuty]] | 로그를 읽어 위협을 탐지 | 켜기만 하면 되는 탐지 |
| [[amazon-inspector\|Amazon Inspector]] | 취약점 스캔 | 인스턴스·컨테이너 이미지의 CVE |
| [[aws-systems-manager\|AWS Systems Manager]] | SSH 없이 인스턴스에 붙는다 | 배스천 호스트를 없애는 답 |
| [[elastic-load-balancing\|Elastic Load Balancing]] | 트래픽 분산 | 인스턴스를 프라이빗에 숨기는 앞단 |

## 3. 이 과제가 묻는 것

**퍼블릭과 프라이빗을 가르는 것은 라우팅 테이블 한 줄입니다**

서브넷 설정에 "퍼블릭" 이라는 스위치는 없습니다.
**인터넷 게이트웨이로 가는 경로가 라우팅 테이블에 있으면** 퍼블릭, 없으면 프라이빗입니다.

```d2
vpc: "VPC 10.0.0.0/16" {
  az_a: "가용 영역 A" {
    pub_a: "퍼블릭 서브넷" {
      nat: "NAT 게이트웨이"
      alb_a: "ALB"
    }
    pri_a: "프라이빗 서브넷" {
      ec2_a: "EC2"
    }
  }
  az_b: "가용 영역 B" {
    pub_b: "퍼블릭 서브넷" {
      alb_b: "ALB"
    }
    pri_b: "프라이빗 서브넷" {
      ec2_b: "EC2"
    }
  }
  ep: "S3 Gateway 엔드포인트"
}

igw: "인터넷 게이트웨이"
users: "사용자"
s3: "Amazon S3"

users -> igw
igw -> vpc.az_a.pub_a.alb_a
igw -> vpc.az_b.pub_b.alb_b
vpc.az_a.pub_a.alb_a -> vpc.az_a.pri_a.ec2_a
vpc.az_b.pub_b.alb_b -> vpc.az_b.pri_b.ec2_b
vpc.az_a.pri_a.ec2_a -> vpc.az_a.pub_a.nat: "밖으로만"
vpc.az_a.pub_a.nat -> igw
vpc.az_a.pri_a.ec2_a -> vpc.ep
vpc.ep -> s3: "인터넷을 안 탄다"
```

**보안 그룹 vs 네트워크 ACL** — 이름이 비슷해서 매 시험 나옵니다.

| | 보안 그룹 | 네트워크 ACL |
|---|---|---|
| 적용 대상 | **인스턴스**(ENI) | **서브넷** |
| 상태 | 상태 저장 — 나간 것의 응답은 자동 허용 | 상태 **비**저장 — 응답도 규칙에 있어야 한다 |
| 규칙 | **허용만** | 허용 + **거부** |
| 평가 | 전체 규칙을 합쳐서 | **번호 순서대로**, 먼저 맞는 규칙이 이긴다 |
| 기본값 | 인바운드 전부 차단 | 전부 허용 |

> **특정 IP 하나를 막아야 한다** → 보안 그룹은 거부 규칙이 없으므로 **NACL** 입니다.

**밖으로 나가는 통로 세 가지**

| | 무엇을 위해 |
|---|---|
| **NAT 게이트웨이** | 프라이빗 서브넷이 **인터넷으로** 나갈 때 (패치·업데이트). 밖에서는 못 들어온다 |
| **VPC 엔드포인트** | **AWS 서비스**에 갈 때. 인터넷을 아예 안 탄다 — 더 안전하고 대개 더 싸다 |
| **PrivateLink** | 남의 VPC 에 있는 **서비스 하나**에 갈 때 |

**애플리케이션 계층 보호**

- **WAF** — 요청 **내용**이 나쁠 때 (SQL 인젝션 · XSS · 봇 · 속도 제한 · 국가 차단)
- **Shield** — 트래픽을 **들이부을** 때
- 둘은 붙는 자리도 같습니다. CloudFront · ALB · API Gateway 앞

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `인터넷에서 접근 불가` + `패치는 받아야` | 프라이빗 서브넷 + **NAT 게이트웨이** |
| `S3 에 접근하되 인터넷을 타지 않게` | **Gateway 엔드포인트** (무료) |
| `S3·DynamoDB 이외의 AWS 서비스에 프라이빗하게` | **Interface 엔드포인트** |
| `특정 IP 주소를 차단` | **네트워크 ACL** (보안 그룹은 거부를 못 한다) |
| `SSH 로 접속해야 하는데 배스천을 두기 싫다` | **Systems Manager Session Manager** |
| `SQL 인젝션` · `크로스 사이트 스크립팅` | **WAF** |
| `DDoS` | **Shield** (기본은 이미 켜져 있다) |
| `여러 계정에 같은 방화벽 규칙을 강제` | **Firewall Manager** |
| `EC2 를 인터넷에 노출하지 않고 웹 서비스` | ALB 는 퍼블릭, **EC2 는 프라이빗** |

> [!warning] 자주 나오는 오답
> **NAT 게이트웨이를 프라이빗 서브넷에 두는 보기.** NAT 는 **퍼블릭 서브넷**에 있어야 동작합니다.
> 그리고 NAT 게이트웨이는 **AZ 단위**입니다. AZ 마다 하나씩 두지 않으면 그 AZ 가 죽을 때 같이 끊깁니다.

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
  *.class: new

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
```

## 6. 셀프 체크

- [ ] 퍼블릭 서브넷과 프라이빗 서브넷을 가르는 것이 무엇인지 한 문장으로 말한다
- [ ] 보안 그룹으로 못 하고 NACL 로만 되는 일을 하나 든다
- [ ] NAT 게이트웨이와 VPC 엔드포인트를 각각 언제 쓰는지 구분한다
- [ ] WAF 와 Shield 중 어느 쪽이 요청 내용을 보는지 안다
- [ ] 배스천 호스트를 없애는 답이 무엇인지 안다

---

> 더 기초부터: [CLF-C02 의 네트워킹 모듈](/docs/aws-clf-c02/20-course/05-networking)
