---
title: "AWS Step Functions"
tags: [aws, saa-c03, service, 앱 통합]
category: 07-app-integration
status: 미학습
---

> **여러 단계를 순서·조건·재시도와 함께** 엮는다. Lambda 가 Lambda 를 부르는 보기의 대안

## 한 줄로 말하면

여러 서비스 호출을 상태 기계로 조율합니다. 순서·분기·병렬·재시도·오류 처리가 코드가 아니라 정의로 들어갑니다.

## 핵심 개념

- `여러 단계로 이뤄진 처리를 조율` · `실패하면 재시도하고 특정 단계부터` · `중간에 사람 승인` → Step Functions 입니다
- **Lambda 가 Lambda 를 직접 호출해 흐름을 만드는 구성**은 오류 처리와 추적이 어렵습니다. 이 대비가 문제로 나옵니다
- **Lambda 15분 제한을 넘는 흐름**을 여러 단계로 쪼개 처리합니다. 표준 워크플로는 **최대 1년**까지 실행됩니다
- **워크플로 두 종류**

| | 언제 |
|---|---|
| **표준** | 최대 1년 · 정확히 한 번 · 실행 이력이 남습니다. 사람 승인·장기 처리 |
| **Express** | 5분 이내 · 초당 대량 · 이력이 CloudWatch 로. 스트리밍·고빈도 처리 |

- **작업 토큰(콜백)** — 외부 시스템이나 **사람의 승인**을 기다렸다가 진행합니다
- **직접 통합** — Lambda·ECS·SNS·SQS·DynamoDB·Batch·Glue·SageMaker 를 코드 없이 호출합니다
- **시각적 실행 이력**으로 어느 단계에서 실패했는지 바로 보입니다
- **[[amazon-eventbridge\|EventBridge]] 로 시작**시키는 조합이 흔합니다

## 요금 모델

- **표준** — 상태 전환 수 기준
- **Express** — 실행 수 + 실행 시간·메모리 기준으로, 고빈도에서는 표준보다 훨씬 쌉니다
- 서버가 없어 유휴 비용이 없습니다. 오케스트레이션용 EC2 를 띄우는 보기와 대비됩니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-eventbridge\|EventBridge]] | 이벤트를 **던집니다**. 다단계 흐름 관리가 아닙니다 |
| [[amazon-sqs\|SQS]] | 큐잉. 순서·분기·재시도 정책이 없습니다 |
| Amazon MWAA | Airflow 가 필요한 데이터 파이프라인 |
| [[aws-batch\|Batch]] | 대량 배치 작업 실행 |

## 시험 포인트

- [ ] `여러 단계 · 조건 분기 · 재시도` → **Step Functions**
- [ ] `사람의 승인을 기다렸다가` → **작업 토큰(콜백)**
- [ ] `Lambda 15분을 넘는 처리` → 단계로 분할
- [ ] `초당 수천 건 · 5분 이내` → **Express 워크플로**
- [ ] Lambda 체인으로 흐름을 만드는 보기 → 오류 처리·가시성에서 열세

## 관련 노트

- 과제 명세: [[04-scalable-decoupled\|2.1 확장·느슨한 결합]] · [[10-data-ingestion\|2.4 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Step Functions](/docs/aws-clf-c02/10-services/07-app-integration/aws-step-functions)
