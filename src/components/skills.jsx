import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiC, SiTableau, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "C", icon: <SiC className="text-blue-400" /> },
      ],
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        { name: "Tableau", icon: <SiTableau className="text-indigo-400" /> },
        { name: "Git", icon: <SiGit className="text-red-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-blue-400">Skills</span>
      </motion.h2>

      {/* Skill Categories */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700 hover:border-blue-500/50 rounded-2xl p-6 text-center 
                       shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center bg-gray-800/70 border border-gray-700 hover:border-blue-400 
                             rounded-xl px-4 py-3 w-28 sm:w-32 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-gray-300 text-sm sm:text-base">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
