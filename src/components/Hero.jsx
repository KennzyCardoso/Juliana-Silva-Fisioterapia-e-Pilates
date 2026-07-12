import { MessageCircle, MapPin, Star } from "lucide-react";
import { whatsappLink, studio } from "../data/studio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sand/60 via-cream to-cream" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-widest text-olive font-semibold mb-4">
            Castanhal - PA
          </span>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-ink">
            Cuide do seu corpo com quem entende de movimento
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-md">
            Fisioterapia e Pilates em um espaço acolhedor, com atendimento
            individualizado para aliviar sua dor, recuperar sua mobilidade e
            fortalecer seu corpo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

          <div className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
            <div className="flex text-clay">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            Avaliações reais de pacientes no Google
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-olive/20 to-clay/20 border border-sand flex items-center justify-center overflow-hidden">
            <div className="text-center px-8">
              <p className="font-display text-2xl text-ink-soft/60">
                {studio.name}
              </p>
              <p className="text-sm text-ink-soft/50 mt-2">
                foto do studio em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
