import Card from '../Card/Card';

interface StatCardProps {
  value: string | number;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Card className="p-6">
      <div className="text-3xl font-bold text-sky-primary">{value}</div>
      <div className="text-sm text-sky-text-muted mt-1">{label}</div>
    </Card>
  );
};

export default StatCard;
