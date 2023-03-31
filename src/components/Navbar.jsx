import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Projeto Super Duper Legal</h1>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link> 
      </div>
    </nav>
  )
}

export default Navbar;
