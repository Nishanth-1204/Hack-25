import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 onClick={() => navigate("/")} id="nav-title">
          HackXelerate
        </h1>
        <ul className="nav-list">
          <li
            className="active nav-item"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="active nav-item"
            onClick={() => scrollToSection("countdown")}
          >
            Countdown
          </li>
          <li className="nav-item" onClick={() => scrollToSection("schedule")}>
            Schedule
          </li>
          <li className="nav-item" onClick={() => scrollToSection("prizes")}>
            Prizes
          </li>
          <li className="nav-item" onClick={() => scrollToSection("gallery")}>
            Gallery
          </li>
          <li className="nav-item" onClick={() => scrollToSection("faq")}>
            FAQS
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
