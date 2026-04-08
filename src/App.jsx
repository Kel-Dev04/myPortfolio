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
    <div className="app">
      <Header />

      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        
        
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
