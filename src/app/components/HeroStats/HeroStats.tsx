const HeroStats = () => {
  const totalJumps = 127;
  const totalFreefallTime = { hours: 1, minutes: 42, seconds: 15 };
  const daysSinceLastJump = 12;

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
    </div>
  );
};

export default HeroStats;
