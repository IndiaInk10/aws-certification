'use client';

/**
 * 오프라인 대체 화면의 "다시 시도".
 *
 * 이 화면은 원래 막다른 길이었다 — 문제를 풀다 화면이 다시 뜨면(백그라운드에서 돌아오거나
 * 새로고침) 여기에 갇혀 뒤로 갈 방법이 없었다. 뒤로 가기와 다시 시도를 두고, 연결이 돌아오면
 * 알아서 원래 주소로 되돌아간다. 풀던 답은 기기에 남아 있어 그대로 이어진다.
 */

import { useEffect } from 'react';
import { RotateCw } from 'lucide-react';

export function OfflineRetry() {
  // 연결이 **돌아오는 순간**에만 한 번 더 시도한다. 현재 상태를 보고 판단하면 (이 화면은
  // 온라인이어도 캐시가 비어 뜰 수 있다) 새로고침이 무한히 도는 수가 있다.
  useEffect(() => {
    const retry = () => window.location.reload();
    window.addEventListener('online', retry);
    return () => window.removeEventListener('online', retry);
  }, []);

  return (
    <div className="mt-2 flex gap-2">
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="hover:bg-fd-secondary flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm"
      >
        <RotateCw className="size-3.5" />
        다시 시도
      </button>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="hover:bg-fd-secondary rounded-md border px-3 py-1.5 text-sm"
      >
        이전 화면으로
      </button>
    </div>
  );
}
