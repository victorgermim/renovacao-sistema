// 🎯 ARQUIVO DE CONFIGURAÇÃO - Altere apenas os dados aqui!
// Todos os textos, números e informações do site estão centralizados neste arquivo

export const siteConfig = {
  // Informações do Sistema
  systemName: "Sistema de Overs",
  year: "2024",

  // Hero Section
  hero: {
    headline: "Renove seu sistema de Overs",
    subheadline: "Mantenha seu programa de incentivo ativo e seguro",
    description:
      "Seu sistema gerou resultados extraordinários em 2024. Garanta a continuidade, segurança e evolução do seu programa de incentivo com a renovação da hospedagem e manutenção.",
    cta: "Escolha seu plano de renovação",
  },

  // Estatísticas Principais
  stats: [
    {
      value: "303",
      label: "Agentes cadastrados",
      description: "Total de agentes cadastrados no programa",
      icon: "users",
    },
    {
      value: "205",
      label: "Reservas criadas",
      description: "Total de reservas criadas pelo sistema",
      icon: "hotel",
    },
    {
      value: "3350",
      label: "Investidos em Bonificações",
      description: "Total investido em bonificações (estimado em reais)",
      icon: "money",
      prefix: "R$ ",
    },
    {
      value: "41",
      label: "Agentes com >1 reserva",
      description: "Agentes que criaram mais de uma reserva",
      icon: "chart",
    },
  ],

  // Planos de Renovação
  plans: [
    {
      name: "Simples",
      description: "Mantenha tudo funcionando sem interrupções",
      price: "299",
      installments: "10x",
      features: ["Hospedagem segura e estável", "Manutenção preventiva mensal", "Suporte técnico sempre que precisar"],
      highlighted: false,
      cta: "Renovar Plano Simples",
    },
    {
      name: "Intermediário",
      description: "Potencialize seus resultados com novas ferramentas",
      price: "319",
      installments: "10x",
      features: [
        "Tudo do plano Simples incluído",
        "Dashboard com métricas em tempo real",
        "Notificações automáticas por e-mail",
      ],
      highlighted: true,
      badge: "Mais Escolhido",
      cta: "Renovar Plano Intermediário",
    },
    {
      name: "Avançado",
      description: "Máxima performance e personalização total",
      price: "329",
      installments: "10x",
      features: [
        "Tudo do plano Intermediário incluído",
        "Integrações",
        "Customizações exclusivas sob demanda",
        "Prioridade no suporte técnico",
      ],
      highlighted: false,
      cta: "Renovar Plano Avançado",
    },
  ],

  // Seção de Urgência/Valor
  renewal: {
    title: "Por que renovar agora?",
    reasons: [
      {
        title: "Continuidade Garantida",
        description: "Mantenha seu sistema ativo sem interrupções e preserve todos os dados e histórico de 2024.",
      },
      {
        title: "Segurança e Estabilidade",
        description: "Hospedagem profissional com backups automáticos e proteção contra perda de dados.",
      },
      {
        title: "Suporte Sempre Disponível",
        description: "Conte com assistência técnica para resolver qualquer problema rapidamente.",
      },
      {
        title: "Evolução Constante",
        description: "Receba atualizações e melhorias contínuas para manter seu sistema competitivo.",
      },
    ],
  },

  // Contato
  contact: {
    email: "contato@sistemasovers.com",
  },
}
