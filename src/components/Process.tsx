import { process } from '../data/content';

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="shell">
        <div className="text-center" aria-label="Working process">
          <p className="display bg-linear-to-b from-white to-white/45 bg-clip-text text-[clamp(4rem,17vw,13rem)] text-transparent">
            Working
          </p>
          {/* Mirrored, fading echo of the word */}
          <p
            aria-hidden
            className="display -mt-[0.12em] bg-linear-to-b from-white/40 to-transparent to-70% bg-clip-text text-[clamp(4rem,17vw,13rem)] text-transparent"
          >
            Process
          </p>
        </div>

        <ol className="relative mt-10 sm:mt-16">
          {/* Center timeline line */}
          <span
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-accent via-accent/60 to-transparent md:left-1/2"
          />

          {process.map((item, i) => (
            <li
              key={item.step}
              className={`relative grid pb-16 pl-12 last:pb-0 md:grid-cols-2 md:pl-0`}
              data-reveal
            >
              <span
                aria-hidden
                className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-ink md:left-1/2"
              />
              <div
                className={
                  i % 2 === 0
                    ? 'md:pr-16 md:text-right'
                    : 'md:col-start-2 md:pl-16'
                }
              >
                <span className="text-xs font-semibold text-accent">{item.step}</span>
                <h3 className="display mt-3 text-4xl sm:text-5xl">{item.title}</h3>
                <p
                  className={`mt-4 max-w-sm text-sm leading-relaxed text-white/55 ${
                    i % 2 === 0 ? 'md:ml-auto' : ''
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
