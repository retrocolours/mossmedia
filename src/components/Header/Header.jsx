import React from "react";
import logo from "../../assets/Logos/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left">
          <img src={logo} className="nav__logo" alt="Moss Media logo" />
        </div>
        <div className="nav__right">
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
        <button className="nav__cta">Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
