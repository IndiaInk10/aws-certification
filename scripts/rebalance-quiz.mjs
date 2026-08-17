/**
 * 문제은행을 **실제 출제 비중에 맞춘 50문항 세트**로 다시 묶는다.
 *
 *   node scripts/rebalance-quiz.mjs [자격증-슬러그]     (기본: aws-saa-c03)
 *
 * ── 왜 필요한가 ─────────────────────────────────────────────
 *
 * 회차를 "문항을 쓴 순서"대로 나누면 한 회차의 도메인 구성이 실제 시험과 달라진다.
 * 그러면 회차 점수가 실전 예상치로 읽히지 않는다 — 어쩌다 보안 문항이 몰린 회차에서
 * 잘 나오면 준비가 된 것처럼 착각한다.
 *
 * 그래서 문항마다 붙여 둔 `모듈 [[..]]` 태그로 도메인을 판정해 비중대로 다시 담는다.
 *
 *   도메인 1 보안 아키텍처   30%  →  15문항
 *   도메인 2 복원력          26%  →  13문항
 *   도메인 3 고성능          24%  →  12문항
 *   도메인 4 비용 최적화     20%  →  10문항
 *
 * ── 어떻게 쓰나 ─────────────────────────────────────────────
 *
 * 새 문항은 `_inbox.md` 에 같은 형식으로 적어 두고 이 스크립트를 돌린다.
 * 기존 회차와 대기함을 통째로 걷어 다시 나누므로, 몇 번을 돌려도 결과가 같다.
 * (난수를 쓰지 않는다 — 같은 입력이면 같은 편성이 나와야 diff 를 읽을 수 있다.)
 *
 * ── 남는 문항은 회차로 내보내지 않는다 ─────────────────────────
 *
 * 비중을 채울 수 있는 만큼만 회차를 만들고, **남는 것은 `_inbox.md` 로 되돌린다.**
 *
 * 예전에는 남은 것을 `구성 중` 회차로 내보냈는데 그게 나빴다. 도메인이 한쪽으로 쏠린
 * 회차는 점수를 실전 예상치로 읽을 수 없어서, 결국 "이 회차는 점수로 보지 마세요" 라는
 * 경고를 달아 둔 회차가 목록에 남는다. 풀어도 되는데 믿으면 안 되는 회차는
 * 있는 것보다 없는 게 낫다 — 재고는 재고로 두고, 세트가 될 때 내보낸다.
 *
 * 그래서 문항은 계속 모아 두면 되고, 모일 때마다 이 스크립트를 다시 돌리면 된다.
 * 마지막에 "다음 완전 세트까지 도메인별로 몇 개가 더 필요한지" 를 찍어 주므로,
 * 그 숫자가 곧 다음에 만들 문항의 주문서다.
 */
import fs from 'node:fs';
import path from 'node:path';

const cert = process.argv[2] ?? 'aws-saa-c03';
const DIR = path.resolve('content/question-bank', cert);
/** 편성 대기함. 한 번에 많이 쓸 때는 `_inbox-2.md` 처럼 나눠 둬도 된다 — 전부 걷어 간다. */
const INBOX = path.join(DIR, '_inbox.md');
const isInbox = (f) => /^_inbox.*\.md$/.test(f);

/** 모듈 슬러그 → 공식 시험가이드의 도메인 번호 */
const DOMAIN_OF = {
  '01-secure-access': 1, '02-secure-workloads': 1, '03-data-protection': 1,
  '04-scalable-decoupled': 2, '05-high-availability': 2,
  '06-perf-storage': 3, '07-perf-compute': 3, '08-perf-database': 3,
  '09-perf-network': 3, '10-data-ingestion': 3,
  '11-cost-storage': 4, '12-cost-compute': 4, '13-cost-database': 4, '14-cost-network': 4,
};
const NAME = { 1: '보안', 2: '복원력', 3: '고성능', 4: '비용' };
const TARGET = { 1: 15, 2: 13, 3: 12, 4: 10 };
const SIZE = Object.values(TARGET).reduce((a, b) => a + b, 0); // 50

/* ── 1. 기존 회차 + 대기함에서 문항 블록을 통째로 걷어낸다 ───────── */
const examFiles = fs
  .readdirSync(DIR)
  .filter((f) => /^practice-exam-\d+\.md$/.test(f))
  .sort();
const inboxFiles = fs.readdirSync(DIR).filter(isInbox).sort();
const sources = [...examFiles, ...inboxFiles];

const questions = [];
for (const f of sources) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  // `> [!question]` 부터 그 문항의 <sub> 줄까지가 한 덩이
  for (const m of src.matchAll(/^> \[!question\][\s\S]*?^<sub>[^\n]*<\/sub>$/gm)) {
    const block = m[0];
    const mod = block.match(/모듈 \[\[([0-9a-z-]+)\]\]/)?.[1];
    const domain = DOMAIN_OF[mod];
    if (!domain) {
      console.error(`[rebalance] 도메인을 못 정했다 — ${f} :: 모듈 "${mod}". 태그를 확인할 것.`);
      process.exit(1);
    }
    questions.push({ block, domain });
  }
}
if (!questions.length) {
  console.error(`[rebalance] ${cert} 에서 문항을 못 찾았다.`);
  process.exit(1);
}

const pool = { 1: [], 2: [], 3: [], 4: [] };
for (const q of questions) pool[q.domain].push(q);
const stock = Object.fromEntries([1, 2, 3, 4].map((d) => [d, pool[d].length]));

