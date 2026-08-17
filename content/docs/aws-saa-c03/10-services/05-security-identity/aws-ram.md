---
title: "AWS RAM"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **자원을 복제하지 않고 계정 간에 공유**한다. VPC 를 계정마다 만드는 보기의 반대편

## 한 줄로 말하면

Resource Access Manager. 서브넷·Transit Gateway·Route 53 Resolver 규칙 같은 자원을 **다른 계정과 공유**합니다.

## 핵심 개념

- **공유 VPC** 가 대표 사례입니다 — 네트워크 팀이 VPC 와 서브넷을 소유하고, 각 애플리케이션 계정이 **그 서브넷에 자기 자원을 만듭니다.** 계정마다 VPC 를 만들고 피어링으로 잇는 구성보다 단순하고 IP 도 아낍니다
- **공유할 수 있는 것** — VPC 서브넷 · [[aws-transit-gateway\|Transit Gateway]] · Route 53 Resolver 규칙 · License Manager 구성 · Aurora DB 클러스터 · 이미지 빌더 구성 등
- **소유권은 그대로**입니다. 공유받은 계정은 자기 자원만 보고, 남의 자원은 건드리지 못합니다
- **[[aws-organizations\|Organizations]] 와 함께** 쓰면 OU 단위로 공유할 수 있고, 조직 밖 계정에는 개별 초대로 공유합니다
- **무료**입니다 — 공유 행위 자체에 요금이 없습니다

## 요금 모델

RAM 자체는 무료입니다. 공유된 자원의 요금은 **소유 계정**이 냅니다. 그래서 `중앙 네트워크 팀이 비용을 부담` 하는 구조가 자연스럽게 나옵니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| VPC 피어링 | 각자 VPC 를 갖고 **연결**합니다. RAM 은 **같은 VPC 를 나눠 씁니다** |
| [[aws-privatelink\|PrivateLink]] | 서비스 하나를 노출. 서브넷 자체를 주지 않습니다 |
| [[aws-iam\|계정 간 역할]] | 권한을 빌려주는 것. 자원 공유가 아닙니다 |

## 시험 포인트

- [ ] `여러 계정이 같은 서브넷을 써야` → **RAM 공유 VPC**
- [ ] `Transit Gateway 를 다른 계정과` → RAM
- [ ] `IP 주소 낭비를 줄이며 계정 분리` → 공유 VPC
- [ ] RAM 은 **무료**, 자원 요금은 소유 계정 부담

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]] · [[14-cost-network\|4.4 비용 최적화 네트워크]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS RAM](/docs/aws-clf-c02/10-services/05-security-identity/aws-ram)
