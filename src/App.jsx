import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";


function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<p>Erro 404</p>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
