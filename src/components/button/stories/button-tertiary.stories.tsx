import type { Meta } from "@storybook/react";

import { Button } from "../button";
import { ButtonVariant } from "../types";

const meta = {
  title: "Button/Tertiary",
  component: Button,
  tags: ["autodocs"],
  args: { children: "My button", variant: ButtonVariant.TERTIARY },
} satisfies Meta<typeof Button>;

export default meta;

export { Default, Disabled, FullWidth, IconButton, NonInteractive, WithIcon } from "./button-primary.stories";
