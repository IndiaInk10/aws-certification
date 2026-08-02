import Link from 'next/link';
import backlinks from '@/generated/backlinks.json';

const LABEL: Record<string, string> = {
  course: '강의',
  service: '서비스',
  bank: '문제은행',
  exam: '시험',
  moc: '지도',
  template: '템플릿',
  root: '기타',
};

type Item = { url: string; title: string; group: string };

/** page.url 이 원문/부분 인코딩 어느 형태로 오든 찾는다 */
function lookup(url: string): Item[] | undefined {
  const map = backlinks as Record<string, Item[]>;
  const tries = [url];
  try {
    tries.push(decodeURIComponent(url));
  } catch {
    /* 잘못된 이스케이프는 무시 */
  }
  tries.push('/' + url.split('/').filter(Boolean).map(encodeURIComponent).join('/'));
  for (const t of tries) if (map[t]?.length) return map[t];
  return undefined;
}

export function Backlinks({ url }: { url: string }) {
  const items = lookup(url);
  if (!items?.length) return null;

  // 문제은행에서 오는 링크는 수백 개가 될 수 있으니 접어 둔다
  const bank = items.filter((i) => i.group === 'bank');
  const rest = items.filter((i) => i.group !== 'bank');

  return (
    <section className="mt-10 border-t pt-6">
      <h2 className="mb-3 text-sm font-semibold">
        이 노트를 링크한 노트 <span className="text-fd-muted-foreground">{items.length}</span>
      </h2>

      {rest.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {rest.map((i) => (
            <li key={i.url}>
              <Link
                href={i.url}
                className="bg-fd-secondary/50 hover:bg-fd-secondary inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs no-underline"
              >
                <span className="text-fd-muted-foreground">{LABEL[i.group] ?? i.group}</span>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {bank.length > 0 && (
        <details className="mt-3">
          <summary className="text-fd-muted-foreground cursor-pointer text-xs">
            문제은행 {bank.length}회분에서 출제
          </summary>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {bank.map((i) => (
              <li key={i.url}>
                <Link
                  href={i.url}
                  className="bg-fd-secondary/50 hover:bg-fd-secondary rounded-md border px-2 py-1 text-xs no-underline"
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
