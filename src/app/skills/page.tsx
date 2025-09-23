"use client";
import { Text } from "../../components/Text";
import { useLang } from "../../hooks/useLang";
import styles from "../page.module.css";

export default function Skills() {
  const { t } = useLang();
  
  return (
    <div className={styles.page} style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "60vh",
      textAlign: "center"
    }}>
      <Text 
        family="orbitron" 
        size="xl" 
        weight="bold" 
        style={{ 
          color: "var(--glowing-border)",
          fontSize: "2.5rem"
        }}
      >
        {t("skills.coming-soon")}
      </Text>
    </div>
  );
}
