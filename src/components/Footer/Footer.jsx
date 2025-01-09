import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo and Description */}
        <div className="footer__logo-section">
          <img
            src="/path/to/logo.png"
            alt="Company Logo"
            className="footer__logo"
          />
          <p className="footer__description">
            Welcome to MossMedia, where we capture life's most cherished moments. We operate in Greater Vancouver Area, B.C. as well as Reykjavik, Iceland. 
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="fab fa-youtube"></i>
            </a> 
            {/* Vimeo instead ?  */}
         
          </div>
        </div>

        {/* Links Section */}
        <div className="footer__links-section">
          <div className="footer__links">
            <h4 className="footer__title">Resources</h4>
            <ul className="footer__list">
              <li><a href="#">Prices</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__title">About</h4>
            <ul className="footer__list">
              <li><a href="#">Team</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list">
              <li><a href="tel:+18889836026">+1 (604) 716-1810</a></li>
              <li><a href="mailto:info@videokings.ca">mossmedia@info.com</a></li>
             
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>&copy; All rights reserved</p>
        <p>
          Made with <span className="footer__heart">❤️</span> by Moss Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
