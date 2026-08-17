---
title: "AWS Global Accelerator"
tags: [aws, saa-c03, service, 네트워킹]
category: 04-networking
status: 미학습
---

> 캐시하지 않는다. **경로**를 좋게 하고 **고정 IP** 를 준다

## 한 줄로 말하면

엣지에서 받아 **AWS 백본으로 실어 보냅니다.** 캐시가 아니라 경로를 개선하는 것이라 CloudFront 와 용도가 다릅니다.

## 핵심 개념

- **고정 애니캐스트 IP 두 개**를 줍니다. 클라이언트가 IP 를 바꿀 수 없는 상황에서 결정적입니다
- **TCP·UDP 전부** 다룹니다. 게임·VoIP·IoT·DNS 처럼 **HTTP 가 아닌** 트래픽의 답입니다
- **초 단위 리전 전환** — 엔드포인트 상태를 보고 넘깁니다. DNS 캐시에 발목 잡히지 않습니다
- **엔드포인트로 등록할 수 있는 것** — ALB · NLB · EC2 인스턴스 · 탄력적 IP 입니다. **S3 버킷은 엔드포인트가 되지 않습니다** — 이 사실이 오답을 가릅니다
- **Shield Advanced 의 보호 대상**으로 지정할 수 있습니다. 반대로 **WAF 는 붙지 않습니다**(7계층 자원 전용)
- **캐시하지 않습니다** — 같은 파일을 반복해서 내보내는 상황에서는 CloudFront 보다 불리하고, 비용도 추가됩니다

## 요금 모델

- **액셀러레이터마다 시간당 고정 요금 + 전송한 데이터** 로 붙습니다
- 캐시가 없어 오리진 전송이 줄지 않으므로 **비용 절감 문항의 답이 되는 일은 거의 없습니다.** 성능·가용성을 사는 것입니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-cloudfront\|CloudFront]] | 캐시하느냐. `이미지·동영상` → CloudFront, `고정 IP·UDP` → GA |
| [[amazon-route-53\|Route 53]] | Route 53 은 DNS 라 전환이 느립니다. GA 는 초 단위 |

## 시험 포인트

- [ ] `고정 IP` · `UDP` · `게임 서버` → Global Accelerator
- [ ] `여러 리전의 NLB 로 트래픽` → GA 엔드포인트 그룹
- [ ] **S3 를 엔드포인트로 등록하는 보기는 오답**
- [ ] GA 를 DDoS 로부터 보호 → **Shield Advanced 보호 대상에 추가** (WAF 는 못 붙임)
- [ ] 비용 최적화 문항에서 GA 가 답이면 대개 오답입니다 — 요금이 추가되는 쪽입니다

## 관련 노트

- 과제 명세: [[09-perf-network\|3.4 고성능 네트워크]] · [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Global Accelerator](/docs/aws-clf-c02/10-services/04-networking/aws-global-accelerator)
