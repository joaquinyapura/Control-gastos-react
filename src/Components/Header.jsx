import React from 'react'
import { VictoryLabel, VictoryPie } from 'victory'
import { UseGlobalcontext } from '../Context/GlobalContext'

export const Header = () => {

  const {transactions} = UseGlobalcontext()


  /* const montos = transactions.map(transactions => transactions.Importe)
  const total = montos.reduce((acc,item)=>acc+=item)


  const ingresos = montos
                    .filter(monto=>monto >= 1)
                    .reduce((acc,item)=>(acc+=item),0)

  const ingresosPorcentaje = ingresos/total*100

  const egresos = montos
                    .filter(monto=>monto <= 1)
                    .reduce((acc,item)=>(acc+=item),0)*-1

  const egresosPorcentaje = egresos/total*100
 */

  return (

    <div className='w-3/4'>


      <VictoryPie
      colorScale={["#F2EFEA", "#FC7753"]}

      labelComponent={<VictoryLabel angle={45}/>}
      
      data={[
        { x: "Ingresos", y: ingresosPorcentaje },
        { x: "Gastos", y: egresosPorcentaje }
      ]}
      animate={{
        duration: 2000
      }}
      style={{ labels: { fill: "white"} }}
      
      />
    </div>
  )
}
