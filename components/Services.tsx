import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-signal uppercase">
            Services
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
            How I can help
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-quiet md:text-lg">
            Freelance and fractional work on products that need clear scope,
            fast delivery, and AI that holds up in production.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col bg-sheet p-6 ring-1 ring-rule/90 sm:p-8"
            >
              <div className="photo-zoom reveal-photo mb-6 aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-[1.5rem] font-medium leading-tight tracking-tight text-ink md:text-[1.65rem]">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-quiet">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2 border-t border-rule pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-ink md:text-base"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                      aria-hidden
                    />
                    {point}
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
