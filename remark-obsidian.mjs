/**
 * Obsidian 문법 → Fumadocs 변환 (빌드 타임)
 *
 * 원본 마크다운은 그대로 두고 여기서만 변환한다. Obsidian 호환 유지가 목적.
 *
 *  1. 최상단 H1 제거          — frontmatter title 과 중복
 *  2. [[위키링크]]            → 상대 .md 링크 (createRelativeLink 가 URL 로 변환)
 *  3. > [!type] 콜아웃        → <Callout type>
 *  4. <details>/<summary>     → <Accordions><Accordion>
 *  5. ../images/mN/x.png     → /cert-images/<cert>/mN/x.png
 *  6. ```mermaid             → <Mermaid chart="...">
 *  7. ```quiz / ```exam      → <InlineQuiz>  (본문에서 바로 푸는 문제)
 *  8. 용어집 용어             → <Term>  (본문 첫 등장에만 호버 설명을 붙인다)
 */
import fs from 'node:fs';
import path from 'node:path';

const DOCS_ROOT = path.resolve(process.cwd(), 'content/docs');
const GLOSSARY_PATH = path.resolve(process.cwd(), 'content/glossary.json');

/** 노트 이름(확장자 제외) → { path, title }. 동명이인은 첫 번째 우선. */
function buildIndex(dir, acc = new Map()) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'images') buildIndex(p, acc);
    } else if (e.name.endsWith('.md') || e.name.endsWith('.mdx')) {
      const key = e.name.replace(/\.mdx?$/, '');
      if (acc.has(key)) continue;
      // 표시 이름은 파일명이 아니라 frontmatter title 에서 가져온다
      let title = key;
      try {
        const head = fs.readFileSync(p, 'utf8').slice(0, 800);
        const m = head.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        const t = m && m[1].match(/^title:\s*"?(.*?)"?\s*$/m);
        if (t) title = t[1];
      } catch {
        /* 읽기 실패 시 파일명 사용 */
      }
      acc.set(key, { path: p, title });
    }
  }
  return acc;
}

let INDEX = null;
function noteIndex() {
  if (!INDEX) INDEX = buildIndex(DOCS_ROOT);
  return INDEX;
}

const CALLOUT_TYPE = {
  note: 'info', info: 'info', todo: 'info', question: 'info', example: 'info', quote: 'info',
  tip: 'success', success: 'success', check: 'success', done: 'success',
  warning: 'warn', caution: 'warn', attention: 'warn', important: 'warn',
  danger: 'error', error: 'error', bug: 'error', failure: 'error', fail: 'error',
};

/**
 * ```quiz / ```exam 블록 파싱.
 *
 *   Q. 질문 (여러 줄 가능)
 *   - 오답 보기
 *   + 정답 보기
 *   > 해설 (여러 줄 가능)
 *
 * 빈 줄로 문항을 구분한다. `+` 가 2개 이상이면 복수 정답 문항이 된다.
 */
function parseQuiz(src) {
  const questions = [];
  let cur = null;
  const push = () => {
    if (cur && cur.q.trim() && cur.choices.length) {
      questions.push({
        q: cur.q.trim(),
        choices: cur.choices,
        ...(cur.explain.trim() ? { explain: cur.explain.trim() } : {}),
      });
    }
    cur = null;
  };

  for (const raw of src.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;

    const mq = line.match(/^Q[.:]\s*(.*)$/);
    if (mq) {
      push();
      cur = { q: mq[1], choices: [], explain: '' };
      continue;
    }
    if (!cur) continue;

    const mc = line.match(/^([-+])\s+(.*)$/);
    if (mc) {
      cur.choices.push(mc[1] === '+' ? { t: mc[2], c: true } : { t: mc[2] });
      continue;
    }
    const me = line.match(/^>\s?(.*)$/);
    if (me) {
      cur.explain += (cur.explain ? '\n' : '') + me[1];
      continue;
    }
    // 그 밖의 줄은 질문 본문 이어쓰기 (보기가 시작되기 전까지만)
    if (!cur.choices.length) cur.q += '\n' + line;
  }
  push();
  return questions;
}

/**
 * ```layers 블록 파싱 — 들여쓰기가 곧 포함 관계.
 *
 *   AWS 리전 · eu-west-1 | AZ 3개 이상
 *     가용 영역 A | 독립 전력·네트워킹
 *       데이터 센터
 *
 * `|` 뒤는 옆에 작게 붙는 설명.
 */
