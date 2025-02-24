import type { Meta, StoryObj } from "@storybook/react";
import { ManageProgress } from "@/app/pages/manage/table/progress/ManageProgress";

const meta = {
    title: "Pages/Manage/Table",
    component: ManageProgress,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ManageProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress: Story = {
   
};
