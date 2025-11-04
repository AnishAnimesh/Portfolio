import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      {/* Content container */}
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg shadow-blue-500/20 border-2 border-blue-500"
        >
          <img
            src="/IMG_20230914_174153_1.jpg"
            alt="Anish Animesh Sahu"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-blue-400 font-semibold">Anish Animesh Sahu</span>, 
            a tech enthusiast and passionate learner currently pursuing 
            <span className="text-blue-400"> Computer and Communication Engineering</span> 
            at KJ Somaiya College of Engineering.  
            I love exploring new technologies and blending creativity with logic to build 
            user-focused digital solutions that make a difference.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise lies in <span className="text-blue-400">Frontend and Full Stack Development</span>, 
            where I combine technical precision with thoughtful UI/UX design.  
            I’m skilled in technologies like <span className="text-blue-400">React, Node.js, Express.js, MongoDB,</span> 
            and <span className="text-blue-400">Figma</span>.  
            I enjoy transforming ideas into interactive, responsive, and visually appealing web applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Beyond coding, I’m driven by curiosity and a passion for learning — whether it’s exploring 
            AI integrations, improving design workflows, or optimizing performance for real-world applications.  
            I believe great development happens where creativity meets logic.
          </p>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Education</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                🎓 <span className="font-semibold">KJ Somaiya College of Engineering</span> — B.Tech in Computer & Communication Engineering (2023–2027)
              </li>
              <li>
                🏫 Champions Academy — Higher Secondary Education (2021–2023)
              </li>
              <li>
                📘 Atomic Energy Central School-4, Mumbai — Primary & Secondary Education (2009–2021)
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
