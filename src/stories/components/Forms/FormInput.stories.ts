import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "@/app/components/forms/FormInput";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Form/Input",
    component: FormInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

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