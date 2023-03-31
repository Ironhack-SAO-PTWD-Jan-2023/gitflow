import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";


import { HomePage } from "../src/HomePage";

import { AboutPage } from "../src/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Projeto Super Duper Legal</h1>

      <p>Texto explicando para que serve o projeto super legal!</p>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
