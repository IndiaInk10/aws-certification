/**
 * 문제은행 마크다운 → 회차별 JSON
 *
 *   > [!question] 문제
 *   > a) 보기
 *   > b) 보기
 *   >> [!success]- Answer
 *   >> b) 보기
 *
 *   <sub>🔗 [[서비스]] | 모듈 [[..]] | [참고](url)</sub>
 *
 * 다국어
 *   원문:   content/question-bank/<cert>/practice-exam-NN.md
 *   번역본: content/question-bank/<cert>/i18n/<locale>/practice-exam-NN.md
 *
 *   번역본은 원문과 같은 형식이고, 문항은 **순서**로, 보기는 **글머리(a/b/c)**로 맞춘다.
 *   정답·관련 서비스·모듈은 원문 것만 쓴다 (언어와 무관한 정보).
 *   번역본이 없는 문항은 원문 언어 텍스트로 조용히 폴백한다.
 */
import fs from 'node:fs';
import path from 'node:path';

// 문제은행 원문은 문서가 아니라 빌드 입력 데이터다. content/docs 밖에 둔다.
const BANK_ROOT = path.resolve('content/question-bank');
const OUT = path.resolve('src/generated/quiz');

/** 지원 로케일. 앞에 있는 것이 UI 기본값. */
const LOCALES = ['ko', 'en'];
const HANGUL = /[가-힣]/;
const EXAM_FILE = /^practice-exam-(\d+)\.md$/;

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

/** 프론트매터 한 줄 값 */
function frontmatter(src, key) {
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return undefined;
  const m = fm[1].match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
}

/** 문항 블록 파싱 — 원문·번역본 모두 같은 형식이므로 하나로 쓴다 */
function parseQuestions(src) {
  const lines = src.split(/\r?\n/);
  const questions = [];
  let cur = null;
  let inAnswer = false;

  const flush = () => {
    if (cur && cur.choices.length && cur.answers.length) questions.push(cur);
    cur = null;
    inAnswer = false;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    const qm = line.match(/^>\s*\[!question\]\s*(.*)$/);
    if (qm) {
      flush();
      cur = { q: qm[1].trim(), choices: [], answers: [], services: [], modules: [], ref: null };
      continue;
    }
    if (!cur) continue;

    if (/^>>\s*\[!success\]/.test(line)) {
      inAnswer = true;
      continue;
    }

    const am = line.match(/^>>\s*([a-z])\)\s*(.*)$/);
    if (am && inAnswer) {
      cur.answers.push(am[1]);
      continue;
    }

    const cm = line.match(/^>\s*([a-z])\)\s*(.*)$/);
    if (cm && !inAnswer) {
      cur.choices.push({ k: cm[1], t: cm[2].trim() });
      continue;
    }

    // 메타 줄:  <sub>관련: [[서비스]] … | 모듈 [[…]] | [참고](url)</sub>
    if (/^<sub>/.test(line) && /\[\[/.test(line)) {
      const parts = line.split('|');
      const svc = parts[0] || '';
      cur.services = [...svc.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);
      const modPart = parts.find((p) => /모듈/.test(p)) || '';
      cur.modules = [...modPart.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);
      const ref = line.match(/\[참고\]\(([^)]+)\)/);
      cur.ref = ref ? ref[1] : null;
      flush();
      continue;
    }
    // 빈 줄에서는 마감하지 않는다. 정답 블록 뒤 빈 줄 다음에 메타 줄이 오기 때문.
    // 마감은 다음 문항이 시작될 때(위 qm 분기)와 파일 끝에서 한다.
  }
  flush();

  return questions;
}

/** 원문이 어느 언어인지 — 프론트매터 lang 이 우선, 없으면 한글 유무로 판단 */
function baseLang(src, questions) {
  const declared = frontmatter(src, 'lang');
  if (declared && LOCALES.includes(declared)) return declared;
  const sample = questions.map((q) => q.q).join(' ');
  return HANGUL.test(sample) ? 'ko' : 'en';
}

const warnings = [];

const index = [];

for (const cert of fs.readdirSync(BANK_ROOT, { withFileTypes: true })) {
  if (!cert.isDirectory()) continue;
  const bank = path.join(BANK_ROOT, cert.name);

  const exams = [];
  const files = fs
    .readdirSync(bank)
    .filter((f) => EXAM_FILE.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

  for (const f of files) {
    const no = parseInt(f.match(/\d+/)[0]);
    const src = fs.readFileSync(path.join(bank, f), 'utf8');
    // 프론트매터 title — 회차 번호 대신 보여 줄 이름이 있으면 쓴다 (예: 공식 연습 문제)
    const label = frontmatter(src, 'title');
    const questions = parseQuestions(src);
    const base = baseLang(src, questions);

    // 원문 텍스트를 로케일 맵으로 바꾼다: q -> { <base>: "…" }
    const merged = questions.map((q) => ({
      ...q,
      q: { [base]: q.q },
      choices: q.choices.map((c) => ({ k: c.k, t: { [base]: c.t } })),
    }));

    const langs = [base];

    for (const loc of LOCALES) {
      if (loc === base) continue;
      const tf = path.join(bank, 'i18n', loc, f);
      if (!fs.existsSync(tf)) continue;

      const tq = parseQuestions(fs.readFileSync(tf, 'utf8'));
      if (tq.length !== merged.length) {
        warnings.push(
          `${cert.name}/i18n/${loc}/${f}: 문항 수 ${tq.length} ≠ 원문 ${merged.length} — 겹치는 앞부분만 적용`,
        );
      }

      let applied = 0;
      merged.forEach((q, i) => {
        const t = tq[i];
        if (!t) return;
        q.q[loc] = t.q;
        // 보기는 순서가 아니라 글머리(a/b/c)로 맞춘다. 원문 정답 키를 그대로 쓰기 때문.
        for (const c of q.choices) {
          const tc = t.choices.find((x) => x.k === c.k);
          if (tc) c.t[loc] = tc.t;
          else warnings.push(`${cert.name}/i18n/${loc}/${f}: Q${i + 1} 보기 ${c.k}) 없음`);
        }
        applied++;
      });

      if (applied > 0) langs.push(loc);
    }

    const multi = merged.filter((q) => q.answers.length > 1).length;
    fs.writeFileSync(
      path.join(OUT, `${cert.name}-${String(no).padStart(2, '0')}.json`),
      JSON.stringify({ cert: cert.name, exam: no, base, langs, questions: merged }),
    );
    exams.push({ exam: no, count: merged.length, multi, base, langs, ...(label ? { label } : {}) });
  }

  index.push({
    cert: cert.name,
    exams,
    total: exams.reduce((a, b) => a + b.count, 0),
    langs: [...new Set(exams.flatMap((e) => e.langs))].sort(
      (a, b) => LOCALES.indexOf(a) - LOCALES.indexOf(b),
    ),
  });
}

fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index));
for (const w of warnings) console.warn('[quiz] ' + w);
console.log(
  '[quiz] ' +
    index
      .map((c) => {
        const translated = c.exams.filter((e) => e.langs.length > 1).length;
        return `${c.cert}: ${c.exams.length} exams / ${c.total} questions (번역본 ${translated}회차)`;
      })
      .join(', '),
);
