import "../styles/Services.css";

const Services = () => {
  const serviceTypes = [
    {
      title: "Full-Stack Development",
      icon: "⚡",
      tags: [
        "React.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Framework",
        "Vite",
        "PERN Stack",
        "Web App",
      ],
      description:
        "Building fast, SEO-friendly web applications with modern architecture and best practices.",
    },

    {
      title: "Multilingual Tech Support",
      icon: "🧑🏽‍💻",
      tags: ["Customer Success", "Support", "Technical Help", "Bilingual"],
      description:
        "Expert technical support in English, Spanish, Portuguese, and Haitian Creole.",
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      tags: ["AWS", "Infrastructure", "Deployment", "Automation"],
      description:
        "Secure and scalable cloud solutions using AWS and other cloud platforms.",
    },
    {
      title: "Software Localization",
      icon: "🌎",
      tags: ["Translation", "Global Markets", "UI/UX Adaptation"],
      description:
        "Adapting software for international users and multiple languages.",
    },
  ];

  return (
    <section id="Services" className="services-section">
      <header className="services-header">
        <h2>
          What I Can Do <span className="highlight">For You</span>
        </h2>
      </header>

      <div className="services-wrapper">
        {serviceTypes.map((s, index) => (
          <div key={index} className="services-glass-card">
            <div className="card-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>

            <div className="service-tags">
              {s.tags.map((tag) => (
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
