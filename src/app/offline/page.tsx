/**
 * 오프라인 대체 화면 — 네트워크도 캐시도 없는 주소로 갔을 때 서비스 워커가 대신 보여 준다.
 * (public/sw.js 의 OFFLINE_URL)
 */
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '오프라인' };

export default function OfflinePage() {
  return (
    <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-xl font-semibold">이 페이지는 아직 저장되지 않았습니다</h1>
      <p className="text-fd-muted-foreground text-sm">
        지금 인터넷에 연결돼 있지 않습니다. 한 번이라도 열어 본 페이지는 오프라인에서도 그대로
        열립니다. 미리 통째로 받아 두려면 온라인일 때 <strong>설정 → 오프라인 사용</strong> 에서
        전체 저장을 눌러 두세요.
      </p>
      <div className="mt-2 flex gap-2">
        <Link href="/" className="hover:bg-fd-secondary rounded-md border px-3 py-1.5 text-sm">
          홈으로
        </Link>
        <Link
          href="/settings"
          className="hover:bg-fd-secondary rounded-md border px-3 py-1.5 text-sm"
        >
          설정
        </Link>
      </div>
    </main>
  );
}
