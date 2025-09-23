"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { ProfessionalExperience } from "../../data/professionalExperiences";
import { Project } from "../../data/projects";

interface CarouselProps {
  items: ProfessionalExperience[] | Project[];
  renderItem: (item: ProfessionalExperience | Project, index: number) => React.ReactNode;
  className?: string;
}

export function Carousel({ items, renderItem, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div className={`${styles.carousel} ${className || ""}`}>
      <div className={styles.carouselContent}>
        {renderItem(items[currentIndex], currentIndex)}
      </div>
      
      {items.length > 1 && (
        <>
          <button 
            className={styles.navButton} 
            onClick={goToPrevious}
            aria-label="Anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevronIcon} />
          </button>
          
          <button 
            className={styles.navButton} 
            onClick={goToNext}
            aria-label="Próximo"
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} />
          </button>
        </>
      )}
      
      {items.length > 1 && (
        <div className={styles.indicators}>
          <div className={styles.dots}>
            {items.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
