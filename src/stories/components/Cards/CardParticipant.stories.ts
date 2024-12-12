import type { Meta, StoryObj } from "@storybook/react";
import { CardParticipant } from "@/app/components/cards/CardParticipant";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Participant",
    component: CardParticipant,
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
        name: "Alexandra Jolly",
        metas: [
            { label: "Paris, FR" },
        ],
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardParticipant>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const WithAvatar: Story = {
    args: {
        avatar: "img/avatar-alexandra.jpeg",
    },
};

export const Vertical: Story = {
    args: {
        avatar: "img/avatar-alexandra.jpeg",
        vertical: true,
        showButton: true,
    },
};

export const WithRole: Story = {
    args: {
        avatar: "img/avatar-pierre.jpeg",
        name: "Pierre Lemeteil",
        metas: [
            { label: "Bordeaux, FR" },
        ],
        role: "admin"
    },
};

export const WithTags: Story = {
    args: {
        avatar: "img/avatar-alexandra.jpeg",
        tags: [
            { label: "UX/UI Design" },
            { label: "Product Design" },
            { label: "Design Thinking" },
            { label: "Product" },
        ],
    },
};

export const Evaluations: Story = {
    args: {
        avatar: "img/avatar-alexandra.jpeg",
        vertical: true,
        tags: [
            { label: "UX/UI Design" },
            { label: "Product Design" },
            { label: "Design Thinking" },
            { label: "Product" },
        ],
        actions: [
            { 
                title: "Final selection",
                metas: [
                    { label: "Average" },
                    { iconName: "rating", label: "4.8", addClass: "font-weight-bold text-warning" },
                ],
                progress: 2,
                tasksNb: 8,
                buttons: [
                    { label: "Evaluate", type: "primary", link: "#", iconStartName: "rating" },
                    { label: "Participation", type: "default", link: "#" },
                ],
            }
        ],
    },
};
