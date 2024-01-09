import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(7)
  
  const addValue = ()=>{
    setCounter(counter+1)
    
  }
  const subValue = ()=>{
    setCounter(counter-1)
    
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter : {counter}</h2>
    <button
    onClick={addValue}>Increase Value</button>
    <br/>
    <br/>
    <button onClick={subValue}>Decrease Value</button>
    </>
  )
}

export default App
