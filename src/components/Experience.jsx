import {
  HiArrowUpRight,
  HiOutlineBriefcase,
  HiOutlineCheck,
} from "react-icons/hi2";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const contributions = [
  "Developed a desktop text recognition application using C#, .NET Framework, Windows Forms, OpenCvSharp, and Tesseract OCR.",
  "Implemented grayscale conversion, thresholding, and noise reduction to improve OCR accuracy.",
  "Built multi-region text detection with bounding box visualization and region-wise text extraction.",
  "Integrated CSV export and improved the OCR workflow through testing, debugging, and performance optimization.",
];

function Experience() {
  return (
    <section
      tabIndex={-1}
      id="experience"
      className="section section-tinted"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="experience-title"
            number="03"
            label="EXPERIENCE"
            title="Learning beyond"
            accent="the classroom."
            description="Applying ideas to real problems, with hands-on experience and a focus on the details."
          />
        </Reveal>
        <Reveal>
          <article className="experience-card">
            <div className="experience-sidebar">
              <span className="company-mark">
                <HiOutlineBriefcase aria-hidden="true" />
              </span>
              <p className="mini-label">SUMMER INTERNSHIP</p>
              <h3>BARC</h3>
              <p>
                Bhabha Atomic
                <br />
                Research Centre
              </p>
              <div className="experience-meta">
                <span>Mumbai, India</span>
                <span>May 21, 2026 – July 21, 2026</span>
              </div>
            </div>
            <div className="experience-content">
              <p className="mini-label">THE ROLE</p>
              <h4>Summer Intern</h4>
              <p className="experience-role">
                Text Recognition from Visual Images
              </p>
              <ul className="contributions">
                {contributions.map((text) => (
                  <li key={text}>
                    <HiOutlineCheck aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="experience-actions">
                <a
                  className="button button-secondary"
                  href="/certificates/barc-internship-certificate.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View BARC internship certificate (opens in a new tab)"
                >
                  View internship certificate <HiArrowUpRight aria-hidden="true" />
                </a>
                <a className="text-link" href="#project-ocr">
                  Explore the OCR project <HiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
