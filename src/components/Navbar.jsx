import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // toggle menu on mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-black via-gray-950 to-blue-950 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* reduced side padding */}
      <div className="w-full flex justify-between items-center py-4 px-4 md:px-6">
        {/* name */}
        <h1 className="text-xl sm:text-2xl font-bold text-white cursor-pointer">
          Anish Animesh Sahu<span className="text-blue-400"></span>
        </h1>

        {/* desktop links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-200">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* mobile menu icon */}
        <div
          className="md:hidden text-gray-200 text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* mobile dropdown */}
      <div
        className={`md:hidden bg-gradient-to-b from-black via-gray-950 to-blue-950 absolute top-[64px] left-0 w-full flex flex-col items-center gap-6 py-8 text-lg text-gray-200 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }`}
      >
        <a href="#about" onClick={closeMenu} className="hover:text-blue-400">About</a>
        <a href="#projects" onClick={closeMenu} className="hover:text-blue-400">Projects</a>
        <a href="#skills" onClick={closeMenu} className="hover:text-blue-400">Skills</a>
        <a href="#contact" onClick={closeMenu} className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
