import React from 'react'
import { UseGlobalcontext } from '../Context/GlobalContext'

export const Balance = () => {

  const data = UseGlobalcontext()
  return (
    <div>Balance {JSON.stringify(data)}

    </div>
  )
}
