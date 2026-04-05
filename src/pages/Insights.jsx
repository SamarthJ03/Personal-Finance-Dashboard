import { useOutletContext } from "react-router-dom";
import HighestSpendingCard from "../components/HighestSpendingCard";
import MicroSpendingCard from "../components/MicroSpending";
import SpendingPatternCard from "../components/SpendingPattern";

export default function Insights() {
  const { transactions } = useOutletContext();

  const categoryTotals = transactions
    .filter((t) => t.type === "Debit")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const sorted = Object.entries(categoryTotals)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);

  const top = sorted.slice(0, 1)[0];

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <HighestSpendingCard
          title={top?.category}
          amount={top?.amount}
        />

        <SpendingPatternCard data={transactions} />

        <MicroSpendingCard data={transactions} />
      </div>
    </div>
  );
}