import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav>
        <div className='links'>
            <Link className='Link' to='/'>Pagina de Inicio</Link>
            <Link className='Link' to='/Contactenos'>Sugerencias</Link>
            <Link className='Link' to='/Contactenos'>Canchas Sinteticas</Link>
            <Link className='Link' to='/LogIn'>LogIn</Link>
            <Link className='Link' to='/Cancheros'>Personal</Link>
        </div>
    </nav>
  )
}
