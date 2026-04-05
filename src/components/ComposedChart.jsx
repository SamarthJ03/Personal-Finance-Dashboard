import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";


const data = [
  { date: "Apr 1", expense: 500, transactions: 1, avg: 500 },
  { date: "Apr 2", expense: 1200, transactions: 2, avg: 600 },
  { date: "Apr 3", expense: 800, transactions: 1, avg: 800 },
  { date: "Apr 4", expense: 2000, transactions: 3, avg: 666 },
  { date: "Apr 5", expense: 1500, transactions: 2, avg: 750 },
  { date: "Apr 6", expense: 700, transactions: 1, avg: 700 },
  { date: "Apr 7", expense: 1800, transactions: 2, avg: 900 },
];

export default function ExpenseChart({ isAnimationActive = true }) {
  return (
    <div className="w-full h-full">
  <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          
          <CartesianGrid stroke="#f5f5f5" />

          <XAxis dataKey="date" />
          <YAxis />

          <Tooltip />
          <Legend />

      
          <Area
            type="monotone"
            dataKey="expense"
            fill="#a7f3d0"
            stroke="#10b981"
            name="Total Expense"
            isAnimationActive={isAnimationActive}
          />

          
          <Bar
            dataKey="transactions"
            barSize={20}
            fill="#6366f1"
            name="Transactions"
            isAnimationActive={isAnimationActive}
          />

         
          <Line
            type="monotone"
            dataKey="avg"
            stroke="#f97316"
            name="Avg Spend"
            isAnimationActive={isAnimationActive}
          />

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}