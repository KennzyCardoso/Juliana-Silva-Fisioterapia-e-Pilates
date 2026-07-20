import { MapPin, Clock, Phone } from "lucide-react";
import { studio, whatsappLink, location } from "@/data/studio";

export default function Location() {
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    studio.mapsQuery
  )}&output=embed`;

  return (
    <section
      id="localizacao"
      className="border-t border-ink/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-olive font-semibold">
            Localização
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Venha nos visitar
          </h2>
          <p className="mt-4 text-ink-soft">{location.intro}</p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="text-clay shrink-0 mt-0.5" size={20} />
              <span className="text-ink-soft">{studio.address}</span>
            </div>
            <div className="flex gap-3">
              <Clock className="text-clay shrink-0 mt-0.5" size={20} />
              <span className="text-ink-soft">{studio.hours}</span>
            </div>
            <div className="flex gap-3">
              <Phone className="text-clay shrink-0 mt-0.5" size={20} />
              <span className="text-ink-soft">{studio.phoneDisplay}</span>
            </div>
          </div>

          <a
            href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-cream-light font-medium hover:bg-clay-dark transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className="aspect-[4/3] rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden border border-ink/10">
          <iframe
            title="Localização do studio no mapa"
            src={mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
