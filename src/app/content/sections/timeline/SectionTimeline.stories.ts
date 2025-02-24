import type { Meta, StoryObj } from "@storybook/react";
import { SectionTimeline } from "@/app/content/sections/timeline/SectionTimeline";

const meta = {
    title: "Content/Landing Sections/Timeline",
    component: SectionTimeline,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{},
} satisfies Meta<typeof SectionTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};
