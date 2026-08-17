/*
  ```d2 코드 펜스 → SVG 굽기 (빌드 앞단)

  content/docs 아래 마크다운을 전부 훑어 d2 블록을 모으고, 캐시에 없는 것만 그린다.
  실제 렌더는 scripts/d2-render.mjs 가 한다 — 여기는 모으고 세는 일만 한다.

  왜 remark 에 맡기지 않고 앞단에서 미리 굽는가. 문법이 틀리면 여기서 파일 이름과 함께
  멈춘다. remark 안에서 터지면 Next 렌더 도중이라 어느 문서의 몇 번째 블록인지 알기 어렵다.
  (remark 쪽에도 굽는 길은 남아 있다. dev 에서 그림을 고치는 동안 필요하다.)

  체인 맨 앞에 두었다. 여섯 스크립트 중 가장 무겁고 가장 잘 터지는 쪽이라, 틀렸으면
  일찍 알려 주는 편이 낫다.
*/
import fs from 'node:fs';
import path from 'node:path';
import { keyOf, readCache, render, closeD2 } from './d2-render.mjs';

const DOCS = path.resolve('content/docs');

/** ```d2 ... ``` 펜스. meta(제목)는 remark 가 캡션으로 쓰므로 여기서는 본문만 본다. */
const FENCE = /^```d2[^\n]*\r?\n([\s\S]*?)^```/gm;

function walk(dir, acc = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'images') walk(p, acc);
    } else if (/\.mdx?$/.test(e.name)) {
      acc.push(p);
    }
  }
  return acc;
}

// 같은 그림이 여러 문서에 있어도 한 번만 그린다 (키가 곧 내용이다).
const byKey = new Map(); // key → { src, where: string[] }
let blocks = 0;

for (const file of walk(DOCS)) {
  const text = fs.readFileSync(file, 'utf8');
  FENCE.lastIndex = 0;
  let m;
  while ((m = FENCE.exec(text))) {
    const src = m[1];
    // 빈 껍데기(템플릿의 자리표시자)는 그릴 것이 없다. remark 도 이런 노드는 지운다.
    if (!src.trim()) continue;
    blocks++;
    const key = keyOf(src);
    const at = path.relative(process.cwd(), file);
    const hit = byKey.get(key);
    if (hit) hit.where.push(at);
    else byKey.set(key, { src, where: [at] });
  }
}

let drawn = 0;
let cached = 0;
let empty = 0; // 도형이 없는 자리표시자 (템플릿). 그릴 것이 없어 넘어간다.
const failures = [];

for (const [key, { src, where }] of byKey) {
  // 빈 문자열도 캐시 적중이다 ("그릴 것이 없다"를 기억해 둔 것) — null 만 미스로 본다.
  const hit = readCache(key);
  if (hit !== null) {
    if (hit === '') empty++;
    else cached++;
    continue;
  }
  try {
    if ((await render(src)) === '') empty++;
    else drawn++;
  } catch (err) {
    failures.push({ where, message: err?.message ?? String(err) });
  }
}

await closeD2();

if (failures.length) {
  console.error(`[diagrams] 오류 ${failures.length}건`);
  for (const f of failures) {
    console.error(`  ✗ ${f.where.join(', ')}`);
    for (const line of String(f.message).split('\n')) console.error(`      ${line}`);
  }
  process.exit(1);
}

const summary =
  `[diagrams] 블록 ${blocks}개 · 그림 ${byKey.size}종 · 새로 그림 ${drawn} · 캐시 ${cached}` +
  (empty ? ` · 빈 껍데기 ${empty}` : '') +
  '\n';

/*
  여기서 명시적으로 끝낸다.

  D2 는 WASM 을 웹워커에서 돌린다. closeD2() 가 그 워커를 끊지만, 그건 공개 API 가 아니라
  내부 필드에 기댄 것이라 @d2lang/d2 를 올리는 순간 조용히 무력화될 수 있다. 그러면
  이벤트 루프가 안 비어서 `npm run build` 가 영영 안 끝난다 — 원인을 찾기 아주 나쁜 증상이다.
  산출물은 전부 동기로 써 두었으므로 여기서 끊어도 잘릴 것이 없다.

  다만 stdout 은 파이프일 때 비동기라, 그냥 exit 하면 마지막 줄이 잘린다. 그래서 요약 줄을
  console.log 가 아니라 write 의 콜백으로 흘려보낸 뒤 끝낸다.
  (빈 문자열로 write 하면 파이프에서 콜백이 아예 안 불려 여기서 멈춘다 — 실제로 겪었다.
   그래서 요약 줄 자체를 실어 보낸다. 그래도 안 오면 1초 뒤 그냥 끝낸다.)
*/
await Promise.race([
  new Promise((r) => process.stdout.write(summary, r)),
  new Promise((r) => setTimeout(r, 1000)),
]);
process.exit(0);
