
import { useState } from 'react';
import './App.css'

function App() {

  const [contador,setContador] = useState(50)
  let cont = 0;

  function tratarClique(){
    cont++;
    console.log(cont);
      
  }

  function tratarContador(){
    setContador(contador + 1);
  }

  return (
    <>
      <h1> Quero ir embora </h1>
      <button onClick={tratarClique}>Upar CONT</button>
     
      <div className='textoComum'> 
        {cont}
      </div>

      <button onClick={tratarContador}>Upar CONTADOR</button> 

      <div className='textoComum'>
        {contador}
      </div>
    </>
  )
}

export default App
