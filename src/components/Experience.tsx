import { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { experience } from '../data/content';

const Experience = () => {
  const [open, setOpen] = useState<string | null>(experience[0].company);

  return (
    <section id="experience" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="text-center" data-reveal>
          <h2 className="display inline-flex items-center gap-4 text-[clamp(2.6rem,6vw,5rem)]">
            <span className="ring-dot" />
            Where I&apos;ve worked
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-graphite">
            4+ years across product, services and contract teams — shipping
            React applications used by real customers.
          </p>
        </div>

        <ul className="mx-auto mt-14 max-w-6xl border-t border-line">
          {experience.map((job) => {
            const isOpen = open === job.company;
            return (
              <li key={job.company} className="border-b border-line" data-reveal>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : job.company)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-7 text-left md:grid-cols-[1.1fr_1.6fr_auto_auto] md:gap-10"
                >
                  <span className="display text-3xl transition-colors group-hover:text-accent sm:text-4xl">
                    {job.short}
                    {job.current && (
                      <span className="ml-3 inline-block h-2 w-2 -translate-y-2 rounded-full bg-accent align-middle" />
                    )}
                  </span>
                  <span className="hidden text-sm text-graphite md:block">
                    <span className="font-semibold text-ink">{job.role}</span>
                    {' · '}
                    {job.location}
                  </span>
                  <span className="hidden text-sm tabular-nums text-graphite md:block">
                    {job.period}
                  </span>
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full border transition-all ${
                      isOpen
                        ? 'rotate-45 border-accent bg-accent text-white'
                        : 'border-line text-ink group-hover:border-accent'
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pb-9 md:grid-cols-[1.1fr_1.6fr_auto_auto] md:gap-10">
                      <div className="text-sm text-graphite md:hidden">
                        <span className="font-semibold text-ink">{job.role}</span> ·{' '}
                        {job.period}
                      </div>
                      <div className="hidden flex-wrap content-start gap-2 md:flex">
                        {job.stack.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-3 md:col-span-3">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-graphite"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
