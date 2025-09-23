export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  responsibilities: string;
  githubUrl?: string;
  websiteUrl?: string;
  projectType: "open-source" | "personal";
  role: string;
  desktopImage: string;
  desktopImageAlt: string;
  mobileImage: string;
  mobileImageAlt: string;
}

export const projects: Project[] = [
  {
    id: "g4mix",
    title: "G4mix",
    description: "G4mix é um projeto open source focado em desenvolvimento de soluções inovadoras. O projeto combina tecnologias modernas para criar uma plataforma robusta e escalável, com foco especial no backend e aplicações mobile. O G4mix visa democratizar o acesso a ferramentas de desenvolvimento de alta qualidade, mantendo um código aberto e uma comunidade ativa de desenvolvedores.",
    image: "/pt-BR.svg",
    imageAlt: "Logo G4mix",
    technologies: ["Node.js", "TypeScript", "React Native", "PostgreSQL", "Docker", "AWS"],
    responsibilities: "Desenvolvimento do backend com APIs RESTful, implementação de autenticação e autorização, integração com bancos de dados, desenvolvimento de aplicações mobile com React Native, otimização de performance e escalabilidade.",
    githubUrl: "https://github.com/G4mix",
    projectType: "open-source",
    role: "Desenvolvedor Backend e Mobile",
    desktopImage: "/g4mix-desktop-demo.png",
    desktopImageAlt: "Desktop G4mix",
    mobileImage: "/g4mix-mobile-demo.png",
    mobileImageAlt: "Mobile G4mix"
  },
  {
    id: "ofertas-dev-luch",
    title: "Ofertas Dev Luch",
    description: "Ofertas Dev Luch é um projeto pessoal focado em buscar e notificar usuários sobre ofertas de qualidade de forma agradável e eficiente. O site está atualmente em fase beta, mas já oferece uma experiência de usuário otimizada para descoberta de algumas promoções.",
    image: "/pt-BR.svg",
    imageAlt: "Logo Ofertas Dev Luch",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Web Scraping", "API Integration"],
    responsibilities: "Desenvolvimento full stack completo, implementação de sistema de web scraping, criação de notificações personalizadas, design e desenvolvimento da interface do usuário, integração com APIs externas, gerenciamento de banco de dados e otimização de performance.",
    websiteUrl: "https://ofertas.dev-luch.com",
    projectType: "personal",
    role: "Desenvolvedor Full Stack",
    desktopImage: "/ofertas-dev-luch-desktop-demo.png",
    desktopImageAlt: "Desktop Ofertas Dev Luch",
    mobileImage: "/ofertas-dev-luch-mobile-demo.png",
    mobileImageAlt: "Mobile Ofertas Dev Luch"
  }
];
