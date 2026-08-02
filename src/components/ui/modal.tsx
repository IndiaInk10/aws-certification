'use client';

/**
 * 재사용 모달.
 *
 * 브라우저 기본 alert/confirm 은 스타일을 못 맞추고 다크 모드에서 튄다.
 * <dialog> 기본 동작(포커스 트랩 · Esc 닫기 · ::backdrop)을 그대로 쓰고,
 * 겉모습만 사이트 토큰으로 입힌다.
 *
 *   const [ask, setAsk] = useState(false);
 *   <ConfirmDialog open={ask} title="제출할까요?" onConfirm={…} onCancel={() => setAsk(false)} />
 */

import { useEffect, useRef, type ReactNode } from 'react';

export function Modal({
  open,
  onClose,
  labelledBy,
  className = '',
  children,
}: {
  open: boolean;
  onClose: () => void;
  /** 제목 요소의 id — 스크린 리더가 모달 이름으로 읽는다 */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      // 배경(::backdrop) 클릭으로 닫기 — dialog 자체가 클릭 대상이 된다
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className={`bg-fd-card text-fd-foreground m-auto w-[min(28rem,calc(100vw-2rem))] rounded-xl border p-0 shadow-lg backdrop:bg-black/50 ${className}`}
    >
      {children}
    </dialog>
  );
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = '확인',
  cancelLabel = '취소',
  tone = 'primary',
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  description?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const titleId = 'confirm-title';

  return (
    <Modal open={open} onClose={onCancel} labelledBy={titleId}>
      <div className="p-5">
        <h2 id={titleId} className="text-base font-semibold">
          {title}
        </h2>
        {description && (
          <div className="text-fd-muted-foreground mt-2 text-sm leading-relaxed">{description}</div>
        )}
      </div>
      <div className="flex justify-end gap-2 border-t px-5 py-3">
        <button
          type="button"
          onClick={onCancel}
          // 되돌릴 수 없는 동작은 실수로 Enter 를 눌러도 취소가 먼저 잡히게 둔다
          autoFocus={tone === 'danger'}
          className="hover:bg-fd-secondary rounded-md border px-3 py-1.5 text-sm"
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          autoFocus={tone !== 'danger'}
          onClick={onConfirm}
          className={`rounded-md px-3 py-1.5 text-sm font-medium ${
            tone === 'danger'
              ? 'bg-red-600 text-white hover:bg-red-600/90'
              : 'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90'
          }`}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}
