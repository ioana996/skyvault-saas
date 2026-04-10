import { Trophy } from 'lucide-react';
import StatCard from './StatCard';
import ProgressStatCard from './ProgressStatCard';
import Card from '../Card/Card';
import { mockStats } from '@/app/data/stats';

const HeroStats = () => {
  const { totalJumps, totalFreefallTime, daysSinceLastJump, nextLicense } = mockStats;
  const licenseProgress = Math.min(
    Math.round((nextLicense.current / nextLicense.required) * 100),
    100
  );

  const freefallTimeFormatted = `${totalFreefallTime.hours}:${String(
    totalFreefallTime.minutes
  ).padStart(2, '0')}:${String(totalFreefallTime.seconds).padStart(2, '0')}`;

  const isCenturyJumper = totalJumps >= 100;

  return (
    <section className="w-full space-y-4 mb-8" aria-label="Jump statistics">
      <div className="text-center py-2">
        <div className="text-[10px] font-medium text-sky-primary/60 tracking-[0.25em] uppercase mb-2">
          Total Jumps
        </div>
        <div className="relative inline-block">
          <div className="text-[80px] font-display font-bold leading-none text-sky-text tracking-tighter">
            {totalJumps}
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent via-sky-primary to-transparent" />
        </div>
        {isCenturyJumper && (
          <div className="text-[11px] font-medium text-sky-primary/40 tracking-[0.2em] mt-3" aria-hidden="true">
            ✦
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatCard value={freefallTimeFormatted} label="Total Freefall" />
        <StatCard value={daysSinceLastJump} label="Days Since Jump" />
        <div className="col-span-2 sm:col-span-1">
          <StatCard
            value={`${licenseProgress}%`}
            label={`${nextLicense.name} Progress`}
          />
        </div>
      </div>

      <ProgressStatCard
        title={nextLicense.name}
        label="Next License Goal"
        current={nextLicense.current}
        required={nextLicense.required}
        progress={licenseProgress}
      />

      {isCenturyJumper && (
        <Card className="px-4 py-3 flex items-center gap-3 border-sky-accent/15 bg-sky-accent/[0.03]">
          <Trophy size={18} className="text-sky-accent shrink-0" aria-hidden="true" />
          <div>
            <div className="text-sky-text font-display font-bold text-[13px]">
              Century Jumper
            </div>
            <div className="text-sky-text-subtle text-[10px] uppercase tracking-wider mt-0.5">100+ jumps</div>
          </div>
        </Card>
      )}
    </section>
  );
};

export default HeroStats;
