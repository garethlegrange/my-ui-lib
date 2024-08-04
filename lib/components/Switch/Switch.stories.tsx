// https://storybook.js.org/docs/writing-stories
// https://storybook.js.org/docs/writing-stories#working-with-react-hooks

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dashboard",
      values: [
        {
          name: "dashboard",
          value: "#3d8ad1",
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const SwitchWithHooks = () => {
  const [checked, setCecked] = useState<boolean>(false);

  return <Switch checked={checked} onChange={setCecked} />;
};

export const Default: Story = {
  render: () => <SwitchWithHooks />,
};
