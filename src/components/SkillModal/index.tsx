'use client';

import React, { useEffect, useState } from 'react';
import { Skill, rankConfig, skillsData } from '@data/skills';
import { RankBadge } from '../RankBadge';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.css';
import Image from 'next/image';

interface SkillModalProps {
  skill: Skill;
  onClose: () => void;
  onRelatedSkillClick?: (skillId: string) => void;
}

export const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose, onRelatedSkillClick }) => {
  const { t } = useLang();
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

  const handleRelatedSkillClick = (relatedSkill: string) => {
    // Verificar se a skill relacionada existe no nosso array de skills
    const skillExists = skillsData.find(s => s.name.toLowerCase() === relatedSkill.toLowerCase());
    
    if (skillExists && onRelatedSkillClick) {
      onRelatedSkillClick(skillExists.id);
    }
  };

  const isRelatedSkillClickable = (relatedSkill: string) => {
    return skillsData.some(s => s.name.toLowerCase() === relatedSkill.toLowerCase());
  };

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
              <Image
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
            <h3>{t('skills.modal.description')}</h3>
            <p>{t(skill.descriptionKey)}</p>
          </div>

          <div className={styles.skillExperience}>
            <h3>{t('skills.modal.experience')}</h3>
            <p>{t(skill.experienceKey)}</p>
          </div>

          {skill.projects && skill.projects.length > 0 && (
            <div className={styles.skillProjects}>
              <h3>{t('skills.modal.projects')}</h3>
              <ul>
                {skill.projects.map((project, index) => (
                  <li key={index}>{project.startsWith('skills.') ? t(project) : project}</li>
                ))}
              </ul>
            </div>
          )}

          {skill.certifications && skill.certifications.length > 0 && (
            <div className={styles.skillCertifications}>
              <h3>{t('skills.modal.certifications')}</h3>
              <ul>
                {skill.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {skill.relatedSkills && skill.relatedSkills.length > 0 && (
            <div className={styles.relatedSkills}>
              <h3>{t('skills.modal.related-skills')}</h3>
              <div className={styles.relatedList}>
                {skill.relatedSkills.map((relatedSkill, index) => {
                  const isClickable = isRelatedSkillClickable(relatedSkill);
                  return (
                    <div 
                      key={index} 
                      className={`${styles.relatedItem} ${isClickable ? styles.clickable : styles.disabled}`}
                      onClick={() => isClickable && handleRelatedSkillClick(relatedSkill)}
                    >
                      <span className={styles.relatedIcon}>
                        {isClickable ? '🔗' : '🔒'}
                      </span>
                      <span className={styles.relatedName}>{relatedSkill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <div className={styles.skillLevel}>
            <span className={styles.levelLabel}>{t('skills.modal.proficiency-level')}</span>
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