function parseLayers(src) {
  const roots = [];
  const stack = []; // { indent, node }

  for (const raw of src.split(/\r?\n/)) {
    if (!raw.trim()) continue;
    const indent = raw.match(/^[ \t]*/)[0].replace(/\t/g, '  ').length;
    const [label, ...rest] = raw.trim().split('|');
    const node = {
      label: label.trim(),
      children: [],
      ...(rest.length ? { note: rest.join('|').trim() } : {}),
    };

    while (stack.length && stack[stack.length - 1].indent >= indent) stack.pop();
    if (stack.length) stack[stack.length - 1].node.children.push(node);
    else roots.push(node);
    stack.push({ indent, node });
  }
  return roots;
}

/**
 * content/glossary.json 을 읽어 "본문에서 찾을 표기" 하나짜리 정규식으로 만든다.
 *
 * 긴 표기를 앞에 두어야 "가용 영역" 이 "영역" 보다 먼저 잡힌다.
 * 영문 표기는 앞뒤 단어 경계를 붙여 SLA 가 SLAB 안에 걸리지 않게 한다.
 */
let GLOSSARY = null;
function glossary() {
  if (GLOSSARY) return GLOSSARY;

  let entries = [];
  try {
    entries = JSON.parse(fs.readFileSync(GLOSSARY_PATH, 'utf8'));
  } catch {
    /* 용어집이 없어도 빌드는 계속한다 */
  }

  const byForm = new Map();
  for (const e of entries) {
    if (!e || typeof e.term !== 'string') continue;
    for (const form of [e.term, ...(Array.isArray(e.aliases) ? e.aliases : [])]) {
      if (typeof form === 'string' && form.trim() && !byForm.has(form)) byForm.set(form, e);
    }
  }

  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const source = [...byForm.keys()]
    .sort((a, b) => b.length - a.length)
    .map(
      (f) =>
        (/^[A-Za-z0-9]/.test(f) ? '(?<![A-Za-z0-9])' : '') +
        esc(f) +
        (/[A-Za-z0-9]$/.test(f) ? '(?![A-Za-z0-9])' : ''),
    )
    .join('|');

  GLOSSARY = { re: source ? new RegExp(source, 'g') : null, byForm };
  return GLOSSARY;
}

/** 용어를 걸지 않는 노드 — 제목 · 코드 · 링크 텍스트 · raw html */
const NO_TERM = new Set([
  'heading',
  'code',
  'inlineCode',
  'link',
  'linkReference',
  'definition',
  'html',
  'yaml',
  'toml',
]);

/** JSX 중 안쪽 본문까지 훑어도 되는 것. 나머지(Layers·InlineQuiz·Mermaid…)는 통째로 건너뛴다. */
const TERM_INSIDE_JSX = new Set(['Callout', 'Accordions', 'Accordion']);

/**
 * 텍스트 노드 안의 용어를 <Term> 으로 감싼다. **한 페이지에서 용어당 한 번만** 감싼다.
 * 전부 감싸면 본문이 점선투성이가 되어 오히려 읽기 힘들어진다.
 */
function wrapTerms(tree) {
  const { re, byForm } = glossary();
  if (!re) return;

  const used = new Set();

  const replaceIn = (node, parent) => {
    const value = node.value;
    const parts = [];
    let last = 0;
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(value))) {
      const entry = byForm.get(m[0]);
      if (!entry || used.has(entry.term)) continue;
      used.add(entry.term);
      if (m.index > last) parts.push({ type: 'text', value: value.slice(last, m.index) });
      parts.push({
        type: 'mdxJsxTextElement',
        name: 'Term',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'term', value: entry.term },
          { type: 'mdxJsxAttribute', name: 'en', value: entry.en ?? '' },
          { type: 'mdxJsxAttribute', name: 'def', value: entry.short ?? '' },
        ],
        children: [{ type: 'text', value: m[0] }],
      });
      last = m.index + m[0].length;
    }
    if (!parts.length) return;
    if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
    const i = parent.children.indexOf(node);
    parent.children.splice(i, 1, ...parts);
  };

  const visit = (node) => {
    if (!node.children) return;
    for (const child of [...node.children]) {
      if (NO_TERM.has(child.type)) continue;
      // 표 머리글 행 — 첫 tableRow 는 열 이름이므로 건드리지 않는다
      if (node.type === 'table' && node.children[0] === child) continue;
      if (child.type.startsWith('mdxJsx')) {
        if (TERM_INSIDE_JSX.has(child.name)) visit(child);
        continue;
      }
      if (child.type === 'text') replaceIn(child, node);
      else visit(child);
    }
  };
  visit(tree);
}

