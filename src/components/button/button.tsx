import { ButtonProps, ButtonVariant } from "./types";

import stylesOutline from "./styles/button-outline.module.css";
import stylesPrimary from "./styles/button-primary.module.css";
import stylesSecondary from "./styles/button-secondary.module.css";
import stylesTertiary from "./styles/button-tertiary.module.css";
import styles from "./styles/button.module.css";

/**
 * Button component.
 *
 * ## Component prop
 *
 * Its prop `component` defines whether it will be rendered as:
 * - any React component (such as `Clickable`)
 * - interactive component (such as `button` or `a`)
 * - UI-only component (such as `span`), so it can be wrapped by some other interactive component in the consumer app
 *
 * ## Design feedback
 *
 * - Disabled state would be achieve more flexibly through opacity than a fixed set of colors
 * - Missing dark/light mode context (relevant for secondary button)
 */
export function Button({
  children,
  className,
  component: Root = "button",
  disabled,
  fullWidth,
  icon,
  onClick,
  type,
  variant = ButtonVariant.PRIMARY,
}: ButtonProps) {
  const typeUsed = Root === "button" ? (type ?? "button") : type;

  return (
    <Root
      className={[
        className,
        styles["button"],
        fullWidth && styles["is-full-width"],
        icon && styles["has-icon"],
        icon && !children && styles["has-icon-only"],
        variant === ButtonVariant.PRIMARY && stylesPrimary["button"],
        variant === ButtonVariant.SECONDARY && stylesSecondary["button"],
        variant === ButtonVariant.TERTIARY && stylesTertiary["button"],
        variant === ButtonVariant.OUTLINE && stylesOutline["button"],
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      onClick={onClick}
      /* @ts-expect-error There is no obvious way how to determine that ComponentType can accept button type */
      type={typeUsed}
    >
      {icon ? <span className={styles["icon"]}>{icon}</span> : null}
      {children}
    </Root>
  );
}
