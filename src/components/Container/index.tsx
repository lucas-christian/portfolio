import { ReactNode } from "react"
import styles from "./styles.module.css"

export const Container = ({ children, flexDirection="row" }: { children: ReactNode; flexDirection?: "row" | "column" }) => {
  return (
    <div className={styles.container} style={{ flexDirection }}>
      {children}
    </div>
  )
}