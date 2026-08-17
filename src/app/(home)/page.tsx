import Link from 'next/link';
import { BookOpen, ClipboardList, Network, RotateCcw } from 'lucide-react';
import quizIndex from '@/generated/quiz/index.json';
import modulesData from '@/generated/modules.json';

const CERTS = [
  {
    slug: 'aws-clf-c02',
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    status: '진행 중',
    start: '/docs/aws-clf-c02/00-map/00-learning-path',
    startDesc: '13개 모듈을 순서대로',
    unit: '모듈',
  },
  {
    slug: 'aws-saa-c03',
    name: 'AWS Certified Solutions Architect – Associate',
    code: 'SAA-C03',
    status: '뼈대 세우는 중',
    // SAA 는 문제 읽는 법부터 읽히는 것이 설계다 (30-exam/00-exam-strategy 참고)
    start: '/docs/aws-saa-c03/30-exam/00-exam-strategy',
    startDesc: '문제 읽는 기술부터',
    unit: '과제 명세',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">AWS Certification</h1>
      <p className="text-fd-muted-foreground mt-2">
        강의를 한 모듈씩 쌓아 올리고, 서비스 노트로 깊이를 채우고, 문제로 확인합니다.
      </p>

      <div className="mt-10 space-y-4">
        {CERTS.map((c) => {
          const quiz = quizIndex.find((q) => q.cert === c.slug);
          const mods =
            (modulesData as { cert: string; modules: unknown[] }[]).find((m) => m.cert === c.slug)
              ?.modules.length ?? 0;

          return (
            <section key={c.slug} className="rounded-lg border p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-lg font-semibold">{c.name}</h2>
                <span className="text-fd-muted-foreground text-sm">{c.code}</span>
                <span className="bg-fd-primary/10 text-fd-primary rounded px-1.5 py-0.5 text-[11px]">
                  {c.status}
                </span>
              </div>

              <dl className="text-fd-muted-foreground mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <div className="flex gap-1.5">
                  <dt>{c.unit}</dt>
                  <dd className="text-fd-foreground font-medium">{mods}</dd>
                </div>
                {quiz && (
                  <div className="flex gap-1.5">
                    <dt>모의고사</dt>
                    <dd className="text-fd-foreground font-medium">
                      {quiz.exams.length}회 / {quiz.total}문항
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  {
                    href: c.start,
                    label: '시작하기',
                    desc: c.startDesc,
                    Icon: BookOpen,
                    primary: true,
                  },
                  // 문제 풀이 · 오답노트는 문항이 없으면 빈 화면이라 라우트가 없다.
                  // 노트 그래프는 문항과 무관하므로 자격증마다 항상 있다 (src/lib/certs.ts)
                  ...(quiz
                    ? [
                        {
                          href: `/${c.slug}/quiz`,
                          label: '문제 풀이',
                          desc: '실제 시험 화면으로 응시',
                          Icon: ClipboardList,
                        },
                        {
                          href: `/${c.slug}/review`,
                          label: '오답노트',
                          desc: '간격 반복 복습',
                          Icon: RotateCcw,
                        },
                      ]
                    : []),
                  {
                    href: `/${c.slug}/graph`,
                    label: '노트 그래프',
                    desc: '노트 연결 관계',
                    Icon: Network,
                  },
                ].map(({ href, label, desc, Icon, primary }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`hover:bg-fd-secondary/50 flex items-start gap-2.5 rounded-md border p-3 no-underline ${
                      primary ? 'border-fd-primary/40' : ''
                    }`}
                  >
                    <Icon className="text-fd-muted-foreground mt-0.5 size-4 shrink-0" />
                    <span>
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="text-fd-muted-foreground block text-xs">{desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <p className="text-fd-muted-foreground mt-10 text-xs">
        학습 기록은 이 브라우저에만 저장됩니다 (오답노트에서 JSON 내보내기/가져오기 가능). 자료 출처는{' '}
        <Link href="/docs/references" className="underline">
          참고 자료
        </Link>
        에 정리돼 있습니다.
      </p>
    </main>
  );
}
