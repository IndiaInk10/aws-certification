---
title: "AWS DataSync"
tags: [aws, saa-c03, service, 마이그레이션]
category: 11-migration-other
status: 미학습
---

> 온프레미스와 AWS 사이 대량 전송을 자동화한다. **대역폭 제어·예약·검증**이 붙어 있다는 것이 핵심

## 한 줄로 말하면

파일을 **회선을 통해** 옮기는 관리형 전송 서비스입니다. 직접 스크립트를 짜는 것과의 차이는 **대역폭 제한·일정 예약·전송 후 무결성 검증**이 기본으로 들어 있다는 점입니다.

## 핵심 개념

- **두 조각이 짝입니다** — 온프레미스에 **에이전트**를 배포하고, AWS 쪽에 **작업(task)** 을 정의합니다. 둘 다 있어야 전송이 성립합니다
- **대상이 넓습니다** — S3 · EFS · FSx(Windows·Lustre·ONTAP) 로 바로 보낼 수 있습니다. S3 를 거쳐 옮기는 우회가 필요 없습니다
- **권한과 메타데이터를 보존합니다** — SMB → FSx for Windows 전송에서 **NTFS ACL 이 함께** 옮겨집니다. S3 를 거치면 객체 스토리지라 그 권한이 사라지므로, Windows 권한 보존 요구가 있으면 DataSync 로 직접 보내야 합니다
- **대역폭 제한** — 다른 부서와 회선을 공유할 때 쓰는 양을 조절할 수 있습니다. 이 기능이 지문에 나오면 DataSync 를 지목하는 것입니다
- **예약과 반복** — 일회성 이전뿐 아니라 주기적 동기화에도 씁니다
- **검증** — 전송 후 원본과 대상을 비교합니다

**언제 DataSync 가 아닌가**

- 회선으로 감당이 안 되는 규모면 **Snow Family**(물리 장치)입니다. 계산해 보세요 — 회선 속도와 기한이 지문에 함께 나오면 그 계산이 답을 정합니다
- 옮기고 끝이 아니라 **상시 연결해 쓰는** 것이면 [[aws-storage-gateway\|Storage Gateway]] 입니다

## 요금 모델

- **전송한 데이터 양(GB)** 기준입니다
- 에이전트는 온프레미스 자원(가상 머신)이라 AWS 요금이 아닙니다
- 대상 스토리지(S3·EFS·FSx)의 저장 요금은 별도로 붙습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-storage-gateway\|Storage Gateway]] | DataSync 는 **옮기는** 것, Storage Gateway 는 **이어서 쓰는** 것 |
| Snow Family | 회선으로 기한 안에 못 옮기면 Snow. 대역폭 제어가 필요하면 DataSync |
| S3 복제 | S3 복제는 **S3 버킷 사이**. 온프레미스가 끼면 DataSync |

## 시험 포인트

- [ ] `대역폭을 조절` · `일정 예약` · `전송 검증` → DataSync
- [ ] 에이전트와 작업 **둘 다** 필요합니다 (2개 선택 문항의 단골)
- [ ] SMB → FSx 전송에서 **NTFS 권한 보존** → DataSync (S3 경유 보기는 오답)
- [ ] 회선 속도 × 기한을 계산해 **불가능하면 Snow Family**
- [ ] 온프레미스 NAS 를 **매일 동기화** → DataSync

## 관련 노트

- 과제 명세: [[06-perf-storage\|3.1 고성능 스토리지]] · [[10-data-ingestion\|3.5 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS DataSync](/docs/aws-clf-c02/10-services/11-migration-other/aws-datasync)
