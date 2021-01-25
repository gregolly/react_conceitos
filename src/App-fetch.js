import React from 'react'
import Produtos from './produtos-fetch/Produtos'

const App = () =>{
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(event){
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )
    const json = await response.json()
    setDados(json)
    setCarregando(false)
  }

  return(
    <div>
      <button style={{ margin: '1rem', background: '#84e', border: 'none', 
      padding: '10px', color: 'white', borderRadius: '2px' }} onClick={handleClick}>Tablet</button>
      <button style={{margin: '1rem', background: '#84e', border: 'none', 
      padding: '10px', color: 'white',  borderRadius: '2px' }} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: '1rem', background: '#84e', border: 'none', 
      padding: '10px', color: 'white',  borderRadius: '2px' }} onClick={handleClick}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </div>
  )
}

export default App