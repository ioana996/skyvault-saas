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
        <span className="text-xl font-bold text-sky-text">SkyVault</span>
      </div>

      <nav aria-label="Sidebar" className="flex-1 space-y-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
              active
                ? 'text-sky-primary bg-sky-primary/10 font-medium'
                : 'text-sky-text-subtle cursor-default select-none'
            }`}
            {...(active ? { 'aria-current': 'page' as const } : { 'aria-disabled': 'true' })}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-auto space-y-4 pt-4 border-t border-sky-border">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-sky-text-subtle">Theme</span>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-sky-surface-mid flex items-center justify-center">
            <User size={16} className="text-sky-text-muted" aria-hidden="true" />
          </div>
          <div>
            <div className="text-sm font-medium text-sky-text">Jumper</div>
            <div className="text-xs text-sky-text-subtle">{mockStats.totalJumps} jumps</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
