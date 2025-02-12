import type { Meta, StoryObj } from "@storybook/react";
import { FormOption } from "@/app/forms/FormOption";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Forms/Option",
    component: FormOption,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],

    argTypes: {
        checked: { control: "boolean" },
        disabled: { control: "boolean" },
        card: { control: "boolean" },
    },

    args: {
        type: "checkbox",
        label: "Category",
        // checked: false,
        disabled: false,
        card: false,
    },

} satisfies Meta<typeof FormOption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const Radio: Story = {
    args: {
        type: "radio",
    },
};

export const Switch: Story = {
    args: {
        type: "switch",
    },
};

export const Checked: Story = {
    args: {
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Caption: Story = {
    args: {
        caption: "This user can manage categories of this organization’s programs",
    },
};

export const Card: Story = {
    args: {
        card: true,
        caption: "This user can manage categories of this organization’s programs",
    },
};

export const Icon: Story = {
    args: {
        card: true,
        caption: "This user can manage categories of this organization’s programs",
        icon: "tag",
    },
};