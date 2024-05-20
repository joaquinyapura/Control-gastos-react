import { useContext } from "react"
import { Context } from "./Context/GlobalContext"

import {Balance,Header,TransactionForm} from './Components'



function App() {

  const data = useContext(Context)
  

  return (
    <>
    <Header />
    <Balance />
    <TransactionForm />

      
    </>
  )
}

export default App
