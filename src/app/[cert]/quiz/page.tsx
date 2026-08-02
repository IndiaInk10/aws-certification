import quizIndex from '@/generated/quiz/index.json';
import { ExamList } from '@/components/exam-list';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '문제 풀이' };

export function generateStaticParams() {
  return quizIndex.map((c) => ({ cert: c.cert }));
}

export default async function QuizIndexPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert } = await params;
  const entry = quizIndex.find((c) => c.cert === cert);
  if (!entry) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold">문제 풀이</h1>
      <p className="text-fd-muted-foreground mt-1 text-sm">
        실제 시험과 같은 화면으로 응시합니다. 점수는 이 브라우저에 저장되고, 틀린 문항은 오답노트에 자동으로 쌓입니다.
      </p>
      <div className="mt-6">
        <ExamList cert={cert} entry={entry} />
      </div>
    </main>
  );
}
