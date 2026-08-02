---
title: "AWS Transit Gateway"
tags: [aws, clf-c02, service, 네트워킹]
category: 04-네트워킹
module: 5
status: 미학습
---

> 여러 VPC·온프레미스를 한 허브로 연결

| | |
|---|---|
| **카테고리** | 04-네트워킹 |
| **배우는 모듈** | [[05-networking]] |
| **문제은행 출현** | 10회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

여러 VPC와 온프레미스 네트워크를 한곳에 모아 연결하는 **네트워크 허브**입니다.

## 핵심 개념

- **허브 앤 스포크** — VPC끼리 일일이 피어링을 걸면 개수가 늘어날수록 연결이 감당하기 어려울 만큼 복잡해집니다. Transit Gateway에 한 번씩만 붙이면 그 뒤로는 허브가 알아서 이어 줍니다.
- **무엇을 붙일 수 있는가** — 같은 리전의 여러 VPC, Site-to-Site VPN, Direct Connect 게이트웨이를 한 허브에 붙입니다. 다른 리전의 Transit Gateway끼리 피어링도 가능합니다.
- **계정을 넘나듭니다** — AWS Organizations와 Resource Access Manager를 통해 여러 계정이 하나의 Transit Gateway를 공유할 수 있습니다.
- **라우팅을 한곳에서 관리합니다** — 라우팅 테이블을 허브에서 관리하므로, 어떤 네트워크끼리 통신을 허용할지 중앙에서 통제할 수 있습니다.
- **관리형** — 대역폭 확장과 가용성은 AWS가 맡습니다. 라우터 장비를 직접 두고 운영할 필요가 없습니다.

## 요금 모델

- **VPC나 VPN 같은 연결(attachment) 하나당 시간당 요금**이 붙습니다. 붙인 개수만큼 곱해집니다.
- 여기에 **Transit Gateway를 통과한 데이터 처리량(GB)** 이 더해집니다.
- 리전 간 피어링으로 오가는 트래픽에는 데이터 전송 요금이 별도로 붙습니다.
- 프리 티어는 없습니다. 연결을 붙여 두기만 해도 시간당 요금이 나갑니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-vpc]] | VPC 피어링은 **두 VPC를 일대일로** 잇습니다. VPC가 몇 개 안 되면 충분하지만, 개수가 늘면 연결 수가 감당이 안 되므로 Transit Gateway로 모읍니다 |
| [[aws-direct-connect]] | Direct Connect는 온프레미스와 AWS를 잇는 **물리 회선**이고, Transit Gateway는 그렇게 들어온 연결을 여러 VPC에 **분배하는 허브**입니다. 둘은 함께 씁니다 |
| [[elastic-load-balancing]] | ELB는 애플리케이션 트래픽을 인스턴스들에 나누고, Transit Gateway는 **네트워크와 네트워크**를 잇습니다 |

## 시험 포인트

- [ ] "**여러 VPC를 연결**", "**네트워크 허브**", "**VPC 피어링이 너무 복잡해졌다**", "**온프레미스와 여러 VPC를 한 번에**" → Transit Gateway
- [ ] 하나의 Transit Gateway를 여러 계정이 공유할 수 있다는 점이 대규모 조직 문제에서 나옵니다
- [ ] 함정: VPC가 두세 개뿐이면 VPC 피어링으로 충분합니다. Transit Gateway는 **규모가 커졌을 때**의 답입니다
- [ ] 함정: Transit Gateway는 인터넷에 나가는 장치가 아닙니다. 인터넷 연결은 인터넷 게이트웨이·NAT 게이트웨이의 몫입니다

## 관련 노트

- 모듈: [[05-networking]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
