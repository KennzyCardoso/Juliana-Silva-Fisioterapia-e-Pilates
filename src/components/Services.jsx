import {
  Bone,
  Activity,
  HeartHandshake,
  Hand,
  Zap,
  Sparkles,
  PersonStanding,
  CircleDot,
} from "lucide-react";
import { services } from "../data/studio";

const iconMap = {
  Bone,
  Activity,
  HeartHandshake,
  Hand,
  Zap,
  Sparkles,
  PersonStanding,
  CircleDot,
};

export default function Services() {
  return (
    <section id="servicos" className="bg-sand/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-olive font-semibold">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Cuidado completo para o seu corpo
          </h2>
          <p className="mt-4 text-ink-soft">
            Tratamentos pensados para cada fase e necessidade, sempre com
            acompanhamento próximo e individualizado.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="bg-cream-light rounded-2xl p-6 border border-sand hover:border-clay/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-clay/10 flex items-center justify-center text-clay">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-medium text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
