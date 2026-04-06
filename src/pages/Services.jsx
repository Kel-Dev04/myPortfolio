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
        "FrameWork",
        "vite",
        "PERN Stack",
        "Web App",
      ],
      description:
        "Building fast, SEO-friendly web applications With Modern Architecture.",
    },

    {
      title: "Multilingual Tech Support",
      icon: "🧑🏽‍💻",
      tags: ["Customer Success", "Call center", "Technical Help", "Bilingual"],
      description:
        "Expert support and communication in English, Spanish, Portuguese, and Haitien Creole. ",
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      tags: ["AWS", "Infrastructure", "Deployment", "Automation"],
      description:
        "Secure and scalable cloud soluctions using amazon web services or others clouds soluctions. ",
    },
    {
      title: "Software Localization",
      icon: "🌎",
      tags: ["Translation", "Global Markets", "UI/UX Adaption"],
      description:
        "Adaptioning your software for international users and multiple languages.",
    },
  ];

  return (
    <section id="Services" className="services-section">
      <div className="services-blur-effect"></div>

      <header className="services-header">
        <span className="subtitle"> Expertise</span>
        <h2>
          What I Can Do <span className="highlight"> For You</span>
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
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
