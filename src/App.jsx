import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Projeto Super Legal!</h1>

      <p>Texto explicando para que serve o projeto super legal!</p>
    </div>
  )
}

export default App
