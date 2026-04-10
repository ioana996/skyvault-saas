import Card from '../Card/Card';

interface StatCardProps {
  value: string | number;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Card className="p-4">
      <div className="text-2xl font-display font-bold text-sky-text tracking-tight">{value}</div>
      <div className="text-[10px] font-medium text-sky-text-subtle mt-1 uppercase tracking-widest">{label}</div>
    </Card>
  );
};

export default StatCard;
