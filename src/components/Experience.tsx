import { experience } from '../data/content';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="shell">
        <span className="eyebrow">02 — Experience</span>
        <h2 className="section-title mt-4">Where I have worked</h2>
        <p className="mt-4 max-w-2xl text-muted">
          3.6+ years across product and services teams, shipping React
          applications used by real customers.
        </p>

        <ol className="mt-14 space-y-4">
          {experience.map((job) => (
            <li key={job.company} className="relative pl-8 sm:pl-10">
              {/* Timeline rail */}
              <span
                aria-hidden
                className="absolute left-0 top-2 h-full w-px bg-line last:hidden"
              />
              <span
                aria-hidden
                className={`absolute left-0 top-2 h-2.5 w-2.5 -translate-x-[4px] rounded-full ${
                  job.current
                    ? 'bg-accent ring-4 ring-accent/20'
                    : 'bg-line ring-4 ring-ink'
                }`}
              />

              <div className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm text-soft">{job.role}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                      {job.current && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                      {job.period}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
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
                  {job.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
