"use client";
import { useState } from "react";
import { TerminalIntro } from "../components/TerminalIntro";
import { HeroSection } from "../components/HeroSection";
import { ExperienceSection } from "../components/ExperienceSection";
import styles from "./page.module.css";
import { SocialSection } from "../components/SocialSection";

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
      <ExperienceSection />
      <SocialSection />
    </div>
  );
}
