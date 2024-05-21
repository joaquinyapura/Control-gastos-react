import { UseGlobalcontext } from "../Context/GlobalContext"





export const IncomeExpenses = () => {

    const {transactions} = UseGlobalcontext()

    const montos = transactions.map(transactions => transactions.Importe)

    const positivos = montos.filter(monto=>monto >= 1)
    const negativos = montos.filter(monto=>monto <= 1)

  return (
    <div>IncomeExpenses</div>
  )
}
