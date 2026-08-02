'use client';

/**
 * 용어집 — 처음 보는 낱말에서 멈추지 않게 하는 장치.
 *
 *  <Term>        본문 첫 등장에 붙는 점선 밑줄. 호버·포커스·탭하면 뜻이 뜬다.
 *                remark-obsidian.mjs 가 content/glossary.json 을 보고 자동으로 감싼다.
 *  <GlossaryList> `{{glossary}}` 마커가 놓인 자리에 전체 목록을 편다.
 *
 * 툴팁 라이브러리를 쓰지 않는다 (inline-quiz 와 같은 원칙). useState 와 CSS 만 쓴다.
 */

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { BookMarked, ChevronDown, Search, X } from 'lucide-react';
import glossaryData from '@/generated/glossary.json';

type Entry = {
  term: string;
  en: string;
  cat: string;
  short: string;
  long?: string;
  aliases?: string[];
};

const ENTRIES = glossaryData as Entry[];

/** 카드 최대 너비(px). 화면이 이보다 좁으면 여백만 남기고 줄인다. */
const CARD_W = 320;

/** 용어집 페이지 경로. 자격증이 하나뿐이라 상수로 둔다. */
const GLOSSARY_PATH = '/docs/aws-clf-c02/00-map/glossary';
/** 본문 용어에 마우스를 올리면 상시 사전에 알리는 이벤트 이름 */
const TERM_EVENT = 'glossary:term';
/** 용어 → 앵커 id. 용어집 목록에서 항목을 가리키는 데 쓴다. */
export const termAnchor = (t: string) => 't-' + encodeURIComponent(t.replace(/\s+/g, '-'));
const MARGIN = 12;
const GAP = 8;

