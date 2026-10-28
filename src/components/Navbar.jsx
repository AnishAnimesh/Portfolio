import { useState, useEffect, useRef } from "react";
import { HiBars3, HiXMark, HiArrowUpRight } from "react-icons/hi2";

const links = [
  "About",
  "Projects",
  "Experience",
  "Skills",
  "Education",
  "Contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuButton = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!header.current?.contains(event.target)) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 960) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const navigate = (label) => {
    setMenuOpen(false);
    setActive(label.toLowerCase());
    // Move focus out of the hidden dropdown to the destination section.
    requestAnimationFrame(() =>
      document
        .getElementById(label.toLowerCase())
        ?.focus({ preventScroll: true }),
    );
  };

  return (
    <header className="site-header" ref={header}>
      <nav className="container nav-shell" aria-label="Main navigation">
        <a
          href="#home"
          className="nav-brand"
          onClick={() => navigate("Home")}
          aria-label="Anish Animesh Sahu — home"
        >
          <span>Anish Animesh Sahu</span>
        </a>
        <ul className="desktop-links">
          {links.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                onClick={() => navigate(label)}
                aria-current={
                  active === label.toLowerCase() ? "location" : undefined
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-contact" href="#contact">
          Let’s talk <HiArrowUpRight aria-hidden="true" />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
        <div id="mobile-navigation" className="mobile-links" hidden={!menuOpen}>
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => navigate(label)}
              aria-current={
                active === label.toLowerCase() ? "location" : undefined
              }
            >
              {label}
              <HiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
