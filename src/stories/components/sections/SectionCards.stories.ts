import type { Meta, StoryObj } from "@storybook/react";
import { SectionCards } from "@/app/components/sections/SectionCards";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Landing Sections/Cards",
    component: SectionCards,
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
                backgroundColor: "var(--bg-brand-primary)",
                label: "Open Innovation",
                content: `
                    <p class="font-weight-bold mb-2xs">Innovating with students</p>
                    <p class="small">from the most prestigious French and international schools and universities</p>
                    <p class="font-weight-bold mb-2xs">Innovating with startups</p>
                    <p class="small">from across all industries and geographical zones</p>
                `,
            },
            {
                backgroundColor: "var(--bg-brand-secondary)",
                label: "Project Acceleration",
                content: `
                    <p class="font-weight-bold mb-2xs">Launching your innovation projects faster</p>
                    <p class="small">with our entrepreneurs, designers, developers and analysts</p>
                    <p class="font-weight-bold mb-2xs">Designing and running your intrapreneurship programs</p>
                    <p class="small">with our experts and entrepreneurial coaches</p>
                `,
            },
            {
                backgroundColor: "var(--bg-brand-tertiary)",
                label: "Coaching & Training",
                content: `
                    <p class="font-weight-bold mb-2xs">Leading your collective efforts</p>
                    <p class="small">Hackathons, Seminars, Innovation Labs, Learning Expeditions</p>
                    <p class="font-weight-bold mb-2xs">Training your leaders</p>
                    <p class="small">on innovation, digital and impact</p>
                `,
            },
        ]
    },
} satisfies Meta<typeof SectionCards>;

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
