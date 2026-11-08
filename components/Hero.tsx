import { links, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-[15ch] font-display text-[clamp(3rem,7.2vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.03em] text-ink">
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
            className="inline-flex items-center justify-center bg-signal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-strong"
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
    </section>
  );
}
