import type { Meta, StoryObj } from "@storybook/react";
import { ItemObjectives } from "@/app/components/items/ItemObjectives";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Objectives",
    component: ItemObjectives,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof ItemObjectives>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Objectives: Story = {
   
};
