import type { Meta, StoryObj } from "@storybook/react";
import { SectionContent2col } from "@/app/content/sections/SectionContent2col";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Content/Landing Sections/Content (2 columns)",
    component: SectionContent2col,
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
        
    },
} satisfies Meta<typeof SectionContent2col>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};

export const WithMedia: Story = {
    args: {
        mediaUrl: "https://www.theschoolab.com/wp-content/uploads/2022/06/Homepage-header-diversity-scaled.jpg",
    },
};

export const WithColumns: Story = {
    args: {
        columns: [
            { label: "20 years", caption: "of experience in design thinking and lean startup" },
            { label: "700+", caption: "accelerated startups" },
            { label: "24", caption: "countries where we operate" },
            { label: "30,000+", caption: "people who have used our digital platform" },
        ]
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

export const WithColumnsAndButtons: Story = {
    args: {
        columns: [
            { label: "20 years", caption: "of experience in design thinking and lean startup" },
            { label: "700+", caption: "accelerated startups" },
            { label: "24", caption: "countries where we operate" },
            { label: "30,000+", caption: "people who have used our digital platform" },
        ],
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};