import type { Meta, StoryFn } from "@storybook/react";
import { useCallback, useState } from "react";

import { Checkbox } from "../checkbox";

const meta = {
  title: "Input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "My checkbox",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryFn<typeof meta>;

const label = "My checkbox";

export const Default: Story = () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(() => setChecked((old) => !old), []);
  return <Checkbox checked={checked} onChange={onChange} label={label} />;
};

export const Indeterminate: Story = () => {
  const [checkedA, setCheckedA] = useState(false);
  const onChangeA = useCallback(() => setCheckedA((old) => !old), []);

  const [checkedB, setCheckedB] = useState(false);
  const onChangeB = useCallback(() => setCheckedB((old) => !old), []);

  const [checkedC, setCheckedC] = useState(false);
  const onChangeC = useCallback(() => setCheckedC((old) => !old), []);

  const allChecked = checkedA && checkedB && checkedC;
  const someChecked = checkedA || checkedB || checkedC;
  const onChangeAll = useCallback(() => {
    if (allChecked) {
      setCheckedA(false);
      setCheckedB(false);
      setCheckedC(false);
    } else {
      setCheckedA(true);
      setCheckedB(true);
      setCheckedC(true);
    }
  }, [allChecked]);

  return (
    <div>
      <div className="mb-2">
        <Checkbox
          checked={allChecked}
          indeterminate={!allChecked && someChecked}
          onChange={onChangeAll}
          label="All fruits"
        />
      </div>
      <ul className="flex flex-col gap-2 ml-4">
        <li>
          <Checkbox checked={checkedA} onChange={onChangeA} label="Apples" />
        </li>
        <li>
          <Checkbox checked={checkedB} onChange={onChangeB} label="Pears" />
        </li>
        <li>
          <Checkbox checked={checkedC} onChange={onChangeC} label="Cherries" />
        </li>
      </ul>
    </div>
  );
};

export const Error: Story = () => {
  return <Checkbox error label={label} />;
};

export const Disabled: Story = () => {
  return <Checkbox disabled checked label={label} />;
};
