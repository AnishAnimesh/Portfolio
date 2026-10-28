import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiArrowDown,
  HiArrowUpRight,
  HiArrowRight,
  HiArrowDownTray,
} from "react-icons/hi2";
import Reveal from "./Reveal";

function Hero() {
  return (
    <section
      tabIndex={-1}
      id="home"
      className="hero-section"
      aria-labelledby="hero-title"
    >
      <div className="container hero-layout">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> ANISH ANIMESH SAHU · PORTFOLIO
          </p>
          <h1 id="hero-title">
            Hi, I’m
            <br />
            <span>Anish Animesh Sahu</span>
          </h1>
          <p className="hero-intro">
            I’m a Computer and Communication Engineering undergraduate turning
            everyday challenges into thoughtful, useful experiences.
          </p>
          <p className="hero-detail">
            I love learning, exploring ideas, and bringing them to life. This is
            a collection of what I’ve been building along the way.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <HiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="/anishresume.pdf"
              download="Anish-Animesh-Sahu-Resume.pdf"
              className="button button-secondary"
            >
              <HiArrowDownTray aria-hidden="true" /> Download resume
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/AnishAnimesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" /> GitHub{" "}
              <HiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-animesh-sahu-45330426a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn{" "}
              <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.12}>
          <div className="abstract-art" aria-hidden="true">
            <div className="art-grid" />
            <span className="art-coordinate coordinate-top">
              IDEA → EXPLORATION
            </span>
            <svg className="orbit-art" viewBox="0 0 440 440" fill="none">
              <defs>
                <linearGradient
                  id="orbit-gradient"
                  x1="50"
                  y1="60"
                  x2="380"
                  y2="390"
                >
                  <stop stopColor="#d4f7bd" />
                  <stop offset=".5" stopColor="#83c7b4" />
                  <stop offset="1" stopColor="#41545e" />
                </linearGradient>
                <radialGradient id="sphere-gradient" cx=".32" cy=".25" r=".8">
                  <stop stopColor="#e0f4c8" />
                  <stop offset=".45" stopColor="#8caf9e" />
                  <stop offset="1" stopColor="#202d35" />
                </radialGradient>
              </defs>
              <circle
                cx="220"
                cy="220"
                r="171"
                stroke="#687b733b"
                strokeDasharray="2 7"
              />
              <circle cx="220" cy="220" r="130" stroke="#687b7325" />
              <ellipse
                cx="220"
                cy="220"
                rx="185"
                ry="68"
                transform="rotate(-42 220 220)"
                stroke="url(#orbit-gradient)"
                strokeWidth="1.5"
              />
              <circle cx="220" cy="220" r="94" fill="url(#sphere-gradient)" />
              <ellipse
                cx="220"
                cy="220"
                rx="185"
                ry="68"
                transform="rotate(42 220 220)"
                stroke="url(#orbit-gradient)"
                strokeWidth="1.5"
              />
              <ellipse
                cx="220"
                cy="220"
                rx="68"
                ry="185"
                transform="rotate(12 220 220)"
                stroke="url(#orbit-gradient)"
              />
              <circle cx="350" cy="91" r="5" fill="#d4f7bd" />
              <circle cx="83" cy="311" r="4" fill="#83c7b4" />
              <path
                d="M220 24V36M214 30H226M392 285V297M386 291H398"
                stroke="#c8e9bc"
              />
            </svg>
            <div className="art-label">
              <span className="label-dot" /> ALWAYS EXPLORING
            </div>
            <span className="art-coordinate coordinate-bottom">
              EXPERIMENT → BUILD → REFINE
            </span>
          </div>
          <a className="experience-peek" href="#experience">
            <span className="peek-icon">
              <HiArrowUpRight aria-hidden="true" />
            </span>
            <span>
              <small>RECENT EXPERIENCE</small>
              <strong>Summer intern at BARC</strong>
            </span>
            <HiArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
      <div className="container hero-baseline">
        <span>
          MUMBAI, INDIA <span className="baseline-dot">·</span> LEARNING BY
          BUILDING
        </span>
        <a href="#about">
          A little more about me <HiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
