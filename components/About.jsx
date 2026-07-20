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

        {/* Reservado para foto real da Juliana/studio (proporção 4/5, trocar por next/image) */}
        <div className="md:col-span-5 aspect-[4/5] rounded-tr-[3rem] rounded-bl-[3rem] bg-sand border border-ink/10 flex items-center justify-center">
          <Image
            src="/logo-juliana-silva-selo.png"
            alt="Selo Juliana Silva Fisioterapia e Pilates"
            width={120}
            height={120}
            className="w-24 h-24 object-contain opacity-40"
          />
        </div>
      </div>
    </section>
  );
}
