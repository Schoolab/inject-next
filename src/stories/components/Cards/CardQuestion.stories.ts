import type { Meta, StoryObj } from "@storybook/react";
import { CardQuestion } from "@/app/components/cards/CardQuestion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Question",
    component: CardQuestion,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
     // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
     tags: ["autodocs"],
     argTypes: {
        liked: { control: "boolean" },
        commented: { control: "boolean" },
        copyLink: { control: "boolean" },
    },
    args: {
        avatar: "https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg",
        author: "Nora Hechelef",
        content: `
            <p>In project management, the term "critical path" is often mentioned. But what does it actually mean? Could you provide an example to illustrate its importance?</p>
        `,
        tags: [
            { label: "Project Management" },
        ],
        status: "pending",
        liked: false,
        commented: false,
        copyLink: true,
        style: {
            width: "32rem",
        },
    },

} satisfies Meta<typeof CardQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const Resolved: Story = {
    args: {
        status: "resolved",
    },
};

export const WithResponses: Story = {
    args: {
        status: "resolved",
        responses: [
            { 
                avatar: "https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg",
                author: "Sasha Lehmann", 
                role: "expert", 
                datetime: "Oct 14 at 9:24 AM",
                content: `
                    <p>The critical path is the longest sequence of activities that defines the project's minimum duration. Delays will push back the completion date.</p>
                `,
            },
        ],
    },
};

export const WithDetails: Story = {
    args: {
        showDetails: true,
    },
};

