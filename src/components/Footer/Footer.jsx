import React from "react";
import "./Footer.scss";
import logo from "../../assets/Logos/logo.png";
import rainbow from "../../assets/Logos/rainbow.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faVimeo } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-section">
          <img src={logo} alt="Company Logo" className="footer__logo" />
          <p className="footer__description">
            Welcome to Moss Media, where we capture life's most cherished
            moments. We operate in Greater Vancouver Area, B.C. & in Reykjavik,
            Iceland.
          </p>
        </div>

        <div className="footer__leaf-container">
          <img src={rainbow} alt="Leaf Logo" className="footer__leaf" />
        </div>

        <div className="footer__links-section">
          <div className="footer__links">
            <h4 className="footer__title">Resources</h4>
            <ul className="footer__list">
              <li>
                <Link to="/services">Services & Prices</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list">
              <li>
                <a href="tel:+16047161810">+1 (604) 716-1810</a>
              </li>
              <li>
                <a href="mailto:mossmediainfo@gmail.com">
                  mossmediainfo@gmail.com
                </a>
              </li>
              <div className="footer__icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61569364881077&notif_id=1742082969031275&notif_t=page_user_activity&ref=notif#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="footer__icon"
                    style={{ color: "#4267B2" }}
                  />
                </a>
                <a
                  href="https://vimeo.com/mossmediavideography"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faVimeo}
                    className="footer__icon"
                    style={{ color: "#1ab7ea" }}
                  />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">&copy; All rights reserved</p>
        <p className="footer__copyright">
          Made by{" "}
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/tatianapriv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tatiana Privezentseva
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
