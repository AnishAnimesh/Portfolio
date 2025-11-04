const projects = [
  {
    title: "Netflix Clone",
    desc: "A responsive movie streaming UI built with React, Firebase, and TMDB API.",
    link: "https://github.com/anishanimeshsahu/netflix-clone"
  },
  {
    title: "Driver Behavior Prediction System",
    desc: "AI-powered system analyzing driving behavior from dashcam & sensor data.",
    link: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-blue-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
