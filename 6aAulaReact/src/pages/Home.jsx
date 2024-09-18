import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {
    const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

    function addUser(){
        let usuarioNovo = {
            id: Date.now(),
            nome: "Dedada",
            email: "dedada@gmail.com"
        }
        setUsuarios([...usuarios , usuarioNovo])
    }
  return (
    <div>
        <Navbar/>
      <h1>Página Home</h1>
      <p> home </p>
      <h2>Olá {usuarioLogado}</h2>
      <div>
        {
            usuarios.map( (usuario) => (
                <div> 
                    <p>Nome: {usuario.nome}</p> 
                    <p>Email: {usuario.email}</p>  
                    <p>{usuario.id}</p>
                    <p>= = = = = = = = = = = = = = </p>
                   
                </div>
            ) )
        }
      </div>
      <button onClick={addUser}> + ADD USER +</button>
    </div>
  )
}

export default Home
