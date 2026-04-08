import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-logo">KelvRunTime</div>

      <div
        className={'nav-toggle ${isOpen ? "Open" : ""}'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={'nav-links ${isOpen ? "open" : ""}'}>
        <li>
          <a href="#Home" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#About" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li>
          <a href="#Services" onClick={() => setIsOpen(false)}>Services</a>
        </li>
        <li>
          <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="Contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

//<ul className="nav-list">
//  <li>
//  <a href="#Home">Home</a>
//</li>
//
//      <li>
//        <a href="#About">About</a>
//    </li>
//
//    <li>
///    <a href="#Services">Services</a>
//</li>

//<li>
//<a href="#Projects">Projects</a>
// </li>

//<li>
// <a href="#Skills">Skills</a>
//</li>

// <li>
// <a href="#Experience">Experience</a>
//</li>

//<li>
/// <a href="#Contact">Contact me</a>
//</li>
//</ul>
