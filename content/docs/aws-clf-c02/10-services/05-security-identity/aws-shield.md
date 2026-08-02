---
title: "AWS Shield"
tags: [aws, clf-c02, service, 보안-자격증명]
category: 05-보안-자격증명
module: 9
status: 미학습
---

> DDoS 방어. Standard 무료 / Advanced 유료

| | |
|---|---|
| **카테고리** | 05-보안-자격증명 |
| **배우는 모듈** | [[09-security]] |
| **문제은행 출현** | 23회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

**DDoS 공격으로부터 애플리케이션을 보호**해 주는 서비스입니다.

## 핵심 개념

- **상대하는 공격은 DDoS입니다** — 대량의 트래픽을 한꺼번에 퍼부어 서비스를 마비시키는 공격을 완화합니다. 요청의 **내용**이 아니라 **규모**를 상대한다고 기억하시면 됩니다.
- **Shield Standard** — 모든 AWS 고객에게 **자동으로, 추가 요금 없이** 적용됩니다. 신청할 것도 켤 것도 없습니다. 흔한 네트워크·전송 계층(L3/L4) 공격을 막아 줍니다.
- **Shield Advanced** — 유료 구독입니다. 대규모 공격에 대한 향상된 탐지, **AWS Shield 대응 팀(SRT)** 의 지원, 상세한 공격 진단 리포트, 그리고 공격 때문에 늘어난 요금을 돌려받는 **비용 보호**를 제공합니다.
- **적용 대상** — CloudFront, Route 53, Elastic Load Balancing, Global Accelerator, EC2 Elastic IP처럼 인터넷을 마주 보는 리소스입니다.
- **WAF와 함께 씁니다** — 계층 7까지 막으려면 두 서비스를 같이 써야 합니다. Shield Advanced 구독자는 보호 대상 리소스에 대해 [[aws-waf]]를 추가 요금 없이 사용하실 수 있습니다.

## 요금 모델

- **Shield Standard는 무료입니다.** 모든 계정에 자동 적용되며 별도 요금이 붙지 않습니다.
- **Shield Advanced는 유료 구독**입니다. 조직 단위 월 구독료에 데이터 전송 요금이 더해지고, **1년 약정**이 붙습니다.
- Advanced의 **비용 보호** 덕분에, DDoS로 스케일링이 일어나 늘어난 요금은 크레딧으로 돌려받을 수 있습니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-waf]] | Shield는 **DDoS(트래픽 규모)** 를 상대하고, WAF는 **요청 내용**(SQL 인젝션·XSS)을 검사합니다 |
| [[aws-firewall-manager]] | Firewall Manager는 Shield Advanced 보호를 여러 계정의 리소스에 **일괄 적용**하는 관리 도구입니다 |
| [[amazon-cloudfront]] | CloudFront는 엣지에서 트래픽을 받아 주는 CDN이고, Shield는 그 앞단에서 DDoS를 완화합니다. 둘은 함께 동작합니다 |

## 시험 포인트

- [ ] "**DDoS**", "대량 트래픽으로 서비스가 마비된다" → Shield
- [ ] **Standard는 무료이고 자동입니다.** "기본 DDoS 보호를 받으려면 무엇을 해야 하나"의 답은 "이미 적용되어 있다"입니다
- [ ] SRT 지원, 상세 진단, **비용 보호**가 필요하다는 조건이 붙으면 **Advanced**입니다. 보호 대상에는 CloudFront·ELB뿐 아니라 **[[amazon-route-53]]과 [[aws-global-accelerator]]** 도 들어갑니다
- [ ] SQL 인젝션·XSS가 나오면 Shield가 아니라 **WAF**입니다

## 관련 노트

- 모듈: [[09-security]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
