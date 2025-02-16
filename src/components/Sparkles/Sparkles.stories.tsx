import type { Meta, StoryObj } from "@storybook/react";

import Sparkles from "./Sparkles";

const meta: Meta<typeof Sparkles> = {
  component: Sparkles,
};

export default meta;
type Story = StoryObj<typeof Sparkles>;

export const Primary: Story = {
  children: <div>These are sparkles!</div>,
};
