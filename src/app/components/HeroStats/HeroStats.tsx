import StatCard from "./StatCard";
import ProgressStatCard from "./ProgressStatCard";

const HeroStats = () => {
  const totalJumps = 127;
  const totalFreefallTime = { hours: 1, minutes: 42, seconds: 15 };
  const daysSinceLastJump = 12;

  const nextLicense = { name: "C-License", current: 127, required: 200 };
  const licenseProgress = Math.min(
    Math.round((nextLicense.current / nextLicense.required) * 100),
    100
  );

  const freefallTimeFormatted = `${totalFreefallTime.hours}:${String(totalFreefallTime.minutes).padStart(2, '0')}:${String(totalFreefallTime.seconds).padStart(2, '0')}`;

  return (
    <div className="flex gap-8 mb-8">
      <StatCard value={totalJumps} label="Total Jumps" />
      <StatCard value={freefallTimeFormatted} label="Total Freefall Time" />
      <StatCard value={daysSinceLastJump} label="Days Since Last Jump" />
      <ProgressStatCard
        title={nextLicense.name}
        label="Next License Goal"
        current={nextLicense.current}
        required={nextLicense.required}
        progress={licenseProgress}
      />
    </div>
  );
};

export default HeroStats;
