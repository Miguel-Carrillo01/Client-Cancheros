import React from 'react'

export const Sugerencias = () => {
  return (
    <div className='sugerencias'>
          <h1 className='h1Sugerencias'>Sugerencias</h1>
      <div className="content">
        <div className='Pes'>
          <p>Armenia-Quindio-Colombia</p>
          <p>📱 Numero: +57-3233694623</p>
          <p>✉ Correo: CancherosAxm@gmail.com</p>
        </div>
        <div className='inputsSugerencias'>
            <input type="text" placeholder='Nombre' className='nameS' />
            <input type="number"  placeholder='Telefono' className='TeleS'/>
            <input type="email"  placeholder='Direccion de correo electronico' className='EmailS'/>
            <input type="text" className='Mensaje' placeholder='Mensaje'/>
            <button className='btnsug'> CONTACTO </button>
        </div>
      </div>
    </div>
  )
}
