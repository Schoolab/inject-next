import type { Meta, StoryObj } from "@storybook/react";
import { FormInputGroup } from "@/app/forms/input-group/FormInputGroup";

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
