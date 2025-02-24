import type { Meta, StoryObj } from "@storybook/react";
import { SectionVideo } from "@/app/content/sections/video/SectionVideo";

const meta = {
    title: "Content/Landing Sections/Video",
    component: SectionVideo,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{
        mediaSide: "right",
    },
} satisfies Meta<typeof SectionVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

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
