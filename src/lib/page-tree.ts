import type * as PageTree from 'fumadocs-core/page-tree';

/**
 * 문제 풀이 화면·오답노트·그래프를 사이드바 트리에 끼워 넣는다.
 *
 * 이 화면들은 /docs 가 아니라 /[cert] 아래에 있어서 Fumadocs 가 만드는 페이지 트리에
 * 잡히지 않는다. 사이드바 맨 아래에 따로 붙이면 자격증에 귀속된 기능이라는 게 드러나지
 * 않으므로, 자격증 폴더 안에 직접 넣는다.
 *
 * 실제로 푸는 화면은 이미 있는 **`30-exam`("문제 풀이") 폴더 안**에 넣는다.
 * 그 폴더에는 `시험 준비 전략` · `오답노트 사용법` 같은 설명 문서가 들어 있으므로,
 * 설명과 실행이 한자리에 모인다. 별도 폴더를 만들면 같은 이름이 두 번 나온다.
 *
 * 자격증 폴더와 30-exam 폴더는 모두 **자손 페이지의 URL**로 판별한다.
 * meta.json 이 `index` 를 pages 에 직접 나열하면 folder.index 가 비어 있어서,
 * index 만 보고 판별하면 놓친다.
 */

/** 이 노드 아래 처음 만나는 문서 URL. 판별에 쓴다. */
function firstDocUrl(node: PageTree.Node): string | undefined {
  if (node.type === 'page') return node.url;
  if (node.type === 'folder') {
    if (node.index?.url) return node.index.url;
    for (const child of node.children) {
      const found = firstDocUrl(child);
      if (found) return found;
    }
  }
  return undefined;
}

export function withCertTools(tree: PageTree.Root): PageTree.Root {
  return {
    ...tree,
    children: tree.children.map((node) => {
      if (node.type !== 'folder') return node;

      const cert = firstDocUrl(node)?.match(/^\/docs\/([^/]+)(?:\/|$)/)?.[1];
      if (!cert) return node;

      // 실제로 푸는 화면들 — 순서는 학습 순서(공식 → 전체 → 복습)를 따른다
      const runners: PageTree.Item[] = [
        { type: 'page', name: '공식 연습 문제 풀기', url: `/${cert}/quiz/0` },
        { type: 'page', name: '모의고사 풀기', url: `/${cert}/quiz` },
        { type: 'page', name: '오답노트 열기', url: `/${cert}/review` },
      ];

      let placed = false;
      const children = node.children.map((child) => {
        if (placed || child.type !== 'folder') return child;
        // 30-exam("문제 풀이") 폴더를 찾아 그 안에 넣는다
        if (!firstDocUrl(child)?.includes(`/docs/${cert}/30-exam/`)) return child;
        placed = true;
        return { ...child, children: [...child.children, ...runners] };
      });

      // 30-exam 폴더가 없는 자격증이면 자격증 바로 아래에 둔다
      if (!placed) children.push(...runners);

      children.push({ type: 'page', name: '노트 그래프', url: `/${cert}/graph` });
      return { ...node, children };
    }),
  };
}
