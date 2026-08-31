import { marqueeSkills, skillGroups } from '../data/content';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="shell">
        <span className="eyebrow">03 — Skills</span>
        <h2 className="section-title mt-4">Tools I reach for</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card card-hover p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Edge-to-edge scrolling strip */}
      <div
        aria-hidden
        className="relative mt-16 flex overflow-hidden border-y border-line py-5
                   mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap font-mono text-sm text-muted"
            >
              {skill}
              <span className="ml-10 text-line">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
