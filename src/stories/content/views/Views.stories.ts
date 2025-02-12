import type { Meta, StoryObj } from "@storybook/react";
import { Views } from "@/app/content/views/Views";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Content/Views",
    component: Views,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Views>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
   
};

export const AddView: Story = {
    args: {
        addView: true,
    },
};

export const Badge: Story = {
    args: {
        options: [
            {
                value: "_default",
                label: "All {{items}}",
                active: true,
            },
            {
                value: "draft",
                label: "Draft",
                badge: "1",
            },
            {
                value: "pending",
                label: "Pending review",
                badge: "23",
            },  
            {
                value: "rejected",
                label: "Rejected",
                badge: "4",
            },
            {
                value: "accepted",  
                label: "Accepted",
                badge: "803",
            },
        ],
    },
};

export const Icon: Story = {
    args: {
        options: [
            {
                value: "_default",
                label: "Board",
                icon: "board",
                active: true,
            },
            {
                value: "table",
                label: "Table",
                icon: "table",
            },
            
        ],
    }
};

export const Buttons: Story = {
    args: {
        options: [
            {
                value: "_default",
                label: "Board",
                icon: "board",
                active: true,
            },
            {
                value: "table",
                label: "Table",
                icon: "table",
            },
        ],
        buttons: [
            { label: "Add task", iconStartName: "plus-circle", type: "primary" },
        ],
    },
};
