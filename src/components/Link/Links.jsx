import React from 'react'
import './Links.css'
import image from '../../assets/gota-invertida.png'
const Links = (props) => {
  return (
    <div className='links'>
        <a 
        title={props.title} 
        href={props.url}> 
        <img  src={image} alt={props.title} />
        </a>
        <br />
        <br />
       
    </div>
  )
}

export default Links