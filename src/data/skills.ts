export interface Skill {
  id: string;
  name: string;
  category: string;
  rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S' | 'SS' | 'SSS' | 'EX';
  percentage: number;
  description: string;
  experience: string;
  projects: string[];
  certifications?: string[];
  relatedSkills: string[];
  icon?: string;
  color: string;
  glowColor: string;
}

export const skillsData: Skill[] = [
  // Stack Principal (Tronco Central)
  {
    id: 'javascript-typescript',
    name: 'JavaScript/TypeScript',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Linguagem principal para desenvolvimento full-stack com tipagem estática',
    experience: '4+ anos',
    projects: ['Portfolio', 'G4Mix', 'Ofertas Dev Luch', 'Soublox'],
    certifications: ['TypeScript Fundamentals'],
    relatedSkills: ['React', 'Node.js', 'NestJS'],
    color: '#F7DF1E',
    glowColor: '#F7DF1E'
  },
  {
    id: 'react-nextjs',
    name: 'React/Next.js',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Framework principal para desenvolvimento frontend moderno',
    experience: '3+ anos',
    projects: ['Portfolio', 'G4Mix', 'Ofertas Dev Luch'],
    certifications: ['React Advanced Patterns'],
    relatedSkills: ['JavaScript', 'TypeScript', 'Tailwind CSS'],
    color: '#61DAFB',
    glowColor: '#61DAFB'
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'core',
    rank: 'A',
    percentage: 90,
    description: 'Framework Node.js para aplicações server-side escaláveis',
    experience: '2+ anos',
    projects: ['G4Mix Backend', 'APIs REST'],
    certifications: ['NestJS Fundamentals'],
    relatedSkills: ['Node.js', 'TypeScript', 'PostgreSQL'],
    color: '#E0234E',
    glowColor: '#E0234E'
  },
  {
    id: 'git-github',
    name: 'Git/GitHub',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Controle de versão e colaboração em projetos',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    certifications: ['Git Advanced'],
    relatedSkills: ['VS Code', 'Docker'],
    color: '#F05032',
    glowColor: '#F05032'
  },

  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    rank: 'S',
    percentage: 100,
    description: 'Biblioteca para interfaces de usuário',
    experience: '3+ anos',
    projects: ['Portfolio', 'G4Mix', 'Ofertas Dev Luch'],
    relatedSkills: ['JavaScript', 'Next.js', 'Styled Components'],
    color: '#61DAFB',
    glowColor: '#61DAFB'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    rank: 'A',
    percentage: 90,
    description: 'Framework React para produção',
    experience: '2+ anos',
    projects: ['Portfolio', 'G4Mix'],
    relatedSkills: ['React', 'TypeScript', 'Vercel'],
    color: '#000000',
    glowColor: '#000000'
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    category: 'frontend',
    rank: 'S',
    percentage: 100,
    description: 'Fundamentos do desenvolvimento web',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    relatedSkills: ['JavaScript', 'React', 'Tailwind CSS'],
    color: '#E34F26',
    glowColor: '#E34F26'
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'frontend',
    rank: 'B',
    percentage: 80,
    description: 'Framework CSS utilitário',
    experience: '1+ ano',
    projects: ['Portfolio', 'G4Mix'],
    relatedSkills: ['CSS', 'React', 'Next.js'],
    color: '#06B6D4',
    glowColor: '#06B6D4'
  },
  {
    id: 'styled-components',
    name: 'Styled Components',
    category: 'frontend',
    rank: 'C',
    percentage: 70,
    description: 'CSS-in-JS para componentes estilizados',
    experience: '6+ meses',
    projects: ['G4Mix'],
    relatedSkills: ['React', 'CSS', 'JavaScript'],
    color: '#DB7093',
    glowColor: '#DB7093'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    rank: 'B',
    percentage: 85,
    description: 'Runtime JavaScript para backend',
    experience: '2+ anos',
    projects: ['G4Mix Backend', 'APIs'],
    relatedSkills: ['JavaScript', 'NestJS', 'Express'],
    color: '#339933',
    glowColor: '#339933'
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    rank: 'C',
    percentage: 70,
    description: 'Framework web minimalista para Node.js',
    experience: '1+ ano',
    projects: ['APIs REST'],
    relatedSkills: ['Node.js', 'JavaScript', 'APIs REST'],
    color: '#000000',
    glowColor: '#000000'
  },
  {
    id: 'apis-rest',
    name: 'APIs REST',
    category: 'backend',
    rank: 'A',
    percentage: 90,
    description: 'Desenvolvimento de APIs RESTful',
    experience: '2+ anos',
    projects: ['G4Mix API', 'Ofertas Dev Luch API'],
    relatedSkills: ['NestJS', 'Node.js', 'PostgreSQL'],
    color: '#FF6B6B',
    glowColor: '#FF6B6B'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    rank: 'C',
    percentage: 70,
    description: 'Banco de dados relacional',
    experience: '1+ ano',
    projects: ['G4Mix Database'],
    relatedSkills: ['NestJS', 'APIs REST', 'Node.js'],
    color: '#336791',
    glowColor: '#336791'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    rank: 'D',
    percentage: 60,
    description: 'Banco de dados NoSQL',
    experience: '6+ meses',
    projects: ['Projetos pessoais'],
    relatedSkills: ['Node.js', 'JavaScript', 'APIs REST'],
    color: '#47A248',
    glowColor: '#47A248'
  },

  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    rank: 'C',
    percentage: 70,
    description: 'Serviços de nuvem da Amazon',
    experience: '1+ ano',
    projects: ['Deploy de aplicações'],
    relatedSkills: ['Docker', 'Vercel', 'APIs REST'],
    color: '#FF9900',
    glowColor: '#FF9900'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    rank: 'D',
    percentage: 60,
    description: 'Containerização de aplicações',
    experience: '6+ meses',
    projects: ['Deploy de aplicações'],
    relatedSkills: ['AWS', 'Node.js', 'NestJS'],
    color: '#2496ED',
    glowColor: '#2496ED'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'cloud',
    rank: 'B',
    percentage: 80,
    description: 'Plataforma de deploy para frontend',
    experience: '1+ ano',
    projects: ['Portfolio', 'G4Mix'],
    relatedSkills: ['Next.js', 'React', 'Git'],
    color: '#000000',
    glowColor: '#000000'
  },

  // Mobile
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    rank: 'E',
    percentage: 50,
    description: 'Desenvolvimento de aplicações móveis',
    experience: '3+ meses',
    projects: ['Projetos em aprendizado'],
    relatedSkills: ['React', 'JavaScript', 'Mobile'],
    color: '#61DAFB',
    glowColor: '#61DAFB'
  },

  // Ferramentas
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    rank: 'S',
    percentage: 100,
    description: 'Editor de código principal',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    relatedSkills: ['Git', 'JavaScript', 'TypeScript'],
    color: '#007ACC',
    glowColor: '#007ACC'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    rank: 'D',
    percentage: 60,
    description: 'Design de interfaces',
    experience: '6+ meses',
    projects: ['Prototipação de projetos'],
    relatedSkills: ['UI/UX', 'Design', 'Frontend'],
    color: '#F24E1E',
    glowColor: '#F24E1E'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    rank: 'C',
    percentage: 70,
    description: 'Teste e documentação de APIs',
    experience: '1+ ano',
    projects: ['Testes de API'],
    relatedSkills: ['APIs REST', 'Backend', 'Testing'],
    color: '#FF6C37',
    glowColor: '#FF6C37'
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'tools',
    rank: 'E',
    percentage: 50,
    description: 'Framework de testes JavaScript',
    experience: '3+ meses',
    projects: ['Testes unitários'],
    relatedSkills: ['JavaScript', 'Testing', 'React'],
    color: '#C21325',
    glowColor: '#C21325'
  }
];

