import { differentials } from "@/data/studio";

export default function Differentials() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <span className="text-xs uppercase tracking-widest text-olive font-semibold">
          Diferenciais
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
          Por que escolher o studio
        </h2>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 border-t border-l border-ink/10">
        {differentials.map((item) => (
          <div
            key={item.title}
            className="border-b border-r border-ink/10 p-8 md:p-10"
          >
            <span className="font-display text-4xl text-olive/40">“</span>
            <h3 className="mt-1 font-display text-xl text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
