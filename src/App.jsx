import { useState } from 'react'

import { Navbar } from './Componentes/NavBar/NavBar'
import {ItemListContainer} from './Componentes/ItemListContainer/ItemListContainer'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'













function App() {

  const [counter, setCounter] = useState (0)

  let style = {fontSize: 20, backgroundColor : 'white' }

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

      
      <Navbar/> 
      
      <ItemListContainer greeting={'Bienvenidos a ReactEcommerce'}/>
      
      

    
     
    </div>
  )
}
     
export default App

