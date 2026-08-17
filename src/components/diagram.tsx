/**
 * 다이어그램 — 마크다운의 ```d2 코드 펜스를 빌드 타임에 구운 SVG.
 *
 * remark-obsidian.mjs 가 scripts/d2-render.mjs 로 그린 SVG 를 그대로 넘긴다.
 * 브라우저로 나가는 자바스크립트는 0 이다 — 그림이 이미 HTML 안에 들어 있다.
 * (예전에는 mermaid 를 클라이언트에서 그려서 수백 KB 를 내려받아야 했다.)
 *
 * 클라이언트 상태가 없어서 layers.tsx 처럼 서버 컴포넌트로 둔다.
 *
 * dangerouslySetInnerHTML 을 쓰는 이유. 이 SVG 는 우리 저장소의 마크다운에서 빌드 타임에
 * 나온 것이고, 같은 마크다운이 이미 JSX 로 컴파일돼 실행된다. 신뢰 수준이 같으므로
 * 여기만 특별히 막을 이유가 없다. 그래도 d2-render.mjs 가 <script> 가 섞이면 빌드를 세운다.
 */

export function Diagram({ svg, caption }: { svg: string; caption?: string }) {
  if (!svg) return null;

  return (
    <figure className="not-prose my-6">
      {/*
        scale:1 로 구워서 SVG 에 자연 크기와 viewBox 가 함께 박혀 있다.
        max-w-full + h-auto 면 좁은 화면에서 비율을 지키며 줄어들고, 그래도 안 줄어드는
        가로로 긴 그림은 여기서 가로 스크롤이 된다 (mermaid 때와 같은 처리).
      */}
      <div
        className="overflow-x-auto [&>svg]:mx-auto [&>svg]:h-auto [&>svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="text-fd-muted-foreground mt-2 text-xs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
