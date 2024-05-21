import { UseGlobalcontext } from "../Context/GlobalContext"




export const TransactionList = () => {

    const {transactions , deleteTransaction} = UseGlobalcontext()

    

  return (
    <div>
        {transactions.map(transaction=>(
            <div className="box" key={transaction.id}>
                <p> {transaction.Descripcion} </p>
                <span> {transaction.Importe} </span>
                <button onClick={()=>{deleteTransaction(transaction.id)}}>eliminar</button>
            </div>
        ))}

    </div>
  )
}
