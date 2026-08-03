/**
 * content/glossary.json → src/generated/glossary.json
 *
 * 원본은 손으로 고치는 파일이라 형식이 흐트러지기 쉽다.
 * 여기서 한 번 검사하고, 카테고리별로 정렬해서 <GlossaryList> 가 바로 쓸 형태로 내보낸다.
 * (본문 툴팁은 remark-obsidian.mjs 가 원본을 직접 읽어 처리하므로 이 파일과 무관하다.)
 */
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('content/glossary.json');
const OUT = path.resolve('src/generated');

/** 용어집에 표시할 카테고리 순서. 여기 없는 값은 뒤로 밀린다. */
const CAT_ORDER = [
  '서비스 약어',
  '클라우드 기본',
  '컴퓨팅',
  '확장과 가용성',
  '네트워크',
  '스토리지와 데이터',
  '애플리케이션 통합',
  'AI와 분석',
  '보안',
  '운영과 배포',
  '비용',
];

const entries = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const problems = [];
const seen = new Map(); // 표기 → 소유한 용어

for (const [i, e] of entries.entries()) {
  const at = `#${i + 1} ${e.term ?? '(term 없음)'}`;
  for (const k of ['term', 'en', 'short', 'cat']) {
    if (typeof e[k] !== 'string' || !e[k].trim()) problems.push(`${at} :: ${k} 없음`);
  }
  // 말투 규칙 — CONTENT-STYLE.md 1장. `~합니다` 체로 끝나야 한다
  for (const k of ['short', 'long']) {
    const v = e[k];
    if (typeof v !== 'string' || !v.trim()) continue;
    if (!/니다\.?$/.test(v.trim())) problems.push(`${at} :: ${k} 가 "~합니다" 체로 끝나지 않음`);
    if (/(?:한다|이다|된다|있다|없다)\.\s|(?:한다|이다|된다|있다|없다)\.?$/.test(v))
      problems.push(`${at} :: ${k} 에 "~한다" 체가 섞임`);
  }
  // 호버 카드에 들어가는 문장이므로 short 는 한 문장으로 짧게 유지한다
  if (typeof e.short === 'string' && (e.short.match(/\. /g) ?? []).length > 0)
    problems.push(`${at} :: short 가 두 문장 이상 (long 으로 옮길 것)`);
  if (e.aliases && !Array.isArray(e.aliases)) problems.push(`${at} :: aliases 가 배열이 아님`);
  if (e.see && !Array.isArray(e.see)) problems.push(`${at} :: see 가 배열이 아님`);
  if (Array.isArray(e.see) && e.see.includes(e.term)) problems.push(`${at} :: see 가 자기 자신을 가리킴`);

  // 같은 표기를 두 용어가 나눠 가지면 자동 링크가 어느 쪽인지 알 수 없다
  for (const s of [e.term, ...(e.aliases ?? [])]) {
    if (typeof s !== 'string') continue;
    if (seen.has(s)) problems.push(`${at} :: 표기 중복 — "${s}" (이미 ${seen.get(s)} 가 씀)`);
    else seen.set(s, e.term);
  }
}

// `see` 는 다른 용어의 term 을 가리켜야 한다. 오타가 나면 화면에서 조용히 사라진다.
const terms = new Set(entries.map((e) => e.term));
for (const e of entries)
  for (const s of e.see ?? [])
    if (!terms.has(s)) problems.push(`${e.term} :: see 가 없는 용어를 가리킴 — "${s}"`);

/**
 * 영어 원어 안에 **다른 용어의 약어**가 안 펼쳐진 채로 박혀 있으면 알려 준다.
 * (`NAT 게이트웨이` 의 원어를 `NAT Gateway` 로만 적으면 NAT 이 무슨 말인지 그 자리에서 안 풀린다.)
 * 판단이 애매한 경우가 있어 빌드를 세우지는 않는다.
 */
const suspects = [];
for (const e of entries) {
  const en = e.en ?? '';
  const words = en.split(/[^A-Za-z]+/).filter((w) => w.length > 1);
  for (const tok of new Set(en.match(/\b[A-Z][A-Za-z0-9]*[A-Z0-9]\b/g) ?? [])) {
    if (tok === e.term || !terms.has(tok)) continue; // 자기 자신이거나 용어집에 없으면 넘어간다
    if (en.includes(tok + ' (')) continue; // 바로 뒤 괄호에 풀어 놓았다 — SSH (Secure Shell)
    const spelled = [...tok.replace(/[^A-Za-z]/g, '')].every((c) =>
      words.some((w) => w[0].toUpperCase() === c.toUpperCase()),
    );
    if (!spelled) suspects.push(`${e.term} :: "${en}" 안의 ${tok} 가 안 펼쳐짐`);
  }
}
if (suspects.length) {
  console.warn('[glossary] 확인 필요 ' + suspects.length + '건');
  for (const s of suspects) console.warn('  · ' + s);
}

if (problems.length) {
  console.error('[glossary] 오류 ' + problems.length + '건');
  for (const p of problems) console.error('  ✗ ' + p);
  process.exit(1);
}

const rank = (c) => {
  const i = CAT_ORDER.indexOf(c);
  return i < 0 ? CAT_ORDER.length : i;
};

const sorted = [...entries].sort(
  (a, b) => rank(a.cat) - rank(b.cat) || a.term.localeCompare(b.term, 'ko'),
);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'glossary.json'), JSON.stringify(sorted));
console.log(
  `[glossary] ${sorted.length}개 · 카테고리 ${new Set(sorted.map((e) => e.cat)).size}개`,
);
