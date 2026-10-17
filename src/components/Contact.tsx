import { useState } from 'react';
import { ArrowUpRight, Plus } from 'react-bootstrap-icons';
import photo from '../assets/img/profile.jpg';
import { faqs, profile } from '../data/content';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { label: 'LinkedIn', value: 'pragalbh-srivastav', href: profile.linkedin },
    { label: 'GitHub', value: 'pragalbhsrivastav', href: profile.github },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-paper pt-24 pb-28 sm:pt-32">
      <div className="shell">
        {/* Promise card */}
        <figure className="relative mx-auto max-w-3xl bg-ink px-6 py-12 text-center text-white sm:px-14 sm:py-16" data-reveal>
          <img
            src={photo}
            alt=""
            className="absolute -right-5 -top-7 h-16 w-16 rounded-full border-4 border-paper object-cover object-[50%_30%] sm:h-20 sm:w-20"
          />
          <span className="display block text-6xl leading-none text-accent">&ldquo;</span>
          <blockquote className="display mt-2 text-balance text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.05]">
            I don&apos;t just close tickets. I own the bug, the edge case and the
            launch — and I leave the codebase cleaner than I found it.
          </blockquote>
          <figcaption className="mt-8">
            <span className="label block text-white/40">How I work</span>
            <span className="display mt-1 block text-lg">{profile.fullName}</span>
          </figcaption>
        </figure>

        {/* Let's talk */}
        <div className="relative mt-24 sm:mt-32" data-reveal>
          <h2 className="display text-center whitespace-nowrap text-[clamp(2.8rem,12vw,10.5rem)] leading-[0.85]">
            Let&apos;s talk now
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="orb absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/3 sm:h-28 sm:w-28"
          >
            Send
            <br />
            email
          </a>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href }) => (
            <li key={label} className="bg-paper">
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex h-full items-start justify-between gap-3 p-5 transition-colors hover:bg-paper-2"
              >
                <span className="min-w-0">
                  <span className="label block text-graphite">{label}</span>
                  <span className="mt-1.5 block truncate text-sm font-semibold">{value}</span>
                </span>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <div className="mx-auto mt-28 max-w-3xl">
          <h3 className="display text-center text-4xl sm:text-5xl" data-reveal>
            Questions, answered
          </h3>
          <ul className="mt-10 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <li key={faq.q} className="bg-paper-2" data-reveal>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="display text-lg sm:text-xl">{faq.q}</span>
                    <Plus
                      size={20}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-accent' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <p className="overflow-hidden px-6 text-sm leading-relaxed text-graphite">
                      <span className="block pb-6">{faq.a}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
