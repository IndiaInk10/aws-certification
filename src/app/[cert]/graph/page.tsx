import { GraphView } from '@/components/graph-view';
import graph from '@/generated/graph.json';
import quizIndex from '@/generated/quiz/index.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '노트 그래프',
  description: '노트 사이의 링크 관계',
};

export function generateStaticParams() {
  return quizIndex.map((c) => ({ cert: c.cert }));
}

export default async function GraphPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert } = await params;

  const nodes = graph.nodes.filter((n) => n.cert === cert);
  const ids = new Set(nodes.map((n) => n.id));
  const links = graph.links.filter((l) => ids.has(l.s) && ids.has(l.t));

  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);
  const bounds = nodes.length
    ? { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) }
    : graph.bounds;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">노트 그래프</h1>
        <p className="text-fd-muted-foreground mt-1 text-sm">
          강의 · 서비스 노트가 어떻게 이어져 있는지 보여줍니다. 노드를 클릭하면 해당 노트로 이동합니다.
        </p>
      </div>
      <GraphView graph={{ bounds, nodes, links }} />
    </main>
  );
}
