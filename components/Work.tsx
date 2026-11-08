import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="bg-tray px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-display text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
          Outcomes from products already shipped
        </h2>

        <div className="mt-16 space-y-16 md:mt-20">
          {work.map((item) => (
            <article
              key={item.company}
              className="grid gap-6 border-t border-rule pt-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-16"
            >
              <div>
                <h3 className="text-lg font-medium text-ink">{item.company}</h3>
                <p className="mt-1 text-sm text-quiet">{item.role}</p>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-quiet">
                  {item.summary}
                </p>
              </div>
              <ul className="space-y-4">
                {item.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="max-w-[40rem] text-lg leading-snug text-ink"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
