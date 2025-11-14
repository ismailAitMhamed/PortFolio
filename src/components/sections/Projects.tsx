

const Projects: React.FC<{ activeProject: string }> = ({ activeProject }) => {
  return (
    <section className={`projects-section ${activeProject}`}>
      <h2>Projects</h2>
      {/* Render project content based on activeProject */}
    </section>
  );
};

export default Projects;
