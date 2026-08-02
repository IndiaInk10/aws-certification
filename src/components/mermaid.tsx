'use client';

import { useEffect, useId, useRef, useState } from 'react';

/**
 * mermaid 는 무겁기 때문에 다이어그램이 실제로 있는 페이지에서만 동적으로 불러온다.
 * 애니메이션 없음.
 */
export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '');
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    let alive = true;
    const dark = document.documentElement.classList.contains('dark');

    import('mermaid')
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: dark ? 'dark' : 'default',
          fontFamily: 'inherit',
          flowchart: { curve: 'basis' },
        });
        const { svg } = await mermaid.render('m' + id, chart);
        if (alive) setSvg(svg);
      })
      .catch((e) => alive && setErr(String(e)));

    return () => {
      alive = false;
    };
  }, [chart, id]);

  if (err) {
    return (
      <pre className="text-fd-muted-foreground overflow-x-auto text-xs">{chart}</pre>
    );
  }

  return (
    <div
      ref={ref}
      className="my-4 overflow-x-auto [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
      // mermaid 가 생성한 SVG. securityLevel:'strict' 로 스크립트는 제거된다.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
