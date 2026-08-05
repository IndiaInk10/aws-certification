'use client';

/**
 * 오픈북 창 — 시험 화면(학습 모드) 옆에 붙는 문서 뷰어.
 *
 * 링크만 주면 결국 새 탭으로 나가야 하고, 돌아오면 풀던 흐름이 끊긴다. 그래서 같은 화면 안에
 * **iframe 으로 문서를 그대로 띄운다**. 다만 `/docs/...` 를 그대로 넣으면 창 하나마다 사이드바·
 * 검색·목차까지 부팅해 눈에 띄게 느리다. 본문만 그리는 `/embed/...` 을 따로 두고 그걸 부른다.
 *
 * 문항에 태그가 없으면(회차 첫 문항처럼 특정 서비스를 묻지 않는 개념 문제) 빈 창을 두지 않고
 * **강의 모듈 전체**를 고를 수 있게 한다. 예전에는 이런 문항에서 창이 통째로 안 떴다.
 *
 * 주소는 전부 앱 안의 문서다. 설정 → 오프라인 사용에서 전체 저장을 해 뒀다면 비행기 모드에서도
 * 서비스 워커가 캐시된 HTML 로 이 창을 채운다 (/embed/… 도 저장 목록에 들어 있다).
 */

import { useMemo, useState } from 'react';
import { allModules, moduleLinks, serviceLinks, type LinkRef } from '@/lib/quiz-links';
import { BookOpen, ExternalLink, RotateCw } from 'lucide-react';

type Q = { modules: string[]; services: string[]; ref: string | null };

export function OpenBook({ cert, question, qi }: { cert: string; question: Q; qi: number }) {
  const tagged = useMemo(
    () => [...moduleLinks(cert, question.modules), ...serviceLinks(cert, question.services)],
    [cert, question.modules, question.services],
  );

  // 태그가 없으면 강의 모듈 전체를 후보로 (창을 비워 두지 않는다)
  const docs: LinkRef[] = useMemo(
    () => (tagged.length > 0 ? tagged : allModules(cert)),
    [tagged, cert],
  );

  // 어느 문항에서 고른 것인지 함께 들고 있는다. 문항이 바뀌면 고른 것은 무효 —
  // effect 로 되돌리면 렌더가 한 번 더 돌므로 렌더 중에 그냥 판정한다.
  const [sel, setSel] = useState<{ qi: number; slug: string }| null>(null);
  const slug = sel && sel.qi === qi ? sel.slug : null;
  const [nonce, setNonce] = useState(0); // 다시 불러오기용
  // 어느 문서가 다 떴는지 — 문서가 바뀌면 자동으로 다시 "안 뜬 상태" 가 된다 (effect 불필요).
  const [loadedKey, setLoadedKey] = useState<string | null>(null);

  const current = docs.find((d) => d.slug === slug) ?? docs[0] ?? null;

  if (!current) return null;

  // /docs/x → /embed/x (본문만 그리는 가벼운 쌍둥이 경로)
  const src = current.url.replace(/^\/docs\//, '/embed/');
  const frameKey = `${src}#${nonce}`;
  const ready = loadedKey === frameKey;

  return (
    <aside className="mt-4 flex shrink-0 flex-col overflow-hidden rounded-lg border lg:mt-0 lg:h-[min(78dvh,44rem)] lg:w-[26rem] xl:w-[32rem]">
      <div className="bg-fd-secondary/60 flex shrink-0 items-center gap-2 border-b px-3 py-2">
        <BookOpen className="size-4 shrink-0" />
        <span className="shrink-0 text-sm font-semibold">자료</span>

        <select
          value={current.slug}
          onChange={(e) => setSel({ qi, slug: e.target.value })}
          className="bg-fd-background min-w-0 flex-1 rounded-md border px-2 py-1 text-sm"
        >
          {tagged.length === 0 && <option disabled>이 문항엔 태그가 없습니다 — 모듈 선택</option>}
          {docs.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.name}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setNonce((n) => n + 1)}
          title="다시 불러오기"
          className="hover:bg-fd-secondary shrink-0 rounded-md border p-1"
        >
          <RotateCw className="size-3.5" />
        </button>
        <a
          href={current.url}
          target="_blank"
          rel="noreferrer"
          title="새 탭에서 열기"
          className="hover:bg-fd-secondary shrink-0 rounded-md border p-1"
        >
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      {current.desc && (
        <p className="text-fd-muted-foreground shrink-0 border-b px-3 py-1.5 text-xs">
          {current.desc}
        </p>
      )}

      <div className="relative min-h-0 flex-1">
        {!ready && (
          // 빈 흰 칸이 잠깐 보이면 멈춘 것처럼 느껴진다. 뜨는 중이라고 말해 준다.
          <div className="text-fd-muted-foreground absolute inset-0 flex items-center justify-center text-xs">
            {current.name} 여는 중…
          </div>
        )}
        <iframe
          // key 를 바꾸면 iframe 이 새로 뜬다 — 뒤로 가기 기록을 더럽히지 않는 방식의 새로고침.
          key={frameKey}
          src={src}
          title={`${current.name} 문서`}
          onLoad={() => setLoadedKey(frameKey)}
          className={`h-[60vh] w-full border-0 bg-transparent transition-opacity lg:h-full ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </aside>
  );
}
