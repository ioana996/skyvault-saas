import Card from '../Card/Card';

interface ProgressStatCardProps {
  title: string;
  label: string;
  current: number;
  required: number;
  progress: number;
}

const ProgressStatCard = ({
  title,
  label,
  current,
  required,
  progress,
}: ProgressStatCardProps) => {
  return (
    <Card className="p-4 min-w-[180px]">
      <div className="flex items-baseline justify-between mb-2">
        <div className="text-base font-display font-bold text-sky-text tracking-tight">{title}</div>
        <div className="text-[10px] font-medium text-sky-text-subtle uppercase tracking-widest">{label}</div>
      </div>
      <div
        className="w-full bg-sky-surface-high rounded-full h-[3px]"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title} progress: ${progress}%`}
      >
        <div
          className="bg-gradient-to-r from-sky-primary to-sky-primary-bright h-[3px] rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-[10px] text-sky-text-subtle mt-1.5">
        {current} / {required} jumps ({progress}%)
      </div>
    </Card>
  );
};

export default ProgressStatCard;
