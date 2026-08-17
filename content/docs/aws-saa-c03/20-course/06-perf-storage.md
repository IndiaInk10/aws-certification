---
title: "3.1 고성능·확장 가능한 스토리지 솔루션 결정"
description: "블록 · 파일 · 객체 중 무엇이고, 파일이면 어느 파일 시스템인가"
tags: [saa-c03, 도메인3, 과제명세]
kind: domain
module: 6
status: 미학습
---

> 도메인 3 · 고성능 아키텍처 설계 **24%** · 과제 명세 5개 중 **첫 번째** (과제당 ≈4.8%)

## 1. 왜 필요한가

> CLF 는 "블록·파일·객체 중 무엇인가"까지 물었습니다. SAA 는 **파일이면 그중 어느 것인가**를 묻습니다.

여기서 갈리는 폭이 SAA 에서 확 넓어집니다. CLF 에서 `Amazon FSx` 하나로 배웠던 것이
SAA 에서는 **Lustre · Windows File Server · ONTAP · OpenZFS** 네 갈래로 쪼개져 나옵니다.
실제 시험에서 **FSx for Lustre 와 FSx for ONTAP 가 각각 따로** 나왔다는 보고가 있습니다.

EBS 도 마찬가지입니다. CLF 는 "EC2 에 붙는 디스크"면 충분했지만
SAA 는 gp3 인지 io2 인지, IOPS 가 필요한지 처리량이 필요한지를 묻습니다.

## 2. 이번에 새로 나오는 서비스

| 서비스 | 한 줄 | 이 과제에서 맡는 역할 |
|---|---|---|
| [[amazon-s3\|Amazon S3]] | 객체 스토리지 | 기본값. 정적 자산·데이터 레이크 |
| [[amazon-ebs\|Amazon EBS]] | EC2 한 대에 붙는 블록 볼륨 | 볼륨 유형 선택이 곧 성능 선택 |
| [[amazon-efs\|Amazon EFS]] | 여러 Linux 인스턴스가 함께 쓰는 NFS | 리전 단위 공유 |
| [[amazon-fsx\|Amazon FSx]] | 관리형 파일 시스템 4종 | **여기가 SAA 의 새 영역** |
| [[aws-storage-gateway\|AWS Storage Gateway]] | 온프레미스를 AWS 스토리지에 잇는다 | 하이브리드 |
| [[aws-datasync\|AWS DataSync]] | 대량 파일 전송 자동화 | 온프레미스 → AWS 이관 |
| [[aws-snow-family\|AWS Snow Family]] | 물리 장비로 데이터를 실어 나른다 | 네트워크로는 몇 주 걸릴 때 |

## 3. 이 과제가 묻는 것

**먼저 세 갈래로 가릅니다**

| | 언제 | 단위 |
|---|---|---|
| **블록 (EBS · 인스턴스 스토어)** | 인스턴스 **한 대**의 디스크. DB 데이터 파일 | 단일 AZ |
| **파일 (EFS · FSx)** | **여러 대가 동시에** 같은 폴더를 본다 | EFS 는 리전 |
| **객체 (S3)** | 통째로 넣고 통째로 꺼낸다. 웹에서 접근 | 리전 |

**EBS 볼륨 유형**

| | 성격 | 언제 |
|---|---|---|
| **gp3** | 범용 SSD. IOPS 와 처리량을 **용량과 따로** 올린다 | 기본값. 대부분 여기 |
| **io1 · io2** | 프로비저닝 IOPS SSD | `수만 IOPS` · 미션 크리티컬 DB |
| **st1** | 처리량 최적화 HDD | 빅데이터 · 로그 처리처럼 **순차** 읽기 |
| **sc1** | 콜드 HDD | 거의 안 건드리는 데이터 |

**IOPS 와 처리량은 다른 요구입니다.** `초당 트랜잭션 수` 면 IOPS(SSD), `초당 MB` 면 처리량(HDD 도 답이 될 수 있음).

**FSx 네 갈래** — [[service-comparisons]] 에 신호 표가 있습니다.

| | 한 줄 |
|---|---|
| **Lustre** | HPC · 머신러닝. **S3 를 파일 시스템처럼** 붙여 쓴다 |
| **Windows File Server** | SMB + Active Directory. Windows 애플리케이션 |
| **NetApp ONTAP** | NFS·SMB·iSCSI 를 한 볼륨에서. 온프레미스 NetApp 이관 |
| **OpenZFS** | ZFS 스냅샷·클론이 필요할 때 |

**S3 성능**

- **멀티파트 업로드** — 큰 파일을 쪼개서 병렬로. `100MB 이상`이면 권장, `5GB 이상`이면 필수
- **Transfer Acceleration** — 엣지로 받아 AWS 백본으로. `멀리 있는 사용자가 업로드` 신호
- **바이트 범위 가져오기** — 큰 객체의 일부만 병렬로 내려받기
- 프리픽스를 나누면 요청 처리량이 함께 올라갑니다

