---
title: "1.1 AWS 리소스에 대한 보안 액세스 설계"
description: "누가 무엇을 할 수 있는가 — IAM 역할 · 교차 계정 · 페더레이션"
tags: [saa-c03, 도메인1, 과제명세]
kind: domain
module: 1
status: 미학습
---

> 도메인 1 · 보안 아키텍처 설계 **30%** · 과제 명세 3개 중 **첫 번째**

## 1. 왜 필요한가

> 보안 문항의 절반은 "권한을 어떻게 주느냐"이고, 정답은 거의 항상 **역할**입니다.

SAA 에서 도메인 1 이 30% 로 가장 큽니다. 그런데 이 과제가 묻는 것은 암호화가 아니라
**"이 주체가 저 리소스에 어떻게 닿는가"** 한 가지입니다.

그리고 이 질문의 답은 놀랄 만큼 자주 같습니다. **IAM 역할.**
EC2 가 S3 를 읽어야 하면 역할, Lambda 가 DynamoDB 를 써야 하면 역할,
다른 계정이 내 버킷을 봐야 하면 역할, 사내 계정으로 로그인하고 싶어도 역할입니다.

그래서 이 과제는 외울 것이 적은 대신 **오답을 알아보는 눈**이 중요합니다.
보기에 액세스 키가 등장하면 대개 그것이 틀린 답입니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[aws-iam\|AWS IAM]] | 누가 무엇을 할 수 있는지 정한다 | 이 과제의 중심. 사용자·그룹·**역할**·정책 |
| [[aws-iam-identity-center\|IAM Identity Center]] | 여러 계정에 한 번에 로그인 | 계정이 여러 개일 때의 사람 로그인 |
| [[aws-organizations\|AWS Organizations]] | 계정을 묶고 정책을 위에서 건다 | SCP 로 **최대 권한의 천장**을 씌운다 |
| [[aws-directory-service\|AWS Directory Service]] | Microsoft AD 를 AWS 와 잇는다 | 온프레미스 AD 통합 시나리오 |
| [[amazon-cognito\|Amazon Cognito]] | 앱 사용자의 가입·로그인 | 손님용 인증. IAM 은 직원용 |
| [[aws-ram\|AWS RAM]] | 리소스를 다른 계정과 공유 | 서브넷·Transit Gateway 를 계정끼리 나눠 쓸 때 |
| [[aws-secrets-manager\|AWS Secrets Manager]] | 비밀번호·키 보관과 **자동 교체** | 자격 증명을 코드 밖으로 |
| [[aws-control-tower\|AWS Control Tower]] | 다계정 환경을 정해진 모양으로 세운다 | 새 계정을 규칙에 맞게 찍어낼 때 |

## 3. 이 과제가 묻는 것

**정책이 어떻게 합쳐지는가**

| 정책 종류 | 어디에 붙나 | 언제 쓰나 |
|---|---|---|
| 자격 증명 기반 | 사용자·그룹·역할 | 기본. "이 주체가 무엇을 할 수 있는가" |
| 리소스 기반 | S3 버킷 · KMS 키 · SQS 큐 … | 리소스 쪽에서 "누구를 들일지" 정한다. **교차 계정에 필수** |
| 서비스 제어 정책(SCP) | Organizations 의 OU·계정 | 허용이 아니라 **천장**. 여기서 막으면 관리자도 못 한다 |
| 권한 경계 | 사용자·역할 | 그 주체가 가질 수 있는 최대치 |

명시적 **거부(Deny)가 언제나 이깁니다.** 어디 한 군데서 거부하면 다른 곳에서 아무리 허용해도 안 됩니다.

**역할을 쓰는 네 가지 자리**

1. **EC2·Lambda 같은 서비스가** AWS API 를 부를 때 → 인스턴스 프로파일 / 실행 역할
2. **다른 계정이** 내 리소스를 쓸 때 → 역할 수임(AssumeRole) + 신뢰 정책
3. **사내 계정으로** AWS 에 로그인할 때 → 페더레이션 (SAML · IAM Identity Center)
4. **앱 사용자가** AWS 리소스에 닿을 때 → Cognito 자격 증명 풀

**AD 통합 세 갈래** — 실제 시험에서 온프레미스 MS AD 통합 시나리오가 나왔다는 보고가 있습니다.

| | 언제 |
|---|---|
| **AWS Managed Microsoft AD** | AWS 안에 진짜 AD 를 세운다. 온프레미스와 신뢰 관계도 맺을 수 있다 |
| **AD Connector** | 인증을 온프레미스 AD 로 **넘기기만** 한다. AWS 에 사용자를 두지 않는다 |
| **Simple AD** | 작고 싼 AD 호환. 신뢰 관계나 고급 기능이 필요 없을 때 |

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `EC2 에서 S3 에 접근` | **IAM 역할**. 인스턴스에 키를 넣는 보기는 오답 |
| `액세스 키를 코드에`, `키를 환경 변수에` | 거의 항상 **오답 보기**. 역할이나 Secrets Manager 로 간다 |
| `다른 AWS 계정이 접근` | **역할 수임** + 리소스 기반 정책 |
| `조직 전체에서 이 리전만 허용` · `루트 사용자도 못 하게` | **SCP** |
| `사내 계정으로 로그인` · `SSO` | **IAM Identity Center** 또는 SAML 페더레이션 |
| `앱 사용자 수백만 명의 가입·로그인` | **Cognito**. IAM 사용자를 만들어 주는 보기는 오답 |
| `온프레미스 AD 를 그대로` | **Directory Service** — 셋 중 어느 것인지는 위 표로 |
| `데이터베이스 비밀번호를 주기적으로 교체` | **Secrets Manager** (자동 교체가 결정적) |
| `설정값을 저장, 교체는 필요 없고 저렴하게` | **Parameter Store** |
| `서브넷을 다른 계정과 공유` | **RAM** |

> [!tip] 최소 권한은 답이 아니라 채점 기준입니다
> 두 보기가 다 동작한다면 **권한을 덜 주는 쪽**이 정답입니다.
> `모든 리소스에 대한 전체 액세스` 같은 표현이 보이면 그 보기는 지우세요.

## 5. 여기까지의 지도

주황색이 이번 과제에서 **처음** 나온 서비스입니다.

```d2
classes: {
  new: {
    style: {
      fill: "#ff9900"
      stroke: "#232f3e"
      stroke-width: 2
      font-color: "#111111"
    }
  }
}

grid-columns: 1
grid-gap: 16

"1.1 AWS 리소스에 대한 보안 액세스 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "AWS IAM"
  "IAM Identity Center"
  "AWS Organizations"
  "AWS Directory Service"
  "Amazon Cognito"
  "AWS RAM"
  "AWS Secrets Manager"
  "AWS Control Tower"
}
```

## 6. 셀프 체크

- [ ] EC2 가 S3 를 읽게 하는 방법을 두 가지 대고, 왜 하나가 오답인지 말할 수 있다
- [ ] 리소스 기반 정책이 **꼭 필요한** 상황을 하나 든다
- [ ] SCP 가 허용 정책이 아니라 천장이라는 말의 뜻을 설명한다
- [ ] Managed Microsoft AD 와 AD Connector 를 가르는 한 문장을 안다
- [ ] IAM 과 Cognito 를 각각 누구를 위한 것인지로 구분한다

---

> 더 기초부터: [CLF-C02 의 보안 모듈](/docs/aws-clf-c02/20-course/09-security)
