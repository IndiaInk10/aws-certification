'use client';

/**
 * 취약 영역 — "무엇을 주로 틀리는가" 를 한 화면에 세워 준다.
 *
 * 오답노트가 문항만 늘어놓으면 다시 풀어 보는 것 말고는 할 게 없다. 틀린 문항에 붙어 있는
 * 모듈·서비스 태그를 세어 많이 걸리는 순서로 보여 주고, 각 줄에서 바로 **강의 모듈**과
 * **서비스 노트**로 넘어가게 한다. 집계도 링크도 전부 번들 안의 정적 데이터라 오프라인에서 돈다.
 */

import Link from 'next/link';
import { moduleLink, serviceLink } from '@/lib/quiz-links';

export type Tagged = { modules?: string[]; services?: string[] };

function tally(items: Tagged[], pick: (t: Tagged) => string[] | undefined) {
  const n = new Map<string, number>();
  for (const it of items) for (const s of pick(it) ?? []) n.set(s, (n.get(s) ?? 0) + 1);
  return [...n.entries()].sort((a, b) => b[1] - a[1]);
}

function Row({
  label,
  url,
  desc,
  count,
  max,
}: {
  label: string;
  url: string | null;
  desc?: string;
  count: number;
  max: number;
}) {
  return (
    <li className="flex items-center gap-3 py-1.5">
      <div className="min-w-0 flex-1">
        {url ? (
          <Link href={url} className="text-sm no-underline hover:underline">
            {label} →
          </Link>
        ) : (
          <span className="text-sm">{label}</span>
        )}
        {desc && <div className="text-fd-muted-foreground truncate text-xs">{desc}</div>}
      </div>
      <div className="bg-fd-secondary h-1.5 w-20 shrink-0 overflow-hidden rounded-full sm:w-28">
        <div
          className="bg-fd-primary h-full rounded-full"
          style={{ width: `${Math.round((count / max) * 100)}%` }}
        />
      </div>
      <span className="text-fd-muted-foreground w-10 shrink-0 text-right text-xs tabular-nums">
        {count}문항
      </span>
    </li>
  );
}

export function WeakAreas({
  cert,
  items,
  title = '무엇을 주로 틀리는가',
  limit = 6,
}: {
  cert: string;
  /** 틀린 문항들 (modules/services 태그만 있으면 된다) */
  items: Tagged[];
  title?: string;
  limit?: number;
}) {
  const mods = tally(items, (t) => t.modules);
  const svcs = tally(items, (t) => t.services);

  if (mods.length === 0 && svcs.length === 0) {
    return (
      <p className="text-fd-muted-foreground text-sm">
        틀린 문항에 강의·서비스 태그가 없어 분석할 것이 없습니다.
      </p>
    );
  }

  const untagged = items.filter((t) => !(t.modules ?? []).length && !(t.services ?? []).length).length;

  return (
    <section>
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-fd-muted-foreground mt-1 text-sm">
        틀린 문항에 붙은 태그를 센 것입니다. 한 문항이 여러 영역에 걸리기도 합니다. 위쪽부터
        되돌아가는 편이 문제를 더 푸는 것보다 빠릅니다.
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {mods.length > 0 && (
          <div>
            <div className="text-fd-muted-foreground text-xs font-medium">강의 모듈</div>
            <ul className="mt-1 divide-y">
              {mods.slice(0, limit).map(([slug, n]) => {
                const l = moduleLink(cert, slug);
                return (
                  <Row
                    key={slug}
                    label={l?.name ?? slug}
                    url={l?.url ?? null}
                    count={n}
                    max={mods[0][1]}
                  />
                );
              })}
            </ul>
          </div>
        )}

        {svcs.length > 0 && (
          <div>
            <div className="text-fd-muted-foreground text-xs font-medium">서비스</div>
            <ul className="mt-1 divide-y">
              {svcs.slice(0, limit).map(([slug, n]) => {
                const l = serviceLink(cert, slug);
                return (
                  <Row
                    key={slug}
                    label={l?.name ?? slug}
                    url={l?.url ?? null}
                    desc={l?.desc}
                    count={n}
                    max={svcs[0][1]}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {untagged > 0 && (
        <p className="text-fd-muted-foreground mt-3 text-xs">
          태그가 없는 오답 {untagged}문항은 집계에 들어가지 않았습니다.
        </p>
      )}
    </section>
  );
}
