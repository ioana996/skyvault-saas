interface StatCardProps {
  value: string | number;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="bg-sky-surface border border-sky-border p-6 rounded-xl">
      <div className="text-3xl font-bold text-sky-primary">{value}</div>
      <div className="text-sm text-sky-text-muted mt-1">{label}</div>
    </div>
  );
};

export default StatCard;
