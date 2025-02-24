import type { Meta, StoryObj } from "@storybook/react";
import { ManageBoard } from "@/app/pages/manage/ManageBoard";

const meta = {
    title: "Pages/Manage/Board",
    component: ManageBoard,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ManageBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   
};
