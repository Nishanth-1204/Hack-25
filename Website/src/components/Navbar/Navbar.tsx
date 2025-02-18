import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="navbar">
        <h1 onClick={() => navigate("/")} id="nav-title">
          HackXelerate
        </h1>
        <button
          onClick={() => navigate("/register")}
          className="registerbtn"
          id="register"
        >
          Register
        </button>
      </nav>
      <hr className="hline-bottom"></hr>
    </header>
  );
};

export default Navbar;
