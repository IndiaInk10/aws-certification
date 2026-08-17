---
title: "AWS Transfer Family"
tags: [aws, saa-c03, service, 마이그레이션]
category: 11-migration-other
status: 미학습
---

> `SFTP`·`FTPS`·`FTP` 라는 프로토콜 이름이 지문에 있으면 여기다

## 한 줄로 말하면

거래처가 쓰던 **SFTP/FTPS/FTP 그대로** 파일을 주고받되, 뒤에서는 S3 나 EFS 에 저장합니다.

## 핵심 개념

- **판단은 프로토콜 이름 하나**입니다 — `파트너사가 SFTP 로만 보낼 수 있다` · `기존 FTP 워크플로를 유지해야` → Transfer Family 입니다
- **거래처는 아무것도 바꾸지 않습니다.** S3 API 를 쓰도록 파트너에게 요구하는 보기는 현실적이지 않아 오답이 됩니다
- **EC2 에 FTP 서버를 직접 세우는 보기**와 대비됩니다 — 그쪽은 패치·가용성·확장이 전부 내 몫입니다. `운영 부담 최소` 면 Transfer Family 입니다
- **저장 대상은 S3 또는 EFS** 입니다
- **자격 증명 원본** — 서비스 관리형 · **Active Directory** · LDAP · **[[amazon-cognito\|Cognito]]** · 사용자 지정(Lambda + API Gateway)
- **다중 AZ 로 관리형** 운영되고 [[amazon-route-53\|Route 53]] 으로 사용자 지정 도메인을 붙입니다
- 파일이 S3 에 들어오면 **이벤트 알림으로 후속 처리**를 잇는 구성이 흔합니다

## 요금 모델

- **엔드포인트 시간당 요금(프로토콜마다) + 전송한 데이터량** 입니다
- **시간당 요금이 꾸준히 붙어** 트래픽이 적으면 비싸게 느껴집니다 — 그래도 EC2 FTP 서버를 다중 AZ 로 운영하는 비용보다는 대개 낮습니다
- 프로토콜을 여러 개 켜면 그만큼 배가 됩니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-datasync\|DataSync]] | **내부 시스템 간 대량 동기화**. 외부 거래처가 접속하는 창구가 아닙니다 |
| [[aws-storage-gateway\|Storage Gateway]] | 온프레미스에 두는 **캐시 게이트웨이** |
| S3 사전 서명 URL | 일회성 접근. 상시 FTP 워크플로가 아닙니다 |

## 시험 포인트

- [ ] `SFTP`·`FTPS`·`FTP` → **Transfer Family**
- [ ] `거래처는 방식을 못 바꾼다` → Transfer Family
- [ ] EC2 에 FTP 서버를 세우는 보기 → 운영 부담에서 열세
- [ ] `기존 AD 계정으로 인증` → AD 연동
- [ ] 시스템 간 정기 동기화면 → **DataSync**

## 관련 노트

- 과제 명세: [[10-data-ingestion\|2.4 데이터 수집·변환]] · [[06-perf-storage\|3.1 고성능 스토리지]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Transfer Family](/docs/aws-clf-c02/10-services/11-migration-other/aws-transfer-family)
