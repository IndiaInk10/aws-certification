---
title: "AWS Directory Service"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> `Active Directory` 라는 낱말이 지문에 있으면 여기부터 본다

## 한 줄로 말하면

AWS 에서 Microsoft Active Directory 를 쓰게 해 줍니다. 윈도우 워크로드와 기업 인증이 걸린 지문에 등장합니다.

## 핵심 개념

**세 가지 유형을 가릅니다**

| | 언제 |
|---|---|
| **AWS Managed Microsoft AD** | AWS 안에 **진짜 AD** 가 필요할 때. 온프레미스 AD 와 **신뢰 관계**를 맺습니다. 그룹 정책·스키마 확장이 필요하면 이것 |
| **AD Connector** | 인증을 **온프레미스 AD 로 그대로 넘깁니다**. AWS 에 사용자를 복제하지 않습니다. `기존 AD 를 그대로 쓰되 AWS 에 디렉터리를 두고 싶지 않다` |
| **Simple AD** | 저렴한 소규모용. 신뢰 관계·스키마 확장 불가 |

- **[[amazon-fsx\|FSx for Windows File Server]]** 는 AD 가 있어야 동작합니다. 이 조합이 자주 함께 나옵니다
- **EC2 윈도우 인스턴스를 도메인에 조인**할 수 있습니다
- **RDS for SQL Server** 의 윈도우 인증에도 씁니다
- **[[aws-iam-identity-center\|IAM Identity Center]] 의 자격 증명 소스**로 쓸 수 있습니다 — 직원이 AD 계정으로 AWS 콘솔에 로그인
- **다중 AZ 로 배포**되어 관리형으로 운영됩니다

## 요금 모델

- **디렉터리 유형·크기별 시간당 요금** 입니다
- AD Connector 가 Managed Microsoft AD 보다 쌉니다 — 디렉터리를 실제로 운영하지 않기 때문입니다
- `저렴하게, 기존 AD 재사용` → AD Connector 가 유리한 이유입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-iam-identity-center\|IAM Identity Center]] | AWS 계정 **접근**을 관리. Directory Service 는 **디렉터리 자체** |
| [[amazon-cognito\|Cognito]] | 앱 고객 로그인 |
| [[aws-iam\|IAM]] | AWS 자원 권한 |

## 시험 포인트

- [ ] `온프레미스 AD 와 신뢰 관계` → **Managed Microsoft AD**
- [ ] `기존 AD 로 인증을 넘기기만` → **AD Connector**
- [ ] `FSx for Windows File Server` 구성에는 AD 가 필요
- [ ] `윈도우 EC2 를 도메인 조인` → Directory Service
- [ ] 직원의 AWS 콘솔 로그인 자체는 **IAM Identity Center** 가 앞단

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Directory Service](/docs/aws-clf-c02/10-services/05-security-identity/aws-directory-service)
