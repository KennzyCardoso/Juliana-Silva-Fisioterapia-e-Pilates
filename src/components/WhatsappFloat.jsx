import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/studio";

export default function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
