import React, { useState } from "react"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import { ExpensesList } from "./ExpensesList"
import { ExpenseChart } from "./ExpenseChart"

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021")

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  const fiterByYearHandler = (yearSelected) => {
    setYear(yearSelected)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onYearSelected={fiterByYearHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
