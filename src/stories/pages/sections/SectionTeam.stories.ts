import type { Meta, StoryObj } from "@storybook/react";
import { SectionTeam } from "@/app/pages/sections/SectionTeam";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Pages/Sections/Team",
    component: SectionTeam,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        
    },
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
