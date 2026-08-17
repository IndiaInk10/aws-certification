---
title: "1.3 적합한 데이터 보안 제어 결정"
description: "저장 중·전송 중 암호화 · 키를 누가 쥐는가 · 지워지지 않게 하기"
tags: [saa-c03, 도메인1, 과제명세]
kind: domain
module: 3
status: 미학습
---

> 도메인 1 · 보안 아키텍처 설계 **30%** · 과제 명세 3개 중 **세 번째**

## 1. 왜 필요한가

> 암호화 문항의 승부는 알고리즘이 아니라 **키를 누가 쥐고 누가 돌리느냐**에서 납니다.

이 과제는 "암호화를 켜라"를 묻지 않습니다. 그건 대부분 체크박스 하나입니다.
묻는 것은 **어떤 방식의 암호화인가** 입니다. AWS 가 키를 관리하는지, 내가 만든 키인지,
내가 키를 직접 들고 와야 하는지, 전용 하드웨어가 필요한지.

여기에 규정 준수 요구가 붙습니다. `키를 우리가 통제해야 한다` · `키 사용 기록이 남아야 한다` ·
`한 번 쓴 데이터는 지워지면 안 된다` 같은 조건이 붙으면 답이 하나로 좁혀집니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[aws-kms\|AWS KMS]] | 암호화 키 관리 | 이 과제의 중심. 대부분의 서비스가 여기 키를 쓴다 |
| [[aws-cloudhsm\|AWS CloudHSM]] | 나만 쓰는 전용 암호화 하드웨어 | AWS 조차 키에 못 닿아야 할 때 |
| [[amazon-macie\|Amazon Macie]] | S3 안의 민감 데이터를 찾아낸다 | 개인정보가 어디 있는지 모를 때 |
| [[aws-certificate-manager\|AWS Certificate Manager]] | TLS 인증서 발급·자동 갱신 | 전송 중 암호화 |
| [[aws-secrets-manager\|AWS Secrets Manager]] | 비밀 보관 + 자동 교체 | 자격 증명 자체의 보호 |
| [[amazon-s3\|Amazon S3]] | 객체 스토리지 | 암호화·버전 관리·객체 잠금이 전부 여기서 나온다 |
| [[aws-backup\|AWS Backup]] | 백업 정책을 한 곳에서 | 보존 기간과 규정 준수 |

## 3. 이 과제가 묻는 것

**저장 중 암호화 — S3 를 예로 네 갈래**

| | 키를 만드는 쪽 | 키를 보관하는 쪽 | 언제 |
|---|---|---|---|
| **SSE-S3** | AWS | AWS | 기본값. 요구가 없으면 이걸로 충분 |
| **SSE-KMS** | 내가 KMS 에서 | KMS | **키 사용 기록이 CloudTrail 에 남아야** 할 때 |
| **SSE-C** | 내가 | **내가** (요청마다 키를 보낸다) | AWS 에 키를 두면 안 될 때 |
| **클라이언트 측** | 내가 | 내가 | 올리기 **전에** 이미 암호화되어야 할 때 |

**KMS 키 두 종류**

| | 누가 만드나 | 회전 | 정책 |
|---|---|---|---|
| **AWS 관리형 키** | 서비스가 알아서 | 자동 | 손댈 수 없다 |
| **고객 관리형 키(CMK)** | 내가 | 켤 수 있다 | **키 정책으로 누가 쓸지 통제** |

지문에 `키를 우리가 통제` · `사용 권한을 계정별로` · `교차 계정으로 키를 공유` 가 있으면 **고객 관리형 키**입니다.
`AWS 도 접근할 수 없는 전용 하드웨어` · `FIPS 140-2 레벨 3` 이면 **CloudHSM** 입니다.

**전송 중 암호화**

