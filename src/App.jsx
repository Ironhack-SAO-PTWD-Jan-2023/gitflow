import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import './App.css'

import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <div className="App">
      <h1>Projeto Super Duper Legal</h1>
      <Routes>
        <Route path="*" element={<p>Erro 404</p>} />
      </Routes>

      <p>Texto explicando para que serve o projeto super legal!</p>
     <Footer/>

    
    </div>
  )
}

export default App
