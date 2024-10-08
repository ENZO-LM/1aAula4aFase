import './index.css';
import React, { useState } from 'react';

function Conteudo() {
  const [fila, setFila] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState(null);

  // Função para gerar uma senha (Normal ou Preferencial)
  const gerarSenha = (tipo) => {
    const numero = fila.length + 1;
    const novaSenha = { tipo, numero };
    setFila([...fila, novaSenha]);
  };

  // Função para chamar a próxima senha
  const chamarSenha = () => {
    if (fila.length === 0) {
      alert('A fila está vazia!');
      return;
    }

    const preferenciais = fila.filter((senha) => senha.tipo === 'P');
    const normais = fila.filter((senha) => senha.tipo === 'N');

    if (preferenciais.length > 0) {
      const proximaSenha = preferenciais.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));
      setSenhaAtual(proximaSenha);
      setFila(fila.filter((senha) => senha !== proximaSenha));
    } else if (normais.length > 0) {
      const proximaSenha = normais.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));
      setSenhaAtual(proximaSenha);
      setFila(fila.filter((senha) => senha !== proximaSenha));
    }
  };

  return (
    <div className="conteudo-container">
      <img className='logoG' src='./images/logoG.png' alt='Logo Grande'/>
      
      <img className='placa' src="./images/placa.png" alt="Placa" />
      <p>
        Estaremos abrindo nossas portas dia 25/12/2025, esperamos por vocês!!! 
      </p>

      <img className='camisas' src="./images/camisas.png" alt="Camisas" />
      <p>
        Os primeiros 50 clientes ganham 20% de desconto na compra!!! Além de camisas exclusivas da nossa farmácia!!!
      </p>
      <h2> SENHAS PARA ATENDIMENTO:</h2>
      {/* Sistema de Senhas */}
      <div className="senha-container">
        
        <button onClick={() => gerarSenha('N')} className="btn-senha normal">Gerar Senha Normal</button>
        <button onClick={() => gerarSenha('P')} className="btn-senha preferencial">Gerar Senha Preferencial</button>
        <button onClick={chamarSenha} className="btn-senha chamar">Chamar Senha</button>
      </div>

      <div className="senha-display">
        <strong>Senha chamada:</strong> {senhaAtual ? senhaAtual.tipo + senhaAtual.numero : 'Nenhuma senha'}
      </div>

      <div className="fila-status">
        <strong>Fila:</strong> {fila.length > 0 ? `Há ${fila.length} cliente(s) na fila` : 'A fila está vazia'}
      </div>
    </div>
  );
}

export default Conteudo;



