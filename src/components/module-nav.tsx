'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ChevronLeft, ChevronRight, Circle, ListTree } from 'lucide-react';
import modulesData from '@/generated/modules.json';
import { store } from '@/lib/storage';

type Module = { slug: string; order: number; title: string; url: string };

export function ModuleNav({ cert, slug }: { cert: string; slug: string }) {
  const modules: Module[] =
    (modulesData as { cert: string; modules: Module[] }[]).find((c) => c.cert === cert)
      ?.modules ?? [];

  const i = modules.findIndex((m) => m.slug === slug);
  const cur = modules[i];
  const prev = i > 0 ? modules[i - 1] : null;
  const next = i >= 0 && i < modules.length - 1 ? modules[i + 1] : null;

  const [done, setDone] = useState<string[] | null>(null);
  const key = `${cert}/${slug}`;

  // load 는 이 effect 밖에서 쓰이지 않으므로 안에 둔다 — useCallback 으로 감쌀 이유가 없다.
  useEffect(() => {
    const load = () => void store.getDone().then(setDone);
    load();
    window.addEventListener('cv:changed', load);
    return () => window.removeEventListener('cv:changed', load);
  }, []);

  if (!cur) return null;
  const isDone = done?.includes(key) ?? false;
  const total = modules.length;
  const doneCount = done ? modules.filter((m) => done.includes(`${cert}/${m.slug}`)).length : 0;

  return (
    <div className="not-prose mt-10 border-t pt-6">
      <div className="text-fd-muted-foreground mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <span className="tabular-nums">
          {cur.order} / {total} 모듈
        </span>
        <div className="bg-fd-secondary h-1 w-28 overflow-hidden rounded-full">
          <div
            className="bg-fd-primary h-full"
            style={{ width: `${total ? (doneCount / total) * 100 : 0}%` }}
          />
        </div>
        <span className="tabular-nums">{doneCount}개 완료</span>
        <Link
          href={`/docs/${cert}/00-map/00-learning-path`}
          className="ml-auto flex items-center gap-1 no-underline hover:underline"
        >
          <ListTree className="size-3.5" />
          학습 경로
        </Link>
      </div>

      <button
        onClick={async () => setDone(await store.toggleDone(key))}
        className={`flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm ${
          isDone ? 'bg-fd-primary/10 border-fd-primary/40' : ''
        }`}
      >
        {isDone ? <Check className="size-4" /> : <Circle className="size-4 opacity-40" />}
        {isDone ? '완료함 — 다시 누르면 해제' : '이 모듈 완료로 표시'}
      </button>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {prev ? (
          <Link
            href={prev.url}
            className="hover:bg-fd-secondary/50 flex items-center gap-2 rounded-md border p-3 no-underline"
          >
            <ChevronLeft className="text-fd-muted-foreground size-4 shrink-0" />
            <span className="min-w-0">
              <span className="text-fd-muted-foreground block text-xs">이전</span>
              <span className="block truncate text-sm">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={next.url}
            className="hover:bg-fd-secondary/50 flex items-center justify-end gap-2 rounded-md border p-3 text-right no-underline"
          >
            <span className="min-w-0">
              <span className="text-fd-muted-foreground block text-xs">다음</span>
              <span className="block truncate text-sm">{next.title}</span>
            </span>
            <ChevronRight className="text-fd-muted-foreground size-4 shrink-0" />
          </Link>
        ) : (
          <Link
            href={`/${cert}/quiz`}
            className="hover:bg-fd-secondary/50 flex items-center justify-end gap-2 rounded-md border p-3 text-right no-underline"
          >
            <span>
              <span className="text-fd-muted-foreground block text-xs">완주</span>
              <span className="block text-sm">문제 풀이로</span>
            </span>
            <ChevronRight className="text-fd-muted-foreground size-4 shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
