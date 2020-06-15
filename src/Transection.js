import React from 'react'
import './App.css';
import { ShowTrnsection } from "./ShowTrnsection";
import { GlobalContext } from "./globalcontext";


export const Transection = () => {
    const {transactions}=React.useContext(GlobalContext);
    return (
        <div>
            <h2>History :</h2>
            <ul className="list">
                {transactions.map(transaction =>( <ShowTrnsection key={transaction.id} transaction={transaction}></ShowTrnsection>))}
            </ul>
        </div>
    )
}
