import { AppProvider } from '@/components/app-provider';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s · ${appName}`,
  },
  description: 'AWS 자격증 강의 정리 · 서비스 노트 · 모의고사',
  applicationName: appName,
  // 아이콘 원본은 public/icon.svg 하나뿐이다. 그 파일만 고치면 탭 아이콘과 상단 로고가 함께 바뀐다.
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={inter.className} suppressHydrationWarning>
      {/* 일부 브라우저 확장이 body 에 속성을 심어(예: cz-shortcut-listen) 하이드레이션 경고를 낸다.
          우리 렌더링과 무관하므로 body 에서도 경고를 억제한다. */}
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
