function Skills() {
  const skills = ["HTML", "CSS", "React", "Tailwind", "Python", "C", "Figma", "Tableau"];
  
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-800 px-5 py-2 rounded-full text-blue-400 border border-gray-700 hover:border-blue-400 transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
