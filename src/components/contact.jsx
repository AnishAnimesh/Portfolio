import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  HiArrowUpRight,
  HiArrowUp,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const socials = [
  { name: "GitHub", href: "https://github.com/AnishAnimesh", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anish-animesh-sahu-45330426a",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/anish.animesh",
    icon: FaInstagram,
  },
];

function Contact() {
  return (
    <section
      tabIndex={-1}
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <p className="eyebrow">
              <span className="status-dot" /> LET’S CONNECT
            </p>
            <h2 id="contact-title">
              Good things start
              <br />
              with a <span>conversation.</span>
            </h2>
            <p className="contact-intro">
              A project, an internship, or just an interesting idea? I’m always
              excited to connect about development, collaborations, and new
              opportunities.
            </p>
            <div className="contact-methods">
              <a
                href="mailto:anishanimesh.s@somaiya.edu"
                className="contact-email"
              >
                <HiOutlineEnvelope aria-hidden="true" />
                <span>anishanimesh.s@somaiya.edu</span>
                <HiArrowUpRight aria-hidden="true" />
              </a>
              <a className="contact-phone" href="tel:9869210515">
                <HiOutlinePhone aria-hidden="true" /> 9869210515
              </a>
            </div>
            <div className="contact-socials">
              {socials.map(({ name, href, icon }) => {
                const Icon = icon;
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                    {name}
                    <HiArrowUpRight aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer container">
      <a className="footer-brand" href="#home">
        Anish Animesh Sahu<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} · All rights reserved</p>
      <a className="back-top" href="#home">
        Back to top <HiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}

export default Contact;
