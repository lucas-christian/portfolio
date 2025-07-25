"use client";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import styles from "../page.module.css";
import { Button } from "../../components/Button";
import { faGlobe, faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className={styles.page} style={{ padding: "0px 18%" }}>
      <Container flexDirection="column">
        <div className={styles.pageButtons}>
          <div className={styles.aboutMeRoot}>
            <Text family="orbitron" size="lg" weight="bold" style={{ color: "var(--glowing-border)"}}>Gamix</Text>
            <Text family="orbitron" size="sm" weight="bold" style={{ color: "#AAAAAA" }}>Educacional</Text>
            <Text family="inter" align="justify">
              Sistema completo de pagamentos com gamificação e integração de múltiplos serviços. Usuários recebem recompensas visuais e
              feedback instantâneo ao realizar ações financeiras dentro da plataforma.
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
          <div style={{ position: "relative", width: "100%", height: "auto" }} className={styles.myImage}>
            {/* <Image src="/pt-BR.svg" alt="Imagem do Dev Luch" width={434} height={312} className={styles.myImage} /> */}
            <div style={{ width: "90%", height: "80%", backgroundColor: "#000000", position: "absolute", left: 0, bottom: 0 }} />
            <div style={{ width: "30%", height: "60%", backgroundColor: "#FFFFFF", position: "absolute", right: 0, bottom: 0 }} />
          </div>
        </div>
        <div className={`${styles.pageButtons} ${styles.mobileHide}`}>
          <Button.Root buttonStyle="outlineButton">
            <Button.Content
              icon={faPaperclip}
              iconWidth="20px"
              text="Ver repositório"
            />
          </Button.Root>
          <Button.Root buttonStyle="outlineButton">
            <Button.Content
              icon={faGlobe}
              iconWidth="20px"
              text="Ver projeto"
            />
          </Button.Root>
        </div>
      </Container>
    </div>
  );
}
