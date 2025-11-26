import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFigma, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiNodedotjs, SiMongodb, SiGit, SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Git", icon: <SiGit className="text-red-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
  ];

  return (
    <section
      id="skills"
      className="px-6 pt-16 pb-10 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        My <span className="text-blue-400">Skills</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-lg"
      >
        Technologies and tools I work with to build efficient, scalable and visually engaging web applications.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 hover:border-blue-400 
                       px-5 py-3 rounded-xl text-blue-300 text-base sm:text-lg font-medium transition-all duration-300 
                       shadow-[0_0_10px_rgba(59,130,246,0.25)] hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
