import type { Meta, StoryObj } from "@storybook/react";
import { ItemRessource } from "@/app/components/items/Ressource";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Item/Ressource",
    component: ItemRessource,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        isSmall: { control: "boolean" },
    },
    args: {
        isSmall: false,
    },
} satisfies Meta<typeof ItemRessource>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        ressource: {
            name: "Intro to Ideation.pdf",
            type: "PDF File",
            details: "420 KB",
        },
        action: "download",
        icon: {
            name: "file-pdf-box",
            addClass: "text-danger",
        },
    },
};
export const Small: Story = {
    args: {
        ressource: {
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
    },
};

export const WithImage: Story = {
    args: {
        ressource: {
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
    },
};
