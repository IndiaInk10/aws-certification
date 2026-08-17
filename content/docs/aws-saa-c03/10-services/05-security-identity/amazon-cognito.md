---
title: "Amazon Cognito"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **앱 사용자**의 로그인. 직원 로그인은 IAM Identity Center 다

## 한 줄로 말하면

모바일·웹 앱의 **최종 사용자** 로그인을 맡습니다. 사용자마다 IAM 사용자를 만들지 않아도 되는 이유입니다.

## 핵심 개념

**두 축을 구분해야 합니다**

| | 하는 일 |
|---|---|
| **사용자 풀** | 회원 가입·로그인·MFA·소셜 로그인·SAML 연동. **누구인지**를 확인 |
| **자격 증명 풀** | 로그인 결과를 **임시 AWS 자격 증명**으로 바꿔 줍니다. **무엇을 할 수 있는지** |

- `앱 사용자가 S3 에 직접 업로드해야` → **자격 증명 풀**로 임시 자격 증명. 앱에 액세스 키를 넣는 보기는 오답입니다
- `사용자마다 자기 폴더에만` → 자격 증명 풀 + IAM 정책의 정책 변수
- **API Gateway 권한 부여자**로 사용자 풀을 지정하면 토큰 검증을 API Gateway 가 대신합니다
- **소셜·기업 IdP 연동** — 구글·페이스북·애플·SAML·OIDC 를 사용자 풀에 붙입니다
- **MFA·비밀번호 정책·손상된 자격 증명 탐지**를 붙일 수 있습니다
- **게스트(미인증) 접근**도 자격 증명 풀로 줄 수 있습니다

## 요금 모델

- **월간 활성 사용자(MAU)** 기준입니다. 무료 구간이 있습니다
- 직접 인증 서버를 세워 EC2 로 운영하는 것보다 운영 부담과 비용이 낮아, `운영 부담 최소` 지문에서 유리합니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-iam-identity-center\|IAM Identity Center]] | **직원**이 AWS 계정에 로그인. Cognito 는 **앱 고객** |
| [[aws-iam\|IAM]] | IAM 사용자를 앱 사용자마다 만드는 것은 확장이 안 됩니다 |
| [[aws-directory-service\|Directory Service]] | 윈도우·AD 기반 회사 디렉터리 |

## 시험 포인트

- [ ] `모바일 앱 수백만 사용자 로그인` → **Cognito 사용자 풀**
- [ ] `앱에서 S3/DynamoDB 에 직접` → **자격 증명 풀**의 임시 자격 증명
- [ ] `API Gateway 에서 토큰 검증` → Cognito 권한 부여자
- [ ] 사용자마다 IAM 사용자를 만드는 보기 → 오답
- [ ] 직원의 AWS 콘솔 로그인이면 Cognito 가 아니라 **IAM Identity Center**

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Cognito](/docs/aws-clf-c02/10-services/05-security-identity/amazon-cognito)
