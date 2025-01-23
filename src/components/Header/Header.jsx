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
            <a href="/portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="/services" className="nav__link">
              Services & Pricing
            </a>
          </li>
          <li className="nav__item">
            <a href="/about" className="nav__link">
              Meet Us
            </a>
          </li>
          <li className="nav__item">
            <a href="/contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
        <Link to="/contact">
        <button className="nav__cta">Get Started</button>
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
