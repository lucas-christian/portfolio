"use client";
import Image from "next/image";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import styles from "../page.module.css";
import { Button } from "../../components/Button";
import { faGlobe, faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function ProfessionalExperience() {
  return (
    <div className={styles.page} style={{ padding: "0px 18%" }}>
      <Container flexDirection="column">
        <div className={styles.pageButtons}>
          <Image src="/pt-BR.svg" alt="Imagem do Dev Luch" width={434} height={312} className={styles.myImage} />
          <div className={styles.aboutMeRoot}>
            <Text family="orbitron" size="lg" weight="bold" style={{ color: "var(--glowing-border)"}}>MStore Digital LTDA</Text>
            <Text family="orbitron" size="sm" weight="bold" style={{ color: "#AAAAAA" }}>Jan. de 2024 - Jan. de 2025</Text>
            <Text family="inter" align="justify">
              Sistema completo de pagamentos com gamificação e integração de múltiplos serviços.
              Usuários recebem recompensas visuais e feedback instantâneo ao realizar ações financeiras dentro da plataforma.
            </Text>
            <Text family="orbitron" style={{ color: "var(--glowing-border)"}}>Tecnologias</Text>
            <Button.Root buttonStyle="smallTecnology">
              <Button.Content
                text="Next.js"
              />
            </Button.Root>
            <Text family="orbitron" align="justify" style={{ color: "var(--glowing-border)"}}>Responsabilidades: <Text style={{ color: "var(--text)"}} asChild><span>Responsável pelo mobile, gerir o projeto utilizando o Jira, responsável pelo backend, etc...</span></Text></Text>
            <Text family="orbitron" style={{ color: "var(--glowing-border)"}}>Data: <Text style={{ color: "var(--text)"}} asChild><span>2023 ~ atualmente.</span></Text></Text>
          </div>
        </div>
        <div className={`${styles.pageButtons} ${styles.mobileHide}`}>
          <Button.Root buttonStyle="outlineButton">
            <Button.Content
              icon={faPaperclip}
              iconWidth="20px"
              text="Ver empresa no Github"
            />
          </Button.Root>
          <Button.Root buttonStyle="outlineButton">
            <Button.Content
              icon={faGlobe}
              iconWidth="20px"
              text="Ver site da empresa"
            />
          </Button.Root>
        </div>
      </Container>
    </div>
  );
}
