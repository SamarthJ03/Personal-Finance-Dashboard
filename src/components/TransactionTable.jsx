import { useNavigate } from "react-router-dom";

export default function TransactionTable({ data }) {
  const sortedData = [...data].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const navigate = useNavigate();
  const topData = sortedData.slice(0, 8);

  return (
    <div className="bg-white p-4 md:p-5 rounded-2xl shadow-md h-full">
      <div className="flex justify-between items-center gap-3 mb-4">
        <h2 className="font-semibold text-base md:text-lg">
          Recent Transactions
        </h2>

        <button
          onClick={() => navigate("/transactions")}
          className="text-sm font-medium text-blue-600 hover:underline whitespace-nowrap"
        >
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left">
          <thead>
            <tr className="border-b text-gray-500 text-sm">
              <th className="py-2 pr-4">Date</th>
              <th className="py-2 pr-4">Category</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2 pr-4">Type</th>
            </tr>
          </thead>

          <tbody>
            {topData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 pr-4 text-sm whitespace-nowrap">
                  {item.date}
                </td>
                <td className="py-3 pr-4 font-medium whitespace-nowrap">
                  {item.category}
                </td>
                <td className="py-3 pr-4 font-semibold whitespace-nowrap">
                  ₹{item.amount}
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === "Credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}