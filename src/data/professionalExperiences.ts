export interface ProfessionalExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  responsibilities: string;
  githubUrl?: string;
  websiteUrl?: string;
  date?: string;
}

export const professionalExperiences: ProfessionalExperience[] = [
  {
    id: "mstore-digital",
    title: "MStore Digital LTDA",
    description: "A MStore Digital LTDA é uma empresa de Desenvolvimento de Software, que tem como objetivo fornecer software que facilite a vida das pessoas em diferentes áreas. Nossa missão é criar soluções inovadoras que simplifiquem tarefas cotidianas e melhorem a eficiência de empresas e indivíduos. Além disso, estamos comprometidos em usar tecnologias de ponta, incluindo inteligência artificial, para desenvolver projetos que estão na vanguarda da inovação.",
    image: "/mstore-logo.svg",
    imageAlt: "Logo MStore Digital LTDA",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tsoa"],
    responsibilities: "Desenvolvimento de interfaces, microsserviços para envio de e-mails, comunicação via WhatsApp, bots para Discord, pagamentos com MercadoPago (Pix, boleto e cartão de crédito).",
    githubUrl: "https://github.com/mstore-digital",
    date: "Jan. de 2024 - Jan. de 2025"
  },
  {
    id: "soublox",
    title: "Soublox",
    description: "A Soublox é uma consultoria parceira oficial da Salesforce, especializada na implementação e suporte técnico de soluções CRM. Nossa missão é otimizar o desempenho das equipes de vendas, garantindo uma utilização eficiente e rentável da plataforma Salesforce. Desenvolvemos soluções nativas como docu2.me, chatt2.me, timer2.me, leads2.me e shuffle2.me, que aceleram processos, reduzem custos e aumentam a produtividade das empresas. Com uma equipe certificada pela Salesforce, nos comprometemos a integrar, otimizar e escalar negócios de maneira eficaz e segura.",
    image: "/pt-BR.svg",
    imageAlt: "/soublox-logo.png",
    technologies: ["TypeScript", "AWS", "Nest.js", "PostgreSQL", "Docker"],
    responsibilities: "Atuo no desenvolvimento de soluções backend, criando e mantendo APIs, integrações e sistemas que garantem escalabilidade, segurança e eficiência.",
    websiteUrl: "https://soublox.com",
    githubUrl: "https://github.com/soublox",
    date: "Set. de 2025 - Atualmente"
  }
];
