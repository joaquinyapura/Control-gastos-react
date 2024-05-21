import React from 'react'
import { UseGlobalcontext } from '../Context/GlobalContext'

export const Balance = () => {



  const {transactions} = UseGlobalcontext()

  const montos = transactions.map(transactions => transactions.Importe)

  const total = montos.reduce((acc,item) => acc+item,0)


  return (
    <div>
      <h3>Balance</h3>
      <h1>${total} </h1>
    </div>
  )
}
