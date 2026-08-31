import { useEffect, useState } from 'react';
import { Github, Linkedin, List, X } from 'react-bootstrap-icons';
import { navLinks, profile } from '../data/content';

export const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveLink(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-ink/80 py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-5'
      }`}
    >
      <nav className="shell flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-accent to-accent-2 font-mono text-sm font-bold text-white">
            P
          </span>
          <span className="font-mono text-sm tracking-tight text-white">
            pragalbh<span className="text-accent">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  activeLink === link.id
                    ? 'text-white'
                    : 'text-muted hover:text-soft'
                }`}
              >
                {link.label}
                {activeLink === link.id && (
                  <span className="mx-auto mt-1 block h-px w-4 bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-white"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-white"
          >
            <Github size={15} />
          </a>
          <a
            href="#contact"
            className="hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 sm:block"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-soft md:hidden"
          >
            {menuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="shell mt-3 md:hidden">
          <ul className="card divide-y divide-line overflow-hidden">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm ${
                    activeLink === link.id ? 'text-white' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
