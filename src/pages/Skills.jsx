import { useTranslation } from "react-i18next";
import "../styles/Skills.css";

const Skills = () => {
  const { t } = useTranslation();

  const skillsCategories = [
    {
      categoryKey: "skill_cat_frontend",
      icon: "\u{1F4BB}",
      items: [
        { name: "React", emoji: "\u269B\uFE0F" },
        { name: "JavaScript", emoji: "\u{1F4DD}" },
        { name: "TypeScript", emoji: "TS" },
        { name: "CSS3", emoji: "\u{1F3A8}" },
      ],
    },
    {
      categoryKey: "skill_cat_backend",
      icon: "\u2699\uFE0F",
      items: [
        { name: "Node.js", emoji: "\u{1F9E9}" },
        { name: "Express", emoji: "\u{1F682}" },
        { nameKey: "skill_rest_apis", emoji: "\u{1F50C}" },
      ],
    },
    {
      categoryKey: "skill_cat_cloud",
      icon: "\u2601\uFE0F",
      items: [
        { name: "AWS", emoji: "\u2601\uFE0F" },
        { name: "Git", emoji: "\u{1F33F}" },
        { name: "Vite", emoji: "\u26A1" },
        { name: "Docker", emoji: "\u{1F433}" },
      ],
    },
    {
      categoryKey: "skill_cat_workflow",
      icon: "\u{1F4C4}",
      items: [
        { name: "Termux", emoji: "\u{1F4F1}" },
        { name: "Linux", emoji: "\u{1F427}" },
        { nameKey: "skill_mobile_first", emoji: "\u{1F4F2}" },
      ],
    },
  ];

  return (
    <section id="Skills" className="skills-section">
      <h2>{t("skills_title")}</h2>
      <p>{t("skills_subtitle")}</p>
      <div className="skills-container">
        {skillsCategories.map((skill, index) => (
          <div key={index} className="skill-group">
            <h3>
              {skill.icon} {t(skill.categoryKey)}
            </h3>
            <div className="skill-tags">
              {skill.items.map((item) => (
                <span key={item.name ?? item.nameKey} className="skill-tag">
                  {item.emoji}{" "}
                  {item.nameKey ? t(item.nameKey) : item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
