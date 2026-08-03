/**
 * 안드로이드 마스커블 아이콘 — 런처가 원형·둥근사각형 등으로 **잘라낸다**.
 * 바깥 20% 는 잘려도 되는 여백이므로 배지를 그만큼 안쪽으로 들인다.
 */
import { ImageResponse } from 'next/og';
import { AppIcon } from '@/lib/app-icon';

export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(<AppIcon size={512} inset={0.2} plate="#fff" />, {
    width: 512,
    height: 512,
  });
}
