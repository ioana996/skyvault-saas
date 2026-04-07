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
    <section className="w-full space-y-6 mb-8" aria-label="Jump statistics">
      <div className="text-center">
        <div className="text-[72px] font-bold leading-none text-sky-text">
          {totalJumps}
        </div>
        <div className="text-sky-text-muted mt-1 text-sm font-medium">
          Total Jumps
        </div>
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
        <Card className="px-4 py-3 flex items-center gap-3">
          <Trophy size={20} className="text-sky-accent" aria-hidden="true" />
          <div>
            <div className="text-sky-text font-semibold text-sm">
              Century Jumper
            </div>
            <div className="text-sky-text-subtle text-xs">100+ jumps</div>
          </div>
        </Card>
      )}
    </section>
  );
};

export default HeroStats;
