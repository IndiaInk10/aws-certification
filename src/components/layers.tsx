/**
 * 포함 관계 시각화 — "A 안에 B가 있고, B 안에 C가 있다".
 *
 * 마크다운의 ```layers 코드 펜스를 remark-obsidian.mjs 가 이 컴포넌트로 바꾼다.
 * 트리(└──)보다 상자 안의 상자가 포함 관계를 훨씬 정직하게 보여준다.
 *
 *   리전 > AZ > 데이터 센터, VPC > 서브넷, Organizations > OU > 계정 …
 *
 * 클라이언트 상태가 없어서 서버 컴포넌트로 둔다.
 */

type Node = { label: string; note?: string; children: Node[] };

const BOX = [
  'rounded-xl border-2 border-fd-primary/25 bg-fd-primary/[0.04]',
  'rounded-lg border border-fd-border bg-fd-card',
  'rounded-md border border-dashed border-fd-border bg-fd-muted/40',
  'rounded border border-fd-border/60 bg-fd-card',
];

const PAD = ['p-3 sm:p-4', 'p-2.5 sm:p-3', 'p-2 sm:p-2.5', 'p-2'];

function Box({ node, depth }: { node: Node; depth: number }) {
  const d = Math.min(depth, BOX.length - 1);
  const kids = node.children;

  return (
    // h-full — 같은 줄에 놓인 형제들끼리 높이를 맞춘다
    <div className={`${BOX[d]} ${PAD[d]} h-full`}>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span
          className={`font-semibold ${depth === 0 ? 'text-sm' : 'text-[13px]'}`}
        >
          {node.label}
        </span>
        {node.note && (
          <span className="text-fd-muted-foreground text-xs">{node.note}</span>
        )}
      </div>

      {/* 형제가 여러 개면 나란히, 좁은 화면에서는 자동으로 접힌다 */}
      {kids.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-2">
          {kids.map((c, i) => (
            <div key={i} className="min-w-0 flex-1 basis-[min(100%,180px)]">
              <Box node={c} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Layers({ data, caption }: { data: string; caption?: string }) {
  let roots: Node[] = [];
  try {
    roots = JSON.parse(data) as Node[];
  } catch {
    return null;
  }
  if (!roots.length) return null;

  return (
    <figure className="not-prose my-6">
      <div className="space-y-2">
        {roots.map((n, i) => (
          <Box key={i} node={n} depth={0} />
        ))}
      </div>
      {caption && (
        <figcaption className="text-fd-muted-foreground mt-2 text-xs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
