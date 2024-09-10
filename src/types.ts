//Dashboard

export interface DashboardSummary {
  totalTransactions: number;
  totalTransfers: number;
  totalCollections: number;
  pendingPayouts: number;
}

//Transaction
export interface Transaction {
  id: string;
  amount: number;
  type: "Transfer" | "Collection" | "Refund";
  date: string;
  status: "Completed" | "Pending" | "Failed";
}

//Transfer data
export interface TransferData {
  recipient: string;
  amount: number;
  transferType: "Bank" | "Mobile" | "PayPal";
  description: string;
}
