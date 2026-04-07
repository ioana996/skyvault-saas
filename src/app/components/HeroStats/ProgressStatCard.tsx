interface ProgressStatCardProps {
  title: string;
  label: string;
  current: number;
  required: number;
  progress: number;
}

const ProgressStatCard = ({ title, label, current, required, progress }: ProgressStatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm min-w-[180px]">
      <div className="text-3xl font-bold text-indigo-600">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
      <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-indigo-500 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-gray-400 mt-1">
        {current} / {required} jumps ({progress}%)
      </div>
    </div>
  );
};

export default ProgressStatCard;
