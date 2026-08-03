import { AppProvider } from '@/components/app-provider';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { appName } from '@/lib/shared';
import { ServiceWorker } from '@/components/service-worker';

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
  // 홈 화면 아이콘(/apple-icon)은 iOS 가 SVG 를 안 받아서 같은 모양을 PNG 로 구운 것이다.
  icons: { icon: '/icon.svg', apple: '/apple-icon' },
  // 홈 화면에 설치했을 때 사파리 UI 없이 전체 화면으로 뜬다.
  appleWebApp: { capable: true, title: appName, statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#232F3E' },
  ],
  // 아이패드·폰에 설치했을 때 노치 영역까지 배경이 이어지게 한다.
  viewportFit: 'cover',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={inter.className} suppressHydrationWarning>
      {/* 일부 브라우저 확장이 body 에 속성을 심어(예: cz-shortcut-listen) 하이드레이션 경고를 낸다.
          우리 렌더링과 무관하므로 body 에서도 경고를 억제한다. */}
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
        <ServiceWorker />
      </body>
    </html>
  );
}
