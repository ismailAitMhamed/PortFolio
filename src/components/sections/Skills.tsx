


const Skills: React.FC<{ activeSkill: string }> = ({ activeSkill }) => {
  return (
    <section className={`skills-section ${activeSkill}`}>
      <h2>Skills</h2>
      {/* Render skills content based on activeSkill */}
    </section>
  );
};

export default Skills;
