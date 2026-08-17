---
title: "AWS Shield"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **DDoS**. Standard 는 이미 켜져 있고, 시험이 묻는 것은 Advanced 를 언제 사느냐다

## 한 줄로 말하면

분산 서비스 거부(DDoS) 공격을 막습니다. **Standard 는 모든 계정에 무료로 이미 적용**되어 있습니다.

## 핵심 개념

**Standard** — 자동·무료. 흔한 3·4계층 공격(SYN 플러드, UDP 반사)을 걸러 냅니다. `추가 비용 없이 기본 DDoS 보호` 면 이미 있는 것입니다.

**Advanced** — 유료 구독. 무엇을 더 주는지가 시험 포인트입니다.

- **AWS Shield Response Team(SRT)** 지원
- **DDoS 비용 보호** — 공격으로 자동 확장이 폭주해 요금이 튀면 **크레딧으로 돌려받습니다.** 이 항목이 지문에 있으면 Advanced 가 답입니다
- **더 정교한 탐지**와 실시간 지표
- **보호 대상을 지정**합니다 — CloudFront · Route 53 · ELB · **Global Accelerator** · 탄력적 IP(EC2/NLB)
- **NLB·EC2 처럼 WAF 가 붙지 않는 자원**의 DDoS 보호는 Shield Advanced 가 답이 됩니다
- Advanced 를 구독하면 **WAF 사용료가 포함**됩니다

## 요금 모델

- **Standard 무료**
- **Advanced 는 월 고정 구독료(조직 단위) + 데이터 전송** 으로, 상당히 비쌉니다. 그래서 `비용을 최소로` 지문에서 Advanced 는 대개 오답이고, **`중요 애플리케이션`·`요금 급증 보호`·`전담 대응팀`** 이 있을 때만 답입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-waf\|WAF]] | WAF 는 **7계층** 요청 내용. Shield 는 **3·4계층** 볼륨 공격 |
| [[amazon-cloudfront\|CloudFront]] | 엣지에서 흡수하는 효과가 있지만 DDoS 전용 기능은 Shield |
| [[aws-firewall-manager\|Firewall Manager]] | Shield Advanced 보호를 **여러 계정에 배포**하는 계층 |

## 시험 포인트

- [ ] `추가 비용 없이 기본 DDoS` → **Shield Standard (이미 켜져 있음)**
- [ ] `공격으로 인한 요금 급증을 보상` → **Shield Advanced**
- [ ] `전담 대응팀 지원` → Advanced
- [ ] `NLB / EC2 를 DDoS 로부터` → Advanced (WAF 는 안 붙음)
- [ ] `SQL 인젝션` 은 Shield 가 아니라 **WAF**

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Shield](/docs/aws-clf-c02/10-services/05-security-identity/aws-shield)
