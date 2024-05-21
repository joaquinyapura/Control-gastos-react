import { useContext } from "react"
import { Context } from "./Context/GlobalContext"

import {Balance,Header,TransactionForm, TransactionList} from './Components'



function App() {

  const data = useContext(Context)
  

  return (
    <>
    <Header />
    <Balance />
    <TransactionForm />
    <TransactionList />

      
    </>
  )
}

export default App
