import type { Meta, StoryObj } from "@storybook/react";
import { Notif } from "@/app/components/badges/notifs/Notif";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Badges/Notifs",
    component: Notif,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],

} satisfies Meta<typeof Notif>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Interactive: Story = {
    args: {
        label: "New",
        status: "interactive"     
    }
};

export const Accent: Story = {
    args: {
        label: "8",
        status: "accent" 
    }
};

export const Highlight: Story = {
    args: {
        label: "0",
        status: "highlight"
    }
};