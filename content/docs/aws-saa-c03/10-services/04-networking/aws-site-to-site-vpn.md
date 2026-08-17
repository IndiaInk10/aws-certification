---
title: "AWS Site-to-Site VPN"
tags: [aws, saa-c03, service, 네트워킹]
category: 04-networking
status: 미학습
---

> 인터넷 위의 암호화 터널. **빠르게 · 싸게 · 백업으로**

## 한 줄로 말하면

온프레미스와 VPC 를 **IPsec 터널**로 잇습니다. 인터넷을 타므로 몇 분~몇 시간이면 서지만 성능은 회선에 좌우됩니다.

## 핵심 개념

- **즉시 서는 것**이 최대 장점입니다. `이번 주 안에 연결해야` 면 Direct Connect 가 아니라 이쪽입니다
- **터널이 두 개** 생깁니다(AZ 이중화). 다만 **고객 쪽 장비가 하나면** 그쪽이 단일 장애점이라, 완전한 이중화는 고객 게이트웨이도 두 개여야 합니다
- **Direct Connect 의 백업**으로 쓰는 것이 표준 패턴입니다. `주 회선이 끊기면 느려도 좋으니 계속` + `비용 최소` 의 정답
- **암호화가 기본**입니다. Direct Connect 는 그렇지 않아 규정 준수 지문에서 VPN 을 얹으라는 답이 나옵니다
- **가상 프라이빗 게이트웨이(VGW)** 에 붙이거나 **Transit Gateway** 에 붙입니다. VPC 가 여럿이면 TGW 쪽입니다
- **VPN CloudHub** — VGW 하나에 여러 지사의 고객 게이트웨이를 붙이면, **지사끼리도 서로 통신**하게 됩니다. `본사·지사 여러 곳을 저렴하게 잇되 서로도 통해야` 의 답입니다. 인터넷 위라 저렴합니다
- **대역폭을 늘리려면 터널을 늘립니다** — Transit Gateway 에 붙이면 **ECMP** 로 여러 터널에 트래픽을 나눠 실어 총 대역폭을 키울 수 있습니다. VGW 에서는 안 됩니다
- **Client VPN 과 다릅니다** — Site-to-Site 는 **네트워크와 네트워크**, Client VPN 은 **개인 기기 하나**가 붙습니다. `재택 직원` 지문이면 Client VPN 입니다

## 요금 모델

- **VPN 연결마다 시간당 요금 + 나가는 데이터 전송** 으로 붙습니다
- Direct Connect 보다 **압도적으로 쌉니다.** 그래서 백업 회선으로 쓰는 조합이 "복원력을 비용 최소로"의 답이 됩니다
- 대신 인터넷 경유라 대역폭·지연이 보장되지 않습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-direct-connect\|Direct Connect]] | DX 는 전용선·일관된 성능·설치 수 주. VPN 은 즉시·저렴·성능 변동 |
| Client VPN | 개인 기기가 붙는 원격 접속. Site-to-Site 는 네트워크 대 네트워크 |

## 시험 포인트

- [ ] `며칠 안에 온프레미스 연결` → Site-to-Site VPN
- [ ] `DX 가 끊겨도 느리게라도` + 비용 최소 → **DX + VPN 백업**
- [ ] `전용선인데 암호화까지` → DX 위에 VPN
- [ ] `재택 직원 개인 노트북` → Client VPN (Site-to-Site 아님)
- [ ] 완전 이중화라면 **고객 게이트웨이도 두 개**
- [ ] `지사들끼리도 통신해야` → **VPN CloudHub**
- [ ] `VPN 대역폭을 늘려야` → **TGW + ECMP 로 터널 추가** (VGW 로는 불가)

## 관련 노트

- 과제 명세: [[09-perf-network\|3.4 고성능 네트워크]] · [[05-high-availability\|2.2 고가용성]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Site-to-Site VPN](/docs/aws-clf-c02/10-services/04-networking/aws-site-to-site-vpn)
