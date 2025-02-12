import type { Meta, StoryObj } from "@storybook/react";
import { SectionContent } from "@/app/components/sections/SectionContent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Landing Sections/Content",
    component: SectionContent,
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
    args: {
        mediaSide: "left",
    },
} satisfies Meta<typeof SectionContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        mediaSide: "left",
    },
};

export const MediaRight: Story = {
    args: {
        mediaSide: "right",
    },
};

export const WithColumns: Story = {
    args: {
        mediaSide: "left",
        columns: [
            { label: "20 years", caption: "of experience in design thinking and lean startup" },
            { label: "700+", caption: "accelerated startups" },
            { label: "30,000+", caption: "people who have used our digital platform" },
            { label: "250+", caption: "corporate innovation projects initiated and accelerated"},
        ],
    },
};

export const WithButtons: Story = {
    args: {
        mediaSide: "left",
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};

export const WithColumnsAndButtons: Story = {
    args: {
        mediaSide: "left",
        columns: [
            { label: "20 years", caption: "of experience in design thinking and lean startup" },
            { label: "700+", caption: "accelerated startups" },
        ],
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};
