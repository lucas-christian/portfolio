'use client';

import React, { useState, useEffect, useRef } from 'react';
import { skillsData, skillCategories, rankConfig, Skill } from '@data/skills';
import { SkillModal } from '../SkillModal';
import { ParticleSystem } from '../ParticleSystem';
import { Search, Zap, Palette, Settings, Cloud, Smartphone, Wrench, Network, TreePine, GitBranch, GitCommit, GitFork } from 'lucide-react';
import styles from './styles.module.css';

interface SkillsSectionProps {
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animação de entrada escalonada
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Filtros e busca
  const getFilteredSkills = () => {
    let filtered = skillsData;

    if (searchTerm) {
      filtered = filtered.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const handleSkillClick = (skillId: string) => {
    setSelectedSkill(skillId);
  };

  const handleSkillHover = (skillId: string | null) => {
    setHoveredSkill(skillId);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  // Removido - agora usando handleCategoryClick

  const getCategorySkills = (category: string) =>
    getFilteredSkills().filter(skill => skill.category === category);

  // Verificar se precisa de scroll baseado na quantidade de skills
  const needsScroll = (category: string) => {
    const skills = getCategorySkills(category);
    return skills.length > 8; // Aumentei para 8 skills para dar mais espaço
  };

  // Estado para controlar quando mostrar scroll (após animação)
  const [showScroll, setShowScroll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Função para ativar scroll após animação
  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setShowScroll(false);
      setIsAnimating(false);
    } else {
      setExpandedCategory(categoryId);
      setShowScroll(false); // Garantir que está desabilitado
      setIsAnimating(true); // Marcar como animando

      // Ativar scroll após 1500ms (tempo completo da animação)
      setTimeout(() => {
        setIsAnimating(false);
        if (needsScroll(categoryId)) {
          setShowScroll(true);
        }
      }, 1500);
    }
  };


  return (
    <div className={`${styles.skillsTree} ${className}`} ref={containerRef}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern} />
        <div className={styles.gradientOrbs}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </div>
      </div>

      {/* Particle System */}
      <ParticleSystem />

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleGlow}><Network size={48} /> Skills</span>
        </h2>
        <p className={styles.subtitle}>
          Clique nas categorias para explorar
        </p>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <div className={styles.searchIcon}>
            <Search size={20} />
          </div>
        </div>
      </div>

      {/* Roadmap Container */}
      <div className={styles.roadmapContainer}>
        {/* Categories Sidebar */}
        <div className={styles.categoriesSidebar}>
          <h3 className={styles.sidebarTitle}>Categorias</h3>
          {skillCategories.map((category) => {
            const categorySkills = getCategorySkills(category.id);
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className={`${styles.categoryItem} ${isExpanded ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.id)}
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <div className={styles.categoryIcon}>
                  {category.id === 'core' ? <Zap size={24} /> :
                    category.id === 'frontend' ? <Palette size={24} /> :
                      category.id === 'backend' ? <Settings size={24} /> :
                        category.id === 'cloud' ? <Cloud size={24} /> :
                          category.id === 'mobile' ? <Smartphone size={24} /> : <Wrench size={24} />}
                </div>
                <div className={styles.categoryInfo}>
                  <div className={styles.categoryName}>{category.name}</div>
                  <div className={styles.skillCount}>{categorySkills.length} skills</div>
                </div>
                <div className={styles.expandIcon}>
                  {isExpanded ? '−' : '+'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Content */}
        <div
          className={`${styles.skillsContent} ${expandedCategory && needsScroll(expandedCategory) && showScroll && !isAnimating ? styles.withScroll : ''}`}
          style={{
            overflowY: isAnimating ? 'hidden !important' : (expandedCategory && needsScroll(expandedCategory) && showScroll ? 'auto' : 'hidden')
          } as React.CSSProperties}
        >
          {expandedCategory ? (
            <div className={styles.skillsSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  {skillCategories.find(c => c.id === expandedCategory)?.name} Skills
                </h2>
                <p className={styles.sectionSubtitle}>
                  {getCategorySkills(expandedCategory).length} tecnologias disponíveis
                </p>
              </div>

              <div className={styles.skillsGrid}>
                {getCategorySkills(expandedCategory).map((skill, index) => (
                  <div
                    key={skill.id}
                    className={styles.skillCard}
                    onClick={() => handleSkillClick(skill.id)}
                    style={{
                      '--skill-color': skill.color,
                      '--delay': `${index * 100}ms`
                    } as React.CSSProperties}
                  >
                     <div className={styles.skillIcon}>
                       {skill.icon ? (
                         <img 
                           src={skill.icon} 
                           alt={skill.name}
                           className={styles.skillIconImage}
                         />
                       ) : (
                         '⚡'
                       )}
                     </div>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillName}>{skill.name}</div>
                      <div className={styles.skillDetails}>
                        <div className={styles.skillRank}>{skill.rank}</div>
                        <div className={styles.skillExperience}>{skill.experience}</div>
                        <div className={styles.skillPercentage}>{skill.percentage}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.welcomeSection}>
              <div className={styles.welcomeIcon}>
                <GitFork size={48} />
              </div>
              <h2 className={styles.welcomeTitle}>Selecione uma Categoria</h2>
              <p className={styles.welcomeText}>
                Escolha uma categoria ao lado para explorar suas skills e tecnologias
              </p>
            </div>
          )}
        </div>
      </div>


      {/* Modal */}
      {selectedSkill && (
        <SkillModal
          skill={getFilteredSkills().find(s => s.id === selectedSkill)!}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
