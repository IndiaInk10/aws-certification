---
title: "Amazon Macie"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> **S3 안에 개인정보가 있는지** 찾는다. 대상이 S3 라는 점이 핵심

## 한 줄로 말하면

머신러닝으로 S3 버킷을 훑어 **개인 식별 정보(PII)·신용카드 번호·자격 증명** 같은 민감 데이터를 찾아냅니다.

## 핵심 개념

- **대상은 S3 입니다.** RDS·EBS·DynamoDB 를 검사한다는 보기는 오답입니다
- `S3 에 개인정보가 섞여 있는지 모르겠다` · `규정 준수를 위해 민감 데이터를 식별` → Macie 입니다
- **사용자 지정 데이터 식별자**로 사내 형식(사번, 계약번호 등)을 찾을 수 있습니다
- **결과는 EventBridge·Security Hub 로** 보내 자동 대응을 붙입니다 — 찾으면 알림, 태그, 격리
- **버킷의 공개 여부·암호화 여부**도 함께 보고합니다
- **찾을 뿐 고치지 않습니다.** 암호화·차단은 다른 서비스가 합니다

## 요금 모델

- **버킷 목록 평가 + 검사한 데이터 양** 으로 붙습니다
- 전체를 매번 검사하면 비쌉니다 — **범위를 좁혀 예약 실행**하는 것이 비용 관리 방식입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-guardduty\|GuardDuty]] | 악성 **행위** 탐지. Macie 는 **데이터 내용** |
| Amazon Inspector | 소프트웨어 **취약점** |
| [[aws-kms\|KMS]] | 발견이 아니라 **암호화** |

## 시험 포인트

- [ ] `S3 에 PII 가 있는지 식별` → **Macie**
- [ ] RDS·EBS 를 Macie 로 검사한다는 보기 → 오답
- [ ] 발견 후 조치 → **EventBridge → Lambda/SNS**
- [ ] `침해 행위 탐지` 는 GuardDuty, `취약점` 은 Inspector

## 관련 노트

- 과제 명세: [[03-data-security\|1.3 데이터 보안]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Macie](/docs/aws-clf-c02/10-services/05-security-identity/amazon-macie)
