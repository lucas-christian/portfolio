"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { projects, Project } from "../../data/projects";
import styles from "../page.module.css";
import { faGlobe, faPaperclip, faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { ProfessionalExperience } from "../../data/professionalExperiences";

export default function Projects() {
  const renderProject = (project: Project) => (
    <Container flexDirection="column">
      <div className={styles.pageButtons}>
        <div className={styles.aboutMeRoot}>
          <Text family="orbitron" size="lg" weight="bold" style={{ color: "var(--glowing-border)" }}>
            {project.title}
          </Text>

          <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
            <Button.Root buttonStyle="smallTecnology">
              <Button.Content
                icon={project.projectType === "open-source" ? faCode : faUser}
                iconWidth="12px"
                text={project.projectType === "open-source" ? "Open Source" : "Projeto Pessoal"}
              />
            </Button.Root>
            <Button.Root buttonStyle="smallTecnology">
              <Button.Content text={project.role} />
            </Button.Root>
          </div>

          <Text family="inter" align="justify">
            {project.description}
          </Text>

          <Text family="orbitron" style={{ color: "var(--glowing-border)" }}>Tecnologias</Text>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {project.technologies.map((tech, index) => (
              <Button.Root key={index} buttonStyle="smallTecnology">
                <Button.Content text={tech} />
              </Button.Root>
            ))}
          </div>

          <Text family="orbitron" align="justify" style={{ color: "var(--glowing-border)" }}>
            Responsabilidades: <Text style={{ color: "var(--text)" }} asChild>
              <span>{project.responsibilities}</span>
            </Text>
          </Text>
        </div>
        <div style={{ position: "relative", width: "100%", height: "auto" }} className={styles.myImage}>
          <Image src={project.desktopImage} alt={project.desktopImageAlt} width={600} height={500} style={{ width: "90%", height: "80%", position: "absolute", left: 0, bottom: 0, objectFit: "contain" }} />
          <Image src={project.mobileImage} alt={project.mobileImageAlt} width={500} height={400} style={{ width: "30%", height: "60%", position: "absolute", right: 0, bottom: 0, objectFit: "contain" }} />
        </div>
      </div>
      <div className={`${styles.pageButtons} ${styles.mobileHide}`}>
        {project.githubUrl && (
          <Button.Root buttonStyle="outlineButton" asChild>
            <Link href={project.githubUrl} target="_blank">
              <Button.Content
                icon={faPaperclip}
                iconWidth="20px"
                text="Ver no Github"
              />
            </Link>
          </Button.Root>
        )}
        {project.websiteUrl && (
          <Button.Root buttonStyle="outlineButton" asChild>
            <Link href={project.websiteUrl} target="_blank">
              <Button.Content
                icon={faGlobe}
                iconWidth="20px"
                text="Ver projeto"
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
        items={projects}
        renderItem={renderProject as (item: Project | ProfessionalExperience, index: number) => React.ReactNode}
      />
    </div>
  );
}