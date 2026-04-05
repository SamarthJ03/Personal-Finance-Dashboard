import Card from "../components/Card";
import TimeChart from "../components/TimeChart";
import CategoryChart from "../components/CategoryChart";
import TransactionTable from "../components/TransactionTable";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { transactions } = useOutletContext();

  const yearlyIncome = transactions
    .filter((t) => t.type === "Credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const yearlyExpense = transactions
    .filter((t) => t.type === "Debit")
    .reduce((sum, t) => sum + t.amount, 0);

  const yearlySavings = yearlyIncome - yearlyExpense;

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
            <Card
              img="src/assets/money.png"
              title="Total Balance"
              amount="₹750000"
            />
            <Card
              img="src/assets/arrow.png"
              title="Yearly Income"
              amount={`₹${yearlyIncome}`}
            />
            <Card
              img="src/assets/decrease.png"
              title="Yearly Costs"
              amount={`₹${yearlyExpense}`}
            />
            <Card
              img="src/assets/salary.png"
              title="Yearly Savings"
              amount={`₹${yearlySavings}`}
            />
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
            <TimeChart data={transactions} />
            <CategoryChart data={transactions} />
          </div>
        </div>

        <div className="xl:col-span-1">
          <TransactionTable data={transactions} />
        </div>
      </div>
    </div>
  );
}