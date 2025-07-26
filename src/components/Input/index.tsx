import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react";
import styles from "./styles.module.css";

const InputRoot = ({ children }: { children: ReactNode; }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

const InputIcon = ({ icon }: { icon: FontAwesomeIconProps["icon"]; }) => {
  return <FontAwesomeIcon icon={icon} className={styles.icon} />
}

const InputInput = ({ placeholder, max }: { placeholder: string; max?: string | number;  }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      max={max}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Input: InputInput
}