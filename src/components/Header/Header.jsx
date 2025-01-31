import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Logos/logo.png";
import "./Header.scss";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
        <div className="nav__left">
          <img src={logo} className="nav__logo" alt="Moss Media logo" />
        </div>
        </Link>
        <div
          className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
          <span className="nav__burger-line"></span>
        </div>
        <div className={`nav__menu ${menuOpen ? "nav__menu--open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/portfolio" className="nav__link">
              Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/services" className="nav__link">
              Services & Pricing
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              Meet Us
            </Link>
          </li>
          <li className="nav__item--mobile">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/contact">
        <button className="nav__cta">Contact</button>
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
