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

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  studio.mapsQuery
)}`;

export const hero = {
  eyebrow: "Studio no Centro de Castanhal",
  headline: "O tratamento começa ouvindo o que o seu corpo tem a dizer.",
  subtext:
    "Fisioterapia e Pilates com avaliação individual, plano específico para a sua queixa e acompanhamento sessão a sessão — sem fórmula pronta.",
};

export const about = {
  paragraphs: [
    "Sou fisioterapeuta e uno fisioterapia e Pilates para tratar a causa da dor, não só o sintoma do dia. Todo atendimento começa com uma avaliação de verdade — sem pular direto para um protocolo padrão.",
    "Isso significa sessões pensadas para o seu momento: se hoje o corpo pede mobilidade, trabalhamos mobilidade; se pede fortalecimento, é isso que entra no plano. Sempre olhando como você está respondendo, não seguindo um roteiro fixo.",
  ],
};

export const services = [
  {
    title: "Fisioterapia Traumato-ortopédica",
    description:
      "Para dor articular, lesão ou pós-cirúrgico: entender o que travou o movimento e trabalhar para destravar.",
  },
  {
    title: "Fisioterapia Desportiva",
    description:
      "Preparo e reabilitação para quem treina e não quer parar por causa de uma lesão.",
  },
  {
    title: "Fisioterapia Geriátrica",
    description:
      "Mobilidade, equilíbrio e segurança para seguir fazendo o que importa na terceira idade.",
  },
  {
    title: "Liberação Miofascial",
    description:
      "Trabalho manual em pontos de tensão que o alongamento sozinho não resolve.",
  },
  {
    title: "Agulhamento a Seco",
    description:
      "Agulha fina, direto no ponto de dor muscular — para quando a tensão não cede com outras técnicas.",
  },
  {
    title: "Massagem Relaxante",
    description: "Uma hora só sua, para o corpo desacelerar.",
  },
  {
    title: "Pilates e Mat Pilates",
    description:
      "Postura, força e consciência corporal, em aula individual ou em grupo pequeno.",
  },
  {
    title: "Ventosaterapia",
    description:
      "Ventosas para melhorar a circulação local e aliviar músculos sobrecarregados.",
  },
];

export const differentials = [
  {
    title: "Avaliação de verdade",
    description:
      "Antes de montar qualquer plano, entendo o histórico, a queixa e o que já foi tentado antes.",
  },
  {
    title: "Um profissional, do início ao fim",
    description:
      "É a Juliana quem avalia e quem conduz as sessões — sem trocar de fisioterapeuta no meio do tratamento.",
  },
  {
    title: "Studio pequeno, atenção grande",
    description:
      "Sem hora marcada em cima da hora marcada. Cada sessão tem o tempo que precisa.",
  },
  {
    title: "Evolução acompanhada de perto",
    description:
      "O plano é revisado conforme o corpo responde — o tratamento muda se for preciso.",
  },
];

export const gallery = [
  {
    src: "/video-espaco.mp4",
    caption: "O espaço",
  },
  {
    src: "/video-fisioterapia-geriatrica.mp4",
    caption: "Fisioterapia geriátrica",
  },
  {
    src: "/video-desafio-copo.mp4",
    caption: "Desafio do copo no Reformer",
  },
];

export const location = {
  intro:
    "No Centro de Castanhal, em um espaço pensado para o atendimento individual.",
};

export const finalCta = {
  headline: "Bora marcar sua avaliação?",
  subtext:
    "É só chamar no WhatsApp que a gente combina o melhor horário para você.",
};