export const skillCategories = [
  { id: 'core', name: 'Stack Principal', color: '#00F0FF' },
  { id: 'frontend', name: 'Frontend', color: '#8B5CF6' },
  { id: 'backend', name: 'Backend', color: '#F59E0B' },
  { id: 'cloud', name: 'Cloud & DevOps', color: '#10B981' },
  { id: 'mobile', name: 'Mobile', color: '#EF4444' },
  { id: 'tools', name: 'Ferramentas', color: '#6B7280' }
];

export const rankConfig = {
  E: { color: '#EF4444', glow: '#EF4444', label: 'Iniciante', percentage: 50 },
  D: { color: '#F97316', glow: '#F97316', label: 'Básico', percentage: 60 },
  C: { color: '#EAB308', glow: '#EAB308', label: 'Intermediário', percentage: 70 },
  B: { color: '#22C55E', glow: '#22C55E', label: 'Bom', percentage: 80 },
  A: { color: '#3B82F6', glow: '#3B82F6', label: 'Avançado', percentage: 90 },
  S: { color: '#8B5CF6', glow: '#8B5CF6', label: 'Expert', percentage: 100 },
  SS: { color: '#F59E0B', glow: '#F59E0B', label: 'Master', percentage: 150 },
  SSS: { color: '#6B7280', glow: '#6B7280', label: 'Legend', percentage: 200 },
  EX: { color: '#EC4899', glow: '#EC4899', label: 'Godlike', percentage: 250 }
};
