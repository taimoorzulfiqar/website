import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
            Two ways to move your product forward
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 80}>
              <article>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-fg-muted">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-fg md:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {point}
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