/* ── 2. 비중을 채울 수 있을 때까지 완전 세트를 만든다 ────────────── */
const sets = [];
while ([1, 2, 3, 4].every((d) => pool[d].length >= TARGET[d])) {
  const take = {};
  for (const d of [1, 2, 3, 4]) take[d] = pool[d].splice(0, TARGET[d]);
  sets.push({ take, full: true });
}

const leftover = [1, 2, 3, 4].reduce((n, d) => n + pool[d].length, 0);

/*
   세트 안에서 도메인을 섞는다.

   도메인끼리 뭉쳐 있으면 "지금부터 보안 구간"이라는 것이 보여서 실제 시험과 감각이 달라진다.
   남은 개수가 많은 도메인부터 하나씩 꺼내면 난수 없이도 고르게 퍼진다.
*/
function interleave(take) {
  const lanes = [1, 2, 3, 4].map((d) => take[d].slice());
  const out = [];
  while (lanes.some((l) => l.length)) {
    lanes.sort((a, b) => b.length - a.length);
    for (const lane of lanes) if (lane.length) out.push(lane.shift());
  }
  return out;
}

/* ── 3. 파일로 쓴다 ─────────────────────────────────────────── */
for (const f of examFiles) fs.rmSync(path.join(DIR, f));
for (const f of inboxFiles) fs.rmSync(path.join(DIR, f));

const lines = [];
sets.forEach((s, i) => {
  const no = i + 1;
  const ordered = interleave(s.take);
  const c = [1, 2, 3, 4].map((d) => s.take[d].length);

  fs.writeFileSync(
    path.join(DIR, `practice-exam-${String(no).padStart(2, '0')}.md`),
    [
      '---',
      `title: "실전 구성 ${no}회차"`,
      `tags: [${cert.replace(/^aws-/, '')}, 문제은행, quiz]`,
      `exam: ${no}`,
      `문항수: ${ordered.length}`,
      'lang: ko',
      '---',
      '',
      `> [!info] 실제 출제 비중에 맞춘 ${ordered.length}문항입니다`,
      `> 도메인 구성이 실제 시험과 같습니다 — **보안 ${c[0]} · 복원력 ${c[1]} · 고성능 ${c[2]} · 비용 ${c[3]}**.`,
      '> 그래서 이 회차의 정답률은 **실전 예상 점수에 가깝습니다.** 시간을 재고 한 번에 푸세요.',
      '>',
      '> 문항은 커뮤니티 문제 정리에서 **판단이 갈리는 지점**만 가져와 상황·보기·해설을 새로 쓴 것입니다.',
      '> 출처와 방식은 [참고 자료](/docs/references)에 있습니다.',
      '',
      ordered.map((q) => q.block).join('\n\n'),
      '',
    ].join('\n'),
  );

  lines.push(
    `  ${no}회차 ${ordered.length}문항  ` +
      [1, 2, 3, 4].map((d) => `${NAME[d]} ${String(c[d - 1]).padStart(2)}`).join(' · '),
  );
});

/*
   남은 문항은 회차로 내보내지 않고 대기함으로 되돌린다.

   도메인별로 묶어서 적어 둔다 — 다음에 무엇이 모자란지 파일을 열어 보기만 해도 보이게.
*/
if (leftover) {
  const body = [
    '---',
    'title: "편성 대기함"',
    `tags: [${cert.replace(/^aws-/, '')}, 문제은행, 대기]`,
    'lang: ko',
    '---',
    '',
    `> [!info] 아직 회차가 되지 못한 ${leftover}문항입니다`,
    '> 도메인 비중(30 / 26 / 24 / 20)을 채울 만큼 모이면 회차로 나갑니다.',
    '> 새 문항도 이 파일에 같은 형식으로 적고 `node scripts/rebalance-quiz.mjs` 를 돌리세요.',
    '>',
    `> 지금 재고 — ${[1, 2, 3, 4].map((d) => `${NAME[d]} ${pool[d].length}`).join(' · ')}`,
    '',
  ];
  for (const d of [1, 2, 3, 4]) {
    if (!pool[d].length) continue;
    body.push(`## 도메인 ${d} · ${NAME[d]} (${pool[d].length}문항)`, '');
    body.push(pool[d].map((q) => q.block).join('\n\n'), '');
  }
  fs.writeFileSync(INBOX, body.join('\n'));
}

const full = sets.length;
console.log(`[rebalance] ${cert}: 문항 ${questions.length}개 → 완전 세트 ${full}개 · 대기 ${leftover}문항`);
console.log(lines.join('\n'));
if (leftover) {
  console.log(
    `  대기함    ${leftover}문항  ` +
      [1, 2, 3, 4].map((d) => `${NAME[d]} ${String(pool[d].length).padStart(2)}`).join(' · '),
  );
}

// 다음 완전 세트를 만들려면 도메인별로 몇 개가 더 필요한가 = 다음 문항 주문서
const need = [1, 2, 3, 4]
  .map((d) => [d, Math.max(0, TARGET[d] * (full + 1) - stock[d])])
  .filter(([, n]) => n > 0);
if (need.length) {
  console.log(
    `\n[rebalance] ${full + 1}회차를 완성하려면 더 필요한 문항 — ` +
      need.map(([d, n]) => `도메인 ${d} ${NAME[d]} ${n}개`).join(' · '),
  );
}
