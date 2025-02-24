import type { Meta, StoryObj } from "@storybook/react";
import { SectionNumber } from "@/app/content/sections/number/SectionNumber";

const meta = {
    title: "Content/Landing Sections/Number",
    component: SectionNumber,
    parameters: {
        layout: "padded",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args:{
        numberLabel: "30,000+",
        numberCaption: "people who have used our digital platform",
    },
} satisfies Meta<typeof SectionNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const WithSubtitle: Story = {
    args: {
        subtitle: "Use this line to summarize this section. View it as a TL:DR;",
    },
};

export const WithContent: Story = {
    args: {
        subtitle: "Use this line to summarize this section. View it as a TL:DR;",
        content: `
            <p>Write a really short description to briefly explain what are the objectives</p>
            <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
        `,
    },
};

export const WithButtons: Story = {
    args: {
        buttons: [
            { type: "primary", label: "Join today" },
            { type: "default", label: "Learn more" },
        ],
    },
};
