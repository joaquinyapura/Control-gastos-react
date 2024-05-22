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
      Importe: +Importe
    })
    

  } 

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input className='bg-zinc-700 text-white w-full rounded-lg p-3 mb-2' type="text" placeholder='ingrese una descripcion' onChange={(e)=>{setDescripcion(e.target.value)}} />
        <input className='bg-zinc-700 text-white w-full rounded-lg p-3 mb-2' type="number" step="0.1" placeholder='ingrese un monto' onChange={(e)=>{setImporte(e.target.value)}} />
        <button className='bg-teal-400 p-3 w-full '>Enviar transacción</button>
      </form>
    </div>
  )
}
