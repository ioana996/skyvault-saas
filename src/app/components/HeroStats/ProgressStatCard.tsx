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
    <Card className="p-6 min-w-[180px]">
      <div className="text-3xl font-bold text-sky-primary">{title}</div>
      <div className="text-sm text-sky-text-muted mt-1">{label}</div>
      <div
        className="mt-3 w-full bg-sky-surface-mid rounded-full h-2"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title} progress: ${progress}%`}
      >
        <div
          className="bg-sky-primary h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-sky-text-subtle mt-1">
        {current} / {required} jumps ({progress}%)
      </div>
    </Card>
  );
};

export default ProgressStatCard;
