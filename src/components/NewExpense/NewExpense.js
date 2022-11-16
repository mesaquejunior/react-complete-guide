import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"

const NewExpense = ({ onAddExpense }) => {
  const [addNewExpense, setAddNewExpense] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    onAddExpense(expenseData)
  }

  const onToggleAddExpense = () => setAddNewExpense(true)

  if (!addNewExpense) {
    return (
      <div className="new-expense">
        <button onClick={onToggleAddExpense}>Add New Expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        setAddNewExpense={setAddNewExpense}
      />
    </div>
  )
}

export default NewExpense
