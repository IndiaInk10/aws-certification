---
title: "AWS IAM"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> SAA 보안 문항의 정답은 거의 언제나 **역할(role)** 이다. 액세스 키를 심는 보기는 오답

## 한 줄로 말하면

누가 무엇을 할 수 있는지를 정합니다. 시험에서는 **"자격 증명을 저장하지 말고 역할을 맡아라"** 라는 한 문장으로 압축됩니다.

## 핵심 개념

**역할이 답이 되는 자리**

- **EC2 에서 S3 접근** → 인스턴스 프로파일(EC2 역할). 액세스 키를 인스턴스에 저장하는 보기는 항상 오답입니다
- **Lambda 에서 DynamoDB** → 실행 역할
- **계정을 넘는 접근** → 상대 계정에 역할을 만들고 **신뢰 정책**에 내 계정을 적은 뒤 `sts:AssumeRole`. 상대 계정에 IAM 사용자를 만드는 보기는 관리가 불가능해 오답입니다
- **외부 파트너** → 역할 + **external ID**
- **모바일·웹 앱 사용자** → [[amazon-cognito\|Cognito]] 로 로그인 → 임시 자격 증명. IAM 사용자를 사용자마다 만드는 보기는 오답입니다
- **온프레미스 서버** → IAM Roles Anywhere 또는 IAM Identity Center

**정책의 종류를 구분해야 합니다**

| | 무엇 |
|---|---|
| **자격 증명 기반** | 사용자·그룹·역할에 붙입니다 |
| **리소스 기반** | S3 버킷 정책, KMS 키 정책, SQS 정책처럼 **자원 쪽**에 붙습니다. 계정 간 접근에서 양쪽이 다 필요합니다 |
| **권한 경계** | 그 주체가 **넘을 수 없는 상한**. 위임하되 한도를 두고 싶을 때 |
| **[[aws-organizations\|SCP]]** | 계정 전체의 상한. 권한을 **주지는 않고 깎기만** 합니다 |

**평가 순서** — 명시적 **거부가 항상 이깁니다.** 그다음 명시적 허용, 아무것도 없으면 암묵적 거부입니다. `허용을 줬는데 안 된다` 면 SCP 나 NACL 이나 명시적 거부를 의심합니다.

**조건 키** — `aws:SourceIp`, `aws:PrincipalOrgID`, `aws:RequestedRegion`, `aws:MultiFactorAuthPresent` 로 좁힙니다. `조직 안에서만` 이면 `aws:PrincipalOrgID` 가 깔끔한 답입니다.

**액세스 분석기 · 자격 증명 보고서 · 마지막 사용 정보** — `과도한 권한을 찾아 줄여라` 면 이 세 가지가 답 쪽입니다. 특히 **IAM Access Analyzer** 는 외부에 열린 자원을 찾아냅니다.

## 요금 모델

무료입니다. 그래서 비용 문항에서는 IAM 자체가 변수가 되지 않고, **"권한을 줄여라"** 는 보안·거버넌스 쪽 답으로만 나옵니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-iam-identity-center\|IAM Identity Center]] | 사람의 **로그인**을 중앙에서. IAM 은 자원 접근 권한 |
| [[aws-organizations\|Organizations SCP]] | SCP 는 상한만, 권한을 주지 않습니다 |
| [[aws-secrets-manager\|Secrets Manager]] | IAM 은 AWS 접근, Secrets Manager 는 DB 비밀번호 같은 **값** |

## 시험 포인트

- [ ] 액세스 키를 코드·인스턴스·환경 변수에 넣는 보기 → **오답**
- [ ] 계정 간 접근 → **역할 + 신뢰 정책 + AssumeRole**
- [ ] `조직 안에서만` → 조건 키 `aws:PrincipalOrgID`
- [ ] `허용했는데 거부됨` → 명시적 거부 / SCP
- [ ] `위임하되 한도` → **권한 경계**
- [ ] `외부에 열린 자원 찾기` → **IAM Access Analyzer**

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]] · [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS IAM](/docs/aws-clf-c02/10-services/05-security-identity/aws-iam)
