import React, { useState } from 'react'
import { UseGlobalcontext } from '../Context/GlobalContext'

export const TransactionForm = () => {


  const [Descripcion, setDescripcion] = useState()
  const [Importe, setImporte] = useState()

  const {addTransaction} = UseGlobalcontext()


  const onFormSubmit = (e)=>{
    e.preventDefault()
    addTransaction({
      id:window.crypto.randomUUID(),
      Descripcion,
      Importe
    })
    

  } 

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='ingrese una descripcion' onChange={(e)=>{setDescripcion(e.target.value)}} />
        <input type="number" step="0.1" placeholder='ingrese un monto' onChange={(e)=>{setImporte(e.target.value)}} />
        <button>Enviar transacción</button>
      </form>
    </div>
  )
}
