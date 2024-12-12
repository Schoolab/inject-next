import type { Meta, StoryObj } from "@storybook/react";
import { CardApplication } from "@/app/components/cards/CardApplication";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Participant/Application",
    component: CardApplication,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },

} satisfies Meta<typeof CardApplication>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Application: Story = {

};
