import Navbar from "./Navbar";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/Nqv7401.svg" alt="KelvRuntime logo" className="logo-icon" />
        <span>KelvRuntime</span>
      </div>

      <nav className="nav">
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
