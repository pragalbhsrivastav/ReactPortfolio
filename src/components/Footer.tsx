import { profile } from '../data/content';

const footerLinks = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Works' },
  { id: 'ai', label: 'AI Work' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="bg-ink pt-20 pb-8 text-white">
      <div className="shell">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <ul className="space-y-1">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="display text-4xl transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-10">
            <div>
              <p className="label text-white/40">Quick contact</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block text-sm font-semibold hover:text-accent"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="mt-1 block text-sm font-semibold hover:text-accent"
              >
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="label text-white/40">Location</p>
              <p className="mt-3 text-sm font-semibold uppercase">
                {profile.location}, India
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="label text-white/40">Follow me</p>
              <div className="mt-3 flex gap-4 text-sm font-semibold uppercase">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <p className="label text-white/40">Resume</p>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm font-semibold uppercase hover:text-accent"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-line-dark pt-6 text-center text-xs text-white/40">
          Designed &amp; built by{' '}
          <span className="text-accent">{profile.fullName}</span> ·{' '}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
