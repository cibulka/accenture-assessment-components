import { ReactNode } from "react";

export type CheckboxProps = {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: boolean;
  indeterminate?: boolean;
  label: ReactNode;
  onChange?: (event: React.ChangeEvent) => void;
  ref?: React.RefObject<HTMLInputElement>;
};
