---
title: "AWS IAM Identity Center"
tags: [aws, clf-c02, service, 보안-자격증명]
category: 05-보안-자격증명
module: 9
status: 미학습
---

> 기존 자격 증명 소스 → 여러 AWS 계정·애플리케이션에 Single Sign-On

| | |
|---|---|
| **카테고리** | 05-보안-자격증명 |
| **배우는 모듈** | [[09-security]] |
| **문제은행 출현** | — |
| **상태** | - 미학습 |

## 한 줄로 말하면

직원이 **한 번만 로그인해서** 여러 AWS 계정과 업무 애플리케이션에 들어가게 해 주는 **Single Sign-On** 서비스입니다. (예전 이름은 AWS Single Sign-On입니다.)

## 핵심 개념

- **한 번 로그인, 여러 계정** — 계정마다 IAM 사용자를 따로 만들어 두는 대신, 한 번의 인증으로 접근이 허용된 모든 계정에 들어갑니다. 접속 포털이 하나로 정리됩니다.
- **기존 자격 증명 소스를 그대로 씁니다** — Microsoft Active Directory, 외부 자격 증명 공급자(SAML 2.0 지원 IdP), 또는 Identity Center 자체 디렉터리 중에서 고르실 수 있습니다. **"이미 쓰던 사원 계정을 그대로 활용"** 이 이 서비스의 핵심 문구입니다.
- **권한 세트(permission set)** — "개발자", "읽기 전용 감사자"처럼 권한 묶음을 한 번 정의해 두고, 어떤 그룹이 어떤 계정에서 그 권한을 쓸지 배정합니다. 계정이 늘어도 같은 세트를 재사용합니다.
- **AWS Organizations와 짝을 이룹니다** — 다계정 환경을 전제로 만들어진 서비스라, Organizations로 계정을 묶어 두고 Identity Center로 접근을 나누는 조합이 표준입니다.
- **임시 자격 증명을 씁니다** — 장기 액세스 키를 사람에게 나눠 주지 않으므로, 키 유출과 키 교체 관리 부담이 줄어듭니다.
- **AWS 밖의 앱도 붙습니다** — SAML을 지원하는 업무용 SaaS 애플리케이션도 같은 포털에 연결할 수 있습니다.

## 요금 모델

- **IAM Identity Center 자체는 추가 요금이 없습니다.** 로그인·권한 세트·포털 사용에 별도 비용이 붙지 않습니다.
- 자격 증명 소스로 [[aws-directory-service]]의 관리형 Microsoft AD를 새로 띄우면 **그 디렉터리 요금**은 별도로 냅니다.
- 로그인한 뒤 실제로 사용한 AWS 리소스 요금만 지불하시면 됩니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-iam]] | IAM은 **한 계정 안에서** 사용자·그룹·역할·정책으로 리소스 권한을 정하고, Identity Center는 **여러 계정에 걸친 사람의 로그인(SSO)** 을 담당합니다. "SSO", "기존 자격 증명 소스"가 보이면 Identity Center입니다 |
| [[amazon-cognito]] | Cognito는 내가 만든 **앱의 최종 사용자**(고객)에게 가입·로그인을 제공합니다. Identity Center는 **회사 직원**이 AWS에 들어가는 문입니다 |
| [[aws-organizations]] | Organizations는 **계정을 묶고 정책·청구를 통합**하고, Identity Center는 그 계정들에 **누가 들어갈지**를 정합니다. 함께 씁니다 |
| [[aws-directory-service]] | Directory Service는 디렉터리(사용자 저장소) 자체를 운영해 주고, Identity Center는 그 디렉터리를 **자격 증명 소스로 삼아** 접근을 배분합니다 |

## 시험 포인트

- [ ] "**Single Sign-On**", "**한 번의 로그인으로 여러 계정**", "**기존 자격 증명 소스를 그대로 활용**" → IAM Identity Center
- [ ] "여러 AWS 계정에 걸쳐 직원 접근을 중앙에서 관리한다"도 같은 신호입니다
- [ ] 함정: 같은 지문에 [[aws-iam]]이 보기로 나옵니다. IAM은 **계정 내부**의 권한이지 계정을 넘나드는 SSO가 아닙니다
- [ ] 함정: **앱 고객**의 로그인은 [[amazon-cognito]]입니다. 직원인지 고객인지로 갈립니다
- [ ] 예전 이름 **AWS Single Sign-On(AWS SSO)** 으로 나올 수도 있으니 같은 서비스로 보시면 됩니다

## 관련 노트

- 모듈: [[09-security]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
- AWS 공식 시험 가이드 In-Scope 서비스 목록
