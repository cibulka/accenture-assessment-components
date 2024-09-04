import type { Meta, StoryFn } from "@storybook/react";

import { useCallback, useState } from "react";
import { InputText } from "../input-text";

const meta = {
  title: "Input/Text",
  component: InputText,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  return <InputText />;
};

export const WithPlaceholder: Story = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value), []);

  return <InputText value={value} onChange={onChange} placeholder="Your name" />;
};
