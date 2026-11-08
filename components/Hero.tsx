import { Filmstrip } from "@/components/Filmstrip";
import { highlights, links, site } from "@/lib/content";
import { asset } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:gap-14 md:px-8">
        <div className="hero-copy">
          <p className="text-sm font-medium tracking-wide text-signal uppercase">
            {site.role}
          </p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(2.65rem,5.8vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.03em] text-ink">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-quiet md:text-xl">
            {site.support}
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-signal px-6 py-3.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-signal-strong"
            >
              Start a conversation
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              LinkedIn
            </a>
            <a
              href="#work"
              className="text-sm font-medium text-quiet transition-colors hover:text-ink"
            >
              See selected work →
            </a>
          </div>

          <dl className="mt-12 grid gap-5 border-t border-rule pt-8 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium tracking-wide text-quiet uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink md:text-base">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-frame aspect-[4/3] ring-1 ring-rule/80">
          <img
            src={asset("/images/hero-lane.jpg")}
            alt="Black cards on a pale strip, held together by an orange thread"
            className="hero-photo h-full w-full object-cover"
            width={1200}
            height={900}
          />
        </div>
      </div>

      <Filmstrip />
    </section>
  );
}
