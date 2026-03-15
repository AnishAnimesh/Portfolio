import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white px-4 sm:px-6 md:px-10 lg:px-16 pt-28 pb-16"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
      >
        Hi, I'm <span className="text-blue-400">Anish Animesh Sahu</span>
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6"
      >
        Developer | UI/UX Enthusiast | Data Analytics Explorer
      </motion.h2>

      {/* About paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mb-6 leading-relaxed"
      >
        I’m a passionate developer with experience in building 
        responsive, scalable, and user-friendly web applications using modern 
        frontend and backend technologies. My expertise includes 
        <span className="text-blue-400"> React</span>, 
        <span className="text-blue-400"> Node.js</span>, 
        <span className="text-blue-400"> Express.js</span>, and 
        <span className="text-blue-400"> MongoDB</span>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed"
      >
        I enjoy creating clean and intuitive UI/UX designs using 
        <span className="text-blue-400"> Figma</span> and following strong coding 
        practices with structured architecture. I also have foundational experience 
        in <span className="text-blue-400"> Data Analytics</span> using 
        <span className="text-blue-400"> Python (NumPy, Pandas, Matplotlib, Seaborn)</span> 
        and <span className="text-blue-400"> SQL</span> to generate meaningful insights. 
        I am eager to continuously learn new technologies and build impactful 
        solutions that solve real-world problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        <a
          href="#about"
          className="bg-blue-500 hover:bg-blue-600 px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition font-medium text-sm sm:text-base"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="border border-blue-400 px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-500/10 transition font-medium text-sm sm:text-base"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex gap-5 sm:gap-6 mt-10 text-xl sm:text-2xl"
      >
        <a
          href="https://github.com/AnishAnimesh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anish-animesh-sahu-45330426a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;