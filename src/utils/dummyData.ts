import { Transaction, TransferData } from "../types";

export const transactions: Transaction[] = [
  {
    id: "TX1234567890",
    amount: 150.75,
    type: "Transfer",
    date: "2024-09-01T14:23:00Z",
    status: "Completed",
  },
  {
    id: "TX1234567891",
    amount: 245.0,
    type: "Collection",
    date: "2024-09-05T08:45:00Z",
    status: "Pending",
  },
  {
    id: "TX1234567892",
    amount: 100.0,
    type: "Transfer",
    date: "2024-09-07T12:30:00Z",
    status: "Failed",
  },
  {
    id: "TX1234567893",
    amount: 320.5,
    type: "Refund",
    date: "2024-09-10T15:00:00Z",
    status: "Completed",
  },
];

// utility function to calculate summary
export const calculateSummary = (transactions: Transaction[]) => {
  let totalTransactions = 0;
  let totalTransfers = 0;
  let totalCollections = 0;
  let pendingPayouts = 0;

  transactions.forEach((transaction) => {
    totalTransactions += 1;
    if (transaction.type === "Transfer") {
      totalTransfers += transaction.amount;
    } else if (transaction.type === "Collection") {
      totalCollections += transaction.amount;
      if (transaction.status === "Pending") {
        pendingPayouts += 1;
      }
    }
  });

  return {
    totalTransactions,
    totalTransfers,
    totalCollections,
    pendingPayouts,
  };
};

export const defaultTransferData: TransferData = {
  recipient: "",
  amount: 0,
  transferType: "Bank",
  description: "",
};
