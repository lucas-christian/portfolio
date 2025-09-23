"use client";
import { useLang } from "@hooks/useLang";
import { icons } from "../../../constants/pages"
import { Text } from "../../Text";
import styles from "./styles.module.css"

export const PageTitle = ({ pathname }: { pathname: string; }) => {
  const { t, lang } = useLang();
  const icon = icons.find(icon => icon.page === pathname)
  if (!icon) return;
  return (
    <div className={styles.titleRootPos} key={`${pathname}-${lang}`}>
      <div className={styles.titleRoot}>
        {[0, 1, 2, 3].map(item => (
          <svg
            key={`title-corner-${item}`}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
            className={`${styles.corner} ${styles[`corner${item}`]}`}
          >
            <path d="M13.5 1H1.5L1.5 20.5" stroke="#3CE5FC" strokeWidth="2"/>
          </svg>
        ))}
        <Text size="lg" family="orbitron" className={styles.title} asChild key={`title-${lang}`}><h2>{t(icon.label)}</h2></Text>
        <div className={styles.titleContainer} style={{ width: icon.labelWidth }} />
      </div>
    </div>
  )
}