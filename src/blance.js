import React from 'react'
import './App.css';
import { GlobalContext } from "./globalcontext";



export const Blance = () => {
    const {transactions} =React.useContext(GlobalContext);
    const amounts= transactions.map(transaction=>transaction.amount);
    const total=amounts.reduce((acc, item)=>(acc += item), 0).toFixed(2);
    return (
        <div>
            <h2>Your Balance :</h2>
            <h1 className="blanceamount">${total}</h1>
        </div>
    )
}
