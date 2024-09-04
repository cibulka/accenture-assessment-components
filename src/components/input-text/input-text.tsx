import { InputTextProps } from "./types";

import { useId } from "react";
import styles from "./input-text.module.css";

/**
 * Text input for forms (rough version).
 */
export const InputText = ({ className, placeholder, value, onChange }: InputTextProps) => {
  const inputId = useId();
  return (
    <div className={[className, styles.root, placeholder && styles["has-placeholder"]].filter(Boolean).join(" ")}>
      <input className={styles.input} id={inputId} type="text" value={value} onChange={onChange} />
      {placeholder && (
        <label className={styles.placeholder} htmlFor={inputId}>
          {placeholder}
        </label>
      )}
    </div>
  );
};
