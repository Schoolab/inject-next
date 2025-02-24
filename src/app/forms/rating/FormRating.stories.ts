import type { Meta, StoryObj } from "@storybook/react";
import { FormRating } from "@/app/forms/rating/FormRating";

const meta = {
    title: "Forms/Rating",
    component: FormRating,
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        defaultValue: {
            control: "number",
        },
    },
    args: {
        defaultValue: 0,
    }
} satisfies Meta<typeof FormRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultValue: Story = {
    args: {
        defaultValue: 3,
    },
};

export const FormControl: Story = {
    args: {
        addClass: "form-control d-flex align-items-center",
    },
};

export const Highlight: Story = {
    args: {
        addClass: "bg-highlight rounded px-md py-sm d-flex align-items-center",
    },
};

