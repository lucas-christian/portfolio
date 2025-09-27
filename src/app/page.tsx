"use client";
import { useState } from "react";
import { TerminalIntro } from "../components/TerminalIntro";
import { HeroSection } from "../components/HeroSection";
import styles from "./page.module.css";

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
    </div>
  );
}
