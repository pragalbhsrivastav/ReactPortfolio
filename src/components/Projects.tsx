import { useState } from 'react';
import ProjectCard from './projectCard';
import { enterpriseProjects, liveProjects } from '../data/content';

type Tab = 'live' | 'enterprise';

const Projects = () => {
  const [tab, setTab] = useState<Tab>('live');

  return (
    <section id="work" className="scroll-mt-24 py-24">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">04 — Work</span>
            <h2 className="section-title mt-4">Selected projects</h2>
          </div>

          <div
            role="tablist"
            aria-label="Project category"
            className="flex gap-1 rounded-xl border border-line bg-raised/60 p-1"
          >
            {(
              [
                ['live', 'Live sites'],
                ['enterprise', 'Enterprise'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                  tab === key
                    ? 'bg-white text-ink'
                    : 'text-muted hover:text-soft'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {tab === 'live' ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {liveProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {enterpriseProjects.map((project) => (
              <article
                key={project.title}
                className="card card-hover flex flex-col p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <span className="shrink-0 font-mono text-[11px] text-muted">
                    {project.org}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === 'enterprise' && (
          <p className="mt-6 text-xs text-muted">
            Internal platforms — source and live links are not public.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
