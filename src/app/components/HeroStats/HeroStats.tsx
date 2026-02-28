const HeroStats = () => {
  const totalJumps = 127;
  const totalFreefallTime = { hours: 1, minutes: 42, seconds: 15 };
  const daysSinceLastJump = 12;

  // License progress mocked data
  const nextLicense = { name: "C-License", current: 127, required: 200 };
  const licenseProgress = Math.min(
    Math.round((nextLicense.current / nextLicense.required) * 100),
    100
  );

  return (
    <div className="flex gap-8 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-indigo-600">{totalJumps}</div>
        <div className="text-sm text-gray-600 mt-1">Total Jumps</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-indigo-600">
          {totalFreefallTime.hours}:{String(totalFreefallTime.minutes).padStart(2, '0')}:{String(totalFreefallTime.seconds).padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-600 mt-1">Total Freefall Time</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-indigo-600">{daysSinceLastJump}</div>
        <div className="text-sm text-gray-600 mt-1">Days Since Last Jump</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm min-w-[180px]">
        <div className="text-3xl font-bold text-indigo-600">{nextLicense.name}</div>
        <div className="text-sm text-gray-600 mt-1">Next License Goal</div>
        <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all"
            style={{ width: `${licenseProgress}%` }}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {nextLicense.current} / {nextLicense.required} jumps ({licenseProgress}%)
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
