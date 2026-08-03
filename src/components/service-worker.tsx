'use client';

/**
 * 서비스 워커 등록 — 이것 하나로 오프라인 동작이 켜진다 (실물은 public/sw.js).
 *
 * `next dev` 에서는 등록하지 않는다. 캐시가 코드 수정보다 오래 살아남아 "고쳤는데 안 바뀐다"를
 * 만들기 때문이다. 이미 등록돼 있으면 오히려 지운다. (`next start` 는 배포와 같게 등록한다.)
 */

import { useEffect } from 'react';

export function ServiceWorker() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    if (process.env.NODE_ENV !== 'production') {
      void navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => void r.unregister()));
      return;
    }

    const register = () => {
      void navigator.serviceWorker.register('/sw.js', { scope: '/' }).then((reg) => {
        // 새 버전이 받아지면 다음 방문 때 바로 쓰도록 대기 상태를 건너뛴다.
        reg.addEventListener('updatefound', () => {
          const sw = reg.installing;
          sw?.addEventListener('statechange', () => {
            if (sw.state === 'installed' && navigator.serviceWorker.controller) {
              sw.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      });
    };

    // 첫 화면 렌더와 다투지 않게 로드가 끝난 뒤 등록한다.
    if (document.readyState === 'complete') register();
    else {
      window.addEventListener('load', register, { once: true });
      return () => window.removeEventListener('load', register);
    }
  }, []);

  return null;
}
