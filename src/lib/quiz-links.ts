/**
 * 문항 → 강의·서비스 노트 연결.
 *
 * 문항에는 `services: ['amazon-ec2', …]`, `modules: ['02-cloud-computing', …]` 만 들어 있다.
 * 사람에게 보여 줄 이름과 주소는 빌드 때 만들어 둔 두 목록에 있다. 여기서 그걸 이어 준다.
 *
 * 두 목록 모두 **정적 import** 다 — 번들에 그대로 들어가므로 오프라인(PWA)에서도 똑같이 동작한다.
 * 런타임에 fetch 하면 비행기 모드에서 링크가 통째로 비어 버린다.
 */
import modulesJson from '@/generated/modules.json';
import serviceMapJson from '@/generated/service-map.json';

export type LinkRef = { slug: string; name: string; url: string; desc?: string };

type ModuleEntry = { slug: string; title: string; url: string; why?: string; order?: number };
type ServiceEntry = { slug: string; name: string; url: string; desc?: string; module?: string };

const moduleIndex = new Map<string, Map<string, LinkRef>>();
const serviceIndex = new Map<string, Map<string, LinkRef>>();

for (const c of modulesJson as { cert: string; modules: ModuleEntry[] }[]) {
  moduleIndex.set(
    c.cert,
    new Map(c.modules.map((m) => [m.slug, { slug: m.slug, name: m.title, url: m.url, desc: m.why }])),
  );
}

for (const c of serviceMapJson as {
  cert: string;
  tiers: { categories: { services: ServiceEntry[] }[] }[];
}[]) {
  const map = new Map<string, LinkRef>();
  for (const tier of c.tiers)
    for (const cat of tier.categories)
      for (const s of cat.services)
        map.set(s.slug, { slug: s.slug, name: s.name, url: s.url, desc: s.desc });
  serviceIndex.set(c.cert, map);
}

/** 모듈 슬러그 목록 → 강의 링크. 목록에 없는 슬러그는 조용히 버린다. */
export function moduleLinks(cert: string, slugs: readonly string[] = []): LinkRef[] {
  const map = moduleIndex.get(cert);
  if (!map) return [];
  return slugs.map((s) => map.get(s)).filter((x): x is LinkRef => Boolean(x));
}

/** 서비스 슬러그 목록 → 서비스 노트 링크. */
export function serviceLinks(cert: string, slugs: readonly string[] = []): LinkRef[] {
  const map = serviceIndex.get(cert);
  if (!map) return [];
  return slugs.map((s) => map.get(s)).filter((x): x is LinkRef => Boolean(x));
}

/** 이 자격증의 강의 모듈 전부 (문항에 태그가 없을 때 직접 골라 볼 수 있게) */
export function allModules(cert: string): LinkRef[] {
  return [...(moduleIndex.get(cert)?.values() ?? [])];
}

/** 슬러그 하나만 이름으로 (집계 화면에서 쓴다) */
export const moduleLink = (cert: string, slug: string) => moduleIndex.get(cert)?.get(slug) ?? null;
export const serviceLink = (cert: string, slug: string) => serviceIndex.get(cert)?.get(slug) ?? null;
