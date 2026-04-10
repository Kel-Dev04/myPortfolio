import Card from "../components/Card";
import anjoLogo from "../assets/anjo-logo.png";

const Projects = () => {
  return (
    <section id="Projects" className="projects-section">
      <h2>My Projects</h2>
      <p>Here are some of my recent projects.</p>
      <div className="projects-container">
        <Card
          title="Personal Portfolio"
          description="A modern, responsive portfolio website built with React, featuring smooth animations, dark theme, and optimized performance."
          image={anjoLogo}
          link="#"
        />

        <Card
          title="E-Commerce Platform"
          description="Full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing."
          image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
          link="#"
        />

        <Card
          title="Task Management App"
          description="Collaborative task management application with real-time updates, drag-and-drop functionality, and team features."
          image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
          link="#"
        />

        <Card
          title="Weather Dashboard"
          description="Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts."
          image="https://images.unsplash.com/photo-1592210454359-805263f82693?w=400&h=250&fit=crop"
          link="#"
        />

        <Card
          title="Social Media Analytics"
          description="Comprehensive analytics dashboard for social media management with data visualization and reporting features."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
          link="#"
        />

        <Card
          title="AI Chat Assistant"
          description="Intelligent chat assistant powered by machine learning, featuring natural language processing and context awareness."
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
          link="#"
        />
      </div>
    </section>
  );
};

export default Projects;
