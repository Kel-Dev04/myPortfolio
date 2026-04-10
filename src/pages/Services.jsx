import { useTranslation } from "react-i18next";
import "../styles/Services.css";

const Services = () => {
  const { t } = useTranslation();

  const serviceTypes = [
    {
      titleKey: "service_0_title",
      icon: "\u{26A1}",
      tagsKey: "service_0_tags",
      descKey: "service_0_desc",
    },
    {
      titleKey: "service_1_title",
      icon: "\u{1F468}\u{1F3FD}\u{200D}\u{1F4BB}",
      tagsKey: "service_1_tags",
      descKey: "service_1_desc",
    },
    {
      titleKey: "service_2_title",
      icon: "\u2601\uFE0F",
      tagsKey: "service_2_tags",
      descKey: "service_2_desc",
    },
    {
      titleKey: "service_3_title",
      icon: "\u{1F30E}",
      tagsKey: "service_3_tags",
      descKey: "service_3_desc",
    },
  ];

  return (
    <section id="Services" className="services-section">
      <header className="services-header">
        <h2>
          {t("services_header_1")}{" "}
          <span className="highlight">{t("services_header_2")}</span>
        </h2>
      </header>

      <div className="services-wrapper">
        {serviceTypes.map((s, index) => (
          <div key={index} className="services-glass-card">
            <div className="card-icon">{s.icon}</div>
            <h3>{t(s.titleKey)}</h3>
            <p>{t(s.descKey)}</p>

            <div className="service-tags">
              {t(s.tagsKey)
                .split("|")
                .map((tag) => tag.trim())
                .filter(Boolean)
                .map((tag) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
