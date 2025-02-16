import type { Meta, StoryObj } from "@storybook/react";

import { Donor } from "./Donor";

const meta: Meta<typeof Donor> = {
  component: Donor,
};

export default meta;
type Story = StoryObj<typeof Donor>;

export const Primary: Story = {
  args: {
    name: "John Doe",
    amount: "125",
  },
};
