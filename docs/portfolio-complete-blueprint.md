# Blueprint Completo — Portfólio Futurista/Gamer Dev Luch

## Visão Geral
Portfólio profissional futurista/gamer com scroll vertical único, otimizado para SEO e apresentação como desenvolvedor fullstack de alto nível. Mantém funcionalidades existentes (tema claro/escuro, i18n pt-BR/en-US) e adiciona sistema de skills/conquistas gamificado.

## Estrutura de Scroll Vertical (One-Page)

### 1. Hero Section - "Agente em Missão"
**Objetivo**: Impacto imediato com identidade gamer/profissional
- **Título Principal**: "DEV LUCH" com efeito neon pulsante
- **Subtítulo**: "Agente em Missão na Soublox" (badge de status ativo)
- **Rank Badge**: "B-" com animação de pulsar
- **Mini-bio**: Idade, Profissão, Formação em cards futuristas
- **CTA Principal**: Scroll suave para seções (não navegação)
- **Social Links**: GitHub, LinkedIn, YouTube com hover neon
- **Share**: Funcionalidade nativa de compartilhamento
- **Decor**: Bordas neon sutis, cantos com glow, sem poluição visual

### 2. Status de Desenvolvimento
**Objetivo**: Métricas de desenvolvedor ativo
- **Grid 2x3**: Issues, Commits, PRs, Estrelas, Contribuições, Projetos
- **Animações**: Contadores animados (0 → valor final)
- **Visual**: Cards com bordas neon, ícones FontAwesome
- **Responsivo**: 2 colunas mobile, 3 colunas desktop

### 3. Sobre Mim - "Dossiê do Agente"
**Objetivo**: Apresentação pessoal e profissional
- **Texto Principal**: História de desenvolvimento desde 2022
- **Destaque**: Experiência com cobrança, WhatsApp, IoT, automações
- **Visual**: Container com bordas neon, tipografia hierárquica
- **Animações**: FadeInUp com delay escalonado

### 4. Experiência Profissional - "Missões Concluídas"
**Objetivo**: Histórico profissional com foco na Soublox
- **Soublox (Atual)**: 
  - Badge "MISSÃO ATIVA" com glow verde
  - Descrição da consultoria Salesforce
  - Tecnologias: TypeScript, AWS, Nest.js, PostgreSQL, Docker
  - Responsabilidades backend destacadas
- **MStore Digital (Anterior)**:
  - Badge "MISSÃO CONCLUÍDA" 
  - Descrição da empresa de desenvolvimento
  - Tecnologias: Next.js, React, Node.js, TypeScript, Tsoa
  - Responsabilidades fullstack
- **Visual**: Cards com bordas neon, logos das empresas, datas
- **Animações**: Hover com glow, transições suaves

### 5. Projetos - "Arsenal de Desenvolvimento"
**Objetivo**: Showcase de projetos com visual impactante
- **G4mix (Open Source)**:
  - Badge "OPEN SOURCE" com glow azul
  - Descrição do projeto inovador
  - Tecnologias: Node.js, TypeScript, React Native, PostgreSQL, Docker, AWS
  - Links: GitHub, Demo
- **Ofertas Dev Luch (Pessoal)**:
  - Badge "PROJETO PESSOAL" com glow roxo
  - Descrição do sistema de ofertas
  - Tecnologias: Next.js, React, TypeScript, Node.js, MongoDB, Web Scraping
  - Links: Website, GitHub
- **Visual**: Cards grandes com imagens desktop/mobile, bordas neon
- **Animações**: Hover com zoom sutil, glow nas bordas

### 6. Skills - "Árvore de Habilidades" (Gamificada)
**Objetivo**: Sistema de skills estilo RPG com progressão visual
- **Categorias**:
  - **Frontend**: React, Next.js, TypeScript, HTML/CSS (Nível 85)
  - **Backend**: Node.js, Nest.js, PostgreSQL, AWS (Nível 80)
  - **Mobile**: React Native, Expo (Nível 70)
  - **DevOps**: Docker, AWS, CI/CD (Nível 65)
  - **AI/ML**: Python, TensorFlow (Nível 40)
- **Visual**: 
  - Árvore interativa com nós conectados
  - Barras de progresso com glow
  - Níveis numericos e cores por categoria
  - Estados: Bloqueado, Ativo, Dominado
