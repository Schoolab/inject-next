import type { Meta, StoryObj } from "@storybook/react";
import { SectionColumns } from "@/app/content/sections/SectionColumns";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Content/Landing Sections/Columns",
    component: SectionColumns,
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
        title: "Our programs to support your transformation",
        subtitle: "Conception and deployment of your innovation strategy",
        columns: [
            {
                image: "img/placeholder-events-green.png",
                label: "Open Innovation",
                content: `
                    <p>Innovating with students from the most prestigious French and international schools and universities</p>
                `,
            },
            {
                image: "img/placeholder-events-orange.png",
                label: "Project Acceleration",
                content: `
                    <p>Launching your innovation projects faster with our entrepreneurs, designers, developers and analysts</p>
                `,
            },
            {
                image: "img/placeholder-events-pink.png",
                label: "Coaching & Training",
                content: `
                    <p>Leading your collective efforts: Hackathons, Seminars, Innovation Labs, Learning Expeditions</p>
                `,
            },
        ]
    },
} satisfies Meta<typeof SectionColumns>;

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
