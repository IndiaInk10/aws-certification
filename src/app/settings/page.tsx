import { SettingsClient } from '@/components/settings-client';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '설정' };

/**
 * 설정은 자격증이 아니라 **이 브라우저** 단위다 (문제 언어 · 학습 기록).
 * 그래서 /[cert] 아래가 아니라 최상위에 둔다.
 */
export default function SettingsPage() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="mx-auto w-full max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-bold">설정</h1>
        <p className="text-fd-muted-foreground mt-1 text-sm">
          문제 언어와 이 브라우저에 저장된 학습 기록을 관리합니다.
        </p>
        <div className="mt-6">
          <SettingsClient />
        </div>
      </main>
    </HomeLayout>
  );
}
