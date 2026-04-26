'use client';

import { useEffect } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        data-testid="drawer-backdrop"
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed inset-0 bg-black/60 z-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Log Jump form"
        className={`
          fixed bottom-0 left-0 right-0 z-50
          bg-sky-surface border-t border-sky-border
          rounded-t-2xl
          transition-transform duration-300
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
          max-h-[90vh] overflow-y-auto
        `}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div
            data-testid="drawer-handle"
            className="w-10 h-1 rounded-full bg-sky-text-subtle/30"
          />
        </div>

        <div className="px-4 pb-8 pt-2">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
