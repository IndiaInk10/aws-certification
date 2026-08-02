import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { CertTabs } from '@/components/cert-tabs';
import type { ReactNode } from 'react';
import quizIndex from '@/generated/quiz/index.json';

export function generateStaticParams() {
  return quizIndex.map((c) => ({ cert: c.cert }));
}

export default async function CertLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cert: string }>;
}) {
  const { cert } = await params;
  return (
    <HomeLayout {...baseOptions()}>
      <CertTabs cert={cert} />
      {children}
    </HomeLayout>
  );
}
