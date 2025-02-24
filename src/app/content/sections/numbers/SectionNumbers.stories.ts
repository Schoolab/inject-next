import type { Meta, StoryObj } from "@storybook/react";
import { SectionNumbers } from "@/app/content/sections/numbers/SectionNumbers";

const meta = {
    title: "Content/Landing Sections/Numbers",
    component: SectionNumbers,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
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

export const Default: Story = {
    args: {
    },
};
