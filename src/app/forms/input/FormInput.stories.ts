import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "@/app/forms/input/FormInput";

const meta = {
    title: "Forms/Input",
    component: FormInput,
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        required: { control: "boolean" },
        disabled: { control: "boolean" },
        readonly: { control: "boolean" },
    },
    args:{
        required: false,
        disabled: false,
        readonly: false,
    },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        id: "name",
        type: "text",
        placeholder: "A short name",
        required: false,
        disabled: false,
        readonly: false,
    }
};

export const MaxLength: Story = {
    args: {
        id: "name",
        type: "text",
        placeholder: "A short name",
        required: false,
        disabled: false,
        readonly: false,
        maxLength: 25,
    }
};

export const Readonly: Story = {
    args: {
        id: "name",
        type: "text",
        placeholder: "A short name",
        required: false,
        disabled: false,
        readonly: true,
    }
};

export const Disabled: Story = {
    args: {
        id: "name",
        type: "text",
        placeholder: "A short name",
        required: false,
        disabled: true,
        readonly: false,
    }
};

export const Number: Story = {
    args: {
        id: "name",
        type: "number",
        placeholder: "0",
        required: false,
        disabled: false,
        readonly: false,
    }
};