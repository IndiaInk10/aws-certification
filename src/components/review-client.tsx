'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs';
import { store, type WrongItem, type SrsCard } from '@/lib/storage';
import { ConfirmDialog } from '@/components/ui/modal';
import { WeakAreas } from '@/components/weak-areas';
import { moduleLinks, serviceLinks } from '@/lib/quiz-links';
import { Check, Trash2, X } from 'lucide-react';

const engine = fsrs(generatorParameters({ enable_fuzz: true }));

/** 직렬화된 카드를 ts-fsrs 가 쓰는 형태(Date 복원)로 */
function revive(raw: SrsCard | undefined): Card {
  if (!raw) return createEmptyCard();
  const c = { ...(raw as unknown as Card) };
  c.due = new Date(c.due);
  if (c.last_review) c.last_review = new Date(c.last_review);
  return c;
}

const RATINGS: { r: Grade; label: string; hint: string; cls: string }[] = [
  { r: Rating.Again, label: '다시', hint: '전혀 모르겠다', cls: 'border-red-500/60' },
  { r: Rating.Hard, label: '어려움', hint: '겨우 생각남', cls: 'border-amber-500/60' },
  { r: Rating.Good, label: '보통', hint: '기억났다', cls: 'border-green-500/60' },
  { r: Rating.Easy, label: '쉬움', hint: '바로 나옴', cls: 'border-blue-500/60' },
];

