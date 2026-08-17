---
title: "AWS IAM Identity Center"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **직원이 여러 계정에 로그인**하는 문제의 답. 계정마다 IAM 사용자를 만드는 보기는 오답

## 한 줄로 말하면

한 번 로그인해 **조직 안의 여러 AWS 계정과 역할**을 오갑니다. 예전 이름은 AWS SSO 입니다.

## 핵심 개념

- **계정이 늘어날수록 답이 됩니다** — 계정마다 IAM 사용자를 만들면 입사·퇴사·권한 변경이 계정 수만큼 늘어납니다. `운영 부담 최소` 지문의 표준 정답
- **기존 회사 디렉터리를 그대로** 씁니다 — Active Directory · Okta · Entra ID 를 **SAML/SCIM 으로 연결**합니다. `직원 계정을 다시 만들지 않고` 가 신호입니다
- **권한 집합(permission set)** — 역할 템플릿을 만들어 그룹×계정에 배정합니다. 그룹 하나 바꾸면 여러 계정에 반영됩니다
- **[[aws-organizations\|Organizations]] 위에서 동작**합니다
- **MFA**를 중앙에서 강제할 수 있습니다
- **퇴사 처리**가 한 곳에서 끝납니다 — 디렉터리에서 지우면 모든 계정 접근이 사라집니다

## 요금 모델

무료입니다. 연결하는 디렉터리(Managed Microsoft AD 등)에는 요금이 붙을 수 있습니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-cognito\|Cognito]] | Cognito 는 **앱 고객**, Identity Center 는 **직원** |
| [[aws-iam\|IAM 사용자]] | 계정마다 만들어야 해 확장이 안 됩니다 |
| [[aws-directory-service\|Directory Service]] | 디렉터리 자체를 AWS 에서 운영. Identity Center 는 그 위의 접근 계층 |

## 시험 포인트

- [ ] `직원이 여러 계정에 로그인` → **IAM Identity Center**
- [ ] `기존 Active Directory 그대로` → 디렉터리 연동
- [ ] 계정마다 IAM 사용자를 만드는 보기 → 오답
- [ ] `권한 변경을 한 곳에서` → **권한 집합 + 그룹**
- [ ] 앱 사용자 로그인이면 Cognito

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS IAM Identity Center](/docs/aws-clf-c02/10-services/05-security-identity/aws-iam-identity-center)
