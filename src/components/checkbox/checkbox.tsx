import { forwardRef, useEffect, useRef } from "react";
import { useMergeRefs } from "use-callback-ref";

import { IconCheck } from "../../icons/check";
import { IconDash } from "../../icons/minus";

import styles from "./checkbox.module.css";
import { CheckboxProps } from "./types";

/**
 * Checkbox component.
 *
 * ## Indeterminate state
 *
 * "Indeterminate" state indicates neutral or partially undecided state. It is, however, purely visual feature, it's real value remains either `checked` or `unchecked`.
 *
 * ## How to change checked/unchecked state?
 *
 * ### Changed through props
 *
 * You can control the component state by providing `checked` and `onChange`.
 *
 * ### Uncontrolled version
 *
 * You can provide the component `ref` that manages its state. When used in forms, this solution is slightly more performant.
 *
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, checked, defaultChecked, disabled, error, indeterminate, label, onChange }: CheckboxProps,
    forwardedRef
  ) => {
    const localRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs([localRef, forwardedRef]);

    useEffect(() => {
      if (mergedRef?.current) {
        mergedRef!.current.indeterminate = Boolean(indeterminate);
      }
    }, [mergedRef, indeterminate]);

    return (
      <label
        className={[className, styles["root"], error && styles["root-error"], disabled && styles["root-disabled"]]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          ref={mergedRef}
        />
        <span className={[styles["icon"], styles["icon-unchecked"]].join(" ")} />
        <span className={[styles["icon"], styles["icon-checked"]].join(" ")}>
          <IconCheck />
        </span>
        <span className={[styles["icon"], styles["icon-indeterminate"]].join(" ")}>
          <IconDash />
        </span>
        <span>{label}</span>
      </label>
    );
  }
);
