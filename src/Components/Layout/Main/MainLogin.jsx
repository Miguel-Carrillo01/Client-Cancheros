import React, { useState } from 'react'

export const MainLogin = () => {

    const [clas, setClas] = useState(false);

    const removePanel = () =>{
        setClas (false)
    }

    const  putPanel = () =>{
        setClas(true)
    }


return (
    <main> 
        <div className='contenedorTodo' >
            <div className='cajaTrasera'>
                <div className='cajaTraseraLogin'>
                    <h3>¿Ya tienes cuenta?</h3>
                    <p>Inicia sesión para entrar en la pagina</p>
                    <button id='btnIniciarSesion' onClick={removePanel}>Iniciar Sesion</button>
                </div>
                <div className='cajaTraseraRegistro'>
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button id="btnRegistrarse" onClick={putPanel}>Regístrarse</button>
                </div>
            </div>

                <div className='contenedorLogin'>
                <form action="" className={`formularioLogin ${clas ? "newLogin": ""}`}>
                <h2> Iniciar Sesion</h2>
                <input type="email" placeholder='Correo Electronico' required />
                <input type="password" placeholder='Contraseña' required/>
                <button> Entrar </button>
                </form>
                </div>
                <div className={`contenedorRegister ${clas ? "newContent": ""}`}>
                <form action="" className={`formularioRegistro ${clas ? "newRegister": ""}`}>
                    <h2>Registrarse</h2>
                    <input type="text" placeholder='Nombre Completo' />
                    <input type="email" placeholder='Correo Electronico' required />
                    <input type="text" placeholder='Usuario' />
                    <input type="password" placeholder='Contraseña' required />
                    <button>Registrarse</button>
                </form>
                </div>
            </div>
    </main>
    )
}
    
    // <main>
    // <div className='Registrarme'>
    // <H1 content='Registrarse'/>
    // <Input contnet='Nombre Completo' style='input16'/>
    // <Input contnet='Correo Electronico'/>
    // <Input contnet='Usuario'/>
    // <Input contnet='Contraseña'/>
    // <div>
    // <Button content='Registrar' style='boton1'/>
    // </div>
    // </div>
    // </main>