export function ReviewClient({ cert }: { cert: string }) {
  const [wrong, setWrong] = useState<WrongItem[] | null>(null);
  const [cards, setCards] = useState<Record<string, SrsCard>>({});
  const [revealed, setRevealed] = useState(false);
  /**
   * 이번에 매긴 문항들. 점수를 매기면 다음 복습일이 미래로 밀려 대기줄에서 저절로 빠지므로
   * 커서를 따로 앞으로 옮기면 **그 다음 문항까지 함께 건너뛴다** (한 장씩 걸러 나왔던 이유).
   * 대기줄은 그냥 맨 앞을 보고, 몇 장을 봤는지만 여기서 센다. 혹시 대기줄에서 안 빠지는
   * 문항이 있어도 같은 문항을 무한히 다시 묻지 않도록 여기서 한 번 더 걸러 준다.
   */
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [askClear, setAskClear] = useState(false);

  const load = useCallback(() => {
    void store.listWrong().then((all) => setWrong(all.filter((w) => w.cert === cert)));
    void store.getCards().then(setCards);
  }, [cert]);

  useEffect(() => {
    load();
    window.addEventListener('cv:changed', load);
    return () => window.removeEventListener('cv:changed', load);
  }, [load]);

  const now = useMemo(() => new Date(), []);

  const queue = useMemo(() => {
    if (!wrong) return [];
    return wrong
      .filter((w) => {
        if (reviewed.includes(w.id)) return false; // 이번에 이미 본 문항
        const c = cards[w.id];
        if (!c) return true; // 아직 한 번도 복습 안 함
        return new Date(c.due as string) <= now;
      })
      .sort((a, b) => {
        const ca = cards[a.id];
        const cb = cards[b.id];
        if (!ca) return -1;
        if (!cb) return 1;
        return new Date(ca.due as string).getTime() - new Date(cb.due as string).getTime();
      });
  }, [wrong, cards, now, reviewed]);

  const item = queue[0];

  const rate = async (r: Grade) => {
    if (!item) return;
    const card = revive(cards[item.id]);
    const { card: next } = engine.next(card, new Date(), r);
    await store.putCard(item.id, JSON.parse(JSON.stringify(next)));
    setCards((p) => ({ ...p, [item.id]: JSON.parse(JSON.stringify(next)) }));
    setRevealed(false);
    setReviewed((v) => [...v, item.id]);
  };

  const drop = async () => {
    if (!item) return;
    await store.removeWrong(item.id);
    setRevealed(false);
    load();
  };

  /** 이 자격증 오답만 비운다. 백업·전체 삭제는 설정 화면 몫. */
  const clearWrong = async () => {
    await store.removeWrongMany((wrong ?? []).map((w) => w.id));
    setRevealed(false);
    setReviewed([]);
    load();
  };

  if (wrong === null) return <p className="text-fd-muted-foreground text-sm">불러오는 중…</p>;

  const total = wrong.length;
  const dueCount = queue.length;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-md border px-2.5 py-1">전체 오답 {total}</span>
        <span className="rounded-md border px-2.5 py-1">남은 복습 {dueCount}</span>
        {total > 0 && (
          <button
            onClick={() => setAskClear(true)}
            className="ml-auto rounded-md border px-2.5 py-1 text-xs text-red-600 dark:text-red-400"
          >
            <Trash2 className="mr-1 inline size-3" />
            오답노트 비우기
          </button>
        )}
        <Link
          href="/settings"
          className={`text-fd-muted-foreground text-xs underline ${total > 0 ? '' : 'ml-auto'}`}
        >
          백업 · 기록 관리
        </Link>
      </div>

      <ConfirmDialog
        open={askClear}
        title="오답노트를 비울까요?"
        description={
          <>
            이 자격증의 오답 <strong>{total}문항</strong>이 오답노트에서 사라집니다. 응시 기록과 강의
            진도는 그대로 남습니다. 다시 틀리면 또 쌓입니다.
          </>
        }
        confirmLabel="비우기"
        cancelLabel="취소"
        tone="danger"
        onConfirm={() => {
          setAskClear(false);
          void clearWrong();
        }}
        onCancel={() => setAskClear(false)}
      />


      {total > 0 && (
        <div className="mb-6 rounded-lg border p-5">
          <WeakAreas cert={cert} items={wrong} />
        </div>
      )}

      {total === 0 && (
        <p className="text-fd-muted-foreground text-sm">
          아직 오답이 없습니다. 문제를 풀면 틀린 문항이 여기에 쌓입니다.
        </p>
      )}

      {total > 0 && !item && (
        <div className="rounded-lg border p-6 text-sm">
          <p className="font-medium">지금 복습할 것이 없습니다.</p>
          <p className="text-fd-muted-foreground mt-1">
            다음 복습 예정일까지 기다리거나, 새 회차를 풀어보세요.
          </p>
        </div>
      )}

      {item && (
        <div className="rounded-lg border p-5">
          <div className="text-fd-muted-foreground mb-2 text-xs">
            회차 {item.exam} · {reviewed.length + 1} / {reviewed.length + queue.length}
            {item.services.length > 0 && <> · {item.services.slice(0, 3).join(' · ')}</>}
          </div>
          <p className="font-medium">{item.q}</p>

          <ul className="mt-4 space-y-2 text-sm">
            {item.choices.map((c) => {
              const isAns = item.answers.includes(c.k);
              const wasPick = item.chosen.includes(c.k);
              const cls = !revealed
                ? 'border-fd-border'
                : isAns
                  ? 'border-green-500 bg-green-500/10'
                  : wasPick
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-fd-border opacity-60';
              return (
                <li key={c.k} className={`flex gap-2.5 rounded-md border p-2.5 ${cls}`}>
                  <span className="text-fd-muted-foreground w-4 shrink-0 uppercase">{c.k}</span>
                  <span>{c.t}</span>
                  {revealed && isAns && <Check className="ml-auto size-4 shrink-0" />}
                  {revealed && !isAns && wasPick && (<span className="text-fd-muted-foreground ml-auto flex shrink-0 items-center gap-1 text-xs"><X className="size-3.5" />내가 고른 답</span>)}
                </li>
              );
            })}
          </ul>

          {!revealed ? (
            <button
              onClick={() => setRevealed(true)}
              className="bg-fd-primary text-fd-primary-foreground mt-4 w-full rounded-md px-3 py-2 text-sm"
            >
              정답 보기
            </button>
          ) : (
            <>
              {/* 이 문항을 다시 틀렸다면 문제집이 아니라 여기로 돌아가야 한다 */}
              {(item.modules.length > 0 || item.services.length > 0) && (
                <div className="text-fd-muted-foreground mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <span>돌아가서 볼 것:</span>
                  {moduleLinks(cert, item.modules).map((m) => (
                    <Link key={m.slug} href={m.url} className="rounded border px-1.5 py-0.5 no-underline">
                      {m.name}
                    </Link>
                  ))}
                  {serviceLinks(cert, item.services).map((sv) => (
                    <Link key={sv.slug} href={sv.url} className="rounded border px-1.5 py-0.5 no-underline">
                      {sv.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {RATINGS.map((x) => (
                  <button
                    key={x.label}
                    onClick={() => void rate(x.r)}
                    className={`rounded-md border px-2 py-2 text-sm ${x.cls}`}
                  >
                    <div className="font-medium">{x.label}</div>
                    <div className="text-fd-muted-foreground text-[11px]">{x.hint}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => void drop()}
                className="text-fd-muted-foreground mt-3 text-xs underline"
              >
                이 문항 완전히 익힘 — 오답노트에서 제거
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
