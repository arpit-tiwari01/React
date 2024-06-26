import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  //useState hook
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isCopied, setIsCopied] = useState(false) // new state variable

  //useRef hook
  const passwordRef = useRef(null)

  //password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "1234567890"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  //copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setIsCopied(true) // set isCopied to true when password is copied

    // set isCopied to false after 2 seconds
    setTimeout(() => {
      setIsCopied(false) // reset isCopied to false after 2 seconds
    }, 2000)
  }, [password])

  //useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='m-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ${isCopied ? 'bg-green-500' : ''}`} // change button color when isCopied is true
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              id='numberInput'
            />
            <label>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              id='charInput'
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
