export const studio = {
  name: "Juliana Silva",
  brand: "Fisioterapia e Pilates",
  phoneDisplay: "(91) 98351-6196",
  whatsapp: "5591983516196",
  address: "R. Cel. Leal, 953 - Centro, Castanhal - PA, 68743-070",
  hours: "Segunda a Sexta, 08h às 19h",
  instagram: "https://www.instagram.com/js.fisioterapia_e_pilates",
  mapsQuery: "R. Cel. Leal, 953 - Centro, Castanhal - PA, 68743-070",
};

export function whatsappLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${studio.whatsapp}?text=${text}`;
}

export const services = [
  {
    title: "Fisioterapia Traumato-ortopédica",
    description: "Tratamento de lesões, dores articulares e recuperação pós-cirúrgica com foco no seu movimento.",
    icon: "Bone",
  },
  {
    title: "Fisioterapia Desportiva",
    description: "Prevenção e reabilitação de lesões para quem pratica esporte e quer voltar com segurança.",
    icon: "Activity",
  },
  {
    title: "Fisioterapia Geriátrica",
    description: "Cuidado especializado para a terceira idade, com foco em mobilidade, equilíbrio e autonomia.",
    icon: "HeartHandshake",
  },
  {
    title: "Liberação Miofascial",
    description: "Técnica manual para aliviar tensões musculares e melhorar a flexibilidade do corpo.",
    icon: "Hand",
  },
  {
    title: "Agulhamento a Seco",
    description: "Alívio de pontos de tensão muscular (trigger points) para reduzir dor e melhorar função.",
    icon: "Zap",
  },
  {
    title: "Massagem Relaxante",
    description: "Um momento de cuidado para aliviar o estresse do dia a dia e renovar as energias.",
    icon: "Sparkles",
  },
  {
    title: "Pilates e Mat Pilates",
    description: "Fortalecimento, postura e consciência corporal em aulas individuais ou em grupo.",
    icon: "PersonStanding",
  },
  {
    title: "Ventosaterapia",
    description: "Terapia com ventosas para melhorar a circulação e aliviar tensões musculares.",
    icon: "CircleDot",
  },
];

export const differentials = [
  {
    title: "Atendimento personalizado",
    description: "Cada plano de tratamento é pensado para o seu corpo, sua rotina e seus objetivos.",
  },
  {
    title: "Profissional qualificada",
    description: "Fisioterapeuta especializada, sempre atualizada com as melhores técnicas do mercado.",
  },
  {
    title: "Espaço acolhedor",
    description: "Um studio pensado para o seu conforto, no coração do Centro de Castanhal.",
  },
  {
    title: "Foco em resultado",
    description: "Acompanhamento próximo da sua evolução, sessão após sessão.",
  },
];
