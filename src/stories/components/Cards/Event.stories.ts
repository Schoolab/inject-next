import type { Meta, StoryObj } from "@storybook/react";
import { CardEvent } from "@/app/components/cards/CardEvent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Event",
    component: CardEvent,
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
        pin: { control: "boolean" },
        ongoing: { control: "boolean" },
    },
    args: {
        pin: false,
        ongoing: false,
    },
} satisfies Meta<typeof CardEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10am",
            endTime: "11am",
        },
        location: "Online",
        title: "Event Not started",
        img: "https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg",
    },
};

export const Ongoing: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10am",
            endTime: "11am",
        },
        ongoing: true,
        location: "Hybride",
        title: "Ongoing Event Name",
        img: "https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg",
    },
};

export const Condensed: Story = {
    args: {
        start: {
            month: "June",
            day: "8",
            startTime: "10am",
            endTime: "11am",
        },
        location: "InPerson",
        title: "Condensed Event ",
    },
};
