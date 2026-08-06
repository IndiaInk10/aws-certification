---
title: "AWS OpsWorks"
tags: [aws, clf-c02, service, 관리-거버넌스]
category: 06-관리-거버넌스
module: 
status: 미학습
---

> Chef/Puppet 기반 구성 관리

| | |
|---|---|
| **카테고리** | 06-관리-거버넌스 |
| **배우는 모듈** | *이 코스에서는 다루지 않음 (문제은행 전용)* |
| **문제은행 출현** | 13회 |
| **상태** | - 미학습 |

> [!warning] AWS 공식 In-Scope 목록에 없는 서비스입니다
> [CLF-C02 시험 가이드의 In-Scope 서비스 목록](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)에
> 이 서비스는 올라 있지 않습니다. 목록이 "완전하지 않다"고 밝히고 있어 출제 가능성이 0은 아니지만,
> **우선순위는 낮게** 두시면 됩니다. "Chef/Puppet = OpsWorks" 연결만 기억해 두시면 충분합니다.

> [!warning] 2024년에 종료된 서비스입니다
> In-Scope 목록에도 없고 서비스도 사라졌으니, **실제 시험에서 만나실 가능성은 낮습니다.**
> 옛 문제은행에 남아 있을 때를 대비해 **"Chef/Puppet = OpsWorks"** 한 줄만 알고 넘어가시면 됩니다.

## 한 줄로 말하면

**Chef와 Puppet**을 관리형으로 제공해, 서버 안쪽의 소프트웨어 구성을 코드로 관리하게 해 주던 서비스입니다.

## 핵심 개념

- **구성 관리(Configuration management)** — 서버에 어떤 패키지가 깔려 있어야 하고 설정 파일이 어떤 상태여야 하는지를 코드로 정의하고 그 상태를 유지하는 일입니다.
- **Chef와 Puppet** — 업계에서 널리 쓰이던 구성 관리 도구입니다. 이미 이 도구로 레시피와 매니페스트를 쌓아 둔 조직이 AWS로 옮겨 올 때 그대로 쓰라고 만든 서비스였습니다.
- **인프라가 아니라 서버 안쪽입니다** — 서버를 새로 만들어 내는 것이 아니라, 이미 있는 서버 **안의 소프트웨어 상태**를 다룬다는 점이 핵심이었습니다.
- **온프레미스 서버도 대상** — EC2 인스턴스뿐 아니라 데이터 센터의 서버까지 같은 방식으로 관리할 수 있었습니다.
- **시험에서는 이름만 알면 됩니다** — CLF-C02 수준에서는 "Chef/Puppet = OpsWorks"라는 연결 하나로 충분합니다.

## 요금 모델

- **관리 대상 노드(서버) 수와 사용 시간**을 기준으로 과금하는 구조였습니다.
- 관리 대상이 되는 **EC2 인스턴스와 EBS 볼륨 요금은 별도**입니다.
- 시험에서 금액을 묻지는 않습니다. "관리하는 서버 수만큼 낸다" 정도로 정리해 두시면 됩니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-cloudformation]] | CloudFormation은 **인프라를 만드는** 템플릿입니다. OpsWorks는 만들어진 서버의 **소프트웨어 구성**을 Chef/Puppet으로 유지합니다 |
| [[aws-systems-manager]] | AWS 기본 도구로 패치·인벤토리·원격 접속을 하려면 Systems Manager, **기존 Chef/Puppet 자산을 그대로** 쓰려면 OpsWorks입니다 |
| [[aws-elastic-beanstalk]] | Beanstalk은 **애플리케이션을 올려 배포**하는 데 초점이 있고, OpsWorks는 **서버 구성 관리**에 초점이 있습니다 |

## 시험 포인트

- [ ] 선택지에 **Chef 또는 Puppet**이라는 단어가 보이면 OpsWorks입니다. 사실상 이 한 단어로 갈립니다
- [ ] "코드로 인프라를 프로비저닝"은 CloudFormation이지 OpsWorks가 아닙니다
- [ ] "패치 적용·인벤토리 수집·Session Manager"는 Systems Manager입니다
- [ ] 이 코스 강의에는 나오지 않고 문제은행에서만 만나게 됩니다

## 관련 노트

- 모듈: *코스 미포함*
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
