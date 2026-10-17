import { marqueeSkills, skillGroups } from '../data/content';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 overflow-hidden bg-paper-2 py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <h2 className="display text-[clamp(2.6rem,6vw,5rem)]">
              <span className="ring-dot mr-4 align-middle" />
              Toolkit
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite">
              The tools I reach for every day — and the newer ones I&apos;ve
              added for building AI-powered products.
            </p>
          </div>

          <ul className="border-t border-line">
            {skillGroups.map((group) => (
              <li
                key={group.title}
                className="grid gap-3 border-b border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                data-reveal
              >
                <h3
                  className={`display text-2xl ${
                    group.title === 'AI & LLM' ? 'text-accent' : ''
                  }`}
                >
                  {group.title}
                </h3>
                <p className="text-sm leading-relaxed text-graphite">
                  {group.items.join('  ·  ')}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="relative mt-20 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-3 rounded-full border border-line bg-paper py-3 pl-3 pr-6 shadow-sm"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs font-bold text-white">
                {skill[0]}
              </span>
              <span className="display text-2xl">{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
