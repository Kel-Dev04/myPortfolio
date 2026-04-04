import Navbar from "./Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">KelDev</div>

      <nav className="nav">
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
