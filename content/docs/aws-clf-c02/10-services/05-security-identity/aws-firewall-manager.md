---
title: "AWS Firewall Manager"
tags: [aws, clf-c02, service, 보안-자격증명]
category: 05-보안-자격증명
module: 
status: 미학습
---

# AWS Firewall Manager

> 여러 계정의 방화벽 규칙을 중앙 관리

| | |
|---|---|
| **카테고리** | 05-보안-자격증명 |
| **배우는 모듈** | *이 코스에서는 다루지 않음 (문제은행 전용)* |
| **문제은행 출현** | 3회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

여러 계정과 여러 리소스에 걸친 **방화벽 규칙을 한곳에서 정의해 일괄 적용**하는 서비스입니다.

## 핵심 개념

- **중앙 관리가 목적입니다** — 계정이 수십 개로 늘어나면 방화벽 규칙을 계정마다 손으로 붙이는 일이 불가능해집니다. 정책을 한 번 정의해 조직 전체에 밀어 넣는 서비스입니다.
- **관리 대상** — [[aws-waf]] 규칙, [[aws-shield]] Advanced 보호, VPC 보안 그룹, AWS Network Firewall, Route 53 Resolver DNS Firewall입니다.
- **새로 생긴 리소스에도 자동으로 적용됩니다** — 나중에 추가된 계정이나 리소스에도 정책이 알아서 붙습니다. 빠뜨릴 여지를 없애는 것이 이 서비스의 핵심 가치입니다.
- **규정 준수 상태 확인** — 정책을 벗어난 리소스를 찾아 보고해 주므로 어디가 비어 있는지 바로 확인하실 수 있습니다.
- **Organizations가 전제 조건입니다** — [[aws-organizations]]로 계정이 묶여 있어야 사용할 수 있습니다.

## 요금 모델

- 관리하는 **보안 정책 수와 적용 리전 수**를 기준으로 월 단위 과금됩니다.
- Firewall Manager 요금과 별개로, 실제로 동작하는 **WAF·Shield Advanced·Network Firewall의 요금은 각각 따로** 냅니다.
- 계정이 하나뿐이라면 쓸 이유가 없고 요금만 늘어납니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-waf]] | WAF는 규칙으로 **실제 요청을 검사하고 차단**합니다. Firewall Manager는 그 규칙을 **여러 계정에 배포·관리**할 뿐입니다 |
| [[aws-shield]] | Shield는 DDoS 방어 그 자체이고, Firewall Manager는 Shield Advanced 보호를 **어느 리소스에 붙일지 중앙에서 지정**합니다 |
| [[aws-organizations]] | Organizations는 계정 묶음과 SCP를 담당하고, 방화벽 규칙 배포는 Firewall Manager의 몫입니다 |

## 시험 포인트

- [ ] "**여러 계정**" + "방화벽·WAF 규칙을 **중앙에서 일관되게**" → Firewall Manager
- [ ] 계정 하나 안에서 SQL 인젝션을 막는 문제라면 그냥 **WAF**입니다. Firewall Manager까지 갈 필요가 없습니다
- [ ] Firewall Manager는 스스로 트래픽을 막지 않습니다. 막는 일은 WAF·Shield·Network Firewall이 합니다
- [ ] AWS Organizations 사용이 **전제 조건**입니다

## 관련 노트

- 모듈: *코스 미포함*
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
