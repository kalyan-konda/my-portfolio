import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="navbar-header">
      {/* Brand / Logo */}
      <div className="brand-left">
        <span className="brand-dot"></span>
        <span>Kalyan Konda</span>
        <span className="brand-subtitle">Web Development Student @ Suthra</span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <div className={`dot ${isOpen ? "open" : ""}`}></div>
        <div className={`dot ${isOpen ? "open" : ""}`}></div>
        <div className={`dot ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <nav className={`top-nav ${isOpen ? "mobile-open" : ""}`}>
        <Link to="/" className={isActive("/")} onClick={closeMenu}>
          Home
        </Link>
        <a href={resume} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Resume
        </a>
        <Link
          to="/projects"
          className={isActive("/projects")}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link to="/skills" className={isActive("/skills")} onClick={closeMenu}>
          Skills
        </Link>
        <Link
          to="/contact"
          className={isActive("/contact")}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
