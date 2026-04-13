import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import anjoLogo from "../assets/anjo-logo.webp";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: "project_0_title",
      descKey: "project_0_desc",
      image: anjoLogo,
      link: "#",
    },
    {
      titleKey: "project_1_title",
      descKey: "project_1_desc",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      titleKey: "project_2_title",
      descKey: "project_2_desc",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      titleKey: "project_3_title",
      descKey: "project_3_desc",
      image:
        "https://images.unsplash.com/photo-1592210454359-805263f82693?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      titleKey: "project_4_title",
      descKey: "project_4_desc",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      titleKey: "project_5_title",
      descKey: "project_5_desc",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      link: "#",
    },
  ];

  return (
    <section id="Projects" className="projects-section">
      <h2>{t("projects_title")}</h2>
      <p>{t("projects_subtitle")}</p>
      <div className="projects-container">
        {projects.map((p) => (
          <Card
            key={p.titleKey}
            title={t(p.titleKey)}
            description={t(p.descKey)}
            image={p.image}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
