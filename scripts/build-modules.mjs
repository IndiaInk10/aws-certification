/**
 * 20-course/*.md → src/generated/modules.json
 * 학습 경로 진행률 UI 와 모듈 이전/다음 내비게이션이 쓴다.
 */
import fs from 'node:fs';
import path from 'node:path';

const DOCS = path.resolve('content/docs');
const OUT = path.resolve('src/generated');

const certs = [];

/** ```quiz / ```exam 펜스 안의 `Q.` 문항 수 */
function countQuestions(src, lang) {
  const re = new RegExp('```' + lang + '[^\\n]*\\n([\\s\\S]*?)```', 'g');
  let n = 0;
  let m;
  while ((m = re.exec(src))) n += (m[1].match(/^Q[.:]/gm) || []).length;
  return n;
}

for (const e of fs.readdirSync(DOCS, { withFileTypes: true })) {
  if (!e.isDirectory()) continue;
  const dir = path.join(DOCS, e.name, '20-course');
  if (!fs.existsSync(dir)) continue;

  const modules = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => {
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const slug = f.replace(/\.md$/, '');
      // CRLF 파일도 읽히도록 \r?\n
      const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      const title = fm.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] ?? slug;
      const order = Number(fm.match(/^module:\s*(\d+)/m)?.[1] ?? 0);

      // "## 1. 왜 필요한가" 아래 첫 인용문
      const why =
        src.match(/##\s*1\.\s*왜 필요한가\s*\n+>\s*(.+)/)?.[1]?.trim() ?? '';

      // 정리본으로 옮긴 모듈은 새 형식으로, 아직 원문인 모듈은 옛 형식으로 센다
      const lessons = (src.match(/^###\s*L\d+\./gm) || []).length;
      const checks = countQuestions(src, 'quiz');
      const exam = countQuestions(src, 'exam');

      return {
        slug,
        order,
        title,
        why,
        url: `/docs/${e.name}/20-course/${slug}`,
        lessons: lessons || (src.match(/동영상 대본/g) || []).length,
        knowledgeChecks: checks || (src.match(/지식 점검/g) || []).length,
        quiz: exam || (src.match(/\*\*Q\d+\./g) || []).length,
      };
    })
    .sort((a, b) => a.order - b.order);

  certs.push({ cert: e.name, modules });
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'modules.json'), JSON.stringify(certs));
console.log(
  '[modules] ' + certs.map((c) => `${c.cert}: ${c.modules.length}`).join(', '),
);
