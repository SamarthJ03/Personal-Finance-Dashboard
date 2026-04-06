import { useState, useEffect } from "react";

export default function TransactionCard({
  category,
  amount,
  type,
  note,
  role = "User",
  isNew = false,
}) {
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    type: "Debit",
    note: "",
  });

  useEffect(() => {
    if (!isNew) {
      setFormData({
        category,
        amount,
        type,
        note,
      });
    }
  }, [category, amount, type, note, isNew]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
<div
  className={`rounded-xl p-5 md:p-6 w-full max-w-md shadow-xl flex flex-col gap-4 border-l-4 ${
    formData.type === "Credit"
      ? "bg-green-50 border-green-500"
      : "bg-red-50 border-red-500"
  }`}
>
      <span className="text-lg font-semibold flex items-center gap-2">
        <img src="/assets/money.png" alt="" className="w-6 h-6" />
        {isNew ? "Add Transaction" : "Transaction Details"}
      </span>

      {role === "User" && (
        <div className="flex flex-col text-left gap-3">
          <span className="text-sm text-gray-500">
            Category: <b className="text-gray-900">{category}</b>
          </span>

          <span className="text-sm text-gray-500">
            Amount: <b className="text-gray-900">{amount}</b>
          </span>

          <span className="text-sm text-gray-500">
            Type: <b className="text-gray-900">{type}</b>
          </span>

          <span className="text-sm text-gray-500 break-words">
            Note: <b className="text-gray-900">{note}</b>
          </span>
        </div>
      )}

     
      {role === "Admin" && (
        <div className="flex flex-col gap-3">

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border px-3 py-2 rounded-lg text-sm"
          />

          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="border px-3 py-2 rounded-lg text-sm"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg text-sm"
          >
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>

          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Note"
            className="border px-3 py-2 rounded-lg text-sm"
          />

          <button className="bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition">
            {isNew ? "Add" : "Save"}
          </button>
        </div>
      )}
    </div>
  );
}