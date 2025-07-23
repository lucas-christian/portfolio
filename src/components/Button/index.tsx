/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import styles from "./styles.module.css";

export const Button = ({ href, text, icon, onClick, target, iconWidth }: { href?: string; text: string; icon?: any; onClick?: () => void; target?: HTMLAttributeAnchorTarget; iconWidth?: string; }) => {
  if (href) {
    return (
      <Link href={href} target={target} className={`${styles.sharedStyles} ${styles.urlButton}`}>
        {icon && <FontAwesomeIcon icon={icon} style={{ width: iconWidth || "16px", height: "auto" }} />}
        <span style={{ width: "max-content" }}>{text}</span>
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={`${styles.sharedStyles} ${styles.button}`}>
      {icon && <FontAwesomeIcon icon={icon} style={{ width: iconWidth || "16px", height: "auto" }} />}
      <span style={{ width: "max-content" }}>{text}</span>
    </button>
  );
}