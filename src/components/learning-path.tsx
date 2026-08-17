'use client';

import { useEffect, useState } from 'react';
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
import { hasQuiz } from '@/lib/certs';
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

  // 문제은행이 아직 없는 자격증은 /:cert/quiz 라우트 자체가 생성되지 않는다.
  // (라우트는 generated/quiz/index.json 을 그대로 따른다 — app/[cert]/quiz/page.tsx)
  const quizExists = hasQuiz(cert);

  const [done, setDone] = useState<string[] | null>(null);

  // 진도는 다른 화면에서도 바뀐다 (모듈 상단의 완료 체크). 'cv:changed' 로 다시 읽는다.
  // load 는 이 effect 밖에서 쓰이지 않으므로 안에 둔다 — useCallback 으로 감쌀 이유가 없다.
  useEffect(() => {
    const load = () => void store.getDone().then(setDone);
    load();
    window.addEventListener('cv:changed', load);
    return () => window.removeEventListener('cv:changed', load);
  }, []);

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
        ) : quizExists ? (
          <p className="mt-4 text-sm">
            전 모듈 완료.{' '}
            <Link href={`/${cert}/quiz`} className="underline">
              문제 풀이
            </Link>
            로 넘어가세요.
          </p>
        ) : (
          <p className="mt-4 text-sm">전 과정 완료.</p>
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
                {/* 강의에서 뽑아낸 모듈만 이 숫자를 가진다. 과제 명세 노트(SAA)는
                    강의도 평가도 없어서 0 만 셋 늘어놓게 되므로 아예 감춘다. */}
                {m.lessons + m.knowledgeChecks + m.quiz > 0 && (
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
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
