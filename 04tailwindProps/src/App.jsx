import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Card username = "Owl" btntext = "Know more"/>
      <Card username = "Owl" btntext = "click here" />
    </>
  )
}

export default App
