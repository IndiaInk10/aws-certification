/** iOS 홈 화면 아이콘. iOS 는 SVG 를 안 받아서 PNG 로 구워 준다. */
import { ImageResponse } from 'next/og';
import { AppIcon } from '@/lib/app-icon';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function AppleIcon() {
  // iOS 는 투명 배경을 검게 채운다. 흰 판을 깔고 모서리는 iOS 가 알아서 둥글린다.
  return new ImageResponse(<AppIcon size={180} inset={0.06} plate="#fff" />, size);
}
