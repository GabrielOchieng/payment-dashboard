const TableSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center space-x-4">
        <div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/6 h-8 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {["Transaction ID", "Amount", "Type", "Date", "Status"].map(
              (header) => (
                <th key={header} className="border border-gray-300 p-2">
                  <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              {Array.from({ length: 5 }).map((_, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 p-2">
                  <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
