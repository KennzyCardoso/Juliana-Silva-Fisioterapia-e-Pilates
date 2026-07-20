import Image from "next/image";
import { about } from "@/data/studio";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4">
            <Image
              src="/juliana-avatar.jpg"
              alt="Juliana Silva"
              width={150}
              height={150}
              className="w-14 h-14 rounded-full object-cover border border-ink/10"
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-olive font-semibold">
                Sobre
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-ink mt-1">
                Juliana Silva
              </h2>
            </div>
          </div>
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
