import './App.css'
import Beneficios from './components/Beneficios/Beneficios'
import Cuidados from './components/Cuidados/Cuidados'
import Main from './components/Main/Main'
import Nav from './components/Navvbarr/Nav'
import Plantas from './components/Plantas/Plantas'
import wspwsp from '../src/assets/wsplogo.webp'

function App() {

   const numerowsp = '56981357503';

  return (
    <>
    <div>
      <a href={`https://wa.me/${numerowsp}`}target="_blank" rel="noopener noreferrer"><img className='wsplogobutton' src={wspwsp} alt="" /></a>
    <Nav/> 
    <Main/> 
    <Cuidados/>   
    <Beneficios/>
    <Plantas/>

    </div>
    </>
  )
}

export default App
