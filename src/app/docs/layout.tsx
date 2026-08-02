import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { withCertTools } from '@/lib/page-tree';
import { GlossaryDock } from '@/components/glossary';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  // 문제 풀이·오답노트·그래프는 /docs 밖에 있어 페이지 트리에 안 잡힌다.
  // 자격증 폴더 안에 직접 끼워 넣는다.
  return (
    <DocsLayout tree={withCertTools(source.getPageTree())} {...baseOptions()}>
      {children}
      {/* 읽는 내내 오른쪽 아래에 떠 있는 용어 사전 */}
      <GlossaryDock />
    </DocsLayout>
  );
}
