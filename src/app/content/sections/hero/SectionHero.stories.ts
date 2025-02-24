import type { Meta, StoryObj } from "@storybook/react";
import { SectionHero } from "@/app/content/sections/hero/SectionHero";

const meta = {
    title: "Content/Landing Sections/Hero",
    component: SectionHero,
    parameters: {
        layout: "fullscreen",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
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

export const Default: Story = {
    args: {
    },
};
