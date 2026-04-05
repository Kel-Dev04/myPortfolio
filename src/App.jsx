import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <main>
          <section id="Home">
            {" "}
            <Home />
          </section>
          <section id="About">
            {" "}
            <About />
          </section>
          <section id="Projects">
            {" "}
            <Projects />
          </section>
          <section id="Skills" className="skills-section">
            {" "}
            <Skills />
          </section>
          <section id="Services">
            {" "}
            <Services />
          </section>
          <section id="Experience">
            <Experience />
          </section>
          <section className="contact-section" id="Contact">
            {" "}
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
