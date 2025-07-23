import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

export const Info = ({ icon, property, value, borderFrom="left", fontSize="13.33px" }: { icon?: IconDefinition; property?: string; value: string; borderFrom?: "left" | "top"; fontSize?: string; }) => {
  return (
    <div className={`${styles.infoRoot} ${styles[borderFrom]}`}>
      {icon && <FontAwesomeIcon icon={icon} color="var(--electric-blue)" />}
      <p style={{ fontSize }}>{property && <span className={styles.property}>{property}:</span>} {value}</p>
    </div>
  );
}