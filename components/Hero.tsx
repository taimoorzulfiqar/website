import { Filmstrip } from "@/components/Filmstrip";
import { links, site } from "@/lib/content";
import { asset } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14 md:px-8">
        <div className="hero-copy">
          <h1 className="max-w-[15ch] font-display text-[clamp(3rem,6.4vw,5.15rem)] font-medium leading-[0.96] tracking-[-0.03em] text-ink">
            {site.tagline}
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-quiet md:text-xl">
            {site.support}
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={links.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-signal px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-signal-strong"
            >
              Book a call
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-frame aspect-[4/3]">
          <img
            src={asset("/images/hero-lane.jpg")}
            alt="Black cards on a pale strip, held together by an orange thread"
            className="hero-photo h-full w-full object-cover"
          />
        </div>
      </div>

      <Filmstrip />
    </section>
  );
}
