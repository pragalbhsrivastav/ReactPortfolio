import photo from '../assets/img/profile.jpg';
import { profile } from '../data/content';

const Banner = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink pt-28 text-white sm:pt-32"
    >
      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10 lg:pb-44" data-reveal>
            <p className="label flex items-center gap-2.5 text-white">
              <span className="h-2 w-2 bg-accent" />
              {profile.role} &amp; AI Engineer
            </p>

            <h1 className="display mt-6 text-[clamp(2.9rem,7.4vw,6rem)]">
              <span className="text-white">Interfaces </span>
              <span className="text-dim">
                that ship,
                <br />
                scale &amp; think
                <br />
                with AI
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              4+ years building production React &amp; TypeScript apps — from
              enterprise dashboards to AI chat agents. Based in {profile.location}.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:mr-0">
            {/* Orange orb behind the portrait */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-accent via-accent-deep/80 to-ink" />
            <div
              role="img"
              aria-label={`Portrait of ${profile.fullName}`}
              className="absolute inset-[7%] rounded-full bg-no-repeat"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: '118% auto',
                backgroundPosition: '52% 18%',
              }}
            />
            {/* Fade the bottom of the portrait into the page so the name reads */}
            <div className="absolute inset-[7%] rounded-full bg-linear-to-b from-transparent from-55% to-ink/90" />          </div>
        </div>

        {/* Giant name, clipped by the bottom of the section */}
        <div className="relative -mt-10 sm:-mt-20 lg:-mt-36">
          <h2
            className="display relative z-10 translate-y-[7%] sm:translate-y-[14%] whitespace-nowrap text-center text-[18.5vw] leading-[0.8] text-white sm:text-[10.6vw] xl:text-[8.6rem]"
            aria-label={profile.fullName}
          >
            <span className="block sm:inline">Pragalbh </span>
            <span className="block sm:inline">Srivastav</span>
          </h2>
          <a
            href="#contact"
            className="orb absolute right-2 top-0 z-20 h-24 w-24 -translate-y-1/2 sm:left-[43%] sm:right-auto sm:h-28 sm:w-28"
          >
            Hire me
            <br />
            now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
