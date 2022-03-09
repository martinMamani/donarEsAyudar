import React from 'react'
import './NavBar.css'
import imagen from '../../assets/logo-donar-transparente.png'
const NavBar = () => {
  return (
    <nav>
      <img src={imagen} alt="" />
      <h2>DONAR ES AYUDAR</h2>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a> </li>
            <li><a href="#">Informacion</a> </li>
            <li><a href="#">Requisitos</a> </li>
        </ul>
    </nav>
  )
}

export default NavBar