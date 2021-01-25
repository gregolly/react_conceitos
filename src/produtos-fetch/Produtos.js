import React from 'react'

const Produtos = ({ dados }) =>{
  return(
    <div>
      <div>
        <h1>{dados.nome}</h1>
        <span>R$ {dados.preco}</span>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </div>
    </div>
  )
}

export default Produtos