/** 매니페스트용 512px PNG (설치 배너 · 스플래시). */
import { ImageResponse } from 'next/og';
import { AppIcon } from '@/lib/app-icon';

export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(<AppIcon size={512} plate="#fff" />, { width: 512, height: 512 });
}
