import { useState } from "react";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import Link from "next/link";
import { icons } from "../../../constants/pages";

export const NavbarPages = () => {
  const [mainId, setMainId] = useState(0);
  
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
        <Link
          key={`icon-left-page-${item.id}`}
          className={`${styles.iconRoot} ${styles[`icon${getRelativeIndex(item.id)}`]}`}
          onClick={() => handleClick(item.id)}
          href={icons[item.id].page}
          title={item.label}
        >
          <FontAwesomeIcon icon={item.icon} className={`${styles.icon} ${getRelativeIndex(item.id) === 0 ? styles.main : ""}`} />
        </Link>
      ))}
      <FontAwesomeIcon icon={faBars} className={`${styles.iconMobile} ${styles.sidebarIcon}`} />
    </div>
  );
};