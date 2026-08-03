/**
 * PWA 매니페스트 — 홈 화면에 설치했을 때의 이름 · 아이콘 · 화면 모드.
 *
 * 아이콘 원본은 여전히 public/icon.svg 하나다.
 * 안드로이드/데스크톱은 SVG 를 그대로 쓰고, PNG 가 필요한 곳(iOS·마스커블)은
 * app/apple-icon.tsx · app/icon-512.png 이 그 SVG 모양을 그대로 그려 낸다.
 */
import type { MetadataRoute } from 'next';
import { appName } from '@/lib/shared';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${appName} 학습 창고`,
    short_name: appName,
    description: 'AWS 자격증 강의 정리 · 서비스 노트 · 모의고사',
    lang: 'ko',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'any',
    background_color: '#ffffff',
    theme_color: '#232F3E',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
