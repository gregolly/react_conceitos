import React from 'react'

const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: "André", idade: "30"})

  const handleClick = () =>{
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'Possui faculdade'})
  }

  return(
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  )
}

export default App;
