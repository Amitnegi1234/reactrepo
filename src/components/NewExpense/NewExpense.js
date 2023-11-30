import React ,{useState} from "react";

import './NewExpense.css';
const NewExpense=()=>{
   const [enteredTitle,setEnteredTitle]=useState('');
   const [enteredAmount,setEnteredAmount]=useState('');
   const [enteredDate,setEnteredDate]=useState('');

    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler =event =>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler =event =>{
        setEnteredDate(event.target.value)
    }

    const submithandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date:new Date(enteredDate)
        };

        console.log(expenseData);
    };
return( 
<div>
    <form onSubmit={submithandler}>
        <div className="New_Expense_controls">
            <div className="New_Expense_control form-control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>

            <div className="New_Expense_control form-control">
                <label>Amount</label>
                <input type="number" min={'0.01'} step={'0.01'} onChange={amountChangeHandler}/>
            </div>

            <div className="New_Expense_control form-control">
                <label>Date</label>
                <input type="date" min={'2020-3-20'} max={'2023-10-15'} onChange={dateChangeHandler}/>
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