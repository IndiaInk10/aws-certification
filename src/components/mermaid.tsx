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

  // 그릴 것이 없으면 mermaid 를 아예 부르지 않는다. 빈 글을 넘기면 mermaid 는 그것을
  // "무슨 다이어그램인지 모르겠다"는 오류로 처리한다 (아래 suppressErrorRendering 참고).
  const empty = !chart?.trim();

  useEffect(() => {
    if (empty) return;
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
          /*
            그리기에 실패하면 mermaid 는 **자기가 만든 오류 그림을 document.body 에 직접
            붙인다.** "Syntax error in text" 라고 적힌 그 빨간 그림이다. 우리 쪽 catch 가
            아래 <pre> 로 갈아 끼워도 그 그림은 우리 div 바깥에 있어서 안 지워진다 —
            그래서 멀쩡한 페이지 아무 데나 오류 그림이 남아 있었다.

            이 옵션을 켜면 mermaid 는 그림을 붙이지 않고 오류만 던진다. 처리는 우리가 한다.
          */
          suppressErrorRendering: true,
        });
        const { svg } = await mermaid.render('m' + id, chart);
        if (alive) setSvg(svg);
      })
      .catch((e) => alive && setErr(String(e)));

    return () => {
      alive = false;
    };
  }, [chart, id, empty]);

  // 빈 <pre> 는 페이지에 이유 없는 구멍만 만든다. 아무것도 내지 않는다.
  if (empty) return null;

  // 못 그렸으면 원문이라도 보여 준다.
  if (err) {
    return <pre className="text-fd-muted-foreground overflow-x-auto text-xs">{chart}</pre>;
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
