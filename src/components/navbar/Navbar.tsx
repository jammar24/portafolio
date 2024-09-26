import React from 'react'
import '../navbar/navbar.css'
import '../imangen/imagen.css'

const navbar = () => {
  return (
 <nav className='nav'>
   <img className='nav__logo' src={`${process.env.PUBLIC_URL}/prueba.png`}   alt=" " />
   <ul className='nav__list'>
    <li>Home</li>
    <li>Sobre mi</li>
    <li>Blog</li>
    <li>Wiki</li>
    <li>Bibioteca</li>
   </ul>
   <button className='nav__btn'>Contac me</button>
 </nav>
  )
}

export default navbar