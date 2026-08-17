---
title: "AWS WAF"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **7계층**. SQL 인젝션·XSS·요청 속도 제한이 나오면 여기다

## 한 줄로 말하면

HTTP 요청을 규칙으로 검사해 막습니다. SQL 인젝션·크로스 사이트 스크립팅 같은 **애플리케이션 계층** 공격이 대상입니다.

## 핵심 개념

- **붙일 수 있는 대상** — [[amazon-cloudfront\|CloudFront]] · **ALB** · **API Gateway** · AppSync · Cognito 사용자 풀입니다
- **붙지 않는 것** — **NLB · EC2 인스턴스 · [[aws-global-accelerator\|Global Accelerator]]** 입니다. 이 사실이 오답을 가르는 자리라 반드시 외웁니다. NLB 앞을 보호해야 하면 Shield Advanced 쪽입니다
- **속도 기반 규칙** — 같은 IP 에서 오는 요청 수를 제한합니다. `한 IP 가 초당 수천 건` · `크리덴셜 스터핑` 의 답
- **관리형 규칙 그룹** — AWS 와 마켓플레이스가 제공합니다. `직접 규칙을 쓸 여력이 없다` · `OWASP 상위 10` 이면 관리형 규칙입니다
- **지리 일치 규칙**으로 국가를 막을 수 있습니다
- **IP 세트**로 허용·차단 목록을 관리합니다
- **우회 경로를 막아야 성립합니다** — CloudFront 에 WAF 를 붙여도 S3 나 ALB 에 직접 접근이 열려 있으면 소용없습니다. OAC·보안 그룹으로 우회로를 닫는 것이 함께 나옵니다
- **[[aws-firewall-manager\|Firewall Manager]]** 로 여러 계정에 같은 규칙을 강제할 수 있습니다

## 요금 모델

- **웹 ACL 월 요금 + 규칙 수 + 요청 수** 로 붙습니다
- 관리형 규칙 그룹은 별도 구독료가 붙는 것도 있습니다
- 비용 문항의 답은 아닙니다 — 보안 요구가 지문에 있을 때만 등장합니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-shield\|Shield]] | Shield 는 **3·4계층 DDoS**. WAF 는 7계층 콘텐츠 |
| 보안 그룹 / NACL | IP·포트 수준. 요청 본문은 못 봅니다 |
| [[aws-firewall-manager\|Firewall Manager]] | 규칙을 **여러 계정에 배포**하는 관리 계층 |

## 시험 포인트

- [ ] `SQL 인젝션` · `XSS` → **WAF**
- [ ] `한 IP 에서 과도한 요청` → **속도 기반 규칙**
- [ ] `운영 부담 최소로 일반 웹 공격 차단` → **관리형 규칙 그룹**
- [ ] **NLB · EC2 · Global Accelerator 에 WAF 를 붙이는 보기는 오답**
- [ ] WAF 를 붙였는데 우회된다 → **직접 접근 경로**를 닫았는지
- [ ] 여러 계정에 동일 규칙 → **Firewall Manager**

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS WAF](/docs/aws-clf-c02/10-services/05-security-identity/aws-waf)