- **Interações**: Hover para detalhes, click para expandir
- **Animações**: Progressão suave das barras, glow nos nós ativos

### 7. Conquistas - "Hall da Fama"
**Objetivo**: Sistema de badges e conquistas gamificado
- **Categorias de Conquistas**:
  - **Desenvolvimento**: "Primeiro Commit", "100 Commits", "Primeiro PR"
  - **Projetos**: "Projeto Open Source", "Deploy em Produção", "1000+ Usuários"
  - **Aprendizado**: "Certificação AWS", "Curso Completo", "Mentoria"
  - **Social**: "100 Seguidores", "Primeiro Star", "Contribuição"
- **Raridades**:
  - **Comum**: Bordas azuis
  - **Raro**: Bordas roxas
  - **Épico**: Bordas douradas
  - **Lendário**: Bordas arco-íris
- **Visual**: Grid de badges com molduras neon, progresso circular
- **Animações**: Hover com glow, click para detalhes

### 8. Contato - "Canal de Comunicação"
**Objetivo**: Formulário de contato futurista
- **Formulário**: Nome, Email, Mensagem com validação
- **Visual**: Inputs com bordas neon, focus com glow
- **Funcionalidades**: Envio via API, feedback visual
- **Alternativas**: Links diretos para redes sociais
- **Animações**: Transições suaves, loading states

## Temas e Design System

