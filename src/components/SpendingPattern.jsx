import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, } from "recharts";

export default function SpendingPatternCard({ data }) {

  const debitTx = data.filter(t => t.type === "Debit");

  let weekdayTotal = 0;
  let weekendTotal = 0;

  debitTx.forEach(t => {
    const day = new Date(t.date).getDay();

    if (day === 0 || day === 6) {
      weekendTotal += t.amount;
    } else {
      weekdayTotal += t.amount;
    }
  });

  const chartData = [
    { name: "Weekdays", value: weekdayTotal },
    { name: "Weekend", value: weekendTotal },
  ];

  const isWeekendHigher = weekendTotal > weekdayTotal;

  return (
    <div className="rounded-xl p-5 md:p-6 w-full h-full shadow-sm flex flex-col gap-4 bg-white">

      <span className="text-lg font-semibold text-gray-700">
        Spending Pattern
      </span>

     <div className="w-full h-[220px] md:h-[250px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={chartData} dataKey="value" outerRadius={80} label>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={["#3b82f6", "#f97316"][index]} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `₹${v}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500">
        {isWeekendHigher
          ? "You tend to spend more on weekends."
          : "Your spending is higher on weekdays."}
      </p>

    </div>
  );
}