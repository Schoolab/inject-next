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
        id: "radio",
        name: "radio",
        type: "radio",
    },
};

export const Switch: Story = {
    args: {
        id: "switch",
        name: "switch",
        type: "switch",
    },
};

export const Checked: Story = {
    args: {
        id: "checked",
        name: "checked",
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        id: "disabled",
        name: "disabled",
        disabled: true,
    },
};

export const Caption: Story = {
    args: {
        id: "caption",
        name: "caption",
        caption: "This user can manage categories of this organization’s programs",
    },
};

export const Card: Story = {
    args: {
        id: "card",
        name: "card",
        card: true,
        caption: "This user can manage categories of this organization’s programs",
    },
};

export const Icon: Story = {
    args: {
        id: "icon",
        name: "icon",
        card: true,
        caption: "This user can manage categories of this organization’s programs",
        icon: "tag",
    },
};

export const Image: Story = {
    args: {
        id: "content",
        name: "content",
        card: true,
        hideControl: true,
        label: "Content",
        image: "img/covers/section_content-left.png",
    },
};

