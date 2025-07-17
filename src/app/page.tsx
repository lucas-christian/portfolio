"use client";
import { useLang } from "@hooks/useLang";
import styles from "./page.module.css";
import { useTheme } from "@hooks/useTheme";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const { t, lang, changeLanguage } = useLang();
  const { setTheme } = useTheme();
  return (
    <div className={styles.page}>
      <Navbar />
      <p>{t("welcome")}</p>
      <button onClick={() => changeLanguage(lang === "pt-BR" ? "en-US" : "pt-BR")}>clique aqui</button>
      <button onClick={() => setTheme("light")}>CLARO</button>
      <button onClick={() => setTheme("dark")}>ESCURO</button>
      <button onClick={() => setTheme("system")}>SISTEMA</button>
    </div>
  );
}
