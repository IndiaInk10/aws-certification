/*
  서비스 워커 굽기 — src/sw.js → public/sw.js

  하는 일은 하나다. 원본의 `__BUILD_STAMP__` 자리에 **이번 빌드에서만 쓰는 값**을 박는다.

  왜 필요한가. 서비스 워커의 캐시 이름은 이 값으로 만든다. 값이 그대로면 지난 배포에서
  받아 둔 HTML·조각·자바스크립트가 새 배포 것과 뒤섞이고, Next 는 빌드마다 파일 이름과
  빌드 ID 가 바뀌므로 브라우저가 이미 사라진 주소를 불러 404 를 맞는다. 화면은 뜨는데
  문제가 한 개도 안 나오던 증상이 그것이다.

  값이 달라지면 파일 내용이 달라지고, 파일 내용이 달라지면 브라우저가 새 워커를 설치한다.
  새 워커는 activate 에서 옛 통을 전부 버린다 — 손으로 버전을 올릴 일이 없어진다.

  public/sw.js 는 이 스크립트가 만드는 산출물이라 저장소에 넣지 않는다 (.gitignore).
*/
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const src = path.join(root, 'src', 'sw.js');
const out = path.join(root, 'public', 'sw.js');

const source = fs.readFileSync(src, 'utf8');

if (!source.includes('__BUILD_STAMP__')) {
  console.error('[sw] src/sw.js 에 __BUILD_STAMP__ 자리가 없다. 캐시 버전을 박을 곳이 없어 중단한다.');
  process.exit(1);
}

/*
  이번 빌드를 가리키는 값.

  Vercel 은 빌드마다 커밋 해시를 넣어 준다 — 같은 커밋을 다시 배포하면 값도 같지만,
  그 경우 나오는 파일도 같으니 문제되지 않는다.
  로컬은 그런 게 없어서 시각으로 대신한다. 어느 쪽이든 워커 원본이 바뀌면 값도 바뀌도록
  원본 해시를 함께 섞는다.
*/
const commit = process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GITHUB_SHA ?? '';
const base = commit ? commit.slice(0, 12) : Date.now().toString(36);
const shape = crypto.createHash('sha256').update(source).digest('hex').slice(0, 8);
const stamp = `${base}-${shape}`;

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, source.replaceAll('__BUILD_STAMP__', stamp));

console.log(`[sw] public/sw.js 생성 · 캐시 버전 ${stamp}`);
