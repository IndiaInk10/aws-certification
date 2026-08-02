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
}

/** ts-fsrs Card 를 그대로 직렬화한 것 */
export type SrsCard = Record<string, unknown>;

export interface ProgressStore {
  listAttempts(): Promise<ExamAttempt[]>;
  addAttempt(a: ExamAttempt): Promise<void>;

  listWrong(): Promise<WrongItem[]>;
  putWrong(w: WrongItem): Promise<void>;
  removeWrong(id: string): Promise<void>;

  getCards(): Promise<Record<string, SrsCard>>;
  putCard(id: string, c: SrsCard): Promise<void>;

  getDone(): Promise<string[]>;
  toggleDone(key: string): Promise<string[]>;

  exportAll(): Promise<string>;
  importAll(json: string): Promise<void>;
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
    const all = await this.listWrong();
    write(KEY.wrong, [w, ...all.filter((x) => x.id !== w.id)]);
  }
  async removeWrong(id: string) {
    const all = await this.listWrong();
    write(
      KEY.wrong,
      all.filter((x) => x.id !== id),
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
  async clearAll() {
    Object.values(KEY).forEach((k) => window.localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent('cv:changed'));
  }
}

export const store: ProgressStore = new LocalStorageStore();
