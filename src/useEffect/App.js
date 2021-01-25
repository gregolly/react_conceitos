import React from 'react'
import Produto from './Produto'

const App = () =>{
  // const [contar, setContar] = React.useState(0)
  // const [dados, setDados] = React.useState(null)
  const [ativo, setAtivo] = React.useState(false)
  
  // console.log("Executou fora")
  // React.useEffect(() =>{
  //   console.log('Executou')
  // }, [])

  // const titulo = 'Clicou'
  // React.useEffect(() =>{
  //   document.title = titulo + contar
  // }, [contar])

  // React.useEffect(() =>{
  //   fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
  //     .then((res) => res.json())
  //     .then((json) => setDados(json))
  // }, [])

  return(
    <div>
      {/* <button onClick={()=>setContar(contar + 1)}>{contar}</button>
      {dados &&(
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )} */}
      {ativo && <Produto />}
      <button onClick={()=>setAtivo(!ativo)}>Ativar</button>
    </div>
  )
}

export default App