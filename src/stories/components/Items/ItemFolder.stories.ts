import type { Meta, StoryObj } from "@storybook/react";
import { ItemFolder } from "@/app/components/items/ItemFolder";

const meta = {
    title: "Components/Items/Folder",
    component: ItemFolder,
    parameters: {
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        label: "Folder",
        caption: "9 resources",
        icon: "folder",
        style: {
            width: "24rem",
        },
    },

} satisfies Meta<typeof ItemFolder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    },
};

export const Active: Story = {
    args: {
        active: true,
    },
};

export const Options: Story = {
    args: {
        options: [
            { label: "Edit", iconName: "pencil", onClick: () => {} },
            { label: "Delete", type: "danger", iconName: "delete", onClick: () => {} },
        ],
    },
};

export const CustomIcon: Story = {
    args: {
        icon: "brand-inject",
    },
};
