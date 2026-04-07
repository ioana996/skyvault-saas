'use client';

import { useState } from 'react';
import HeroStats from './components/HeroStats/HeroStats';
import CreateJumpLoggingForm from './components/CreateJumpLoggingForm/CreateJumpLoggingForm';
import BottomNav from './components/BottomNav/BottomNav';
import Drawer from './components/Drawer/Drawer';
import Sidebar from './components/Sidebar/Sidebar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { Trophy } from 'lucide-react';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-bg flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-sky-border">
          <span className="text-lg font-bold text-sky-text">SkyVault</span>
          <ThemeToggle />
        </header>

        <main className="flex-1 flex flex-col lg:flex-row gap-6 p-4 lg:p-8 pb-24 lg:pb-8">
          <div className="flex-1 max-w-2xl mx-auto w-full lg:mx-0">
            <HeroStats />

            {/* TODO: Replace with jump history */}
            <section
              className="hidden lg:block mt-6 bg-sky-surface border border-sky-border rounded-xl p-6"
              aria-label="Recent jumps"
            >
              <h2 className="text-sky-text font-semibold mb-4">Recent Jumps</h2>
              <p className="text-sky-text-subtle text-sm">
                Jump history coming soon.
              </p>
            </section>
          </div>

          <aside className="hidden lg:block w-[360px] shrink-0">
            <div className="bg-sky-surface border border-sky-border rounded-xl p-6 sticky top-8">
              <h2 className="text-sky-text font-semibold mb-4 flex items-center gap-2">
                <Trophy size={18} className="text-sky-accent" aria-hidden="true" />
                Log Jump
              </h2>
              <CreateJumpLoggingForm />
            </div>
          </aside>
        </main>
      </div>

      <BottomNav onFabClick={() => setDrawerOpen(true)} />

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="text-sky-text font-semibold mb-4">Log Jump</h2>
        <CreateJumpLoggingForm />
      </Drawer>
    </div>
  );
}
