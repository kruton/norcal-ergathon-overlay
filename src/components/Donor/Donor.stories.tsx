// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { Donor } from "./Donor";

const meta: Meta<typeof Donor> = {
  component: Donor,
};

export default meta;
type Story = StoryObj<typeof Donor>;

//👇 Throws a type error if the args don't match the component props
export const Primary: Story = {
  args: {
    name: "John Doe",
    amount: "125",
  },
};