### Tema Light (Azul Profundo)
- **Base**: Azul profundo (#0B1426) para hero
- **Containers**: Azul/indigo desaturado (#1E3A8A)
- **Acentos**: Ciano elétrico (#00D4FF)
- **Texto**: Branco (#FFFFFF) e cinza claro (#E5E7EB)

### Tema Dark (Hacker/Grey)
- **Base**: Carvão (#0B0F14) para hero
- **Containers**: Cinza escuro (#1F2937) com ruído sutil
- **Acentos**: Ciano/verde água (#00FFB3)
- **Texto**: Branco (#FFFFFF) e cinza (#9CA3AF)

### Tokens CSS
```css
:root {
  /* Cores Base */
  --background: #0B1426;
  --foreground: #FFFFFF;
  --text: #E5E7EB;
  
  /* Acentos */
  --border: #374151;
  --active-border: #00D4FF;
  --glowing-border: #00D4FF;
  
  /* Superfícies */
  --container-bg: #1E3A8A;
  --item-bg: #1F2937;
  
  /* Azuis */
  --picton-blue: #3B82F6;
  --electric-blue: #00D4FF;
  
  /* Suporte */
  --icon-background: #374151;
  --columbia-blue: #60A5FA;
}
```

## Animações e Microinterações

### Entrada
- **FadeInUp**: Blocos principais com delays escalonados (0.1s, 0.2s, 0.3s)
- **Stagger**: Elementos filhos com delay progressivo
- **Parallax**: Deslocamento mínimo em imagens (performance-friendly)

### Hover
- **Glow**: Bordas com brilho suave
- **Glint**: Efeito de brilho leve nos elementos
- **Scale**: Zoom sutil (1.02x) em cards
- **Color**: Transição de cor suave

### Interações
- **Pulsar**: Rank badge com pulsar discreto
- **Progress**: Barras de progresso com animação suave
- **Counters**: Números animados (0 → valor final)
- **Loading**: Estados de carregamento com spinners neon

### Acessibilidade
- **Reduced Motion**: Desativar animações quando `prefers-reduced-motion`
- **Focus**: Indicadores visuais claros para navegação por teclado
- **Contrast**: Contraste AA+ para todos os textos

## Responsividade

### Mobile (320px - 768px)
- **Hero**: Empilhado verticalmente, imagem acima
- **Skills**: Árvore em coluna única
- **Projetos**: Cards empilhados
- **Conquistas**: Grid 2 colunas
- **Navegação**: Menu hamburger com overlay

### Tablet (768px - 1024px)
- **Hero**: Duas colunas com alinhamento central
- **Skills**: Árvore em 2 colunas
- **Projetos**: Grid 2 colunas
- **Conquistas**: Grid 3 colunas
- **Espaçamento**: Aumentado para melhor respiração

### Desktop (1024px+)
- **Hero**: Layout em duas colunas com grid visual amplo
- **Skills**: Árvore completa com SVG para conexões
- **Projetos**: Grid 2 colunas com imagens grandes
- **Conquistas**: Grid 4 colunas
- **Container**: Largura máxima com `clamp()` para ultra-wide

## SEO e Performance

### Meta Tags
```html
<title>Dev Luch - Desenvolvedor Full Stack | Agente em Missão</title>
<meta name="description" content="Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e AWS. Atualmente em missão na Soublox, criando soluções inovadoras com tecnologia de ponta.">
<meta name="keywords" content="desenvolvedor, full stack, react, node.js, typescript, aws, soublox, portfólio">
<meta property="og:title" content="Dev Luch - Desenvolvedor Full Stack">
<meta property="og:description" content="Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e AWS. Atualmente em missão na Soublox.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://dev-luch.com">
<meta name="twitter:card" content="summary_large_image">
```

### Estrutura de Dados
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lucas Christian",
  "jobTitle": "Desenvolvedor Full Stack",
  "worksFor": {
    "@type": "Organization",
    "name": "Soublox"
  },
  "url": "https://dev-luch.com",
  "sameAs": [
    "https://github.com/Lucas-Christian",
    "https://linkedin.com/in/lucas-christian-226846245",
    "https://youtube.com/@dev-luch"
  ]
}
```

### Performance
- **Lazy Loading**: Imagens e componentes pesados
- **Code Splitting**: Divisão por seções
- **Optimized Images**: WebP com fallback
- **Critical CSS**: CSS crítico inline
- **Preload**: Recursos importantes

## Funcionalidades Técnicas

### Contextos Mantidos
- **LangContext**: pt-BR/en-US com traduções completas
- **ThemeContext**: Light/Dark com tokens centralizados
- **NavbarContext**: Navegação suave entre seções

### Novos Contextos
- **SkillsContext**: Gerenciamento de árvore de habilidades
- **AchievementsContext**: Sistema de conquistas e progresso
- **ScrollContext**: Controle de scroll e seções ativas

### Componentes
- **Section**: Container base para cada seção
- **SkillTree**: Árvore de habilidades interativa
- **AchievementBadge**: Badge de conquista com raridade
- **ProgressBar**: Barra de progresso animada
- **Counter**: Contador animado para métricas
- **ParallaxImage**: Imagem com efeito parallax

## Roadmap de Implementação

### Fase 1: Estrutura Base (Semana 1)
- [ ] Setup do projeto com Next.js 14
- [ ] Configuração de temas (Light/Dark)
- [ ] Sistema de i18n (pt-BR/en-US)
- [ ] Componentes base (Container, Button, Text, Info)
- [ ] Hero section com animações básicas

### Fase 2: Conteúdo Principal (Semana 2)
- [ ] Seção de experiência profissional
- [ ] Seção de projetos com imagens
- [ ] Seção sobre mim
- [ ] Status de desenvolvimento
- [ ] Navegação suave entre seções

### Fase 3: Skills Gamificadas (Semana 3)
- [ ] Sistema de árvore de habilidades
- [ ] Barras de progresso animadas
- [ ] Categorias e níveis
- [ ] Interações hover/click
- [ ] Responsividade mobile

### Fase 4: Conquistas (Semana 4)
- [ ] Sistema de badges
- [ ] Raridades e molduras
- [ ] Grid responsivo
- [ ] Animações de hover
- [ ] Integração com skills

### Fase 5: Polimento (Semana 5)
- [ ] Otimização de performance
- [ ] SEO completo
- [ ] Acessibilidade
- [ ] Testes responsivos
- [ ] Deploy e domínio

## Conclusão

Este blueprint cria um portfólio único que combina profissionalismo com estética gamer/futurista, mantendo funcionalidades essenciais e adicionando elementos gamificados que destacam o desenvolvedor como um profissional de alto nível. O scroll vertical único oferece uma experiência imersiva, enquanto o sistema de skills e conquistas adiciona um elemento lúdico que diferencia o portfólio no mercado.

O foco na Soublox como "missão ativa" reforça a credibilidade profissional, enquanto o sistema gamificado demonstra paixão pela tecnologia e crescimento contínuo. A estrutura é otimizada para SEO e performance, garantindo uma experiência excepcional em todos os dispositivos.
