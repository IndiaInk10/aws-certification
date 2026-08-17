'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, ClipboardList, Network, RotateCcw, Settings } from 'lucide-react';
import { hasQuiz } from '@/lib/certs';

const CERT_LABEL: Record<string, string> = {
  'aws-clf-c02': 'AWS Cloud Practitioner (CLF-C02)',
  'aws-saa-c03': 'AWS Solutions Architect – Associate (SAA-C03)',
};

export function CertTabs({ cert }: { cert: string }) {
  const pathname = usePathname();

  const tabs = [
    { href: `/docs/${cert}`, label: '강의', Icon: BookOpen, match: `/docs/${cert}` },
    // 문제 풀이 · 오답노트는 문항이 없으면 빈 화면이라 라우트 자체가 없다 (src/lib/certs.ts)
    ...(hasQuiz(cert)
      ? [
          { href: `/${cert}/quiz`, label: '문제 풀이', Icon: ClipboardList, match: `/${cert}/quiz` },
          { href: `/${cert}/review`, label: '오답노트', Icon: RotateCcw, match: `/${cert}/review` },
        ]
      : []),
    { href: `/${cert}/graph`, label: '노트 그래프', Icon: Network, match: `/${cert}/graph` },
    // 설정은 자격증이 아니라 브라우저 단위라 최상위에 있다
    { href: '/settings', label: '설정', Icon: Settings, match: '/settings' },
  ];

  return (
    <div className="border-b">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-1 gap-y-1 px-4 py-2">
        <span className="text-fd-muted-foreground mr-3 text-sm font-medium">
          {CERT_LABEL[cert] ?? cert}
        </span>
        {tabs.map(({ href, label, Icon, match }) => {
          const active = pathname === match || pathname.startsWith(match + '/');
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm no-underline ${
                active ? 'bg-fd-secondary font-medium' : 'text-fd-muted-foreground hover:bg-fd-secondary/50'
              }`}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
