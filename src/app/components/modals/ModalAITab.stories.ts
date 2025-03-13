import type { Meta, StoryObj } from "@storybook/react";
import { ModalAITab } from "./ModalAITab";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Modals/ModalAI Tab",
    component: ModalAITab,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
} satisfies Meta<typeof ModalAITab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ModalAI: Story = {
    args: {
 
        isShow: true,
       
    },
}

export const emptyState: Story = {
    args: {
 
        isShow: true,
        emptyState: true,
       
    },
}

