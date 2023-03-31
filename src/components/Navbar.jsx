import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>Projeto Super Duper Legal
      <ul>
      <Link to="/"> Home </Link>           
        <Link to="/about"> About </Link>        
      </ul>
    </nav>
  )
}

export default Navbar;
