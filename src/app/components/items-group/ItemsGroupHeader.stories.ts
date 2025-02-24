import type { Meta, StoryObj } from "@storybook/react";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Group Header",
    component: ItemsGroupHeader,
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
        label: "Items group header",
        number: "0",
    },

} satisfies Meta<typeof ItemsGroupHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        
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