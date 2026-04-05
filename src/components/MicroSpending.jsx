export default function MicroSpendingCard({ data }) {

  const debitTx = data.filter(t => t.type === "Debit");

  const totalExpense = debitTx.reduce((sum, t) => sum + t.amount, 0);

  const microTx = debitTx.filter(t => t.amount < 500);

  const microTotal = microTx.reduce((sum, t) => sum + t.amount, 0);

  const microCount = microTx.length;

  const avg = microCount ? Math.round(microTotal / microCount) : 0;

  const percentage = totalExpense
    ? Math.round((microTotal / totalExpense) * 100)
    : 0;

 
  const isHigh = percentage >= 40;
  const isMedium = percentage >= 20;

  const color = isHigh
    ? "red"
    : isMedium
    ? "yellow"
    : "green";

  const textColor =
    color === "red"
      ? "text-red-500"
      : color === "yellow"
      ? "text-yellow-500"
      : "text-green-500";

  const bgColor =
    color === "red"
      ? "bg-red-50"
      : color === "yellow"
      ? "bg-yellow-50"
      : "bg-green-50";

  const barColor =
    color === "red"
      ? "bg-red-500"
      : color === "yellow"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="rounded-xl w-full h-full p-5 md:p-6 shadow-sm flex flex-col gap-5 bg-white">

      <span className="text-lg font-semibold text-gray-700">
        Small Expense Leak
      </span>

      
      <span className={`text-3xl font-bold ${textColor}`}>
        ₹{microTotal}
      </span>

      <p className="text-sm text-gray-500">
        Spent on transactions under ₹500
      </p>

     
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className={`${barColor} h-2 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>

 
      <div className="flex justify-between text-sm text-gray-600">
        <span>{microCount} small transactions</span>
        <span>Avg ₹{avg}</span>
      </div>

      
      <div className={`${bgColor} p-3 rounded-lg text-sm ${textColor}`}>
        ⚠️ These small expenses make up <b>{percentage}%</b> of your total spending.
      </div>

    
      <p className="text-xs text-gray-400">
        {isHigh && "You are overspending on small purchases. Consider tracking daily spends."}
        {!isHigh && isMedium && "Moderate micro spending. Keep an eye on frequent small purchases."}
        {!isMedium && "Great control over small expenses. Keep it up!"}
      </p>

    </div>
  );
}