import { useTranslation } from "react-i18next";
import "../styles/Home.css";
import profileImg from "../assets/profileImg.webp";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="Home" className="home-section">
      <div className="container-hero-grid">
        <div className="hero-left">
          <div className="availability-tag">
            <span className="pulse-dot"></span>
            <span className="status-label">{t("status_available")}</span>
          </div>
          <h1 className=" hero-title">
            {t("hero_prefix")}{" "}
            <span className="gradient-text">{t("hero_highlight")}</span>{" "}
            {t("hero_suffix")}
          </h1>
          <p className="hero-description">
            {t("hero_i_am")} <strong>Kelvin C Edouard (kelvruntime)</strong>,{" "}
            {t("hero_description_rest")}
          </p>
          <div className="hero-actions">
            <a href="#Contact" className="btn-main">
              {t("btn_get_started")}
            </a>
            <a href="#About" className="btn-link">
              {t("btn_story")}
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="image-border-glow"></div>
            <img
              src={profileImg}
              alt={t("hero_avatar_alt")}
              className=" hero-avatar"
              fetchPriority="high"
              loading="eager"
            />

            <div className="floating-badge">{t("open_to_work")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
