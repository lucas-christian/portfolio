"use client";
import React from "react";
import styles from "./styles.module.css";

interface ParticlesProps {
  className?: string;
  count?: number;
}

export const Particles: React.FC<ParticlesProps> = ({ 
  className = "", 
  count = 12 
}) => {
  return (
    <div className={`${styles.particles} ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={`${styles.particle} ${styles[`particle${(index % 6) + 1}`]}`} />
      ))}
    </div>
  );
};
