// src/components/Header.jsx
import React from 'react';
import logo from "../../assets/Logos/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__left">
      <img
              src={logo}
              className="nav__logo"
              alt="moss media logo"
            />
            <p>Moss Media</p>
            </div>
        <ul className="nav__list">
          <li><a href="#home">Portfolio</a></li>
          <li><a href="#about">Services</a></li>
          <li><a href="#services">Prices</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

// function Header({ DarkMode, setDarkMode }) {
//     return (
//       <header className={`header ${DarkMode ? `header--dark-mode` : ``}`}>
//         {/* test dark mode for the header */}
//         <div className="header__container">
//           <Link to="/" title="home">
//             <img
//               src={logo}
//               className="header__logo header__logo--dark-mode"
//               alt="logo"
//             />
//           </Link>
//           <button
//             className="toggle"
//             onClick={() => setDarkMode(!DarkMode)}
//           ></button>
//           <div className="header__search">
//             <form id="header__form" className="header__form">
//               <input
//                 id="search"
//                 className="header__text"
//                 type="text"
//                 placeholder="Search"
//                 name="searchBar"
//               />
//             </form>
//             <img src={mohan} className="header__avatar" alt="avatar" />
//             <Button className="btn--upload" text="Upload" link="/upload" />
//           </div>
//         </div>
//       </header>
//     );
//   }

export default Header;
