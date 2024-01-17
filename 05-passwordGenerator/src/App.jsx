import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}`~"

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass = str.charAt(char);
      setPassword(pass);
    }

  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
      <h1 className='text-4xl mb-4 mt-4 text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none mb-4 rounded w-full py-1 px-3' placeholder='password' readOnly></input>
        </div>
      </div>
    </>
  )
}

export default App
