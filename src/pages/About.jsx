import { useTranslation } from "react-i18next";
import "../styles/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="About" className="about-section">
      <div className="about-glow"></div>

      <div className="about-content">
        <div className="about-grid">
          <div className="container-about">
            <span className="about-tag">{t("about_tag")}</span>
            <h2 className="about-title">
              {t("about_title_1") ? `${t("about_title_1")} ` : null}
              <span className="highlight-blue">{t("about_title_highlight")}</span>
              {t("about_title_2") ? ` ${t("about_title_2")}` : null}
            </h2>
            <p className="about-intro">{t("about_intro")}</p>

            <div className="experience-timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>{t("about_timeline_1_h")}</h4>
                <p>{t("about_timeline_1_p")}</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>{t("about_timeline_2_h")}</h4>
                <p>{t("about_timeline_2_p")}</p>
              </div>
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="stats-stack">
              <div className="stat-box">
                <span className="stat-number">04</span>
                <span className="stat-label">{t("stat_languages_label")}</span>
              </div>
              <div className="stat-box featured">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t("stat_mindset_label")}</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{t("stat_global_value")}</span>
                <span className="stat-label">{t("stat_ready_label")}</span>
              </div>
            </div>
          </div>

          <div className="about-footer-teaser">
            <p>
              {t("about_teaser_text")}
              <a href="#Contact" className="teaser-link">
                {t("about_teaser_link")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
