import type { Meta, StoryObj } from "@storybook/react";
import { SectionNumbers } from "@/app/content/sections/SectionNumbers";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Content/Landing Sections/Numbers",
    component: SectionNumbers,
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
        title: "Our programs to support your transformation",
        columns: [
            { label: "20 years", caption: "of experience in design thinking and lean startup" },
            { label: "700+", caption: "accelerated startups" },
            { label: "30,000+", caption: "people who have used our digital platform" },
            { label: "250+", caption: "corporate innovation projects initiated and accelerated"},
        ]
    },
} satisfies Meta<typeof SectionNumbers>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};
