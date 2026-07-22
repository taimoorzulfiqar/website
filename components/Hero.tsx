import { links, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-atmosphere relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[42%] h-px lane-accent opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:block"
      />

      <div className="hero-enter relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent md:text-base">
          {site.brand}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,7vw,4.75rem)] font-extrabold leading-[0.98] tracking-tight text-fg">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
          {site.support}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={links.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
          >
            Book a call
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-line-strong px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent-strong"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
