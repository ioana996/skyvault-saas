'use client';

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { THEME_STORAGE_KEY, THEME_LIGHT_VALUE, THEME_DARK_VALUE } from '@/lib/theme';

function getInitialIsDark(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === THEME_LIGHT_VALUE) {
    document.documentElement.setAttribute('data-theme', THEME_LIGHT_VALUE);
    return false;
  }
  // Default to dark (no data-theme attr) — matches app default
  document.documentElement.removeAttribute('data-theme');
  return true;
}

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(getInitialIsDark);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(THEME_STORAGE_KEY, THEME_DARK_VALUE);
    } else {
      document.documentElement.setAttribute('data-theme', THEME_LIGHT_VALUE);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_LIGHT_VALUE);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <button
      role="switch"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-checked={!isDark}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className={`
        relative inline-flex items-center w-14 h-7 rounded-full border border-sky-surface-mid
        transition-colors duration-300
        ${isDark ? 'bg-sky-surface-mid' : 'bg-sky-primary/20'}
        focus:outline-none focus:ring-2 focus:ring-sky-primary
      `}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
      <Sun size={12} className="absolute left-2 text-sky-accent" aria-hidden="true" />
      <Moon size={12} className="absolute right-2 text-sky-text-muted" aria-hidden="true" />
      <span
        className={`
          absolute w-5 h-5 rounded-full bg-sky-primary shadow-sm
          transition-transform duration-200
          ${isDark ? 'translate-x-7' : 'translate-x-1'}
        `}
      />
    </button>
  );
};

export default ThemeToggle;
