import { ArrowUpRight, Stars } from 'react-bootstrap-icons';
import { aiPractice, aiWork, skillGroups } from '../data/content';

const aiSkills = skillGroups.find((g) => g.title === 'AI & LLM')?.items ?? [];

const AiWork = () => {
  return (
    <section id="ai" className="scroll-mt-20 bg-ink py-24 text-white sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end" data-reveal>
          <div>
            <p className="label flex items-center gap-2.5 text-accent">
              <Stars size={13} /> AI work
            </p>
            <h2 className="display mt-5 text-[clamp(2.6rem,5.6vw,4.9rem)]">
              Building with AI,
              <br />
              <span className="text-dim">not just around it</span>
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              From an AI shopping agent that edits a live cart to generative
              content tooling — I build the interfaces that make models useful to
              real users.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {aiSkills.map((skill) => (
                <li key={skill} className="tag-dark">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="mt-16 border-t border-line-dark">
          {aiWork.map((project, i) => (
            <li
              key={project.title}
              className="group grid gap-6 border-b border-line-dark py-10 lg:grid-cols-[auto_1.1fr_1.6fr] lg:gap-12"
              data-reveal
            >
              <span className="text-sm font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="display text-5xl transition-colors group-hover:text-accent sm:text-6xl">
                  {project.title}
                </h3>
                <p className="label mt-3 text-white/50">
                  {project.tag} · {project.org}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-arrow group/btn mt-6 border-line-dark text-white hover:border-accent"
                  >
                    <span className="btn-arrow-text">View live</span>
                    <span className="btn-arrow-icon">
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      />
                    </span>
                  </a>
                )}
              </div>

              <div>
                <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                  {project.blurb}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-white/85">
                      <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-white/40">{project.stack.join(' · ')}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-px bg-line-dark md:grid-cols-3">
          {aiPractice.map((item, i) => (
            <div key={item.title} className="bg-ink p-8 transition-colors hover:bg-ink-2" data-reveal>
              <span className="text-xs font-semibold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display mt-4 text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiWork;
