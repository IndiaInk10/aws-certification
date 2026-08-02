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
 */
import fs from 'node:fs';
import path from 'node:path';

// 문제은행 원문은 문서가 아니라 빌드 입력 데이터다. content/docs 밖에 둔다.
const BANK_ROOT = path.resolve('content/question-bank');
const OUT = path.resolve('src/generated/quiz');

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const index = [];

for (const cert of fs.readdirSync(BANK_ROOT, { withFileTypes: true })) {
  if (!cert.isDirectory()) continue;
  const bank = path.join(BANK_ROOT, cert.name);
  if (!fs.existsSync(bank)) continue;

  const exams = [];
  const files = fs
    .readdirSync(bank)
    .filter((f) => /^practice-exam-\d+\.md$/.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

  for (const f of files) {
    const no = parseInt(f.match(/\d+/)[0]);
    const src = fs.readFileSync(path.join(bank, f), 'utf8');
    // 프론트매터 title — 회차 번호 대신 보여 줄 이름이 있으면 쓴다 (예: 공식 연습 문제)
    const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const label = fm ? (fm[1].match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] : undefined;
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

    const multi = questions.filter((q) => q.answers.length > 1).length;
    fs.writeFileSync(
      path.join(OUT, `${cert.name}-${String(no).padStart(2, '0')}.json`),
      JSON.stringify({ cert: cert.name, exam: no, questions }),
    );
    exams.push({ exam: no, count: questions.length, multi, ...(label ? { label } : {}) });
  }

  index.push({
    cert: cert.name,
    exams,
    total: exams.reduce((a, b) => a + b.count, 0),
  });
}

fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index));
console.log(
  '[quiz] ' +
    index.map((c) => `${c.cert}: ${c.exams.length} exams / ${c.total} questions`).join(', '),
);
