---
title: "AWS Elastic Disaster Recovery"
tags: [aws, saa-c03, service, 스토리지]
category: 02-storage
status: 미학습
---

> `RPO 초 단위 · RTO 분 단위` 를 **저렴하게** 요구할 때. 파일럿 라이트의 관리형 버전

## 한 줄로 말하면

서버를 **지속적으로 복제**해 두었다가, 재해 시 몇 분 안에 AWS 에서 그대로 띄웁니다.

## 핵심 개념

- **블록 수준 연속 복제**입니다. 그래서 **RPO 는 초 단위**, **RTO 는 분 단위**입니다
- **평상시에는 작은 스테이징 자원만** 돕니다 — 전체 인스턴스를 미리 켜 두지 않아 웜 스탠바이보다 훨씬 쌉니다. `저렴하게 빠른 복구` 지문의 답이 되는 이유입니다
- **온프레미스 → AWS**, **다른 클라우드 → AWS**, **리전 간** 모두 대상입니다
- **훈련(drill)** 을 실제 서비스에 영향 없이 돌려 볼 수 있습니다
- **장애 복구(failback)** — 원래 환경으로 되돌아갈 수 있습니다
- 예전 이름은 CloudEndure Disaster Recovery 입니다

**DR 전략 네 가지 중 위치**

| 전략 | RTO/RPO | 비용 |
|---|---|---|
| 백업·복원 | 시간~일 | 가장 쌈 |
| **파일럿 라이트** | **분~시간** | 낮음 — **DRS 가 여기** |
| 웜 스탠바이 | 분 | 중간 |
| 다중 사이트(핫) | 거의 0 | 가장 비쌈 |

## 요금 모델

- **복제 중인 서버 수 × 시간** + 스테이징 스토리지(저렴한 EBS)입니다
- 전체 환경을 이중으로 켜 두는 웜 스탠바이·다중 사이트보다 크게 쌉니다
- 복구를 실제로 시작할 때만 정규 인스턴스 요금이 붙습니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-backup\|AWS Backup]] | 백업·복원 전략. RTO 가 훨씬 깁니다 |
| [[amazon-aurora\|Aurora 글로벌 DB]] | 데이터베이스만. DRS 는 **서버 전체** |
| AWS Application Migration Service | 같은 기술의 **마이그레이션**용. DRS 는 상시 DR |
| 파일럿 라이트 수동 구성 | AMI·스크립트를 직접 관리해야 합니다 |

## 시험 포인트

- [ ] `RPO 초 · RTO 분 · 비용은 최소로` → **Elastic Disaster Recovery**
- [ ] `온프레미스 서버를 AWS 로 DR` → DRS
- [ ] RTO 가 시간 단위여도 되면 → **백업·복원**이 더 쌈
- [ ] 거의 0 에 가까운 RTO 요구 → 다중 사이트(액티브-액티브)
- [ ] `서비스 중단 없이 DR 훈련` → DRS 훈련 기능

## 관련 노트

- 과제 명세: [[05-high-availability\|2.2 고가용성]] · [[11-cost-storage\|4.1 비용 최적화 스토리지]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Elastic Disaster Recovery](/docs/aws-clf-c02/10-services/02-storage/aws-elastic-disaster-recovery)
