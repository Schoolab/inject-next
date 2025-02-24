import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/app/components/avatars/Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Avatars/Avatar",
    component: Avatar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        isOval: { control: "boolean" },
        isBordered: { control: "boolean" },
    },
    args: {
        isOval: true,
        isBordered: false
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        isOval: true,
        iconName: "account",
    },
};

export const Image: Story = {
    args: {
        isOval: true,
        iconName: "account",
        image: "img/thumbnails/john-doe.webp"
    },
};