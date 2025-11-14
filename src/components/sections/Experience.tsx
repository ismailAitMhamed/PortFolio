
const Experience: React.FC<{ activeExperience: string }> = ({ activeExperience }) => {
  return (
    <section className={`experience-section ${activeExperience}`}>
      <h2>Experience</h2>
      {/* Render experience content based on activeExperience */}
    </section>
  );
};

export default Experience;
