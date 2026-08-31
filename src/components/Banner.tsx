import { Suspense, lazy } from 'react';
import { ArrowRight, Download, GeoAlt } from 'react-bootstrap-icons';
import { profile, stats } from '../data/content';

// three.js is heavy — keep it out of the initial bundle.
const HeroScene = lazy(() => import('./HeroScene'));

const Banner = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Soft glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-144 w-144 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="shell">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="bg-linear-to-r from-accent via-indigo-400 to-accent-2 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              <Download size={15} />
              Download resume
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-soft transition-colors hover:border-accent/50 hover:text-white"
            >
              View my work
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <span className="inline-flex items-center gap-1.5 px-2 font-mono text-xs text-muted">
              <GeoAlt size={13} />
              {profile.location}
            </span>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Banner;
