import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>
            Kelv<span>Runtime</span>
          </h3>
          <p>Building scalable solutions and clean interfaces.</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/kelvRuntime"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-c-edouard"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/kelvin__ed"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div>
        <p>&copy; {currentYear} Kelvin C Edouard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
