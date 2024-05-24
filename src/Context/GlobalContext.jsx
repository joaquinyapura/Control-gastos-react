import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext()

// CustomHook
export const UseGlobalcontext = ()=>{

    const context = useContext( Context )
    return context

}


const InitialState = {
    transactions:[]
}

export const GlobalContext = ({children}) => {


    const [state, dispatch] = useReducer(AppReducer,InitialState,
      ()=>{
         const localData = localStorage.getItem('transactions')
         return localData? JSON.parse(localData):InitialState
      }
    )

    useEffect(()=>{
      localStorage.setItem('transactions', JSON.stringify(state))
    },[state])


    const addTransaction = (transaction)=>{
     dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
     }) 
    }
    const deleteTransaction = (id)=>{
     dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
     }) 
    }




  return (
    <Context.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction

    }} >
        {children}
    </Context.Provider>
  )
}
