/**
 * 학습 기록 저장 계층.
 *
 * 지금은 localStorage 구현만 있다. 나중에 온라인(Supabase 등)으로 옮길 때
 * SupabaseStore 를 같은 인터페이스로 만들고 아래 `store` 만 바꾸면 된다.
 * 다른 파일은 전부 이 인터페이스만 사용하므로 수정이 필요 없다.
 */

export interface ExamAttempt {
  id: string;
  cert: string;
  exam: number;
  total: number;
  correct: number;
  durationSec: number;
  at: string; // ISO
}

export interface WrongItem {
  id: string; // `${cert}-${exam}-${qi}`
  cert: string;
  exam: number;
  qi: number;
  q: string;
  choices: { k: string; t: string }[];
  chosen: string[];
  answers: string[];
  services: string[];
  modules: string[];
  at: string;
  /** 선지 분석 — 오답이 왜 오답인지. 문항을 직접 쓴 회차에만 있다. */
  explain?: string;
  /** 시험 중 검토 표시한 문항. 맞혔더라도 오답노트에 담는다. */
  flagged?: boolean;
}

/** ts-fsrs Card 를 그대로 직렬화한 것 */
export type SrsCard = Record<string, unknown>;

/** 지울 수 있는 기록 단위 */
export const DATA_SCOPES = ['attempts', 'wrong', 'cards', 'done'] as const;
export type DataScope = (typeof DATA_SCOPES)[number];

export const SCOPE_LABEL: Record<DataScope, string> = {
  attempts: '응시 기록',
  wrong: '오답노트',
  cards: '복습 일정',
  done: '강의 진도',
};

export interface ProgressStore {
  listAttempts(): Promise<ExamAttempt[]>;
  addAttempt(a: ExamAttempt): Promise<void>;

  listWrong(): Promise<WrongItem[]>;
  putWrong(w: WrongItem): Promise<void>;
  removeWrong(id: string): Promise<void>;
  /**
   * 여러 문항을 한 번에 넣고 뺀다.
   * 낱개 메서드는 전체 목록을 읽어 통째로 다시 쓰므로, 동시에 여러 번 부르면
   * 서로의 쓰기를 덮어써 마지막 하나만 남는다. 회차 채점처럼 한꺼번에
   * 여러 건을 저장할 때는 반드시 이쪽을 쓴다.
   */
  putWrongMany(ws: readonly WrongItem[]): Promise<void>;
  removeWrongMany(ids: readonly string[]): Promise<void>;

  getCards(): Promise<Record<string, SrsCard>>;
  putCard(id: string, c: SrsCard): Promise<void>;

  getDone(): Promise<string[]>;
  toggleDone(key: string): Promise<string[]>;

  exportAll(): Promise<string>;
  importAll(json: string): Promise<void>;
  /** 고른 기록만 지운다 */
  clear(scopes: readonly DataScope[]): Promise<void>;
  clearAll(): Promise<void>;
}

const KEY = {
  attempts: 'cv.attempts',
  wrong: 'cv.wrong',
  cards: 'cv.cards',
  done: 'cv.done',
} as const;

function read<T>(k: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const v = window.localStorage.getItem(k);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(k: string, v: unknown) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(k, JSON.stringify(v));
    window.dispatchEvent(new CustomEvent('cv:changed', { detail: k }));
  } catch {
    /* 용량 초과 등은 조용히 무시 */
  }
}

class LocalStorageStore implements ProgressStore {
  async listAttempts() {
    return read<ExamAttempt[]>(KEY.attempts, []);
  }
  async addAttempt(a: ExamAttempt) {
    const all = await this.listAttempts();
    write(KEY.attempts, [a, ...all].slice(0, 500));
  }

  async listWrong() {
    return read<WrongItem[]>(KEY.wrong, []);
  }
  async putWrong(w: WrongItem) {
    return this.putWrongMany([w]);
  }
  async removeWrong(id: string) {
    return this.removeWrongMany([id]);
  }
  async putWrongMany(ws: readonly WrongItem[]) {
    if (ws.length === 0) return;
    const all = await this.listWrong();
    const incoming = new Set(ws.map((w) => w.id));
    write(KEY.wrong, [...ws, ...all.filter((x) => !incoming.has(x.id))]);
  }
  async removeWrongMany(ids: readonly string[]) {
    if (ids.length === 0) return;
    const gone = new Set(ids);
    const all = await this.listWrong();
    write(
      KEY.wrong,
      all.filter((x) => !gone.has(x.id)),
    );
  }

  async getCards() {
    return read<Record<string, SrsCard>>(KEY.cards, {});
  }
  async putCard(id: string, c: SrsCard) {
    const all = await this.getCards();
    all[id] = c;
    write(KEY.cards, all);
  }

  async getDone() {
    return read<string[]>(KEY.done, []);
  }
  async toggleDone(key: string) {
    const all = await this.getDone();
    const next = all.includes(key) ? all.filter((k) => k !== key) : [...all, key];
    write(KEY.done, next);
    return next;
  }

  async exportAll() {
    return JSON.stringify(
      {
        v: 1,
        exportedAt: new Date().toISOString(),
        attempts: read(KEY.attempts, []),
        wrong: read(KEY.wrong, []),
        cards: read(KEY.cards, {}),
        done: read(KEY.done, []),
      },
      null,
      1,
    );
  }
  async importAll(json: string) {
    const d = JSON.parse(json);
    if (d.attempts) write(KEY.attempts, d.attempts);
    if (d.wrong) write(KEY.wrong, d.wrong);
    if (d.cards) write(KEY.cards, d.cards);
    if (d.done) write(KEY.done, d.done);
  }
  async clear(scopes: readonly DataScope[]) {
    scopes.forEach((s) => window.localStorage.removeItem(KEY[s]));
    window.dispatchEvent(new CustomEvent('cv:changed'));
  }
  async clearAll() {
    return this.clear(DATA_SCOPES);
  }
}

export const store: ProgressStore = new LocalStorageStore();
