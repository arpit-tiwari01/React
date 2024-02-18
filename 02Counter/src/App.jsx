import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)
  // let counter = 15

  const addValue = () => {
    console.log("value added ", Math.random())
    
      setCounter((Counter) => {
        if(Counter < 20){
          return Counter + 1
        }
      })
    
    
  }

  const removeValue = () =>{
    setCounter(()=>{
      if(counter > 0){
        return counter - 1
      }
    
    })
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h1>Counter value : {counter}</h1>

      <button
      onClick={addValue}
      >Add value: {counter} </button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      
    </>
  )
}

export default App
