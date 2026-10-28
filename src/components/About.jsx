import {
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const principles = [
  {
    icon: HiOutlineLightBulb,
    title: "Start with a real problem",
    text: "Useful experiences begin with understanding the people who need them.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Learn through making",
    text: "Explore an idea, test it, and improve it. Every project is a chance to grow.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Care about the details",
    text: "Thoughtful interfaces and clear, maintainable work make a difference.",
  },
];

function About() {
  return (
    <section
      tabIndex={-1}
      id="about"
      className="section"
      aria-labelledby="about-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="about-title"
            number="01"
            label="BEHIND THE WORK"
            title="About"
            accent="Me"
          />
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-copy">
            <h3>
              An engineer in the making.
              <br />A builder at heart.
            </h3>
            <p>
              I’m pursuing a B.Tech in Computer and Communication Engineering at
              K J Somaiya College of Engineering, Mumbai. I enjoy understanding
              how things work and building practical solutions around that
              understanding.
            </p>
            <p>
              My work includes web and mobile applications, computer vision, and
              data analytics. From a civic reporting platform to text
              recognition during my BARC internship, I’m drawn to projects with
              a clear, real-world purpose.
            </p>
            <p>
              I care about thoughtful interfaces, learning through
              experimentation, and making each project a little better than the
              last.
            </p>
            <a className="text-link" href="#education">
              Explore my education <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
          <div className="principles">
            {principles.map(({ icon, title, text }, index) => {
              const Icon = icon;
              return (
                <Reveal key={title} delay={index * 0.06}>
                  <article className="principle">
                    <span className="principle-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
