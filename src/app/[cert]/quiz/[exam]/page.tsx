import { QuizRunner, type Question } from '@/components/quiz-runner';
import quizIndex from '@/generated/quiz/index.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import fs from 'node:fs';
import path from 'node:path';

type Params = { cert: string; exam: string };

export function generateStaticParams(): Params[] {
  return quizIndex.flatMap((c) => c.exams.map((e) => ({ cert: c.cert, exam: String(e.exam) })));
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { cert, exam } = await params;
  const file = path.resolve(
    process.cwd(),
    'src/generated/quiz',
    `${cert}-${String(Number(exam)).padStart(2, '0')}.json`,
  );
  if (!fs.existsSync(file)) notFound();

  const data = JSON.parse(fs.readFileSync(file, 'utf8')) as {
    cert: string;
    exam: number;
    questions: Question[];
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
      <Link
        href={`/${cert}/quiz`}
        className="text-fd-muted-foreground flex w-fit items-center gap-1 text-sm no-underline hover:underline"
      >
        <ChevronLeft className="size-4" />
        회차 목록
      </Link>
      <div className="mt-4">
        <QuizRunner cert={data.cert} exam={data.exam} questions={data.questions} />
      </div>
    </main>
  );
}
