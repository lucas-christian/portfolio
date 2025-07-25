"use client";
import { faBookBookmark, faCircleExclamation, faClockRotateLeft, faCodePullRequest, faFolder, faGraduationCap, faLaptopCode, faPhone, faShareNodes, faStar, faSuitcase, faTerminal, faTrophy, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../components/Container";
import { Info } from "../components/Info";
import styles from "./page.module.css";
import { Button } from "../components/Button";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavbar } from "@hooks/useNavbar";
import { icons } from "../constants/pages";
import Link from "next/link";
import { Text } from "../components/Text";

export default function Home() {
  const { handleNavigate } = useNavbar();

  const buttons = [
    { id: 1, icon: faTerminal, label: "Habilidades", page: "/skills" },
    { id: 2, icon: faFolder, label: "Projetos", page: "/projects" },
    { id: 3, icon: faSuitcase, label: "Experiência Profissional", page: "/professional-experience" },
    { id: 4, icon: faPhone, label: "Contato", page: "/contact" },
    { id: 5, icon: faTrophy, label: "Conquistas" },
  ];

  const links = [
    { id: 0, icon: faGithub, label: "Lucas-Christian", page: "https://github.com/Lucas-Christian" },
    { id: 1, icon: faLinkedin, label: "lucas-christian-226846245", page: "https://www.linkedin.com/in/lucas-christian-226846245/" },
    { id: 2, icon: faYoutube, label: "@dev-luch", page: "https://www.youtube.com/@dev-luch" }
  ]

  const handleSharePortfolio = async () => {
    const shareUrl = 'https://dev-luch.com';
    const shareData = {
      title: 'Dev Luch',
      text: 'Veja o portfólio completo de um dev aqui:',
      url: shareUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Compartilhado com sucesso');
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copiado! Agora cole onde quiser compartilhar.');
    }
  }

  return (
    <div className={styles.page}>
      <Container flexDirection="column">
        <div className={styles.pageButtons}>
          <Image src="/pt-BR.svg" alt="Imagem do Dev Luch" width={200} height={312} className={styles.myImage} />
          <div className={styles.aboutMeRoot}>
            <div className={styles.aboutMeTop}>
              <Text family="orbitron" size="lg" asChild>
                <h3>Lucas Christian</h3>
              </Text>
              <div className={styles.aboutMeTopRight}>
                <FontAwesomeIcon style={{ width: "16px", height: "auto", color: "var(--text)", cursor: "pointer" }} icon={faShareNodes} onClick={handleSharePortfolio} />
                <div className={styles.rank}><span>B-</span></div>
              </div>
            </div>
            <div className={styles.aboutMe}>
              <Info icon={faUserClock} property="Idade" value="20 anos" />
              <Info icon={faLaptopCode} property="Profissão" value="Desenvolvedor de Software" />
              <Info icon={faGraduationCap} property="Formação" value="Cursando Desenvolvimento de Software Multiplataforma na Fatec de Cotia" />
            </div>
            <div className={styles.pageButtons}>
              {links.map(({ icon, id, label, page }) => (
                <Button.Root
                  key={`button-icon-${id}`}
                  buttonStyle="externalLink"
                  asChild
                >
                  <Link href={page} target="_blank">
                    <Button.Content text={label} icon={icon} iconWidth="20px" />
                  </Link>
                </Button.Root>
              ))}
            </div>
            <div className={styles.devStatus}>
              <div className={styles.devStatusLine}>
                <Info icon={faCircleExclamation} property="Issues" value="0" />
                <Info icon={faClockRotateLeft} property="Commits" value="888" />
                <Info icon={faCodePullRequest} property="PRs" value="15" />
              </div>
              <div className={styles.devStatusLine}>
                <Info icon={faStar} property="Estrelas recebidas" value="10" />
                <Info icon={faBookBookmark} property="Contribuições (último ano)" value="13" />
              </div>
            </div>
          </div>
        </div>
        <Info borderFrom="top" fontSize="16px" value="Iniciei no mundo do desenvolvimento web em 2022, Já atuei em projetos onde tive contato com serviços de cobrança, envio de e-mails, pude também trabalhar na automação de atendimentos através do WhatsApp e me aventurei no uso de IoT para automações em testes de estufa." />
        <div className={`${styles.pageButtons} ${styles.mobileHide}`}>
          {buttons.map(({ icon, id, label, page }) => (
            <Button.Root
              key={`button-icon-${id}`}
              onClick={() => icons.find(icon => icon.page === page) ? handleNavigate(id) : undefined}
              buttonStyle="internalLink"
            >
              <Button.Content
                text={label}
                icon={icon}
              />
            </Button.Root>
          ))}
        </div>
      </Container>
    </div>
  );
}
