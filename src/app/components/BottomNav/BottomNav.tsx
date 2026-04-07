'use client';

import { Home, Book, BarChart2, User, PlusCircle } from 'lucide-react';

interface BottomNavProps {
  onFabClick: () => void;
}

const BottomNav = ({ onFabClick }: BottomNavProps) => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 bg-sky-surface border-t border-sky-border lg:hidden"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around px-2 pb-safe">
        <button
          className="flex flex-col items-center gap-0.5 py-2 px-3 text-sky-primary min-w-[44px] min-h-[44px] justify-center"
          aria-current="page"
        >
          <Home size={20} aria-hidden="true" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        <button
          className="flex flex-col items-center gap-0.5 py-2 px-3 text-sky-text-subtle min-w-[44px] min-h-[44px] justify-center cursor-default"
          disabled
          aria-disabled="true"
        >
          <Book size={20} aria-hidden="true" />
          <span className="text-[10px]">Logbook</span>
        </button>

        <button
          onClick={onFabClick}
          aria-label="Log Jump"
          className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-sky-primary text-white shadow-lg -mt-5 min-w-[44px]"
        >
          <PlusCircle size={24} aria-hidden="true" />
        </button>

        <button
          className="flex flex-col items-center gap-0.5 py-2 px-3 text-sky-text-subtle min-w-[44px] min-h-[44px] justify-center cursor-default"
          disabled
          aria-disabled="true"
        >
          <BarChart2 size={20} aria-hidden="true" />
          <span className="text-[10px]">Stats</span>
        </button>

        <button
          className="flex flex-col items-center gap-0.5 py-2 px-3 text-sky-text-subtle min-w-[44px] min-h-[44px] justify-center cursor-default"
          disabled
          aria-disabled="true"
        >
          <User size={20} aria-hidden="true" />
          <span className="text-[10px]">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
