import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(7)
  
  const addValue = ()=>{
    setCounter(counter+1)  //counter value cannot be increased mul. times just by duplicating this statement.
    // setCounter(prevCount=> prevCount + 1 )  // using the prevcount in the callback inside a setCounter 
    // setCounter(prevCount=> prevCount + 1 )  // allows you to increase value multiple times. This is 
    // setCounter(prevCount=> prevCount + 1 )  // called "state as a snapshot".
    // setCounter(prevCount=> prevCount + 1 )
    
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
