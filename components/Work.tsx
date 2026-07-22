import { Reveal } from "@/components/Reveal";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="border-t border-line bg-bg-elevated/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Selected work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
            Outcomes from products already shipped
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10 md:space-y-12">
          {work.map((item, index) => (
            <Reveal key={item.company} delayMs={index * 60}>
              <article className="grid gap-6 border-t border-line pt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
                    {item.company}
                  </h3>
                  <p className="mt-2 text-sm text-accent">{item.role}</p>
                  <p className="mt-4 text-base leading-relaxed text-fg-muted">
                    {item.summary}
                  </p>
                </div>
                <ul className="space-y-3">
                  {item.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="border-l-2 border-accent/50 pl-4 text-base leading-relaxed text-fg"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
