import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
