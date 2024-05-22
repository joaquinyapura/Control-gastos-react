import { UseGlobalcontext } from "../Context/GlobalContext"





export const IncomeExpenses = () => {

    const {transactions} = UseGlobalcontext()

    const montos = transactions.map(transactions => transactions.Importe)

    const ingresos = montos
                    .filter(monto=>monto >= 1)
                    .reduce((acc,item)=>(acc+=item),0)

    const egresos = montos
                    .filter(monto=>monto <= 1)
                    .reduce((acc,item)=>(acc+=item),0)*-1
                    

  return (
    <div>
        <div>
            <h3>Ingregos</h3>
            <h1> {ingresos} </h1>
        </div>
        <div>
            <h3>Egresos</h3>
            <h1> {egresos} </h1>
        </div>

    </div>
  )
}
