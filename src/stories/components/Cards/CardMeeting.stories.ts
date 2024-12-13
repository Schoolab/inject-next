import type { Meta, StoryObj } from "@storybook/react";
import { CardMeeting } from "@/app/components/cards/CardMeeting";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Meeting",
    component: CardMeeting,
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
        avatar: "img/avatar-marine.jpeg",
        name: "Marine Martinez",
        project: "Healthify",
        date: "Tomorrow",
        time: "2 PM (30min)",
        status: "accepted",
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardMeeting>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        
    },
};

export const Today: Story = {
    args: {
        today: true,
    },
};

export const Project: Story = {
    args: {
        mainAvatar: "project",
        metas: [
            { iconName: "members", label: "Terence Irvin, Alexandra Jolly" },
        ],
    },
};

export const Notes: Story = {
    args: {
        showRelation: true,
        mainAvatar: "project",
        links: [
            { label: "Access to expert meeting notes", iconName: "file-document-box", link: "#" },
        ],
    },
};

export const Pending: Story = {
    args: {
        showRelation: true,
        mainAvatar: "project",
        links: [
            { label: "Access to expert meeting notes", iconName: "file-document-box", link: "#" },
        ],
        status: "pending",
    },
};

export const Flagged: Story = {
    args: {
        showRelation: true,
        mainAvatar: "project",
        links: [
            { label: "Access to expert meeting notes", iconName: "file-document-box", link: "#" },
        ],
        status: "success",
    },
};
