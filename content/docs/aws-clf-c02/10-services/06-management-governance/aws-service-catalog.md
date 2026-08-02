---
title: "AWS Service Catalog"
tags: [aws, clf-c02, service, 관리-거버넌스]
category: 06-관리-거버넌스
module: 10
status: 미학습
---

# AWS Service Catalog

> 승인된 서비스 목록만 골라 쓰게 한다

| | |
|---|---|
| **카테고리** | 06-관리-거버넌스 |
| **배우는 모듈** | [[10-monitoring-governance]] |
| **문제은행 출현** | 13회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

조직이 미리 승인한 제품 목록을 만들어 두고, 구성원은 **그 목록 안에서만** 골라 스스로 배포하게 합니다.

## 핵심 개념

- **제품(Product)과 포트폴리오(Portfolio)** — 승인된 CloudFormation 템플릿 하나가 **제품**이고, 관련 제품을 묶은 것이 **포트폴리오**입니다. 포트폴리오를 사용자·조직 단위로 공유합니다.
- **거버넌스가 목적** — 아무나 아무 구성이나 만들지 못하게 막고, **검증된 구성만** 쓰게 하는 것이 존재 이유입니다.
- **셀프 서비스도 함께** — 그러면서도 사용자는 관리자에게 요청서를 넣을 필요 없이 스스로 배포합니다. **통제와 속도를 동시에** 잡는 구조입니다.
- **실제 프로비저닝은 CloudFormation이 합니다** — Service Catalog는 그 위에서 "누가 무엇을 쓸 수 있는지"를 관리하는 층입니다.
- **버전과 태그 관리** — 제품 버전을 올려 배포하고, 비용 추적에 필요한 태그를 강제로 붙이게 할 수 있습니다.

## 요금 모델

- **API 호출 수와 프로비저닝된 제품 수**를 기준으로 과금합니다. 매달 일정 호출 수까지는 무료 사용량이 제공됩니다.
- 제품이 실제로 만들어 낸 **AWS 리소스 요금은 별도**로 청구됩니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-cloudformation]] | CloudFormation은 **템플릿으로 직접 만드는** 도구, Service Catalog는 그 템플릿을 **승인된 목록으로 배포하고 통제하는** 도구입니다 |
| [[aws-organizations]] | Organizations의 SCP는 **무엇을 못 하게** 막습니다. Service Catalog는 **무엇을 쓰면 되는지** 골라 줍니다 |
| [[aws-marketplace]] | Marketplace는 **외부 공급업체**의 소프트웨어를 사는 장터, Service Catalog는 **우리 조직 내부**에서 승인한 목록입니다 |

## 시험 포인트

- [ ] "승인된 제품·서비스 목록", "표준화된 구성만 배포하게 하라"가 보이면 Service Catalog입니다
- [ ] "거버넌스를 지키면서 셀프 서비스를 허용"이라는 조합이 결정적 신호입니다
- [ ] 외부 소프트웨어를 구매하는 Marketplace와 헷갈리지 않도록 주의하시기 바랍니다
- [ ] 뒤에서 실제로 리소스를 만드는 엔진은 CloudFormation입니다

## 관련 노트

- 모듈: [[10-monitoring-governance]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
