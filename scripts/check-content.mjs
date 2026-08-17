/**
 * 콘텐츠 정합성 검사.
 *
 *   node scripts/check-content.mjs
 *
 * 사실관계(정답이 맞는지)는 사람이 봐야 하지만, 아래 항목은 기계가 잡을 수 있다.
 * 하나라도 걸리면 exit 1.
 */
import fs from 'node:fs';
import path from 'node:path';

const DOCS = path.resolve('content/docs');
const problems = [];
const warn = [];

/** 본문이 실제로 가리킨 이미지의 절대 경로. 아래 "고아 이미지" 검사에 쓴다. */
const usedImages = new Set();

/** 재귀로 .md 수집 */
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'images') walk(p, acc);
    } else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

const files = walk(DOCS);
const rel = (f) => path.relative(process.cwd(), f).split(path.sep).join('/');

// 위키링크 대상 인덱스
const noteNames = new Set(files.map((f) => path.basename(f, '.md')));

// ── 1. 추출 잔재 ────────────────────────────────────────────
const JUNK = [
  ['[정답]', '남아 있는 [정답] 마커'],
  ['Paragraph text = 17pt', '레이아웃 자리표시자'],
  ['17pt인지 확인', '레이아웃 자리표시자'],
  ['합격 8000', '깨진 합격 기준'],
  ['**Subheading**', '추출 잔재 제목'],
  ['동영상 대본', '영상 대본 흔적'],
  ['대본 추출', '자리표시자'],
  ['LOC_M0', '영상 파일명'],
];

// ── 2. 문제 블록 파싱 ───────────────────────────────────────
function parseFences(src) {
  const out = [];
  const re = /^```(quiz|exam)([^\n]*)\n([\s\S]*?)^```/gm;
  let m;
  while ((m = re.exec(src))) out.push({ lang: m[1], meta: m[2].trim(), body: m[3] });
  return out;
}

