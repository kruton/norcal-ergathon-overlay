import type { Meta, StoryObj } from "@storybook/react";

import { RaceLane } from "./RaceLane";

const meta: Meta<typeof RaceLane> = {
  component: RaceLane,
};

export default meta;
type Story = StoryObj<typeof RaceLane>;

export const Primary: Story = {
  args: {
    laneNumber: 1,
    name: "Norcal Crew",
    end: false,
  },
};
