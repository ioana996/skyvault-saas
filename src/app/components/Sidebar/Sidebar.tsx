'use client';

import {
  Home,
  Book,
  Settings,
  Activity,
  BarChart2,
  User,
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { mockStats } from '@/app/data/stats';

const navItems = [
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'Logbook', icon: Book, active: false },
  { label: 'Gear', icon: Settings, active: false },
  { label: 'Progression', icon: Activity, active: false },
  { label: 'Stats', icon: BarChart2, active: false },
];

const Sidebar = () => {
  return (
    <aside
      className="hidden lg:flex flex-col w-[220px] min-h-screen bg-sky-surface border-r border-sky-border px-4 py-6"
      aria-label="Sidebar navigation"
    >
      <div className="flex items-center gap-2 mb-8 px-2">
        <div
          className="w-6 h-6 rounded-md bg-gradient-to-br from-sky-primary to-sky-primary-bright flex items-center justify-center text-white text-xs font-display font-bold shrink-0"
          aria-hidden="true"
        >
          ◈
        </div>
        <span className="text-[15px] font-display font-bold text-sky-text tracking-wide">SkyVault</span>
      </div>

      <nav aria-label="Sidebar" className="flex-1 space-y-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium ${
              active
                ? 'text-sky-primary-bright bg-sky-primary/[0.08] border border-sky-border-active'
                : 'text-sky-text-subtle cursor-default select-none border border-transparent'
            }`}
            {...(active ? { 'aria-current': 'page' as const } : { 'aria-disabled': 'true' })}
          >
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-3 pt-4 border-t border-sky-border">
        <div className="flex items-center justify-between px-2">
          <span className="text-[10px] font-medium text-sky-text-subtle uppercase tracking-widest">Theme</span>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 px-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-surface to-sky-surface-high border border-sky-border-active flex items-center justify-center">
            <User size={14} className="text-sky-primary" aria-hidden="true" />
          </div>
          <div>
            <div className="text-[12px] font-semibold text-sky-text">Jumper</div>
            <div className="text-[10px] text-sky-text-subtle">{mockStats.totalJumps} jumps</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
