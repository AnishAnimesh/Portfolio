import { HiAcademicCap, HiArrowUpRight } from "react-icons/hi2";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const education = [
  {
    dates: "2023 — 2027",
    school: "K J Somaiya College of Engineering",
    qualification: "B.Tech in Computer and Communication Engineering",
    label: "UNDERGRADUATE",
  },
  {
    dates: "2021 — 2023",
    school: "Champions Academy",
    qualification: "Higher Secondary Education",
    label: "HIGHER SECONDARY",
  },
  {
    dates: "2009 — 2021",
    school: "Atomic Energy Central School - 4",
    qualification: "Secondary Education",
    label: "SECONDARY",
  },
];

function Education() {
  return (
    <section
      tabIndex={-1}
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="education-title"
            number="05"
            label="EDUCATION"
            title="A foundation for"
            accent="what’s next."
            description="The learning journey behind the work. Each chapter brings a new perspective."
          />
        </Reveal>

        <ol className="education-list">
          {education.map((item, index) => (
            <li key={item.school}>
              <Reveal delay={index * 0.06}>
                <article className="education-row">
                  <div className="education-year">
                    <HiAcademicCap aria-hidden="true" />
                    <span>{item.dates}</span>
                  </div>
                  <div className="education-detail">
                    <p className="mini-label">{item.label}</p>
                    <h3>{item.school}</h3>
                    <p>{item.qualification}</p>
                  </div>
                  <span className="education-location">Mumbai</span>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        <a
          className="text-link education-resume"
          href="/anishresume.pdf"
          download="Anish-Animesh-Sahu-Resume.pdf"
        >
          The complete story, in my resume <HiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Education;
