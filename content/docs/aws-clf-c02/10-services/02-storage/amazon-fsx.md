---
title: "Amazon FSx"
tags: [aws, clf-c02, service, 스토리지]
category: 02-스토리지
module: 6
status: 미학습
---

# Amazon FSx

> Windows 파일 서버 / Lustre 등 특수 파일 시스템

| | |
|---|---|
| **카테고리** | 02-스토리지 |
| **배우는 모듈** | [[06-storage]] |
| **문제은행 출현** | 0회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

이미 널리 쓰이는 **상용·오픈 소스 파일 시스템을 AWS가 대신 운영해 주는** 완전관리형 파일 스토리지입니다.

## 핵심 개념

- **네 가지 파일 시스템을 골라 씁니다** — **FSx for Windows File Server**, **FSx for Lustre**, **FSx for NetApp ONTAP**, **FSx for OpenZFS**입니다. CLF-C02에서는 앞의 두 가지만 확실히 아시면 충분합니다.
- **FSx for Windows File Server** — **SMB 프로토콜**과 Windows NTFS, Active Directory 통합을 그대로 지원합니다. 온프레미스의 Windows 파일 서버를 옮길 때 쓰시면 됩니다.
- **FSx for Lustre** — 고성능 컴퓨팅(HPC), 기계 학습, 대규모 시뮬레이션용 **초고속 병렬 파일 시스템**입니다. S3 버킷과 연결해 객체를 파일처럼 다룰 수도 있습니다.
- **관리 부담이 없습니다** — 하드웨어, 소프트웨어 설치, 패치, 백업을 AWS가 처리합니다. 고객은 파일 시스템을 만들고 마운트하시면 됩니다.
- **왜 EFS가 아니라 FSx인가** — EFS는 Linux·NFS 전용입니다. **Windows SMB가 필요하거나 Lustre 수준의 성능이 필요할 때** FSx를 고르시면 됩니다.

## 요금 모델

- **프로비저닝한 스토리지 용량(GB-월)** 기준으로 과금하고, 여기에 **처리량 용량**과 백업 저장 용량 요금이 더해집니다.
- 파일 시스템 종류와 배포 방식(단일 AZ / 다중 AZ)에 따라 단가가 달라집니다. 다중 AZ가 더 비싼 대신 가용성이 높습니다.
- EFS처럼 자동으로 늘어나는 방식이 아니라 **용량을 정해서 만드는** 구조라는 점이 차이입니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-efs]] | EFS는 **Linux·NFS**용 공유 파일 시스템이고, FSx는 **Windows(SMB)나 Lustre(HPC)** 같은 특정 파일 시스템이 필요할 때 씁니다. 지문에 "Windows"가 있으면 FSx입니다. |
| [[amazon-ebs]] | EBS는 인스턴스 하나에 붙는 **블록 디스크**이고, FSx는 여러 클라이언트가 함께 쓰는 **파일 공유**입니다. |
| [[aws-storage-gateway]] | Storage Gateway의 FSx File Gateway는 **온프레미스에서 FSx에 접근하게** 이어 주는 장치이고, FSx는 파일 시스템 본체입니다. |

## 시험 포인트

- [ ] 문제에 **"Windows 파일 서버", "SMB 공유", "Active Directory와 통합되는 파일 스토리지"** 가 나오면 FSx for Windows File Server입니다
- [ ] **"HPC", "고성능 병렬 파일 시스템", "머신 러닝 학습 데이터를 빠르게"** 가 나오면 FSx for Lustre입니다
- [ ] 같은 파일 스토리지라도 **Linux면 EFS, Windows면 FSx**로 갈립니다. 이 한 줄이 정답을 결정합니다
- [ ] FSx는 **용량을 프로비저닝**합니다. "자동으로 늘어나고 줄어든다"는 EFS의 설명입니다

## 관련 노트

- 모듈: [[06-storage]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
