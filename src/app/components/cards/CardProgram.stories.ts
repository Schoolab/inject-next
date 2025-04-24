import type { Meta, StoryObj } from "@storybook/react";
import { CardProgram } from "@/app/components/cards/CardProgram";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Program",
    component: CardProgram,
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
        name: "Impact Innovators",
        status: "draft",
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardProgram>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};
export const Random_color_1: Story = {
    args: {
        cardImageAddClass:"bg-random-1",
    },
};
export const Random_color_2: Story = {
    args: {
        cardImageAddClass:"bg-random-2",
    },
};
export const Random_color_3: Story = {
    args: {
        cardImageAddClass:"bg-random-3",
    },
};
export const Random_color_4: Story = {
    args: {
        cardImageAddClass:"bg-random-4",
    },
};
export const Random_color_5: Story = {
    args: {
        cardImageAddClass:"bg-random-5",
    },
};
export const Random_color_6: Story = {
    args: {
        cardImageAddClass:"bg-random-6",
    },
};
export const Random_color_7: Story = {
    args: {
        cardImageAddClass:"bg-random-7",
    },
};
export const Random_color_8: Story = {
    args: {
        cardImageAddClass:"bg-random-8",
    },
};

export const Cover: Story = {
    args: {
        cover: "img/program-innovators.png",
    },
}

export const Pinned: Story = {
    args: {
        pinned: true,
    },
};

export const External: Story = {
    args: {
        externalProgram: "Schoolab",
    },
};

export const WithMembers: Story = {
    args: {
        members: 660,
    },
};

export const WithCategories: Story = {
    args: {
        categories: [
            { label: "Plastic" },
            { label: "Food" },
            { label: "DEI" },
        ],
    },
};

export const WithLinks: Story = {
    args: {
        links: [
            { iconName: "settings", label: "Manage program", link: "#" },
            { iconLetter: "H", label: "Open project overview", link: "#" },
            { iconName: "public-page", label: "Public page", link: "#" },
        ],
    },
};

export const WithActions: Story = {
    args: {
        externalProgram: "Schoolab",
        actions: [
            { 
                title: "Join the program",
                metas: [
                    { label: "Applicants" },
                    { iconName: "account", label: "143", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Join", type: "primary", link: "#", iconEndName: "new-tab" },
                    { label: "Learn more", type: "default", link: "#", iconEndName: "new-tab" },
                ],
            }
        ],
    },
};

export const Draft: Story = {
    args: {
        categories: [
            { label: "Plastic" },
            { label: "Food" },
            { label: "DEI" },
        ],
        status: "draft",
        links: [
            { iconName: "settings", label: "Manage program", link: "#" },
        ],
    },
};

export const Open: Story = {
    args: {
        cover: "img/program-innovators.png",
        members: 660,
        categories: [
            { label: "Plastic" },
            { label: "Food" },
            { label: "DEI" },
        ],
        status: "open",
        actions: [
            { 
                buttons: [
                    { label: "Join", type: "primary", link: "#" },
                    { label: "Learn more", type: "default", link: "#" },
                ],
            }
        ],
    },
};

export const InProgress: Story = {
    args: {
        cover: "img/program-innovators.png",
        members: 803,
        categories: [
            { label: "Plastic" },
            { label: "Food" },
            { label: "DEI" },
        ],
        status: "progress",
        links: [
            { iconLetter: "H", label: "Open project overview", link: "#" },
        ],
    },
};

export const Done: Story = {
    args: {
        cover: "img/program-innovators.png",
        members: 803,
        categories: [
            { label: "Plastic" },
            { label: "Food" },
            { label: "DEI" },
        ],
        status: "done",
        links: [
            { iconName: "public-page", label: "Public page", link: "#" },
        ],
    },
};