**온프레미스가 나오면**

| 지문 | 답 |
|---|---|
| `온프레미스 앱은 그대로 두고 저장만 클라우드로` | **Storage Gateway** |
| `한 번에 대량으로 옮긴다`, 네트워크로 몇 주 | **Snow Family** |
| `주기적으로 계속 동기화` | **DataSync** |

## 4. 시험에서 갈리는 지점

| 지문에 이게 있으면 | 이쪽 |
|---|---|
| `여러 EC2 가 같은 파일을 동시에` (Linux) | **EFS** |
| `Windows 애플리케이션` · `SMB` · `Active Directory` | **FSx for Windows File Server** |
| `HPC` · `머신러닝 학습 데이터` · `S3 데이터를 고속으로` | **FSx for Lustre** |
| `NFS 와 SMB 를 동시에` · `NetApp` | **FSx for NetApp ONTAP** |
| `수만 IOPS 가 필요한 데이터베이스` | **io2** |
| `대용량 순차 처리`, 비용도 고려 | **st1** |
| `용량은 그대로인데 IOPS 만 올리고 싶다` | **gp3** (gp2 는 용량에 묶여 있다) |
| `전 세계 사용자가 큰 파일을 업로드` | **S3 Transfer Acceleration** |
| `5GB 넘는 파일 업로드` | **멀티파트 업로드** |
| `페타바이트를 옮기는데 회선이 느리다` | **Snow Family** |

> [!tip] EBS 는 AZ 를 못 넘습니다
> `다른 AZ 의 인스턴스에 붙인다` 는 보기는 그대로 오답입니다. 스냅샷을 떠서 다른 AZ 에 만들어야 합니다.
> `여러 인스턴스가 동시에` 도 원칙적으로 EBS 가 아닙니다 — EFS 쪽입니다.

## 5. 여기까지의 지도

주황색이 이번 과제에서 **처음** 나온 서비스입니다.

```d2
classes: {
  new: {
    style: {
      fill: "#ff9900"
      stroke: "#232f3e"
      stroke-width: 2
      font-color: "#111111"
    }
  }
}

grid-columns: 1
grid-gap: 16

"1.1 AWS 리소스에 대한 보안 액세스 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "AWS IAM"
  "IAM Identity Center"
  "AWS Organizations"
  "AWS Directory Service"
  "Amazon Cognito"
  "AWS RAM"
  "AWS Secrets Manager"
  "AWS Control Tower"
}
"1.2 안전한 워크로드 및 애플리케이션 설계": {
  grid-rows: 3
  *.width: 190
  *.style.font-size: 12

  "Amazon VPC"
  "AWS PrivateLink"
  "AWS WAF"
  "AWS Shield"
  "AWS Firewall Manager"
  "Amazon GuardDuty"
  "Amazon Inspector"
  "AWS Systems Manager"
  "Elastic Load Balancing"
}
"1.3 적합한 데이터 보안 제어 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "AWS KMS"
  "AWS CloudHSM"
  "Amazon Macie"
  "AWS Certificate Manager"
  "Amazon S3"
  "AWS Backup"
}
"2.1 확장 가능하고 느슨하게 결합된 아키텍처 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon SQS"
  "Amazon SNS"
  "Amazon EventBridge"
  "AWS Step Functions"
  "EC2 Auto Scaling"
  "AWS Lambda"
  "AWS Fargate"
  "Amazon API Gateway"
}
"2.2 고가용성 및/또는 내결함성 아키텍처 설계": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12

  "Amazon Route 53"
  "Amazon RDS"
  "Amazon Aurora"
  "Amazon DynamoDB"
  "Elastic Disaster Recovery"
}
"3.1 고성능·확장 가능한 스토리지 솔루션 결정": {
  grid-rows: 2
  *.width: 190
  *.style.font-size: 12
  *.class: new

  "Amazon EBS"
  "Amazon EFS"
  "Amazon FSx"
  "AWS Storage Gateway"
  "AWS DataSync"
  "AWS Snow Family"
}
```

## 6. 셀프 체크

- [ ] 블록·파일·객체를 요구사항 한 줄로 가른다
- [ ] FSx 네 갈래를 각각의 선택 신호로 구분한다
- [ ] gp3 와 io2 를 나누는 기준을 말한다
- [ ] IOPS 가 필요한 상황과 처리량이 필요한 상황을 구분한다
- [ ] Storage Gateway · Snow Family · DataSync 를 각각 언제 쓰는지 안다

---

> 더 기초부터: [CLF-C02 의 스토리지 모듈](/docs/aws-clf-c02/20-course/06-storage)
