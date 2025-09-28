'use client';

import React, { useState, useEffect, useRef } from 'react';
import { skillsData, skillCategories, rankConfig, Skill } from '@data/skills';
import { SkillModal } from '../SkillModal';
import { ParticleSystem } from '../ParticleSystem';
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

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const getCategorySkills = (category: string) => 
    getFilteredSkills().filter(skill => skill.category === category);


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
          <span className={styles.titleGlow}>🌳 Skills</span>
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
          <div className={styles.searchIcon}>🔍</div>
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
                onClick={() => toggleCategory(category.id)}
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <div className={styles.categoryIcon}>
                  {category.id === 'core' ? '⚡' : 
                   category.id === 'frontend' ? '🎨' :
                   category.id === 'backend' ? '⚙️' :
                   category.id === 'cloud' ? '☁️' :
                   category.id === 'mobile' ? '📱' : '🛠️'}
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
        <div className={styles.skillsContent}>
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
                    <div className={styles.skillIcon}>{skill.icon || '⚡'}</div>
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
              <div className={styles.welcomeIcon}>🌳</div>
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
