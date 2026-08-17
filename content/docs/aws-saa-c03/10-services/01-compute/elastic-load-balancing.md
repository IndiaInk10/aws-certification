---
title: "Elastic Load Balancing"
tags: [aws, saa-c03, service, 컴퓨팅]
category: 01-compute
status: 미학습
---

> ALB · NLB · GWLB 세 종류. **프로토콜과 붙일 수 있는 것**이 답을 정한다

## 한 줄로 말하면

트래픽을 여러 대상에 분산하고 **상태 확인으로 비정상 대상을 뺍니다.** SAA 는 세 종류 중 어느 것인지를 묻습니다.

## 핵심 개념

| | 계층 | 언제 |
|---|---|---|
| **ALB** | 7 (HTTP/HTTPS) | 경로·호스트 기반 라우팅, **WAF 를 붙일 수 있다**, HTTP→HTTPS 리디렉션 |
| **NLB** | 4 (TCP/UDP) | **UDP**, 초저지연, **고정 IP**, 초당 수백만 요청 |
| **GWLB** | 3 | 서드파티 **방화벽·IDS 어플라이언스를 트래픽 경로에 끼워 넣을 때** |

**어느 것인지 가르는 낱말**

- `UDP` · `고정 IP` → **NLB**. ALB 와 CloudFront 는 UDP 를 못 받습니다
- `URL 경로에 따라 다른 서비스로` → **ALB**
- `타사 방화벽 어플라이언스를 반드시 거쳐야` → **GWLB + GWLB 엔드포인트**
- **WAF 는 NLB 에 붙지 않습니다.** 7계층 자원(ALB·CloudFront·API Gateway·AppSync)에만 붙습니다

**배치와 상태 확인**

- **인터넷 연결 로드 밸런서는 퍼블릭 서브넷에** 있어야 합니다. 대상인 EC2 는 프라이빗에 있어도 되고, 그게 정상 구성입니다
- 고가용성을 위해 **여러 AZ 에 걸치게** 합니다. 그래서 교차 AZ 트래픽이 생기고, 비용 문항에서 그것이 소재가 됩니다
- **상태 확인**이 비정상 대상을 뺍니다. NLB 의 기본은 **TCP 연결 확인**이라 애플리케이션이 500 을 뱉어도 정상으로 봅니다 — HTTP 상태 확인으로 바꿔야 합니다
- ASG 의 상태 확인 유형을 **ELB** 로 두면 로드 밸런서 판정이 인스턴스 교체로 이어집니다

**TLS** — ACM 인증서를 붙여 로드 밸런서에서 TLS 를 종료합니다. 백엔드까지 암호화하려면 대상 그룹도 HTTPS 로 둡니다.

## 요금 모델

- **시간당 요금 + 처리한 용량 단위(LCU 등)** 로 붙습니다
- 여러 AZ 에 걸치면 **교차 AZ 데이터 전송**이 발생할 수 있습니다
- 로드 밸런서를 없애고 CloudFront 만 쓰는 식의 절감은 대개 요구를 깨뜨리므로, 비용 문항에서도 ELB 자체보다 **무엇을 뒤에 두느냐**가 답이 됩니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-global-accelerator\|Global Accelerator]] | GA 는 **리전을 넘어** 경로를 잡습니다. ELB 는 리전 안 분산 |
| [[amazon-cloudfront\|CloudFront]] | CloudFront 는 **캐시**. HTTP 전용이라 UDP 불가 |
| [[amazon-route-53\|Route 53]] | Route 53 은 DNS 로 **어디로 보낼지**만 정합니다 |

## 시험 포인트

- [ ] `UDP` · `고정 IP` → NLB
- [ ] `SQL 인젝션 차단` 을 로드 밸런서에서 → **ALB + WAF** (NLB 에는 WAF 를 못 붙임)
- [ ] `타사 방화벽을 경로에` → GWLB + 엔드포인트
- [ ] 인터넷 연결 ALB 인데 트래픽이 안 닿는다 → **퍼블릭 서브넷에 두지 않은 것**
- [ ] HTTP 오류를 감지 못 한다 → 상태 확인을 **HTTP** 로
- [ ] HTTP→HTTPS 강제 → **ALB 리스너 규칙의 리디렉션**

## 관련 노트

- 과제 명세: [[04-scalable-decoupled\|2.1 확장성]] · [[05-high-availability\|2.2 고가용성]] · [[09-perf-network\|3.4 고성능 네트워크]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Elastic Load Balancing](/docs/aws-clf-c02/10-services/01-compute/elastic-load-balancing)
