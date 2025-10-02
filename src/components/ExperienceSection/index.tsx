import { Briefcase } from "lucide-react";
import { useLang } from "../../hooks/useLang";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useAnimationClasses } from "../../hooks/useAnimationClasses";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { experiences } from "../../data/experiences";

export const ExperienceSection = () => {
  const { t } = useLang();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollReveal({ threshold: 0.2 });
  const { animationClasses } = useAnimationClasses();
  const [isMobile, setIsMobile] = useState(false);
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fechar tooltip ao clicar fora no mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const timelineItem = target.closest(`.${styles.timelineItem}`);
      
      if (!timelineItem) {
        setOpenTooltip(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  return (
    <Tooltip.Provider 
      delayDuration={0} 
      skipDelayDuration={0}
      disableHoverableContent={false}
    >
      <section className={`${styles.experienceSection} ${animationClasses}`} ref={experienceRef as any}>
        <div className={`${styles.sectionHeader} ${experienceVisible ? styles.reveal : ''}`}>
          <Briefcase size={48} className={styles.headerIcon} />
          <h2 className={styles.sectionTitle}>{t("experience.title")}</h2>
        </div>

        <div className={`${styles.timeline} ${experienceVisible ? styles.reveal : ''}`}>
          <div className={styles.timelineLine}></div>
          
          {experiences.map((experience) => {
            const IconComponent = experience.icon;
            return (
              <Tooltip.Root 
                key={experience.id} 
                delayDuration={0}
                open={isMobile ? openTooltip === experience.id : undefined}
                onOpenChange={isMobile ? (open) => setOpenTooltip(open ? experience.id : null) : undefined}
              >
                <Tooltip.Trigger asChild>
                  <div 
                    className={`${styles.timelineItem} ${styles[experience.status]}`}
                    onClick={isMobile ? () => setOpenTooltip(openTooltip === experience.id ? null : experience.id) : undefined}
                  >
                    <div className={styles.timelineMarker}>
                      <IconComponent size={16} className={styles.markerIcon} />
                    </div>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content 
                    className={styles.tooltip} 
                    side="bottom" 
                    align="center" 
                    sideOffset={10}
                    avoidCollisions={true}
                    collisionPadding={20}
                    sticky="always"
                    hideWhenDetached={false}
                  >
                    <div className={styles.tooltipContent}>
                      <h3 className={styles.tooltipTitle}>{t(experience.title)}</h3>
                      <span className={styles.tooltipPeriod}>{t(experience.date || "")}</span>
                      <p className={styles.tooltipDescription}>{t(experience.responsibilities)}</p>
                    </div>
                    <Tooltip.Arrow className={styles.tooltipArrow} />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            );
          })}
        </div>
      </section>
    </Tooltip.Provider>
  );
};
