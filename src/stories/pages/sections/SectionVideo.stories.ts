import type { Meta, StoryObj } from "@storybook/react";
import { SectionVideo } from "@/app/pages/sections/SectionVideo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Pages/Sections/Video",
    component: SectionVideo,
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
        mediaSide: "right",
    },
} satisfies Meta<typeof SectionVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        mediaSide: "right",
    },
};

export const MediaLeft: Story = {
    args: {
        mediaSide: "left",
    },
};

export const WithContent: Story = {
    args: {
        content: `
      <p>Here is the content from the WYSIWYG.</p>
      <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
    `,
    },
};

export const WithButtons: Story = {
    args: {
        content: `
      <p>Here is the content from the WYSIWYG.</p>
      <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
    `,
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};
