import { motion } from "framer-motion";

const projects = [
  {
    title: "Netflix Clone",
    desc: "A responsive movie streaming UI built with React, Firebase, and TMDB API.",
    link: "https://github.com/anishanimeshsahu/netflix-clone"
  },
  {
    title: "Discord ChatBot",
    desc: "This project is a smart Discord chatbot built with Python and discord.py, powered by OpenAI’s GPT model. It provides instant AI responses when mentioned, maintains recent chat context, and includes a !reset command to clear memory. Secure, efficient, and lightweight, it enhances any Discord server with intelligent conversation features.",
    link: "https://github.com/AnishAnimesh/Discord-Chatbot",
  },
  {
    title: "CIVIC-AI",
    desc: "Civic AI is a mobile-first platform that enables citizens to easily report and track civic issues using AI-powered image detection, real-time status updates, geolocation mapping, and community involvement. Built with React Native, Supabase, and Gemini Vision, it connects citizens and civic authorities for transparent, efficient issue resolution and smarter cities.",
    link: "https://github.com/AnishAnimesh/CIVIC-AI_mini_project",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 pt-16 pb-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900 border border-gray-700 hover:border-blue-500/50 rounded-2xl p-6 shadow-lg 
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

   
    </section>
  );
}

export default Projects;
