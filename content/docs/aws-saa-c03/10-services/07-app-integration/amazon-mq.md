---
title: "Amazon MQ"
tags: [aws, saa-c03, service, 앱 통합]
category: 07-app-integration
status: 미학습
---

> `MQTT`·`AMQP`·`JMS` 같은 **표준 프로토콜 이름**이 지문에 있으면 여기다

## 한 줄로 말하면

ActiveMQ·RabbitMQ 를 관리형으로 돌립니다. **기존 브로커를 코드 수정 없이** AWS 로 옮길 때 씁니다.

## 핵심 개념

- **판단은 단순합니다** — `온프레미스 메시지 브로커를 마이그레이션` + `MQTT/AMQP/STOMP/JMS/OpenWire` → Amazon MQ 입니다. 이 조건이 없으면 [[amazon-sqs\|SQS]]·[[amazon-sns\|SNS]] 가 답입니다
- **SQS 로 바꾸면 애플리케이션을 고쳐야 합니다.** SQS 는 AWS 전용 API 이지 표준 프로토콜이 아닙니다 — `코드 변경 없이` 가 지문에 있으면 SQS 를 고르는 보기가 탈락합니다
- **큐와 토픽을 둘 다** 제공합니다(SQS + SNS 를 합친 셈)
- **다중 AZ 활성-대기** 구성으로 고가용성을 얻고, 뒤에서 **EFS** 로 데이터를 공유합니다
- **VPC 안에서** 돕니다
- **확장성은 SQS·SNS 보다 낮습니다.** 브로커 인스턴스 크기에 묶이므로, 신규 설계라면 SQS/SNS 가 낫습니다

## 요금 모델

- **브로커 인스턴스 시간 + 스토리지** 입니다. 서버리스가 아니라 **유휴에도 요금**이 붙습니다
- SQS 는 요청당 과금이라 유휴 비용이 0 입니다 — 그래서 `비용 최소` 만 있는 지문에서는 SQS 가 이깁니다
- Amazon MQ 가 답이 되는 것은 **마이그레이션 비용(코드 수정)** 을 아낄 때입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-sqs\|SQS]] | AWS 전용 API · 무한 확장 · 서버리스. 신규 설계의 기본 |
| [[amazon-sns\|SNS]] | 발행-구독 알림 |
| [[amazon-kinesis\|Kinesis / MSK]] | 대용량 스트림. Kafka 면 MSK |

## 시험 포인트

- [ ] `MQTT`·`AMQP`·`JMS`·`STOMP` → **Amazon MQ**
- [ ] `기존 브로커를 코드 수정 없이` → Amazon MQ
- [ ] 프로토콜 언급이 없으면 → **SQS/SNS**
- [ ] `무한 확장`·`서버리스` 요구 → Amazon MQ 탈락
- [ ] 고가용성 → **다중 AZ 활성-대기**

## 관련 노트

- 과제 명세: [[04-scalable-decoupled\|2.1 확장·느슨한 결합]]
- 비교: [[service-comparisons]]

> CLF-C02 범위 밖의 서비스입니다. 기초부터 보려면 [[amazon-sqs]] 와 대비해 읽으세요.
