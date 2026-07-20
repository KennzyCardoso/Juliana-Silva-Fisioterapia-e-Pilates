import { services } from "@/data/studio";

export default function Services() {
  return (
    <section id="servicos" className="bg-sand/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-olive font-semibold">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Cuidado completo para o seu corpo
          </h2>
        </div>

        <div className="mt-14 border-t border-ink/10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid md:grid-cols-12 gap-2 md:gap-8 items-baseline py-7 border-b border-ink/10"
            >
              <span className="md:col-span-2 font-display text-2xl md:text-3xl text-clay/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 font-display text-lg md:text-xl text-ink">
                {service.title}
              </h3>
              <p className="md:col-span-6 text-sm md:text-base text-ink-soft leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
