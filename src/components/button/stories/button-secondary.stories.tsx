import type { Meta } from "@storybook/react";

import { Button } from "../button";
import { ButtonVariant } from "../types";

const meta = {
  title: "Button/Secondary",
  component: Button,
  tags: ["autodocs"],
  args: { children: "My button", variant: ButtonVariant.SECONDARY },
} satisfies Meta<typeof Button>;

export default meta;

export { Default, Disabled, FullWidth, IconButton, NonInteractive, WithIcon } from "./button-primary.stories";
