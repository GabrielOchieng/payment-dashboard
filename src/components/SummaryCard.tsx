// Defination of the props interface
interface SummaryCardProps {
  title: string;
  value: number;
}

// The SummaryCard component
const SummaryCard: React.FC<SummaryCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white text-black p-4 rounded shadow hover:scale-105">
      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold text-green-400">{title}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-2xl font-bold border border-gray-400 rounded-full py-1 px-2">
          Ksh. {value}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
