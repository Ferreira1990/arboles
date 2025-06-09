import React from 'react'
import '../Main/Main.css'
import PORTULACA from '../../assets/portulacaria.webp'

const Main = () => {
  return (
    <>
    <div className='Containermain'>
        <div className='Firstcontainerdiv'>
            <h1>Arboles de la Abundancia</h1>
            <h4>"Belleza y ornamentación para tu hogar"</h4>
        </div>
        <div className='Secondcontainerdiv'>
            <div className='Containerimg'>
                <div className='imgportulacaria'><img src={PORTULACA} alt="" /></div>
                <div className='infoportulacaria'><a href="#Portulacariasventa"><button>Portulacarias</button></a></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main