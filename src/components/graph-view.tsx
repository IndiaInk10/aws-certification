'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

type Node = {
  id: string;
  url: string;
  title: string;
  group: string;
  cert: string | null;
  deg: number;
  x: number;
  y: number;
};
type Graph = {
  bounds: { minX: number; maxX: number; minY: number; maxY: number };
  nodes: Node[];
  links: { s: string; t: string }[];
};

const GROUPS: Record<string, { label: string; color: string }> = {
  course: { label: '강의', color: '#ff9900' },
  service: { label: '서비스', color: '#3b82f6' },
  bank: { label: '문제은행', color: '#22c55e' },
  exam: { label: '시험', color: '#14b8a6' },
  moc: { label: '지도', color: '#a855f7' },
  template: { label: '템플릿', color: '#94a3b8' },
  root: { label: '기타', color: '#64748b' },
};

/**
 * 캔버스 렌더링.
 *
 * SVG 로 그리면 노드+엣지가 2000개 넘는 DOM 이 되고, 마우스를 움직일 때마다
 * React 가 전부 재조정해서 느려진다. 캔버스는 DOM 이 1개이고 그리기는
 * requestAnimationFrame 으로 합쳐진다. 팬/줌 중에는 React state 를 아예 쓰지 않는다.
 */
export function GraphView({ graph }: { graph: Graph }) {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState('');
  const [hoverNode, setHoverNode] = useState<Node | null>(null);

  // 상태를 ref 로 들고 다녀 렌더 없이 다시 그린다
  const cam = useRef({ k: 1, tx: 0, ty: 0 });
  const drag = useRef<{ x: number; y: number; tx: number; ty: number; moved: boolean } | null>(null);
  const hoverId = useRef<string | null>(null);
  const raf = useRef<number | null>(null);
  const size = useRef({ w: 0, h: 0, dpr: 1 });

  const byId = useMemo(() => new Map(graph.nodes.map((n) => [n.id, n])), [graph.nodes]);

  // 인접 목록 — 하이라이트 계산용
  const adj = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const l of graph.links) {
      (m.get(l.s) ?? m.set(l.s, new Set()).get(l.s)!).add(l.t);
      (m.get(l.t) ?? m.set(l.t, new Set()).get(l.t)!).add(l.s);
    }
    return m;
  }, [graph.links]);

  const visible = useMemo(
    () => new Set(graph.nodes.filter((n) => !hidden.has(n.group)).map((n) => n.id)),
    [graph.nodes, hidden],
  );

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return new Set(graph.nodes.filter((n) => n.title.toLowerCase().includes(q)).map((n) => n.id));
  }, [query, graph.nodes]);

  // 화면에 딱 맞추는 초기 카메라
  const fit = useCallback(() => {
    const { w, h } = size.current;
    if (!w || !h) return;
    const { minX, maxX, minY, maxY } = graph.bounds;
    const pad = 30;
    const k = Math.min((w - pad * 2) / (maxX - minX), (h - pad * 2) / (maxY - minY));
    cam.current = {
      k,
      tx: w / 2 - ((minX + maxX) / 2) * k,
      ty: h / 2 - ((minY + maxY) / 2) * k,
    };
  }, [graph.bounds]);

  const draw = useCallback(() => {
    raf.current = null;
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const { w, h, dpr } = size.current;
    const { k, tx, ty } = cam.current;
    const hv = hoverId.current;
    const near = hv ? adj.get(hv) : null;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(tx, ty);
    ctx.scale(k, k);

    const dark = document.documentElement.classList.contains('dark');
    const ink = dark ? '#e5e7eb' : '#111827';

    // ── 엣지 ─────────────────────────────────────────────
    ctx.lineWidth = 0.4 / k;
    if (hv) {
      // 흐린 엣지 한 번에
      ctx.strokeStyle = dark ? 'rgba(148,163,184,0.10)' : 'rgba(100,116,139,0.10)';
      ctx.beginPath();
      for (const l of graph.links) {
        if (!visible.has(l.s) || !visible.has(l.t)) continue;
        if (l.s === hv || l.t === hv) continue;
        const a = byId.get(l.s)!;
        const b = byId.get(l.t)!;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
      }
      ctx.stroke();

      // 강조 엣지
      ctx.strokeStyle = dark ? 'rgba(226,232,240,0.85)' : 'rgba(15,23,42,0.6)';
      ctx.lineWidth = 0.8 / k;
      ctx.beginPath();
      for (const l of graph.links) {
        if (!visible.has(l.s) || !visible.has(l.t)) continue;
        if (l.s !== hv && l.t !== hv) continue;
        const a = byId.get(l.s)!;
        const b = byId.get(l.t)!;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
      }
      ctx.stroke();
    } else {
      ctx.strokeStyle = dark ? 'rgba(148,163,184,0.22)' : 'rgba(100,116,139,0.22)';
      ctx.beginPath();
      for (const l of graph.links) {
        if (!visible.has(l.s) || !visible.has(l.t)) continue;
        const a = byId.get(l.s)!;
        const b = byId.get(l.t)!;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
      }
      ctx.stroke();
    }

    // ── 노드 (그룹별로 묶어 색 변경 횟수를 줄인다) ──────────
    const byGroup = new Map<string, Node[]>();
    for (const n of graph.nodes) {
      if (!visible.has(n.id)) continue;
      (byGroup.get(n.group) ?? byGroup.set(n.group, []).get(n.group)!).push(n);
    }

    for (const [g, list] of byGroup) {
      const color = GROUPS[g]?.color ?? '#888';
      // 흐린 것
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.16;
      ctx.beginPath();
      for (const n of list) {
        const dim = (hv && !(n.id === hv || near?.has(n.id))) || (matches && !matches.has(n.id));
        if (!dim) continue;
        const r = 2.4 + Math.sqrt(n.deg) * 0.9;
        ctx.moveTo(n.x + r, n.y);
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      }
      ctx.fill();

      // 선명한 것
      ctx.globalAlpha = 1;
      ctx.beginPath();
      for (const n of list) {
        const dim = (hv && !(n.id === hv || near?.has(n.id))) || (matches && !matches.has(n.id));
        if (dim) continue;
        const r = 2.4 + Math.sqrt(n.deg) * 0.9;
        ctx.moveTo(n.x + r, n.y);
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      }
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ── 라벨 (확대했거나 검색 결과가 적을 때만) ─────────────
    const labelled: Node[] = [];
    if (hv) {
      const n = byId.get(hv);
      if (n) labelled.push(n);
      if (near) for (const id of near) { const m = byId.get(id); if (m && visible.has(id)) labelled.push(m); }
    }
    if (matches && matches.size <= 15) {
      for (const id of matches) { const m = byId.get(id); if (m && visible.has(id)) labelled.push(m); }
    }
    if (!hv && !matches && k > 2.2) {
      for (const n of graph.nodes) if (visible.has(n.id) && n.deg >= 6) labelled.push(n);
    }

    if (labelled.length) {
      ctx.fillStyle = ink;
      ctx.font = `${Math.max(3.6, 4 / Math.max(k, 1) * Math.min(k, 1.4))}px ui-sans-serif, system-ui, sans-serif`;
      ctx.textBaseline = 'middle';
      for (const n of labelled.slice(0, 60)) {
        const r = 2.4 + Math.sqrt(n.deg) * 0.9;
        ctx.fillText(n.title, n.x + r + 1.4, n.y);
      }
    }

    ctx.restore();
  }, [graph.links, graph.nodes, byId, adj, visible, matches]);

  const schedule = useCallback(() => {
    if (raf.current == null) raf.current = requestAnimationFrame(draw);
  }, [draw]);

  // 캔버스 크기 관리
  useEffect(() => {
    const cv = canvasRef.current;
    const wrap = wrapRef.current;
    if (!cv || !wrap) return;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size.current = { w: r.width, h: r.height, dpr };
      cv.width = Math.round(r.width * dpr);
      cv.height = Math.round(r.height * dpr);
      cv.style.width = `${r.width}px`;
      cv.style.height = `${r.height}px`;
      if (cam.current.k === 1 && cam.current.tx === 0) fit();
      schedule();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [fit, schedule]);

  useEffect(() => schedule(), [schedule, visible, matches]);

  // 화면 좌표 → 그래프 좌표
  const toGraph = (cx: number, cy: number) => {
    const { k, tx, ty } = cam.current;
    return { x: (cx - tx) / k, y: (cy - ty) / k };
  };

  const pick = (cx: number, cy: number): Node | null => {
    const p = toGraph(cx, cy);
    const tol = 6 / cam.current.k;
    let best: Node | null = null;
    let bestD = Infinity;
    for (const n of graph.nodes) {
      if (!visible.has(n.id)) continue;
      const r = 2.4 + Math.sqrt(n.deg) * 0.9 + tol;
      const d = (n.x - p.x) ** 2 + (n.y - p.y) ** 2;
      if (d < r * r && d < bestD) {
        bestD = d;
        best = n;
      }
    }
    return best;
  };

  const toggle = (g: string) =>
    setHidden((prev) => {
      const n = new Set(prev);
      if (n.has(g)) n.delete(g);
      else n.add(g);
      return n;
    });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="노트 검색…"
          className="bg-fd-secondary/50 h-8 rounded-md border px-3 text-sm outline-none"
        />
        {Object.entries(GROUPS).map(([key, g]) => {
          const count = graph.nodes.filter((n) => n.group === key).length;
          if (!count) return null;
          const off = hidden.has(key);
          return (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs ${off ? 'opacity-40' : ''}`}
            >
              <span className="size-2.5 rounded-full" style={{ background: g.color }} aria-hidden />
              {g.label}
              <span className="text-fd-muted-foreground">{count}</span>
            </button>
          );
        })}
        <button
          onClick={() => {
            fit();
            schedule();
          }}
          className="ml-auto h-8 rounded-md border px-2.5 text-xs"
        >
          맞춤
        </button>
      </div>

      <div
        ref={wrapRef}
        className="bg-fd-card relative h-[70vh] overflow-hidden rounded-lg border"
      >
        <canvas
          ref={canvasRef}
          className="block cursor-grab touch-none active:cursor-grabbing"
          onWheel={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            const before = toGraph(cx, cy);
            const f = e.deltaY < 0 ? 1.15 : 1 / 1.15;
            const k = Math.min(30, Math.max(0.2, cam.current.k * f));
            cam.current.k = k;
            // 커서 아래 지점을 고정한 채 확대
            cam.current.tx = cx - before.x * k;
            cam.current.ty = cy - before.y * k;
            schedule();
          }}
          onPointerDown={(e) => {
            drag.current = {
              x: e.clientX,
              y: e.clientY,
              tx: cam.current.tx,
              ty: cam.current.ty,
              moved: false,
            };
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            const d = drag.current;

            if (d) {
              const dx = e.clientX - d.x;
              const dy = e.clientY - d.y;
              if (Math.abs(dx) + Math.abs(dy) > 3) d.moved = true;
              cam.current.tx = d.tx + dx;
              cam.current.ty = d.ty + dy;
              schedule();
              return;
            }

            const n = pick(cx, cy);
            const id = n?.id ?? null;
            if (id !== hoverId.current) {
              hoverId.current = id;
              setHoverNode(n); // 정보 패널용 — 실제로 바뀔 때만 렌더
              schedule();
            }
          }}
          onPointerUp={(e) => {
            const d = drag.current;
            drag.current = null;
            if (d && !d.moved) {
              const rect = e.currentTarget.getBoundingClientRect();
              const n = pick(e.clientX - rect.left, e.clientY - rect.top);
              if (n) router.push(n.url);
            }
          }}
          onPointerLeave={() => {
            drag.current = null;
            if (hoverId.current) {
              hoverId.current = null;
              setHoverNode(null);
              schedule();
            }
          }}
        />

        {hoverNode && (
          <div className="bg-fd-popover/95 pointer-events-none absolute bottom-3 left-3 max-w-xs rounded-md border p-3 text-sm shadow-sm">
            <div className="font-medium">{hoverNode.title}</div>
            <div className="text-fd-muted-foreground mt-0.5 text-xs">
              {GROUPS[hoverNode.group]?.label} · 연결 {hoverNode.deg}개 · 클릭하면 이동
            </div>
          </div>
        )}
      </div>

      <p className="text-fd-muted-foreground text-xs">
        노드 {graph.nodes.length}개 · 링크 {graph.links.length}개 · 휠로 확대, 드래그로 이동, 노드 클릭으로 이동.
        레이아웃은 빌드 시점에 계산되고 그리기는 캔버스라 브라우저 부담이 거의 없습니다.
      </p>
    </div>
  );
}
