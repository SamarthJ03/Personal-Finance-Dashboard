import './App.css'
import Home from "./pages/Home"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Transactions from './pages/Transactions'
import Layout from "../src/components/Layout"
import Insights from './pages/Insights'
import { useState } from "react"
import { transactions as initialData } from "./Data/TransactionData"

function App() {

  const [transactions, setTransactions] = useState(initialData)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout transactions={transactions} setTransactions={setTransactions} />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/transactions",
          element: <Transactions/>
        },
        {
          path: "/insights",
          element: <Insights/>
        }
      ]
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App
