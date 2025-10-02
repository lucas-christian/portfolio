"use client";
import { useState } from "react";
import { TerminalIntro } from "../components/TerminalIntro";
import { HeroSection } from "../components/HeroSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import styles from "./page.module.css";
import { SocialSection } from "../components/SocialSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { LazySection } from "../components/LazySection";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <TerminalIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className={styles.page}>
      <HeroSection />
      <LazySection 
        threshold={0.1}
        rootMargin="50px"
        unmountDelay={200}
        preserveHeight={true}
        minHeight="100dvh"
        className="section-container"
      >
        <ExperienceSection />
      </LazySection>
      <LazySection 
        threshold={0.1}
        rootMargin="50px"
        unmountDelay={200}
        preserveHeight={true}
        minHeight="100dvh"
        className="section-container"
      >
        <ProjectsSection />
      </LazySection>
      <LazySection 
        threshold={0.1}
        rootMargin="50px"
        unmountDelay={200}
        preserveHeight={true}
        minHeight="100dvh"
        className="section-container"
      >
        <SkillsSection />
      </LazySection>
      <LazySection 
        threshold={0.1}
        rootMargin="50px"
        unmountDelay={200}
        preserveHeight={true}
        minHeight="60dvh"
        className="section-container"
      >
        <SocialSection />
      </LazySection>
    </div>
  );
}
