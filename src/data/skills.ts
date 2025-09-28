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
    id: 'javascript',
    name: 'JavaScript',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Linguagem principal para desenvolvimento full-stack',
    experience: '4+ anos',
    projects: ['Portfolio', 'G4Mix', 'Ofertas Dev Luch', 'Soublox'],
    certifications: ['JavaScript Fundamentals'],
    relatedSkills: ['TypeScript', 'React', 'Node.js'],
    icon: '/developer-icons/javascript.svg',
    color: '#F7DF1E',
    glowColor: '#F7DF1E'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'core',
    rank: 'A',
    percentage: 90,
    description: 'JavaScript com tipagem estática para desenvolvimento robusto',
    experience: '3+ anos',
    projects: ['Portfolio', 'G4Mix', 'Ofertas Dev Luch'],
    certifications: ['TypeScript Fundamentals'],
    relatedSkills: ['JavaScript', 'React', 'NestJS'],
    icon: '/developer-icons/typescript.svg',
    color: '#3178C6',
    glowColor: '#3178C6'
  },
  {
    id: 'react',
    name: 'React',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Biblioteca para interfaces de usuário interativas',
    experience: '3+ anos',
    projects: ['Portfolio', 'G4Mix', 'Ofertas Dev Luch'],
    certifications: ['React Advanced Patterns'],
    relatedSkills: ['JavaScript', 'Next.js', 'Tailwind CSS'],
    icon: '/developer-icons/reactjs.svg',
    color: '#61DAFB',
    glowColor: '#61DAFB'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'core',
    rank: 'A',
    percentage: 90,
    description: 'Framework React para aplicações de produção',
    experience: '2+ anos',
    projects: ['Portfolio', 'G4Mix'],
    certifications: ['Next.js Fundamentals'],
    relatedSkills: ['React', 'TypeScript', 'Vercel'],
    icon: '/developer-icons/nextjs.svg',
    color: '#000000',
    glowColor: '#000000'
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
    icon: '/developer-icons/nestjs.svg',
    color: '#E0234E',
    glowColor: '#E0234E'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Sistema de controle de versão distribuído',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    certifications: ['Git Advanced'],
    relatedSkills: ['GitHub', 'VS Code', 'Docker'],
    icon: '/developer-icons/git.svg',
    color: '#F05032',
    glowColor: '#F05032'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'core',
    rank: 'S',
    percentage: 100,
    description: 'Plataforma de hospedagem e colaboração em código',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    certifications: ['GitHub Actions'],
    relatedSkills: ['Git', 'VS Code', 'CI/CD'],
    icon: '/developer-icons/github-light.svg',
    color: '#181717',
    glowColor: '#181717'
  },

  // Frontend
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    rank: 'S',
    percentage: 100,
    description: 'Linguagem de marcação para estrutura web',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    relatedSkills: ['CSS', 'JavaScript', 'React'],
    icon: '/developer-icons/html5.svg',
    color: '#E34F26',
    glowColor: '#E34F26'
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    rank: 'S',
    percentage: 100,
    description: 'Linguagem de estilo para design web',
    experience: '4+ anos',
    projects: ['Todos os projetos'],
    relatedSkills: ['HTML', 'JavaScript', 'Tailwind CSS'],
    icon: '/developer-icons/css3.svg',
    color: '#1572B6',
    glowColor: '#1572B6'
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    rank: 'B',
    percentage: 80,
    description: 'Framework CSS utilitário para design rápido',
    experience: '1+ ano',
    projects: ['Portfolio', 'G4Mix'],
    relatedSkills: ['CSS', 'React', 'Next.js'],
    icon: '/developer-icons/tailwindcss.svg',
    color: '#06B6D4',
    glowColor: '#06B6D4'
  },
  {
    id: 'sass',
    name: 'Sass',
    category: 'frontend',
    rank: 'D',
    percentage: 60,
    description: 'Pré-processador CSS para estilos mais eficientes',
    experience: '6+ meses',
    projects: ['Projetos pessoais'],
    relatedSkills: ['CSS', 'SCSS', 'Frontend'],
    icon: '/developer-icons/sass.svg',
    color: '#CC6699',
    glowColor: '#CC6699'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    rank: 'B',
    percentage: 85,
    description: 'Runtime JavaScript para desenvolvimento backend',
    experience: '2+ anos',
    projects: ['G4Mix Backend', 'APIs'],
    relatedSkills: ['JavaScript', 'NestJS', 'Express'],
    icon: '/developer-icons/nodejs.svg',
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
    icon: '/developer-icons/expressjs-light.svg',
    color: '#000000',
    glowColor: '#000000'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    rank: 'C',
    percentage: 70,
    description: 'Banco de dados relacional robusto',
    experience: '1+ ano',
    projects: ['G4Mix Database'],
    relatedSkills: ['NestJS', 'APIs REST', 'Node.js'],
    icon: '/developer-icons/postgresql.svg',
    color: '#336791',
    glowColor: '#336791'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    rank: 'D',
    percentage: 60,
    description: 'Banco de dados NoSQL flexível',
    experience: '6+ meses',
    projects: ['Projetos pessoais'],
    relatedSkills: ['Node.js', 'JavaScript', 'APIs REST'],
    icon: '/developer-icons/mongodb.svg',
    color: '#47A248',
    glowColor: '#47A248'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'backend',
    rank: 'E',
    percentage: 50,
    description: 'Banco de dados em memória para cache',
    experience: '3+ meses',
    projects: ['Projetos em aprendizado'],
    relatedSkills: ['Node.js', 'Cache', 'Performance'],
    icon: '/developer-icons/redis.svg',
    color: '#DC382D',
    glowColor: '#DC382D'
  },

  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    rank: 'C',
    percentage: 70,
    description: 'Serviços de nuvem da Amazon Web Services',
    experience: '1+ ano',
    projects: ['Deploy de aplicações'],
    relatedSkills: ['Docker', 'Vercel', 'APIs REST'],
    icon: '/developer-icons/aws.svg',
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
    icon: '/developer-icons/docker.svg',
    color: '#2496ED',
    glowColor: '#2496ED'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'cloud',
    rank: 'B',
    percentage: 80,
    description: 'Plataforma de deploy para frontend e full-stack',
    experience: '1+ ano',
    projects: ['Portfolio', 'G4Mix'],
    relatedSkills: ['Next.js', 'React', 'Git'],
    icon: '/developer-icons/vercel-light.svg',
    color: '#000000',
    glowColor: '#000000'
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'cloud',
    rank: 'D',
    percentage: 60,
    description: 'Plataforma de deploy e hospedagem',
    experience: '6+ meses',
    projects: ['Projetos estáticos'],
    relatedSkills: ['Git', 'Frontend', 'CI/CD'],
    icon: '/developer-icons/netlify.svg',
    color: '#00C7B7',
    glowColor: '#00C7B7'
  },

  // Mobile
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    rank: 'E',
    percentage: 50,
    description: 'Framework para desenvolvimento de aplicações móveis',
    experience: '3+ meses',
    projects: ['Projetos em aprendizado'],
    relatedSkills: ['React', 'JavaScript', 'Mobile'],
    icon: '/developer-icons/react.svg',
    color: '#61DAFB',
    glowColor: '#61DAFB'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    rank: 'E',
    percentage: 50,
    description: 'Framework para desenvolvimento mobile multiplataforma',
    experience: '3+ meses',
    projects: ['Projetos em aprendizado'],
    relatedSkills: ['Dart', 'Mobile', 'UI/UX'],
    icon: '/developer-icons/flutter.svg',
    color: '#02569B',
    glowColor: '#02569B'
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
    icon: '/developer-icons/vscode.svg',
    color: '#007ACC',
    glowColor: '#007ACC'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    rank: 'D',
    percentage: 60,
    description: 'Ferramenta de design de interfaces',
    experience: '6+ meses',
    projects: ['Prototipação de projetos'],
    relatedSkills: ['UI/UX', 'Design', 'Frontend'],
    icon: '/developer-icons/figma.svg',
    color: '#F24E1E',
    glowColor: '#F24E1E'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    rank: 'C',
    percentage: 70,
    description: 'Ferramenta para teste e documentação de APIs',
    experience: '1+ ano',
    projects: ['Testes de API'],
    relatedSkills: ['APIs REST', 'Backend', 'Testing'],
    icon: '/developer-icons/postman.svg',
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
    icon: '/developer-icons/jest.svg',
    color: '#C21325',
    glowColor: '#C21325'
  },
  {
    id: 'cypress',
    name: 'Cypress',
    category: 'tools',
    rank: 'E',
    percentage: 50,
    description: 'Framework de testes end-to-end',
    experience: '3+ meses',
    projects: ['Testes E2E'],
    relatedSkills: ['Testing', 'Frontend', 'JavaScript'],
    icon: '/developer-icons/cypress.svg',
    color: '#17202C',
    glowColor: '#17202C'
  },
  {
    id: 'eslint',
    name: 'ESLint',
    category: 'tools',
    rank: 'C',
    percentage: 70,
    description: 'Ferramenta de análise de código JavaScript',
    experience: '1+ ano',
    projects: ['Todos os projetos'],
    relatedSkills: ['JavaScript', 'TypeScript', 'Code Quality'],
    icon: '/developer-icons/eslint.svg',
    color: '#4B32C3',
    glowColor: '#4B32C3'
  },
  {
    id: 'prettier',
    name: 'Prettier',
    category: 'tools',
    rank: 'C',
    percentage: 70,
    description: 'Formatador de código para consistência',
    experience: '1+ ano',
    projects: ['Todos os projetos'],
    relatedSkills: ['JavaScript', 'TypeScript', 'Code Quality'],
    icon: '/developer-icons/prettier.svg',
    color: '#F7B93E',
    glowColor: '#F7B93E'
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