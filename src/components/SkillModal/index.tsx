'use client';

import React, { useEffect, useState } from 'react';
import { Skill, rankConfig } from '@data/skills';
import { RankBadge } from '../RankBadge';
import styles from './styles.module.css';

interface SkillModalProps {
  skill: Skill;
  onClose: () => void;
}

export const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const rankInfo = rankConfig[skill.rank];

  return (
    <div 
      className={`${styles.modalBackdrop} ${isVisible ? styles.visible : ''}`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`${styles.modalContent} ${isVisible ? styles.visible : ''}`}
        style={{
          '--skill-color': skill.color,
          '--glow-color': skill.glowColor
        } as React.CSSProperties}
      >
        {/* Header */}
        <div className={styles.modalHeader}>
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
            <h2 className={styles.skillName}>{skill.name}</h2>
            <div className={styles.skillMeta}>
              <RankBadge rank={skill.rank} size="medium" />
              <span className={styles.skillPercentage}>{skill.percentage}%</span>
            </div>
          </div>
          <button className={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        </div>

        {/* Content */}
        <div className={styles.modalBody}>
          <div className={styles.skillDescription}>
            <h3>Descrição</h3>
            <p>{skill.description}</p>
          </div>

          <div className={styles.skillExperience}>
            <h3>Experiência</h3>
            <p>{skill.experience}</p>
          </div>

          {skill.projects && skill.projects.length > 0 && (
            <div className={styles.skillProjects}>
              <h3>Projetos</h3>
              <ul>
                {skill.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          )}

          {skill.certifications && skill.certifications.length > 0 && (
            <div className={styles.skillCertifications}>
              <h3>Certificações</h3>
              <ul>
                {skill.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {skill.relatedSkills && skill.relatedSkills.length > 0 && (
            <div className={styles.relatedSkills}>
              <h3>Skills Relacionadas</h3>
              <div className={styles.relatedList}>
                {skill.relatedSkills.map((relatedSkill, index) => (
                  <div key={index} className={styles.relatedItem}>
                    <span className={styles.relatedIcon}>🔗</span>
                    <span className={styles.relatedName}>{relatedSkill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <div className={styles.skillLevel}>
            <span className={styles.levelLabel}>Nível de Proficiência:</span>
            <div className={styles.levelBar}>
              <div 
                className={styles.levelFill}
                style={{ 
                  width: `${skill.percentage}%`,
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
            <span className={styles.levelPercentage}>{skill.percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
