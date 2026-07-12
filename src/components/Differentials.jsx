import { CheckCircle2 } from "lucide-react";
import { differentials } from "../data/studio";

export default function Differentials() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-olive font-semibold">
          Diferenciais
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
          Por que escolher o studio
        </h2>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 gap-8">
        {differentials.map((item) => (
          <div key={item.title} className="flex gap-4">
            <CheckCircle2 className="text-olive shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-medium text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
