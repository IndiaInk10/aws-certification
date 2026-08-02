---
title: "AWS Security Hub"
tags: [aws, clf-c02, service, 보안-자격증명]
category: 05-보안-자격증명
module: 9
status: 미학습
---

> 보안 경보를 한 대시보드로 모음

| | |
|---|---|
| **카테고리** | 05-보안-자격증명 |
| **배우는 모듈** | [[09-security]] |
| **문제은행 출현** | 6회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

여러 보안 서비스가 내놓은 결과를 **한 대시보드로 모아** 보안 상태를 한눈에 보여 주는 서비스입니다.

## 핵심 개념

- **집계가 목적입니다** — GuardDuty, Inspector, Macie, IAM Access Analyzer, Config 등이 각각 만들어 내는 조사 결과를 한곳에 모읍니다. 서비스마다 콘솔을 옮겨 다니지 않아도 됩니다.
- **형식을 통일해 줍니다** — 서로 다른 서비스의 결과를 공통 형식으로 맞춰 주므로 심각도를 나란히 놓고 우선순위를 정하실 수 있습니다. 서드 파티 보안 제품의 결과도 받아들입니다.
- **보안 표준 자동 점검** — CIS AWS Foundations Benchmark, PCI DSS, AWS 기초 보안 모범 사례 같은 표준에 맞춰 계정을 자동 점검하고 **보안 점수**를 매깁니다.
- **다계정 통합** — [[aws-organizations]]와 연동하면 조직 전체의 보안 상태를 관리 계정 한 곳에서 보실 수 있습니다.
- **자동 대응 연결** — 결과를 EventBridge로 흘려보내 티켓 생성이나 자동 조치를 붙일 수 있습니다.

## 요금 모델

- **실행한 보안 검사 횟수**와 **수집한 조사 결과 건수**를 기준으로 과금됩니다.
- 무료 평가 기간이 제공되어 규모를 미리 확인하실 수 있습니다.
- Security Hub 요금과 별개로, GuardDuty·Inspector·Macie 같은 **원본 서비스의 요금은 각각 따로** 냅니다. 모아 본다고 원본이 공짜가 되지는 않습니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-guardduty]] | GuardDuty는 위협을 **찾아내는** 탐지기이고, Security Hub는 그 결과를 **모아 보여 주는** 곳입니다 |
| [[aws-config]] | Config는 리소스 **구성 변경**을 기록하고 규칙 위반을 평가합니다. Security Hub는 그 결과까지 포함해 보안 전반을 집계합니다 |
| [[aws-artifact]] | Artifact는 **AWS의 감사 보고서**를 내려받는 곳이지, 내 환경을 점검하지 않습니다 |
| [[aws-trusted-advisor]] | Trusted Advisor는 비용·성능·보안·내결함성 등 **전 영역의 권고**를 주고, Security Hub는 보안에 특화되어 있습니다 |

## 시험 포인트

- [ ] "여러 보안 서비스의 경보를 **한곳에서**", "보안 상태를 **종합해서** 본다" → Security Hub
- [ ] Security Hub는 스스로 위협을 탐지하지 않습니다. **탐지는 GuardDuty·Inspector·Macie**가 합니다
- [ ] "CIS 벤치마크 같은 **보안 표준 준수 점검**"도 Security Hub의 기능입니다
- [ ] AWS의 규정 준수 **보고서 다운로드**는 Artifact입니다. 역할이 비슷해 보여 자주 헷갈립니다

## 관련 노트

- 모듈: [[09-security]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
