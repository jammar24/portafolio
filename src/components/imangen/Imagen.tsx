import React from 'react'
//import '../imangen/imagen.css'

const imagen = () => {
  return (
    <img className='img__main'src={`${process.env.PUBLIC_URL}/`}   alt=" " />
  )
}

export default imagen