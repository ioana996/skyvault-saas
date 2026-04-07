import StatCard from './StatCard';
import ProgressStatCard from './ProgressStatCard';

const HeroStats = () => {
  const totalJumps = 127;
  const totalFreefallTime = { hours: 1, minutes: 42, seconds: 15 };
  const daysSinceLastJump = 12;

  const nextLicense = { name: 'C-License', current: 127, required: 200 };
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
      {/* Hero number */}
      <div className="text-center">
        <div className="text-[72px] font-bold leading-none text-sky-text">
          {totalJumps}
        </div>
        <div className="text-sky-text-muted mt-1 text-sm font-medium">
          Total Jumps
        </div>
      </div>

      {/* Secondary stats grid */}
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

      {/* License progress bar */}
      <ProgressStatCard
        title={nextLicense.name}
        label="Next License Goal"
        current={nextLicense.current}
        required={nextLicense.required}
        progress={licenseProgress}
      />

      {/* Achievement badge — emoji is temporary, replaced with Lucide icon in Task 13 */}
      {isCenturyJumper && (
        <div className="bg-sky-surface border border-sky-border rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-sky-accent text-xl" aria-hidden="true">
            🏆
          </span>
          <div>
            <div className="text-sky-text font-semibold text-sm">
              Century Jumper
            </div>
            <div className="text-sky-text-subtle text-xs">100+ jumps</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroStats;
