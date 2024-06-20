import React, { useRef, useState } from 'react';
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles';

// React Hooks 
// useRef 
//useState -> estado(variável que toda vez que troca de valor a tela irá "recarregar os valores".)

function App() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef() //faz pegar coisas escritas no input

  function CliqueiNoBotao() {
    setProdutos([{ id: v4(), nome: inputRef.current.value}, ...produtos]) //mostra somente o que foi escrito, ao invés de pegar tudo
    inputRef.current.value = '' // limpa o input logo após adicionar um novo produto
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id)) //mantem todos os produtos e tira o que tem o id do produto clicado
  }

  return (
    <Container>
      <h1> Lista de Compras </h1>
      <input placeholder="produto.." ref={inputRef} />
      <AddButton onClick={CliqueiNoBotao}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.nome}</p>
          <TrashButton onClick={() => deletarProduto(produto.id)}> 🗑️ </TrashButton>
        </Product>
      ))}
    </Container>
  )
}

export default App
