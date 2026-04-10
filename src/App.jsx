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
import useReveal from "./components/UseReveal";
import { useSyncedDocumentMeta } from "./hooks/useSyncedDocumentMeta";

function App() {
  useSyncedDocumentMeta();
  useReveal();
  return (
    <div className="app">
      <Header />

      <main>
        <section className="reveal">
        <Home  />
        </section>
        <section className="reveal">
        <About />
        </section>
        <section className="reveal">
        <Services />
        </section>
        <section className="reveal">
        <Skills />
        </section>
        <section className="reveal">
        <Projects />
        </section>
        <section className="reveal">
        <Experience />
        </section>
        <section className="reveal">
        <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
