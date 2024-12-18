import type { Meta, StoryObj } from "@storybook/react";
import { SectionTimelineImage } from "@/app/pages/sections/SectionTimelineImage";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Pages/Sections/Timeline (image)",
    component: SectionTimelineImage,
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
} satisfies Meta<typeof SectionTimelineImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
