// import React from "react";
// import "./Footer.scss";
// import logo from "../../assets/Logos/logo.png";
// import leaf from "../../assets/Logos/leaf.png";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__container">
//         <div className="footer__logo-section">
//           <img src={logo} alt="Company Logo" className="footer__logo" />
//           <p className="footer__description">
//             Welcome to MossMedia, where we capture life's most cherished
//             moments. We operate in Greater Vancouver Area, B.C. as well as
//             Reykjavik, Iceland.
//           </p>
//           {/* add socials */}
//         </div>

//         <div>
//           <img src={leaf} alt="Company Logo" className="footer__leaf" />
//         </div>

//         <div className="footer__links-section">

//           <div className="footer__links">
//             <h4 className="footer__title">Resources</h4>
//             <ul className="footer__list">
//               <li>
//                 <a href="#">Services & Prices</a>
//               </li>
//               <li>
//                 <a href="#">Portfolio</a>
//               </li>
//             </ul>
//           </div>
//           {/* <div className="footer__links">
//             <h4 className="footer__title">About</h4>
//             <ul className="footer__list">
//               <li>
//                 <a href="#">Team</a>
//               </li>
//               <li>
//                 <a href="#">Reviews</a>
//               </li>
//               <li>
//                 <a href="#">FAQ</a>
//               </li>
//             </ul>
//           </div> */}
//           <div className="footer__links">
//             <h4 className="footer__title">Contact</h4>
//             <ul className="footer__list">
//               <li>
//                 <a href="tel:+18889836026">+1 (604) 716-1810</a>
//               </li>
//               <li>
//                 <a href="mailto:mossmediainfo@gmail.com">mossmediainfo@gmail.com</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="footer__bottom">
//         <p>&copy; All rights reserved</p>
//         <p>
//           Made by <a href="https://www.linkedin.com/in/tatianapriv/" target="_blank" rel="noopener noreferrer">Tatiana Privezentseva</a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.scss";
import logo from "../../assets/Logos/logo.png";
import leaf from "../../assets/Logos/leaf.png";
import rainbow from "../../assets/Logos/rainbow.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left: Logo and Description */}
        <div className="footer__logo-section">
          <img src={logo} alt="Company Logo" className="footer__logo" />
          <p className="footer__description">
            Welcome to Moss Media, where we capture life's most cherished
            moments. We operate in Greater Vancouver Area, B.C. & in
            Reykjavik, Iceland.
          </p>
        </div>

        {/* Center: Leaf Image */}
        <div className="footer__leaf-container">
          <img src={rainbow} alt="Leaf Logo" className="footer__leaf" />
        </div>

        {/* Right: Links Section */}
        <div className="footer__links-section">
          <div className="footer__links">
            <h4 className="footer__title">Resources</h4>
            <ul className="footer__list">
              <li><a href="#">Services & Prices</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list">
              <li><a href="tel:+18889836026">+1 (604) 716-1810</a></li>
              <li><a href="mailto:mossmediainfo@gmail.com">mossmediainfo@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; All rights reserved</p>
        <p className="footer__copyright">
          Made by <a className="footer__link" href="https://www.linkedin.com/in/tatianapriv/" target="_blank" rel="noopener noreferrer">Tatiana Privezentseva</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
