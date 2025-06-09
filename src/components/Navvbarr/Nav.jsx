import React from 'react'
import '../Navvbarr/Nav.css'

const Nav = () => {
  const numerowsp = '56981357503';
  return (
    <div className='Navcontainer'>
        <div className='Letterfromnavbar'>
            <a href="#cuidado">Cuidados</a>        
        </div>
        <div className='Letterfromnavbar'>
            <a href={`https://wa.me/${numerowsp}`}target="_blank" rel="noopener noreferrer">Contacto</a>
                     
        </div>
    </div>
  )
}

export default Nav