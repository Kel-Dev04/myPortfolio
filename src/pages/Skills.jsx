import "../styles/Skills.css";

const Skills = () => {
  const skillsCategories = [
    {
      category: "Fronted",
      items: ["React", "JavaScript", "TypeScript", "CSS3"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },

    {
      category: "Cloud & DevOps",
      items: ["AWS", "Git", "Vite", "Docker"],
    },
    {
      category: "Workflow",
      items: ["termux", "Linux", "Mobile-First Dev"],
    },
  ];

  return (
    <section id="Skills" className="skills-section">
      <h2>My Skills</h2>
      <p>Skills content here.</p>
      <div className="skills-container">
        {skillsCategories.map((skill, index) => (
          <div key={index} className="skill-group">
            <h3>{skill.category}</h3>
            <div className="skill-tags">
              {skill.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
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
