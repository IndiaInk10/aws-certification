---
title: "Amazon EKS"
tags: [aws, saa-c03, service, 컴퓨팅]
category: 01-compute
status: 미학습
---

> 관리형 Kubernetes. 지문에 `Kubernetes` 가 있을 때만 고른다

## 한 줄로 말하면

Kubernetes 제어 플레인을 관리형으로 제공합니다. **기존 k8s 자산을 그대로 쓰는 것**이 유일한 선택 이유이고, 그 말이 없으면 ECS 가 더 단순합니다.

## 핵심 개념

- **제어 플레인과 데이터 플레인이 나뉩니다** — 제어 플레인은 AWS 가 관리하고, 노드(데이터 플레인)는 관리형 노드 그룹 또는 [[aws-fargate\|Fargate]] 로 돌립니다
- **완전 프라이빗 클러스터** — 제어 플레인 퍼블릭 액세스를 끄고 노드를 프라이빗 서브넷에 두면, 노드가 AWS 서비스에 닿을 **경로를 따로 마련해야** 합니다. 이미지를 받으려면 **ECR·S3 엔드포인트**, 그 밖에 STS 같은 인터페이스 엔드포인트가 필요합니다
- **파드 권한은 서비스 계정에 IAM 역할을 연결**해서 줍니다(IRSA). 액세스 키를 코드에 넣거나 노드 역할에 몰아 주는 보기는 오답입니다
- **확장은 두 층입니다**
  - **파드** — Horizontal Pod Autoscaler
  - **노드** — Cluster Autoscaler 또는 Karpenter
  - 하나만 하면 파드가 배치되지 못하거나 노드가 놉니다. 2개 선택 문항의 단골입니다
- **비밀 암호화** — KMS 키를 지정해 **봉투 암호화**를 켜면 etcd 에 저장되는 쿠버네티스 비밀이 한 겹 더 암호화됩니다. EBS 볼륨 암호화는 **노드 디스크** 이야기라 다릅니다
- **노드 디스크 암호화** — 시작 템플릿에 고객 관리형 키를 지정해야 새로 뜨는 노드에 자동 적용됩니다

## 요금 모델

- **클러스터마다 시간당 제어 플레인 요금**이 붙습니다. ECS 에는 없는 항목이라, 단순한 워크로드에서 EKS 를 고르면 그만큼 손해입니다
- 여기에 노드(EC2) 또는 Fargate 태스크 요금이 더해집니다

## 헷갈리는 것과 구분

| 비교 대상 | 차이 |
|---|---|
| [[amazon-ecs\|Amazon ECS]] | `Kubernetes` 요구가 없으면 ECS 가 더 단순하고 싸다 |
| [[aws-fargate\|Fargate]] | EKS 위에서도 Fargate 를 시작 유형으로 고를 수 있습니다 |

## 시험 포인트

- [ ] `Kubernetes` · `기존 매니페스트` 가 있을 때만 EKS
- [ ] 프라이빗 클러스터에서 이미지를 못 받으면 → **ECR·S3 엔드포인트**
- [ ] 파드 권한 → **서비스 계정에 IAM 역할** (액세스 키·노드 역할 오답)
- [ ] 워크로드 변동에 맞춰 확장 → **HPA + Karpenter/Cluster Autoscaler 둘 다**
- [ ] etcd 의 비밀 암호화 → **KMS 봉투 암호화** (EBS 암호화 아님)

## 관련 노트

- 과제 명세: [[07-perf-compute\|3.2 고성능 컴퓨팅]] · [[02-secure-workloads\|1.2 안전한 워크로드]]
- 비교: [[service-comparisons]]

> 더 기초부터: [CLF-C02 의 Amazon EKS](/docs/aws-clf-c02/10-services/01-compute/amazon-eks)
