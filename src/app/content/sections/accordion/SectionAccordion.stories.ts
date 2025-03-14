import type { Meta, StoryObj } from "@storybook/react";
import { SectionAccordion } from "@/app/content/sections/accordion/SectionAccordion";

const meta = {
    title: "Content/Landing Sections/Accordion",
    component: SectionAccordion,
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
        title: "Frequently Asked Questions",
        accordions: [
            {
                title: "Why use an Open Innovation platform for a challenge?",
                content: `
                    <p>Within an inspiring ecosystem, using an Open Innovation platform allows you to leverage high-performance technologies. Specifically, the Open Innovation platform enhances a company's strategy to tackle the challenge. The numerous services and technological tools available facilitate online activity management for all collaborators.</p>
                `,
            },
            {
                title: "Can we automatically generate certificates of completion during Workshops/events?",
                content: `
                    <p>Yes, the services available on the Schoolab digital platform include the ability to automatically generate certificates of completion during your Workshops/events.</p>
                `,
            },
            {
                title: "Is it possible to create an interface between the digital platform and a company's IT department?",
                content: `
                    <p>Yes. It is possible to create an interface between the digital platform and a company's IT department.</p>
                `,
            },
        ],
    },
} satisfies Meta<typeof SectionAccordion>;

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
