---
title: "Amazon CloudFront"
tags: [aws, clf-c02, service, 네트워킹]
category: 04-네트워킹
module: 5
status: 미학습
---

# Amazon CloudFront

> 엣지 로케이션으로 콘텐츠를 캐싱하는 CDN

| | |
|---|---|
| **카테고리** | 04-네트워킹 |
| **배우는 모듈** | [[05-networking]] |
| **문제은행 출현** | 67회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

전 세계 **엣지 로케이션**에 콘텐츠 사본을 캐싱해 두고 사용자와 가장 가까운 곳에서 전달하는 **콘텐츠 전송 네트워크(CDN)** 입니다.

## 핵심 개념

- **엣지 로케이션** — 리전과는 별개로 전 세계에 흩어져 있는 캐시 거점입니다. 사용자는 멀리 있는 원본 서버 대신 가장 가까운 엣지에서 응답을 받으므로 **지연 시간이 줄어듭니다.**
- **원본(Origin)** — 실제 콘텐츠가 있는 곳입니다. [[amazon-s3]] 버킷, [[amazon-ec2]], [[elastic-load-balancing]], 심지어 온프레미스 서버까지 원본이 될 수 있습니다.
- **TTL과 무효화** — 엣지는 지정한 시간(TTL) 동안 사본을 보관합니다. 콘텐츠를 바꿨는데 즉시 반영해야 하면 무효화(invalidation)를 요청합니다.
- **정적과 동적을 모두 전달합니다** — 이미지·동영상 같은 정적 파일이 대표적이지만, API 응답이나 동적 콘텐츠도 엣지를 거치며 가속됩니다.
- **보안 기능이 함께 붙습니다** — [[aws-shield]]의 기본 DDoS 방어가 적용되고, [[aws-waf]] 규칙과 [[aws-certificate-manager]]의 HTTPS 인증서를 연결할 수 있습니다.
- **원본을 감출 수 있습니다** — Origin Access Control을 쓰면 S3 버킷을 인터넷에 직접 열지 않고 CloudFront를 통해서만 접근하게 만들 수 있습니다.

## 요금 모델

- **엣지에서 인터넷으로 나간 데이터 전송량(GB)** 과 **HTTP/HTTPS 요청 수**가 기본 축입니다. 단가는 트래픽이 나간 지역마다 다릅니다.
- **원본에서 엣지로 가져오는 트래픽**, 월 일정 건수를 넘는 무효화 요청, 필드 수준 암호화 같은 부가 기능은 별도입니다.
- **AWS 원본(S3·EC2 등)에서 CloudFront로 나가는 데이터 전송은 무료**입니다. 그래서 S3를 직접 공개하는 것보다 앞에 CloudFront를 두는 편이 오히려 저렴해지는 경우가 있습니다.
- 프리 티어로 매월 일정량의 데이터 전송과 요청을 무료로 쓸 수 있습니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-global-accelerator]] | CloudFront는 엣지에 **콘텐츠를 캐싱**해 HTTP/HTTPS를 가속하고, Global Accelerator는 캐싱 없이 **AWS 백본으로 라우팅**하며 TCP·UDP까지 다룹니다. "캐싱"이 보이면 CloudFront입니다 |
| [[amazon-route-53]] | Route 53은 어디로 갈지 알려 주는 DNS이고, CloudFront는 실제 콘텐츠를 전달합니다. 보통 함께 씁니다 |
| [[amazon-elasticache]] | 둘 다 캐시지만 CloudFront는 사용자와 가까운 **엣지에서 콘텐츠**를, ElastiCache는 애플리케이션과 DB 사이에서 **데이터**를 캐싱합니다 |

## 시험 포인트

- [ ] "**CDN**", "**엣지 로케이션**", "**전 세계 사용자에게 정적 콘텐츠를 빠르게**", "**지연 시간 감소**", "**캐싱**" → CloudFront
- [ ] 동영상 스트리밍, 이미지·파일 배포, 웹사이트 가속은 CloudFront가 정답인 경우가 많습니다
- [ ] CloudFront에는 Shield Standard의 DDoS 방어가 기본 포함되고 WAF를 붙일 수 있다는 점이 보안 문제로도 나옵니다
- [ ] 함정: 엣지 로케이션은 리전이나 가용 영역이 아닙니다. 리전 수보다 훨씬 많고 별도로 셉니다
- [ ] 함정: TCP·UDP 트래픽이거나 **고정 IP 주소**가 필요하면 Global Accelerator입니다

## 관련 노트

- 모듈: [[05-networking]]
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
