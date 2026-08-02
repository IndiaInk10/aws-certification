'use client';

/**
 * RootProvider 를 감싸 **문제 언어**를 Fumadocs 의 언어 스위처에 연결한다.
 *
 * Fumadocs 는 `i18n.locales` 가 2개 이상이면 테마 버튼 옆에 언어 선택 버튼을 띄운다.
 * 기본 동작은 URL 앞에 로케일을 붙이는 것(/en/docs/...)이지만, 이 사이트는 문서가
 * 한국어 하나뿐이라 라우팅을 건드리지 않는다. `onLocaleChange` 를 우리 것으로 바꿔
 * **문제 언어만** 바꾸도록 연결했다. 나중에 문서까지 번역하면 이 자리를
 * fumadocs-core/i18n 미들웨어 방식으로 갈아끼우면 된다 (README 참고).
 */

import { RootProvider } from 'fumadocs-ui/provider/next';
import { LOCALE_LABEL, QUIZ_LOCALES, isQuizLocale, useQuizLocale } from '@/lib/quiz-locale';
import { uiKo } from '@/lib/ui-translations';
import type { ReactNode } from 'react';

const locales = QUIZ_LOCALES.map((l) => ({ locale: l, name: LOCALE_LABEL[l] }));

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useQuizLocale();

  return (
    <RootProvider
      i18n={{
        locale,
        locales,
        translations: uiKo, // 사이트 UI 는 언어와 무관하게 한국어
        onLocaleChange: (v) => {
          if (isQuizLocale(v)) setLocale(v);
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
