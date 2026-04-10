
import "../styles/About.css";

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="about-glow"></div>

      <div className="about-content">
        <div className="about-grid">
          <div className="container-about">
            <span className="about-tag">Beyond the Code</span>
            <h2 className="about-title">
              The <span className="highlight-blue">Global DNA</span> of a
              Developer
            </h2>
            <p className="about-intro">
              I&apos;m Kelvin C Edouard, also known as kelvruntim. I do more
              than build applications; I transform complex technical needs into
              impactful global solutions across four languages and three
              cultures.
            </p>

            <div className="experience-timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Cultural Adaptability</h4>
                <p>
                  My journey from the Dominican Republic to Brazil, the United
                  States, and now Haiti has strengthened my ability to adapt,
                  collaborate, and lead across diverse environments.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Technical Mastery</h4>
                <p>
                  I bring a CS50-driven problem-solving mindset combined with
                  modern full-stack development expertise in React, Node.js,
                  and AWS.
                </p>
              </div>
            </div>
          </div>

          <div className="about-stats-grid">
            
            <div className="stats-stack">
              <div className="stat-box">
                <span className="stat-number">04</span>
                <span className="stat-label">Native/Fluent Languages</span>
              </div>
              <div className="stat-box featured">
                <span className="stat-number">100%</span>
                <span className="stat-label">Problem Solver Mindset</span>
              </div>
              <div className="stat-box">
                
                <span className="stat-number">Global</span>
                <span className="stat-label">Project Ready</span>
              </div>
            </div>
          </div>

          <div className="about-footer-teaser">
            <p>
              Want to see how I can connect your business to the world?
              <a href="#Contact" className="teaser-link">
                Let&apos;s talk strategy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;