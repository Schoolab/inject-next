import type { Meta, StoryObj } from "@storybook/react";
import { SectionGallery } from "@/app/content/sections/gallery/SectionGallery";

const meta = {
    title: "Content/Landing Sections/Gallery",
    component: SectionGallery,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{},
} satisfies Meta<typeof SectionGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const MediaRight: Story = {
    args: {
        mediaSide: "right",
    },
};

export const WithColumns: Story = {
    args: {
        content: ``,
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
