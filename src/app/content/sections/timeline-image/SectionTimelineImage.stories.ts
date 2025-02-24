import type { Meta, StoryObj } from "@storybook/react";
import { SectionTimelineImage } from "@/app/content/sections/timeline-image/SectionTimelineImage";

const meta = {
    title: "Content/Landing Sections/Timeline (image)",
    component: SectionTimelineImage,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{},
} satisfies Meta<typeof SectionTimelineImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const WithImages: Story = {
    args: {
        columns: [
            { image: "https://s3.eu-west-3.amazonaws.com/media-inject.schoolab.tools/schoolab/landing-page/earth.png", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
            { image: "https://s3.eu-west-3.amazonaws.com/media-inject.schoolab.tools/schoolab/landing-page/leaf.png", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
            { image: "https://s3.eu-west-3.amazonaws.com/media-inject.schoolab.tools/schoolab/landing-page/trophy.png", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
        ],
    },
};
