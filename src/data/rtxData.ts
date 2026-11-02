export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  image: string;
  highlightText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Educacional & Institucional' | 'Residencial' | 'Comercial' | 'Manutenção & Condomínios' | 'Limpeza & Segurança';
  location: string;
  description: string;
  image: string;
  galleryImages?: string[];
  details: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  text: string;
  rating: number;
}

export const RTX_INFO = {
  fullName: "RTX Construtora – Engenharia e Construção",
  commercialName: "RTX Construtora",
  secondaryName: "RTX Prestação de Serviços",
  razaoSocial: "RTX PRESTACAO DE SERVIÇOS",
  instagramHandle: "@construtorartxser",
  instagramUrl: "https://instagram.com/construtorartxser",
  currentSiteUrl: "https://construtorartx.netlify.app",
  officialLogo: "https://i.postimg.cc/qq4brM7x/Logo-3D-Azul-RTX-Construtora.png",
  experienceYears: 15,
  experienceText: "Mais de 15 anos no mercado",
  address: "Av. Dr. Paulo de Moraes, 555 – Sala 12, Piracicaba – SP, CEP 13409-136",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Dr.+Paulo+de+Moraes,+555+-+Sala+12,+Piracicaba+-+SP,+13409-136",
  phones: [
    {
      display: "(19) 99653-6331",
      number: "5519996536331",
      isPrimary: true,
      tag: "WhatsApp Oficial RTX (Piracicaba & SP)",
    },
    {
      display: "(21) 98462-1227",
      number: "5521984621227",
      isPrimary: false,
      tag: "Atendimento RJ & SP",
    },
  ],
  defaultWhatsAppMessage: "Olá! Vi o site da RTX e gostaria de solicitar um orçamento.",
  keyPhrases: [
    "Construímos com qualidade, segurança e confiança",
    "Segurança, conservação e cuidado para o seu patrimônio",
    "Transformamos seu ambiente em um local gostoso de trabalhar e morar",
    "Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença",
  ],
};

export const RTX_PRESENTERS = [
  {
    name: "Carlos Santos",
    role: "Gestão Operacional & Manutenção Técnica",
    team: "Equipe RTX",
    photo: "/assets/images/carlos_santos.jpg",
    quote: "Somos da RTX: serviço de controlador de acesso, conservação e manutenção técnica de excelência.",
  },
  {
    name: "Dulcinéia Santos",
    role: "Atendimento & Gestão de Facilities e Condomínios",
    team: "Equipe RTX",
    photo: "/assets/images/dulcineia_santos.jpg",
    quote: "Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.",
  },
];

