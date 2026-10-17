import { ArrowUpRight } from 'react-bootstrap-icons';
import ProjectCard from './projectCard';
import { enterpriseProjects, liveProjects } from '../data/content';

const Projects = () => {
  return (
    <section id="work" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <h2 className="display flex items-center gap-4 text-[clamp(2.6rem,6vw,5rem)]">
            <span className="ring-dot" />
            Selected works
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-graphite">
            Live products I&apos;ve built or shipped features for. Click through
            to see them in production.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {liveProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              index={i + 1}
              featured={i === 0}
              {...project}
            />
          ))}
        </div>

        <div className="mt-28" data-reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="display text-4xl sm:text-5xl">Enterprise platforms</h3>
            <span className="tag">Internal — not public</span>
          </div>
          <ul className="mt-8 border-t border-line">
            {enterpriseProjects.map((project) => (
              <li
                key={project.title}
                className="grid gap-3 border-b border-line py-7 md:grid-cols-[1.2fr_2fr_auto] md:items-baseline md:gap-10"
              >
                <div>
                  <p className="display text-2xl sm:text-3xl">{project.title}</p>
                  <p className="label mt-2 text-accent">{project.org}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-graphite">
                    {project.blurb}
                  </p>
                  <p className="mt-3 text-xs text-graphite/80">
                    {project.stack.join(' · ')}
                  </p>
                </div>
                <span className="text-sm tabular-nums text-graphite">
                  {project.year}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#ai"
            className="label mt-8 inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
          >
            Looking for AI work? <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
