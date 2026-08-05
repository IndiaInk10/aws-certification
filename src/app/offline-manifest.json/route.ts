/**
 * 오프라인으로 미리 받아 둘 주소 목록.
 *
 * 설정 화면의 "전체 저장" 이 이 목록을 읽어 서비스 워커에 넘긴다.
 * 라우트를 새로 추가하면 여기에도 넣어야 오프라인에서 열린다.
 */
import { source } from '@/lib/source';
import quizIndex from '@/generated/quiz/index.json';

export const dynamic = 'force-static';

export function GET() {
  const urls = [
    '/',
    '/settings',
    '/offline',
    ...source.getPages().map((p) => p.url),
    // 시험 화면 옆 오픈북 창이 부르는 본문 전용 쌍둥이 (/docs/x → /embed/x).
    // 이게 빠지면 비행기 모드에서 자료 창만 텅 빈다.
    ...source.getPages().map((p) => p.url.replace(/^\/docs\//, '/embed/')),
    ...quizIndex.flatMap((c) => [
      `/${c.cert}/quiz`,
      `/${c.cert}/review`,
      `/${c.cert}/graph`,
      ...c.exams.map((e) => `/${c.cert}/quiz/${e.exam}`),
    ]),
  ];

  return Response.json({ urls: [...new Set(urls)] });
}
