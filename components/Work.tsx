import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="bg-tray px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-wide text-signal uppercase">
          Work
        </p>
        <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2.1rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
          Selected outcomes from shipped products
        </h2>

        <div className="mt-14 space-y-16 md:mt-16 md:space-y-20">
          {work.map((item, index) => (
            <article
              key={item.company}
              className="grid items-start gap-8 border-t border-rule/80 bg-field/40 p-6 pt-8 md:grid-cols-2 md:gap-14 md:p-8"
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <div className="photo-zoom reveal-photo aspect-[4/3] overflow-hidden ring-1 ring-rule/70">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-medium text-ink">{item.company}</h3>
                  {"current" in item && item.current ? (
                    <span className="rounded-sm bg-signal/12 px-2 py-0.5 text-xs font-medium text-signal">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-ink/90">{item.role}</p>
                {"meta" in item && item.meta ? (
                  <p className="mt-1 text-sm text-quiet">{item.meta}</p>
                ) : null}
                <p className="mt-4 max-w-md text-base leading-relaxed text-quiet">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-3 text-base leading-snug text-ink md:text-[1.05rem]"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                        aria-hidden
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
