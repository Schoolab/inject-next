import type { Meta, StoryObj } from "@storybook/react";
import { SectionCallToAction } from "@/app/content/sections/cta/SectionCallToAction";

const meta = {
    title: "Content/Landing Sections/Call to action",
    component: SectionCallToAction,
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
        buttons: [
            { type: "primary", label: "Join today"},
            { type: "default", label: "Learn more" },
        ],
    },
} satisfies Meta<typeof SectionCallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};
