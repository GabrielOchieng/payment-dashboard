const SkeletonSummaryCard: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 rounded shadow animate-pulse m-4">
      {/* Skeleton Title */}
      <div className="mb-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>

      {/* Skeleton Value */}
      <div className="mb-2">
        <div className="h-8 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Skeleton Description */}
      <div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default SkeletonSummaryCard;
