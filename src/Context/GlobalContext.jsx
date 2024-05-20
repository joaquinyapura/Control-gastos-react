import { createContext, useContext, useReducer } from "react";
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


    const [state, dispatch] = useReducer(AppReducer,InitialState)

    const addTransaction = (transaction)=>{
     dispatch({
      type:"ADD_TRANSACTION",
      payload:transaction
     }) 
    }


  return (
    <Context.Provider value={{
      transactions: state.transactions,
      addTransaction

    }} >
        {children}
    </Context.Provider>
  )
}
