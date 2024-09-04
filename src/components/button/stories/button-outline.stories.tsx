import type { Meta } from "@storybook/react";

import { Button } from "../button";
import { ButtonVariant } from "../types";

const meta = {
  title: "Button/Outline",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "My button",
    className: "",
    component: "button",
    disabled: false,
    fullWidth: false,
    icon: undefined,
    onClick: undefined,
    type: undefined,
    variant: ButtonVariant.OUTLINE,
  },
} satisfies Meta<typeof Button>;

export default meta;

export { Default, Disabled, FullWidth, IconButton, NonInteractive, WithIcon } from "./button-primary.stories";
