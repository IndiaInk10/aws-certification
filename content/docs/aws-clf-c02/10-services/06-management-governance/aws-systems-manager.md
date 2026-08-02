---
title: "AWS Systems Manager"
tags: [aws, clf-c02, service, 관리-거버넌스]
category: 06-관리-거버넌스
module: 9
status: 미학습
---

> 운영 중인 인스턴스를 원격 관리·패치

| | |
|---|---|
| **카테고리** | 06-관리-거버넌스 |
| **배우는 모듈** | [[09-security]] |
| **문제은행 출현** | 20회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

흩어져 있는 서버들을 한곳에서 운영합니다. 패치, 인벤토리, 원격 접속, 설정 값 보관이 이 서비스 안에 모여 있습니다.

## 핵심 개념

- **Session Manager** — SSH 키도, 배스천 호스트도, 22번 포트 개방도 없이 인스턴스 셸에 접속합니다. 접속 기록까지 남으므로 보안 문제에서 자주 정답이 됩니다.
- **Patch Manager** — 운영 체제와 소프트웨어 패치를 정해진 일정에 맞춰 여러 서버에 자동으로 적용합니다.
- **Parameter Store** — 설정 값이나 연결 문자열 같은 데이터를 안전하게 보관하고 애플리케이션에서 불러 씁니다. KMS로 암호화할 수 있습니다.
- **인벤토리와 Run Command** — 어느 서버에 무엇이 설치되어 있는지 수집하고, 여러 서버에 명령을 한 번에 실행합니다.
- **하이브리드 관리** — EC2뿐 아니라 **온프레미스 서버와 다른 클라우드의 서버**도 같은 콘솔에서 관리 대상으로 넣을 수 있습니다.
- **SSM 에이전트가 필요합니다** — 관리 대상에 에이전트가 설치되어 있어야 하고, 최신 Amazon Linux나 Windows AMI에는 기본으로 들어 있습니다.

## 요금 모델

- **상당수 핵심 기능이 무료입니다.** Session Manager, Run Command, Patch Manager, 인벤토리, Parameter Store의 표준 파라미터는 추가 요금 없이 쓰실 수 있습니다.
- 고급 파라미터, 자동화 단계 실행, OpsCenter 같은 일부 기능은 사용량 기준으로 과금합니다.
- 관리 대상이 되는 EC2 인스턴스 자체의 요금은 당연히 별도입니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-secrets-manager]] | 둘 다 값을 보관하지만, **자동 교체(rotation)** 가 필요한 데이터베이스 자격 증명은 Secrets Manager, 단순 설정 값은 Parameter Store입니다 |
| [[aws-config]] | Systems Manager는 **직접 조치**(패치 적용·명령 실행), Config는 **상태 기록과 규정 준수 평가**입니다 |
| [[aws-opsworks]] | AWS 기본 도구로 운영하려면 Systems Manager, 기존 **Chef/Puppet** 자산을 쓰려면 OpsWorks입니다 |

## 시험 포인트

- [ ] "패치를 자동으로 적용", "여러 서버에 명령 일괄 실행", "인벤토리 수집"이 보이면 Systems Manager입니다
- [ ] **"SSH 키 없이, 포트를 열지 않고 인스턴스에 접속"** 은 Session Manager가 정답입니다
- [ ] "자동으로 교체되는 DB 자격 증명"은 Parameter Store가 아니라 Secrets Manager입니다
- [ ] 온프레미스 서버까지 관리 대상에 넣을 수 있다는 점이 종종 물어집니다
- [ ] 핵심 기능 대부분이 추가 요금 없이 제공됩니다

## 관련 노트

- 모듈: [[09-security]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
