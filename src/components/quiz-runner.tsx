'use client';

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
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
import { moduleLinks, serviceLinks } from '@/lib/quiz-links';
import { WeakAreas } from '@/components/weak-areas';
import { OpenBook } from '@/components/open-book';
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
  /** 시각은 렌더 중에 읽으면 안 되는 값이라(매번 달라진다) 전부 action 으로 받아 여기 담는다. */
  startedAt: number;
  finishedAt: number;
};

type Action =
  | { type: 'pick'; k: string; multi: boolean }
  | { type: 'restore'; saved: Saved }
  | { type: 'flag' }
  | { type: 'goto'; i: number }
  | { type: 'step'; d: number }
  | { type: 'review'; on: boolean }
  | { type: 'start'; at: number }
  | { type: 'submit'; at: number };

/**
 * 풀던 회차를 기기에 붙잡아 둔다.
 *
 * 시험 화면은 전부 메모리 상태다. 그래서 화면이 한 번 새로 뜨면 — 오프라인에서 캐시가 없어
 * 대체 화면이 뜨거나, 모바일이 백그라운드로 갔다 오면서 탭을 다시 그리거나, 실수로 새로고침해도
 * — 풀어 둔 답이 통째로 사라졌다. 문항을 넘길 때마다 여기에 적어 두고, 다시 들어오면 이어서 푼다.
 */
type Saved = {
  i: number;
  picked: Record<number, string[]>;
  flagged: Record<number, boolean>;
  startedAt: number;
  left: number;
  studyMode: boolean;
  count: number;
};

const sessionKey = (cert: string, exam: number) => `cv:quiz-session:${cert}:${exam}`;

function readSession(cert: string, exam: number, count: number): Saved | null {
  try {
    const raw = window.localStorage.getItem(sessionKey(cert, exam));
    if (!raw) return null;
    const v = JSON.parse(raw) as Saved;
    // 회차 문항 수가 바뀌었으면(문제 갱신) 이어 풀 수 없다. 버린다.
    if (!v || typeof v !== 'object' || v.count !== count) return null;
    return v;
  } catch {
    return null;
  }
}

function writeSession(cert: string, exam: number, v: Saved) {
  try {
    window.localStorage.setItem(sessionKey(cert, exam), JSON.stringify(v));
  } catch {
    /* 저장 공간이 없으면 그냥 포기한다 — 시험은 계속 볼 수 있어야 한다 */
  }
}

function clearSession(cert: string, exam: number) {
  try {
    window.localStorage.removeItem(sessionKey(cert, exam));
  } catch {
    /* 무시 */
  }
}

