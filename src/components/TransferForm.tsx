// TransferForm.tsx
import React, { useState } from "react";
import { defaultTransferData } from "../utils/dummyData";
import { toast } from "react-hot-toast";
import { TransferData } from "../types";

const TransferForm: React.FC = () => {
  const [transferData, setTransferData] =
    useState<TransferData>(defaultTransferData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTransferData({
      ...transferData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate and submit the transfer data
    if (transferData.amount <= 0 || !transferData.recipient) {
      toast.error("Please provide valid recipient and amount.");
      return;
    }
    // Simulate form submission
    toast.success("Transfer initiated successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label
          htmlFor="recipient"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient
        </label>
        <input
          id="recipient"
          name="recipient"
          type="text"
          value={transferData.recipient}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={transferData.amount}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="transferType"
          className="block text-sm font-medium text-gray-700"
        >
          Transfer Type
        </label>
        <select
          id="transferType"
          name="transferType"
          value={transferData.transferType}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="Bank">Bank</option>
          <option value="Mobile">Mobile</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={transferData.description}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default TransferForm;
