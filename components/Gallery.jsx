import Image from "next/image";
import { gallery, studio } from "@/data/studio";

const radii = [
  "rounded-tl-[2.5rem] rounded-br-[2.5rem]",
  "rounded-tr-[2.5rem] rounded-bl-[2.5rem]",
  "rounded-tl-[2.5rem] rounded-br-[2.5rem]",
  "rounded-tr-[2.5rem] rounded-bl-[2.5rem]",
];

export default function Gallery() {
  return (
    <section id="momentos" className="bg-sand/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-olive font-semibold">
            No dia a dia
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Um pouco do studio, direto da rotina
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gallery.map((item, i) => (
            <div key={item.src}>
              <div
                className={`relative aspect-[9/16] overflow-hidden border border-ink/10 bg-cream-light ${radii[i % radii.length]}`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`${item.caption} — studio ${studio.name}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={`${item.caption} — studio ${studio.name}`}
                  />
                )}
              </div>
              <p className="mt-3 text-sm text-ink-soft">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
