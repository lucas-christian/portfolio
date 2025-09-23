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
    id: "soublox",
    title: "Soublox",
    description: "experience.soublox.description",
    image: "/soublox-logo.png",
    imageAlt: "Logo Soublox",
    technologies: ["TypeScript", "AWS", "Nest.js", "PostgreSQL", "Docker"],
    responsibilities: "experience.soublox.responsibilities",
    websiteUrl: "https://soublox.com",
    githubUrl: "https://github.com/soublox",
    date: "Set. de 2025 - Atualmente"
  },
  {
    id: "mstore-digital",
    title: "MStore Digital LTDA",
    description: "experience.mstore-digital.description",
    image: "/mstore-logo.svg",
    imageAlt: "Logo MStore Digital LTDA",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tsoa"],
    responsibilities: "experience.mstore-digital.responsibilities",
    githubUrl: "https://github.com/mstore-digital",
    date: "Jan. de 2024 - Jan. de 2025"
  },
];
