import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 id="nav-title">HackXelerate</h1>
        <button className="registerbtn" id="register">
          Register
        </button>
      </nav>
      <hr className="hline-bottom"></hr>
    </header>
  );
};

export default Navbar;
