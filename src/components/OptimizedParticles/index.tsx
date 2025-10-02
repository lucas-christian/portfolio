"use client";

import React, { useState, useEffect } from 'react';
import { useAnimationClasses } from '../../hooks/useAnimationClasses';
import { useScrollRender } from '../../hooks/useScrollRender';
import styles from './styles.module.css';

interface OptimizedParticlesProps {
  className?: string;
  count?: number;
  /**
   * Se deve pausar animações quando não visível
   */
  pauseWhenHidden?: boolean;
  /**
   * Reduzir número de partículas em mobile
   */
  mobileOptimized?: boolean;
}

export const OptimizedParticles: React.FC<OptimizedParticlesProps> = ({ 
  className = "", 
  count = 12,
  pauseWhenHidden = true,
  mobileOptimized = true
}) => {
  const { animationClasses } = useAnimationClasses();
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Hook para detectar visibilidade
  const { ref, isVisible, shouldRender } = useScrollRender({
    threshold: 0.1,
    rootMargin: '100px',
    unmountDelay: 500,
    preserveHeight: true
  });

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pausar animações quando não visível
  useEffect(() => {
    if (pauseWhenHidden) {
      setIsPaused(!isVisible);
    }
  }, [isVisible, pauseWhenHidden]);

  // Calcular número otimizado de partículas
  const optimizedCount = React.useMemo(() => {
    if (!mobileOptimized) return count;
    return isMobile ? Math.max(4, Math.floor(count / 3)) : count;
  }, [count, isMobile, mobileOptimized]);

  if (!shouldRender) {
    return (
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`${styles.particles} ${className} ${animationClasses}`}
        style={{ minHeight: '200px' }}
      />
    );
  }

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${styles.particles} ${className} ${animationClasses} ${isPaused ? styles.paused : ''}`}
    >
      {Array.from({ length: optimizedCount }, (_, index) => (
        <div 
          key={index} 
          className={`${styles.particle} ${styles[`particle${(index % 6) + 1}`]}`}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        />
      ))}
    </div>
  );
};
