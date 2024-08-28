import type { Meta, StoryObj } from "@storybook/react";
import { ItemTasks } from "@/app/components/items/ItemTasks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Tasks",
    component: ItemTasks,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof ItemTasks>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tasks: Story = {
   
};
