import React from 'react'
import './App.css';
import { GlobalContext } from "./globalcontext";



export const AddTransection = () => {
  const [text, settext]=React.useState('');
  const [amount, setamount]=React.useState('');
  const {addTransaction}=   React.useContext(GlobalContext)
  const onsubmit = e =>{
    e.preventDefault();
    const newTransaction={
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

    return (
        <div>
             <h2>Add Transaction :</h2>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <input type="text" value={text} onChange={(e)=>settext(e.target.value)}  placeholder="Enter text" />
        </div>
        <div className="form-control">
          
          <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
        </div>
    )
}
