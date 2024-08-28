import './Produto.css'

function Produto(props) {
    let p = props.produto
  return (
    <div className="produto-container">
        <h2>{p.nome} </h2>
        <p>{p.descricao}</p>
        <p>R$: {p.preco.toFixed(2)}</p>
        <p>Peso: {p.peso} gramas</p>
        <p>ID: {p.id}</p>
      
    </div>
  )
}

export default Produto
