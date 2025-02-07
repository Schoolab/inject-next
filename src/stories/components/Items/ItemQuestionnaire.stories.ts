import type { Meta, StoryObj } from "@storybook/react";
import { ItemQuestionnaire } from "@/app/components/items/ItemQuestionnaire";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Questionnaire",
    component: ItemQuestionnaire,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: { control: "radio" },
        required: { control: "boolean" },
        isPrivate: { control: "boolean" },
        locked: { control: "boolean" },
        collapsable: { control: "boolean" },
    },
    args: {
        id: "questionDefault",
        type: "text",
        label: "Question Label",
        required: false,
        isPrivate: false,
        locked: false,
        collapsable: false,
        style: {
            width: "32rem",
        },
    },
} satisfies Meta<typeof ItemQuestionnaire>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        id: "questionDefault",
    },
};

export const Caption: Story = {
    args: {
        id: "questionCaption",
        caption: "n options: [list options here]",
    },
};

export const Required: Story = {
    args: {
        id: "questionRequired",
        required: true,
    },
};

export const PrivateAndLocked: Story = {
    args: {
        id: "questionPrivateAndLocked",
        isPrivate: true,
        locked: true,
    },
};


export const Collapsable: Story = {
    args: {
        id: "questionCollapsable",
        caption: "n options: [list options here]",
        collapsable: true,
    },
};
