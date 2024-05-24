import { useContext, useEffect } from "react"
import { Context, UseGlobalcontext } from "./Context/GlobalContext"

import {Balance,Header,TransactionForm, TransactionList} from './Components'
import { IncomeExpenses } from "./Components/IncomeExpenses"



function App() {


  const {transactions} =  UseGlobalcontext()
  

  return (
    <>
<div className="bg-zinc-800 h-screen text-white flex justify-center items-center">
    <div className="p-10 rounded-lg bg-slate-700 flex">

      <div className="p-10 flex flex-col items-center ">


   
      {transactions.length >= 1 ? <Header /> : "Ingrese sus datos"}


        <div className="flex text-center gap-5">

      <Balance />

      <IncomeExpenses />
        </div>
      <TransactionForm />
      </div>
      <div >

      <TransactionList />
      </div>
    </div>
  
</div>


      
    </>
  )
}

export default App