function makeReducer(count: number) {
  return (s: State, a: Action): State => {
    switch (a.type) {
      case 'restore':
        return {
          ...s,
          i: Math.max(0, Math.min(count - 1, a.saved.i)),
          picked: a.saved.picked ?? {},
          flagged: a.saved.flagged ?? {},
          startedAt: a.saved.startedAt || Date.now(),
        };
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
      case 'start':
        return { ...s, startedAt: a.at };
      case 'submit':
        return { ...s, done: true, review: false, finishedAt: a.at };
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

  const [questions, setQuestions] = useState(source);
  const [s, dispatch] = useReducer(makeReducer(questions.length), {
    i: 0,
    picked: {},
    flagged: {},
    review: false,
    done: false,
    startedAt: 0,
    finishedAt: 0,
  });

  // 마운트 직후에 할 두 가지.
  //   1) 보기 순서 섞기 — 정답이 늘 같은 자리면 위치를 외워버린다.
  //      SSR 결과와 어긋나면 안 되므로 첫 렌더는 원본 순서로 두고 여기서 섞는다.
  //   2) 시작 시각 기록 — Date.now() 는 렌더 중에 부를 수 없다 (부를 때마다 값이 달라진다).
  // 둘 다 한 틱 미룬다. effect 안에서 바로 setState 하면 같은 커밋에서 렌더가 다시 도는
  // 연쇄가 생긴다 (react-hooks/set-state-in-effect). 마이크로태스크라 화면에는 보이지 않는다.
  const [studyMode, setStudyMode] = useState(false);
  const [loaded, setLoaded] = useState(false); // 복원을 시도하기 전에는 저장하지 않는다
  const [resumed, setResumed] = useState(false);
  const [askSubmit, setAskSubmit] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [left, setLeft] = useState(() => secondsFor(questions.length));
  const saved = useRef(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    queueMicrotask(() => {
      if (!alive) return;
      setQuestions(source.map((q) => ({ ...q, choices: shuffle(q.choices) })));

      // 풀다 만 기록이 있으면 이어서, 없으면 새로 시작.
      const prev = readSession(cert, exam, source.length);
      if (prev) {
        dispatch({ type: 'restore', saved: prev });
        setLeft(prev.left);
        setStudyMode(prev.studyMode);
        setResumed(true);
      } else {
        dispatch({ type: 'start', at: Date.now() });
      }
      setLoaded(true);
    });
    return () => {
      alive = false;
    };
  }, [source, cert, exam]);

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
    if (left <= 0 && !s.done) dispatch({ type: 'submit', at: Date.now() });
  }, [left, s.done]);

  // 상태가 바뀔 때마다 기기에 적어 둔다. 화면이 다시 떠도 여기서부터 이어 푼다.
  // 남은 시간은 1초마다 바뀌므로 의존성에서 빼고 ref 로 읽는다 (매 초 저장할 이유가 없다).
  const leftRef = useRef(left);
  useEffect(() => {
    leftRef.current = left;
  }, [left]);

  const persist = useCallback(() => {
    if (!loaded || s.done) return;
    writeSession(cert, exam, {
      i: s.i,
      picked: s.picked,
      flagged: s.flagged,
      startedAt: s.startedAt,
      left: leftRef.current,
      studyMode,
      count: questions.length,
    });
  }, [loaded, s.done, s.i, s.picked, s.flagged, s.startedAt, studyMode, cert, exam, questions.length]);

  useEffect(() => {
    persist();
  }, [persist]);

  // 탭을 덮거나 앱이 백그라운드로 갈 때 한 번 더. 남은 시간까지 정확히 남는다.
  useEffect(() => {
    document.addEventListener('visibilitychange', persist);
    window.addEventListener('pagehide', persist);
    return () => {
      document.removeEventListener('visibilitychange', persist);
      window.removeEventListener('pagehide', persist);
    };
  }, [persist]);

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
    clearSession(cert, exam); // 제출했으면 이어 풀 것이 없다

    const attempt: ExamAttempt = {
      id: `${cert}-${exam}-${s.finishedAt}`,
      cert,
      exam,
      total: result.total,
      correct: result.correct,
      durationSec: Math.round((s.finishedAt - s.startedAt) / 1000),
      at: new Date().toISOString(),
    };
    void store.addAttempt(attempt);

    // 오답노트에는 응시할 때 보던 언어로 굳혀 둔다 (나중에 번역이 추가돼도 기록은 그대로).
    // 한 건씩 넣으면 서로의 쓰기를 덮어써 한 문항만 남는다 — 반드시 한 번에 넘긴다.
    const at = new Date().toISOString();
    void store.putWrongMany(
      result.wrong.map((i) => {
        const qq = questions[i];
        return {
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
          at,
        } satisfies WrongItem;
      }),
    );
  }, [s.done, s.startedAt, s.finishedAt, s.picked, cert, exam, questions, result, locale, base]);

  // ── 결과 화면 ──────────────────────────────────────────────
  if (s.done) {
    const pct = Math.round((result.correct / result.total) * 100);
    // AWS 는 100~1000 스케일, 700점 합격
    const scaled = Math.round(100 + (pct / 100) * 900);
    const pass = scaled >= 700;
    const mins = Math.round((s.finishedAt - s.startedAt) / 60000);

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
            <Link
              href={`/${cert}/review`}
              className="rounded-md border px-3 py-1.5 text-sm no-underline"
            >
              오답노트 {result.wrong.length}문항 →
            </Link>
            <Link
              href={`/${cert}/quiz`}
              className="rounded-md border px-3 py-1.5 text-sm no-underline"
            >
              회차 목록
            </Link>
          </div>
        </div>

        {result.wrong.length > 0 && (
          <div className="mt-8 rounded-lg border p-5">
            {/* 이 회차 문항 전체를 함께 넘겨 "나온 것 중 몇 개를 틀렸나"로 그린다 */}
            <WeakAreas
              cert={cert}
              items={result.wrong.map((i) => questions[i])}
              attempted={questions}
              defaultOpen
            />
          </div>
        )}

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
                {(qq.services.length > 0 || qq.modules.length > 0) && (
                  <div className="text-fd-muted-foreground mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                    <span>돌아가서 볼 것:</span>
                    {moduleLinks(cert, qq.modules).map((m) => (
                      <Link key={m.slug} href={m.url} className="rounded border px-1.5 py-0.5 no-underline">
                        {m.name}
                      </Link>
                    ))}
                    {serviceLinks(cert, qq.services).map((sv) => (
                      <Link key={sv.slug} href={sv.url} className="rounded border px-1.5 py-0.5 no-underline">
                        {sv.name}
                      </Link>
                    ))}
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
              else dispatch({ type: 'submit', at: Date.now() });
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
            dispatch({ type: 'submit', at: Date.now() });
          }}
          onCancel={() => setAskSubmit(false)}
        />
      </div>
    );
  }

  // ── 시험 화면 ──────────────────────────────────────────────
  const showAnswer = studyMode && revealed[s.i];
  const reveal = () => setRevealed((r) => ({ ...r, [s.i]: true }));

  return (
    <div className={`mx-auto ${studyMode ? 'max-w-7xl lg:flex lg:items-start lg:gap-4' : 'max-w-4xl'}`}>
      <div className="min-w-0 flex-1">
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
                    className={`flex items-start gap-3 rounded-md px-3 py-2.5 text-sm ${
                      showAnswer ? 'cursor-default' : 'cursor-pointer'
                    } ${cls}`}
                  >
                    <input
                      type={multi ? 'checkbox' : 'radio'}
                      name={`q${s.i}`}
                      checked={on}
                      // 학습 모드에서 정답이 열린 뒤에는 못 바꾼다. 답을 보고 고쳐 놓으면
                      // 결과 화면과 오답노트가 "맞힌 것" 으로 기록돼 기록 자체가 쓸모없어진다.
                      disabled={showAnswer}
                      onChange={() => {
                        dispatch({ type: 'pick', k: c.k, multi });
                        // 정답 1개짜리는 고르는 순간 끝이다. 학습 모드에서는 바로 보여 준다.
                        // 여러 개짜리는 아직 고르는 중일 수 있으니 "정답 확인" 을 누를 때까지 기다린다.
                        if (studyMode && !multi) reveal();
                      }}
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
                // 여러 개 고르는 문항만 버튼이 필요하다 (1개짜리는 고르는 즉시 열린다).
                multi && (
                  <button
                    onClick={reveal}
                    disabled={!picked.length}
                    className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
                  >
                    정답 확인 ({picked.length}/{q.answers.length} 선택)
                  </button>
                )
              ) : (
                <div className="text-sm">
                  <span
                    className={
                      eq(picked, q.answers)
                        ? 'font-medium text-green-600 dark:text-green-400'
                        : 'font-medium text-red-600 dark:text-red-400'
                    }
                  >
                    {eq(picked, q.answers) ? '정답입니다' : '오답입니다'}
                  </span>
                  {/* 보기 순서를 섞으므로 "정답 D" 같은 기호는 뜻이 없다. 내용을 그대로 적는다. */}
                  {!eq(picked, q.answers) && (
                    <span className="text-fd-muted-foreground">
                      {' '}· 정답:{' '}
                      {q.choices
                        .filter((c) => q.answers.includes(c.k))
                        .map((c) => tc(c))
                        .join(' / ')}
                    </span>
                  )}
                  {q.ref && (
                    <a
                      href={q.ref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-fd-muted-foreground ml-2 text-xs underline"
                    >
                      AWS 공식 문서 →
                    </a>
                  )}
                </div>
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
          학습 모드 (타이머 끄고 정답·강의 자료 보며 풀기)
        </label>
      </div>

      {resumed && (
        <p className="text-fd-muted-foreground mt-2 text-xs">
          지난번에 풀던 곳부터 이어서 표시했습니다. 처음부터 다시 풀려면 제출한 뒤 다시 들어오세요.
        </p>
      )}
      </div>

      {/* 오픈북 창 — 학습 모드에서만. 어차피 정답이 바로 나오는 모드라 가릴 이유가 없다. */}
      {studyMode && <OpenBook cert={cert} question={q} qi={s.i} />}
    </div>
  );
}
