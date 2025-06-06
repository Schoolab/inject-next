import type { Meta, StoryObj } from "@storybook/react";
import { ItemResource } from "@/app/components/items/ItemResource";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Items/Resource",
    component: ItemResource,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        isSmall: { control: "boolean" },
        options: { control: "boolean" },
    },
    args: {
        isSmall: false,
    },
} satisfies Meta<typeof ItemResource>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        resource: {
            name: "Intro to Ideation.pdf",
            type: "PDF File",
            details: "420 KB",
        },
        action: "download",
        icon: {
            name: "file-pdf-box",
            addClass: "text-danger",
        },
        options: true,
    },
};
export const Small: Story = {
    args: {
        resource: {
            name: "Intro to Ideation.pdf",
            type: "PDF File",
            details: "420 KB",
        },
        action: "download",
        icon: {
            name: "file-pdf-box",
            addClass: "text-danger",
        },
        isSmall: true,
        options: true,
    },
};

export const WithImage: Story = {
    args: {
        resource: {
            name: "Intro to Ideation.pdf",
            type: "PDF File",
            details: "420 KB",
        },
        action: "download",
        icon: {
            name: "file-pdf-box",
            addClass: "text-danger",
        },
        img: "img/placeholder-ideation-cover.png",
        options: true,
    },
};

export const WithCover: Story = {
    args: {
        resource: {
            name: "Intro to Ideation.pdf",
            type: "PDF File",
            details: "420 KB",
        },
        action: "download",
        icon: {
            name: "file-pdf-box",
            addClass: "text-danger",
        },
        img: "img/placeholder-ideation-cover.png",
        cover: true,
        options: true,
    },
};
