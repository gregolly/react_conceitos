import React from 'react'

const Modal = ({modal, setModal}) => {

  if(modal === true)
    return (
      <div>
        {/* <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div> */}
        Esse é um modal. <button onClick={()=>setModal(false)}>Fechar</button>
      </div>
    )
  return null;
}

export default Modal
