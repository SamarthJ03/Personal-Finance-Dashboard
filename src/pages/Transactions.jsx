import { useOutletContext } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import { useState } from "react";

export default function Transactions() {
  const [selectedTx, setSelectedTx] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [sortBy, setSortBy] = useState({
    key: "",
    direction: "desc",
  });

  const [role, setRole] = useState("User");
  const [filterType, setFilterType] = useState("All");
  const [search, setSearch] = useState("");

  const { transactions } = useOutletContext();

  const handleSort = (key) => {
    setSortBy((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      } else {
        return {
          key,
          direction: "desc",
        };
      }
    });
  };


  const processedData = [...transactions]
    .filter((item) => {
      if (filterType !== "All" && item.type !== filterType) return false;

      if (
        !item.category.toLowerCase().includes(search.toLowerCase()) &&
        !item.note.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (!sortBy.key) return 0;

      let diff = 0;

      if (sortBy.key === "amount") diff = a.amount - b.amount;
      if (sortBy.key === "date") diff = new Date(a.date) - new Date(b.date);

      return sortBy.direction === "asc" ? diff : -diff;
    });

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl h-full">

      
      <div className="flex flex-wrap gap-3 md:gap-4 mb-4 items-center">

        <input
          type="text"
          placeholder="Search by category or note"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm w-full sm:w-auto flex-1 min-w-[180px]"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm w-full sm:w-auto"
        >
          <option value="All">All</option>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>

        <select
          value={sortBy.key}
          onChange={(e) => handleSort(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm w-full sm:w-auto"
        >
          <option value="">Sort By</option>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm w-full sm:w-auto"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {role === "Admin" && (
          <span
            onClick={() => setShowAddForm(true)}
            className="border px-3 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-100 w-full sm:w-auto text-center"
          >
            + Add Transaction
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-left">
          <thead>
            <tr className="border-b font-semibold text-sm md:text-base text-gray-600">
              <th onClick={() => handleSort("date")} className="py-3 px-4 cursor-pointer whitespace-nowrap">
                Date {sortBy.key === "date" ? (sortBy.direction === "asc" ? "↑" : "↓") : ""}
              </th>

              <th className="py-3 px-4 whitespace-nowrap">Category</th>

              <th onClick={() => handleSort("amount")} className="py-3 px-4 cursor-pointer whitespace-nowrap">
                Amount {sortBy.key === "amount" ? (sortBy.direction === "asc" ? "↑" : "↓") : ""}
              </th>

              <th className="py-3 px-4 whitespace-nowrap">Type</th>

              <th className="py-3 px-4 min-w-[200px]">Note</th>
            </tr>
          </thead>

          <tbody>
            {processedData.map((item) => (
              <tr
                key={item.id}
                onClick={() => setSelectedTx(item)}
                className={`border-b cursor-pointer transition ${item.type === "Credit"
                    ? "hover:bg-green-50"
                    : "hover:bg-red-50"
                  }`}
              >
                <td className="py-4 px-4 whitespace-nowrap">{item.date}</td>
                <td className="py-4 px-4 font-medium whitespace-nowrap">{item.category}</td>
                <td className="py-4 px-4 font-semibold whitespace-nowrap">₹{item.amount}</td>

                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${item.type === "Credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="py-4 px-4 truncate max-w-[250px]">
                  {item.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   
      {(selectedTx || showAddForm) && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 p-4"
          onClick={() => {
            setSelectedTx(null);
            setShowAddForm(false);
          }}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedTx(null);
                setShowAddForm(false);
              }}
              className="absolute -top-3 -right-3 bg-white w-8 h-8 rounded-full shadow-md"
            >
              ✕
            </button>

            <TransactionCard
              role={role}
              isNew={showAddForm}
              category={selectedTx?.category}
              amount={selectedTx ? selectedTx.amount : ""}
              type={selectedTx?.type}
              note={selectedTx?.note}
            />
          </div>
        </div>
      )}
    </div>

  );
}