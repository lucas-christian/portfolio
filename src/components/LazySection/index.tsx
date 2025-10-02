"use client";

import React, { ReactNode } from 'react';
import { useScrollRender } from '../../hooks/useScrollRender';
import styles from './styles.module.css';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  unmountDelay?: number;
  preserveHeight?: boolean;
  minHeight?: string;
  fallback?: ReactNode;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  unmountDelay = 300,
  preserveHeight = true,
  minHeight = '200px',
  fallback = null
}) => {
  const { ref, shouldRender, containerStyle } = useScrollRender({
    threshold,
    rootMargin,
    unmountDelay,
    preserveHeight,
    minHeight
  });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${styles.sectionContainer} ${shouldRender ? styles.rendered : styles.placeholder} ${className}`}
      style={containerStyle}
    >
      {shouldRender ? children : fallback}
    </div>
  );
};
