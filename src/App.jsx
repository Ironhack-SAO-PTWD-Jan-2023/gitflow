import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/HomePage";
import AboutPage from "../src/AboutPage";
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {


  return (
    <div className="App">
      <h1>Projeto Super Duper Legal</h1>
      <Routes>
        <Route path="*" element={<p>Erro 404</p>} />
      </Routes>

      <p>Texto explicando para que serve o projeto super legal!</p>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
