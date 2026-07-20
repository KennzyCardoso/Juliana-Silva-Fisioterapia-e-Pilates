"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/studio";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#momentos", label: "Momentos" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 h-18 flex items-center justify-between py-3">
        <a href="#top" className="flex items-center">
          <Image
            src="/logo-juliana-silva.png"
            alt="Juliana Silva Fisioterapia e Pilates"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-clay transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-cream-light hover:bg-clay-dark transition-colors"
        >
          <MessageCircle size={16} />
          Agendar
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-cream-light"
          >
            <MessageCircle size={16} />
            Agendar pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
