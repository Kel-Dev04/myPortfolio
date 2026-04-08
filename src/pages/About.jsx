
import "../styles/About..css";

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
              I don't just build applications; I translate complex technical
              needs into global solutions across 4 languages 3 cultures.
            </p>

            <div className="experience-timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Cultural Adaptability</h4>
                <p>
                  From the dominican Republic to Brasil to the USA now in Haiti. i
                  thrive in diversity.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Technical Mastery</h4>
                <p>
                  CS50 mindset combined with modern Full-stack developmet (
                  React, Node,AWS ).
                </p>
              </div>
            </div>
          </div>

          <div className="about-stats-grid">
            
            <div className="stat-label">
              <div className="stat-box">
                <span className="stat-number">04</span>
                <span className="stat-label">Native/Fluent Langueges</span>
              </div>
              <div className="stat-box featured">
                <span className="stat-number">100%</span>
                <span className="stat-label">Problem Solver Mindset</span>
              </div>
              <div className="stat-box">
                
                <span className="stat-number">Global</span>
                <span className="stat-label"> Project Ready</span>
              </div>
            </div>
          </div>

          <div className="about-footer-teaser">
            <p>
              Want to see how i can connect your besiness to the world?
              <a href="#Contact" className="teaser-link">
                Les's talk logic.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
