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
export const Random_color_1: Story = {
    args: {
        addClass:"bg-random-1",
        iconAddClass:"c-random-1",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_2: Story = {
    args: {
        addClass:"bg-random-2",
        iconAddClass:"c-random-2",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_3: Story = {
    args: {
        addClass:"bg-random-3",
        iconAddClass:"c-random-3",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_4: Story = {
    args: {
        addClass:"bg-random-4",
        iconAddClass:"c-random-4",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_5: Story = {
    args: {
        addClass:"bg-random-5",
        iconAddClass:"c-random-5",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_6: Story = {
    args: {
        addClass:"bg-random-6",
        iconAddClass:"c-random-6",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_7: Story = {
    args: {
        addClass:"bg-random-7",
        iconAddClass:"c-random-7",
        isOval: true,
        iconName: "account",
    },
};
export const Random_color_8: Story = {
    args: {
        addClass:"bg-random-8",
        iconAddClass:"c-random-8",
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