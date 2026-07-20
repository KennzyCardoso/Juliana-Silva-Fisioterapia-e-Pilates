import { MessageCircle, MapPin, Star } from "lucide-react";
import { whatsappLink, hero, studio } from "@/data/studio";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-7">
          <span className="inline-block text-xs uppercase tracking-widest text-olive font-semibold mb-5">
            {hero.eyebrow}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink max-w-xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-md">{hero.subtext}</p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-cream-light font-medium hover:bg-clay-dark transition-colors"
            >
              <MessageCircle size={18} />
              Agendar avaliação
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-olive/40 px-7 py-3.5 text-olive-dark font-medium hover:bg-olive/10 transition-colors"
            >
              <MapPin size={18} />
              Ver localização
            </a>
          </div>

          <div className="mt-9 flex items-center gap-2 text-sm text-ink-soft">
            <div className="flex text-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            Avaliações reais de pacientes no Google
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="absolute -inset-3 border border-olive/25 rounded-tl-[3rem] rounded-br-[3rem] -z-10" />
          <div className="aspect-[4/5] rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden bg-sand">
            <video
              className="h-full w-full object-cover"
              src="/video-espaco.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label={`Vídeo do espaço do studio ${studio.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