- **ACM** 이 인증서를 발급하고 **자동으로 갱신**합니다. 갱신을 사람이 하는 보기는 대개 오답
- ACM 인증서는 **ELB · CloudFront · API Gateway** 에 붙입니다. EC2 에 직접 설치하는 용도가 아닙니다
- CloudFront 에 붙일 인증서는 **us-east-1** 에 있어야 합니다

**지워지지 않게 하기**

| | 무엇을 막나 |
|---|---|
| **버전 관리** | 덮어쓰기·삭제를 되돌릴 수 있게. 삭제 표식만 붙는다 |
| **MFA 삭제** | 버전을 영구 삭제하려면 MFA 를 요구 |
| **S3 객체 잠금** | 정해진 기간 동안 **누구도** 못 지운다. 규정 준수 모드면 루트도 못 푼다 |
| **백업 볼트 잠금** | AWS Backup 쪽의 같은 개념 |

**퍼블릭 노출 막기** — `버킷이 실수로 공개되지 않도록` 이 나오면 **S3 퍼블릭 액세스 차단**입니다.
계정 수준에서 켜면 버킷 정책이 무엇이든 공개되지 않습니다.

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `암호화를 켜야 한다` (조건 없음) | **SSE-S3**. 가장 단순한 답 |
| `키 사용 내역을 감사` · `키 정책으로 통제` | **SSE-KMS + 고객 관리형 키** |
| `AWS 가 키에 접근할 수 없어야` | **SSE-C** 또는 클라이언트 측 암호화 |
| `전용 하드웨어` · `FIPS 140-2 레벨 3` | **CloudHSM** |
| `인증서 갱신을 잊지 않도록` | **ACM** (자동 갱신) |
| `보존 기간 동안 삭제 불가` · `규정 준수 감사` | **S3 객체 잠금** |
| `실수로 지운 파일을 복구` | **버전 관리** |
| `버킷에 개인정보가 있는지 모르겠다` | **Macie** |
| `비밀번호를 30일마다 자동 교체` | **Secrets Manager** |
| `여러 서비스의 백업 보존 정책을 한 곳에서` | **AWS Backup** |

> [!tip] 암호화 문항이 어려워 보일 때
> 대부분은 **키를 누가 쥐느냐** 한 축으로 정리됩니다.
> AWS → SSE-S3, 나(AWS 안에) → SSE-KMS, 나(AWS 밖에) → SSE-C, 전용 장비 → CloudHSM.
> 이 순서로 통제 강도가 세지고 운영 부담도 같이 세집니다.

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

  "AWS IAM"
  "IAM Identity Center"
  "AWS Organizations"
  "AWS Directory Service"
  "Amazon Cognito"
  "AWS RAM"
  "AWS Secrets Manager"
  "AWS Control Tower"
}
"1.2 안전한 워크로드 및 애플리케이션 설계": {
  grid-rows: 3
  *.width: 190
  *.style.font-size: 12

  "Amazon VPC"
  "AWS PrivateLink"
  "AWS WAF"
  "AWS Shield"
  "AWS Firewall Manager"
  "Amazon GuardDuty"
  "Amazon Inspector"
  "AWS Systems Manager"
  "Elastic Load Balancing"
}
"1.3 적합한 데이터 보안 제어 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "AWS KMS"
  "AWS CloudHSM"
  "Amazon Macie"
  "AWS Certificate Manager"
  "Amazon S3"
  "AWS Backup"
}
```

## 6. 셀프 체크

- [ ] SSE-S3 와 SSE-KMS 를 가르는 결정적 요구사항을 하나 댄다
- [ ] 고객 관리형 키를 써야만 하는 상황을 든다
- [ ] ACM 인증서를 EC2 에 직접 붙일 수 없다는 것을 안다
- [ ] 버전 관리와 객체 잠금이 각각 무엇을 막는지 구분한다
- [ ] `삭제되면 안 된다` 와 `실수로 지운 것을 되돌린다` 의 답이 다르다는 것을 안다

---

> 더 기초부터: [CLF-C02 의 AWS KMS](/docs/aws-clf-c02/10-services/05-security-identity/aws-kms)
