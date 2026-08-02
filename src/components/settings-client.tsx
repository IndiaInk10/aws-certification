'use client';

/**
 * 설정 — 이 브라우저에 쌓인 학습 기록을 통째로 다루는 곳.
 *
 * 오답노트 화면에는 오답노트에 대한 것만 둔다 (그 화면의 관심사).
 * 백업 · 복원 · 선택 삭제처럼 **전체**에 걸치는 동작은 여기로 모은다.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  store,
  DATA_SCOPES,
  SCOPE_LABEL,
  type DataScope,
  type ExamAttempt,
  type SrsCard,
  type WrongItem,
} from '@/lib/storage';
import { LOCALE_LABEL, QUIZ_LOCALES, useQuizLocale } from '@/lib/quiz-locale';
import { Modal } from '@/components/ui/modal';
import { Download, Trash2, Upload } from 'lucide-react';

const SCOPE_HINT: Record<DataScope, string> = {
  attempts: '회차별 점수 · 응시 시간',
  wrong: '틀린 문항 목록',
  cards: 'FSRS 복습 간격 (다음 복습일)',
  done: '강의 모듈 진도 체크',
};

const empty: Record<DataScope, number> = { attempts: 0, wrong: 0, cards: 0, done: 0 };

export function SettingsClient() {
  const [counts, setCounts] = useState<Record<DataScope, number> | null>(null);
  const [picked, setPicked] = useState<DataScope[]>([]);
  const [asking, setAsking] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [locale, setLocale] = useQuizLocale();
  const fileRef = useRef<HTMLInputElement>(null);

  const load = useCallback(() => {
    void Promise.all([
      store.listAttempts(),
      store.listWrong(),
      store.getCards(),
      store.getDone(),
    ]).then(([a, w, c, d]: [ExamAttempt[], WrongItem[], Record<string, SrsCard>, string[]]) =>
      setCounts({
        attempts: a.length,
        wrong: w.length,
        cards: Object.keys(c).length,
        done: d.length,
      }),
    );
  }, []);

  useEffect(() => {
    load();
    window.addEventListener('cv:changed', load);
    return () => window.removeEventListener('cv:changed', load);
  }, [load]);

  const n = counts ?? empty;

  const doExport = async () => {
    const json = await store.exportAll();
    const blob = new Blob([json], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `학습기록-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    setNote('백업 파일을 내려받았습니다.');
  };

  const doImport = async (f: File) => {
    try {
      await store.importAll(await f.text());
      load();
      setNote(`${f.name} 을(를) 불러왔습니다.`);
    } catch {
      setNote('불러오지 못했습니다. 이 앱에서 내보낸 JSON 파일인지 확인하세요.');
    }
  };

  return (
    <div className="space-y-8">
      {/* 문제 언어 */}
      <section>
        <h2 className="text-base font-semibold">문제 언어</h2>
        <p className="text-fd-muted-foreground mt-1 text-sm">
          문제 풀이 화면에서 보이는 문항·보기의 언어입니다. 문서(강의)는 한국어 하나만 있습니다.
          고른 언어의 번역이 없는 문항은 원문 그대로 나옵니다.
        </p>
        <div className="mt-3 flex gap-2">
          {QUIZ_LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              aria-pressed={l === locale}
              className={`rounded-md border px-3 py-1.5 text-sm ${
                l === locale ? 'bg-fd-primary text-fd-primary-foreground border-transparent' : 'hover:bg-fd-secondary'
              }`}
            >
              {LOCALE_LABEL[l]}
            </button>
          ))}
        </div>
      </section>

      {/* 백업 */}
      <section>
        <h2 className="text-base font-semibold">백업</h2>
        <p className="text-fd-muted-foreground mt-1 text-sm">
          기록은 계정이 아니라 <strong>이 브라우저</strong>에 저장됩니다. 기기를 바꾸거나 브라우저
          데이터를 지우기 전에 내보내 두세요.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => void doExport()}
            className="hover:bg-fd-secondary flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm"
          >
            <Download className="size-4" />
            내보내기
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="hover:bg-fd-secondary flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm"
          >
            <Upload className="size-4" />
            가져오기
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void doImport(f);
              e.target.value = '';
            }}
          />
        </div>
        {note && <p className="text-fd-muted-foreground mt-2 text-xs">{note}</p>}
      </section>

      {/* 저장된 기록 */}
      <section>
        <h2 className="text-base font-semibold">저장된 기록</h2>
        <p className="text-fd-muted-foreground mt-1 text-sm">
          지울 항목을 골라 삭제합니다. 되돌릴 수 없으니 필요하면 먼저 내보내세요.
        </p>

        <ul className="mt-3 divide-y rounded-lg border">
          {DATA_SCOPES.map((s) => {
            const on = picked.includes(s);
            const none = n[s] === 0;
            return (
              <li key={s}>
                <label
                  className={`hover:bg-fd-secondary/40 flex cursor-pointer items-center gap-3 px-4 py-3 ${
                    none ? 'opacity-50' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={on}
                    disabled={none}
                    onChange={() => setPicked((p) => (on ? p.filter((x) => x !== s) : [...p, s]))}
                    className="size-4 shrink-0"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{SCOPE_LABEL[s]}</span>
                    <span className="text-fd-muted-foreground block text-xs">{SCOPE_HINT[s]}</span>
                  </span>
                  <span className="text-fd-muted-foreground ml-auto shrink-0 text-sm tabular-nums">
                    {counts === null ? '…' : `${n[s]}건`}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setPicked(
                picked.length === DATA_SCOPES.length ? [] : DATA_SCOPES.filter((s) => n[s] > 0),
              )
            }
            className="text-fd-muted-foreground text-xs underline"
          >
            {picked.length === DATA_SCOPES.length ? '전체 해제' : '전체 선택'}
          </button>
          <button
            type="button"
            disabled={!picked.length}
            onClick={() => setAsking(true)}
            className="ml-auto flex items-center gap-1.5 rounded-md border border-red-500/50 px-3 py-1.5 text-sm text-red-600 disabled:opacity-40 dark:text-red-400"
          >
            <Trash2 className="size-4" />
            선택 항목 삭제{picked.length ? ` (${picked.length})` : ''}
          </button>
        </div>
      </section>

      <Modal open={asking} onClose={() => setAsking(false)} labelledBy="clear-title">
        <div className="p-5">
          <h2 id="clear-title" className="text-base font-semibold">
            선택한 기록을 지울까요?
          </h2>
          <ul className="text-fd-muted-foreground mt-2 space-y-1 text-sm">
            {picked.map((s) => (
              <li key={s}>
                · {SCOPE_LABEL[s]} <span className="tabular-nums">{n[s]}건</span>
              </li>
            ))}
          </ul>
          <p className="text-fd-muted-foreground mt-3 text-sm">되돌릴 수 없습니다.</p>
        </div>
        <div className="flex justify-end gap-2 border-t px-5 py-3">
          <button
            type="button"
            autoFocus
            onClick={() => setAsking(false)}
            className="hover:bg-fd-secondary rounded-md border px-3 py-1.5 text-sm"
          >
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              const scopes = picked;
              setAsking(false);
              void store.clear(scopes).then(() => {
                setPicked([]);
                load();
                setNote(`${scopes.map((s) => SCOPE_LABEL[s]).join(' · ')} 을(를) 지웠습니다.`);
              });
            }}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600/90"
          >
            삭제
          </button>
        </div>
      </Modal>
    </div>
  );
}
