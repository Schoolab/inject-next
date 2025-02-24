import type { Meta, StoryObj } from "@storybook/react";
import { SectionColumns } from "@/app/content/sections/columns/SectionColumns";

const meta = {
    title: "Content/Landing Sections/Columns",
    component: SectionColumns,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
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
