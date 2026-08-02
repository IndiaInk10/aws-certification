/**
 * 10-services/<카테고리>/<서비스>.md → 카테고리별 서비스 목록
 *
 * 레이아웃은 CSS 그리드가 담당하므로 좌표 계산은 하지 않는다.
 *  → src/generated/service-map.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { hierarchy, treemap, treemapSquarify } from 'd3-hierarchy';

const DOCS = path.resolve('content/docs');
const QUIZ = path.resolve('src/generated/quiz');
const OUT = path.resolve('src/generated');

// 참조 이미지처럼 계층(기반 → 애플리케이션 → 관리/운영)으로 묶는다
const TIER = {
  '01-compute': { tier: 0, label: '기반 서비스' },
  '02-storage': { tier: 0, label: '기반 서비스' },
  '03-database': { tier: 0, label: '기반 서비스' },
  '04-networking': { tier: 0, label: '기반 서비스' },
  '07-app-integration': { tier: 1, label: '애플리케이션 서비스' },
  '08-analytics': { tier: 1, label: '애플리케이션 서비스' },
  '09-ai-ml': { tier: 1, label: '애플리케이션 서비스' },
  '11-migration-other': { tier: 1, label: '애플리케이션 서비스' },
  '05-security-identity': { tier: 2, label: '보안 · 관리 · 비용' },
  '06-management-governance': { tier: 2, label: '보안 · 관리 · 비용' },
  '10-billing-support': { tier: 2, label: '보안 · 관리 · 비용' },
};

const COLOR = {
  '01-compute': '#ff9900',
  '02-storage': '#ef4444',
  '03-database': '#3b82f6',
  '04-networking': '#8b5cf6',
  '05-security-identity': '#22c55e',
  '06-management-governance': '#14b8a6',
  '07-app-integration': '#f59e0b',
  '08-analytics': '#ec4899',
  '09-ai-ml': '#06b6d4',
  '10-billing-support': '#84cc16',
  '11-migration-other': '#64748b',
};

function readTitle(file) {
  const src = fs.readFileSync(file, 'utf8').slice(0, 800);
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const t = m && m[1].match(/^title:\s*"?(.*?)"?\s*$/m);
  return t ? t[1] : path.basename(file, '.md');
}

function readOneLiner(file) {
  const src = fs.readFileSync(file, 'utf8');
  // frontmatter 다음 첫 인용문이 한 줄 설명
  const m = src.match(/\n>\s*(.+)/);
  return m ? m[1].trim() : '';
}

function metaTitle(dir, fallback) {
  const p = path.join(dir, 'meta.json');
  if (!fs.existsSync(p)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8')).title ?? fallback;
  } catch {
    return fallback;
  }
}

const out = [];

for (const certEntry of fs.readdirSync(DOCS, { withFileTypes: true })) {
  if (!certEntry.isDirectory()) continue;
  const cert = certEntry.name;
  const svcDir = path.join(DOCS, cert, '10-services');
  if (!fs.existsSync(svcDir)) continue;

  // 문제은행 출현 횟수
  const freq = new Map();
  if (fs.existsSync(QUIZ)) {
    for (const f of fs.readdirSync(QUIZ)) {
      if (!f.startsWith(cert + '-') || !f.endsWith('.json')) continue;
      const data = JSON.parse(fs.readFileSync(path.join(QUIZ, f), 'utf8'));
      for (const q of data.questions ?? []) {
        for (const s of q.services ?? []) freq.set(s, (freq.get(s) ?? 0) + 1);
      }
    }
  }

  // 서비스 → 배우는 모듈
  const moduleOf = new Map();
  const courseDir = path.join(DOCS, cert, '20-course');
  if (fs.existsSync(courseDir)) {
    for (const f of fs.readdirSync(courseDir).filter((x) => x.endsWith('.md'))) {
      const src = fs.readFileSync(path.join(courseDir, f), 'utf8');
      const section = src.split('## 2. 이번에 새로 나오는 서비스')[1]?.split('## 3.')[0] ?? '';
      for (const m of section.matchAll(/\[\[([a-z0-9-]+)\]\]/g)) {
        if (!moduleOf.has(m[1])) moduleOf.set(m[1], f.replace(/\.md$/, ''));
      }
    }
  }

  const categories = fs
    .readdirSync(svcDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((d) => {
      const dir = path.join(svcDir, d.name);
      const services = fs
        .readdirSync(dir)
        .filter((f) => f.endsWith('.md'))
        .map((f) => {
          const slug = f.replace(/\.md$/, '');
          const file = path.join(dir, f);
          return {
            slug,
            name: readTitle(file),
            desc: readOneLiner(file),
            url: `/docs/${cert}/10-services/${d.name}/${slug}`,
            count: freq.get(slug) ?? 0,
            module: moduleOf.get(slug) ?? null,
          };
        })
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

      return {
        slug: d.name,
        name: metaTitle(dir, d.name.replace(/^\d+-/, '')),
        color: COLOR[d.name] ?? '#64748b',
        tier: TIER[d.name]?.tier ?? 3,
        tierLabel: TIER[d.name]?.label ?? '기타',
        services,
      };
    });

  const tiers = [];
  for (const c of categories) {
    let t = tiers.find((x) => x.tier === c.tier);
    if (!t) {
      t = { tier: c.tier, label: c.tierLabel, categories: [] };
      tiers.push(t);
    }
    t.categories.push(c);
  }
  tiers.sort((a, b) => a.tier - b.tier);

  // ── 트리맵 레이아웃 (면적 = 문제은행 출현 빈도) ────────────────
  // 좌표는 백분율로 내보내 어떤 크기의 컨테이너에도 맞게 한다.
  const W = 1000;
  const H = 640;
  const root = hierarchy({
    name: cert,
    children: tiers.map((t) => ({
      name: t.label,
      tier: t.tier,
      children: t.categories.map((c) => ({
        name: c.name,
        slug: c.slug,
        color: c.color,
        children: c.services.map((s) => ({ ...s, leaf: true })),
      })),
    })),
  })
    // 출현 0인 서비스도 보이도록 최소 면적을 준다
    .sum((d) => (d.leaf ? d.count + 3 : 0))
    .sort((a, b) => b.value - a.value);

  treemap()
    .tile(treemapSquarify)
    .size([W, H])
    .paddingOuter(4)
    .paddingTop(18)
    .paddingInner(2)(root);

  const pct = (v, total) => Math.round((v / total) * 10000) / 100;
  const rects = [];
  root.each((n) => {
    if (n.depth === 0) return;
    rects.push({
      depth: n.depth,
      name: n.data.name,
      slug: n.data.slug ?? null,
      url: n.data.url ?? null,
      count: n.data.count ?? 0,
      color: n.depth === 1 ? null : n.depth === 2 ? n.data.color : n.parent.data.color,
      cat: n.depth === 3 ? n.parent.data.slug : n.depth === 2 ? n.data.slug : null,
      x: pct(n.x0, W),
      y: pct(n.y0, H),
      w: pct(n.x1 - n.x0, W),
      h: pct(n.y1 - n.y0, H),
    });
  });

  out.push({
    cert,
    tiers,
    treemap: { aspect: W / H, rects },
    totalServices: categories.reduce((s, c) => s + c.services.length, 0),
  });
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'service-map.json'), JSON.stringify(out));
console.log(
  '[service-map] ' +
    out.map((c) => `${c.cert}: ${c.tiers.length} tiers / ${c.totalServices} services`).join(', '),
);
