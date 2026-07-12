import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/studio";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[2rem] bg-olive-dark px-8 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-cream-light">
          Pronto para cuidar do seu corpo?
        </h2>
        <p className="mt-4 text-cream-light/80 max-w-xl mx-auto">
          Agende sua avaliação e dê o primeiro passo para uma vida com menos
          dor e mais movimento.
        </p>
        <a
          href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-clay px-8 py-3.5 text-cream-light font-medium hover:bg-clay-dark transition-colors"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
