---
title: "AWS Control Tower"
tags: [aws, clf-c02, service, 보안-자격증명]
category: 05-보안-자격증명
module: 10
status: 미학습
---

> 다계정 환경을 모범 사례대로 자동 셋업

| | |
|---|---|
| **카테고리** | 05-보안-자격증명 |
| **배우는 모듈** | [[10-monitoring-governance]] |
| **문제은행 출현** | 2회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

다계정 AWS 환경을 **모범 사례에 맞춰 자동으로 구성**해 주는 서비스입니다.

## 핵심 개념

- **랜딩 존(Landing Zone) 자동 구성** — 다계정 환경의 뼈대를 몇 번의 클릭으로 만들어 줍니다. 조직과 OU, 로그 보관 계정, 감사 계정, 자격 증명 연동까지 한 번에 잡아 줍니다.
- **가드레일(컨트롤)** — 미리 준비된 규칙을 켜서 계정들이 정책 밖으로 나가지 못하게 합니다. **예방형**은 애초에 못 하도록 막고, **탐지형**은 위반을 찾아 알려 줍니다.
- **Account Factory** — 새 계정을 요청하면 표준 설정이 적용된 상태로 자동 발급합니다. 계정마다 사람이 손으로 설정하지 않아도 됩니다.
- **대시보드** — 모든 계정의 규정 준수 상태를 한 화면에서 확인하실 수 있습니다.
- **다른 서비스를 조합해 동작합니다** — 내부적으로 [[aws-organizations]], [[aws-config]], CloudTrail, IAM Identity Center를 엮어 씁니다. Control Tower를 쓴다는 것은 Organizations를 쓴다는 뜻이기도 합니다.

## 요금 모델

- **Control Tower 자체에는 추가 요금이 없습니다.**
- 대신 랜딩 존이 켜 놓는 **밑단 서비스의 사용량**에 요금이 붙습니다. AWS Config 규칙 평가, CloudTrail 기록, 로그를 담는 S3 스토리지 등입니다.
- 계정 수와 켜 둔 가드레일 수가 늘어나면 이 밑단 비용도 함께 늘어납니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-organizations]] | Organizations는 계정을 묶고 SCP·통합 결제를 제공하는 **기반**이고, Control Tower는 그 위에 모범 사례 환경을 **자동으로 깔아 주는** 상위 도구입니다 |
| [[aws-config]] | Config는 리소스 구성의 규정 준수를 평가하는 엔진이고, Control Tower는 그 규칙을 **가드레일로 포장해** 여러 계정에 일괄 적용합니다 |
| [[aws-service-catalog]] | Service Catalog는 승인된 **제품(템플릿) 목록**을 사용자에게 제공하고, Control Tower는 **계정 환경 자체**를 만들어 줍니다 |

## 시험 포인트

- [ ] "**랜딩 존**", "다계정 환경을 **빠르게 설정**", "**가드레일**", "모범 사례에 따라 자동 구성" → Control Tower
- [ ] "계정을 묶는다", "SCP", "**통합 결제**"까지만 나오면 Organizations입니다. Control Tower까지 갈 필요가 없습니다
- [ ] Control Tower는 Organizations를 **대체하지 않습니다.** 그 위에 얹혀 동작합니다
- [ ] 서비스 자체는 무료이고, 밑에서 돌아가는 Config·CloudTrail·S3 요금은 따로 냅니다

## 관련 노트

- 모듈: [[10-monitoring-governance]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
