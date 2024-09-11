import React, { useState, useEffect } from "react";
import { Transaction } from "../types";
import TableSkeleton from "./TableSkeleton";

const TransactionsList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [searchId, setSearchId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetching of data from JSON file with a delay
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay of 2 seconds
        const response = await fetch("/transactions.json");
        // const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter transactions based on status and search ID
    const filtered = transactions?.filter((transaction) => {
      const matchesStatus =
        statusFilter === "All" || transaction.status === statusFilter;
      const matchesSearch =
        searchId === "" || transaction.id.toString().includes(searchId);
      return matchesStatus && matchesSearch;
    });

    setFilteredTransactions(filtered);
  }, [statusFilter, searchId, transactions]);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Search by Transaction ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded text-black"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div className="overflow-x-scroll sm:overflow-x-hidden">
        <table className="min-w-full border-collapse border border-gray-200 ">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Transaction ID</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions?.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border border-gray-300 p-2 text-center">
                    {transaction.id}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td
                    className={`border border-gray-300 p-2 text-center ${
                      transaction.type === "Transfer"
                        ? "text-orange-500"
                        : transaction.type === "Collection"
                        ? "text-teal-500"
                        : "text-indigo-500"
                    }`}
                  >
                    {transaction.type}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td
                    className={`border border-gray-300 p-2 text-center ${
                      transaction.status === "Completed"
                        ? "text-green-500"
                        : transaction.status === "Pending"
                        ? "text-blue-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="border border-gray-300 p-2 text-center"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList;
