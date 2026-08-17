---
title: "Amazon Neptune"
tags: [aws, saa-c03, service, 데이터베이스]
category: 03-database
status: 미학습
---

> **관계망**이 데이터의 본질일 때. 소셜 그래프·추천·사기 탐지

## 한 줄로 말하면

그래프 데이터베이스입니다. "누가 누구와 어떻게 연결되어 있는지"를 몇 단계씩 따라가는 질의가 빠릅니다.

## 핵심 개념

- **신호가 분명합니다** — `소셜 네트워크` · `추천 엔진` · `사기 탐지 네트워크` · `지식 그래프` 가 지문에 있으면 Neptune 입니다
- 관계형 DB 에서 여러 단계 조인으로 풀면 느려지는 질의(친구의 친구의 친구)를 그래프 구조로 곧바로 처리합니다
- **Aurora 와 같은 스토리지 구조** — 3개 AZ 에 6벌 복제, 읽기 전용 복제본 최대 15개
- **자동 백업 + 특정 시점 복구**
- **VPC 안**에 배치됩니다
- Gremlin·openCypher·SPARQL 질의를 지원합니다

## 요금 모델

- **인스턴스 시간 + 스토리지 + I/O + 백업** 입니다. 서버리스 옵션이 있습니다
- 그래프 전용이라 대안이 마땅치 않아, 비용보다 **적합성**으로 고르는 서비스입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-dynamodb\|DynamoDB]] | 키-값. 다단계 관계 탐색이 어렵습니다 |
| [[amazon-documentdb\|DocumentDB]] | 문서 저장. 관계 탐색이 목적이 아닙니다 |
| [[amazon-rds\|RDS]] | 조인이 깊어질수록 느려집니다 |

## 시험 포인트

- [ ] `소셜 그래프` · `추천` · `사기 탐지 관계망` → **Neptune**
- [ ] 관계 탐색이 핵심이 아니면 Neptune 은 오답
- [ ] MongoDB 호환이면 DocumentDB, 단순 키-값이면 DynamoDB

## 관련 노트

- 과제 명세: [[08-perf-database\|3.3 고성능 데이터베이스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon Neptune](/docs/aws-clf-c02/10-services/03-database/amazon-neptune)
