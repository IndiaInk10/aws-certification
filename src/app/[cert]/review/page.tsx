import { ReviewClient } from '@/components/review-client';
import quizIndex from '@/generated/quiz/index.json';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '오답노트' };

export function generateStaticParams() {
  return quizIndex.map((c) => ({ cert: c.cert }));
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert } = await params;
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold">오답노트</h1>
      <p className="text-fd-muted-foreground mt-1 text-sm">
        틀린 문항이 자동으로 쌓입니다. FSRS 알고리즘이 잊어버릴 때쯤 다시 보여줍니다.
      </p>
      <div className="mt-6">
        <ReviewClient cert={cert} />
      </div>
    </main>
  );
}
