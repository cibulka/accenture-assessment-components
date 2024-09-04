import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconHeart } from "../../../icons/heart";
import { Button } from "../button";
import { ButtonVariant } from "../types";

const meta = {
  title: "Button/Primary",
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
    variant: ButtonVariant.PRIMARY,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onClick: fn() },
};

export const IconButton: Story = {
  args: { onClick: fn(), children: undefined, icon: <IconHeart /> },
};

export const WithIcon: Story = {
  args: { onClick: fn(), icon: <IconHeart /> },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { onClick: fn(), fullWidth: true },
};

export const NonInteractive: Story = {
  args: { component: "span" },
};
