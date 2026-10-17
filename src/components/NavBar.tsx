import { useEffect, useState } from 'react';
import { ArrowRight, List, X } from 'react-bootstrap-icons';
import { navLinks } from '../data/content';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-ink/90 py-3 shadow-[0_1px_0_0_#333] backdrop-blur-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="shell flex items-center justify-between">
        <a
          href="#home"
          className="display text-2xl tracking-tight text-white"
          aria-label="Pragalbh — home"
        >
          Pr<span className="text-accent">a</span>galbh
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="label relative text-white/85 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-arrow group hidden border-line-dark text-white hover:border-accent sm:inline-flex"
          >
            <span className="btn-arrow-icon">
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="btn-arrow-text">Let&apos;s talk</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center border border-line-dark text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="shell md:hidden">
          <ul className="mt-4 divide-y divide-line-dark border-t border-line-dark">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="display block py-4 text-3xl text-white"
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
