import "../styles/Home.css";
import profileImg from "../assets/profileImg.png";

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="container-hero-grid">
        <div className="hero-left">
          <div className="availability-tag">
            <span className="pulse-dot"></span>
            <span className="status-label"> Available for Hire</span>
          </div>
          <h1 className=" hero-title">
            Engineering <span className="gradient-text">Global</span> Solutions
          </h1>
          <p className="hero-description">
            I&apos;m <strong>Kelvin C Edouard (kelvruntim)</strong>, a software
            engineer bridging the gap between code and communication across four
            languages.
          </p>
          <div className="hero-actions">
            <a href="#Contact" className="btn-main">
              get Started 🚀
            </a>
            <a href="#About" className="btn-link">
              The Story → 👉
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="image-border-glow"></div>
            <img
              src={profileImg}
              alt="Kelvin C Edouard"
              className=" hero-avatar"
              fetchPriority="high"
              loading="eager"
            />

            <div className="floating-badge">Open to work</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
