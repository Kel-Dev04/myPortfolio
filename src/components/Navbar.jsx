import { useState } from "react";
import { useTranslation } from "react-i18next";
import Angellogo from "../assets/anjo-logo.webp";
import "../styles/Header.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="header">
      <div className="nav-logo">
        <img src={Angellogo} alt={t("nav_logo_alt")} className="logo-img" />
        <span className="logo-text">
          Kelv<span>Runtime</span>
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
            {t("nav_home")}
          </a>
        </li>
        <li>
          <a href="#About" onClick={toggleMenu}>
            {t("nav_about")}
          </a>
        </li>
        <li>
          <a href="#Services" onClick={toggleMenu}>
            {t("nav_services")}
          </a>
        </li>
        <li>
          <a href="#Skills" onClick={toggleMenu}>
            {t("nav_skills")}
          </a>
        </li>
        <li>
          <a href="#Projects" onClick={toggleMenu}>
            {t("nav_projects")}
          </a>
        </li>
        <li>
          <a href="#Experience" onClick={toggleMenu}>
            {t("nav_experience")}
          </a>
        </li>
        <li className="nav-lang">
          <label htmlFor="lang-select" className="visually-hidden">
            {t("lang_aria")}
          </label>
          <select
            id="lang-select"
            className="lang-select"
            value={["en", "pt", "es", "ht"].includes(lang) ? lang : "en"}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
            aria-label={t("lang_aria")}
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
            <option value="es">ES</option>
            <option value="ht">HT</option>
          </select>
        </li>
        <li>
          <a href="#Contact" onClick={toggleMenu} className="nav-cta">
            {t("nav_hire")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
