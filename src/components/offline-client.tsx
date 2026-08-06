'use client';

/**
 * 오프라인 사용 — 설정 화면의 한 구획.
 *
 * 열어 본 페이지는 서비스 워커가 알아서 담아 두지만(public/sw.js), 비행기·지하철처럼
 * 아예 못 여는 상황을 대비하려면 **미리** 받아 둬야 한다. 그 버튼이 여기 있다.
 * 목록은 /offline-manifest.json 이 준다.
 */

import { useCallback, useEffect, useState } from 'react';
import { CloudDownload, Trash2 } from 'lucide-react';

type Phase = { state: 'idle' | 'saving' | 'done'; done: number; failed: number; total: number };

const IDLE: Phase = { state: 'idle', done: 0, failed: 0, total: 0 };

export function OfflineClient() {
  const [ready, setReady] = useState<boolean | null>(null); // 서비스 워커가 이 탭을 맡고 있는가
  const [saved, setSaved] = useState<number | null>(null); // 캐시에 든 페이지 수
  const [phase, setPhase] = useState<Phase>(IDLE);

  const sw = useCallback(() => navigator.serviceWorker?.controller ?? null, []);

  const refresh = useCallback(() => {
    const c = sw();
    setReady(Boolean(c));
    c?.postMessage({ type: 'STATUS' });
  }, [sw]);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      // 렌더 도중이 아니라 다음 틱에 알린다 (effect 안에서의 즉시 setState 는 연쇄 렌더를 만든다).
      void Promise.resolve().then(() => setReady(false));
      return;
    }

    const onMessage = (e: MessageEvent) => {
      const d = e.data as { type?: string; pages?: number; done?: number; failed?: number; total?: number };
      if (d?.type === 'STATUS') setSaved(d.pages ?? 0);
      if (d?.type === 'PRECACHE_PROGRESS')
        setPhase({ state: 'saving', done: d.done ?? 0, failed: d.failed ?? 0, total: d.total ?? 0 });
      if (d?.type === 'PRECACHE_DONE') {
        setPhase({ state: 'done', done: d.done ?? 0, failed: d.failed ?? 0, total: d.total ?? 0 });
        refresh();
      }
      if (d?.type === 'CLEARED') {
        setPhase(IDLE);
        refresh();
      }
    };

    navigator.serviceWorker.addEventListener('message', onMessage);
    // 방금 등록된 직후에는 controller 가 아직 비어 있다. ready 를 기다렸다가 다시 본다.
    void Promise.resolve().then(refresh);
    void navigator.serviceWorker.ready.then(refresh);
    return () => navigator.serviceWorker.removeEventListener('message', onMessage);
  }, [refresh]);

  const saveAll = async () => {
    const c = sw();
    if (!c) return;
    setPhase({ state: 'saving', done: 0, failed: 0, total: 0 });
    const { urls } = (await fetch('/offline-manifest.json').then((r) => r.json())) as {
      urls: string[];
    };
    c.postMessage({ type: 'PRECACHE', urls });
  };

  const clear = () => sw()?.postMessage({ type: 'CLEAR' });

  return (
    <section>
      <h2 className="text-base font-semibold">오프라인 사용</h2>
      <p className="text-fd-muted-foreground mt-1 text-sm">
        홈 화면에 설치해 두면 인터넷 없이도 열립니다. 한 번 본 페이지는 자동으로 저장되고,
        아래 버튼을 누르면 <strong>모든 강의·문제 화면</strong>을 미리 받아 둡니다. 학습 기록은
        원래도 이 기기에 저장되므로 오프라인에서 푼 문제도 그대로 남습니다.
      </p>
      <p className="text-fd-muted-foreground mt-1 text-sm">
        내용이 새로 배포되면 저장분은 자동으로 다시 받습니다. 지난 배포의 화면 조각이 섞이면
        문제가 안 뜨기 때문에, 한 번 받아 두면 그 뒤로는 손댈 것이 없습니다.
      </p>

      {ready === false && (
        <p className="text-fd-muted-foreground mt-3 rounded-md border border-dashed px-3 py-2 text-xs">
          이 브라우저에서는 오프라인 저장이 아직 켜지지 않았습니다. 개발 서버에서는 꺼 두며,
          배포된 주소를 <strong>https</strong> 로 처음 열면 자동으로 켜집니다. iOS 는 사파리에서
          공유 → <strong>홈 화면에 추가</strong> 로 설치하세요.
        </p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => void saveAll()}
          disabled={!ready || phase.state === 'saving'}
          className="hover:bg-fd-secondary flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
        >
          <CloudDownload className="size-4" />
          전체 저장
        </button>
        <button
          type="button"
          onClick={clear}
          disabled={!ready}
          className="hover:bg-fd-secondary text-fd-muted-foreground flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm disabled:opacity-40"
        >
          <Trash2 className="size-4" />
          저장분 비우기
        </button>
        {saved !== null && ready && (
          <span className="text-fd-muted-foreground text-xs tabular-nums">
            저장된 페이지 {saved}건
          </span>
        )}
      </div>

      {phase.state === 'saving' && (
        <p className="text-fd-muted-foreground mt-2 text-xs tabular-nums">
          저장 중… {phase.done}
          {phase.total ? ` / ${phase.total}` : ''}
        </p>
      )}
      {phase.state === 'done' && (
        <p className="text-fd-muted-foreground mt-2 text-xs">
          {phase.done}개 페이지를 저장했습니다
          {phase.failed > 0 && ` (${phase.failed}개 실패 — 연결을 확인하고 다시 눌러 보세요)`}.
        </p>
      )}

      <p className="text-fd-muted-foreground mt-2 text-xs">
        검색은 서버를 거치므로 오프라인에서는 동작하지 않습니다. 사이드바 목차로 이동하세요.
      </p>
    </section>
  );
}
