import type { Meta, StoryObj } from "@storybook/react";
import { ModalParticipantTab } from "@/app/components/modals/ModalParticipantTab";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Modals/Participant Tab",
    component: ModalParticipantTab,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof ModalParticipantTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ParticipantTab: Story = {
   
};
