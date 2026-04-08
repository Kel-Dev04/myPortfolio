import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Built by KelvRuntime — full-stack portfolio with React and Vite.</p>
        <p>
          &copy; {new Date().getFullYear()} KelvRuntime. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
