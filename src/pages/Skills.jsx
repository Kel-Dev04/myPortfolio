import "../styles/Skills.css";

const Skills = () => {
  const skillsCategories = [
    {
      category: "Frontend",
      icon: "   ",
      items: [
        { name: "React", emoji: "  " },
        { name: "JavaScript", emoji: "  " },
        { name: "TypeScript", emoji: "  " },
        { name: "CSS3", emoji: "  " },
      ],
    },
    {
      category: "Backend",
      icon: "  ",
      items: [
        { name: "Node.js", emoji: "  " },
        { name: "Express", emoji: "  " },
        { name: "REST APIs", emoji: "  " },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "  ",
      items: [
        { name: "AWS", emoji: "  " },
        { name: "Git", emoji: "  " },
        { name: "Vite", emoji: "  " },
        { name: "Docker", emoji: "  " },
      ],
    },
    {
      category: "Workflow",
      icon: "  ",
      items: [
        { name: "Termux", emoji: "  " },
        { name: "Linux", emoji: "  " },
        { name: "Mobile-First", emoji: "  " },
      ],
    },
  ];

  return (
    <section id="Skills" className="skills-section">
      <h2>My Skills</h2>
      <p>Technologies and tools I work with daily.</p>
      <div className="skills-container">
        {skillsCategories.map((skill, index) => (
          <div key={index} className="skill-group">
            <h3>
              {skill.icon} {skill.category}
            </h3>
            <div className="skill-tags">
              {skill.items.map((item) => (
                <span key={item.name} className="skill-tag">
                  {item.emoji} {item.name}
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
