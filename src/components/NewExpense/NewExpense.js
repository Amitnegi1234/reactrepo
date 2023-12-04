import React, { useState } from "react";
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [message, setMessage] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    // Pass the expenseData to the parent component
    props.onAddExpense(expenseData);

    // Update the message
    setMessage('Expense added successfully!');

    // Clear the form inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    // Set isEditing to false after submitting
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    // Clear the form inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    // Set isEditing to false when canceling
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {isEditing && (
          <div className="New_Expense_controls">
            <div className="New_Expense_control form-control">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="New_Expense_control form-control">
              <label>Amount</label>
              <input type="number" min={'0.01'} step={'0.01'} value={enteredAmount} onChange={amountChangeHandler}/>
            </div>

            <div className="New_Expense_control form-control">
              <label>Date</label>
              <input type="date" min={'2020-3-20'} max={'2023-10-15'} value={enteredDate} onChange={dateChangeHandler}/>
            </div>
          </div>
        )}

        <div className="New_Expense_actions">
          {!isEditing && <button type="button" onClick={startEditingHandler}>Add Expense</button>}
          {isEditing && <button type="button" onClick={cancelEditingHandler}>Cancel</button>}
          {isEditing && <button type="submit">Save Expense</button>}
        </div>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default NewExpense;
