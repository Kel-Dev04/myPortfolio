import { useTranslation } from "react-i18next";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>
            Kelv<span>Runtime</span>
          </h3>
          <p>{t("footer_tagline")}</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/kelvruntime"
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
        <p>
          &copy; {currentYear} Kelvin C Edouard. {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
