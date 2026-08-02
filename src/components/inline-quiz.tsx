'use client';

/**
 * 문서 본문 안에서 바로 푸는 문제.
 *
 * 마크다운의 ```quiz / ```exam 코드 펜스를 remark-obsidian.mjs 가 이 컴포넌트로 바꾼다.
 * 외부 라이브러리 없이 useState 만 쓴다 (quiz-runner 와 같은 원칙).
 *
 *  mode="check" — 지식 점검. 문항이 적으므로 전부 펼쳐 두고, 고르는 즉시 해설이 열린다.
 *  mode="exam"  — 모듈 평가. 문항이 많아 페이지가 길어지므로 한 문항씩 넘겨 푼다.
 */

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  RotateCcw,
  X,
} from 'lucide-react';

type RawChoice = { t: string; c?: boolean };
type RawQuestion = { q: string; choices: RawChoice[]; explain?: string };

const LETTER = 'ABCDEFGH';

const sameSet = (a: number[], b: number[]) =>
  a.length === b.length && [...a].sort().join() === [...b].sort().join();

/** Fisher-Yates. 원본 배열은 건드리지 않는다. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * 문제 텍스트 안의 **굵게** 와 `코드` 만 처리한다.
 * 문제는 코드 펜스 안에 있어서 마크다운 파서를 거치지 않기 때문.
 */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|`([^`]+)`/g;
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <strong key={k++} className="text-fd-foreground font-semibold">
          {m[1]}
        </strong>,
      );
    } else {
      out.push(
        <code
          key={k++}
          className="bg-fd-muted rounded px-1 py-0.5 font-mono text-[0.9em]"
        >
          {m[2]}
        </code>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function InlineQuiz({
  data,
  mode = 'check',
  title,
}: {
  data: string;
  mode?: 'check' | 'exam';
  title?: string;
}) {
  const questions = useMemo<RawQuestion[]>(() => {
    try {
      return JSON.parse(data) as RawQuestion[];
    } catch {
      return [];
    }
  }, [data]);

  const [picked, setPicked] = useState<Record<number, number[]>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [graded, setGraded] = useState(false);
  const [cur, setCur] = useState(0);

  // 보기 표시 순서. 정답이 늘 같은 자리면 위치를 외워버리므로 섞는다.
  // SSR 결과와 어긋나지 않도록 첫 렌더는 원본 순서, 마운트 후에 섞는다.
  const [order, setOrder] = useState<number[][]>(() =>
    questions.map((q) => q.choices.map((_, i) => i)),
  );
  const reshuffle = () =>
    setOrder(questions.map((q) => shuffle(q.choices.map((_, i) => i))));
  useEffect(reshuffle, [questions]);

  if (!questions.length) return null;

  const exam = mode === 'exam';
  const answersOf = (q: RawQuestion) =>
    q.choices.map((c, i) => (c.c ? i : -1)).filter((i) => i >= 0);

  const isRevealed = (qi: number) => (exam ? graded : !!checked[qi]);
  const isCorrect = (qi: number) =>
    sameSet(picked[qi] ?? [], answersOf(questions[qi]));

  const answeredCount = Object.values(picked).filter((v) => v.length).length;
  const correctCount = questions.filter((_, i) => isCorrect(i)).length;

  const pick = (qi: number, ci: number, multi: boolean) => {
    if (isRevealed(qi)) return;
    setPicked((prev) => {
      const cur = prev[qi] ?? [];
      const next = multi
        ? cur.includes(ci)
          ? cur.filter((x) => x !== ci)
          : [...cur, ci]
        : [ci];
      return { ...prev, [qi]: next };
    });
    // 단일 선택 지식 점검은 고르는 즉시 채점한다
    if (!exam && !multi) setChecked((prev) => ({ ...prev, [qi]: true }));
  };

  const reset = () => {
    setPicked({});
    setChecked({});
    setGraded(false);
    setCur(0);
    reshuffle();
  };

  /** 문항 하나 — 질문 · 보기 · (공개되었으면) 해설 */
  const renderQuestion = (qi: number) => {
    const q = questions[qi];
    const answers = answersOf(q);
    const multi = answers.length > 1;
    const sel = picked[qi] ?? [];
    const revealed = isRevealed(qi);
    const ok = isCorrect(qi);
    const view = order[qi] ?? q.choices.map((_, i) => i);

    return (
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {inline(q.q)}
        </p>
        {multi && (
          <p className="text-fd-muted-foreground mt-1 text-xs">
            정답 {answers.length}개를 고르세요
          </p>
        )}

        <ul className="mt-3 space-y-1.5">
          {view.map((ci, pos) => {
            const c = q.choices[ci];
            const isPicked = sel.includes(ci);
            const isAnswer = !!c.c;

            let cls = 'border-fd-border hover:bg-fd-accent hover:border-fd-primary/40';
            if (revealed) {
              if (isAnswer)
                cls =
                  'border-green-500/60 bg-green-500/10 text-green-800 dark:text-green-300';
              else if (isPicked)
                cls =
                  'border-red-500/60 bg-red-500/10 text-red-800 dark:text-red-300';
              else cls = 'border-fd-border opacity-55';
            } else if (isPicked) {
              cls = 'border-fd-primary bg-fd-primary/10';
            }

            return (
              <li key={ci}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => pick(qi, ci, multi)}
                  className={`flex w-full items-start gap-2.5 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${cls} ${
                    revealed ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <span className="mt-px flex size-5 shrink-0 items-center justify-center rounded border text-[11px] font-semibold opacity-70">
                    {LETTER[pos]}
                  </span>
                  <span className="min-w-0 flex-1 leading-relaxed">
                    {inline(c.t)}
                  </span>
                  {revealed && isAnswer && (
                    <Check className="mt-0.5 size-4 shrink-0 text-green-600 dark:text-green-400" />
                  )}
                  {revealed && isPicked && !isAnswer && (
                    <X className="mt-0.5 size-4 shrink-0 text-red-600 dark:text-red-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* 복수 정답 지식 점검은 확인 버튼이 따로 필요하다 */}
        {!exam && multi && !revealed && (
          <button
            type="button"
            disabled={!sel.length}
            onClick={() => setChecked((prev) => ({ ...prev, [qi]: true }))}
            className="mt-2.5 rounded-md border px-3 py-1.5 text-xs font-medium disabled:opacity-40"
          >
            확인
          </button>
        )}

        {revealed && (
          <div className="mt-3 overflow-hidden rounded-lg border">
            <div
              className={`flex items-center gap-2 px-3 py-2 ${
                !sel.length
                  ? 'bg-fd-muted text-fd-muted-foreground'
                  : ok
                    ? 'bg-green-500/10 text-green-700 dark:text-green-400'
                    : 'bg-red-500/10 text-red-700 dark:text-red-400'
              }`}
            >
              {!sel.length ? (
                <CircleAlert className="size-4 shrink-0" />
              ) : ok ? (
                <Check className="size-4 shrink-0" />
              ) : (
                <X className="size-4 shrink-0" />
              )}
              <span className="text-sm font-semibold">
                {!sel.length ? '미응답' : ok ? '정답' : '오답'}
              </span>
              {!ok && (
                <span className="text-sm opacity-80">
                  정답은{' '}
                  {answers
                    .map((i) => LETTER[view.indexOf(i)])
                    .filter(Boolean)
                    .sort()
                    .join(' · ')}
                </span>
              )}
              {!exam && (
                <button
                  type="button"
                  onClick={() => {
                    setPicked((p) => ({ ...p, [qi]: [] }));
                    setChecked((p) => ({ ...p, [qi]: false }));
                    setOrder((o) => o.map((v, i) => (i === qi ? shuffle(v) : v)));
                  }}
                  className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs opacity-70 transition-opacity hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10"
                >
                  <RotateCcw className="size-3" />
                  다시 풀기
                </button>
              )}
            </div>

            {q.explain && (
              <div className="bg-fd-card border-t px-3 py-3">
                <p className="text-fd-muted-foreground mb-1.5 text-[11px] font-semibold tracking-wider uppercase">
                  해설
                </p>
                <p className="text-fd-foreground/90 text-sm leading-relaxed whitespace-pre-line">
                  {inline(q.explain)}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // ── 모듈 평가 — 한 문항씩 넘겨 푼다 ────────────────────────
  if (exam) {
    const pct = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="not-prose bg-fd-card my-6 overflow-hidden rounded-xl border">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b px-4 py-2.5">
          <span className="text-sm font-semibold">{title ?? '모듈 평가'}</span>
          <span className="text-fd-muted-foreground text-xs tabular-nums">
            {cur + 1} / {questions.length}
          </span>

          {graded ? (
            <>
              <span
                className={`rounded px-2 py-0.5 text-sm font-semibold ${
                  pct === 100
                    ? 'bg-green-500/15 text-green-700 dark:text-green-400'
                    : pct >= 70
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                      : 'bg-red-500/15 text-red-700 dark:text-red-400'
                }`}
              >
                {correctCount} / {questions.length} · {pct}%
              </span>
              <button
                onClick={reset}
                className="text-fd-muted-foreground hover:text-fd-foreground ml-auto inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs"
              >
                <RotateCcw className="size-3" />
                다시 풀기
              </button>
            </>
          ) : (
            <span className="text-fd-muted-foreground ml-auto text-xs">
              응답 {answeredCount} / {questions.length}
            </span>
          )}
        </div>

        <div className="flex gap-2 px-4 py-4">
          <span className="text-fd-muted-foreground shrink-0 text-sm font-semibold">
            Q{cur + 1}.
          </span>
          {renderQuestion(cur)}
        </div>

        {/* 문항 이동 — 상태가 색으로 보이는 번호 칩 */}
        <div className="flex flex-wrap gap-1 border-t px-4 py-2.5">
          {questions.map((_, i) => {
            const answered = (picked[i] ?? []).length > 0;
            let cls = 'border-fd-border text-fd-muted-foreground';
            if (graded)
              cls = isCorrect(i)
                ? 'border-green-500/60 bg-green-500/15 text-green-700 dark:text-green-400'
                : 'border-red-500/60 bg-red-500/15 text-red-700 dark:text-red-400';
            else if (answered) cls = 'border-fd-primary/60 bg-fd-primary/10';
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCur(i)}
                className={`size-7 rounded border text-xs tabular-nums transition-colors ${cls} ${
                  i === cur ? 'ring-fd-primary ring-2 ring-offset-1' : ''
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t px-4 py-3">
          <button
            type="button"
            onClick={() => setCur((v) => Math.max(0, v - 1))}
            disabled={cur === 0}
            className="inline-flex w-fit items-center gap-1 justify-self-start rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            이전
          </button>

          {!graded && (
            <button
              type="button"
              disabled={!answeredCount}
              onClick={() => setGraded(true)}
              className="bg-fd-primary text-fd-primary-foreground col-start-2 rounded-md px-4 py-1.5 text-sm font-medium disabled:opacity-40"
            >
              채점하기
              {answeredCount < questions.length && (
                <span className="ml-1 opacity-75">
                  ({questions.length - answeredCount}문항 남음)
                </span>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() =>
              setCur((v) => Math.min(questions.length - 1, v + 1))
            }
            disabled={cur === questions.length - 1}
            className="col-start-3 inline-flex w-fit items-center gap-1 justify-self-end rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
          >
            다음
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    );
  }

  // ── 지식 점검 — 문항이 적으므로 전부 펼쳐 둔다 ──────────────
  return (
    <div className="not-prose bg-fd-card my-6 rounded-xl border">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5">
        <div className="text-sm font-semibold">
          {title ?? '지식 점검'}
          <span className="text-fd-muted-foreground ml-2 font-normal">
            {questions.length}문항
          </span>
        </div>
        <span className="text-fd-muted-foreground text-xs">
          보기를 선택하면 해설이 열립니다
        </span>
      </div>

      <ol className="divide-y">
        {questions.map((_, qi) => (
          <li key={qi} className="px-4 py-4">
            <div className="flex gap-2">
              {questions.length > 1 && (
                <span className="text-fd-muted-foreground shrink-0 text-sm font-semibold">
                  Q{qi + 1}.
                </span>
              )}
              {renderQuestion(qi)}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
