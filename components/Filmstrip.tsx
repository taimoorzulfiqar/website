import { work } from "@/lib/content";

export function Filmstrip() {
  const tiles = [...work, ...work];

  return (
    <div className="lane mt-12 md:mt-16" aria-hidden="true">
      <div className="lane-track gap-3 px-3 md:gap-4">
        {tiles.map((item, index) => (
          <figure
            key={`${item.company}-${index}`}
            className="w-[72vw] shrink-0 sm:w-[46vw] md:w-[30vw] lg:w-[22rem]"
          >
            <img
              src={item.image}
              alt=""
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-2 text-sm text-quiet">
              {item.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
