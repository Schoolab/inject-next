import type { Meta, StoryObj } from "@storybook/react";
import { SectionCallToAction } from "@/app/components/sections/SectionCallToAction";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Landing Sections/Call to action",
    component: SectionCallToAction,
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
        buttons: [
            { type: "primary", label: "Join today"},
            { type: "default", label: "Learn more" },
        ],
    },
} satisfies Meta<typeof SectionCallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};
