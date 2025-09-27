import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { Text } from "../Text";

export const Info = ({ 
  icon, 
  property, 
  value, 
  borderFrom="left", 
  fontSize="13.33px",
  className = ""
}: { 
  icon?: IconDefinition; 
  property?: string; 
  value: string; 
  borderFrom?: "left" | "top"; 
  fontSize?: string;
  className?: string;
}) => {
  return (
    <div className={`${styles.infoRoot} ${styles[borderFrom]} ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} color="var(--electric-blue)" />}
      <Text style={{ fontSize }}>    
        {property && <Text className={styles.property} style={{ fontSize }} asChild><span>{property}:</span></Text>} {value}
      </Text>
    </div>
  );
}
