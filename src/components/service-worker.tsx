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

      /*
        새 배포가 떴으면 캐시를 이번 빌드에 맞추라고 알린다.

        예전에는 워커가 activate 안에서 스스로 했는데, 그러면 수백 개를 다 받을 때까지
        활성화가 안 끝나 화면이 워커를 못 잡았다. 방아쇠를 이쪽으로 옮겼다 — 이 컴포넌트는
        모든 페이지에서 도니 반드시 한 번은 오고, 오프라인이라 실패해도 다음 페이지에서
        저절로 다시 시도된다. 이미 맞춰 둔 빌드면 워커가 곧바로 돌아간다.
      */
      const nudge = () => navigator.serviceWorker.controller?.postMessage({ type: 'RECONCILE' });

      void navigator.serviceWorker.ready.then(nudge);

      /*
        탭을 열어 둔 채로 새 배포가 뜨는 경우. 위 SKIP_WAITING 때문에 새 워커가 곧바로
        주도권을 잡는데, 그때는 페이지가 다시 뜨지 않으니 위 ready 는 이미 지나간 뒤다.
        주도권이 바뀌는 순간에도 한 번 알려 줘야 그 탭에서 바로 맞춰진다.
      */
      navigator.serviceWorker.addEventListener('controllerchange', nudge);
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
