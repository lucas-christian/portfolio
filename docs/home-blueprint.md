# Blueprint de Design — Tela Principal (Home) Futurista/Gamer

Objetivo
- Entregar uma experiência imediatamente impactante que venda o Dev Luch como um desenvolvedor de alto nível: simples, elegante, com sensação futurista/gamer e animações fluidas.
- Manter funcionalidades existentes: alternância de tema (claro/azul e escuro/hacker), i18n (pt-BR e en-US), componentes atuais (Container, Button, Text, Info), e performance.
- Preparar o terreno para duas features futuras: Árvore de Habilidades e Conquistas (estética de jogo com níveis e progressão).

Direção Visual
- Estética: clean futurista com acentos neon (ciano/azul elétrico) e superfícies em camadas (containers com bordas luminosas sutis).
- Tipografia: manter Orbitron para títulos e uma sans moderna para corpo, com hierarquia clara.
- Ícones: continuar FontAwesome, usar apenas onde agrega sentido (social, status, navegação).
- Movimentos: transições suaves (fade/slide), hover com brilho leve, parallax sutil em imagens, pulsar de neon baixo.

Temas
- Light (variações de azul): base azul profundo (hero) + containers em azul/indigo desaturado; acentos neon em ciano.
- Dark (hacker/grey): base carvão (#0B0F14 ~ #0E121A); containers escuros com leve ruído; acentos neon ciano/verde água.
- Tokens (CSS variables) sugeridos:
  - Cores base: --background, --foreground, --text
  - Acentos: --border, --active-border, --glowing-border
  - Superfícies: --container-bg, --item-bg
  - Azuis utilitários: --picton-blue, --electric-blue
  - Suporte: --icon-background, --columbia-blue
- Acessibilidade: contraste AA+ para texto/acento; suporte prefers-reduced-motion.

Arquitetura da Home
- Hero (acima da dobra):
  - Identidade: nome “Dev Luch” com título/gradiente neon e badge de Rank (ex.: B-) em estilo chip.
  - Mini-bio em Info: Idade, Profissão, Formação.
  - CTA principal: Projetos e Habilidades (internos), Social (externos) com botões horizontais.
  - Share: ação nativa ou clipboard, já existente.
  - Decor: leve glow nas bordas, possíveis cantos neon (SVG), sem poluir.
- Status de Dev:
  - Métricas com Info (Issues, Commits, PRs, Estrelas, Contribuições), organizadas em duas linhas responsivas.
- Introdução/Resumo:
  - Texto breve com tom pessoal e técnico (já existente, manter e refinar tipografia).

Animações e Microinterações
- Entrada: fadeInUp para blocos principais (hero/image/infos) com delays escalonados.
- Hover: brilho suave nas bordas dos botões/links e "glint" leve.
- Parallax: deslocamento mínimo em imagem/sombra (performance-friendly)
- Pulsar: glowPulse discreto no Rank badge.
- Redução de movimento: desativar animações quando prefers-reduced-motion.

Responsividade
- Mobile-first: Hero empilhado (imagem acima ou ao lado conforme espaço), CTAs em coluna; Social acessível.
- Tablets: duas colunas com alinhamento central e espaçamento aumentado.
- Desktop/Ultra-wide: layout em duas colunas com grid visual mais amplo e respiro; limites de largura sensatos (clamp em container).

I18n e Tema
- Continuar usando LangContext e traduções pt-BR/en-US; novos textos do Hero e CTAs devem estar nas locales.
- ThemeContext: tokens de tema centralizados em globals.css, aplicados por [data-theme].

Plano para Árvore de Habilidades (futuro)
- Visual: diagrama interativo (nó/ramo) com estados (bloqueado, ativo, dominado), cores por trilha (Frontend/Backend/DevOps/AI).
- Interação: zoom/pan leves, tooltips (Radix Dialog/Tooltip) para detalhes, níveis e requisitos.
- Dados: estrutura em grafo (nodes, edges) com tags/níveis. Render com flex/columns para mobile; em desktop usar SVG para linhas suaves.

## Árvore de Habilidades estilo roadmap.sh — Detalhamento
- Inspiração: roadmap.sh (layout em árvore/fluxo), porém com estética aprimorada para os temas Light/Dark deste portfólio (neon suave, bordas brilhantes, linhas com glow).
- Integração opcional: importar um dataset estático (JSON/YAML) inspirado em roadmap.sh ou mapeado manualmente para refletir sua jornada. Caso exista um esquema público, podemos converter para nosso formato; caso contrário, manteremos um dataset próprio para controle total do visual e conteúdo.

Modelo de Dados (exemplos — variáveis e comentários em inglês)
```ts
// Skill Tree Node
export type SkillNode = {
  id: string;               // unique id
  label: string;            // display name
  status: "locked" | "active" | "mastered"; // node state
  level?: number;           // optional level within the node
  category: "frontend" | "backend" | "devops" | "ai" | "general"; // track color
  prerequisites?: string[]; // required node ids
  children?: string[];      // next nodes ids
};

// Skill Tree Edge (for SVG connectors)
export type SkillEdge = {
  from: string;             // source node id
  to: string;               // target node id
};

// Achievement
export type Achievement = {
  id: string;               // unique id
  title: string;            // badge title
  rarity: "common" | "epic" | "legendary"; // badge frame style
  xp: number;               // experience points
  progress?: number;        // 0..1 progress for ongoing achievements
  icon?: string;            // optional icon name/path
  date?: string;            // completion date
};
```

Componentização (CSS Modules + Flex/SVG)
- SkillTreePage: página da árvore com layout responsivo.
- SkillTreeCanvas (SVG): desenha as conexões (edges) com glow suave.
- SkillNode: bloco clicável com estados (locked/active/mastered), usa flex para grid/colunas; em desktop desenhamos linhas com SVG; em mobile, colunas e conectores simples.
- NodeDetailsDialog (Radix Dialog): modal com descrição, requisitos, exemplos e links.
- AchievementsPage: grade de conquistas com filtros por raridade/progresso.
- AchievementBadge: cartão com moldura neon conforme raridade, barra/progress ring.

Estilo e Temas
- Cores por categoria (ex.: frontend indigo/ciano, backend azul escuro, devops teal, ai purple): usar CSS variables semânticas (ex.: --track-frontend, --track-backend...).
- Linhas com glow: stroke com blur leve, variação de intensidade no hover.
- Estados dos nós: locked (opacidade menor), active (borda neon), mastered (borda neon + marca/estrela discreta).

Animações e Interações
- Hover: highlight do caminho (edges) a partir do nó; suave.
- Entrada: fadeInUp escalonado por colunas.
- Progresso: ring/linha com transição (transform/opacity); respeitar prefers-reduced-motion.
- Pan/Zoom leve (desktop): opcional via CSS transform em um wrapper, sem bibliotecas pesadas.

I18n e Naming
- Todos os textos exibidos (labels de nós, títulos de conquistas) nas locales (pt-BR/en-US).
- Variáveis, tipos e comentários sempre em inglês (como nos exemplos acima) para padronização.

Roadmap de Entrega
1) Protótipo de visual da SkillTree (static data) com 12–20 nós e 3 trilhas.
2) Conexões SVG com glow e estados.
3) Diálogo de detalhes e integração i18n.
4) Página de Conquistas com badges e progress.
5) Refinos visuais e performance.