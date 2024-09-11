import React, { useState, useEffect } from "react";
import SummaryCard from "./SummaryCard";
import { calculateSummary, transactions } from "../utils/dummyData";
import SkeletonSummaryCard from "./SkeletonSummaryCard";

// Definition of DashboardSummary type
type DashboardSummary = {
  totalTransactions: number;
  totalTransfers: number;
  totalCollections: number;
  pendingPayouts: number;
};

// Dashboard component
const DashboardOverview: React.FC = () => {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    // Simulate API call or other async operation
    setTimeout(() => {
      const summaryData = calculateSummary(transactions);
      setSummary(summaryData);
    }, 1000);
  }, []);

  if (!summary) {
    return (
      <div className="flex">
        <div className="w-[25%]">
          <SkeletonSummaryCard />
        </div>
        <div className="w-[25%]">
          <SkeletonSummaryCard />
        </div>
        <div className="w-[25%]">
          <SkeletonSummaryCard />
        </div>
        <div className="w-[25%]">
          <SkeletonSummaryCard />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div>
        <h1 className="text-center font-bold text-3xl mb-5 ">
          Summary Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Transactions"
          value={summary.totalTransactions}
        />
        <SummaryCard title="Total Transfers" value={summary.totalTransfers} />
        <SummaryCard
          title="Total Collections"
          value={summary.totalCollections}
        />
        <SummaryCard title="Pending Payouts" value={summary.pendingPayouts} />
      </div>
    </div>
  );
};

export default DashboardOverview;
