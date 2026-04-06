import "../styles/Experience.css";

const Experience = () => {
  const educationJourney = [
    {
      location: "Dominican Republic ",
      level: "Primary School",
      description: "Foundation of my academic journey. ",
    },
    {
      location: "Brasil",
      level: "Secondary School",
      description:
        "8th grade through 2nd year of High Scool, Developed logic and Multiligual skils. ",
    },
    {
      location: "United states ",
      level: "High School Senior/ CS Start",
      description:
        " Completed my final year and began deep-diving into Computer Science. ",
    },
  ];
  const certifications = [
    {
      title: "CS50: Intro to Programing ",
      provider: "Harvard University / Online",
      info: "Self-tauht fundamentals: Algoritms, C, and Structures.",
    },
    {
      title: " TodCODE: intro to programing ",

      provider: "Prof.clarita",
      info: "First steps into OOP (Object-Oriented Programming) and Java syntax.",
    },
    {
      title: "AWS Cloud Plactitioner",
      provider: "Amazon Web Services",

      info: "Fundamental concepts of Cloud computing and infrastructure.",
    },
    {
      title: "Fullstack Web",
      provider: "MiduDev/ Tech Communities",
      info: "modern React, Node.js, And JavaScript Ecosystem",
    },
  ];

  return (
    <section id="Experience" className="journey-section">
      <div className="section-header">
        <h2>My Journey</h2>
        <p>A global path through education and technology.</p>
      </div>

      <div className="path-grid">
        {educationJourney.map((edu, index) => (
          <div key={index} className="path-card">
            <span className="location-tag">{edu.location}</span>
            <h3>{edu.level}</h3>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      <div className="section-header certs-header">
        <h2>Certifications & Learning</h2>
      </div>

      <div className="certs-list">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-item">
            <div className="cert-accent">
              <h4>{cert.title}</h4>
              <span className="provider">{cert.provider}</span>
              <p>{cert.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