/**
 * 뜻풀이 안의 **굵게** 와 `코드` 만 처리한다.
 * 용어집은 JSON 이라 마크다운 파서를 거치지 않기 때문이다. (inline-quiz 와 같은 방식)
 */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|`([^`]+)`/g;
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <strong key={k++} className="font-semibold">
          {m[1]}
        </strong>,
      );
    } else {
      out.push(
        <code key={k++} className="bg-fd-muted rounded px-1 font-mono text-[0.9em]">
          {m[2]}
        </code>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

// ── 본문 안의 용어 ────────────────────────────────────────────

type Pos = { left: number; top: number; above: boolean };

export function Term({
  term,
  en,
  def,
  children,
}: {
  term: string;
  en?: string;
  def: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const hovering = useRef(false);
  const [pos, setPos] = useState<Pos | null>(null);
  const id = useId();

  /** 상시 사전(GlossaryDock)에 "지금 이 용어를 보고 있다"고 알린다. */
  const announce = useCallback(() => {
    window.dispatchEvent(new CustomEvent(TERM_EVENT, { detail: term }));
  }, [term]);

  // 위치는 열 때 한 번만 잰다. 좁은 화면에서도 가로로 넘치지 않도록 양옆을 클램프한다.
  const open = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const w = Math.min(CARD_W, window.innerWidth - MARGIN * 2);
    const left = Math.min(
      Math.max(MARGIN, r.left + r.width / 2 - w / 2),
      window.innerWidth - w - MARGIN,
    );
    // 아래쪽 공간이 모자라면 위로 띄운다
    const above = r.bottom + 180 > window.innerHeight && r.top > 180;
    setPos({ left, top: above ? r.top - GAP : r.bottom + GAP, above });
    announce();
  }, [announce]);

  const close = useCallback(() => setPos(null), []);

  useEffect(() => {
    if (!pos) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    // 바깥을 누르면 닫는다 (터치에서 필요하다)
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) close();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [pos, close]);

  return (
    <>
      <button
        ref={ref}
        type="button"
        aria-describedby={pos ? id : undefined}
        aria-expanded={!!pos}
        onPointerEnter={(e) => {
          if (e.pointerType !== 'mouse') return;
          hovering.current = true;
          open();
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== 'mouse') return;
          hovering.current = false;
          close();
        }}
        // 마우스는 호버로 이미 열려 있으므로 클릭은 터치·펜에서만 토글한다
        onClick={() => {
          if (hovering.current) return;
          if (pos) close();
          else open();
        }}
        onFocus={open}
        onBlur={() => {
          if (!hovering.current) close();
        }}
        className="decoration-fd-muted-foreground/70 hover:decoration-fd-primary focus-visible:ring-fd-ring cursor-help border-0 bg-transparent p-0 font-[inherit] text-[inherit] underline decoration-dotted underline-offset-[3px] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none"
      >
        {children ?? term}
      </button>

      {pos && (
        <span
          id={id}
          role="tooltip"
          style={{
            left: pos.left,
            top: pos.top,
            width: `min(${CARD_W}px, calc(100vw - ${MARGIN * 2}px))`,
            transform: pos.above ? 'translateY(-100%)' : undefined,
          }}
          // 인용구·강조 안에서도 카드는 평범한 본문처럼 보여야 하므로 기울임·굵기를 되돌린다
          className="not-prose bg-fd-popover text-fd-popover-foreground border-fd-border fixed z-50 block rounded-lg border px-3 py-2.5 text-left font-normal whitespace-normal not-italic shadow-lg [overflow-wrap:anywhere]"
        >
          <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-sm font-semibold">{term}</span>
            {en && <span className="text-fd-muted-foreground text-xs">{en}</span>}
          </span>
          <span className="text-fd-foreground/85 mt-1 block text-[13px] leading-relaxed">
            {inline(def)}
          </span>
        </span>
      )}
    </>
  );
}

// ── 용어집 페이지 ─────────────────────────────────────────────

/** 검색어가 term·en·뜻풀이·별칭 중 어디에든 걸리면 통과 */
function matches(e: Entry, q: string) {
  const hay = [e.term, e.en, e.cat, e.short, e.long ?? '', ...(e.aliases ?? [])]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
}

export function GlossaryList() {
  const [q, setQ] = useState('');
  const query = q.trim().toLowerCase();
  const hits = query ? ENTRIES.filter((e) => matches(e, query)) : ENTRIES;

  // build-glossary.mjs 가 카테고리 순서대로 정렬해 두므로 그대로 묶기만 한다
  const groups: { cat: string; items: Entry[] }[] = [];
  for (const e of hits) {
    const last = groups[groups.length - 1];
    if (last && last.cat === e.cat) last.items.push(e);
    else groups.push({ cat: e.cat, items: [e] });
  }

  return (
    <div className="not-prose my-6">
      <div className="focus-within:border-fd-primary/60 bg-fd-card flex items-center gap-2 rounded-lg border px-3 py-2">
        <Search className="text-fd-muted-foreground size-4 shrink-0" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="용어 · 영어 원어 · 뜻으로 검색"
          aria-label="용어 검색"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
        <span className="text-fd-muted-foreground shrink-0 text-xs tabular-nums">
          {hits.length} / {ENTRIES.length}
        </span>
      </div>

      {hits.length === 0 && (
        <p className="text-fd-muted-foreground mt-6 text-sm">
          찾으시는 용어가 없습니다. 다른 표현으로 검색해 보시기 바랍니다.
        </p>
      )}

      {groups.map((g) => (
        <section key={g.cat} className="mt-6">
          <h3 className="text-fd-muted-foreground border-b pb-1 text-xs font-semibold tracking-wider uppercase">
            {g.cat}
            <span className="ml-2 font-normal normal-case">{g.items.length}</span>
          </h3>

          <dl className="mt-2 divide-y">
            {g.items.map((e) => (
              <div key={e.term} id={termAnchor(e.term)} className="scroll-mt-24 py-2.5">
                <dt className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-semibold">{e.term}</span>
                  <span className="text-fd-muted-foreground text-xs">{e.en}</span>
                </dt>
                <dd className="text-fd-foreground/90 mt-1 text-sm leading-relaxed">
                  {inline(e.short)}
                  {e.long && (
                    <span className="text-fd-muted-foreground mt-1 block">
                      {inline(e.long)}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

// ── 상시 사전 ────────────────────────────────────────────────

/**
 * 화면 오른쪽 아래에 항상 떠 있는 작은 사전.
 *
 * 본문의 점선 용어에 마우스를 올리면 여기 내용이 바뀐다. 팝오버는 마우스를 떼면
 * 사라지지만 이쪽은 남아 있으므로, 읽다가 다시 확인하거나 두 용어를 비교할 수 있다.
 * 직접 검색해서 찾아볼 수도 있다.
 *
 * 접힘 상태는 localStorage 에 남겨 새로고침해도 유지한다.
 */
const DOCK_KEY = 'cv.glossary-dock';

export function GlossaryDock() {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // 접힘 상태 복원 — 서버 렌더와 어긋나지 않도록 마운트 후에 읽는다
  useEffect(() => {
    const saved = localStorage.getItem(DOCK_KEY);
    // 좁은 화면에서 기본으로 펼치면 본문을 덮는다. 한 번이라도 직접 고른 적이 있으면 그것을 따른다.
    setOpen(saved ? saved === 'open' : window.innerWidth >= 768);
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem(DOCK_KEY, open ? 'open' : 'closed');
  }, [open, ready]);

  // 본문 용어에 마우스를 올리면 그 뜻으로 바꾼다
  useEffect(() => {
    const onTerm = (e: Event) => {
      const name = (e as CustomEvent<string>).detail;
      const hit = ENTRIES.find((x) => x.term === name);
      if (hit) {
        setEntry(hit);
        setQ('');
      }
    };
    window.addEventListener(TERM_EVENT, onTerm);
    return () => window.removeEventListener(TERM_EVENT, onTerm);
  }, []);

  const query = q.trim().toLowerCase();
  const hits = query ? ENTRIES.filter((e) => matches(e, query)).slice(0, 8) : [];
  if (!ready) return null;

  return (
    <div className="fixed inset-x-2 bottom-2 z-40 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-80 print:hidden">
      {open ? (
        <div className="bg-fd-popover text-fd-popover-foreground border-fd-border overflow-hidden rounded-xl border shadow-lg">
          <div className="flex items-center gap-2 border-b px-3 py-2">
            <BookMarked className="text-fd-muted-foreground size-4 shrink-0" />
            <span className="flex-1 text-sm font-semibold">용어 사전</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="사전 접기"
              className="text-fd-muted-foreground hover:text-fd-foreground rounded p-0.5"
            >
              <ChevronDown className="size-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 border-b px-3 py-1.5">
            <Search className="text-fd-muted-foreground size-3.5 shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="용어 검색"
              aria-label="용어 검색"
              className="min-w-0 flex-1 bg-transparent py-0.5 text-sm outline-none"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ('')}
                aria-label="검색어 지우기"
                className="text-fd-muted-foreground hover:text-fd-foreground rounded p-0.5"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          <div className="max-h-[38vh] overflow-y-auto overscroll-contain px-3 py-2.5 sm:max-h-[45vh]">
            {query ? (
              hits.length ? (
                <ul className="flex flex-col gap-1">
                  {hits.map((e) => (
                    <li key={e.term}>
                      <button
                        type="button"
                        onClick={() => {
                          setEntry(e);
                          setQ('');
                        }}
                        className="hover:bg-fd-accent w-full rounded px-1.5 py-1 text-left text-sm"
                      >
                        <span className="font-medium">{e.term}</span>
                        <span className="text-fd-muted-foreground ml-1.5 text-xs">{e.en}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-fd-muted-foreground text-sm">찾으시는 용어가 없습니다.</p>
              )
            ) : entry ? (
              <>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-sm font-semibold">{entry.term}</span>
                  <span className="text-fd-muted-foreground text-xs">{entry.en}</span>
                </div>
                <p className="text-fd-foreground/90 mt-1 text-[13px] leading-relaxed">
                  {inline(entry.short)}
                </p>
                {entry.long && (
                  <p className="text-fd-muted-foreground mt-1.5 text-[13px] leading-relaxed">
                    {inline(entry.long)}
                  </p>
                )}
              </>
            ) : (
              <p className="text-fd-muted-foreground text-[13px] leading-relaxed">
                본문에서 <span className="underline decoration-dotted">점선이 그어진 용어</span>에
                마우스를 올리면 여기에 뜻이 나옵니다. 직접 검색하셔도 됩니다.
              </p>
            )}
          </div>
        </div>
      ) : (
        // 접었을 때는 정원(正圓). size-11 은 터치 목표 권장 크기(44px)에 맞춘 것이다.
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="용어 사전 열기"
          title="용어 사전"
          className="bg-fd-popover text-fd-popover-foreground border-fd-border hover:bg-fd-accent ml-auto grid size-11 place-items-center rounded-full border shadow-lg"
        >
          <BookMarked className="size-5" />
        </button>
      )}
    </div>
  );
}
