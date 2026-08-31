import { ArrowUpRight, Envelope, Github, Linkedin, Telephone } from 'react-bootstrap-icons';
import { profile } from '../data/content';

const Contact = () => {
  const channels = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Envelope,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      Icon: Telephone,
    },
    {
      label: 'LinkedIn',
      value: 'pragalbh-srivastav',
      href: profile.linkedin,
      Icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'pragalbhad',
      href: profile.github,
      Icon: Github,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="shell">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[90px]"
          />

          <div className="relative">
            <span className="eyebrow">05 — Contact</span>
            <h2 className="section-title mt-4 max-w-2xl">
              Have something you want built or fixed?
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              I am open to frontend and full-stack roles, and to contract work.
              The fastest way to reach me is email — I reply within a day.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-accent">
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-white">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name} — {profile.location}
          </p>
          <p className="font-mono text-xs text-muted">
            Built with React, TypeScript, Vite &amp; Tailwind
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
