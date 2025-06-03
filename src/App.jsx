import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button/button.jsx'
import Coloredtxt from './Components/Text/ColoredTxt.jsx'

function App() {

  return (
    <>
      <div className='App'>
        <h1> | Projeto React + Vite |  </h1>
        <Coloredtxt text='Olá usuário,' color='Navy' />
        <Coloredtxt text='Essa é uma aplicação React' color='grey' />
        <Coloredtxt text='Feita com Vite' color='navy' />
        <h3>Botões com Window Alert de Label</h3>
        <Button label='Enviar CV' />
        <Button label='Enviar Mensagem' />
      </div>
    </>
  )
}

export default App
