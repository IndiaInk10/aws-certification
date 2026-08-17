---
title: "Amazon EventBridge"
tags: [aws, saa-c03, service, 앱 통합]
category: 07-app-integration
status: 미학습
---

> **이벤트 내용을 보고 라우팅**한다. `AWS 서비스에서 뭔가 일어나면` · `일정마다` 면 여기다

## 한 줄로 말하면

이벤트 버스입니다. AWS 서비스·내 애플리케이션·SaaS 에서 오는 이벤트를 **규칙으로 걸러 대상에 보냅니다**.

## 핵심 개념

- **AWS 서비스 이벤트를 받는 표준 통로**입니다 — EC2 상태 변경, [[amazon-guardduty\|GuardDuty]] 결과, [[aws-backup\|Backup]] 작업 실패, S3 이벤트, CodePipeline 상태. `X 가 일어나면 자동으로 Y` 의 답
- **이벤트 패턴**으로 JSON 내용을 보고 필터링합니다. 특정 필드 값이 맞을 때만 대상에 보냅니다
- **일정(스케줄) 규칙** — cron·rate 로 정기 실행합니다. `매일 새벽 2시에 Lambda` 의 답이고, EC2 에 크론을 두는 보기보다 서버리스라 유리합니다
- **대상** — Lambda · SQS · SNS · Step Functions · ECS 작업 · Kinesis · 다른 계정/리전의 버스
- **SaaS 파트너 이벤트**를 받는 버스를 만들 수 있습니다
- **스키마 레지스트리**로 이벤트 구조를 관리합니다
- **아카이브·재생** — 지난 이벤트를 보관했다가 다시 흘려보냅니다
- **EventBridge Pipes** — 소스와 타깃을 필터·보강과 함께 잇습니다
- **CloudTrail 이벤트를 규칙 소스로** 삼아 `누가 보안 그룹을 열면 즉시 알림` 같은 구성을 만듭니다

## 요금 모델

- **발행된 이벤트 수** 기준입니다. **AWS 서비스가 만든 이벤트는 무료**입니다
- 스케줄 규칙도 사실상 무료 수준이라, 크론용 EC2 를 띄우는 것보다 압도적으로 쌉니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-sns\|SNS]] | 구독자에게 **전부** 밀어 줍니다. 내용 기반 라우팅은 EventBridge |
| [[amazon-sqs\|SQS]] | 작업 큐. 라우팅이 아닙니다 |
| [[amazon-kinesis\|Kinesis]] | 대용량 연속 스트림 |
| [[aws-step-functions\|Step Functions]] | **여러 단계의 흐름**을 조율. EventBridge 는 시작 신호 |

## 시험 포인트

- [ ] `AWS 서비스에서 상태가 바뀌면 자동으로` → **EventBridge 규칙**
- [ ] `매일/매시간 정기 실행` → **스케줄 규칙 + Lambda**
- [ ] `이벤트 내용에 따라 다른 대상으로` → 이벤트 패턴
- [ ] `SaaS 이벤트를 받아서` → 파트너 이벤트 버스
- [ ] 크론용 EC2 를 상시 띄우는 보기 → 비용·운영 문항에서 오답

## 관련 노트

- 과제 명세: [[04-scalable-decoupled\|2.1 확장·느슨한 결합]] · [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon EventBridge](/docs/aws-clf-c02/10-services/07-app-integration/amazon-eventbridge)
