---
title: "Amazon DocumentDB"
tags: [aws, saa-c03, service, 데이터베이스]
category: 03-database
status: 미학습
---

> `MongoDB` 라는 낱말이 지문에 있을 때만 답이 된다

## 한 줄로 말하면

MongoDB 호환 문서 데이터베이스입니다. 기존 MongoDB 애플리케이션을 코드 수정 없이 관리형으로 옮길 때 씁니다.

## 핵심 개념

- **판단은 단순합니다** — `MongoDB 를 쓰고 있다` · `MongoDB 드라이버를 그대로` 면 DocumentDB, 그런 조건이 없으면 [[amazon-dynamodb\|DynamoDB]] 입니다
- **Aurora 와 같은 스토리지 구조** — 3개 AZ 에 6벌 복제, 10GB 단위로 최대 128TB 자동 확장
- **읽기 전용 복제본 15개**까지, 리더 엔드포인트로 분산됩니다
- **자동 백업 + 특정 시점 복구**를 제공합니다
- **VPC 안**에서만 접근합니다
- **자체 관리 MongoDB 를 EC2 에 올리는 보기**는 운영 부담이 커서 `관리 부담 최소` 지문에서 오답입니다

## 요금 모델

- **인스턴스 시간 + 스토리지 + I/O + 백업** 입니다
- 서버리스 옵션이 없어(프로비저닝 기반) 유휴가 많으면 상대적으로 불리합니다
- EC2 자체 관리보다 운영 인건비를 줄이는 쪽의 절감입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-dynamodb\|DynamoDB]] | 서버리스·무제한 확장. MongoDB 호환 요구가 없으면 이쪽 |
| [[amazon-rds\|RDS]] | 관계형·SQL |
| Amazon Neptune | **그래프**(관계망, 추천, 사기 탐지) |

## 시험 포인트

- [ ] `MongoDB 워크로드를 관리형으로` → **DocumentDB**
- [ ] MongoDB 언급이 없으면 → DynamoDB 쪽
- [ ] `관계망·소셜 그래프` → **Neptune**
- [ ] EC2 에 직접 MongoDB 설치 → 운영 부담 문항에서 오답

## 관련 노트

- 과제 명세: [[08-perf-database\|3.3 고성능 데이터베이스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon DocumentDB](/docs/aws-clf-c02/10-services/03-database/amazon-documentdb)
