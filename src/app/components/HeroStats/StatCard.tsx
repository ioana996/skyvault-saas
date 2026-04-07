interface StatCardProps {
  value: string | number;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-3xl font-bold text-indigo-600">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
};

export default StatCard;
