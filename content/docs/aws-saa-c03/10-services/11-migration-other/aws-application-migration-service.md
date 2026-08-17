---
title: "AWS Application Migration Service"
tags: [aws, saa-c03, service, 마이그레이션]
category: 11-migration-other
status: 미학습
---

> **리프트 앤 시프트**. 서버를 고치지 않고 통째로 옮긴다

## 한 줄로 말하면

MGN. 온프레미스·다른 클라우드의 서버를 **블록 수준으로 복제**해 EC2 로 그대로 띄웁니다.

## 핵심 개념

- `애플리케이션을 다시 만들 시간이 없다` · `있는 그대로 옮겨야` → MGN 입니다. 리팩터링·컨테이너화하는 보기와 대비됩니다
- **소스에 에이전트를 깔면 백그라운드로 계속 복제**됩니다. 서비스를 멈추지 않고 준비할 수 있어 **전환(cutover) 시 다운타임이 짧습니다**
- **물리 서버·VMware·Hyper-V·다른 클라우드** 전부 소스가 됩니다
- **테스트 인스턴스를 띄워** 실제 전환 전에 검증할 수 있습니다
- **[[aws-elastic-disaster-recovery\|Elastic Disaster Recovery]] 와 같은 기술**입니다 — MGN 은 **한 번 옮기고 끝**, DRS 는 **상시 대기**. 목적이 다릅니다
- **[[aws-dms\|DMS]] 와 다릅니다** — DMS 는 **데이터베이스**만, MGN 은 **서버 전체**입니다

**함께 나오는 것들**

- **Application Discovery Service** — 옮기기 전에 **어떤 서버가 무엇과 통신하는지** 종속성을 파악합니다. `무엇부터 옮겨야 할지 모르겠다` 의 답
- **Migration Hub** — 여러 마이그레이션의 진행 상황을 한 화면에서 봅니다

## 요금 모델

- **서버당 무료 사용 기간(90일)** 이 있고, 그 뒤로는 시간당 요금이 붙습니다
- 복제 중에는 저렴한 스테이징 자원만 돌고, 전환 후에야 정규 EC2 요금이 시작됩니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-elastic-disaster-recovery\|Elastic Disaster Recovery]] | 같은 기술, **상시 DR** 용도 |
| [[aws-dms\|DMS]] | **데이터베이스**만 |
| [[aws-datasync\|DataSync]] | **파일·객체**만 |
| [[aws-snow-family\|Snow Family]] | 회선이 병목인 **대용량 물리 이전** |

## 시험 포인트

- [ ] `리프트 앤 시프트` · `앱을 고치지 않고` → **MGN**
- [ ] `무엇부터 옮길지 종속성 파악` → **Application Discovery Service**
- [ ] DB 만 옮기면 → **DMS** / 파일만이면 → **DataSync**
- [ ] 상시 DR 이면 MGN 이 아니라 **DRS**

## 관련 노트

- 과제 명세: [[05-high-availability\|2.2 고가용성]] · [[10-data-ingestion\|2.4 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Application Migration Service](/docs/aws-clf-c02/10-services/11-migration-other/aws-application-migration-service)
