import type { Meta, StoryObj } from "@storybook/react";
import { ManageProgress } from "@/app/pages/manage/ManageProgress";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Pages/Manage/Table",
    component: ManageProgress,
    parameters: {
        layout: "padded",
    },
} satisfies Meta<typeof ManageProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Progress: Story = {
   
};
