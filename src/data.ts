export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo com a Harmonização Facial?",
    options: [
      "Realçar minha beleza natural ✨",
      "Suavizar linhas de expressão e rugas 💆‍♀️",
      "Definir o contorno do rosto (mandíbula/mento) 📐",
      "Melhorar o formato ou volume dos lábios 💋"
    ]
  },
  {
    id: 2,
    question: "O que você mais valoriza em um procedimento estético?",
    options: [
      "Naturalidade absoluta (sem parecer artificial) 🌿",
      "Segurança técnica e profissional de alta confiança 🛡️",
      "Atendimento totalmente exclusivo e individualizado 💎",
      "Clareza absoluta em cada etapa do procedimento 🕊️"
    ]
  },
  {
    id: 3,
    question: "Você já realizou algum procedimento injetável anteriormente?",
    options: [
      "Não, esta seria a minha primeira experiência 🌟",
      "Sim, mas já faz bastante tempo 🗓️",
      "Sim, realizo procedimentos estéticos com frequência 🔄"
    ]
  },
  {
    id: 4,
    question: "O que te trouxe até a Dra. Thatiana Cristine hoje?",
    options: [
      "Busca por um método focado em rejuvenescimento elegante ✨",
      "Recomendação de resultados naturais e refinados 👌",
      "Desejo de fazer uma avaliação honesta e sem excessos 🤝"
    ]
  }
];

export const EXPERT_INFO = {
  name: "Dra. Thatiana Cristine",
  role: "Harmonização Facial",
  city: "Belo Horizonte",
  address: "Rua Paraíba, 1352 - Savassi, Belo Horizonte - MG, 30130-148",
  whatsappUrl: "https://api.whatsapp.com/message/VQ56QPPOIYFMN1?autoload=1&app_absent=0&utm_source=ig",
  instagramUrl: "https://www.instagram.com/dra.thatianacristine/reels/",
  heroImage: "https://i.imgur.com/TUEZynl.png",
  secondaryImage: "https://i.imgur.com/pVHkhzS.png",
  // Video placeholder/embed info (procedimento video link provided as imgur gallery link)
  videoUrl: "https://imgur.com/a/wdGR2IF",
  // Before and after gallery images
  // -> ADICIONE NOVOS LINKS DE ANTES/DEPOIS AQUI: basta colar a URL da imagem entre aspas e separada por vírgula
  galleryImages: [
    "https://i.imgur.com/16rh34H.png",
    "https://i.imgur.com/YGxRZbh.png",
    "https://i.imgur.com/5JR32TP.png",
    "https://i.imgur.com/MyVrFA5.png",
    "https://i.imgur.com/3KXBX8t.png"
  ],
  // Heart/Feedback prints (de 💚)
  // -> ADICIONE NOVOS PRINTS DE WHATSAPP / FEEDBACKS DO INSTAGRAM AQUI:
  heartFeedbacks: [
    "https://i.imgur.com/dhQlu7a.png",
    "https://i.imgur.com/VCwhRxY.png",
    "https://i.imgur.com/hLPHQFT.png",
    "https://i.imgur.com/ns3zYid.png"
  ],
  // Patient comments/reviews screenshots
  // -> ADICIONE NOVOS COMENTÁRIOS DO GOOGLE / OUTROS SITES AQUI:
  patientComments: [
    "https://i.imgur.com/2UJ0T25.png",
    "https://i.imgur.com/87hnbeY.png",
    "https://i.imgur.com/KwbmFxq.png"
  ]
};

export const REASONS_TO_TRUST = [
  {
    title: "Avaliação Sincera e Honesta",
    description: "Eu não indico o que você não precisa. Priorizo o equilíbrio, analisando sua estrutura facial de forma integrada para realçar o que você já tem de melhor."
  },
  {
    title: "Resultados com Naturalidade",
    description: "O meu foco principal é a sofisticação. Resultados refinados que fazem as pessoas elogiarem sua aparência, sem que ninguém note que foi feito um procedimento."
  },
  {
    title: "Atendimento 100% Exclusivo",
    description: "Cada paciente recebe um plano de tratamento único. Todo o processo é executado diretamente por mim, com atenção minuciosa em cada detalhe."
  },
  {
    title: "Materiais Premium e Seguros",
    description: "Utilização estrita das marcas de maior renome mundial e técnicas validadas pela ciência para garantir o máximo em segurança e durabilidade."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "1",
    title: "Contato Inicial via WhatsApp",
    description: "Ao tocar em um dos botões, você iniciará uma conversa comigo ou com meu suporte para tirar dúvidas iniciais de forma simples e rápida."
  },
  {
    number: "2",
    title: "Agendamento da Consulta",
    description: "Escolheremos o melhor dia e horário na nossa agenda exclusiva em Belo Horizonte para receber você com todo o conforto e privacidade."
  },
  {
    number: "3",
    title: "Avaliação Personalizada",
    description: "No dia da consulta, faremos um diagnóstico facial detalhado e definiremos juntos o melhor protocolo para suas necessidades individuais, sem qualquer compromisso."
  }
];
