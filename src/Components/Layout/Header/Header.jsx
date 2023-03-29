import React from 'react'
import { NavBar } from '../../Ui/NavBar/NavBar'
import { Nombre } from '../../Ui/Nombre/Nombre'

export const Header = () => {
return (
    <header>
        <Nombre/>
        <NavBar/>
    </header>
)
}
