import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';
import { Settings } from 'lucide-react';

/** 마크 원본은 public/icon.svg 다. 여기서 사본을 만들지 말고 그 파일을 고칠 것. */
function Mark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/icon.svg" alt="" width={20} height={20} className="size-5 rounded" />;
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <Mark />
          {appName}
        </span>
      ),
      url: '/',
    },
    // 문제 풀이 · 오답노트 · 그래프는 자격증 단위이므로 전역 내비게이션에 두지 않는다.
    // 자격증 안으로 들어가면 CertTabs 가 표시된다.
    links: [
      { text: '자격증', url: '/docs', active: 'nested-url' },
      { text: '참고 자료', url: '/docs/references', active: 'url' },
      // secondary — 테마 · 언어 버튼과 같은 줄(사이드바 아래/헤더 오른쪽)에 아이콘으로 붙는다
      {
        type: 'icon',
        text: '설정',
        label: '설정',
        url: '/settings',
        icon: <Settings />,
        secondary: true,
      },
    ],
  };
}
