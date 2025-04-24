import type { Meta, StoryObj } from "@storybook/react";
import { CardProject } from "@/app/components/cards/CardProject";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Project",
    component: CardProject,
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
        pinned: { control: "boolean" },
    },
    args: {
        pinned: false,
        name: "Healthify",
        members: 2,
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardProject>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const Random_color_1: Story = {
    args: {
        cardImageAddClass:"bg-random-1"
    },
};
export const Random_color_2: Story = {
    args: {
        cardImageAddClass:"bg-random-2"
    },
};
export const Random_color_3: Story = {
    args: {
        cardImageAddClass:"bg-random-3"
    },
};
export const Random_color_4: Story = {
    args: {
        cardImageAddClass:"bg-random-4"
    },
};
export const Random_color_5: Story = {
    args: {
        cardImageAddClass:"bg-random-5"
    },
};
export const Random_color_6: Story = {
    args: {
        cardImageAddClass:"bg-random-6"
    },
};
export const Random_color_7: Story = {
    args: {
        cardImageAddClass:"bg-random-7"
    },
};
export const Random_color_8: Story = {
    args: {
        cardImageAddClass:"bg-random-8"
    },
};


export const Cover: Story = {
    args: {
        cover: "img/project-healthify.png",
    },
}

export const Pinned: Story = {
    args: {
        cover: "img/project-healthify.png",
        pinned: true,
    },
};

export const Program: Story = {
    args: {
        cover: "img/project-healthify.png",
        program: "Schoolab",
    },
};

export const Tags: Story = {
    args: {
        cover: "img/project-healthify.png",
        tags: [
            { label: "Health" },
            { label: "Sustainable" },
            { label: "More" },
            { label: "and more" },
        ]
    },
};

export const WithLinks: Story = {
    args: {
        cover: "img/project-healthify.png",
        links: [
            { iconName: "settings", label: "Manage project", link: "#" },
        ],
    },
};

export const WithActions: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "Support this project",
                metas: [
                    { label: "Followers" },
                    { iconName: "bookmark", label: "200", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Follow", type: "primary", link: "#", iconStartName: "bookmark-outline" },
                    { label: "Learn more", type: "default", link: "#" },
                ],
            }
        ],
    },
};

export const Join: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                buttons: [
                    { label: "Join", type: "primary", link: "#" },
                    { label: "Follow", type: "default", link: "#", iconStartName: "bookmark-outline" },
                ],
            }
        ],
    },
};

export const Votes: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "Selection Round #1",
                metas: [
                    { label: "Upvotes" },
                    { iconName: "thumb-up", label: "19", addClass: "font-weight-bold text-primary" },
                ],
                buttons: [
                    { label: "Upvote", type: "primary", link: "#", iconStartName: "thumb-up" },
                    { label: "Follow", type: "default", link: "#", iconStartName: "bookmark-outline" },
                ],
            }
        ],
    },
};

export const Evaluations: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "Final selection",
                metas: [
                    { label: "Average" },
                    { iconName: "rating", label: "4.8", addClass: "font-weight-bold text-warning" },
                ],
                buttons: [
                    { label: "Evaluate", type: "primary", link: "#", iconStartName: "rating" },
                    { label: "Follow", type: "default", link: "#", iconStartName: "bookmark-outline" },
                ],
            }
        ],
    },
};

export const Coaching: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "3 coaching sessions",
                metas: [
                    { label: "Total hours" },
                    { iconName: "time", label: "1h30", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Add session", type: "primary", link: "#", iconStartName: "plus-circle" },
                    { label: "Follow", type: "default", link: "#", iconStartName: "bookmark-outline" },
                ],
            }
        ],
    },
};

export const Application: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "Application status",
                status: "submitted",
                buttons: [
                    { label: "Edit", type: "primary", link: "#", iconStartName: "pencil" },
                    { label: "Delete application", type: "default", link: "#" },
                ],
            }
        ],
    },
};

export const ApplicationReview: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "Application status",
                status: "review",
            }
        ],
    },
};

export const ApplicationRejected: Story = {
    args: {
        cover: "img/project-healthify.png",
        actions: [
            { 
                title: "Application status",
                status: "rejected",
                buttons: [
                    { label: "Delete application", type: "default", link: "#" },
                ],
            }
        ],
    },
};