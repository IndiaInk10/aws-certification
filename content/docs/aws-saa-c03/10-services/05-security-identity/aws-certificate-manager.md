---
title: "AWS Certificate Manager"
tags: [aws, saa-c03, service, 보안]
category: 05-security-identity
status: 미학습
---

> TLS 인증서를 **무료로 발급하고 자동 갱신**한다. 붙는 자리와 못 붙는 자리를 가려야 한다

## 한 줄로 말하면

HTTPS 용 인증서를 발급·갱신·배포합니다. 만료로 서비스가 끊기는 사고를 없애는 것이 목적입니다.

## 핵심 개념

- **자동 갱신**이 존재 이유입니다. `인증서 만료로 장애가 났다` · `수동 갱신을 없애야` → ACM 입니다
- **붙는 곳** — [[elastic-load-balancing\|ELB]] · [[amazon-cloudfront\|CloudFront]] · [[amazon-api-gateway\|API Gateway]] · AppSync 입니다
- **EC2 인스턴스에는 ACM 공인 인증서를 직접 설치할 수 없습니다.** 이것이 가장 자주 나오는 오답 포인트입니다. EC2 에서 종료하려면 인증서를 직접 넣거나, ELB 에서 TLS 를 종료하는 구성으로 바꿉니다
- **CloudFront 에 붙일 인증서는 us-east-1** 에 있어야 합니다. 다른 리전에 발급해 두면 목록에 안 뜹니다
- **DNS 검증**을 [[amazon-route-53\|Route 53]] 과 쓰면 자동 갱신이 매끄럽습니다. 이메일 검증은 수동이 끼어듭니다
- **ACM Private CA** — 내부용 사설 인증서를 발급합니다. 사내 서비스 간 mTLS 처럼 공인 인증서가 필요 없을 때
- **가져온 인증서는 자동 갱신되지 않습니다** — 직접 교체해야 합니다

## 요금 모델

- **공인 인증서는 무료**입니다(붙이는 자원의 요금은 별개)
- **Private CA 는 월 요금 + 발급 건수** 로 유료입니다
- 인증서를 직접 사서 관리하는 것보다 싸고 사고가 적어, 비용·운영 문항 양쪽에서 유리합니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-kms\|KMS]] | KMS 는 **미사용 데이터 암호화 키**. ACM 은 **전송 구간 인증서** |
| [[aws-secrets-manager\|Secrets Manager]] | 비밀번호 같은 값 |
| CloudHSM | 인증서 발급이 아니라 전용 키 저장소 |

## 시험 포인트

- [ ] `인증서 만료 장애 방지` · `자동 갱신` → **ACM**
- [ ] **EC2 에 ACM 인증서를 설치하는 보기는 오답** → ELB 에서 종료
- [ ] CloudFront 용 인증서는 **us-east-1**
- [ ] `사내 전용 인증서` → **ACM Private CA**
- [ ] 가져온 인증서는 자동 갱신 안 됨

## 관련 노트

- 과제 명세: [[03-data-security\|1.3 데이터 보안]] · [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Certificate Manager](/docs/aws-clf-c02/10-services/05-security-identity/aws-certificate-manager)
