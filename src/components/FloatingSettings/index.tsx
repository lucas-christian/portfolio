"use client";
import React, { useState } from "react";
import { Settings, Globe, Sun, Moon, Monitor, Check } from "lucide-react";
import { useLang } from "../../hooks/useLang";
import { useTheme } from "../../hooks/useTheme";
import { Lang } from "@utils/langUtils";
import Image from "next/image";
import styles from "./styles.module.css";

export const FloatingSettings = () => {
  const { lang, changeLanguage } = useLang();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "pt-BR" as Lang, name: "Português", flag: "/pt-BR.svg" },
    { code: "en-US" as Lang, name: "English", flag: "/en-US.svg" }
  ];

  const handleLanguageChange = (newLang: Lang) => {
    changeLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <div className={styles.floatingSettings}>
      {/* Botão principal */}
      <button 
        className={styles.settingsButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Configurações"
      >
        <Settings size={20} className={styles.settingsIcon} />
        <div className={styles.settingsGlow}></div>
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div className={styles.settingsMenu}>
          <div className={styles.menuHeader}>
            <Settings size={16} />
            <span>CONFIGURAÇÕES</span>
          </div>

          {/* Seção de Idioma */}
          <div className={styles.settingsSection}>
            <div className={styles.sectionTitle}>
              <Globe size={16} />
              <span>IDIOMA</span>
            </div>
            <div className={styles.languageOptions}>
              {languages.map(({ code, name, flag }) => (
                <button
                  key={code}
                  className={`${styles.languageOption} ${lang === code ? styles.active : ''}`}
                  onClick={() => handleLanguageChange(code)}
                >
                  <div className={styles.flagContainer}>
                    <Image 
                      src={flag} 
                      alt={name} 
                      width={24} 
                      height={18} 
                      className={styles.flag}
                    />
                  </div>
                  <span className={styles.languageName}>{name}</span>
                  {lang === code && <Check size={16} className={styles.checkIcon} />}
                </button>
              ))}
            </div>
          </div>

          {/* Seção de Tema */}
          <div className={styles.settingsSection}>
            <div className={styles.sectionTitle}>
              <Monitor size={16} />
              <span>TEMA</span>
            </div>
            <div className={styles.themeOptions}>
              <button
                className={`${styles.themeOption} ${theme === 'light' ? styles.active : ''}`}
                onClick={() => setTheme('light')}
              >
                <Sun size={20} className={styles.themeIcon} />
                <span className={styles.themeText}>Claro</span>
                {theme === 'light' && <Check size={16} className={styles.checkIcon} />}
              </button>
              
              <button
                className={`${styles.themeOption} ${theme === 'dark' ? styles.active : ''}`}
                onClick={() => setTheme('dark')}
              >
                <Moon size={20} className={styles.themeIcon} />
                <span className={styles.themeText}>Escuro</span>
                {theme === 'dark' && <Check size={16} className={styles.checkIcon} />}
              </button>
              
              <button
                className={`${styles.themeOption} ${theme === 'system' ? styles.active : ''}`}
                onClick={() => setTheme('system')}
              >
                <Monitor size={20} className={styles.themeIcon} />
                <span className={styles.themeText}>Sistema</span>
                {theme === 'system' && <Check size={16} className={styles.checkIcon} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay para fechar */}
      {isOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
