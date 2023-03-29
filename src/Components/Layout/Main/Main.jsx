import React from 'react'
import { Fondo } from '../../Ui/Fondo/Fondo'
import { DespuesdeFondo } from '../../Ui/DespuesdeFondo/DespuesdeFondo'
import { Sugerencias } from '../../Ui/Sugerencias/Sugerencias'
import { Cards } from '../../Ui/Cards/Cards'

export const Main = () => {
  return (
      <main className='Main'>
          <Fondo/>
          <DespuesdeFondo/>
          <Sugerencias/>
          <Cards/>
    </main>
  )
}
