/**
 * 끼워 넣기용 문서 — 시험 화면 옆 오픈북 창(iframe)이 부르는 주소.
 *
 * `/docs/...` 를 그대로 iframe 에 넣어 봤더니 창 하나 열 때마다 사이드바·검색·목차·용어 사전까지
 * 통째로 부팅했다 (그래서 느렸다). 여기서는 **본문만** 그린다. 주소는 /docs 와 슬러그가 같다:
 *   /docs/aws-clf-c02/20-course/02-cloud-computing → /embed/aws-clf-c02/20-course/02-cloud-computing
 *
 * 본문 안의 링크는 새 탭으로 뺀다. 좁은 창 안에서 문서를 타고 들어가면 돌아올 길이 없고,
 * 풀던 문제 옆의 자료 창이라는 성격에도 맞지 않는다.
 */
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { ComponentProps } from 'react';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/embed/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const RelativeLink = createRelativeLink(source, page);

  return (
    <article className="prose dark:prose-invert max-w-none px-4 py-4 text-sm">
      <h1 className="mt-0 text-xl">{page.data.title}</h1>
      {page.data.description && (
        <p className="text-fd-muted-foreground text-sm">{page.data.description}</p>
      )}
      <MDX
        components={getMDXComponents({
          a: (linkProps: ComponentProps<typeof RelativeLink>) => (
            <RelativeLink {...linkProps} target="_blank" rel="noreferrer" />
          ),
        })}
      />
    </article>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export const metadata: Metadata = { robots: { index: false, follow: false } };
