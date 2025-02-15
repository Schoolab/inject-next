import type { Meta, StoryObj } from "@storybook/react";
import { GridCourse } from "@/app/layouts/grids/GridCourse";
import data from "@/data/modules.json";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Layouts/Grids",
    component: GridCourse,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
} satisfies Meta<typeof GridCourse>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Course: Story = {
    args: {
        modules: data.modules,
    }
};
