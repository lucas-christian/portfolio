import { faCog, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.css'
import { SettingsDropdown } from "../SettingsDropdown";

export const NavbarRightIcons = () => {
  return (
    <div className={styles.rightIcons}>
      <FontAwesomeIcon icon={faTrophy} className={styles.icon} aria-label="Conquistas" />
      <SettingsDropdown>
        <FontAwesomeIcon icon={faCog} className={styles.icon} aria-label="Configurações" />
      </SettingsDropdown>
    </div>
  );
}