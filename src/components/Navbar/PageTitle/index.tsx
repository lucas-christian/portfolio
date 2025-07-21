import styles from "./styles.module.css"

export const PageTitle = () => {
  return (
    <div className={styles.titleRootPos}>
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
        <h2 className={styles.title}>Arquivo de agente</h2>
        <div className={styles.titleContainer} />
      </div>
    </div>
  )
}