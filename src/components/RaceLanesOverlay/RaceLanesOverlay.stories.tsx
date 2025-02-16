import type { Meta, StoryObj } from "@storybook/react";

import { RaceLanesOverlay } from "./RaceLanesOverlay";

const meta: Meta<typeof RaceLanesOverlay> = {
  component: RaceLanesOverlay,
};

export default meta;
type Story = StoryObj<typeof RaceLanesOverlay>;

export const Primary: Story = {
  args: {
    teamNames: ["Norcal Crew", "Los Gatos Rowing Club", "Oakland Strokes"],
    raceName: "Norcal Scrimmage 2025",
  },
};
