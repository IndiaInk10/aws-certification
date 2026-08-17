---
title: "CLF-C02 시험 개요"
tags: [MOC, clf-c02, 시험]
---

## 시험 형식

| 항목 | 내용 |
|---|---|
| 정식 명칭 | AWS Certified Cloud Practitioner (**CLF-C02**) |
| 문항 수 | 65문항 (채점 50 + 미채점 15) |
| 시간 | 90분 |
| 점수 | 100~1000점 · **700점 이상 합격** |
| 문제 유형 | 객관식(정답 1개) · 복수 응답(정답 2개 이상) |
| 응시료 | USD 100 |
| 유효기간 | 3년 |

> 미채점 15문항이 섞여 있어 어떤 문제가 점수에 반영되는지 알 수 없습니다. 전부 푸세요.

## 도메인별 출제 비중

```d2 CLF-C02 출제 비중
grid-columns: 1
grid-gap: 0

d3: "3. 클라우드 기술과 서비스 · 34%" {
  style.stroke-width: 0
  style.fill: transparent
  label.near: top-left
  bar: "" { width: 544; height: 22 }
}
d2: "2. 보안과 규정 준수 · 30%" {
  style.stroke-width: 0
  style.fill: transparent
  label.near: top-left
  bar: "" { width: 480; height: 22 }
}
d1: "1. 클라우드 개념 · 24%" {
  style.stroke-width: 0
  style.fill: transparent
  label.near: top-left
  bar: "" { width: 384; height: 22 }
}
d4: "4. 청구·요금·지원 · 12%" {
  style.stroke-width: 0
  style.fill: transparent
  label.near: top-left
  bar: "" { width: 192; height: 22 }
}
```

| 도메인 | 비중 | 해당 단계 |
|---|---|---|
| 1. 클라우드 개념 | 24% | [[01-cloud-intro]] · [[13-well-architected]] |
| 2. 보안과 규정 준수 | **30%** | [[09-security]] |
| 3. 클라우드 기술과 서비스 | **34%** | [[02-cloud-computing]] · [[03-compute-services]] · [[04-global-infrastructure]] · [[05-networking]] · [[06-storage]] · [[07-databases]] · [[10-monitoring-governance]] · [[12-migration]] |
| 4. 청구·요금·지원 | 12% | [[11-billing-support]] |

> [!tip] 전략
> **보안(30%)이 두 번째로 크지만 서비스 수는 적습니다.** 가성비가 가장 좋은 구간이에요.
> 반대로 도메인 3(34%)은 서비스가 가장 많으니 시간을 제일 많이 배분하세요.

## 문제를 푸는 순서

AWS 공식 시험 준비 과정이 권하는 순서입니다. 아는 문제를 틀리지 않게 해 주는 절차라서, 실전에서 그대로 따라가시면 됩니다.

| 순서 | 하는 일 |
|---|---|
| 1 | **보기를 보기 전에 문제부터** 읽고 무엇을 묻는지 파악합니다 |
| 2 | **핵심 단어와 수식 어구**를 찾습니다 |
| 3 | 아는 지식으로 **명백한 오답부터 제외**합니다 |
| 4 | 남은 보기를 2번에서 찾은 기준으로 **비교·대조**합니다 |
| 5 | 오래 걸리면 **가장 그럴듯한 답을 골라 두고 표시**한 뒤 넘어갑니다 |

> [!warning] 수식 어구가 답을 바꿉니다
> **"가장 비용이 적은"** 을 묻는데 **"가장 복원력이 뛰어난"** 답을 고르면 틀립니다.
> 두 보기 모두 기술적으로는 맞는 말이라서, 지문이 무엇을 우선하라고 했는지가 유일한 판단 기준이 됩니다.
> `최저 비용` · `가장 빠른` · `운영 부담이 가장 적은` · `가장 안전한` 같은 말에 밑줄을 치는 습관을 들이세요.

> [!tip] 비워 두면 무조건 0점입니다
> 오답에 대한 감점이 없습니다. **모르는 문제도 반드시 찍고 넘어가세요.**
> 검토 화면에서 표시해 둔 문항으로 바로 돌아갈 수 있습니다.

## 자주 나오는 함정

- **공동 책임 모델** — 무엇이 AWS 책임이고 무엇이 고객 책임인지. 최빈출
- **비슷한 이름 구분** — CloudWatch / CloudTrail / Config / Trusted Advisor
- **스토리지 3종** — EBS(블록) / EFS(파일) / S3(객체)
- **탐지 서비스 3종** — GuardDuty(위협) / Inspector(취약점) / Macie(민감 데이터)
- **서버 통째로 vs 데이터베이스만** — 서버를 그대로 옮기면 Application Migration Service, DB만 옮기면 DMS
- **"Choose TWO"** — 복수 응답 문제를 놓치지 않기

## 공식 자료

- [시험 가이드 PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf)
- [AWS Skill Builder — Cloud Practitioner Essentials](https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials-/KEGU7KUPF6)
- [공식 연습 문제 세트 20문항](https://skillbuilder.aws/learn/E4W52ZKK6P/official-practice-question-set-aws-certified-cloud-practitioner-clfc02--/VRA5A1WETH) — 시간 제한 없고 응시 횟수도 무제한입니다. **연습 모드**로 풀면 문항마다 바로 해설이 나옵니다
- [In-Scope 서비스 목록](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html) — 어떤 서비스가 출제 범위인지의 **공식 기준**입니다

## 다음

[[00-learning-path]] [문제 풀이](/aws-clf-c02/quiz) [[wrong-answers]]
