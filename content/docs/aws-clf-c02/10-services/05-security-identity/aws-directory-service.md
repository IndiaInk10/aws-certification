---
title: "AWS Directory Service"
tags: [aws, clf-c02, service, 보안-자격증명]
category: 05-보안-자격증명
module: 
status: 미학습
---

> 관리형 Active Directory

| | |
|---|---|
| **카테고리** | 05-보안-자격증명 |
| **배우는 모듈** | *이 코스에서는 다루지 않음 (문제은행 전용)* |
| **문제은행 출현** | 7회 |
| **상태** | - 미학습 |

## 한 줄로 말하면

**Microsoft Active Directory**를 AWS에서 관리형으로 운영하거나, 사내 AD를 AWS와 연결해 주는 서비스입니다.

## 핵심 개념

- **하는 일** — 사용자·그룹·컴퓨터 정보를 담는 디렉터리를 AWS에서 운영합니다. 이미 쓰고 있던 사내 계정으로 AWS 리소스와 Windows 워크로드에 로그인하게 만드는 것이 목적입니다.
- **AWS Managed Microsoft AD** — 실제 Active Directory를 AWS가 관리형으로 띄워 줍니다. 그룹 정책, 도메인 조인, 신뢰 관계를 그대로 사용하실 수 있습니다.
- **AD Connector** — 디렉터리를 복제하지 않고 인증 요청을 **온프레미스 AD로 전달**하는 프록시입니다. 사용자 계정을 계속 사내에서만 관리하고 싶을 때 고릅니다.
- **Simple AD** — 소규모용 저비용 디렉터리입니다. 기본적인 사용자 관리와 도메인 조인만 필요할 때 씁니다.
- **어디에 쓰나** — Amazon WorkSpaces 사용자 계정, EC2 Windows 인스턴스의 도메인 조인, Amazon RDS for SQL Server 인증, 그리고 AWS 콘솔 로그인 연동입니다.
- **하이브리드 상황의 서비스입니다** — 이미 AD를 운영하는 조직이 클라우드로 넘어올 때 등장합니다. 처음부터 클라우드로 시작한 조직이라면 굳이 필요하지 않습니다.

## 요금 모델

- **디렉터리를 띄워 둔 시간(시간당)** 기준입니다. 디렉터리 유형과 크기(Standard·Enterprise 등)에 따라 단가가 달라집니다.
- 다중 AZ 배포나 도메인 컨트롤러 추가처럼 가용성을 높이면 그만큼 요금이 더 붙습니다.
- 접속자가 없어도 디렉터리를 삭제하기 전까지는 요금이 계속 발생하므로, 쓰지 않는 디렉터리는 정리하시기 바랍니다.

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[aws-iam]] | IAM은 **AWS API와 리소스**에 대한 권한을 다룹니다. Windows 도메인·그룹 정책 이야기가 나오면 Directory Service입니다 |
| [[amazon-cognito]] | Cognito는 내가 만든 **앱의 최종 사용자**를 다룹니다. 사내 직원 계정이 아닙니다 |
| [[amazon-workspaces]] | WorkSpaces는 가상 데스크톱이고, 그 사용자 계정을 담아 두는 디렉터리가 Directory Service입니다 |

## 시험 포인트

- [ ] "**Active Directory**", "**도메인 조인**", "기존 사내 디렉터리를 AWS와 연결" → Directory Service
- [ ] 사용자를 **온프레미스에 그대로 두고 인증만 넘기려면** AD Connector입니다
- [ ] AWS 리소스 권한은 IAM, 앱 사용자 로그인은 Cognito, Windows 도메인은 Directory Service로 갈립니다
- [ ] 시간당 과금이므로 사용하지 않는 디렉터리는 삭제해야 요금이 멈춥니다

## 관련 노트

- 모듈: *코스 미포함*
- 오답: [[wrong-answers]]

## 출처

- AWS Skill Builder — Cloud Practitioner Essentials
