import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HiArrowUpRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectArtwork from "./ProjectArtwork";

const projects = [
  {
    id: "civic",
    category: "MOBILE APPLICATION",
    title: "Civic AI",
    stack: ["React Native", "Supabase", "Google Gemini", "Expo"],
    desc: "A cross-platform civic issue reporting app with real-time reporting and tracking. Google Gemini analyzes images to classify issue category, urgency, and description. Supabase supports secure authentication, storage, and role-based access, while live maps and officer dashboards improve issue visibility and response workflows.",
    link: "https://github.com/AnishAnimesh/CIVIC-AI_mini_project",
  },
  {
    id: "housing",
    category: "MACHINE LEARNING",
    title: "Housing Price Prediction Pipeline",
    stack: ["Python", "Scikit-Learn", "Pandas"],
    desc: "A predictive housing price pipeline comparing Random Forest, Decision Trees, and Linear Regression. Automated preprocessing handles feature scaling, categorical encoding, and missing values. Models are evaluated using 10-fold cross-validation and RMSE to assess generalization on unseen data.",
    link: "https://github.com/AnishAnimesh/Housing-Price-Prediction",
  },
  {
    link: "https://github.com/AnishAnimesh/OCR_Project",
    id: "ocr",
    category: "COMPUTER VISION",
    title: "OCR-Based Text Recognition System",
    stack: ["C#", ".NET Windows Forms", "OpenCvSharp", "Tesseract OCR"],
    desc: "A desktop application that detects and extracts text from images. Grayscale conversion, thresholding, and noise reduction prepare images for OCR. Multi-region detection visualizes bounding boxes and extracts text from individual regions, with an interactive interface for image upload, processing, and CSV export.",
  },
  {
    id: "heatcast",
    category: "HONOURS RESEARCH PROJECT",
    title: "HeatCast: Heatwave Early Warning",
    stack: ["Python", "Scikit-Learn", "PyTorch", "ERA5", "JavaScript"],
    desc: "A heatwave forecasting research project evaluating ongoing events and first-day onset at 1-, 3-, and 7-day lead times across seven European locations. Compares gradient boosting and neural baselines using historical weather data, with regional performance analysis. An interactive observatory presents forecast probabilities, temperature charts, a regional atlas, and CSV exports.",
    link: "https://github.com/AnishAnimesh/Honours-Project-final-yr-",
  },
  {
    id: "hospital",
    category: "FULL-STACK APPLICATION",
    title: "Hospital Management System",
    stack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    desc: "A hospital management application with a React dashboard and an Express/MySQL backend. Supports patient records, doctor management, appointment scheduling and status updates, and billing. The overview brings together recent appointments, appointment status, and billing summaries, with a responsive interface for navigating each workflow.",
    link: "https://github.com/AnishAnimesh/Hospital-Management-System",
  },
];

function Projects() {
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({
    first: 0,
    last: 2,
    previous: false,
    next: true,
  });

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const first = Math.round(track.scrollLeft / step);
    const visible = Math.max(1, Math.round((track.clientWidth + gap) / step));
    const nextPosition = {
      first,
      last: Math.min(projects.length - 1, first + visible - 1),
      previous: track.scrollLeft > 2,
      next: track.scrollLeft < track.scrollWidth - track.clientWidth - 2,
    };
    setPosition((current) =>
      Object.keys(nextPosition).every(
        (key) => current[key] === nextPosition[key],
      )
        ? current
        : nextPosition,
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updatePosition]);

  const scrollProjects = (direction) => {
    const track = trackRef.current;
    const step =
      track.firstElementChild.getBoundingClientRect().width +
      (parseFloat(getComputedStyle(track).columnGap) || 0);
    track.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollProjects(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const track = trackRef.current;
      track.scrollTo({
        left: event.key === "Home" ? 0 : track.scrollWidth,
        behavior: reduceMotion ? "instant" : "smooth",
      });
    }
  };

  return (
    <section
      tabIndex={-1}
      id="projects"
      className="section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-title"
            number="02"
            label="SELECTED WORK"
            title="Ideas turned into"
            accent="something useful."
            description="A few projects that reflect how I think, what I’m learning, and the problems I enjoy solving."
          />
        </Reveal>
        <p id="projects-instructions" className="sr-only">
          Use the previous and next buttons, swipe, or focus the project gallery
          and use the left and right arrow keys. Home and End move to the
          beginning and end.
        </p>
        <div className="projects-carousel">
          <button
            type="button"
            className="carousel-arrow carousel-previous"
            aria-label="Previous projects"
            aria-controls="project-track"
            disabled={!position.previous}
            onClick={() => scrollProjects(-1)}
          >
            <HiChevronLeft aria-hidden="true" />
          </button>
          <div
            ref={trackRef}
            id="project-track"
            className="project-track"
            role="region"
            aria-roledescription="carousel"
            aria-label="Portfolio projects"
            aria-describedby="projects-instructions"
            tabIndex={0}
            onScroll={updatePosition}
            onKeyDown={handleKeyDown}
          >
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className={`project-card project-${project.id}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
              >
                <div className="project-artwork" aria-hidden="true">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ProjectArtwork type={project.id} />
                </div>
                <div className="project-body">
                  <p className="mini-label">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.desc}</p>
                  <ul
                    className="project-stack"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <a
                      className="text-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      View on GitHub <HiArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="carousel-arrow carousel-next"
            aria-label="Next projects"
            aria-controls="project-track"
            disabled={!position.next}
            onClick={() => scrollProjects(1)}
          >
            <HiChevronRight aria-hidden="true" />
          </button>
          <div className="carousel-caption">
            <span aria-live="polite" aria-atomic="true">
              Showing {position.first + 1}
              {position.last !== position.first && (
                <>–{position.last + 1}</>
              )} of {projects.length}
            </span>
            <span className="carousel-hint">
              Explore with the arrows or swipe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
