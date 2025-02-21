import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking an item
    }
  };

  return (
    <header className="nav-header">
      <nav className="navbar">
        <h1 onClick={() => navigate("/")} id="nav-title">
          HackXelerate
        </h1>

        {/* Hamburger Menu Button */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation List - Show/Hide Based on menuOpen */}
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li className="nav-item" onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li className="nav-item" onClick={() => scrollToSection("countdown")}>
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
            FAQs
          </li>
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://whatsapp.com/channel/0029Vb2w0RB2kNFxBXlBA33J"
                )
              }
              className="registerbtn whatsapp-button"
            >
              Join Our WhatsApp
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                window.open("https://unstop.com/o/FpG5D29?lb=GpnkcYYm", "_self")
              }
              className="registerbtn"
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
