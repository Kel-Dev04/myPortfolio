import Card from "../components/Card";

const Projects = () => {
  return (
    <section  id="projects">
      
      <h2>My Projects</h2>
      <p>Here are my projects.</p>
      <div className="projects-container">
      <Card
        title="my portfolio"
        description="A personal portfolio built with react and css vanilla."
        image="https://via.placeholder.com/300x200"
        link="https://example.com"
      />

      
        <Card
        title="web ano"
        description="A personal web built with react  and css."
        image = "https://via.placeholder.com/300x200"
        link="https://example.com"
        
        
        />


        
        <Card
        title="A hello world"
        description="A  only hello work built with react and css vanilla."
        image = "https://via.placeholder.com/300x200"
        link="https://example.com"
        
        
        />
      </div>
    </section>
  );
};

export default Projects;
