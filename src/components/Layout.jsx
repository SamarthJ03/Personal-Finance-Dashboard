import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Layout({ transactions, setTransactions }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItem = (path, label) => (
    <span
      onClick={() => navigate(path)}
      className={`cursor-pointer text-sm font-medium transition whitespace-nowrap ${
        location.pathname === path
          ? "text-blue-600 border-b-2 border-blue-600 pb-1"
          : "text-gray-600 hover:text-blue-500"
      }`}
    >
      {label}
    </span>
  );

  return (
    <>
      <div className="px-4 py-4 md:px-6 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <img
                src="src/assets/company_logo.png"
                alt="logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-semibold text-gray-700 text-lg">
                FinTrack
              </span>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-8">
              {navItem("/", "Overview")}
              {navItem("/transactions", "Transactions")}
              {navItem("/insights", "Insights")}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-full sm:w-48"
              />
            </div>

            <div className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center cursor-pointer transition">
              <img src="src/assets/search.png" alt="" className="w-4 h-4" />
            </div>

            <div className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center cursor-pointer transition">
              <img src="src/assets/notification.png" alt="" className="w-4 h-4" />
            </div>

            <img
              src="src/assets/avatar.png"
              alt=""
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>

      <Outlet context={{ transactions, setTransactions }} />
    </>
  );
}