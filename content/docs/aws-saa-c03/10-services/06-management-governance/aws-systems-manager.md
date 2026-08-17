---
title: "AWS Systems Manager"
tags: [aws, saa-c03, service, 관리]
category: 06-management-governance
status: 미학습
---

> `SSH 없이` · `배스천 없이` · `패치를 일괄로` — 세 낱말이 모두 여기로 온다

## 한 줄로 말하면

인스턴스와 서버를 원격으로 관리합니다. 접속·패치·명령 실행·설정 저장이 한 묶음입니다.

## 핵심 개념

**Session Manager — 가장 자주 나오는 기능**

- **SSH 포트를 열지 않고** 셸에 접속합니다. **배스천 호스트도, 키 페어도, 22번 포트도 필요 없습니다**
- `프라이빗 서브넷의 인스턴스에 안전하게 접속` 의 표준 답입니다. 배스천을 세우는 보기와 정면으로 대비됩니다
- **접속 기록이 CloudTrail 에 남고** 세션 로그를 S3·CloudWatch 로 보낼 수 있습니다 — `누가 무엇을 했는지 감사` 요구를 함께 만족시킵니다
- 프라이빗 서브넷에서는 **인터페이스 VPC 엔드포인트**를 두면 인터넷 없이 됩니다

**Patch Manager** — 여러 인스턴스에 패치를 일괄 적용하고 규정 준수를 보고합니다. `수백 대의 패치를 자동으로` 의 답입니다.

**Parameter Store** — 설정값과 비밀(SecureString)을 저장합니다. **표준 파라미터는 무료**라 `저렴하게 설정값 관리` 의 답이고, **자동 교체가 필요하면 [[aws-secrets-manager\|Secrets Manager]]** 입니다.

**Run Command** — 여러 인스턴스에 명령을 한 번에 실행합니다. SSH 로 하나씩 들어가는 보기의 대안입니다.

**그 밖에** — 자동화 런북 · 인벤토리(설치된 소프트웨어 목록) · State Manager(원하는 상태 유지) · 유지 관리 기간.

**전제** — 인스턴스에 **SSM 에이전트**가 있어야 하고 **IAM 인스턴스 프로파일**로 권한이 있어야 합니다. Amazon Linux 2·최신 우분투 AMI 에는 에이전트가 기본 설치되어 있습니다.

## 요금 모델

- **핵심 기능 대부분이 무료**입니다(고급 파라미터·일부 기능만 유료)
- 배스천 호스트 EC2 를 상시 띄우는 비용이 사라지므로, **보안과 비용을 동시에** 개선하는 답이 됩니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| 배스천 호스트 | EC2 를 띄우고 보안 그룹을 관리해야 합니다. Session Manager 가 대체 |
| [[aws-secrets-manager\|Secrets Manager]] | 자동 교체가 필요할 때 |
| AWS Config | 구성 준수 **감시**. Systems Manager 는 **조치** |

## 시험 포인트

- [ ] `SSH·배스천 없이 프라이빗 인스턴스 접속` → **Session Manager**
- [ ] `누가 접속해 무엇을 했는지 감사` → 세션 로깅 + CloudTrail
- [ ] `수백 대 패치 자동화` → **Patch Manager**
- [ ] `무료로 설정값 저장` → **Parameter Store**
- [ ] 접속이 안 된다 → **SSM 에이전트 / 인스턴스 프로파일 / VPC 엔드포인트**
- [ ] 22번 포트를 여는 보기는 대개 오답

## 관련 노트

- 과제 명세: [[02-secure-workloads\|1.2 안전한 워크로드]] · [[01-secure-access\|1.1 안전한 액세스]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 AWS Systems Manager](/docs/aws-clf-c02/10-services/06-management-governance/aws-systems-manager)
