import { ComponentType, ReactNode } from "react";

export enum ButtonVariant {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
  OUTLINE = "OUTLINE",
}

/**
 * Props of Button component.
 */
export type ButtonProps = {
  /**
   * Content of button.
   */
  children?: ReactNode;
  /**
   * Additional CSS classNames to the component.
   */
  className?: string;
  /**
   * Component used for the Root. Can be any React Component (such as `Clickable` or `Link`) or HTML tag (such as `button` or `span`).
   * @default button
   */
  component?: ComponentType | keyof JSX.IntrinsicElements;
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Icon of the button
   */
  icon?: ReactNode;
  /**
   * Whether the component should be full width.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Callback after clicking the element.
   */
  onClick?: () => void;
  /**
   * HTML <button> type Attribute: 'button', 'submit', 'reset'.
   */
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};
