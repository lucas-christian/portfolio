"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { professionalExperiences, ProfessionalExperience as ProfessionalExperienceType } from "../../data/professionalExperiences";
import { useLang } from "../../hooks/useLang";
import styles from "../page.module.css";
import { faGlobe, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Project } from "../../data/projects";

export default function ProfessionalExperience() {
  const { t } = useLang();
  
  const renderExperience = (experience: ProfessionalExperienceType) => (
      <Container flexDirection="column">
        <div className={styles.pageButtons}>
          <Image 
            src={experience.image} 
            alt={experience.imageAlt} 
            width={400} 
            height={300} 
            style={{ width: "max-content", height: "auto", objectFit: "contain" }} 
          />
          <div className={styles.aboutMeRoot}>
            <Text family="orbitron" size="lg" weight="bold" style={{ color: "var(--glowing-border)"}}>
              {experience.title}
            </Text>
            {experience.date && (
              <Text family="orbitron" size="sm" weight="bold" style={{ color: "#AAAAAA" }}>
                {experience.date}
              </Text>
            )}
            <Text family="inter" align="justify">
              {t(experience.description)}
            </Text>
            <Text family="orbitron" style={{ color: "var(--glowing-border)"}}>{t("experience.technologies")}</Text>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
              {experience.technologies.map((tech, index) => (
                <Button.Root key={index} buttonStyle="smallTecnology">
                  <Button.Content text={tech} />
                </Button.Root>
              ))}
            </div>
            <Text family="orbitron" align="justify" style={{ color: "var(--glowing-border)"}}>
              {t("experience.responsibilities")}: <Text style={{ color: "var(--text)"}} asChild>
                <span>{t(experience.responsibilities)}</span>
              </Text>
            </Text>
          </div>
        </div>
        <div className={`${styles.pageButtons} ${styles.mobileHide}`}>
          {experience.githubUrl && (
            <Button.Root buttonStyle="outlineButton" asChild>
              <Link href={experience.githubUrl} target="_blank">
                <Button.Content
                  icon={faPaperclip}
                  iconWidth="20px"
                  text={t("experience.view-github")}
                />
              </Link>
            </Button.Root>
          )}
          {experience.websiteUrl && (
            <Button.Root buttonStyle="outlineButton" asChild>
              <Link href={experience.websiteUrl} target="_blank">
                <Button.Content
                  icon={faGlobe}
                  iconWidth="20px"
                  text={t("experience.view-website")}
                />
              </Link>
            </Button.Root>
          )}
        </div>
      </Container>
  );

  return (
    <div className={styles.page} style={{ padding: "0px 18%" }}>
      <Carousel 
        items={professionalExperiences} 
        renderItem={renderExperience as (item: ProfessionalExperienceType | Project, index: number) => React.ReactNode}
      />
    </div>
  );
}