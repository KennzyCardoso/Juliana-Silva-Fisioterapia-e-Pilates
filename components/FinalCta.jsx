import { MessageCircle } from "lucide-react";
import { whatsappLink, finalCta } from "@/data/studio";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden px-8 py-16 md:px-14 md:py-20 min-h-[24rem] flex items-end">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video-renove-energias.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/95 via-olive-dark/50 to-transparent" />

        <div className="relative max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl text-cream-light">
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-cream-light/80">{finalCta.subtext}</p>
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
      </div>
    </section>
  );
}
