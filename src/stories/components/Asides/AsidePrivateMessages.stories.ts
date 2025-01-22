import type { Meta, StoryObj } from "@storybook/react";
import { PageAsidePrivateMessages } from "@/app/components/asides/pages/PageAsidePrivateMessages";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Asides/PrivateMessages",
    component: PageAsidePrivateMessages,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },

} satisfies Meta<typeof PageAsidePrivateMessages>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const PrivateMessages: Story = {

};
