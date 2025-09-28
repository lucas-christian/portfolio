"use client";
import React from "react";
import { User, Code, Terminal, Star } from "lucide-react";
import { Container } from "../Container";
import { Text } from "../Text";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../hooks/useLang";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useGitHubStats } from "../../hooks/useGitHubStats";
import { FloatingSettings } from "../FloatingSettings";
import { Particles } from "../Particles";
import styles from "./styles.module.css";

export const HeroSection = () => {
  const { t } = useLang();
  const { totalStars, totalCommits, totalPRs, totalContributions, rank, isLoading, error } = useGitHubStats();
  
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: statusRef, isVisible: statusVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: socialRef, isVisible: socialVisible } = useScrollReveal({ threshold: 0.2 });
  
  const socialLinks = [
    { id: 0, icon: () => <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} className={styles.socialIcon} />, label: "GitHub", url: "https://github.com/Lucas-Christian" },
    { id: 1, icon: () => <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className={styles.socialIcon} />, label: "LinkedIn", url: "https://www.linkedin.com/in/lucas-christian-226846245/" },
    { id: 2, icon: () => <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} className={styles.socialIcon} />, label: "YouTube", url: "https://www.youtube.com/@dev-luch" },
    { id: 3, icon: () => <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} className={styles.socialIcon} />, label: "WhatsApp", url: "https://wa.me/message/VLJUSJK2WXJBJ1" },
    { id: 4, icon: () => <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} className={styles.socialIcon} />, label: "TikTok", url: "https://www.tiktok.com/@dev.luch" },
    { id: 5, icon: () => <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className={styles.socialIcon} />, label: "Instagram", url: "https://www.instagram.com/dev.luch/" }
  ];

  return (
    <section className={styles.heroSection} id="hero">
      {/* Partículas flutuantes de fundo */}
      <Particles count={12} />

      {/* Grid de fundo futurista */}
      <div className={styles.gridBackground}></div>

      <Container flexDirection="column" className={styles.heroContainer}>
        {/* Imagem central com círculos */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer} ref={imageRef as any}>
            {/* Imagem do Dev Luch */}
            <div className={`${styles.imageWrapper} ${imageVisible ? styles.reveal : ''}`}>
              <Image
                src="/luch.webp"
                alt="Dev Luch - Desenvolvedor Full Stack"
                width={200}
                height={200}
                className={styles.profileImage}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        {/* Título principal com efeito neon flutuante */}
        <div className={styles.titleSection} ref={titleRef as any}>
          <div className={`${styles.titleWrapper} ${titleVisible ? styles.reveal : ''}`}>
            <Text family="orbitron" size="xl" className={styles.mainTitle}>
              {t("home.title")}
            </Text>
            <div className={styles.titleGlow}></div>
          </div>
          <Text family="orbitron" size="lg" align="center" className={`${styles.subtitle} ${titleVisible ? styles.reveal : ''}`}>
            {t("home.subtitle")}
          </Text>
        </div>
        <div className={styles.descriptionSection}>
          {/* Descrição flutuante */}
          <div className={`${styles.descriptionCard} ${missionVisible ? styles.reveal : ''}`} ref={missionRef as any}>
            <div className={styles.descriptionHeader}>
              <Star size={16} className={styles.descriptionIcon} />
              <span>{t("home.mission")}</span>
            </div>
            <p className={styles.descriptionText}>
              {t("home.description")}
            </p>
          </div>

          {/* Container principal com informações */}
          <div className={styles.mainContent}>

            {/* Informações em cards flutuantes */}
            <div className={styles.infoCards}>
              <div className={`${styles.card} ${statusVisible ? styles.reveal : ''}`} ref={statusRef as any}>
                <div className={styles.cardHeader}>
                  <User size={16} className={styles.cardIcon} />
                  <span>{t("home.status")}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>{t("home.age")}:</span>
                    <span className={styles.statValue}>{t("home.ageValue")}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>{t("home.profession")}:</span>
                    <span className={styles.statValue}>{t("home.professionValue")}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>{t("home.education")}:</span>
                    <span className={styles.statValue}>{t("home.educationValue")}</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${metricsVisible ? styles.reveal : ''}`} ref={metricsRef as any}>
                {!isLoading && !error && (
                  <div className={styles.rankCircle}>
                    <span className={styles.rankText}>{rank}</span>
                  </div>
                )}
                
                <div className={styles.cardHeader}>
                  <Code size={16} className={styles.cardIcon} />
                  <span>{t("home.metrics")}</span>
                </div>
                <div className={styles.cardContent}>
                  {isLoading ? (
                    <div className={styles.loadingContainer}>
                      <span className={styles.loadingText}>{t("home.loading")}</span>
                    </div>
                  ) : error ? (
                    <div className={styles.errorContainer}>
                      <span className={styles.errorText}>{t("home.error")}</span>
                    </div>
                  ) : (
                    <div className={styles.metricGrid}>
                      <div className={styles.metric}>
                        <span className={styles.metricNumber}>{totalCommits.toLocaleString()}</span>
                        <span className={styles.metricLabel}>{t("home.commits")}</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricNumber}>{totalPRs}</span>
                        <span className={styles.metricLabel}>{t("home.prs")}</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricNumber}>{totalStars}</span>
                        <span className={styles.metricLabel}>{t("home.stars")}</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricNumber}>{totalContributions}</span>
                        <span className={styles.metricLabel}>{t("home.contributions")}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Links sociais flutuantes */}
          <div className={styles.socialSection} ref={socialRef as any}>
            <div className={`${styles.socialTitle} ${socialVisible ? styles.reveal : ''}`}>
              <Terminal size={16} className={styles.socialTitleIcon} />
              <span>{t("home.connections")}</span>
            </div>
            <div className={`${styles.socialLinks} ${socialVisible ? styles.reveal : ''}`}>
              {socialLinks.map(({ icon: Icon, id, label, url }) => (
                <div key={`social-link-${id}`} className={styles.socialLinkWrapper}>
                  <Link href={url} target="_blank" className={styles.socialLink}>
                    <Icon />
                    <span className={styles.socialLabel}>{label}</span>
                    <div className={styles.socialGlow}></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Botão de configurações flutuante */}
      <FloatingSettings />
    </section>
  );
};
