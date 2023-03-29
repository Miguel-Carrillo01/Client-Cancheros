import React from 'react'
import { Link } from 'react-router-dom'

export const DespuesdeFondo = () => {
  return (
    <div className='despuesFondo'>
        <div className='border'>
            <Link className='Link' to='/CanchasSinteticas'><img src="https://www.eafit.edu.co/bienestar-universitario/deportes/infraestructura/PublishingImages/cancha-grama-sintetica.jpg" alt="" className='img' /></Link>
        <h1 className='h1DespuesDeFondo'>Canchas Sinteticas</h1>
        <p className='peDespues'>Encuentra las canchas sinteticas aliadas a nosotros</p>
        </div>
    </div>
  )
}
