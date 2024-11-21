import type { Meta, StoryObj } from "@storybook/react";
import { CardObjectives } from "@/app/components/cards/CardObjectives";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Cards/Objectives",
    component: CardObjectives,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
        docs: {
            controls: { sort: "requiredFirst" },
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        date: { control: 'text' },
        dueDate: { control: 'text' },
    },
    args: {
        style: {
            width: "256px",
        },
    },
    
} satisfies Meta<typeof CardObjectives>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
    }
};

export const AllInfo: Story = {
    args: {
        emoji: "👀",
        date: "Oct 1",
        name: "Initial observation points",
        description: "Discover all the techniques and methods of observation to understand your customers",
        tasksNb: 4,
    }
};

export const DueDate: Story = {
    args: {
        emoji: "👀",
        date: "Oct 1",
        dueDate: "31",
        name: "Initial observation points",
        description: "Discover all the techniques and methods of observation to understand your customers",
        tasksNb:4,
    }
};

export const Progressing: Story = {
    args: {
        emoji: "👀",
        date: "Oct 1",
        name: "Initial observation points",
        description: "Discover all the techniques and methods of observation to understand your customers",
        tasksNb:4,
        progress: 1,
    }
};

export const Completed: Story = {
    args: {
        emoji: "👀",
        date: "Oct 1",
        name: "Initial observation points",
        description: "Discover all the techniques and methods of observation to understand your customers",
        tasksNb: 4,
        progress: 4,
    }
};

export const Locked: Story = {
    args: {
        emoji: "👀",
        name: "Initial observation points",
        description: "Discover all the techniques and methods of observation to understand your customers",
        tasksNb: 4,
        progress: 0,
        locked: true,
    }
};

export const LockedWithDate: Story = {
    args: {
        emoji: "👀",
        date: "Oct 1",
        name: "Initial observation points",
        description: "Discover all the techniques and methods of observation to understand your customers",
        tasksNb: 4,
        progress: 0,
        locked: true,
    }
};
