# 💸 FinTrack – Personal Finance Dashboard

An intuitive and responsive finance dashboard designed to simplify financial tracking, visualize spending behavior, and provide actionable insights.

🚀 **Live Demo:** [https://personal-finance-dashboard-six-lac.vercel.app/](https://personal-finance-dashboard-six-lac.vercel.app/)
📦 **GitHub Repository:** [https://github.com/SamarthJ03/Personal-Finance-Dashboard](https://github.com/SamarthJ03/Personal-Finance-Dashboard)

## 🚀 Getting Started

```bash
git clone https://github.com/SamarthJ03/Personal-Finance-Dashboard
cd Personal-Finance-Dashboard
npm install
npm run dev
```

## ⚙️ Tech Stack

- **Frontend:** Vite + React.js  
- **Routing:** React Router  
- **Styling:** Tailwind CSS  
- **State Management:** React Hooks + Outlet Context  
- **Charts:** Recharts  
- **Deployment:** Vercel

## ✨ Key Features

- 📊 Financial dashboard overview  
- 📈 Time-based and category-based visualizations  
- 💳 Transaction management (add, edit, view)  
- 🔐 Role-based UI (Admin / Viewer)  
- 📊 Insights and spending analysis  
- ⚡ Real-time UI updates  
- 📱 Responsive design

## 📌 Assumptions

- Data is static and managed on the frontend  
- Role-based behavior is simulated for demonstration purposes  
- No backend or authentication is implemented  

<img width="1918" height="872" alt="image" src="https://github.com/user-attachments/assets/cddb12a0-68c9-4696-b8bb-c8b9c86d284e" />

## 📊 Dashboard Overview

The Overview section provides a high-level summary of the user's financial status, designed for quick insights and clarity.

### 💰 Key Financial Metrics
- **Total Balance** – Displays the current available balance.
- **Yearly Income** – Total income accumulated over the year.
- **Yearly Costs** – Total expenses incurred.
- **Yearly Savings** – Net savings calculated from income and expenses.

These summary cards allow users to quickly understand their financial standing at a glance.

---

### 📈 Yearly Financial Trend
A time-based line chart visualizes:
- Monthly **income trends**
- Monthly **expense trends**

This helps users:
- Track financial growth over time  
- Identify spending patterns  
- Compare income vs expenses across months  

---

### 🥧 Spending Breakdown
A categorical donut chart represents how expenses are distributed across different categories such as:
- Food  
- Shopping  
- Travel  
- Bills  
- Entertainment  

This enables users to:
- Understand where their money is going  
- Identify high-spending categories  
- Make better budgeting decisions  

---

### 🧾 Recent Transactions
A quick preview of the latest transactions including:
- Date  
- Category  
- Amount  

This section provides:
- Immediate visibility into recent activity  
- Easy access to detailed transaction history via the **"View All"** option  

---

### 🎯 Design Focus
- Clean and minimal layout for readability  
- Visual hierarchy to prioritize important data  
- Consistent color coding for better understanding  
- Responsive card-based structure  

---


<img width="1918" height="886" alt="image" src="https://github.com/user-attachments/assets/17e077df-e015-4e91-b97b-025d273b2ef4" />
<img width="1918" height="877" alt="image" src="https://github.com/user-attachments/assets/28ec9f96-1169-4260-9e2a-f1ab543efa5b" />
<img width="1917" height="887" alt="image" src="https://github.com/user-attachments/assets/58880650-486b-4351-9e6b-f0e04b9148b8" />

## 💳 Transactions Management

The Transactions section provides a detailed and interactive view of all financial activities, with support for filtering, role-based actions, and transaction management.

---

### 🔍 Search, Filter & Sort
Users can easily explore transactions using:
- **Search bar** (by category or notes)
- **Category filter**
- **Sorting options**

This allows quick access to specific transactions without scrolling through the entire dataset.

---

### 📋 Transaction Table
Each transaction is displayed with:
- **Date**
- **Category**
- **Amount**
- **Type** (Credit/Debit with visual indicators)
- **Notes**

The table is designed for clarity and quick scanning of financial activity.

---

### 👁️ Transaction Details View
- Clicking on a transaction opens a **detailed modal**
- Displays complete information including:
  - Category
  - Amount
  - Type
  - Notes

This enables users to inspect transactions without leaving the page.

---

### 🔐 Role-Based UI (RBAC Simulation)

The interface dynamically changes based on the selected role:

#### 👤 Viewer
- Can **view transactions only**
- No modification access

#### 🛠️ Admin
- Can **add and edit transactions**
- Full interaction with transaction data

A role switcher is provided in the UI to demonstrate this behavior.

---

### ✏️ Edit Transaction (Admin Only)
- Admins can update existing transactions
- Uses the same modal interface for consistency
- Allows modification of:
  - Category
  - Amount
  - Type
  - Notes

This ensures a smooth and intuitive editing experience.

---

### ➕ Add New Transaction (Admin Only)
Admins can add transactions through a modal form:
- Category input  
- Amount input  
- Type selection (Credit/Debit)  
- Optional notes  

This demonstrates basic CRUD capability on the frontend.

---

### 🎯 Design Focus
- Clean tabular layout for readability  
- Modal-based interaction for better UX  
- Visual distinction between Credit and Debit  
- Role-based access simulation for realistic behavior  

---


<img width="1918" height="767" alt="image" src="https://github.com/user-attachments/assets/35fbed30-26be-467c-8e78-8be0bd801f6a" />
## 📊 Insights & Analytics

The Insights section transforms raw transaction data into meaningful and actionable observations, helping users better understand their financial behavior.

---

### 🏆 Highest Spending Category
- Identifies the category with the **highest total expenditure**
- Displays total amount spent in that category
- Includes a trend visualization to show spending behavior over time

This helps users quickly recognize where most of their money is being spent.

---

### 📈 Spending Pattern Analysis
- Compares spending between **weekdays and weekends**
- Visualized using a pie chart for easy understanding

Key takeaway:
- Highlights behavioral patterns (e.g., higher weekday spending)

This enables users to adjust habits and plan expenses more effectively.

---

### ⚠️ Small Expense Leak Detection
- Tracks transactions below a certain threshold (e.g., ₹500)
- Displays:
  - Total spent on small transactions  
  - Number of such transactions  
  - Average spend  

Additional insights:
- Percentage contribution to total spending  
- Contextual message indicating financial impact  

This feature helps users identify hidden spending habits that often go unnoticed.

---

### 💡 Insight-Driven Design
- Focus on **actionable insights**, not just raw data  
- Clear visualizations paired with explanations  
- Encourages better financial decision-making  

---

## 🧠 State Management

The application uses a simple and effective state management approach with **React Hooks** and **React Router Outlet context**, tailored to the scope of this frontend-focused dashboard.

---

### 📦 Centralized Transaction State

All transaction data is managed at the top-level (`App.jsx`) using React’s `useState`:

```js
const [transactions, setTransactions] = useState(initialData)
```

* Acts as a **single source of truth**
* Ensures consistency across all pages
* Makes updates predictable and easy to manage

---

### 🔗 State Sharing via Layout

The `Layout` component acts as a shared wrapper for all routes and distributes state using **React Router’s Outlet context**:

```js
<Outlet context={{ transactions, setTransactions }} />
```

This allows child pages (Overview, Transactions, Insights) to:

* Access shared transaction data
* Update state without prop drilling
* Remain modular and loosely coupled

---

### 🔄 Real-Time UI Synchronization

Any state update (such as adding or editing a transaction):

* Instantly reflects across all sections
* Keeps Overview, Transactions, and Insights in sync

This ensures a **reactive and seamless user experience**.

---

### ✅ Why This Approach Works Well for This App

This dashboard is:

* Built around a **single primary data source (transactions)**
* Moderate in complexity with limited cross-component state logic

Because of this:

* `useState` keeps the implementation **lightweight and easy to understand**
* Avoids over-engineering with external libraries like Redux
* `Outlet context` provides a **clean and scalable way to share state across routes**
* Reduces boilerplate while maintaining clarity

---

## 🏁 Conclusion

This project demonstrates the ability to design and build a clean, interactive, and user-friendly financial dashboard using modern frontend tools.  

The focus was on simplicity, usability, and meaningful data representation while maintaining scalable and maintainable code structure.


