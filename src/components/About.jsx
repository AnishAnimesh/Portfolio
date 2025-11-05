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
        className="text-4xl font-bold mb-12 text-center"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      {/* Content Container */}
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-14">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-[400px] md:h-[460px] lg:w-[450px] lg:h-[520px]
                     rounded-2xl overflow-hidden border-[3px] border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.4)]
                     hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-500"
        >
          <img
            src="ANISH.jpg"
            alt="Anish Animesh Sahu"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-blue-400 font-semibold">Anish Animesh Sahu</span>, 
            a passionate developer and lifelong learner pursuing 
            <span className="text-blue-400"> Computer and Communication Engineering </span> 
            at KJ Somaiya College of Engineering.  
            I’m driven by curiosity, creativity, and the thrill of turning innovative ideas 
            into functional, user-focused digital experiences.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My skill set spans <span className="text-blue-400">Frontend and Full Stack Development</span> — 
            building scalable applications using <span className="text-blue-400">React, Node.js, Express.js, MongoDB,</span> 
            and <span className="text-blue-400">Figma</span> for intuitive UI/UX design.  
            I love blending logic with creativity to craft web solutions that feel elegant and efficient.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Outside of development, I constantly explore emerging tech — from 
            <span className="text-blue-400"> AI-driven interfaces</span> to performance optimization.  
            My goal is to design experiences that not only work seamlessly but also inspire people through technology.
          </p>

          {/* Education Section */}
          <div className="mt-10">
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
