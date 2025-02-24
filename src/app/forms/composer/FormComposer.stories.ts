import type { Meta, StoryObj } from "@storybook/react";
import { FormComposer } from "@/app/forms/composer/FormComposer";

const meta = {
    title: "Forms/Composer",
    component: FormComposer,
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
    },
    args:{
        required: false,
        disabled: false,
    },

} satisfies Meta<typeof FormComposer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
