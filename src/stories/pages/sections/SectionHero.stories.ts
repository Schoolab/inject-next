import type { Meta, StoryObj } from "@storybook/react";
import { SectionHero } from "@/app/pages/sections/SectionHero";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Pages/Sections/Hero",
    component: SectionHero,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
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
        mediaSide: "right",
        columns: [
            { label: "Dates", caption: "July 4 – Sept 2, 2024"},
            { label: "Location", caption: "Schoolab St-Lazare"},
        ],
        buttons: [
            { type: "primary", label: "Join today"},
            { type: "default", label: "Learn more" },
        ],
    },
} satisfies Meta<typeof SectionHero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};
