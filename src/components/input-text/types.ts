import { ChangeEvent } from "react";

export interface InputTextProps {
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
