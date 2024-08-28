
import './App.css'
import Produto from './components/Produto'
import Titulo from './components/Titulo'
import { useState } from 'react';

function App() {
    const [inputNome, setInputNome] = useState('');
    function mudouNome(event){
      setInputNome(event.target.value)
    }
    const [inputDescricao, setInputDescricao] = useState('');
    function mudouDescricao(event){
      setInputDescricao(event.target.value)
    }
    const [inputPreco, setInputPreco] = useState('');
    function mudouPreco(event){
      setInputPreco(event.target.value)
    }
    const [inputPeso, setInputPeso] = useState('');
    function mudouPeso(event){
      setInputPeso(event.target.value)
    }

    function cadastrarProduto(){
      let produto = {
        id: Date.now(),
        nome: inputNome,
        descricao: inputDescricao,
        preco: parseFloat(inputPreco),
        peso: parseFloat(inputPeso)
      }
      // produtos.push(produto)
      setProdutos([produto, ...produtos])
    }


    const [produtos,setProdutos] = useState( [
      {
        id: Date.now() + 1,
        nome: "Bola de Futebol",
        descricao: "Bola oficial tamanho 5, ideal para jogos profissionais e amadores.",
        preco: 99.99,
        peso: "410g"
      },
      {
        id: Date.now() + 2,
        nome: "Chuteira",
        descricao: "Chuteira de campo com travas de borracha para melhor aderência.",
        preco: 299.99,
        peso: "250g"
      },
      {
        id: Date.now() + 3,
        nome: "Camisa de Time",
        descricao: "Camisa oficial do time de futebol, feita com material respirável.",
        preco: 199.99,
        peso: "150g"
      },
      {
        id: Date.now() + 4,
        nome: "Caneleira",
        descricao: "Caneleira com proteção extra para jogos de futebol.",
        preco: 49.99,
        peso: "200g"
      },
      {
        id: Date.now() + 5,
        nome: "Luvas de Goleiro",
        descricao: "Luvas com grip avançado para melhor controle da bola.",
        preco: 129.99,
        peso: "300g"
      },
      {
        id: Date.now() + 6,
        nome: "Meião",
        descricao: "Meião de compressão que proporciona maior conforto e suporte.",
        preco: 29.99,
        peso: "100g"
      },
      {
        id: Date.now() + 7,
        nome: "Garrafa de Água",
        descricao: "Garrafa térmica de 500ml para manter sua água fresca durante os jogos.",
        preco: 39.99,
        peso: "180g"
      },
      {
        id: Date.now() + 8,
        nome: "Shorts de Futebol",
        descricao: "Shorts leves e confortáveis para treinos e jogos.",
        preco: 59.99,
        peso: "120g"
      },
      {
        id: Date.now() + 9,
        nome: "Faixa de Capitão",
        descricao: "Faixa elástica ajustável para identificar o capitão do time.",
        preco: 19.99,
        peso: "50g"
      },
      {
        id: Date.now() + 10,
        nome: "Apito de Árbitro",
        descricao: "Apito profissional com som alto e claro.",
        preco: 14.99,
        peso: "30g"
      },
      {
        id: Date.now() + 11,
        nome: "Cones de Treinamento",
        descricao: "Cones de plástico para marcação em treinos.",
        preco: 69.99,
        peso: "500g"
      },
      {
        id: Date.now() + 12,
        nome: "Redes de Gol",
        descricao: "Redes de gol resistente para traves de futebol padrão.",
        preco: 149.99,
        peso: "700g"
      },
      {
        id: Date.now() + 13,
        nome: "Coletes de Treinamento",
        descricao: "Conjunto de coletes para identificação de equipes durante os treinos.",
        preco: 89.99,
        peso: "250g"
      },
      {
        id: Date.now() + 14,
        nome: "Bomba de Ar",
        descricao: "Bomba manual para inflar bolas de futebol.",
        preco: 24.99,
        peso: "150g"
      },
      {
        id: Date.now() + 15,
        nome: "Joelheira",
        descricao: "Joelheira com proteção e compressão para evitar lesões.",
        preco: 79.99,
        peso: "180g"
      },
      {
        id: Date.now() + 16,
        nome: "Squeeze",
        descricao: "Garrafa esportiva de 750ml com bico ergonômico.",
        preco: 29.99,
        peso: "200g"
      },
      {
        id: Date.now() + 17,
        nome: "Prancheta Tática",
        descricao: "Prancheta magnética para planejamento de jogadas.",
        preco: 89.99,
        peso: "350g"
      },
      {
        id: Date.now() + 18,
        nome: "Tornozeleira",
        descricao: "Tornozeleira de compressão para proteção durante jogos.",
        preco: 49.99,
        peso: "100g"
      },
      {
        id: Date.now() + 19,
        nome: "Corda de Pular",
        descricao: "Corda de pular ajustável, ideal para aquecimento antes do jogo.",
        preco: 39.99,
        peso: "150g"
      },
      {
        id: Date.now() + 20,
        nome: "Relógio de Pulso Esportivo",
        descricao: "Relógio com cronômetro e resistência à água, ideal para acompanhar o tempo de jogo.",
        preco: 249.99,
        peso: "90g"
      }
    ] );
    


  
  // let produto = {
  //   nome: "Peteca",
  //   descricao: "Dar uma volta lá embaixo e voltar travado",
  //   preco: 25,
  //   peso: 5
  // }

  return (
    <>
      <Titulo texto={"Quero ir embora"} emoji={"💩"} emoji2={"☃️"}/>
      {/* <Produto produto={produto}/> */}

      <div className='formCadastro'>
        <h2>Cadastro de produto</h2>
        <div className="input-container">
          <label> Nome: </label>
          <input type="text" placeholder='Nome do produto' value={inputNome} onChange={mudouNome} />
          <label> Descrição: </label>
          <input type="text" placeholder='Descrição do produto' value={inputDescricao} onChange={mudouDescricao} />
           {/* //onchange pode fazer com arrow function (event) => setInputDescricao(event.target.value) */}
          <label> Preço: </label>
          <input type="text" placeholder='Preço do produto' value={inputPreco} onChange={mudouPreco}/>
          <label> Peso: </label>
          <input type="text" placeholder='Peso do produto' value={inputPeso} onChange={mudouPeso}/>
          <button onClick={cadastrarProduto}> Cadastrar</button>
        </div>
      </div>



      <div className='cards'>
        {produtos.map( (p) => (
          <Produto produto={p} key={p.id}/>
        ) )}
      </div>
    </>
  )
}

export default App
