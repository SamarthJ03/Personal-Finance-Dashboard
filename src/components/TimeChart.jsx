import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function TimeChart({ data }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const incomeTotals = data
    .filter((t) => t.type === "Credit")
    .reduce((acc, t) => {
      acc[months[new Date(t.date).getMonth()]] =
        (acc[months[new Date(t.date).getMonth()]] || 0) + t.amount;
      return acc;
    }, {});

  const expenseTotals = data
    .filter((t) => t.type === "Debit")
    .reduce((acc, t) => {
      acc[months[new Date(t.date).getMonth()]] =
        (acc[months[new Date(t.date).getMonth()]] || 0) + t.amount;
      return acc;
    }, {});

  const chartData = months.map((month) => ({
    month,
    income: incomeTotals[month] || 0,
    expense: expenseTotals[month] || 0,
  }));

  return (
    <div className="bg-white p-4 md:p-5 rounded-2xl shadow-md w-full">
      <h2 className="font-semibold mb-4 text-base md:text-lg text-center">
        Yearly Overview
      </h2>

      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={3} />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}