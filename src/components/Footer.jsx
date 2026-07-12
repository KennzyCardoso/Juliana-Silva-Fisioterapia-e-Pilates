import { Phone, MapPin } from "lucide-react";
import { studio } from "../data/studio";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-sand py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-ink">{studio.name}</p>
          <p className="text-sm text-ink-soft">{studio.brand}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-ink-soft">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-clay" />
            {studio.address}
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-clay" />
            {studio.phoneDisplay}
          </span>
        </div>

        <a
          href={studio.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-ink-soft hover:text-clay transition-colors"
        >
          <InstagramIcon width={18} height={18} />
          @js.fisioterapia_e_pilates
        </a>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 text-xs text-ink-soft/60">
        <p>
          © {new Date().getFullYear()} {studio.name} {studio.brand}. Todos os
          direitos reservados.
        </p>
        <p className="flex items-center gap-1.5 flex-wrap justify-center">
          Site desenvolvido por
          <img
            src="/codigo-alpha-logo.png"
            alt="Código Alpha"
            className="h-5 w-auto align-middle"
          />
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
