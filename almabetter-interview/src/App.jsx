import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const elems = ['1', '2', '1', '2', '1', '2']

  return (
    <div className="App">
      {elems.map((elem) => {
        return <div>{elem}</div>
      })}
    </div>
  )
}

export default App