export const VIDEO_DATA = {
  videoUrl: "/assets/aistudio/WhatsApp_Video_2026-10-30_at_13.42.43_bdca7df2.mp4",
  posterUrl: "/assets/images/rtx_apresentadores_dupla.jpg",
  title: "Vídeo Institucional Oficial – RTX Construtora & Serviços",
  subtitle: "Apresentado por Carlos Santos e Dulcinéia Santos da equipe RTX",
  speechHighlights: [
    {
      speaker: "Carlos Santos & Dulcinéia Santos",
      text: "É um prazer apresentar a RTX para você!",
    },
    {
      speaker: "Dulcinéia Santos",
      text: "Na RTX oferecemos serviço de controle de acesso, garantindo mais segurança e tranquilidade para sua empresa, condomínio ou empreendimento.",
    },
    {
      speaker: "Carlos Santos & Dulcinéia Santos",
      text: "Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.",
    },
    {
      speaker: "Carlos Santos",
      text: "Somos da RTX: serviço de controlador de acesso, conservação e manutenção.",
    },
    {
      speaker: "Dulcinéia Santos",
      text: "RTX: Segurança, conservação e cuidado para o seu patrimônio. Entre em contato agora e solicite seu orçamento!",
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construcao-civil",
    title: "Construção Civil Residencial e Comercial",
    shortDescription: "Projetos executivos, fundações, alvenaria estrutural, acabamento de alto padrão e reformas completas.",
    fullDescription: "Execução completa de obras residenciais e comerciais com rigoroso acompanhamento técnico de engenharia. Gerenciamento do cronograma, compra de materiais certificados e entrega com garantia total.",
    iconName: "Building2",
    benefits: [
      "Planejamento com cronograma físico-financeiro detalhado",
      "Engenheiros e mestres de obras experientes in loco",
      "Acabamentos premium e conformidade com normas ABNT",
      "Garantia estrutural e transparência total de custos",
    ],
    image: "/assets/images/servico_construcao_civil.jpg",
    highlightText: "Do alicerce ao acabamento fino",
  },
  {
    id: "equipe-profissionais",
    title: "Equipe de Profissionais e Pedreiros",
    shortDescription: "Mão de obra selecionada, treinada e registrada para todas as etapas da sua obra.",
    fullDescription: "Corpo técnico composto por pedreiros gabaritados, carpinteiros, armadores, azulejistas, eletricistas e pintores especializados. Equipe uniformizada, com EPIs e supervisão diária.",
    iconName: "HardHat",
    benefits: [
      "Profissionais rigorosamente avaliados com antecedentes checados",
      "Total conformidade com normas de segurança do trabalho (NR-18 e NR-35)",
      "Redução drástica de desperdício de matéria-prima",
      "Supervisão e alinhamento diário com o cliente",
    ],
    image: "/assets/images/servico_pedreiros.jpg",
    highlightText: "Mão de obra qualificada e com supervisão",
  },
  {
    id: "seguranca-acesso",
    title: "Controle de Acesso e Segurança Patrimonial",
    shortDescription: "Portaria presencial e inteligente, rondas preventivas e protocolos rigorosos de vigilância.",
    fullDescription: "Soluções integradas de proteção para condomínios residenciais, centros de distribuição e edifícios corporativos. Treinamento de recepcionistas e porteiros com foco na cortesia e segurança total.",
    iconName: "ShieldCheck",
    benefits: [
      "Profissionais treinados em identificação e prevenção de riscos",
      "Protocolos personalizados para moradores, visitantes e prestadores",
      "Monitoramento e auditoria periódica de postos de trabalho",
      "Integração com sistemas eletrônicos e biometria",
    ],
    image: "/assets/images/servico_portaria_acesso.jpg",
    highlightText: "Proteção e recepção 24h para condomínios e empresas",
  },
  {
    id: "limpeza-obras",
    title: "Limpeza de Obras e Conservação de Ambientes",
    shortDescription: "Higienização técnica pesada e limpeza fina detalhada para entrega impecável do imóvel.",
    fullDescription: "Remoção especializada de resíduos de cimento, tintas, rejuntes e vernizes sem danificar pisos nobres, vidros ou louças. Equipamentos industriais e produtos específicos para cada tipo de substrato.",
    iconName: "Sparkles",
    benefits: [
      "Tratamento de pisos porcelanatos, mármores e madeiras",
      "Limpeza minuciosa de esquadrias, vidraças e fachadas",
      "Imóvel 100% pronto para ocupação imediata",
      "Equipe ágil com maquinário próprio de alta sucção e polimento",
    ],
    image: "/assets/images/servico_limpeza_obras.jpg",
    highlightText: "Entrega impecável pronta para morar e trabalhar",
  },
  {
    id: "manutencao-predial",
    title: "Manutenção e Conservação Predial",
    shortDescription: "Manutenção preventiva e corretiva elétrica, hidráulica, pintura externa e reparos civis.",
    fullDescription: "Planos programados de conservação para preservar o valor do imóvel e evitar custos emergenciais. Diagnóstico técnico predial, laudos de conformidade e intervenções rápidas.",
    iconName: "Wrench",
    benefits: [
      "Prevenção de infiltrações, trincas e panes nas instalações",
      "Pintura de fachadas e revitalização de áreas comuns",
      "Atendimento prioritário para emergências do condomínio",
      "Valorização expressiva do patrimônio imobiliário",
    ],
    image: "/assets/images/servico_manutencao_predial.jpg",
    highlightText: "Valorização e durabilidade para seu edifício",
  },
  {
    id: "condominios-empresas",
    title: "Serviços para Condomínios e Empreendimentos",
    shortDescription: "Gestão completa de facilities, zeladoria, apoio operacional e conservação de áreas comuns.",
    fullDescription: "Terceirização sob medida para síndicos e gestores prediais. Cuidamos da limpeza contínua, manutenção de jardins, pequenos reparos e atendimento aos condôminos com profissionalismo exemplar.",
    iconName: "Briefcase",
    benefits: [
      "Eliminação de passivos trabalhistas diretos para o condomínio",
      "Cobertura imediata de folgas, férias e atestados médicos",
      "Checklists operacionais digitais e relatórios para a administração",
      "Ambientes agradáveis que encantam moradores e colaboradores",
    ],
    image: "/assets/images/servico_condominios_facilities.jpg",
    highlightText: "Solução completa para síndicos e administradoras",
  },
  {
    id: "conservacao-patrimonio",
    title: "Conservação e Cuidado do Patrimônio",
    shortDescription: "Zelo absoluto e valorização contínua com técnicas modernas de preservação estrutural.",
    fullDescription: "Nossa premissa fundamental: quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença. Desenvolvemos soluções customizadas para que cada metro quadrado mantenha seu brilho e funcionalidade.",
    iconName: "HomeCheck",
    benefits: [
      "Auditoria predial contínua dos pontos críticos",
      "Conservação estética e funcional com selo de excelência RTX",
      "Sustentabilidade no uso de água e descarte ecológico",
      "Mais tranquilidade para proprietários e investidores",
    ],
    image: "/assets/images/servico_conservacao_patrimonio.jpg",
    highlightText: "Cuidado e segurança para o que é seu",
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "obra-escola-modernizacao",
    title: "Reforma & Modernização de Unidade Escolar",
    category: "Educacional & Institucional",
    location: "Piracicaba e Região – SP",
    description: "Reforma estrutural completa de unidade de ensino, incluindo salas de aula, corredores, alvenaria, instalações elétricas, pintura especializada e adequações de segurança e acessibilidade.",
    image: "https://i.postimg.cc/nhJBmVPT/Whats-App-Image-2026-10-31-at-11-49-21.jpg",
    galleryImages: [
      "https://i.postimg.cc/nhJBmVPT/Whats-App-Image-2026-10-31-at-11-49-21.jpg",
      "https://i.postimg.cc/Qd317Nym/Whats-App-Image-2026-10-31-at-11-49-22.jpg",
      "https://i.postimg.cc/7Zk0zPWN/Whats-App-Image-2026-10-31-at-11-49-22-(1).jpg",
      "https://i.postimg.cc/0ysDS5Bf/Whats-App-Image-2026-10-31-at-11-49-22-(2).jpg",
      "https://i.postimg.cc/kgmKSMpz/Whats-App-Image-2026-10-31-at-11-49-23.jpg",
      "https://i.postimg.cc/mgsC9Z56/Whats-App-Image-2026-10-31-at-11-49-23-(1).jpg",
      "https://i.postimg.cc/L8pLP4bW/Whats-App-Image-2026-10-31-at-11-49-23-(2).jpg",
      "https://i.postimg.cc/t4jW6RMM/Whats-App-Image-2026-10-31-at-11-49-23-(3).jpg",
      "https://i.postimg.cc/XYbd5NzR/Whats-App-Image-2026-10-31-at-11-49-24.jpg",
      "https://i.postimg.cc/pLHzjVSN/Whats-App-Image-2026-10-31-at-11-49-24-(1).jpg",
      "https://i.postimg.cc/RZBKtCYx/Whats-App-Image-2026-10-31-at-11-49-24-(2).jpg",
      "https://i.postimg.cc/qvTyKB58/Whats-App-Image-2026-10-31-at-11-49-24-(3).jpg"
    ],
    details: "Obra realizada com cronograma intensivo para entrega antes do início do período letivo. Escopo técnico abrangendo alvenaria estrutural, revestimentos de alto tráfego laváveis, cabeamento estruturado e elétrica segura, revisão hidrossanitária completa, iluminação LED de alta eficiência, pintura acrílica resistente e laudo de entrega com ART do CREA.",
  },
  {
    id: "obra-01",
    title: "Residência Contemporânea Alphaville",
    category: "Residencial",
    location: "Piracicaba – SP",
    description: "Construção civil completa de residência de 480m², estrutura em concreto aparente, esquadrias do chão ao teto e acabamento de alto padrão.",
    image: "/assets/images/portfolio_residencial.jpg",
    details: "Execução em 11 meses, rigoroso padrão de eficiência térmica e acústica, piscina de borda infinita e integração com área verde.",
  },
  {
    id: "obra-02",
    title: "Centro Corporativo & Galpão Logístico",
    category: "Comercial",
    location: "Região Metropolitana de Campinas & Piracicaba",
    description: "Engenharia estrutural, pavimentação industrial de alta resistência e instalações elétricas/hidráulicas completas.",
    image: "/assets/images/portfolio_comercial.jpg",
    details: "Obra de 2.200m² entregue dentro do cronograma, com piso de concreto polido e laudos de vistoria aprovados.",
  },
  {
    id: "obra-03",
    title: "Edifício Comercial Century Tower",
    category: "Manutenção & Condomínios",
    location: "Piracicaba – SP",
    description: "Gestão integrada de conservação predial, portaria especializada e manutenção técnica preventiva das instalações centrais.",
    image: "/assets/images/rtx_manutencao_predial.jpg",
    details: "Contrato contínuo há mais de 4 anos com 99.8% de índice de aprovação dos condôminos e redução de 25% em manutenções corretivas.",
  },
  {
    id: "obra-04",
    title: "Revitalização & Limpeza Pós-Obra Fina",
    category: "Limpeza & Segurança",
    location: "Edifícios Residenciais & Comerciais SP/RJ",
    description: "Limpeza minuciosa de vidros em altura, polimento de pedras naturais e preparação impecável para entrega de chaves.",
    image: "/assets/images/rtx_conservacao_limpeza.jpg",
    details: "Mais de 15.000m² de áreas higienizadas com produtos biodegradáveis neutros, protegendo revestimentos importados.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "dep-01",
    name: "Dr. Carlos Eduardo Meirelles",
    role: "Síndico Profissional",
    companyOrLocation: "Condomínio Reserva das Palmeiras (Piracicaba)",
    text: "Contratamos a RTX tanto para a manutenção predial quanto para o controle de acesso. A diferença na pontualidade, educação dos profissionais e rigor técnico da engenharia foi notável desde o primeiro mês. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    id: "dep-02",
    name: "Mariana Alencar Guimarães",
    role: "Proprietária Residencial",
    companyOrLocation: "Residencial Quinta dos Vinhedos",
    text: "Construir uma casa é sempre um desafio, mas a equipe da RTX Construtora transformou tudo em tranquilidade. Cronograma cumprido à risca, acabamentos perfeitos e limpeza exemplar durante toda a obra.",
    rating: 5,
  },
  {
    id: "dep-03",
    name: "Roberto S. Fontes",
    role: "Diretor de Operações",
    companyOrLocation: "Empreendimento Logístico & Comercial",
    text: "A RTX Prestação de Serviços entende o valor do patrimônio do cliente. Quando precisamos de reformas comerciais rápidas e limpeza pós-obra em prazo apertado, eles entregaram com maestria e custo justo.",
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    q: "A RTX atende quais regiões além de Piracicaba?",
    a: "Nossa sede administrativa e operacional está em Piracicaba – SP (Av. Dr. Paulo de Moraes, 555), e atendemos toda a Região Metropolitana de Piracicaba, Campinas, Grande São Paulo e projetos corporativos no Rio de Janeiro através de nossa equipe móvel.",
  },
  {
    q: "Como solicitar um orçamento com a RTX Construtora?",
    a: "Basta clicar em qualquer botão de WhatsApp aqui no site ou preencher nosso formulário de contato. Respondemos em poucos minutos com atendimento direto da nossa equipe técnica.",
  },
  {
    q: "A empresa possui equipe própria e registrada?",
    a: "Sim! Todos os nossos colaboradores passam por rigorosa seleção, treinamento contínuo, exames admissionais, são devidamente registrados (CLT) e utilizam todos os Equipamentos de Proteção Individual (EPIs).",
  },
  {
    q: "Vocês emitem nota fiscal e laudos de engenharia?",
    a: "Sim, somos uma empresa 100% legalizada (RTX PRESTACAO DE SERVIÇOS), com emissão de notas fiscais, ART (Anotação de Responsabilidade Técnica) junto ao CREA para obras de engenharia e total garantia contratual.",
  },
];
