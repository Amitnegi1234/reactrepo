import './Expense.css';
import Expensedate from './Expensedate';
import React,{useState} from 'react';


function Expense(props){
    const [title,settitle]= useState(props.title);
   
const click = ()=>{
    settitle("changed")
    console.log("clicked")
}
    return(
        <div>
        <div className='expense-item'>
         <Expensedate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
        <button onClick={click}>Change title</button>
        </div>
     
        </div>
         
    );
}
 export default Expense;