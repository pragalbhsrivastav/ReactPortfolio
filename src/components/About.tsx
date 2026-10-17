import { ArrowRight } from 'react-bootstrap-icons';
import photo from '../assets/img/profile.jpg';
import { education, experience, profile, stats } from '../data/content';

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="shell">
        <h2
          className="display max-w-5xl text-[clamp(2rem,4.6vw,3.9rem)] text-fog"
          data-reveal
        >
          <span className="ring-dot mr-3 align-middle sm:mr-4" />
          <span className="text-ink">Showcasing </span>
          4+ years of reliable frontend — enterprise platforms, AI products and
          interfaces people enjoy using.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_0.9fr] lg:grid-cols-[1fr_0.85fr_1.1fr] lg:gap-10">
          <div data-reveal>
            <span className="tag">Why work with me</span>
            <p className="mt-6 text-xl font-bold leading-snug tracking-tight [font-stretch:85%] sm:text-2xl">
              {profile.pitch}
            </p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-arrow group mt-8 border-line text-ink hover:border-accent"
            >
              <span className="btn-arrow-text">Download CV</span>
              <span className="btn-arrow-icon">
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
            <p className="mt-10 text-sm leading-relaxed text-graphite">
              {education.degree}
              <br />
              {education.school} · {education.detail}
            </p>
          </div>

          <div className="overflow-hidden bg-paper-2" data-reveal>
            <img
              src={photo}
              alt={profile.fullName}
              loading="lazy"
              className="aspect-4/5 h-full w-full object-cover object-[52%_20%] grayscale transition duration-700 hover:scale-[1.03] hover:grayscale-0"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-1" data-reveal>
            <span className="tag">Experience</span>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {experience.map((job) => (
                <li key={job.company}>
                  <a
                    href="#experience"
                    className="group grid grid-cols-[1fr_1.4fr_auto] items-center gap-4 py-4 text-sm transition-colors hover:text-accent"
                  >
                    <span className="font-semibold">{job.short}</span>
                    <span className="text-graphite group-hover:text-accent">
                      {job.role}
                    </span>
                    <span className="tabular-nums text-graphite">{job.year}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-line py-8 pr-4 lg:border-b-0"
              data-reveal
            >
              <dt className="display text-6xl text-ink sm:text-7xl">
                {stat.value.replace('+', '')}
                {stat.value.includes('+') && <span className="text-accent">+</span>}
              </dt>
              <dd className="label mt-3 text-graphite">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
