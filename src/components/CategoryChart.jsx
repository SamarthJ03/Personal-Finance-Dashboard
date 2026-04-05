import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
];

export default function CategoryChart({ data }) {
  const categoryTotals = data
    .filter((t) => t.type === "Debit")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const categoryArray = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  );

  return (
    <div className="bg-white p-4 md:p-5 rounded-2xl shadow-md w-full">
      <h2 className="font-semibold mb-4 text-base md:text-lg text-center">
        Spending Overview
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-[260px] h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryArray}
                dataKey="amount"
                nameKey="category"
                outerRadius={90}
                innerRadius={60}
              >
                {categoryArray.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `₹${v}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 w-full flex flex-col gap-3">
          {categoryArray.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />
              <div className="flex justify-between w-full gap-4 text-sm">
                <span className="truncate text-gray-700">{item.category}</span>
                <span className="font-medium text-gray-900 whitespace-nowrap">
                  ₹{item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}