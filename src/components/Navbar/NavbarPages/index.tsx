"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { icons } from "../../../constants/pages";
import { useNavbar } from "@hooks/useNavbar";
import { useLang } from "@hooks/useLang";
import { NavbarMobile } from "../NavbarMobile";

export const NavbarPages = () => {
  const { mainId, handleNavigate } = useNavbar();
  const { t } = useLang();

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
          onClick={() => handleNavigate(item.id)}
          title={t(item.label)}
        >
          <FontAwesomeIcon icon={item.icon} className={`${styles.icon} ${getRelativeIndex(item.id) === 0 ? styles.main : ""}`} />
        </div>
      ))}
      <NavbarMobile />
    </div>
  );
};