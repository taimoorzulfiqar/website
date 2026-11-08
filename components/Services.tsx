import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
        <h2 className="max-w-[12ch] font-display text-[clamp(2.1rem,4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
          Two ways to move your product forward
        </h2>

        <div className="space-y-16">
          {services.map((service) => (
            <article key={service.title}>
              <h3 className="font-display text-[1.65rem] font-medium leading-tight tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-quiet">
                {service.description}
              </p>
              <ul className="mt-6 max-w-[34rem] list-disc space-y-2 pl-5 text-base leading-relaxed text-ink marker:text-quiet">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
