import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Demos/Form",
  component: () => <div>Form</div>,
  tags: ["autodocs"],
  args: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
