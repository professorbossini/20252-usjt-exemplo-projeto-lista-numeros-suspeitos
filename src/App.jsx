import React, { useState, useEffect } from 'react'
import MenuLateral from './MenuLateral'
import Cadastrar from './Cadastrar'
import Lista from './Lista'
import axios from 'axios'
import { v4 } from 'uuid'

const App = () => {
  const [numeros, setNumeros] =  useState([])
  const onCadastrar = async (numero) => {
    await axios.post('http://localhost:3000/numeros', {id: v4(), numero: numero})
    setNumeros((old) => [numero, ...old])
    console.log(numeros)
  }
  useEffect(() => {
    axios.get('http://localhost:3000/numeros').then(res => setNumeros(res.data))
  }, [])
  return (
    <div className='container border rounded'>
      <div className="row">
        <div className="col-4">
            <MenuLateral />
        </div>
        <div className="col-8">
          <div className="d-flex flex-column justify-content-center">
            <Cadastrar onCadastrar={onCadastrar}/>
            <Lista  numeros={numeros}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App