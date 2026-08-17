---
title: "AWS Network Firewall"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> 보안 그룹·NACL 로 안 되는 것 — **도메인 필터링과 침입 방지**를 VPC 전체에

## 한 줄로 말하면

VPC 전체에 거는 관리형 방화벽입니다. 3계층부터 **7계층까지** 보고, 모든 방향의 트래픽을 검사합니다.

## 핵심 개념

- **보안 그룹·NACL 이 못 하는 것을 합니다** — 그 둘은 IP·포트만 봅니다. Network Firewall 은 **도메인 이름·프로토콜·패턴**을 봅니다
- `아웃바운드를 허용된 도메인으로만` → **도메인 목록 필터링**입니다. IP 는 계속 바뀌므로 NACL 로는 풀 수 없습니다
- **침입 탐지·방지(IDS/IPS)** — Suricata 호환 규칙으로 알려진 공격 패턴을 막습니다
- **모든 방향**을 검사합니다 — VPC 로 들어오고 나가는 것, VPC 사이, 온프레미스와의 트래픽까지
- 내부적으로 **Gateway Load Balancer** 를 씁니다. 직접 어플라이언스를 붙이는 GWLB 구성의 관리형 버전인 셈입니다
- **[[aws-firewall-manager\|Firewall Manager]]** 로 여러 계정·VPC 에 같은 정책을 배포합니다
- **7계층이지만 WAF 와 다릅니다** — WAF 는 **웹 애플리케이션 요청**(ALB·CloudFront 앞), Network Firewall 은 **VPC 네트워크 전체**입니다

## 요금 모델

- **엔드포인트 시간당 요금 + 처리한 데이터량** 입니다. AZ 마다 엔드포인트를 두므로 배가 됩니다
- 서드파티 어플라이언스를 EC2 로 직접 운영하는 것보다 운영 부담이 낮지만, 저렴한 선택지는 아닙니다
- 요구가 IP·포트 수준이면 **보안 그룹·NACL 이 무료**입니다 — 과한 구성이 되지 않게 봅니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| 보안 그룹 / NACL | IP·포트만. 무료 |
| [[aws-waf\|WAF]] | **웹 요청 내용**(SQL 인젝션·XSS). ALB·CloudFront·API Gateway 에 붙습니다 |
| [[aws-shield\|Shield]] | DDoS |
| GWLB | 서드파티 어플라이언스를 **직접** 끼울 때 |

## 시험 포인트

- [ ] `허용된 도메인으로만 아웃바운드` → **Network Firewall**
- [ ] `VPC 전체에 침입 방지` → Network Firewall
- [ ] `SQL 인젝션` 은 **WAF**, `DDoS` 는 **Shield**
- [ ] IP·포트만 막으면 되면 → 보안 그룹·NACL (무료)
- [ ] 여러 계정에 일괄 적용 → **Firewall Manager**

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon VPC](/docs/aws-clf-c02/10-services/04-networking/amazon-vpc)
