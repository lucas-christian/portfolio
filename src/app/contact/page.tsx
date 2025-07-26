"use client";
import { Container } from "../../components/Container";
import styles from "../page.module.css";
import { Button } from "../../components/Button";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";

export default function Contact() {
  const buttons = [
    { id: 1, icon: faEnvelope, label: "E-mail", page: "mailto:lucas.christian.programmer@gmail.com" },
    { id: 2, icon: faLinkedin, label: "LinkedIn", page: "https://www.linkedin.com/in/lucas-christian-226846245/", target: "_blank" },
    { id: 3, icon: faWhatsapp, label: "WhatsApp", page: "https://wa.me/qr/WLYIDCRPOPKVE1", target: "_blank" },
    { id: 4, icon: faGithub, label: "Github", page: "https://github.com/Lucas-Christian", target: "_blank" }
  ]; 
  return (
    <div className={styles.page} style={{ padding: "0 30%" }}>
      <Container flexDirection="column">
        <div className={styles.aboutMeRoot}>
          <Input.Root>
            <Input.Icon icon={faUser} />
            <Input.Input placeholder="Digite seu nome" max={200} />
          </Input.Root>
          <Input.Root>
            <Input.Icon icon={faEnvelope} />
            <Input.Input placeholder="Digite seu e-mail" max={200} />
          </Input.Root>
          <Select />
          <TextArea placeholder="Digite a sua mensagem" rows={12} />
          <Button.Root buttonStyle="form">
            <Button.Content
              text="Enviar mensagem"
            />
          </Button.Root>
        </div>
        <div className={`${styles.pageButtons} ${styles.mobileHide}`}>
          {buttons.map(({ icon, id, label, page, target }) => (
            <Button.Root
              key={`button-icon-${id}`}
              buttonStyle="externalLink"
              asChild
            >
              <Link href={page} target={target}>
                <Button.Content
                  text={label}
                  icon={icon}
                  weight="bold"
                />
              </Link>
            </Button.Root>
          ))}
        </div>
      </Container>
    </div>
  );
}
