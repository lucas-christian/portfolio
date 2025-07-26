"use client";

import React from "react";
import styles from "./styles.module.css";

type TextAreaProps = {
  autoResize?: boolean;
  className?: string;
  rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
  className, children, rows=1, ...props
}: TextAreaProps) => {
  return (
    <textarea
      className={`${styles.area} ${className ? className : ""}`}
      rows={rows} {...props}
    >
      {children}
    </textarea>
  );
}
