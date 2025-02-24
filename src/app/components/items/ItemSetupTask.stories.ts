import type { Meta, StoryObj } from "@storybook/react";
import { ItemSetupTask } from "@/app/components/items/ItemSetupTask";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Setup Task",
    component: ItemSetupTask,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
     // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
     tags: ["autodocs"],
     argTypes: {
     },
    args: {
        title: "Complete the basic info",
        caption: "Review the name, the description, dates and cover of the program",
        tasks: 3,
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof ItemSetupTask>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        
    },
};

export const Ongoing: Story = {
    args: {
        progress: 1,
    },
};

export const Done: Story = {
    args: {
        progress: 3,
    },
};