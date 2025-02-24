import type { Meta, StoryObj } from "@storybook/react";
import { CardActions } from "@/app/components/cards/CardActions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Actions",
    component: CardActions,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
     // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
     tags: ["autodocs"],
     argTypes: {},
    args: {
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardActions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        title: "Join the program",
        metas: [
            { label: "Applicants" },
            { iconName: "account", label: "143", addClass: "font-weight-bold" },
        ],
        buttons: [
            { label: "Join", type: "primary", link: "#", iconEndName: "new-tab" },
            { label: "Learn more", type: "default", link: "#", iconEndName: "new-tab" },
        ],
    },
};

export const WithProgress: Story = {
    args: {
        title: "Final selection",
        metas: [
            { label: "Average" },
            { iconName: "rating", label: "4.8", addClass: "font-weight-bold text-warning" },
        ],
        progress: 2,
        tasksNb: 8,
        buttons: [
            { label: "Evaluate", type: "primary", link: "#", iconStartName: "rating" },
            { label: "Participations", type: "default", link: "#" },
        ],
    },
};

export const Status: Story = {
    args: {
        title: "Application status",
        status: "draft",
        buttons: [
            { label: "Edit", type: "primary", link: "#" },
            { label: "Delete application", type: "default", link: "#" },
        ],
    },
};

export const NoButton: Story = {
    args: {
        title: "Application status",
        status: "review",
    },
};
