---
title: "Amazon FSx"
tags: [aws, saa-c03, service, 스토리지]
category: 02-storage
status: 미학습
---

> 관리형 파일 시스템 네 갈래. CLF 는 "FSx" 하나로 배웠지만 SAA 는 **변종을 따로** 묻는다

## 한 줄로 말하면

특정 파일 시스템을 그대로 관리형으로 제공합니다. **네 갈래가 각각 다른 용도**라 어느 것인지가 곧 문항입니다.

## 핵심 개념

| 변종 | 프로토콜 | 언제 |
|---|---|---|
| **FSx for Windows File Server** | SMB | `Windows` · `Active Directory` · NTFS 권한 |
| **FSx for Lustre** | Lustre | `HPC` · `머신러닝 학습` · **S3 를 파일 시스템처럼** 붙여 고속 처리 |
| **FSx for NetApp ONTAP** | NFS · SMB · iSCSI | **한 볼륨을 여러 프로토콜로** · 온프레미스 NetApp 이관 |
| **FSx for OpenZFS** | NFS | ZFS 스냅샷·클론이 필요할 때 |

**FSx for Windows File Server**

- **Active Directory 에 조인**해야 기존 AD 그룹과 NTFS ACL 로 접근을 통제할 수 있습니다. **IAM 은 파일 단위 NTFS 권한을 다루지 않습니다** — 이 둘을 섞는 것이 함정입니다
- **다중 AZ 구성**으로 고가용성을 얻습니다
- SharePoint 나 Windows 홈 디렉터리처럼 SMB 를 쓰는 워크로드의 기본 답입니다

**FSx for Lustre**

- **S3 버킷을 연결**해 객체를 파일처럼 읽고, 결과를 다시 S3 로 내보낼 수 있습니다. 스팟 인스턴스로 도는 짧은 HPC 워크플로에 잘 맞습니다
- `Lustre 클라이언트` 라고 지문이 못 박으면 **다른 선택지가 전부 탈락**합니다

**FSx for NetApp ONTAP**

- **NFS 와 SMB 를 동시에** 여는 것이 이 변종의 정체입니다. 리눅스 시뮬레이션이 쓰고 윈도우 시각화 도구가 읽는 식으로 **파일 시스템 두 개를 동기화하던 구조를 하나로** 합칠 때 답이 됩니다
- 스냅샷·클론·중복 제거 같은 ONTAP 기능이 그대로 옵니다

**FSx 파일 게이트웨이** — 온프레미스에 두는 캐시입니다. 데이터는 AWS 의 FSx for Windows 에 두고, **자주 쓰는 것은 로컬 캐시**에서 나와 이행 기간에도 지연이 유지됩니다.

## 요금 모델

- 변종마다 다르지만 공통적으로 **프로비저닝한 스토리지 용량과 처리량**에 붙습니다
- 다중 AZ 구성은 단일 AZ 보다 비쌉니다
- Lustre 는 **스크래치**(임시, 싸고 복제 없음)와 **퍼시스턴트**(복제 있음) 배포 유형이 나뉩니다. 짧게 쓰고 버리는 계산이면 스크래치가 맞습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-efs\|Amazon EFS]] | EFS 는 **NFS/Linux 범용**. Windows·HPC·멀티프로토콜이면 FSx |
| [[aws-storage-gateway\|Storage Gateway]] | Storage Gateway 는 **온프레미스를 잇는** 것, FSx 는 AWS 안의 파일 시스템 |
| Lustre vs ONTAP | Lustre 는 **속도**, ONTAP 는 **멀티프로토콜** |

## 시험 포인트

- [ ] `SMB` · `Active Directory` → FSx for Windows File Server
- [ ] `HPC` · `S3 데이터를 고속으로` → FSx for Lustre
- [ ] `NFS 와 SMB 를 동시에` · `NetApp` → FSx for NetApp ONTAP
- [ ] 온프레미스에서 **낮은 지연으로 계속 접근**해야 하면 → FSx 파일 게이트웨이로 로컬 캐시
- [ ] 권한을 물으면 **AD 조인**이지 IAM 이 아닙니다

## 관련 노트

- 과제 명세: [[06-perf-storage\|3.1 고성능 스토리지]]
- 비교: [[service-comparisons]] — EFS vs FSx 4종 신호 표

> 더 기초부터: [CLF-C02 의 Amazon FSx](/docs/aws-clf-c02/10-services/02-storage/amazon-fsx)
