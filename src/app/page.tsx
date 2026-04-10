'use client';

import { useState } from 'react';
import HeroStats from './components/HeroStats/HeroStats';
import CreateJumpLoggingForm from './components/CreateJumpLoggingForm/CreateJumpLoggingForm';
import BottomNav from './components/BottomNav/BottomNav';
import Drawer from './components/Drawer/Drawer';
import Sidebar from './components/Sidebar/Sidebar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Card from './components/Card/Card';
import { Trophy } from 'lucide-react';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-bg flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-sky-border">
          <span className="text-lg font-display font-bold text-sky-text tracking-wide">SkyVault</span>
          <ThemeToggle />
        </header>

        <main className="flex-1 flex flex-col lg:flex-row gap-6 p-4 lg:p-8 pb-24 lg:pb-8 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-10 w-80 h-52 rounded-full bg-sky-primary-bright/[0.06] blur-3xl"
          />

          <div className="flex-1 mx-auto w-full lg:mx-0 relative z-10">
            <HeroStats />

            {/* TODO: Replace with jump history */}
            <section
              className="hidden lg:block mt-6"
              aria-label="Recent jumps"
            >
              <Card className="p-6">
                <h2 className="text-sky-text font-display font-bold text-sm mb-3 uppercase tracking-widest">Recent Jumps</h2>
                <p className="text-sky-text-subtle text-sm">
                  Jump history coming soon.
                </p>
              </Card>
            </section>
          </div>

          <aside className="hidden lg:block w-[400px] shrink-0 relative z-10">
            <Card className="p-6 sticky top-8">
              <h2 className="text-sky-text font-display font-bold text-[13px] mb-4 flex items-center gap-2 uppercase tracking-widest">
                <Trophy size={15} className="text-sky-accent" aria-hidden="true" />
                Log Jump
              </h2>
              <CreateJumpLoggingForm />
            </Card>
          </aside>
        </main>
      </div>

      <BottomNav onFabClick={() => setDrawerOpen(true)} />

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="text-sky-text font-display font-bold text-sm mb-4 uppercase tracking-widest">Log Jump</h2>
        <CreateJumpLoggingForm />
      </Drawer>
    </div>
  );
}
