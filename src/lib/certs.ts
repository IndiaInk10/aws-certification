/**
 * 어떤 자격증에 어떤 화면이 생기는가.
 *
 * 예전에는 `/:cert/*` 라우트 넷이 전부 `quiz/index.json` 하나를 보고 생성됐다. 자격증이
 * CLF 하나뿐일 때는 티가 안 났는데, 문제은행이 아직 없는 SAA 를 넣자 **노트 그래프까지 같이
 * 사라졌다.** 그래프는 문항과 아무 상관이 없고 `graph.json` 만 있으면 그려지는데도 그랬다.
 *
 * 그래서 두 목록을 갈라 둔다.
 *
 *   allCerts   노트가 하나라도 있는 자격증 — 그래프는 이것만 있으면 된다
 *   quizCerts  문제은행이 있는 자격증 — 문제 풀이 · 오답노트는 문항이 없으면 빈 화면이라 안 만든다
 */
import graph from '@/generated/graph.json';
import quizIndex from '@/generated/quiz/index.json';

/** 문제은행이 있는 자격증. 문제 풀이 · 오답노트가 생기는 조건. */
export const quizCerts: string[] = quizIndex.map((c) => c.cert);

/** 노트가 하나라도 있는 자격증 전부. content/docs 바로 밑의 공통 문서(cert=null)는 뺀다. */
export const allCerts: string[] = [
  ...new Set(graph.nodes.map((n) => n.cert).filter((c): c is string => Boolean(c))),
].sort();

export const hasQuiz = (cert: string) => quizCerts.includes(cert);
