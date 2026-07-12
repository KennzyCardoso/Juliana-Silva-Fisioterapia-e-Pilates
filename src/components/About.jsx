export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 aspect-square rounded-[2rem] bg-gradient-to-br from-clay/15 to-olive/15 border border-sand flex items-center justify-center">
          <p className="text-ink-soft/50 text-sm">foto da Juliana em breve</p>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-widest text-olive font-semibold">
            Sobre
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mt-3">
            Juliana Silva
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Fisioterapeuta dedicada a cuidar de cada paciente de forma única,
            unindo técnica, escuta e acolhimento. No studio, o tratamento vai
            além do alívio da dor: é sobre devolver qualidade de vida,
            confiança nos movimentos e bem-estar no dia a dia.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Com um olhar atento às necessidades de cada corpo, combina
            fisioterapia e Pilates para criar planos de tratamento
            personalizados, sempre com base em evidência e muito cuidado.
          </p>
        </div>
      </div>
    </section>
  );
}
