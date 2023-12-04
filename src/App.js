import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const [selectedYear, setSelectedYear] = useState('');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  
  const yearChangeHandler = (event) => {
   
    setSelectedYear(event.target.value);
  };
  const filteredExpenses = selectedYear
  ? expenses.filter(
      (expense) => new Date(expense.date).getFullYear().toString() === selectedYear
    )
  : expenses;

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h1>Lets get Started</h1>
      <form action="">
  <select id="cars" name="cars" onChange={yearChangeHandler} value={selectedYear}>
    <option value="">All Years</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
  </select>
</form>

   {filteredExpenses.length===0 && <p>no expenses found</p>}
      {filteredExpenses.length > 0 && (
        filteredExpenses.map((expense) => (
          <Expense
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      
    </div>
  );
}

export default App;
