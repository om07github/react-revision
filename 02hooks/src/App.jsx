import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const addValue = ()=>{

    /** Vlaue doesn't get changed **/
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    /** Vlaue get changed **/
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
  }

  const removeValue = ()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>Using Hooks in React</h1>
       <button onClick={addValue} >Add Value {count} </button>
       <br />
       <button onClick={removeValue} >Remove Value {count} </button>
    </>
  )
}

export default App
