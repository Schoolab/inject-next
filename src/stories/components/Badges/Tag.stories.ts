import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/app/components/badges/tags/Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Badges/Tags",
    component: Tag,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        isPill: { control: "boolean" },
    },
    args: {
        isPill: true,
        status: "default",
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        label: "Tag #1",      
    },
};
export const WithIcon: Story = {
    args: {
        label: "Private",
        iconName: "eye-off",
    },
};
export const Open: Story = {
    args: {
        label: "Open",
        iconName: "status-filled",
        status: "open",
    },
};
export const InProgress: Story = {
    args: {
        label: "In progress",
        iconName: "status-dashed",
        status: "progress",
    },
};
export const Closed: Story = {
    args: {
        label: "Closed",
        iconName: "status-stop",
        status: "closed",
    },
};
export const Done: Story = {
    args: {
        label: "Done",
        iconName: "status-filled",
        status: "done",
    },
};
export const Draft: Story = {
    args: {
        label: "Draft",
        iconName: "status-bordered",
        status: "draft",
    },
};
export const Plus: Story = {
    args: {     
        iconName: "plus",   
        isPill:false
    },
};



