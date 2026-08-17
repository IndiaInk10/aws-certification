/**
 * Obsidian 문법 → Fumadocs 변환 (빌드 타임)
 *
 * 원본 마크다운은 그대로 두고 여기서만 변환한다. Obsidian 호환 유지가 목적.
 *
 *  1. 최상단 H1 제거          — frontmatter title 과 중복
 *  2. [[위키링크]]            → 상대 .md 링크 (createRelativeLink 가 URL 로 변환)
 *  3. > [!type] 콜아웃        → <Callout type>
 *  4. <details>/<summary>     → <Accordions><Accordion>
 *  5. ../images/mN/x.png     → Fumadocs 기본 remarkImage 가 처리 (여기서 건드리지 않는다)
 *  6. ```d2                  → <Diagram svg="..."> (빌드 타임에 구운 SVG. 클라이언트 JS 0)
 *  7. ```quiz / ```exam      → <InlineQuiz>  (본문에서 바로 푸는 문제)
 *  8. 용어집 용어             → <Term>  (본문에 나오는 자리마다 호버 설명을 붙인다)
 */
import fs from 'node:fs';
import path from 'node:path';
import { keyOf, readCache, render, closeD2 } from './scripts/d2-render.mjs';

const DOCS_ROOT = path.resolve(process.cwd(), 'content/docs');
const GLOSSARY_PATH = path.resolve(process.cwd(), 'content/glossary.json');

/** 파일이 속한 자격증 폴더 이름. content/docs 바로 밑의 파일은 null. */
function certOf(filePath) {
  const segs = path.relative(DOCS_ROOT, filePath).split(path.sep);
  return segs.length > 1 ? segs[0] : null;
}

/**
 * 노트 이름(확장자 제외) → 같은 이름을 가진 노트 **전부**.
 *
 * 자격증이 둘이 되는 순간 `00-learning-path` · `glossary` · `service-comparisons` 처럼
 * **자격증마다 같은 이름**인 노트가 생긴다. 예전에는 먼저 찾은 하나만 남겼는데, 그러면
 * SAA 노트가 쓴 [[00-learning-path]] 가 폴더 이름 순으로 앞서는 CLF 쪽으로 조용히 넘어간다.
 * 링크가 깨지지도 않아서 눈치채기도 어렵다.
 *
 * 그래서 후보를 전부 들고 있다가 **읽고 있는 노트와 같은 자격증**을 먼저 고른다 → resolveNote.
 */
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
      if (!acc.has(key)) acc.set(key, []);
      acc.get(key).push({ path: p, title, cert: certOf(p) });
    }
  }
  return acc;
}

let INDEX = null;
function noteIndex() {
  if (!INDEX) INDEX = buildIndex(DOCS_ROOT);
  return INDEX;
}

/**
 * 위키링크는 **자격증을 넘지 않는다.**
 *
 * 같은 자격증 안에서 찾고, 없으면 자격증에 속하지 않는 공통 문서(references 등)까지만 본다.
 * 다른 자격증의 같은 이름 노트로는 넘어가지 않는다 — 자격증끼리 독립이라는 것이 이 저장소의
 * 규칙이고, SAA 노트만 읽어도 완결되어야 한다. 자격증을 넘는 링크는 노트 맨 아래 한 줄,
 * 그것도 `/docs/...` 경로를 직접 써서 건다.
 *
 * 못 찾으면 null 이고, 그러면 링크가 아니라 **글자로 남는다**(아래 walk 참고).
 * 아직 안 쓴 서비스 노트를 미리 가리켜 두고 나중에 채우면 그때부터 저절로 링크가 된다.
 */
