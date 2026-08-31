import { Mortarboard } from 'react-bootstrap-icons';
import { education, freelance, profile } from '../data/content';
import profileImg from '../assets/img/dppragalbh.jpg';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="shell">
        <span className="eyebrow">01 — About</span>
        <h2 className="section-title mt-4">
          Building interfaces that hold up in production
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          <div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-3xl bg-linear-to-br from-accent/25 to-accent-2/15 blur-2xl"
              />
              <img
                src={profileImg}
                alt={profile.name}
                loading="lazy"
                className="aspect-4/5 w-full rounded-2xl border border-line object-cover"
              />
            </div>

            <div className="card mt-5 p-5">
              <div className="flex items-center gap-2 text-muted">
                <Mortarboard size={15} />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                  Education
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-white">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.detail}
              </p>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-soft">
              I work primarily in React and TypeScript, where most of my time
              goes into two things: shipping reusable components that other
              developers can build on, and tracing bugs back to their actual
              cause instead of patching symptoms.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Across three companies I have built enterprise platforms — RF
              planning tools, legal case management, hyperlocal marketplaces —
              usually as the person who gets called when something breaks at the
              API–UI boundary. I care about performance budgets, accessible
              markup, and code reviews that teach rather than gatekeep.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Right now I am extending into backend work with Node.js, Express
              and PostgreSQL, so I can own features end to end rather than
              stopping at the network call.
            </p>

            <div className="card mt-10 p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="eyebrow">Independent work</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {freelance.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{freelance.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted">
                    {freelance.period}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {freelance.location}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {freelance.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {freelance.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
