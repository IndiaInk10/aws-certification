import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { CertTabs } from '@/components/cert-tabs';
import type { ReactNode } from 'react';
import { allCerts } from '@/lib/certs';

// 이 레이아웃 밑에는 문제은행이 없어도 되는 화면(그래프)이 있다. 넓은 쪽 목록을 쓴다.
export function generateStaticParams() {
  return allCerts.map((cert) => ({ cert }));
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
