// Define the props interface
interface SummaryCardProps {
  title: string;
  value: number;
  description?: string;
}

// The SummaryCard component
const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-2xl font-bold">Ksh. {value}</p>
      </div>
      {description && (
        <div className="flex justify-between">
          <p className="text-gray-500">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
