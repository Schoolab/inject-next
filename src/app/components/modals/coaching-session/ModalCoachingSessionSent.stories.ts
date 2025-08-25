import type { Meta, StoryObj } from "@storybook/react";
import { ModalCoachingSessionSent } from "@/app/components/modals/coaching-session/ModalCoachingSessionSent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Modals/Coaching Session/Studies",
    component: ModalCoachingSessionSent,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof ModalCoachingSessionSent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sent: Story = {
   
};
