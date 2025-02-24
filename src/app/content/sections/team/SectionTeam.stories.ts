import type { Meta, StoryObj } from "@storybook/react";
import { SectionTeam } from "@/app/content/sections/team/SectionTeam";

const meta = {
    title: "Content/Landing Sections/Team",
    component: SectionTeam,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{
        columns: [
            {
                image: "img/thumbnails/julien.jpg",
                label: "Julien Fayet",
                caption: "Founder, Schoolab",
            },
            {
                image: "img/thumbnails/sasha.jpg",
                label: "Sasha Lehmann",
                caption: "Marketing, Freelance",
            },
            {
                image: "img/thumbnails/marjorie.jpg",
                label: "Marjorie Pouzadoux Bokobza",
                caption: "DG, Schoolab",
            },
            {
                image: "img/thumbnails/guillaume.jpg",
                label: "Guillaume Larieu",
                caption: "PM CPi, Schoolab",
            },
            {
                image: "img/thumbnails/emma.jpg",
                label: "Emma Salvarelli",
                caption: "Customer Success, Schoolab",
            },
        ],
    },
} satisfies Meta<typeof SectionTeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const WithButtons: Story = {
    args: {
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};
