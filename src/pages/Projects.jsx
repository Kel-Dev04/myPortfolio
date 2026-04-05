import Card from "../components/Card";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Here are my projects.</p>
      <div className="projects-container">
        <Card
          title="My Portfolio"
          description="A personal portfolio built with React and vanilla CSS."
          image="https://via.placeholder.com/300x200"
          link="https://example.com"
        />

        <Card
          title="Web App"
          description="A personal web app built with React and CSS."
          image="https://via.placeholder.com/300x200"
          link="https://example.com"
        />

        <Card
          title="Hello World App"
          description="A simple hello world app built with React and vanilla CSS."
          image="https://via.placeholder.com/300x200"
          link="https://example.com"
        />
      </div>
    </section>
  );
};

export default Projects;
