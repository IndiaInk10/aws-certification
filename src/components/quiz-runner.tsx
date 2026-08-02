'use client';

import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import Link from 'next/link';
import { store, type ExamAttempt, type WrongItem } from '@/lib/storage';
import { Check, ChevronLeft, ChevronRight, Flag, X } from 'lucide-react';

export type Question = {
  q: string;
  choices: { k: string; t: string }[];
  answers: string[];
  services: string[];
  modules: string[];
  ref: string | null;
};

const EXAM_TITLE: Record<string, string> = {
  'aws-clf-c02': 'AWS Certified Cloud Practitioner',
};

/** 실제 시험은 65문항 / 90분. 회차 문항 수에 비례해 제한 시간을 잡는다. */
const secondsFor = (n: number) => Math.round((90 * 60 * n) / 65);

type State = {
  i: number;
  picked: Record<number, string[]>;
  flagged: Record<number, boolean>;
  review: boolean;
  done: boolean;
  startedAt: number;
};

type Action =
  | { type: 'pick'; k: string; multi: boolean }
  | { type: 'flag' }
  | { type: 'goto'; i: number }
  | { type: 'step'; d: number }
  | { type: 'review'; on: boolean }
  | { type: 'submit' };

function makeReducer(count: number) {
  return (s: State, a: Action): State => {
    switch (a.type) {
      case 'pick': {
        const cur = s.picked[s.i] ?? [];
        const next = a.multi
          ? cur.includes(a.k)
            ? cur.filter((x) => x !== a.k)
            : [...cur, a.k]
          : [a.k];
        return { ...s, picked: { ...s.picked, [s.i]: next } };
      }
      case 'flag':
        return { ...s, flagged: { ...s.flagged, [s.i]: !s.flagged[s.i] } };
      case 'goto':
        return { ...s, i: Math.max(0, Math.min(count - 1, a.i)), review: false };
      case 'step':
        return { ...s, i: Math.max(0, Math.min(count - 1, s.i + a.d)) };
      case 'review':
        return { ...s, review: a.on };
      case 'submit':
        return { ...s, done: true, review: false };
    }
  };
}

