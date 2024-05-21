import { useContext } from "react"
import { Context } from "./Context/GlobalContext"

import {Balance,Header,TransactionForm, TransactionList} from './Components'
import { IncomeExpenses } from "./Components/IncomeExpenses"



function App() {

  const data = useContext(Context)
  

  return (
    <>
    <Header />
    <Balance />

    <IncomeExpenses />
    <TransactionForm />
    <TransactionList />

      
    </>
  )
}

export default App