function resolveNote(target, cert) {
  const list = noteIndex().get(target);
  if (!list || !list.length) return null;
  return list.find((e) => e.cert === cert) ?? list.find((e) => e.cert === null) ?? null;
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

/** 낱말 속에 박힌 용어를 걸러내는 데 쓴다 (wrapTerms 참고) */
const HANGUL = /[가-힣]/;

/**
 * 용어로 **시작하지만** 뜻이 전혀 다른 낱말.
 * 뒤에 붙는 글자는 보통 조사라서 통과시키는데, 아래 낱말들은 조사가 아니다.
 * (로그인의 "로그", 포트폴리오의 "포트")
 */
const NOT_A_TERM = ['로그인', '로그아웃', '포트폴리오'];

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

/** JSX 중 안쪽 본문까지 훑어도 되는 것. 나머지(Layers·InlineQuiz·Diagram…)는 통째로 건너뛴다. */
const TERM_INSIDE_JSX = new Set(['Callout', 'Accordions', 'Accordion']);

/**
 * 텍스트 노드 안의 용어를 <Term> 으로 감싼다. **나오는 자리마다 전부** 감싼다.
 *
 * 처음에는 페이지당 한 번, 그다음에는 꼭지당 한 번으로 제한했었다.
 * 읽는 사람은 같은 낱말을 뒤에서 다시 만났을 때 또 궁금해지는데,
 * 그때 물어볼 데가 없다는 것이 더 큰 문제라서 제한을 걷어냈다.
 */
function wrapTerms(tree) {
  const { re, byForm } = glossary();
  if (!re) return;

  const replaceIn = (node, parent) => {
    const value = node.value;
    const parts = [];
    let last = 0;
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(value))) {
      const entry = byForm.get(m[0]);
      if (!entry) continue;
      // 한글은 낱말 사이가 붙어 있어서 "템플릿"의 "플릿", "블로그"의 "로그"처럼 안쪽이 걸린다.
      // 뒤에 오는 것은 조사(인스턴스**를**)라 정상이지만, **앞**이 한글이면 낱말 속에 박힌 것이다.
      if (HANGUL.test(m[0][0]) && HANGUL.test(value[m.index - 1] ?? '')) continue;
      if (NOT_A_TERM.some((w) => value.startsWith(w, m.index))) continue;
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

/**
 * <Diagram> 노드.
 *
 * `data._stringify` 는 fumadocs 의 마크다운 직렬화기(mdx-plugins/stringifier)가 보는 자리다.
 * 이걸 안 달면 `/llms.txt`·`/llms-full.txt`·`content.md` 같은 **글자로 읽는 산출물**에
 * 25KB 짜리 SVG 원문이 통째로 들어간다. `<path d="M12.5 …">` 수백 줄은 사람에게도
 * 기계에게도 아무 뜻이 없다. 그 자리에는 원본 d2 소스를 남긴다 — 읽으면 그림이 그려진다.
 * (mermaid 때는 chart 속성이 곧 소스라 저절로 그렇게 됐다. 여기서는 손으로 챙겨 줘야 한다.)
 */
const diagramNode = (svg, attrs, src) => {
  const node = jsx('Diagram', { svg, ...attrs }, []);
  node.data = { _stringify: { text: '```d2\n' + src.trim() + '\n```' } };
  return node;
};

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
  return async (tree, file) => {
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
    /*
      캐시에 없던 d2 블록. walk 가 끝난 뒤 한꺼번에 굽는다.

      production 에서는 build-diagrams.mjs 가 앞서 전부 구워 두므로 여기는 늘 비어 있다.
      비어 있으면 await 자체를 하지 않는다.

      dev 에서는 얘기가 다르다. prepare:content 는 `next dev` 를 띄울 때 딱 한 번 돌지만,
      fumadocs 는 마크다운을 저장할 때마다 remark 를 다시 돌린다. 그래서 여기서 굽는 길이
      없으면 그림을 고쳐도 서버를 껐다 켜기 전까지 옛 그림이 남는다.
    */
    const pending = [];

    const walk = (node, parent) => {
      // 다이어그램 — ```d2 (빌드 타임에 구운 SVG 를 그대로 심는다)
      if (node.type === 'code' && node.lang === 'd2' && parent) {
        const i = parent.children.indexOf(node);
        // 템플릿의 빈 자리표시자는 그릴 것이 없다. layers·quiz 와 같은 처리.
        if (!node.value.trim()) {
          parent.children.splice(i, 1);
          return;
        }
        const attrs = {};
        if (node.meta && node.meta.trim()) attrs.caption = node.meta.trim();

        // 빈 문자열은 "도형이 하나도 없다"는 뜻이다 (d2-render.mjs 참고). null 만 미스다.
        const svg = readCache(keyOf(node.value));
        if (svg === '') parent.children.splice(i, 1);
        else if (svg !== null) parent.children[i] = diagramNode(svg, attrs, node.value);
        else pending.push({ parent, node, attrs });
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
        // 표 안에서는 별칭 구분자를 `\|` 로 escape 해야 GFM 이 칸을 쪼개지 않는다.
        // 여기 오는 값은 이미 escape 가 풀린 뒤지만, 풀리지 않은 경우도 같이 받는다.
        const re = /\[\[([^\]|#\\]+)(?:#[^\]|]*)?(?:\\?\|([^\]]+))?\]\]/g;
        let m;
        while ((m = re.exec(node.value))) {
          if (m.index > last) parts.push({ type: 'text', value: node.value.slice(last, m.index) });
          const target = m[1].trim();
          const entry = resolveNote(target, cert);
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

    // 캐시에 없던 d2 블록을 그 자리에서 굽는다 (위 pending 주석 참고).
    for (const { parent, node, attrs } of pending) {
      try {
        const svg = await render(node.value);
        const i = parent.children.indexOf(node);
        if (i < 0) continue;
        if (svg === '') parent.children.splice(i, 1);
        else parent.children[i] = diagramNode(svg, attrs, node.value);
      } catch (err) {
        // 노드를 그대로 둔다. source.config.ts 의 langAlias 덕에 코드블록으로 보이고
        // 페이지는 살아남는다 — 어디가 틀렸는지 화면에서 바로 읽힌다.
        console.error(`[d2] ${filePath ?? '?'} — ${err?.message ?? err}`);
      }
    }
    if (pending.length && process.env.NODE_ENV === 'production') {
      // 빌드 워커 안에 WASM 웹워커가 살아 있으면 next build 가 안 끝난다.
      await closeD2();
    }

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
