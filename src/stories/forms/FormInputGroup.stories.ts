import type { Meta, StoryObj } from "@storybook/react";
import { FormInputGroup } from "@/app/forms/FormInputGroup";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Forms/Input Group",
    component: FormInputGroup,
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        style: {
            width: "32rem",
        }
    },

} satisfies Meta<typeof FormInputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
};

export const Prepend: Story = {
    args: {
        prependText: "@",
    },
};

export const Append: Story = {
    args: {
        appendText: "@theschoolab.com",
    },
};
