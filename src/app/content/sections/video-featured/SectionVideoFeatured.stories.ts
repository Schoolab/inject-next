import type { Meta, StoryObj } from "@storybook/react";
import { SectionVideoFeatured } from "@/app/content/sections/video-featured/SectionVideoFeatured";

const meta = {
    title: "Content/Landing Sections/Video (featured)",
    component: SectionVideoFeatured,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{},
} satisfies Meta<typeof SectionVideoFeatured>;

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