import React, {createContext,useReducer} from 'react'
import Reducer from "./Reducer";

const initialstate={
    transactions:
   
        [ ]
        
}
//creating context
export const GlobalContext= createContext(initialstate);
//creating provider
export const GlobalProider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,initialstate);
    //action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);
}


