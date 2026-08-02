'use client';

import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import Link from 'next/link';
import { store, type ExamAttempt, type WrongItem } from '@/lib/storage';
import {
  DEFAULT_LOCALE,
  localize,
  useQuizLocale,
  type Localized,
  type QuizLocale,
} from '@/lib/quiz-locale';
import { ConfirmDialog } from '@/components/ui/modal';
import { Check, ChevronLeft, ChevronRight, Flag, X } from 'lucide-react';

export type Question = {
  q: Localized;
  choices: { k: string; t: Localized }[];
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

/**
 * 시험 화면·검토 화면 카드 높이.
 * 문항 길이가 달라도 아래쪽 버튼이 늘 같은 자리에 있도록 높이를 고정하고,
 * 넘치는 내용은 카드 안에서만 스크롤한다. dvh 라서 모바일 주소창 변화까지 따라간다.
 */
const CARD_H =
  'h-[calc(100dvh-15rem)] min-h-[20rem] sm:h-[min(78dvh,44rem)] sm:min-h-[26rem]';

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
  base = DEFAULT_LOCALE,
}: {
  cert: string;
  exam: number;
  questions: Question[];
  /** 이 회차 원문의 언어. 번역본이 없는 문항은 이 언어로 보여 준다. */
  base?: QuizLocale;
}) {
  const [locale] = useQuizLocale();
  // 문항·보기 텍스트는 전부 이 두 함수를 거친다
  const tq = (q: Question) => localize(q.q, locale, base);
  const tc = (c: { t: Localized }) => localize(c.t, locale, base);

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
  const [askSubmit, setAskSubmit] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [left, setLeft] = useState(() => secondsFor(questions.length));
  const saved = useRef(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  // 긴 문항을 읽다가 넘기면 다음 문항이 중간부터 보인다. 문항이 바뀌면 위로 되돌린다.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [s.i]);

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
      // 오답노트에는 응시할 때 보던 언어로 굳혀 둔다 (나중에 번역이 추가돼도 기록은 그대로)
      void store.putWrong({
        id: `${cert}-${exam}-${i}`,
        cert,
        exam,
        qi: i,
        q: localize(qq.q, locale, base),
        choices: qq.choices.map((c) => ({ k: c.k, t: localize(c.t, locale, base) })),
        chosen: s.picked[i] ?? [],
        answers: qq.answers,
        services: qq.services,
        modules: qq.modules,
        at: new Date().toISOString(),
      } satisfies WrongItem);
    }
  }, [s.done, s.startedAt, s.picked, cert, exam, questions, result, locale, base]);

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
              {pass ? '합격' : '불합격'}
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
                <div className="font-medium">{tq(qq)}</div>
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
                        {tc(c)}
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
      <div className={`mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg border ${CARD_H}`}>
        <div className="bg-fd-secondary/60 flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 border-b px-4 py-3">
          <span className="font-semibold">검토 화면</span>
          <span className="text-fd-muted-foreground text-sm">
            응답 {answeredCount} · 미응답 {questions.length - answeredCount} · 검토 {flaggedCount}
          </span>
          {!studyMode && (
            <span className="ml-auto font-mono text-sm tabular-nums">{hhmmss(left)}</span>
          )}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
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
                      {ans ? '응답함' : '미응답'}
                    </td>
                    <td className="px-4 py-1.5">{s.flagged[i] ? <Flag className="size-3.5" /> : null}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 border-t px-4 py-3">
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
              if (answeredCount < questions.length) setAskSubmit(true);
              else dispatch({ type: 'submit' });
            }}
            className="bg-fd-primary text-fd-primary-foreground ml-auto rounded-md px-3 py-1.5 text-sm"
          >
            제출하기
          </button>
        </div>

        <ConfirmDialog
          open={askSubmit}
          title="아직 풀지 않은 문항이 있습니다"
          description={
            <>
              미응답 <strong>{questions.length - answeredCount}문항</strong>은 오답으로 처리됩니다.
              그대로 제출할까요?
            </>
          }
          confirmLabel="제출하기"
          cancelLabel="계속 풀기"
          onConfirm={() => {
            setAskSubmit(false);
            dispatch({ type: 'submit' });
          }}
          onCancel={() => setAskSubmit(false)}
        />
      </div>
    );
  }

  // ── 시험 화면 ──────────────────────────────────────────────
  const showAnswer = studyMode && revealed[s.i];

  return (
    <div className="mx-auto max-w-4xl">
      {/*
        문항마다 길이가 달라도 Previous/Next 위치는 고정한다.
        카드 높이를 화면에 맞춰 잡고(dvh — 모바일 주소창 높이 변화까지 반영),
        본문이 넘치면 카드 안에서만 스크롤한다.
      */}
      <div className={`flex flex-col overflow-hidden rounded-lg border ${CARD_H}`}>
        {/* Top Bar */}
        <div className="bg-fd-secondary/60 flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 border-b px-4 py-2.5">
          <span className="text-sm font-semibold">{EXAM_TITLE[cert] ?? cert}</span>
          <span className="text-fd-muted-foreground text-sm tabular-nums">
            {s.i + 1} / {questions.length}
          </span>

          {/* 문제 언어는 상단 언어 버튼·설정에서 바꾼다. 시험 화면에는 두지 않는다. */}
          <label className="ml-auto flex cursor-pointer items-center gap-1.5 text-sm select-none">
            <input
              type="checkbox"
              checked={!!s.flagged[s.i]}
              onChange={() => dispatch({ type: 'flag' })}
              className="size-4"
            />
            검토 표시
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

        {/* Center — 넘치면 여기서만 스크롤된다 */}
        <div ref={bodyRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6">
          <p className="leading-relaxed font-medium">{tq(q)}</p>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            {multi ? `정답 ${q.answers.length}개를 고르세요.` : '정답 1개를 고르세요.'}
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
                    <span>{tc(c)}</span>
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

        {/* Bottom Bar — 문항 길이와 무관하게 늘 같은 자리 */}
        <div className="bg-fd-secondary/60 flex shrink-0 items-center gap-2 border-t px-4 py-3">
          <button
            onClick={() => dispatch({ type: 'step', d: -1 })}
            disabled={s.i === 0}
            className="flex items-center gap-1 rounded-md border px-4 py-1.5 text-sm disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            이전
          </button>

          <button
            onClick={() => dispatch({ type: 'review', on: true })}
            className="mx-auto rounded-md border px-4 py-1.5 text-sm"
          >
            검토 화면
          </button>

          {s.i < questions.length - 1 ? (
            <button
              onClick={() => dispatch({ type: 'step', d: 1 })}
              className="bg-fd-primary text-fd-primary-foreground flex items-center gap-1 rounded-md px-4 py-1.5 text-sm"
            >
              다음
              <ChevronRight className="size-4" />
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: 'review', on: true })}
              className="bg-fd-primary text-fd-primary-foreground rounded-md px-4 py-1.5 text-sm"
            >
              검토 화면으로
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
