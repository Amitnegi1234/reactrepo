import React ,{useState} from "react";

import './NewExpense.css';

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

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

    // Clear the form inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
return( 
<div>
    <form  onSubmit={submitHandler}>
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

            <div className="New_Expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
</div>
);
}
export default NewExpense;