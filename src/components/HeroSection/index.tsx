"use client";
import React from "react";
import { User, Code, Terminal, Star } from "lucide-react";
import { Container } from "../Container";
import { Text } from "../Text";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const HeroSection = () => {
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
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      {/* Grid de fundo futurista */}
      <div className={styles.gridBackground}></div>

      <Container flexDirection="column" className={styles.heroContainer}>
        {/* Imagem central com círculos */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Imagem do Dev Luch */}
            <div className={styles.imageWrapper}>
              <Image
                src="/pt-BR.svg"
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
        <div className={styles.titleSection}>
          <div className={styles.titleWrapper}>
            <Text family="orbitron" size="xl" className={styles.mainTitle}>
              DEV LUCH
            </Text>
            <div className={styles.titleGlow}></div>
          </div>
          <Text family="orbitron" size="lg" className={styles.subtitle}>
            DESENVOLVEDOR DE SOFTWARE
          </Text>
        </div>
        <div className={styles.descriptionSection}>
          {/* Descrição flutuante */}
          <div className={styles.descriptionCard}>
            <div className={styles.descriptionHeader}>
              <Star size={16} className={styles.descriptionIcon} />
              <span>MISSÃO</span>
            </div>
            <p className={styles.descriptionText}>
              Desenvolvedor de Software especializado em criar soluções inovadoras e escaláveis.
              Experiência sólida em automação, IoT, sistemas de cobrança e integrações avançadas.
              Atualmente em missão ativa na Soublox, desenvolvendo soluções backend de alta performance
              e arquiteturas robustas para o futuro da tecnologia.
            </p>
          </div>

          {/* Container principal com informações */}
          <div className={styles.mainContent}>

            {/* Informações em cards flutuantes */}
            <div className={styles.infoCards}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <User size={16} className={styles.cardIcon} />
                  <span>STATUS</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Idade:</span>
                    <span className={styles.statValue}>20 anos</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Profissão:</span>
                    <span className={styles.statValue}>Desenvolvedor de Software</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Formação:</span>
                    <span className={styles.statValue}>Fatec Cotia</span>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <Code size={16} className={styles.cardIcon} />
                  <span>MÉTRICAS</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.metricGrid}>
                    <div className={styles.metric}>
                      <span className={styles.metricNumber}>888</span>
                      <span className={styles.metricLabel}>Commits</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricNumber}>15</span>
                      <span className={styles.metricLabel}>PRs</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricNumber}>10</span>
                      <span className={styles.metricLabel}>Stars</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricNumber}>13</span>
                      <span className={styles.metricLabel}>Contribuições</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links sociais flutuantes */}
          <div className={styles.socialSection}>
            <div className={styles.socialTitle}>
              <Terminal size={16} className={styles.socialTitleIcon} />
              <span>CONEXÕES</span>
            </div>
            <div className={styles.socialLinks}>
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
    </section>
  );
};
