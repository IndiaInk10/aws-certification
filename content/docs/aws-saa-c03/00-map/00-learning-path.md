---
title: "학습 경로"
description: "공식 4도메인 순서와 서비스 순서 — 같은 노트를 두 가지 목차로"
tags: [saa-c03, 학습경로]
---

SAA 자료는 세상에 두 갈래로 존재합니다. **공식 시험가이드의 도메인 순서**와,
Stéphane Maarek 강의에서 굳어진 **서비스 순서**입니다. 남의 블로그와 강의는 거의 다 후자입니다.

여기서는 **둘 다 제공합니다.** 목차가 두 개일 뿐 내용은 한 벌입니다.

> [!important] 아래 진행률이 본 목차입니다
> 완료 체크와 진행률은 **공식 도메인 순서**를 따릅니다.
> 서비스 순서는 남의 자료와 대조할 때 쓰는 **색인**이지 별도의 코스가 아닙니다.

{{learning-path}}

## 시작 전에 — 순서가 CLF 와 다릅니다

CLF 는 강의를 다 듣고 문제로 확인했습니다. SAA 는 그 반대로 가야 합니다.
합격 후기 6건이 기간(6일~3주)과 무관하게 전원 같은 얘기를 했습니다 — **문제 풀이가 주(主), 개념이 종(從)**.

| 순서 | 하는 일 | 왜 |
|---|---|---|
| 0 | [[00-exam-strategy]] | 문제 읽는 법을 모른 채 개념부터 쌓으면 아는 문제를 틀립니다 |
| 1 | [[service-oneliners]] **1회독** | 10~15분. 지금은 외우는 게 아니라 **윤곽만** 잡습니다 |
| 2 | 아래 과제 명세 노트 | 도메인이 무엇을 묻는지, 어떤 서비스가 걸리는지 |
| 3 | [[service-comparisons]] | 실점의 대부분이 여기서 납니다 |
| 4 | [문제 풀이](/aws-saa-c03/quiz) · 오답 분석 | **선지 4개 전부** 왜 맞고 왜 틀렸는지 |

## 권장 순서 — 과제당 밀도 순

공식 목차는 1.1 → 4.4 순이지만, **공부 순서로는 그게 최적이 아닙니다.**
비중을 과제 수로 나눠 보면 [[05-high-availability\|2.2]] 한 노트가 시험의 약 13%를 감당합니다.

| 볼 순서 | 노트 | 과제당 비중 | 왜 여기부터 |
|---|---|---|---|
| 1 | [[05-high-availability\|2.2 고가용성 · 내결함성]] | **≈13%** | DR 4종 · RPO/RTO 가 통째로 여기 |
| 2 | [[04-scalable-decoupled\|2.1 확장성 · 느슨한 결합]] | **≈13%** | SQS/SNS · ASG · ELB. 시험 단골 |
| 3 | [[01-secure-access\|1.1 보안 액세스]] | ≈10% | IAM 역할이 뒤의 모든 문제에 깔립니다 |
| 4 | [[02-secure-workloads\|1.2 안전한 워크로드]] | ≈10% | VPC 구조가 여기서 완성됩니다 |
| 5 | [[03-data-protection\|1.3 데이터 보안 제어]] | ≈10% | 암호화 · 키 관리 |
| 6~10 | 도메인 3 다섯 개 | ≈4.8% | 개당 부담이 가장 낮습니다 |
| 11~14 | 도메인 4 네 개 | ≈5% | 도메인 3 을 알면 절반은 따라옵니다 |

> [!tip] 도메인 3 과 4 는 짝으로 보세요
> `3.1 고성능 스토리지` 와 `4.1 비용 최적화 스토리지` 는 **같은 서비스를 반대편에서** 봅니다.
> 따로 보면 두 번 외우고, 같이 보면 한 번에 끝납니다. 4번 짝 전부 그렇습니다.

## 대체 목차 — 서비스 순서

Maarek 강의와 대부분의 한글 후기가 따르는 순서입니다.
**남의 자료를 볼 때 "지금 이게 어느 과제 명세냐"를 찾는 색인**으로 쓰세요.

| 서비스 순서 | 해당 과제 명세 |
|---|---|
| IAM | [[01-secure-access\|1.1]] |
| EC2 기본 · 심화 · 인스턴스 스토리지 | [[07-perf-compute\|3.2]] · [[12-cost-compute\|4.2]] |
| ELB · Auto Scaling | [[04-scalable-decoupled\|2.1]] · [[05-high-availability\|2.2]] |
| RDS · Aurora · ElastiCache | [[08-perf-database\|3.3]] · [[13-cost-database\|4.3]] |
| Route 53 | [[09-perf-network\|3.4]] · [[05-high-availability\|2.2]] |
| S3 기본 · S3 보안 | [[06-perf-storage\|3.1]] · [[03-data-protection\|1.3]] |
| CloudFront · Global Accelerator | [[09-perf-network\|3.4]] · [[14-cost-network\|4.4]] |
| Snow Family · Storage Gateway | [[06-perf-storage\|3.1]] · [[11-cost-storage\|4.1]] |
| SQS · SNS · Kinesis | [[04-scalable-decoupled\|2.1]] · [[10-data-ingestion\|3.5]] |
| ECS · EKS · 서버리스 | [[07-perf-compute\|3.2]] |
| 데이터베이스 · 분석 | [[08-perf-database\|3.3]] · [[10-data-ingestion\|3.5]] |
| 모니터링 · KMS(암호화) | [[03-data-protection\|1.3]] · [[02-secure-workloads\|1.2]] |
| VPC | [[02-secure-workloads\|1.2]] · [[09-perf-network\|3.4]] |
| 재해 복구(DR) | [[05-high-availability\|2.2]] |

> [!warning] 이 순서에는 구멍이 있습니다
> 실제 시험에서 나왔다고 보고된 것 중 **위 순서에 독립 챕터가 없는** 서비스가 여섯 개입니다.
> **FSx for Lustre · FSx for ONTAP · Transit Gateway · EMR · Directory Service · Amplify.**
> 여섯 개 전부 공식 범위 내 서비스 목록에 있습니다.
> 남의 강의 목차만 따라가면 이 여섯이 빈칸으로 남습니다. 과제 명세 노트 쪽에는 들어 있습니다.

## 진행하면서 같이 보는 것

- [[service-oneliners]] — 공부 중간중간 **10~15분에 전체 1회독**. 시험 직전 머리 정리용
- [[service-comparisons]] — 헷갈리는 쌍이 나올 때마다 그 표만
- [[wrong-answers]] — 틀린 문항은 **선지 4개 전부** 왜 그런지까지
- [[glossary]] — 낯선 낱말은 본문의 점선 밑줄에 마우스를 올려 보세요

각 과제 명세 노트의 `5. 여기까지의 지도` 는 지금까지 나온 서비스를 누적해 보여 줍니다.
주황색이 그 과제에서 **처음** 나온 서비스입니다.

## 완주 후

- [[service-map]] — 서비스 전체를 카테고리로 재배열. **완주 후 복습용**
- [[exam-overview]] — 도메인 비중과 과제당 밀도
- [[00-exam-strategy]] — 시험장에서 쓸 기술 다시 한 번
