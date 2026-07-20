import Image from "next/image";
import { about } from "@/data/studio";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-widest text-olive font-semibold">
            Sobre
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Juliana Silva
          </h2>
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "mt-6 font-display text-xl md:text-2xl text-ink leading-snug max-w-xl"
                  : "mt-5 text-ink-soft leading-relaxed max-w-xl"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="md:col-span-5 relative aspect-[4/5] rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden border border-ink/10 bg-sand">
          <Image
            src="/foto-juliana-studio.jpg"
            alt="Juliana Silva no studio, durante uma sessão de Pilates"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