/** Fisher-Yates. 원본 배열은 건드리지 않는다. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const eq = (a: string[], b: string[]) =>
  a.length === b.length && [...a].sort().join() === [...b].sort().join();

const hhmmss = (s: number) => {
  const x = Math.max(0, s);
  return [Math.floor(x / 3600), Math.floor((x % 3600) / 60), x % 60]
    .map((v) => String(v).padStart(2, '0'))
    .join(':');
};

export function QuizRunner({
  cert,
  exam,
  questions: source,
}: {
  cert: string;
  exam: number;
  questions: Question[];
}) {
  // 보기 순서를 섞는다. 정답이 늘 같은 자리에 있으면 위치를 외워버린다.
  // SSR 결과와 어긋나지 않도록 첫 렌더는 원본 순서로 두고, 마운트 후에 섞는다.
  const [questions, setQuestions] = useState(source);
  useEffect(() => {
    setQuestions(source.map((q) => ({ ...q, choices: shuffle(q.choices) })));
  }, [source]);

  const initial: State = {
    i: 0,
    picked: {},
    flagged: {},
    review: false,
    done: false,
    startedAt: Date.now(),
  };
  const [s, dispatch] = useReducer(makeReducer(questions.length), initial);
  const [studyMode, setStudyMode] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [left, setLeft] = useState(() => secondsFor(questions.length));
  const saved = useRef(false);

  // 타이머 (실전 모드에서만)
  useEffect(() => {
    if (s.done || studyMode) return;
    const t = setInterval(() => setLeft((v) => v - 1), 1000);
    return () => clearInterval(t);
  }, [s.done, studyMode]);

  useEffect(() => {
    if (left <= 0 && !s.done) dispatch({ type: 'submit' });
  }, [left, s.done]);

  const q = questions[s.i];
  const multi = q.answers.length > 1;
  const picked = s.picked[s.i] ?? [];
  const answeredCount = Object.values(s.picked).filter((v) => v.length).length;
  const flaggedCount = Object.values(s.flagged).filter(Boolean).length;

  const result = useMemo(() => {
    let correct = 0;
    const wrong: number[] = [];
    questions.forEach((qq, i) => {
      if (eq(s.picked[i] ?? [], qq.answers)) correct++;
      else wrong.push(i);
    });
    return { correct, wrong, total: questions.length };
  }, [s.picked, questions]);

  // 결과 저장
  useEffect(() => {
    if (!s.done || saved.current) return;
    saved.current = true;

    const attempt: ExamAttempt = {
      id: `${cert}-${exam}-${Date.now()}`,
      cert,
      exam,
      total: result.total,
      correct: result.correct,
      durationSec: Math.round((Date.now() - s.startedAt) / 1000),
      at: new Date().toISOString(),
    };
    void store.addAttempt(attempt);

    for (const i of result.wrong) {
      const qq = questions[i];
      void store.putWrong({
        id: `${cert}-${exam}-${i}`,
        cert,
        exam,
        qi: i,
        q: qq.q,
        choices: qq.choices,
        chosen: s.picked[i] ?? [],
        answers: qq.answers,
        services: qq.services,
        modules: qq.modules,
        at: new Date().toISOString(),
      } satisfies WrongItem);
    }
  }, [s.done, s.startedAt, s.picked, cert, exam, questions, result]);

  // ── 결과 화면 ──────────────────────────────────────────────
  if (s.done) {
    const pct = Math.round((result.correct / result.total) * 100);
    // AWS 는 100~1000 스케일, 700점 합격
    const scaled = Math.round(100 + (pct / 100) * 900);
    const pass = scaled >= 700;
    const mins = Math.round((Date.now() - s.startedAt) / 60000);

    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border p-6">
          <div className="text-fd-muted-foreground text-sm">
            {EXAM_TITLE[cert] ?? cert} · 회차 {exam}
          </div>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-4xl font-bold">{scaled}</span>
            <span
              className={`rounded px-2 py-0.5 text-sm font-semibold ${
                pass
                  ? 'bg-green-500/15 text-green-700 dark:text-green-400'
                  : 'bg-red-500/15 text-red-700 dark:text-red-400'
              }`}
            >
              {pass ? 'PASS' : 'FAIL'}
            </span>
            <span className="text-fd-muted-foreground text-sm">
              합격 기준 700 · 정답 {result.correct}/{result.total} ({pct}%) · {mins}분
            </span>
          </div>
          <div className="bg-fd-secondary relative mt-4 h-2 overflow-hidden rounded-full">
            <div
              className="h-full rounded-full"
              style={{
                width: `${((scaled - 100) / 900) * 100}%`,
                background: pass ? '#22c55e' : '#ef4444',
              }}
            />
            <div className="bg-fd-foreground/50 absolute top-0 h-full w-px" style={{ left: '66.7%' }} />
          </div>

          <p className="text-fd-muted-foreground mt-3 text-sm">
            {pct >= 85
              ? '합격권입니다. 3회 연속 유지되면 접수해도 됩니다.'
              : pct >= 70
                ? '아슬아슬합니다. 오답노트를 정리하고 취약 모듈로 돌아가세요.'
                : '문제를 더 푸는 대신 해당 모듈 강의로 돌아가는 편이 빠릅니다.'}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/review" className="rounded-md border px-3 py-1.5 text-sm no-underline">
              오답노트 {result.wrong.length}문항 →
            </Link>
            <Link href="/quiz" className="rounded-md border px-3 py-1.5 text-sm no-underline">
              회차 목록
            </Link>
          </div>
        </div>

        <h2 className="mt-8 mb-3 text-sm font-semibold">틀린 문항 {result.wrong.length}개</h2>
        <ol className="space-y-4">
          {result.wrong.map((i) => {
            const qq = questions[i];
            const chosen = s.picked[i] ?? [];
            return (
              <li key={i} className="rounded-lg border p-4 text-sm">
                <div className="text-fd-muted-foreground mb-1 flex gap-2 text-xs">
                  <span>Q{i + 1}</span>
                  {s.flagged[i] && (
                    <span className="flex items-center gap-1"><Flag className="size-3" />검토 표시함</span>
                  )}
                  {chosen.length === 0 && <span>미응답</span>}
                </div>
                <div className="font-medium">{qq.q}</div>
                <ul className="mt-2 space-y-1">
                  {qq.choices.map((c) => {
                    const isAns = qq.answers.includes(c.k);
                    const isPick = chosen.includes(c.k);
                    return (
                      <li
                        key={c.k}
                        className={
                          isAns
                            ? 'text-green-600 dark:text-green-400'
                            : isPick
                              ? 'text-red-600 line-through dark:text-red-400'
                              : 'text-fd-muted-foreground'
                        }
                      >
                        {isAns ? <Check className="mr-1 inline size-3.5" /> : isPick ? <X className="mr-1 inline size-3.5" /> : <span className="mr-1 inline-block w-3.5" />}
                        {c.t}
                      </li>
                    );
                  })}
                </ul>
                {qq.services.length > 0 && (
                  <div className="text-fd-muted-foreground mt-2 text-xs">
                    관련: {qq.services.join(' · ')}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  // ── Review Screen (전체 문항 상태 그리드) ────────────────────
  if (s.review) {
    return (
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border">
        <div className="bg-fd-secondary/60 flex flex-wrap items-center gap-x-4 gap-y-1 border-b px-4 py-3">
          <span className="font-semibold">Review Screen</span>
          <span className="text-fd-muted-foreground text-sm">
            응답 {answeredCount} · 미응답 {questions.length - answeredCount} · 검토 {flaggedCount}
          </span>
          {!studyMode && (
            <span className="ml-auto font-mono text-sm tabular-nums">{hhmmss(left)}</span>
          )}
        </div>

        <div className="max-h-[52vh] overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-fd-secondary/30 text-fd-muted-foreground sticky top-0 text-left text-xs">
              <tr>
                <th className="w-16 px-4 py-2 font-medium">문항</th>
                <th className="px-4 py-2 font-medium">상태</th>
                <th className="w-16 px-4 py-2 font-medium">검토</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((_, i) => {
                const ans = (s.picked[i] ?? []).length > 0;
                return (
                  <tr
                    key={i}
                    onClick={() => dispatch({ type: 'goto', i })}
                    className="hover:bg-fd-secondary/40 cursor-pointer border-t"
                  >
                    <td className="px-4 py-1.5">{i + 1}</td>
                    <td className={`px-4 py-1.5 ${ans ? '' : 'text-fd-muted-foreground'}`}>
                      {ans ? 'Answered' : 'Not Answered'}
                    </td>
                    <td className="px-4 py-1.5">{s.flagged[i] ? <Flag className="size-3.5" /> : null}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-2 border-t px-4 py-3">
          <button
            onClick={() => dispatch({ type: 'review', on: false })}
            className="rounded-md border px-3 py-1.5 text-sm"
          >
            시험으로 돌아가기
          </button>
          {flaggedCount > 0 && (
            <button
              onClick={() => {
                const first = questions.findIndex((_, i) => s.flagged[i]);
                if (first >= 0) dispatch({ type: 'goto', i: first });
              }}
              className="rounded-md border px-3 py-1.5 text-sm"
            >
              검토 표시한 첫 문항으로
            </button>
          )}
          <button
            onClick={() => {
              if (
                answeredCount < questions.length &&
                !confirm(`미응답 ${questions.length - answeredCount}문항이 있습니다. 제출할까요?`)
              )
                return;
              dispatch({ type: 'submit' });
            }}
            className="bg-fd-primary text-fd-primary-foreground ml-auto rounded-md px-3 py-1.5 text-sm"
          >
            Submit Exam
          </button>
        </div>
      </div>
    );
  }

  // ── 시험 화면 ──────────────────────────────────────────────
  const showAnswer = studyMode && revealed[s.i];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-lg border">
        {/* Top Bar */}
        <div className="bg-fd-secondary/60 flex flex-wrap items-center gap-x-4 gap-y-2 border-b px-4 py-2.5">
          <span className="text-sm font-semibold">{EXAM_TITLE[cert] ?? cert}</span>
          <span className="text-fd-muted-foreground text-sm tabular-nums">
            {s.i + 1} / {questions.length}
          </span>

          <label className="ml-auto flex cursor-pointer items-center gap-1.5 text-sm select-none">
            <input
              type="checkbox"
              checked={!!s.flagged[s.i]}
              onChange={() => dispatch({ type: 'flag' })}
              className="size-4"
            />
            Flag for Review
          </label>

          {!studyMode && (
            <span
              className={`font-mono text-sm tabular-nums ${
                left < 300 ? 'text-red-600 dark:text-red-400' : 'text-fd-muted-foreground'
              }`}
            >
              {hhmmss(left)}
            </span>
          )}
        </div>

        {/* Center */}
        <div className="px-5 py-6">
          <p className="leading-relaxed font-medium">{q.q}</p>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            {multi ? `Choose ${q.answers.length} answers.` : 'Choose 1 answer.'}
          </p>

          <ul className="mt-5 space-y-1.5">
            {q.choices.map((c) => {
              const on = picked.includes(c.k);
              const isAns = q.answers.includes(c.k);
              let cls = 'hover:bg-fd-secondary/40';
              if (showAnswer) {
                if (isAns) cls = 'bg-green-500/10';
                else if (on) cls = 'bg-red-500/10';
              } else if (on) cls = 'bg-fd-primary/10';

              return (
                <li key={c.k}>
                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-md px-3 py-2.5 text-sm ${cls}`}
                  >
                    <input
                      type={multi ? 'checkbox' : 'radio'}
                      name={`q${s.i}`}
                      checked={on}
                      onChange={() => dispatch({ type: 'pick', k: c.k, multi })}
                      className="mt-0.5 size-4 shrink-0"
                    />
                    <span>{c.t}</span>
                    {showAnswer && isAns && <Check className="ml-auto size-4 shrink-0" />}
                    {showAnswer && !isAns && on && <X className="ml-auto size-4 shrink-0" />}
                  </label>
                </li>
              );
            })}
          </ul>

          {studyMode && (
            <div className="mt-4">
              {!revealed[s.i] ? (
                <button
                  onClick={() => setRevealed((r) => ({ ...r, [s.i]: true }))}
                  disabled={!picked.length}
                  className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
                >
                  정답 확인
                </button>
              ) : (
                q.ref && (
                  <a
                    href={q.ref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-fd-muted-foreground text-xs underline"
                  >
                    AWS 공식 문서에서 확인 →
                  </a>
                )
              )}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="bg-fd-secondary/60 flex items-center gap-2 border-t px-4 py-3">
          <button
            onClick={() => dispatch({ type: 'step', d: -1 })}
            disabled={s.i === 0}
            className="flex items-center gap-1 rounded-md border px-4 py-1.5 text-sm disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            Previous
          </button>

          <button
            onClick={() => dispatch({ type: 'review', on: true })}
            className="mx-auto rounded-md border px-4 py-1.5 text-sm"
          >
            Review Screen
          </button>

          {s.i < questions.length - 1 ? (
            <button
              onClick={() => dispatch({ type: 'step', d: 1 })}
              className="bg-fd-primary text-fd-primary-foreground flex items-center gap-1 rounded-md px-4 py-1.5 text-sm"
            >
              Next
              <ChevronRight className="size-4" />
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: 'review', on: true })}
              className="bg-fd-primary text-fd-primary-foreground rounded-md px-4 py-1.5 text-sm"
            >
              End Review
            </button>
          )}
        </div>
      </div>

      {/* 보조 정보 — 실제 시험엔 없지만 학습용 */}
      <div className="text-fd-muted-foreground mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <span>
          응답 {answeredCount}/{questions.length}
        </span>
        {flaggedCount > 0 && (<span className="flex items-center gap-1"><Flag className="size-3" />{flaggedCount}</span>)}
        <label className="ml-auto flex cursor-pointer items-center gap-1.5 select-none">
          <input
            type="checkbox"
            checked={studyMode}
            onChange={(e) => setStudyMode(e.target.checked)}
            className="size-3.5"
          />
          학습 모드 (타이머 끄고 문항마다 정답 확인)
        </label>
      </div>
    </div>
  );
}
