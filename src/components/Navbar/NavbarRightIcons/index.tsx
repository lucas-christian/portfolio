import { faCog, faGlobe, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.css'

export const NavbarRightIcons = () => {
  const icons = [
    { id: 0, icon: faTrophy, label: "Conquistas" },
    { id: 1, icon: faGlobe, label: "Idioma" },
    { id: 2, icon: faCog, label: "Configurações" },
  ];

  return (
    <div className={styles.rightIcons}>
      {
        icons.map(({ icon, id, label }) => <FontAwesomeIcon key={`right-icons-${id}`} icon={icon} className={styles.icon} aria-label={label} />)
      }
    </div>
  );
}