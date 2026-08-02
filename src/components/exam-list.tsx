'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { store, type ExamAttempt } from '@/lib/storage';

type Entry = {
  cert: string;
  total: number;
  exams: { exam: number; count: number; multi: number; label?: string }[];
};

export function ExamList({ cert, entry }: { cert: string; entry: Entry }) {
  const [attempts, setAttempts] = useState<ExamAttempt[] | null>(null);

  useEffect(() => {
    const load = () => void store.listAttempts().then(setAttempts);
    load();
    window.addEventListener('cv:changed', load);
    return () => window.removeEventListener('cv:changed', load);
  }, []);

  const mine = (attempts ?? []).filter((a) => a.cert === cert);

  const best = (exam: number) => {
    const rows = mine.filter((a) => a.exam === exam);
    if (!rows.length) return null;
    const b = rows.reduce((m, r) => (r.correct / r.total > m.correct / m.total ? r : m));
    return { pct: Math.round((b.correct / b.total) * 100), tries: rows.length };
  };

  const avg = mine.length
    ? Math.round((mine.reduce((s, a) => s + a.correct / a.total, 0) / mine.length) * 100)
    : null;

  return (
    <div>
      <div className="text-fd-muted-foreground mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <span>
          {entry.exams.length}회 · {entry.total}문항
        </span>
        {avg !== null && (
          <span>
            평균 {avg}% · {mine.length}회 응시
          </span>
        )}
      </div>

      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {entry.exams.map((e) => {
          const b = best(e.exam);
          const color =
            b === null
              ? ''
              : b.pct >= 85
                ? 'border-green-500/60'
                : b.pct >= 70
                  ? 'border-amber-500/60'
                  : 'border-red-500/60';
          return (
            <li key={e.exam}>
              <Link
                href={`/${cert}/quiz/${e.exam}`}
                className={`hover:bg-fd-secondary/50 block rounded-lg border p-3 no-underline ${color}`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-medium">
                    {e.label ?? `${String(e.exam).padStart(2, '0')}회`}
                  </span>
                  {b && <span className="text-sm font-semibold">{b.pct}%</span>}
                </div>
                <div className="text-fd-muted-foreground mt-0.5 text-xs">
                  {e.count}문항{e.multi ? ` · 복수정답 ${e.multi}` : ''}
                </div>
                {b && (
                  <div className="text-fd-muted-foreground mt-0.5 text-xs">{b.tries}회 응시</div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {attempts !== null && mine.length === 0 && (
        <p className="text-fd-muted-foreground mt-4 text-sm">
          아직 응시 기록이 없습니다. 1회차부터 <strong>학습 모드</strong>로 편하게 풀어보세요.
        </p>
      )}
    </div>
  );
}
