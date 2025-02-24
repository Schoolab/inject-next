import type { Meta, StoryObj } from "@storybook/react";
import { ItemCapsule } from "@/app/components/items/ItemCapsule";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Capsule",
    component: ItemCapsule,
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
        date: { control: 'text' },
        dueDate: { control: 'text' },
     },
    args: {
        name: "Capsule Name",
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof ItemCapsule>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        
    },
};

export const Questions: Story = {
    args: {
        questions: 3,
    },
};

export const Date: Story = {
    args: {
        date: "Oct 1",
    },
};

export const DueDate: Story = {
    args: {
        date: "Oct 1",
        dueDate: "31",
        locked: false,
    },
};

export const Available: Story = {
    args: {
        date: "Oct 1",
        locked: false,
    },
};

export const Emoji: Story = {
    args: {
        emoji: "👋",
    },
};
