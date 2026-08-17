---
title: "AWS Secrets Manager"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> `자동 교체` 라는 낱말 하나로 Parameter Store 와 갈린다

## 한 줄로 말하면

DB 비밀번호·API 키 같은 비밀 값을 저장하고 **자동으로 교체**합니다.

## 핵심 개념

- **자동 교체가 존재 이유**입니다. RDS·Aurora·Redshift·DocumentDB 는 **기본 제공 교체**를, 그 밖에는 Lambda 함수로 교체 로직을 씁니다
- `90일마다 비밀번호를 바꿔야` · `수동 교체를 없애야` → Secrets Manager 입니다. Parameter Store 에는 자동 교체가 없습니다
- **애플리케이션은 SDK 로 꺼내 씁니다.** 코드나 환경 변수에 비밀번호를 박는 보기는 오답입니다
- **KMS 로 암호화**되고, **IAM 정책과 리소스 정책**으로 접근을 통제합니다. `애플리케이션 A 만 이 비밀에 접근` 이면 리소스 정책입니다
- **계정 간 공유**가 됩니다 — 리소스 정책 + KMS 고객 관리형 키
- **리전 간 복제**를 켜면 DR 리전에서도 같은 비밀을 씁니다
- **CloudTrail 에 접근이 기록**됩니다

## 요금 모델

- **비밀마다 월 요금 + API 호출** 로 붙습니다
- **Parameter Store 의 표준 파라미터는 무료**입니다. 그래서 `가장 저렴하게 설정값 저장` 이면 Parameter Store, `자동 교체가 필요` 하면 Secrets Manager 입니다. 이 비용 대비가 그대로 문제가 됩니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| Systems Manager **Parameter Store** | 무료·설정값 중심·**자동 교체 없음**. 비밀도 SecureString 으로 저장은 됩니다 |
| [[aws-kms\|KMS]] | KMS 는 **키**를 관리합니다. 비밀 값을 담아 두지 않습니다 |
| [[aws-iam\|IAM 역할]] | AWS 자원 접근은 역할. 외부 DB·서드파티 키는 Secrets Manager |

## 시험 포인트

- [ ] `자동 교체` → **Secrets Manager** (이 낱말이 결정적)
- [ ] `무료로 설정값 저장` → **Parameter Store**
- [ ] 코드·환경 변수·AMI 에 비밀번호를 넣는 보기 → 오답
- [ ] `특정 애플리케이션만 이 비밀에` → **리소스 정책**
- [ ] `DR 리전에서도 같은 비밀` → **리전 간 복제**

## 관련 노트

- 과제 명세: [[01-secure-access\|1.1 안전한 액세스]] · [[03-data-security\|1.3 데이터 보안]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Secrets Manager](/docs/aws-clf-c02/10-services/05-security-identity/aws-secrets-manager)
