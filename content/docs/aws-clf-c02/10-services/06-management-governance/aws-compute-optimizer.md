---
title: "AWS Compute Optimizer"
tags: [aws, clf-c02, service, 관리-거버넌스]
category: 06-관리-거버넌스
module: 11
status: 미학습
---

# AWS Compute Optimizer

> 리소스 크기를 지표 기반으로 추천

| | |
|---|---|
| **카테고리** | 06-관리-거버넌스 |
| **배우는 모듈** | [[11-billing-support]] |
| **문제은행 출현** | 0회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

실제 사용 지표를 분석해 **리소스 크기가 적절한지** 판단하고, 더 맞는 사양을 추천해 줍니다.

## 핵심 개념

- **라이트사이징(rightsizing) 권장** — EC2 인스턴스, Auto Scaling 그룹, EBS 볼륨, Lambda 함수 등을 대상으로 "지금 이 사양이 맞는지"를 알려 줍니다.
- **판단 근거는 CloudWatch 지표** — 과거 사용률 데이터를 기계 학습으로 분석해 결론을 냅니다. 추측이 아니라 실제 측정값이 근거입니다.
- **세 가지 분류** — **프로비저닝 과다**(사양이 남아 비용 낭비), **프로비저닝 부족**(사양이 모자라 성능 저하), **최적화됨**으로 나눠 표시합니다.
- **비용과 성능을 동시에 봅니다** — 비용만 깎는 도구가 아니라 모자란 쪽도 짚어 준다는 점을 기억하시기 바랍니다.
- **권장만 하고 바꾸지는 않습니다** — 실제로 인스턴스 유형을 변경하는 것은 사용자의 몫입니다.

## 요금 모델

- **기본 권장 사항은 무료입니다.** 서비스를 켜고 권장 사항을 받아 보는 데 추가 요금이 붙지 않습니다.
- 더 긴 기간의 지표를 분석하는 **향상된 인프라 지표**는 분석 대상 리소스 수 기준으로 요금이 붙는 선택 기능입니다.
- 물론 실제로 돌리고 있는 EC2·EBS·Lambda 자체의 요금은 별도입니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-trusted-advisor]] | Trusted Advisor는 비용·성능·보안·내결함성·서비스 한도 **5개 범주 전반**을 점검합니다. Compute Optimizer는 **리소스 크기 하나**를 깊게 파고듭니다 |
| [[aws-cost-explorer]] | Cost Explorer는 **돈이 어디에 얼마나 나갔는지** 보여 줍니다. Compute Optimizer는 **어떤 사양으로 바꾸라**고 알려 줍니다 |
| [[aws-well-architected-tool]] | Compute Optimizer는 **리소스 단위** 권장, Well-Architected Tool은 **워크로드 전체를 6개 기둥 기준으로 검토**합니다 |

## 시험 포인트

- [ ] "인스턴스 크기가 적절한지", "라이트사이징", "프로비저닝 과다"가 보이면 Compute Optimizer입니다
- [ ] "서비스 한도(할당량)에 근접했다"는 Compute Optimizer가 아니라 Trusted Advisor입니다
- [ ] 권장 사항만 제시하고 자동으로 변경하지는 않습니다
- [ ] 분석 근거는 CloudWatch 지표입니다
- [ ] 기본 권장 사항에는 추가 요금이 없습니다

## 관련 노트

- 모듈: [[11-billing-support]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