function parseQuestions(body) {
  const qs = [];
  let cur = null;
  for (const raw of body.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const mq = line.match(/^Q[.:]\s*(.*)$/);
    if (mq) {
      if (cur) qs.push(cur);
      cur = { q: mq[1], choices: [], correct: 0, explain: '' };
      continue;
    }
    if (!cur) continue;
    const mc = line.match(/^([-+])\s+(.*)$/);
    if (mc) {
      cur.choices.push(mc[2]);
      if (mc[1] === '+') cur.correct++;
      continue;
    }
    const me = line.match(/^>\s?(.*)$/);
    if (me) { cur.explain += me[1] + '\n'; continue; }
    if (!cur.choices.length) cur.q += ' ' + line;
  }
  if (cur) qs.push(cur);
  return qs;
}

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const name = rel(f);
  const isCourse = name.includes('/20-course/');
  const isService = name.includes('/10-services/');
  const isTemplate = name.includes('/90-templates/');

  // 1. 잔재
  for (const [needle, why] of JUNK) {
    if (isTemplate) continue;
    if (src.includes(needle)) problems.push(`${name} :: ${why} — "${needle}"`);
  }

  // 2. 위키링크 해석
  for (const m of src.matchAll(/\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g)) {
    const target = m[1].trim();
    if (!noteNames.has(target)) {
      warn.push(`${name} :: 링크 대상 없음 — [[${target}]]`);
    }
  }

  // 3. 문제 블록
  for (const fence of parseFences(src)) {
    const qs = parseQuestions(fence.body);
    if (!qs.length) {
      problems.push(`${name} :: 빈 ${fence.lang} 블록`);
      continue;
    }
    qs.forEach((q, i) => {
      const tag = `${name} :: ${fence.lang}${fence.meta ? ` "${fence.meta}"` : ''} Q${i + 1}`;
      if (q.choices.length < 2) problems.push(`${tag} — 보기가 ${q.choices.length}개`);
      if (q.correct === 0) problems.push(`${tag} — 정답 표시(+)가 없음`);

      // "(N개 선택)" 과 정답 개수가 맞는가
      const mSel = q.q.match(/\((\d+)\s*개\s*선택\)/);
      if (mSel) {
        const n = Number(mSel[1]);
        if (q.correct !== n)
          problems.push(`${tag} — "(${n}개 선택)"인데 정답 표시가 ${q.correct}개`);
      } else if (q.correct > 1) {
        problems.push(`${tag} — 복수 정답(${q.correct}개)인데 지문에 "(N개 선택)" 없음`);
      }

      // 해설 유무
      if (!q.explain.trim()) problems.push(`${tag} — 해설 없음`);

      // 해설에서 보기를 글자로 지칭 (셔플되므로 금지)
      // \b 로 단독 알파벳만 잡는다. "EC2·ELB·Auto" 같은 약어를 오탐하지 않도록.
      if (
        /(?:보기|선택지)\s+[A-H]\b|\([A-H]\)|\b[A-H]\s*·\s*[A-H]\b|정답은\s+[A-H]\b/.test(
          q.explain,
        )
      )
        problems.push(`${tag} — 해설이 보기를 글자로 지칭 (보기 순서는 셔플됨)`);

      // 보기 중복
      const seen = new Set();
      for (const c of q.choices) {
        const k = c.replace(/\*\*/g, '').trim();
        if (seen.has(k)) problems.push(`${tag} — 중복된 보기: "${k.slice(0, 30)}…"`);
        seen.add(k);
      }
    });
  }

  // 4. 강의 모듈 필수 구조
  if (isCourse) {
    if (!/^##\s*1\.\s*왜 필요한가\s*$/m.test(src))
      problems.push(`${name} :: "## 1. 왜 필요한가" 없음`);
    if (!/##\s*1\.\s*왜 필요한가\s*\n+>\s*.+/.test(src))
      problems.push(`${name} :: 왜 필요한가 아래 인용구 없음 (빌드 스크립트가 파싱함)`);
    if (!/^###\s*L1\./m.test(src)) problems.push(`${name} :: "### L1." 강의 헤딩 없음`);
    if (!/^```exam/m.test(src)) problems.push(name + ' :: 모듈 평가(exam 블록) 없음');
    // 헤더 줄의 숫자와 실제 개수가 맞는가
    const head = src.match(/^>\s*강의\s*(\d+)개\s*·\s*지식 점검\s*(\d+)문항\s*·\s*모듈 평가\s*(\d+)문항/m);
    const lessons = (src.match(/^###\s*L\d+\./gm) || []).length;
    let checks = 0, exam = 0;
    for (const fence of parseFences(src)) {
      const n = parseQuestions(fence.body).length;
      if (fence.lang === 'quiz') checks += n; else exam += n;
    }
    if (!head) {
      warn.push(`${name} :: 상단 요약 줄 형식 불일치`);
    } else {
      const [, a, b, c] = head.map(Number);
      if (a !== lessons) problems.push(`${name} :: 헤더 "강의 ${a}개" ≠ 실제 ${lessons}개`);
      if (b !== checks) problems.push(`${name} :: 헤더 "지식 점검 ${b}문항" ≠ 실제 ${checks}문항`);
      if (c !== exam) problems.push(`${name} :: 헤더 "모듈 평가 ${c}문항" ≠ 실제 ${exam}문항`);
    }
  }

  // 5. 서비스 노트 필수 섹션
  if (isService && !isTemplate) {
    for (const h of ['## 한 줄로 말하면', '## 핵심 개념', '## 요금 모델', '## 시험 포인트']) {
      if (!src.includes(h)) problems.push(`${name} :: "${h}" 섹션 없음`);
    }
    const body = src.split('## 핵심 개념')[1] ?? '';
    if (/^\s*-\s*$/m.test(body)) problems.push(`${name} :: 빈 불릿`);
    // 금액 표기 (요금은 자주 바뀌므로 쓰지 않기로 함)
    const money = src.match(/\$\s?[\d.,]+|[\d.,]+\s?(달러|USD)/g);
    if (money) warn.push(`${name} :: 금액 표기 — ${[...new Set(money)].join(', ')}`);
  }

  // 6. 이미지 경로 실재 확인
  for (const m of src.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    const p = m[1];
    if (p.startsWith('http')) continue;
    const abs = path.resolve(path.dirname(f), p);
    if (!fs.existsSync(abs)) problems.push(`${name} :: 이미지 없음 — ${p}`);
    else usedImages.add(abs);
  }

  /*
    7. mermaid 잔존 금지

    다이어그램은 D2 하나로 그린다 (```d2 → 빌드 타임 SVG). 렌더러를 둘 두면 클라이언트로
    나가는 자바스크립트가 다시 늘고, 같은 그림이 두 문법으로 갈라진다.
    이관하는 동안에는 잠깐 공존시켰지만 지금은 끝났다 — 다시 들어오면 여기서 세운다.
  */
  if (/^```mermaid/m.test(src)) {
    problems.push(`${name} :: mermaid 블록이 남아 있음 — d2 로 옮길 것`);
  }
}

// ── 8. 고아 이미지 ──────────────────────────────────────────
/*
   위 6번은 "본문이 가리킨 이미지가 실재하는가" 한 방향만 본다. 반대 방향 —
   **어느 본문도 가리키지 않는 이미지** — 는 아무도 안 본다. 강의 캡처를 통째로 받아 두고
   실제로는 일부만 쓰기 때문에 조용히 쌓인다.

   지우는 것은 사람이 판단할 일이라(나중에 쓸 그림일 수 있다) 경고로만 알린다.
*/
for (const certDir of fs.readdirSync(DOCS, { withFileTypes: true })) {
  if (!certDir.isDirectory()) continue;
  const imgDir = path.join(DOCS, certDir.name, 'images');
  if (!fs.existsSync(imgDir)) continue;

  const all = [];
  const collect = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) collect(p);
      else all.push(p);
    }
  };
  collect(imgDir);

  const orphans = all.filter((p) => !usedImages.has(p));
  if (orphans.length) {
    const bytes = orphans.reduce((a, p) => a + fs.statSync(p).size, 0);
    warn.push(
      `${certDir.name}/images :: 어느 문서도 참조하지 않는 이미지 ${orphans.length}장 ` +
        `(${(bytes / 1024 / 1024).toFixed(1)}MB / 전체 ${all.length}장)`,
    );
    for (const p of orphans.slice(0, 10)) {
      warn.push(`  · ${path.relative(imgDir, p).split(path.sep).join('/')}`);
    }
    if (orphans.length > 10) warn.push(`  · … 그 밖 ${orphans.length - 10}장`);
  }
}

// ── 9. 문제은행 태그 ────────────────────────────────────────
/*
   문항 끝의 <sub>관련: [[서비스]] | 모듈 [[…]]</sub> 줄이 오답노트의 "무엇을 주로 틀리는가"
   와 학습 모드 오픈북 창의 재료다. 이 줄이 없으면 그 문항은 어디에도 집계되지 않고,
   틀려도 어느 강의로 돌아가야 하는지 알려 줄 수 없다.

   서비스 이름이 안 나오는 개념 문항(공동 책임 모델, 통합 결제 …)이라도 **모듈**은 붙일 수 있다.
   서비스는 비어도 되지만 모듈은 있어야 한다는 뜻. 아직 안 붙은 것이 많아 오류가 아니라 경고다.
*/
const BANK = path.resolve('content/question-bank');
if (fs.existsSync(BANK)) {
  for (const cert of fs.readdirSync(BANK, { withFileTypes: true })) {
    if (!cert.isDirectory()) continue;
    const dir = path.join(BANK, cert.name);
    for (const f of fs.readdirSync(dir).filter((x) => /^practice-exam-\d+\.md$/.test(x))) {
      const lines = fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/);
      const missing = [];
      let cur = null;
      let n = 0;
      const flush = () => {
        if (!cur) return;
        if (!cur.sub || !/모듈/.test(cur.sub)) missing.push(cur.n);
      };
      for (const l of lines) {
        if (/^>\s*\[!question\]/.test(l)) {
          flush();
          cur = { n: ++n, sub: null };
          continue;
        }
        if (cur && /^<sub>/.test(l)) cur.sub = l;
      }
      flush();
      if (missing.length) {
        warn.push(
          `${cert.name}/${f} :: 모듈 태그 없는 문항 ${missing.length}개 — Q${missing.slice(0, 8).join(', Q')}${missing.length > 8 ? ' …' : ''}`,
        );
      }
    }
  }
}

// ── 출력 ────────────────────────────────────────────────────
const line = '─'.repeat(60);
if (warn.length) {
  console.log(`\n${line}\n확인 필요 ${warn.length}건\n${line}`);
  for (const w of warn) console.log('  ! ' + w);
}
if (problems.length) {
  console.log(`\n${line}\n오류 ${problems.length}건\n${line}`);
  for (const p of problems) console.log('  ✗ ' + p);
  console.log('');
  process.exit(1);
}
console.log(`\n✓ 검사 통과 — 문서 ${files.length}개, 오류 0건, 확인 필요 ${warn.length}건\n`);
