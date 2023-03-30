import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav>
        <div className='links'>
            <Link className='Link' id='LinkIni' to='/'>Pagina de Inicio</Link>
            <Link className='Link' id='linkSug' to='/Sugerencias'>Sugerencias</Link>
            <Link className='Link' id='linkCan' to='/CanchasSinteticas'>Canchas Sinteticas</Link>
            <Link className='Link' id='linkLog' to='/LogIn'>Login</Link>
            <Link className='Link' id='linkPer' to='/Personal'>Personal</Link>
        </div>
    </nav>
  )
}
