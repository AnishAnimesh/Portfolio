import { motion } from "framer-motion";
import { 
  FaJs, 
  FaReact, 
  FaPython, 
  FaGitAlt, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiScikitlearn 
} from "react-icons/si";

function Skills() {
  const coreSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "SQL", icon: <span className="text-blue-400 text-base">SQL</span> },
    { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Core <span className="text-blue-400">Skills</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
      >
        {coreSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-12 px-3 flex items-center justify-center gap-2
                       bg-gray-800/60 border border-gray-700
                       hover:border-blue-400 rounded-md
                       text-xs sm:text-sm font-medium
                       transition-all duration-300"
          >
            <span className="text-base">{skill.icon}</span>
            <span className="whitespace-nowrap">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;