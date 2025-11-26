import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center px-6 pt-16 pb-10 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Contact <span className="text-blue-400">Me</span>
      </motion.h2>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-300 max-w-xl mb-6 leading-relaxed"
      >
        I’m always excited to connect — whether it's about development, internships,
        collaborations, or networking. Feel free to reach out!
      </motion.p>

      {/* Email Button - opens Gmail compose */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        href="https://mail.google.com/mail/?view=cm&fs=1&to=anishanimesh.s@somaiya.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-blue-500/40"
      >
        Email Me
      </motion.a>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-8 mt-8 text-3xl"
      >
        <a
          href="https://github.com/AnishAnimesh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anish-animesh-sahu-45330426a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/anish.animesh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform hover:scale-125"
        >
          <FaInstagram />
        </a>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-gray-500 text-sm mt-8"
      >
        © {new Date().getFullYear()} Anish Animesh Sahu — All Rights Reserved
      </motion.p>
    </section>
  );
}

export default Contact;
