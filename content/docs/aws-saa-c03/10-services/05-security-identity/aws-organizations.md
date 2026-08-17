---
title: "AWS Organizations"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> 계정이 여러 개인 지문의 뿌리. **SCP 는 권한을 주지 않고 깎기만 한다**

## 한 줄로 말하면

여러 AWS 계정을 하나로 묶어 **통합 결제**하고 **서비스 제어 정책(SCP)** 으로 한도를 겁니다.

## 핵심 개념

**SCP — 시험이 가장 많이 묻는 것**

- **상한선일 뿐입니다.** SCP 가 허용해도 IAM 이 허용하지 않으면 안 됩니다. **권한을 부여하지 않습니다**
- **조직 단위(OU)** 에 붙여 계정 묶음을 한꺼번에 통제합니다. `개발 계정에서는 프로덕션 리전을 못 쓰게` · `특정 서비스 사용 금지` 의 답
- **관리 계정에는 SCP 가 적용되지 않습니다.** 그래서 관리 계정에 워크로드를 두지 말라는 것이 원칙입니다
- `루트 사용자로 뭘 못 하게` · `모든 계정에서 특정 리전 차단` 도 SCP 입니다
- IAM 권한 경계와 헷갈립니다 — **경계는 주체 하나**, **SCP 는 계정 전체**입니다

**통합 결제**

- **사용량이 합산**되어 볼륨 할인 구간에 빨리 닿습니다
- **예약 인스턴스·Savings Plans 가 계정 간에 공유**됩니다. `여러 계정의 RI 를 효율적으로` 의 답
- 결제는 한 곳에서, 계정별 비용은 [[aws-cost-explorer\|Cost Explorer]] 로 봅니다

**함께 나오는 것들**

- **[[aws-ram\|RAM]]** — 서브넷·Transit Gateway 같은 자원을 계정 간 공유
- **[[aws-iam-identity-center\|IAM Identity Center]]** — 조직 전체 로그인
- **AWS Control Tower** — 랜딩 존을 자동으로 세워 줍니다. `새 계정을 표준 규칙대로 빠르게 만들어야` 의 답
- **CloudTrail 조직 추적**·**Config 집계자**·**[[aws-firewall-manager\|Firewall Manager]]** — 전 계정 일괄 적용
- **태그 정책**으로 태그 규칙을 강제합니다

## 요금 모델

- Organizations 자체는 무료입니다
- 이득은 **통합 결제의 볼륨 할인과 RI/SP 공유**에서 나옵니다. 비용 문항에서 `계정이 여러 개` 가 보이면 이 두 가지를 먼저 떠올립니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-iam\|IAM 정책]] | IAM 은 권한을 **줍니다**. SCP 는 **한도**만 |
| 권한 경계 | 주체 하나의 한도. SCP 는 계정·OU |
| Control Tower | 계정을 **만들고 표준을 적용**하는 자동화 |

## 시험 포인트

- [ ] `모든 계정에서 특정 서비스/리전 금지` → **SCP**
- [ ] SCP 만으로 권한이 생긴다는 보기 → 오답
- [ ] **관리 계정에는 SCP 가 안 걸립니다**
- [ ] `여러 계정의 RI/Savings Plans 공유` → **통합 결제**
- [ ] `표준 규칙대로 새 계정 자동 생성` → **Control Tower**
- [ ] `서브넷을 다른 계정과 공유` → **RAM**

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]] · [[11-cost-storage\|4.1 비용 최적화]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Organizations](/docs/aws-clf-c02/10-services/05-security-identity/aws-organizations)
