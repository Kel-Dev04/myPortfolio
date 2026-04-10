import { useTranslation } from "react-i18next";
import "../styles/Experience.css";

const Experience = () => {
  const { t } = useTranslation();

  const educationKeys = [
    { locationKey: "edu_0_location", levelKey: "edu_0_level", descKey: "edu_0_desc" },
    { locationKey: "edu_1_location", levelKey: "edu_1_level", descKey: "edu_1_desc" },
    { locationKey: "edu_2_location", levelKey: "edu_2_level", descKey: "edu_2_desc" },
  ];

  const certificationKeys = [
    {
      titleKey: "cert_0_title",
      providerKey: "cert_0_provider",
      infoKey: "cert_0_info",
    },
    {
      titleKey: "cert_1_title",
      providerKey: "cert_1_provider",
      infoKey: "cert_1_info",
    },
    {
      titleKey: "cert_2_title",
      providerKey: "cert_2_provider",
      infoKey: "cert_2_info",
    },
    {
      titleKey: "cert_3_title",
      providerKey: "cert_3_provider",
      infoKey: "cert_3_info",
    },
  ];

  return (
    <section id="Experience" className="journey-section">
      <div className="section-header">
        <h2>{t("journey_title")}</h2>
        <p>{t("journey_subtitle")}</p>
      </div>

      <div className="path-grid">
        {educationKeys.map((edu, index) => (
          <div key={index} className="path-card">
            <span className="location-tag">{t(edu.locationKey)}</span>
            <h3>{t(edu.levelKey)}</h3>
            <p>{t(edu.descKey)}</p>
          </div>
        ))}
      </div>

      <div className="section-header certs-header">
        <h2>{t("certs_section_title")}</h2>
      </div>

      <div className="certs-list">
        {certificationKeys.map((cert, index) => (
          <div key={index} className="cert-item">
            <div className="cert-accent">
              <h4>{t(cert.titleKey)}</h4>
              <span className="provider">{t(cert.providerKey)}</span>
              <p>{t(cert.infoKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
