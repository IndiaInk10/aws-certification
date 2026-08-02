'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, LayoutPanelTop } from 'lucide-react';
import mapData from '@/generated/service-map.json';

type Service = {
  slug: string;
  name: string;
  desc: string;
  url: string;
  count: number;
  module: string | null;
};
type Category = {
  slug: string;
  name: string;
  color: string;
  tier: number;
  tierLabel: string;
  services: Service[];
};
type Tier = { tier: number; label: string; categories: Category[] };
type Rect = {
  depth: number;
  name: string;
  slug: string | null;
  url: string | null;
  count: number;
  color: string | null;
  cat: string | null;
  x: number;
  y: number;
  w: number;
  h: number;
};
type Cert = {
  cert: string;
  tiers: Tier[];
  treemap: { aspect: number; rects: Rect[] };
  totalServices: number;
};

/**
 * 서비스 전체 지도. 두 가지 뷰.
 *
 *  - 계층 박스 : 계층 > 카테고리 > 서비스 를 중첩 상자로. 분류 구조가 목적.
 *  - 트리맵    : 면적 = 문제은행 출현 빈도. 우선순위가 목적.
 *
 * 트리맵 좌표는 빌드 타임(d3-hierarchy)에 백분율로 계산돼 있다.
 */
export function ServiceMindmap({ cert }: { cert: string }) {
  const data = (mapData as Cert[]).find((c) => c.cert === cert);
  const [view, setView] = useState<'nested' | 'treemap'>('nested');
  const [q, setQ] = useState('');
  const [dense, setDense] = useState(false);

  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!data) return [];
    if (!query) return data.tiers;
    return data.tiers
      .map((t) => ({
        ...t,
        categories: t.categories
          .map((c) => ({
            ...c,
            services: c.services.filter(
              (s) =>
                s.name.toLowerCase().includes(query) ||
                s.desc.toLowerCase().includes(query) ||
                c.name.toLowerCase().includes(query),
            ),
          }))
          .filter((c) => c.services.length > 0),
      }))
      .filter((t) => t.categories.length > 0);
  }, [data, query]);

  if (!data) return null;

  const hits = filtered.reduce(
    (s, t) => s + t.categories.reduce((x, c) => x + c.services.length, 0),
    0,
  );

  const matches = (name: string) => !query || name.toLowerCase().includes(query);

  return (
    <div className="not-prose my-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex rounded-md border p-0.5">
          {(
            [
              ['nested', '계층 박스', LayoutPanelTop],
              ['treemap', '트리맵', LayoutGrid],
            ] as const
          ).map(([v, label, Icon]) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-xs ${
                view === v ? 'bg-fd-secondary font-medium' : 'text-fd-muted-foreground'
              }`}
            >
              <Icon className="size-3.5" />
              {label}
            </button>
          ))}
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="서비스 검색…"
          className="bg-fd-secondary/50 h-8 w-44 rounded-md border px-3 text-sm outline-none"
        />
        <span className="text-fd-muted-foreground text-sm">
          {query ? `${hits}개 일치` : `총 ${data.totalServices}개`}
        </span>

        {view === 'nested' && (
          <label className="text-fd-muted-foreground ml-auto flex cursor-pointer items-center gap-1.5 text-xs select-none">
            <input
              type="checkbox"
              checked={dense}
              onChange={(e) => setDense(e.target.checked)}
              className="size-3.5"
            />
            이름만 보기
          </label>
        )}
      </div>

      {/* ── 계층 박스 ────────────────────────────────────────── */}
      {view === 'nested' && (
        <div className="space-y-4">
          {filtered.map((t) => (
            <section key={t.tier} className="bg-fd-secondary/25 rounded-xl border p-3">
              <h3 className="text-fd-muted-foreground mb-2.5 text-center text-xs font-semibold tracking-widest uppercase">
                {t.label}
              </h3>

              <div className="grid gap-2.5 md:grid-cols-2">
                {t.categories.map((c) => (
                  <div
                    key={c.slug}
                    className="bg-fd-card rounded-lg border-2 p-2.5"
                    style={{ borderColor: c.color + '55' }}
                  >
                    <div className="mb-2 flex items-baseline gap-2">
                      <span
                        className="size-2.5 shrink-0 rounded-sm"
                        style={{ background: c.color }}
                        aria-hidden
                      />
                      <h4 className="text-sm font-semibold">{c.name}</h4>
                      <span className="text-fd-muted-foreground text-xs">{c.services.length}</span>
                    </div>

                    <ul
                      className={
                        dense
                          ? 'flex flex-wrap gap-1.5'
                          : 'grid gap-1.5 sm:grid-cols-2 xl:grid-cols-3'
                      }
                    >
                      {c.services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={s.url}
                            title={s.desc}
                            className="hover:bg-fd-secondary bg-fd-background block h-full rounded-md border px-2 py-1.5 no-underline"
                          >
                            <span className="flex items-baseline gap-1.5">
                              <span className="text-xs leading-tight font-medium">{s.name}</span>
                              {s.count > 0 && (
                                <span className="text-fd-muted-foreground ml-auto shrink-0 text-[10px] tabular-nums">
                                  {s.count}
                                </span>
                              )}
                            </span>
                            {!dense && s.desc && (
                              <span className="text-fd-muted-foreground mt-0.5 line-clamp-2 block text-[11px] leading-snug">
                                {s.desc}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* ── 트리맵 ───────────────────────────────────────────── */}
      {view === 'treemap' && (
        <div
          className="bg-fd-card relative w-full overflow-hidden rounded-lg border"
          style={{ aspectRatio: String(data.treemap.aspect) }}
        >
          {data.treemap.rects.map((r, i) => {
            const style = {
              left: `${r.x}%`,
              top: `${r.y}%`,
              width: `${r.w}%`,
              height: `${r.h}%`,
            } as const;

            if (r.depth === 1) {
              return (
                <div
                  key={i}
                  className="text-fd-muted-foreground absolute px-1.5 pt-0.5 text-[10px] font-semibold tracking-wider uppercase"
                  style={style}
                >
                  {r.name}
                </div>
              );
            }

            if (r.depth === 2) {
              return (
                <div
                  key={i}
                  className="absolute rounded-md border"
                  style={{
                    ...style,
                    borderColor: (r.color ?? '#888') + '99',
                    background: (r.color ?? '#888') + '12',
                  }}
                >
                  <span
                    className="absolute top-0 left-1 truncate text-[10px] font-semibold"
                    style={{ color: r.color ?? undefined, maxWidth: 'calc(100% - 8px)' }}
                  >
                    {r.name}
                  </span>
                </div>
              );
            }

            const dim = !matches(r.name);
            const showName = r.w > 4.2 && r.h > 4.5;
            return (
              <Link
                key={i}
                href={r.url ?? '#'}
                title={`${r.name} — 문제은행 ${r.count}문항`}
                className="absolute overflow-hidden rounded-sm border no-underline transition-opacity hover:z-10 hover:brightness-110"
                style={{
                  ...style,
                  background: (r.color ?? '#888') + (dim ? '18' : '55'),
                  borderColor: (r.color ?? '#888') + (dim ? '30' : 'aa'),
                  opacity: dim ? 0.35 : 1,
                }}
              >
                {showName && (
                  <span className="text-fd-foreground block px-1 py-0.5 text-[9px] leading-tight break-words">
                    {r.name.replace(/^(Amazon|AWS)\s+/, '')}
                    {r.count > 0 && r.h > 7 && (
                      <span className="block opacity-60 tabular-nums">{r.count}</span>
                    )}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}

      <p className="text-fd-muted-foreground mt-3 text-xs">
        {view === 'nested'
          ? '계층 → 카테고리 → 서비스 순으로 중첩돼 있습니다. 오른쪽 숫자는 문제은행 출현 문항 수입니다.'
          : '칸의 넓이가 문제은행 출현 빈도입니다. 넓은 것부터 외우면 됩니다. 칸에 마우스를 올리면 전체 이름이 보입니다.'}
        {' '}클릭하면 서비스 노트로 이동합니다.
      </p>
    </div>
  );
}
