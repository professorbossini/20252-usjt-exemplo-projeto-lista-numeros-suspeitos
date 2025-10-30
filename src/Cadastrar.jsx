import React, { useState } from 'react'

const Cadastrar = ({onCadastrar}) => {
  const [numero, setNumero] = useState('')
  return (
    <div className='d-flex flex-column'>
      <input
        value={numero}
        onChange={evento => setNumero(evento.target.value)} 
        type="text" 
        className='w-100'/>
      <button
        onClick={() => {onCadastrar(numero); setNumero('')}} 
        className='mt-3 w-100'>
        OK
      </button>
    </div>
  )
}

export default Cadastrar