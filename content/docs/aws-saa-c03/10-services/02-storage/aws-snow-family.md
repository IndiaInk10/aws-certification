---
title: "AWS Snow Family"
tags: [aws, saa-c03, service, 스토리지]
category: 02-storage
status: 미학습
---

> **회선으로 옮기면 몇 달 걸릴 때**. 계산해서 판단하는 문제가 나온다

## 한 줄로 말하면

물리 장비에 데이터를 담아 트럭으로 옮깁니다. 대역폭이 병목일 때 네트워크 전송보다 빠릅니다.

## 핵심 개념

- **판단은 계산입니다** — `100TB 를 1Gbps 로 보내면 며칠?` 을 따집니다. 회선으로 **몇 주 이상** 걸리면 Snow, **며칠 안** 이면 [[aws-datasync\|DataSync]]·Direct Connect 입니다
- **Snowball Edge** — 수십 TB~페타바이트. 스토리지 최적화형과 컴퓨트 최적화형이 있습니다
- **Snowcone** — 8~14TB 로 작고 가볍습니다. 현장·차량·드론처럼 **공간과 전원이 제한된 곳**
- **Snowmobile** — 엑사바이트급 컨테이너 트럭. `데이터센터를 통째로` 수준일 때만
- **엣지 컴퓨팅**도 됩니다 — 네트워크가 끊긴 현장에서 EC2·Lambda 를 돌려 처리한 뒤 나중에 보냅니다. `연결이 없는 원격지에서 처리` 가 신호입니다
- **암호화가 기본**이고 KMS 로 키를 관리합니다
- Snowball 로 받은 데이터는 **S3 로 들어갑니다**

## 요금 모델

- **작업당 요금 + 사용 일수 + 반송비** 입니다
- 회선을 증설하거나 몇 주 동안 대역폭을 점유하는 것보다 대개 쌉니다
- 지속적으로 동기화해야 하면 Snow 는 맞지 않습니다 — **일회성 대량 이전**에 쓰는 것입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-datasync\|DataSync]] | 네트워크로 **반복 동기화**. 회선이 감당되면 이쪽 |
| [[aws-direct-connect\|Direct Connect]] | 상시 전용 회선. 설치에 수 주 |
| [[aws-storage-gateway\|Storage Gateway]] | 온프레미스에서 **계속 쓰면서** S3 를 붙입니다 |

## 시험 포인트

- [ ] `수 PB 를 옮겨야 하는데 회선이 느리다` → **Snowball Edge**
- [ ] 계산했더니 며칠이면 끝난다 → **DataSync** (Snow 는 과함)
- [ ] `연결 없는 현장에서 처리 후 전송` → Snowball Edge / Snowcone 엣지 컴퓨팅
- [ ] `공간·전원이 제한된 현장` → **Snowcone**
- [ ] 반복 동기화가 필요하면 Snow 는 오답

## 관련 노트

- 과제 명세: [[06-perf-storage\|3.1 고성능 스토리지]] · [[10-data-ingestion\|2.4 데이터 수집·변환]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Snow Family](/docs/aws-clf-c02/10-services/02-storage/aws-snow-family)
