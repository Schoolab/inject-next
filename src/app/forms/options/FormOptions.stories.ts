import type { Meta, StoryObj } from "@storybook/react";
import { FormOptions } from "@/app/forms/options/FormOptions";

const meta = {
    title: "Forms/Options",
    component: FormOptions,
    parameters: {
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

