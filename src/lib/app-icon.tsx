/**
 * public/icon.svg 와 **같은 모양**을 ImageResponse(satori) 로 그린다.
 *
 * 왜 두 벌인가: iOS 홈 화면 아이콘과 안드로이드 마스커블 아이콘은 PNG 만 받는다.
 * 저장소에 PNG 를 커밋해 두면 icon.svg 를 고칠 때 같이 안 고쳐져 어긋나므로,
 * 도형을 여기에 한 번 더 적어 두고 빌드 때 PNG 로 굽는다.
 * icon.svg 의 색·도형을 바꾸면 아래 상수 3개도 같이 맞춰라.
 */
import type { ReactElement } from 'react';

const NAVY_TOP = '#3C4B59';
const NAVY_BOTTOM = '#232F3E';
const HEX = '32,2 59,17 59,47 32,62 5,47 5,17';

/**
 * @param size    한 변 픽셀
 * @param inset   배지를 캔버스 안쪽으로 얼마나 들일지 (0~1). 마스커블은 잘려도
 *                되도록 0.2 정도를 준다.
 * @param plate   배경 판 색. 투명하게 두려면 undefined.
 */
export function AppIcon({
  size,
  inset = 0,
  plate,
}: {
  size: number;
  inset?: number;
  plate?: string;
}): ReactElement {
  const badge = Math.round(size * (1 - inset * 2));

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: plate ?? 'transparent',
      }}
    >
      <svg width={badge} height={badge} viewBox="0 0 64 64">
        <defs>
          <linearGradient id="badge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={NAVY_TOP} />
            <stop offset="1" stopColor={NAVY_BOTTOM} />
          </linearGradient>
        </defs>
        <polygon points={HEX} fill="url(#badge)" />
        <path
          d="M22.5 32.4l6 6 11-13"
          fill="none"
          stroke="#fff"
          strokeWidth="5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
