/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.css";
import { Slot } from "@radix-ui/react-slot";
import { Text } from "../Text";

const ButtonRoot = ({ onClick, asChild, buttonStyle = "button", style, disabled, children, className = "" }: {
  onClick?: () => void;
  children: ReactNode;
  asChild?: boolean;
  disabled?: boolean;
  buttonStyle?: "externalLink" | "internalLink" | "outlineButton" | "button" | "smallTecnology" | "form" | "neon";
  style?: CSSProperties;
  className?: string;
}) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component 
      onClick={onClick} 
      className={`${styles.sharedStyles} ${disabled ? styles.disabled : ""} ${styles[buttonStyle]} ${className}`} 
      style={style}
    >
      {children}
    </Component>
  );
}

const ButtonContent = ({ text, icon, iconWidth, weight }: { 
  text: string; 
  icon?: any; 
  iconWidth?: string; 
  weight?: "thin" | "light" | "regular" | "medium" | "bold" | "black"; 
}) => {
  return (
    <>
      {icon && <FontAwesomeIcon icon={icon} style={{ width: iconWidth || "16px", height: "auto" }} />}
      <Text size="sm" style={{ width: "max-content" }} weight={weight} asChild>
        <span>{text}</span>
      </Text>
    </>
  )
}

export const Button = {
  Root: ButtonRoot,
  Content: ButtonContent
}
