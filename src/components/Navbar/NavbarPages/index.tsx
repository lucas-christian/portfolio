import { useState } from "react";
import {
  faUser,
  faFolder,
  faTerminal,
  faSuitcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";


export const NavbarPages = () => {
  const [mainId, setMainId] = useState(0);

  const icons = [
    { id: 0, icon: faUser, label: "Sobre mim" },
    { id: 1, icon: faTerminal, label: "Habilidades" },
    { id: 2, icon: faFolder, label: "Projetos" },
    { id: 3, icon: faSuitcase, label: "Experiência Profissional" },
    { id: 4, icon: faPhone, label: "Contato" }
  ];
  
  const handleClick = (index: number) => {
    if (mainId === index) return;
    const totalSteps = (icons.length + mainId - index) % icons.length;

    let count = 0;

    const animate = () => {
      setMainId((prevId) => {
        const currentIndex = icons.findIndex((icon) => icon.id === prevId);
        const nextIndex = (currentIndex - 1 + icons.length) % icons.length;
        return icons[nextIndex].id;
      });

      count++;
      if (count < totalSteps) {
        setTimeout(animate, 200);
      }
    };

    animate();
  };

  const getRelativeIndex = (id: number) => {
    const principalIndex = icons.findIndex((icon) => icon.id === mainId);
    const index = icons.findIndex((icon) => icon.id === id);
    return (icons.length + index - principalIndex) % icons.length;
  }

  return (
    <div className={styles.container}>
      {icons.map((item) => (
        <div
          key={`icon-left-page-${item.id}`}
          className={`${styles.iconRoot} ${styles[`icon${getRelativeIndex(item.id)}`]}`}
          onClick={() => handleClick(item.id)}
          title={item.label}
        >
          <FontAwesomeIcon icon={item.icon} className={`${styles.icon} ${getRelativeIndex(item.id) === 0 ? styles.main : ""}`} />
        </div>
      ))}
    </div>
  );
};