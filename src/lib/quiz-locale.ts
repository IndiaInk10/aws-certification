'use client';

/**
 * 문제 본문 언어.
 *
 * 사이트 UI 는 그대로 한국어고, **문항·보기 텍스트만** 이 값에 따라 바뀐다.
 * 번역본이 없는 문항은 원문(회차의 base 언어) 그대로 보여 준다 — 빈 화면보다 낫다.
 *
 * 저장은 localStorage 한 줄. storage.ts 는 학습 기록용이라 섞지 않는다.
 */

import { useCallback, useEffect, useState } from 'react';

export const QUIZ_LOCALES = ['ko', 'en'] as const;
export type QuizLocale = (typeof QUIZ_LOCALES)[number];

/** SSR 과 첫 렌더가 어긋나지 않도록 서버·클라이언트 모두 이 값에서 시작한다 */
export const DEFAULT_LOCALE: QuizLocale = 'ko';

export const LOCALE_LABEL: Record<QuizLocale, string> = {
  ko: '한국어',
  en: 'English',
};

/** 빌드 산출물의 텍스트 — 있는 언어만 채워져 있다 */
export type Localized = Partial<Record<QuizLocale, string>>;

const KEY = 'cv.quizLang';
const EVENT = 'cv:quizlang';

export const isQuizLocale = (v: unknown): v is QuizLocale =>
  typeof v === 'string' && (QUIZ_LOCALES as readonly string[]).includes(v);

/** 고른 언어 → 원문 언어 → 아무거나. 셋 다 없으면 빈 문자열. */
export function localize(text: Localized, locale: QuizLocale, base: QuizLocale): string {
  return text[locale] ?? text[base] ?? Object.values(text)[0] ?? '';
}

/** 고른 언어의 번역본이 실제로 있는가 (배지·안내 문구용) */
export const hasLocale = (text: Localized, locale: QuizLocale) => text[locale] !== undefined;

export function useQuizLocale(): [QuizLocale, (next: QuizLocale) => void] {
  const [locale, setLocale] = useState<QuizLocale>(DEFAULT_LOCALE);

  // localStorage 는 마운트 후에 읽는다. 첫 렌더에서 읽으면 SSR 결과와 어긋난다.
  useEffect(() => {
    const read = () => {
      const v = window.localStorage.getItem(KEY);
      if (isQuizLocale(v)) setLocale(v);
    };
    read();
    window.addEventListener(EVENT, read);
    window.addEventListener('storage', read); // 다른 탭에서 바꾼 경우
    return () => {
      window.removeEventListener(EVENT, read);
      window.removeEventListener('storage', read);
    };
  }, []);

  const set = useCallback((next: QuizLocale) => {
    setLocale(next);
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* 저장 실패해도 이번 세션 동안은 동작한다 */
    }
    window.dispatchEvent(new CustomEvent(EVENT));
  }, []);

  return [locale, set];
}
