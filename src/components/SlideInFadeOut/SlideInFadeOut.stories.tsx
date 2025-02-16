import type { Meta, StoryObj } from "@storybook/react";

import { SlideInFadeOut } from "./SlideInFadeOut";

const meta: Meta<typeof SlideInFadeOut> = {
  component: SlideInFadeOut,
};

export default meta;
type Story = StoryObj<typeof SlideInFadeOut>;

export const Primary: Story = {
  args: {
    children: <div>This is cool</div>,
    onAnimationComplete: () => {},
    horizontal: false,
    displayMs: 3000,
    restart: true,
  },
};
