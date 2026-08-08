'use client';

/**
 * 취약 영역 — "무엇을 주로 틀리는가" 를 한 화면에 세워 준다.
 *
 * 오답노트가 문항만 늘어놓으면 다시 풀어 보는 것 말고는 할 게 없다. 틀린 문항에 붙어 있는
 * 모듈·서비스 태그를 세어 많이 걸리는 순서로 보여 주고, 각 줄에서 바로 **강의 모듈**과
 * **서비스 노트**로 넘어가게 한다. 집계도 링크도 전부 번들 안의 정적 데이터라 오프라인에서 돈다.
 *
 * 막대가 무엇을 뜻하는지가 헷갈리기 쉬워서, 재료에 따라 두 가지로 나눠 그린다.
 *   시험 결과 화면 — 그 회차에 나온 문항 전체(attempted)를 알고 있다 → **틀린 비율**.
 *                    (다 틀렸으면 전부 꽉 찬 막대가 나온다. 예전엔 여기서도 상대 비교를 그려서
 *                     "다 틀렸는데 왜 막대 길이가 제각각이냐" 가 됐다.)
 *   오답노트     — 모수를 알 수 없으므로 비율을 낼 수 없다 → **문항 수**, 가장 많은 영역 기준.
 */

import Link from 'next/link';
import { moduleLink, serviceLink } from '@/lib/quiz-links';
import { ChevronRight } from 'lucide-react';

export type Tagged = { modules?: string[]; services?: string[] };

function tally(items: Tagged[], pick: (t: Tagged) => string[] | undefined) {
  const n = new Map<string, number>();
  for (const it of items) for (const s of pick(it) ?? []) n.set(s, (n.get(s) ?? 0) + 1);
  return n;
}

type RowData = { slug: string; wrong: number; of: number | null };

function rows(
  items: Tagged[],
  attempted: Tagged[] | undefined,
  pick: (t: Tagged) => string[] | undefined,
): RowData[] {
  const wrong = tally(items, pick);
  const total = attempted ? tally(attempted, pick) : null;
  return [...wrong.entries()]
    .map(([slug, n]) => ({ slug, wrong: n, of: total?.get(slug) ?? null }))
    .sort((a, b) => {
      // 비율을 아는 쪽은 비율 우선(같으면 문항 수), 모르는 쪽은 문항 수 순.
      if (a.of && b.of) {
        const d = b.wrong / b.of - a.wrong / a.of;
        if (Math.abs(d) > 0.001) return d > 0 ? 1 : -1;
      }
      return b.wrong - a.wrong;
    });
}

function Row({
  label,
  url,
  desc,
  row,
  max,
}: {
  label: string;
  url: string | null;
  desc?: string;
  row: RowData;
  max: number;
}) {
  const ratio = row.of ? row.wrong / row.of : row.wrong / max;
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
      <div className="bg-fd-secondary h-1.5 w-16 shrink-0 overflow-hidden rounded-full sm:w-24">
        <div
          className="h-full rounded-full bg-red-500/80"
          style={{ width: `${Math.round(ratio * 100)}%` }}
        />
      </div>
      <span className="text-fd-muted-foreground w-16 shrink-0 text-right text-xs tabular-nums">
        {row.of ? `${row.wrong}/${row.of}문항` : `${row.wrong}문항`}
      </span>
    </li>
  );
}

export function WeakAreas({
  cert,
  items,
  attempted,
  title = '무엇을 주로 틀리는가',
  limit = 6,
  defaultOpen = false,
}: {
  cert: string;
  /** 틀린 문항 (modules/services 태그만 있으면 된다) */
  items: Tagged[];
  /** 함께 응시한 문항 전체. 있으면 막대가 "틀린 비율"이 된다. */
  attempted?: Tagged[];
  title?: string;
  limit?: number;
  defaultOpen?: boolean;
}) {
  const mods = rows(items, attempted, (t) => t.modules);
  const svcs = rows(items, attempted, (t) => t.services);

  if (mods.length === 0 && svcs.length === 0) {
    return (
      <p className="text-fd-muted-foreground text-sm">
        틀린 문항에 강의·서비스 태그가 없어 분석할 것이 없습니다.
      </p>
    );
  }

  const untagged = items.filter((t) => !(t.modules ?? []).length && !(t.services ?? []).length).length;
  const top = mods.slice(0, 2).map((r) => moduleLink(cert, r.slug)?.name ?? r.slug);

  return (
    // 접었다 펼 수 있게 — 늘 펼쳐 두면 정작 문항이 화면 밖으로 밀린다. 기본은 접힘.
    <details open={defaultOpen} className="group">
      <summary className="flex cursor-pointer list-none items-center gap-2">
        <ChevronRight className="size-4 shrink-0 transition-transform group-open:rotate-90" />
        <span className="text-base font-semibold">{title}</span>
        {top.length > 0 && (
          <span className="text-fd-muted-foreground truncate text-xs">주로 {top.join(' · ')}</span>
        )}
      </summary>

      <p className="text-fd-muted-foreground mt-2 text-sm">
        {attempted
          ? '이번에 나온 문항 중 틀린 비율입니다. 한 문항이 여러 영역에 걸리기도 합니다.'
          : '오답노트에 쌓인 문항 수입니다 (틀린 문항 + 검토 표시한 문항). 막대는 가장 많은 영역 기준입니다.'}{' '}
        위쪽부터 되돌아가는 편이 문제를 더 푸는 것보다 빠릅니다.
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {mods.length > 0 && (
          <div>
            <div className="text-fd-muted-foreground text-xs font-medium">강의 모듈</div>
            <ul className="mt-1 divide-y">
              {mods.slice(0, limit).map((r) => {
                const l = moduleLink(cert, r.slug);
                return (
                  <Row
                    key={r.slug}
                    label={l?.name ?? r.slug}
                    url={l?.url ?? null}
                    row={r}
                    max={mods[0].wrong}
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
              {svcs.slice(0, limit).map((r) => {
                const l = serviceLink(cert, r.slug);
                return (
                  <Row
                    key={r.slug}
                    label={l?.name ?? r.slug}
                    url={l?.url ?? null}
                    desc={l?.desc}
                    row={r}
                    max={svcs[0].wrong}
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
    </details>
  );
}