const jsx = (name, attrs, children) => ({
  type: 'mdxJsxFlowElement',
  name,
  attributes: Object.entries(attrs).map(([k, v]) => ({
    type: 'mdxJsxAttribute',
    name: k,
    value: v,
  })),
  children,
});

export default function remarkObsidian() {
  return (tree, file) => {
    const filePath = file.path ? path.resolve(file.path) : null;
    const fileDir = filePath ? path.dirname(filePath) : null;
    const cert = filePath
      ? path.relative(DOCS_ROOT, filePath).split(path.sep)[0]
      : null;

    // ── 1. 최상단 H1 제거 ────────────────────────────────────
    const firstIdx = tree.children.findIndex((n) => n.type !== 'yaml' && n.type !== 'toml');
    if (firstIdx >= 0) {
      const n = tree.children[firstIdx];
      if (n.type === 'heading' && n.depth === 1) tree.children.splice(firstIdx, 1);
    }

    // ── 2/5/6. 트리 순회 ─────────────────────────────────────
    // 이미지는 Fumadocs 기본 remarkImage 가 상대 경로를 그대로 처리해
    // Next.js 최적화 이미지(_next/image)로 내보낸다. 여기서 건드리지 않는다.
    const walk = (node, parent) => {
      // mermaid
      if (node.type === 'code' && node.lang === 'mermaid' && parent) {
        const i = parent.children.indexOf(node);
        parent.children[i] = jsx('Mermaid', { chart: node.value }, []);
        return;
      }

      // 포함 관계 — ```layers
      if (node.type === 'code' && node.lang === 'layers' && parent) {
        const roots = parseLayers(node.value);
        const i = parent.children.indexOf(node);
        if (!roots.length) {
          parent.children.splice(i, 1);
          return;
        }
        const attrs = { data: JSON.stringify(roots) };
        if (node.meta && node.meta.trim()) attrs.caption = node.meta.trim();
        parent.children[i] = jsx('Layers', attrs, []);
        return;
      }

      // 본문 내 문제 — ```quiz (지식 점검) / ```exam (모듈 평가)
      if (
        node.type === 'code' &&
        (node.lang === 'quiz' || node.lang === 'exam') &&
        parent
      ) {
        const questions = parseQuiz(node.value);
        const i = parent.children.indexOf(node);
        if (!questions.length) {
          parent.children.splice(i, 1);
          return;
        }
        const attrs = { data: JSON.stringify(questions) };
        if (node.lang === 'exam') attrs.mode = 'exam';
        // ```quiz 제목 → 헤더에 표시
        if (node.meta && node.meta.trim()) attrs.title = node.meta.trim();
        parent.children[i] = jsx('InlineQuiz', attrs, []);
        return;
      }

      // {{component}} 형태 문단 → React 컴포넌트
      // (코드 펜스로 하면 Shiki 가 언어로 해석하려다 실패한다)
      if (
        node.type === 'paragraph' &&
        parent &&
        node.children?.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const marker = node.children[0].value.trim();
        const COMPONENT = {
          '{{learning-path}}': 'LearningPath',
          '{{service-map}}': 'ServiceMindmap',
          '{{glossary}}': 'GlossaryList',
        };
        const name = COMPONENT[marker];
        if (name) {
          const i = parent.children.indexOf(node);
          // 용어집은 인증 구분 없이 하나만 쓰므로 cert 를 넘기지 않는다
          parent.children[i] = jsx(
            name,
            name === 'GlossaryList' ? {} : { cert: cert || '' },
            [],
          );
          return;
        }
      }

      // 위키링크 (텍스트 노드 안)
      if (node.type === 'text' && parent && /\[\[[^\]]+\]\]/.test(node.value)) {
        const parts = [];
        let last = 0;
        const re = /\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g;
        let m;
        while ((m = re.exec(node.value))) {
          if (m.index > last) parts.push({ type: 'text', value: node.value.slice(last, m.index) });
          const target = m[1].trim();
          const entry = noteIndex().get(target);
          // 별칭이 없으면 대상 노트의 frontmatter title 을 표시 이름으로 쓴다
          const label = (m[2] || entry?.title || target).trim();
          if (entry && fileDir) {
            let rel = path.relative(fileDir, entry.path).split(path.sep).join('/');
            if (!rel.startsWith('.')) rel = './' + rel;
            parts.push({ type: 'link', url: rel, children: [{ type: 'text', value: label }] });
          } else {
            // 대상 노트 없음 — 링크로 만들지 않고 텍스트로 남긴다
            parts.push({ type: 'text', value: label });
          }
          last = m.index + m[0].length;
        }
        if (last < node.value.length) parts.push({ type: 'text', value: node.value.slice(last) });
        const i = parent.children.indexOf(node);
        parent.children.splice(i, 1, ...parts);
        return;
      }

      if (node.children) {
        for (const c of [...node.children]) walk(c, node);
      }
    };
    walk(tree, null);

    // ── 3. Obsidian 콜아웃 ───────────────────────────────────
    for (let i = 0; i < tree.children.length; i++) {
      const bq = tree.children[i];
      if (bq.type !== 'blockquote' || !bq.children?.length) continue;
      const first = bq.children[0];
      if (first.type !== 'paragraph' || !first.children?.length) continue;
      const t0 = first.children[0];
      if (t0.type !== 'text') continue;
      const m = t0.value.match(/^\[!(\w+)\]([+-]?)\s*([^\n]*)\n?/);
      if (!m) continue;

      const type = CALLOUT_TYPE[m[1].toLowerCase()] || 'info';
      const title = m[3].trim();
      t0.value = t0.value.slice(m[0].length);
      if (!t0.value) first.children.shift();
      if (!first.children.length) bq.children.shift();

      const attrs = { type };
      if (title) attrs.title = title;
      tree.children[i] = jsx('Callout', attrs, bq.children);
    }

    // ── 4. <details> → Accordion ─────────────────────────────
    for (let i = 0; i < tree.children.length; i++) {
      const n = tree.children[i];
      if (n.type !== 'html' || !/^\s*<details/i.test(n.value)) continue;
      let end = -1;
      for (let j = i + 1; j < tree.children.length; j++) {
        const c = tree.children[j];
        if (c.type === 'html' && /<\/details>/i.test(c.value)) { end = j; break; }
      }
      if (end < 0) continue;

      const sm = n.value.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i);
      const title = sm ? sm[1].replace(/<[^>]+>/g, '').trim() : '내용 보기';
      const inner = tree.children.slice(i + 1, end);
      const acc = jsx('Accordions', { type: 'single' }, [
        jsx('Accordion', { title }, inner),
      ]);
      tree.children.splice(i, end - i + 1, acc);
    }

    // ── 8. 용어집 자동 링크 ──────────────────────────────────
    // 콜아웃·아코디언 변환이 끝난 뒤에 돌린다. 그래야 콜아웃 제목이 이미
    // 속성으로 빠져 있어서 제목에는 용어가 걸리지 않는다.
    // 용어집 페이지 자신은 설명이 곧 본문이므로 건너뛴다.
    const isGlossaryPage = filePath ? /(^|[\\/])glossary\.mdx?$/i.test(filePath) : false;
    if (!isGlossaryPage) wrapTerms(tree);

    // ── 강의 모듈 노트 끝에 진행/이전·다음 컴포넌트 삽입 ─────
    if (filePath) {
      const rel = path.relative(DOCS_ROOT, filePath).split(path.sep);
      if (rel.length === 3 && rel[1] === '20-course' && /\.mdx?$/.test(rel[2])) {
        tree.children.push(
          jsx('ModuleNav', { cert: rel[0], slug: rel[2].replace(/\.mdx?$/, '') }, []),
        );
      }
    }

    // ── 남은 raw html 노드 제거 (<sub> 등) ───────────────────
    const strip = (node) => {
      if (!node.children) return;
      node.children = node.children.filter(
        (c) => !(c.type === 'html' && /^\s*<\/?(sub|sup|br|details|summary)\b/i.test(c.value)),
      );
      node.children.forEach(strip);
    };
    strip(tree);
  };
}
