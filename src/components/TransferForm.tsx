import React, { useState } from "react";
import { TransferData } from "../types";
import { defaultTransferData } from "../utils/dummyData";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation before submission
    if (transferData.amount <= 0 || !transferData.recipient) {
      toast.error("Please provide a valid recipient and amount.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transferData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      console.log(result);
      toast.success("Transfer initiated successfully!");
    } catch (error) {
      toast.error("There was an error submitting the transfer.");
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 w-[90%] md:w-[60%] mx-auto container border mt-6 rounded shadow-lg"
    >
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
          <option value="National">National</option>
          <option value="KCB">KCB</option>
          <option value="Equity">Equity</option>
          <option value="Cooperative">Cooperative</option>
          <option value="Family">Family</option>
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
