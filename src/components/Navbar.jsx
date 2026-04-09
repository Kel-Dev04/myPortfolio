import { useState } from "react"
import Angellogo from '../assets/anjo-logo.png'
import '../styles/Header.css' 

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (

    <nav className="header">
      <div className="nav-logo">
        <img src={Angellogo} alt="logo kelvRuntime" className="logo-img" />
        <span className="logo-text">
          Kelv<span>RunTime</span>
        </span>
      </div>

     
      <div
        className={active ? "menu-toggle is-active" : "menu-toggle"}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={active ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#Home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#Services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#Projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={toggleMenu} className="nav-cta">
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

  export default Navbar;
