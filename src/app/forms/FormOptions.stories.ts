import type { Meta, StoryObj } from "@storybook/react";
import { FormOptions } from "@/app/forms/FormOptions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Forms/Options",
    component: FormOptions,
    parameters: {
        // Optionsal parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        addable: true,
        deletable: false,
        options: [
            { id: "option1", label: "Option #1" },
        ],
        style: {
            width: "24rem",
        }
    },

} satisfies Meta<typeof FormOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const Multiple: Story = {
    args: {
        deletable: true,
        options: [
            { id: "option1", label: "Option #1", value: "Option #1" },
            { id: "option2", label: "Option #2" },
        ],
    },
};

export const Autofocus: Story = {
    args: {
        autofocus: true,
    },
};

