import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="bg-tray px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-display text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
          Outcomes from products already shipped
        </h2>

        <div className="mt-16 space-y-20 md:mt-20">
          {work.map((item, index) => (
            <article
              key={item.company}
              className="grid items-center gap-8 border-t border-rule pt-10 md:grid-cols-2 md:gap-14"
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <div className="photo-zoom reveal-photo aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-ink">{item.company}</h3>
                <p className="mt-1 text-sm text-quiet">{item.role}</p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-quiet">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="max-w-[36rem] text-base leading-snug text-ink md:text-lg"
                    >
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
