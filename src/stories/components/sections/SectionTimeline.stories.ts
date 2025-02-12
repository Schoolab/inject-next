import type { Meta, StoryObj } from "@storybook/react";
import { SectionTimeline } from "@/app/components/sections/SectionTimeline";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Landing Sections/Timeline",
    component: SectionTimeline,
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
} satisfies Meta<typeof SectionTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
    },
};
