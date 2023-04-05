import { useState } from 'react'


import { Menu } from './Componentes/Menu/Menu'
import { Titulo } from './Componentes/Titulo/Titulo'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'













function App() {

  const [counter, setCounter] = useState (0)

  let style = {fontSize: 20, backgroundColor : 'Black' }

  let handleCount = () => {
    setCounter(counter + 1)
  }

  function Formulario () {
    return  <section>
      
             <form>
                <input type='text' name= 'name' placeholder='ingrese el nombre' />
                <input type='text' name= 'name' placeholder='ingrese el apellido' />
             </form>
            </section> }

  return (
    <div className="App" style= {style}>

      
      <Menu/> 
      
      <Titulo />
      LOG IN
      <Formulario />

      <p>Clicks: {counter}</p>
      <button onClick={handleCount}>Agregar al carrito</button>
      
      

    
     
    </div>
  )
}
     
export default App
