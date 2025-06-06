import type { Meta, StoryObj } from "@storybook/react";
import { GridObjectives } from "@/app/layouts/grids/GridObjectives";
import data from "@/data/milestones.json";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Layouts/Grids",
    component: GridObjectives,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof GridObjectives>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Objectives: Story = {
    args: {
        milestones: data.milestones,
    }
};
