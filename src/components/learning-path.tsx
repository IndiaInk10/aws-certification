'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ChevronRight,
  Circle,
  FileText,
  ListChecks,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import modulesData from '@/generated/modules.json';
import { store } from '@/lib/storage';

type Module = {
  slug: string;
  order: number;
  title: string;
  why: string;
  url: string;
  lessons: number;
  knowledgeChecks: number;
  quiz: number;
};

export function LearningPath({ cert }: { cert: string }) {
  const modules: Module[] =
    (modulesData as { cert: string; modules: Module[] }[]).find((c) => c.cert === cert)
      ?.modules ?? [];

  const [done, setDone] = useState<string[] | null>(null);

  const load = useCallback(() => {
    void store.getDone().then(setDone);
  }, []);

  useEffect(() => {
    load();
    window.addEventListener('cv:changed', load);
    return () => window.removeEventListener('cv:changed', load);
  }, [load]);

  const key = (m: Module) => `${cert}/${m.slug}`;
  const isDone = (m: Module) => done?.includes(key(m)) ?? false;
  const count = done ? modules.filter(isDone).length : 0;
  const pct = modules.length ? Math.round((count / modules.length) * 100) : 0;
  const next = modules.find((m) => !isDone(m));

  const toggle = async (m: Module) => {
    const list = await store.toggleDone(key(m));
    setDone(list);
  };

  const reset = async () => {
    if (!done?.length) return;
    let list = done;
    for (const m of modules) if (list.includes(key(m))) list = await store.toggleDone(key(m));
    setDone(list);
  };

  return (
    <div className="not-prose my-6">
      {/* 진행률 */}
      <div className="rounded-lg border p-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-2xl font-bold tabular-nums">
            {count} / {modules.length}
          </span>
          <span className="text-fd-muted-foreground text-sm">모듈 완료 · {pct}%</span>
          {done !== null && count > 0 && (
            <button
              onClick={() => void reset()}
              className="text-fd-muted-foreground ml-auto flex items-center gap-1 text-xs hover:underline"
            >
              <RotateCcw className="size-3" />
              진행 초기화
            </button>
          )}
        </div>

        <div className="bg-fd-secondary mt-3 h-2 overflow-hidden rounded-full">
          <div
            className="bg-fd-primary h-full rounded-full transition-[width]"
            style={{ width: `${pct}%` }}
          />
        </div>

        {next ? (
          <Link
            href={next.url}
            className="bg-fd-primary text-fd-primary-foreground mt-4 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm no-underline"
          >
            {count === 0 ? '학습 시작' : '이어서 하기'} — {next.title}
            <ChevronRight className="size-4" />
          </Link>
        ) : (
          <p className="mt-4 text-sm">
            전 모듈 완료.{' '}
            <Link href="/quiz" className="underline">
              문제 풀이
            </Link>
            로 넘어가세요.
          </p>
        )}
      </div>

      {/* 모듈 목록 */}
      <ol className="mt-4 space-y-1.5">
        {modules.map((m) => {
          const d = isDone(m);
          return (
            <li key={m.slug} className="flex items-start gap-2">
              <button
                onClick={() => void toggle(m)}
                aria-label={d ? '완료 해제' : '완료 표시'}
                className={`mt-2.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                  d ? 'bg-fd-primary text-fd-primary-foreground border-transparent' : ''
                }`}
              >
                {d ? <Check className="size-3" /> : <Circle className="size-2 opacity-30" />}
              </button>

              <Link
                href={m.url}
                className={`hover:bg-fd-secondary/50 flex-1 rounded-md border p-3 no-underline ${
                  d ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-fd-muted-foreground text-xs tabular-nums">
                    {String(m.order).padStart(2, '0')}
                  </span>
                  <span className={`font-medium ${d ? 'line-through' : ''}`}>
                    {m.title.replace(/^\d+\s*/, '')}
                  </span>
                </div>
                {m.why && (
                  <p className="text-fd-muted-foreground mt-1 text-sm">{m.why}</p>
                )}
                <div className="text-fd-muted-foreground mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                  <span className="flex items-center gap-1">
                    <BookOpen className="size-3" /> 강의 {m.lessons}
                  </span>
                  <span className="flex items-center gap-1">
                    <ListChecks className="size-3" /> 지식점검 {m.knowledgeChecks}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="size-3" /> 평가 {m.quiz}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
